import { Router, type Request, type Response } from "express";
import { body, validationResult } from "express-validator";
import { ValidateAuthorization } from "../controllers/AccountValidator";
import { WithCharacterPermissions } from "../controllers/CharacterValidator";
import VehicleModel from "../models/VehicleModel";
import RecordModel from "../models/RecordModel";
import { IVehicle } from "../types/Vehicle";
import { IRecord } from "../types/Record";

type QueryType = {
  vehicle: string
}

const router = Router();

router.post(
  "/",
  ValidateAuthorization,
  body("plate").custom((val) => {
    return VehicleModel.findOne({ plate: val }).then((vehicle) => {
      if (vehicle) {
        return Promise.reject("Plate already exists");
      }
    });
  }),
  async (req: Request, res: Response) => {
    const error = validationResult(req);

    if (!error.isEmpty()) {
      return res.status(400).json({ errors: error.array() });
    }
    await VehicleModel.create({
      plate: req.body.plate,
      owner: req.body.owner,
      model: req.body.model,
      color: req.body.color,
      uid: req.body.uid,
      lockedPrice: req.body.lockedPrice,
      lockedBy: { name: req.body.lockedBy.name, uid: req.body.lockedBy.uid},
      records: [],
    });
    return res.json({ success: true });
  }
);

router.patch(
  "/",
  ValidateAuthorization,
  body("plate").custom((val) => {
    return VehicleModel.findOne({ plate: val }).then((vehicle) => {
      if (!vehicle) {
        return Promise.reject("Plate does not exist");
      }
    });
  }),
  WithCharacterPermissions(["MANAGE_VEHICLES"]),
  async (req: Request, res: Response) => {
    const error = validationResult(req);

    if (!error.isEmpty()) {
      return res.status(400).json({ errors: error.array() });
    }

    const modifiedVehicle = await VehicleModel.findOneAndUpdate(
      { plate: req.body.plate },
      {
        model: req.body.model,
        color: req.body.color,
        uid: req.body.uid,
        lockedPrice: req.body.lockedPrice,
        lockedBy: { name: req.body.lockedBy.name, uid: req.body.lockedBy.uid},
        records: req.body.records,        
      },
      { new: true }
    );

    return res.json({ success: true, vehicle: modifiedVehicle });
  }
);

router.get(
  "/",
  ValidateAuthorization,
  WithCharacterPermissions(["MANAGE_VEHICLES"]),
  async (req: Request, res: Response) => {
    const error = validationResult(req);

    if (!error.isEmpty()) {
      return res.status(400).json({ errors: error.array() });
    }

    const vehicles = await VehicleModel.find({});

    return res.json({ success: true, vehicles });
  }
);

router.get('/list', async (req: Request<any, any, any, QueryType>, res: Response) => {
  try {
    const vehicles = await VehicleModel.find({$text: {$search: req.query.vehicle}}).populate('owner');

    res.json({ vehicles });
  } catch (err) {
    console.log(err);
  }
  return;
})

router.delete(
  "/",
  ValidateAuthorization,
  body("plate").custom((val) => {
    return VehicleModel.findOne({ plate: val }).then((vehicle) => {
      if (!vehicle) {
        return Promise.reject("Plate does not exist");
      }
    });
  }),
  WithCharacterPermissions(["MANAGE_VEHICLES"]),
  async (req: Request, res: Response) => {
    await VehicleModel.findOneAndDelete({ plate: req.body.plate });
    return res.json({ success: true });
  }
);

router.get('/:plate',
  //ValidateAuthorization,
  //WithCharacterPermissions(["MANAGE_VEHICLES"]),
  async (req: Request, res: Response) => {
    const vehicle = await VehicleModel.findOne({ plate: req.params.plate }).populate('owner').populate('records');
    console.log(vehicle)
    return res.json({ success: true, vehicle });
  }
);

router.post('/addRecord', 
async (req: Request, res: Response) => {
  const record = req.body
  console.log(record)

  const newRecord: IRecord = new RecordModel({
    addedBy: 'John Doe',
    addedAt: new Date(),
    //character: '420',
    vehicle: record.vehicle,
    type: record.type,
    description: record.description
  })

  const savedRecord = await newRecord.save();

  const vehicle: IVehicle | null = await VehicleModel.findById(record.vehicle).exec();
  if (vehicle !== null) {
    vehicle.records.push(savedRecord._id);
    await vehicle.save();
  }

})

export default router;