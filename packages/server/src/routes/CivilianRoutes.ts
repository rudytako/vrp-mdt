import { Router, type Request, type Response } from "express";
import { body, validationResult } from "express-validator";
import {
  ValidateAuthorization,
  WithPermissions,
} from "../controllers/AccountValidator";
import { WithCharacterPermissions } from "../controllers/CharacterValidator";
import CivilianModel from "../models/CivilianModel";
import RecordModel from "../models/RecordModel";
import GlobalLogService from "../services/GlobalLogService";
import VibeClient from "../services/VibeClient";

const router = Router();

router.post(
  "/create",
    ValidateAuthorization,
  async (req: Request, res: Response) => {
    //Stwórz nowego cywila, zwróć true jeśli się udało i false jeśli nie
    if (!req.body.charId)
      return res.status(400).json({ message: "Invalid request" });

    const civilian = await CivilianModel.findOne({ cId: req.body.charId });

    if (civilian)
        return res.status(400).json({ message: "Civilian already exists" });

    const char = await VibeClient.getCivilianByCharId(req.body.charId);

    if (!char)
        return res.status(400).json({ message: "Invalid character" });
    
    const newCiv = await CivilianModel.create({
        cId: req.body.charId,
        name: char.name,
        dob: char.dob,
        additionalInfo: {
            height: char.height,
            weight: char.weight,
            eyeColor: char.eyeColor
        },
        unpaidInvoices: 0,
        properties: char.properties,
        vehicles: char.vehicles,
        weapons: [],
        records: [],
        licenses: char.licenses || [],
        sex: char.sex,
    })

    await GlobalLogService.createLog('CIVILIAN', `Stworzono cywila ${newCiv.name} (${newCiv.cId})`);

    return res.json({ success: true, civilian: newCiv });

  }
);

router.post('/record', body('civId').isNumeric(), body('type').isNumeric(), body('description').isString(), body('officer').isString(), async(req: Request, res: Response) => {
    //Dodaj nowy rekord do cywila

    const errors = validationResult(req);

    if (!errors.isEmpty())
        return res.status(400).json({ errors: errors.array() });

    const { civId, type, description, officer } = req.body;

    const civilian = await CivilianModel.findOne({ cId: civId });

    if (!civilian)
        return res.status(400).json({ message: "Civilian doesn't exist" });

    const record = await RecordModel.create({
        type,
        description,
        addedBy: officer,
        character: civilian._id,
        addedAt: new Date()
    });

    civilian.records.push((record as any)._id);

    await civilian.save();

    await GlobalLogService.createLog('CIVILIAN', `Dodano rekord ${type} dla cywila ${civilian.name} (${civilian.cId})`);

    return res.json({ success: true, record });
})

router.get('/list', async(req: Request, res: Response) => {
    try {
        const civilians = await CivilianModel.find({name: req.query.civilian});
        
        res.json({ civilians });
    } catch (err) {
        console.log(err)
    }
    return;
})


router.get('/:id', async(req: Request, res: Response) => {
    try {
        console.log(req.params.id)
        console.log(typeof req.params.id)
        const civilian = await CivilianModel.findOne({ cId: req.params.id }).populate('properties');
        console.log(civilian)

        res.json({ civilian });
    } catch (err) {
        console.log(err);
    }
    return;
})

router.delete('/record/:recordId', async(req: Request, res: Response) => {
    //Usuń rekord o podanym id
    const record = await RecordModel.findOne({ _id: req.params.recordId });
    if (!record)
        return res.status(400).json({ message: "Record doesn't exist" });

    const civilian = await CivilianModel.findOne({ $in: { records: record._id } });

    if (!civilian)
        return res.status(400).json({ message: "Civilian doesn't exist" });

    civilian.records = civilian.records.filter((r) => r !== record._id);

    await civilian.save();

    await RecordModel.deleteOne({ _id: req.params.recordId });

    await GlobalLogService.createLog('CIVILIAN', `Usunięto rekord ${record.type} dla cywila ${civilian.name} (${civilian.cId})`);

    return res.json({ success: true });
})


export default router;
