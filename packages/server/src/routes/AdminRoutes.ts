import { Router, type Request, type Response } from "express";
import {
  WithPermissions,
  ValidateAuthorization,
} from "../controllers/AccountValidator";
import AccountService from "../services/AccountService";
import jwt from "jsonwebtoken";
import GlobalLogService from "../services/GlobalLogService";
const router = Router();

const Account = new AccountService();

router.post(
  "/createUser",
  WithPermissions(["CREATE_MDT_USERS"]),
  ValidateAuthorization,
  async (req: Request, res: Response) => {
    const user = req.body;
    const createdUser = await Account.createUser(user);
    await GlobalLogService.createLog('ACCOUNT', `Stworzono konto ${createdUser.email} (${createdUser.id})`);
    res.json(createdUser);
  }
);

export default router;
