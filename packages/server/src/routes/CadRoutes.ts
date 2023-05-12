import { Router, type Request, type Response } from "express";
import { body, validationResult } from "express-validator";

import {
  ValidateAuthorization,
  WithPermissions,
} from "../controllers/AccountValidator";

import { WithCharacterPermissions } from "../controllers/CharacterValidator";

import CadService from "../services/CadService";
const router = Router();
const CAD = new CadService();

router.post(
  "/",
  ValidateAuthorization,
  body("callsign").custom((val) => {
    if (CAD.getUnitByCallsign(val)) throw new Error("Callsign already exists");
  }),
  async (req: Request, res: Response) => {
    const error = validationResult(req);

    if (!error.isEmpty()) {
      return res.status(400).json({ errors: error.array() });
    }
    CAD.addUnit(
      {
        callsign: req.body.callsign,
        type: req.body.type,
        status: req.body.status,
        division: req.body.division,
      },
      req.body.charId
    );
    return res.json({ success: true });
  }
);

router.patch(
  "/",
  ValidateAuthorization,
  body("callsign").custom((val) => {
    if (!CAD.getUnitByCallsign(val)) throw new Error("Callsign does not exist");
  }),
  async (req: Request, res: Response) => {
    const error = validationResult(req);

    if (!error.isEmpty()) {
      return res.status(400).json({ errors: error.array() });
    }
    CAD.updateUnit(CAD.getUnitByCallsign(req.body.callsign), {
      callsign: req.body.callsign,
      type: req.body.type,
      status: req.body.status,
      division: req.body.division,
    });
    return res.json({ success: true });
  }
);

router.delete(
  "/",
  ValidateAuthorization,
  body("callsign").custom((val) => {
    if (!CAD.getUnitByCallsign(val)) throw new Error("Callsign does not exist");
  }),
  async (req: Request, res: Response) => {
    const error = validationResult(req);

    if (!error.isEmpty()) {
      return res.status(400).json({ errors: error.array() });
    }
    CAD.removeUnit(CAD.getUnitByCallsign(req.body.callsign));
    return res.json({ success: true });
  }
);

export default router;
