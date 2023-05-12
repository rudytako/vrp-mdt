import { Router } from "express";
import { body, validationResult } from "express-validator";
import {
  ValidateAuthorization,
  WithPermissions,
} from "../controllers/AccountValidator";
import UnitModel from "../models/UnitModel";

const router = Router();

router.post(
  "/",
  ValidateAuthorization,
  body("name")
    .isString()
    .isLength({ min: 1, max: 50 })
    .custom((value) => {
      return UnitModel.find({ name: value }).then((unit) => {
        if (unit) return Promise.reject("Unit already exists");
      });
    }),
  WithPermissions(["MANAGE_UNITS"]),
  async (req, res) => {
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    await UnitModel.create({
      name: req.body.name,
    });

    return res.json({ success: true });
  }
);

router.delete('/', ValidateAuthorization, WithPermissions(['MANAGE_UNITS']), body('name').isString().custom(value => {
    return UnitModel.find({ name: value }).then(unit => {
        if(!unit) return Promise.reject('Unit does not exist');
    })
}), async (req, res) => {

    await UnitModel.deleteOne({ name: req.body.name });

    return res.json({ success: true });
})

router.get('/', ValidateAuthorization, async (req, res) => {
    const units = await UnitModel.find();

    return res.json({ units });
});