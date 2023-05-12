import {Router} from 'express';
import { ReportService } from '../services/ReportService';
import { ValidateAuthorization } from '../controllers/AccountValidator';
import { ValidateCharacter } from '../controllers/CharacterValidator';
import { WithCharacterPermissions } from '../controllers/CharacterValidator';
const router = Router();

router.use(ValidateAuthorization);
router.use(ValidateCharacter);
router.use(WithCharacterPermissions(['MANAGE_REPORT']));

router.get('/', async (req, res) => {
    const reports = await ReportService.getReports();
    return res.json(reports);
})

router.get('/:id', async (req, res) => {
    const report = await ReportService.getReport(req.params.id);
    return res.json(report);
})

router.post('/', async (req, res) => {
    const report = await ReportService.createReport(req.body);
    return res.json(report);
})

router.patch('/:id', async (req, res) => {
    const report = await ReportService.updateReport(req.params.id, req.body);
    return res.json(report);
})

router.delete('/:id', async (req, res) => {
    const report = await ReportService.deleteReport(req.params.id);
    return res.json(report);
})


export default router;