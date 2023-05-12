import { Router, type Request, type Response } from "express";
import { body, validationResult } from "express-validator";
import {
  ValidateAuthorization,
  WithPermissions,
} from "../controllers/AccountValidator";
import { WithCharacterPermissions } from "../controllers/CharacterValidator";
import PropertyModel from "../models/PropertyModel";
import CivilianModel from "../models/CivilianModel";
import { IProperty } from "../types/Property";
import RecordModel from "../models/RecordModel";
import GlobalLogService from "../services/GlobalLogService";
import VibeClient from "../services/VibeClient";
import { ICivilian } from "../types/Civilian";
import { Types } from "mongoose";
const router = Router();

type QueryType = {
  property: string
}

router.get('/list', async(req: Request<any, any, any, QueryType>, res: Response) => {
  try {
    const properties = await PropertyModel.find({address: req.query.property}).populate('owner')

    res.json({ properties })
  } catch (err) {
    console.log(err)
  }
  return;
})

router.get('/:id', async(req: Request, res: Response) => {
  try {
    const property = await PropertyModel.findOne({pId: req.params.id}).populate('owner');

    res.json({ property })
  } catch (err) {
    console.log(err);
  }
  return;
})

export default router;
