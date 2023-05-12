import { Router, type Request, type Response } from "express";
import jwt from 'jsonwebtoken';
import { ValidateLoginRequest } from "../controllers/AccountValidator";
import AccountModel from "../models/AccountModel";
import * as crypto from "crypto";
import GlobalLogService from "../services/GlobalLogService";
const router = Router();

router.post('/login', ValidateLoginRequest, async(req: Request, res: Response) => {
    const { email, password } = req.body;

    const account = await AccountModel.findOne({ email });

    if (!account)
        return res.status(401).json({ message: 'Invalid username or password' });

    const hash = crypto.pbkdf2Sync(password, String(account.salt), 1000, 64, `sha512`).toString(`hex`);    

    if(hash !== account.password) 
        return res.status(401).json({ message: 'Invalid username or password' });

    const token = jwt.sign({ id: account._id, permissions: account.permissions }, String(process.env["JWT_SECRET"]), { expiresIn: '6h' });

    await GlobalLogService.createLog('ACCOUNT', `Zalogowano się na konto ${account.email} (${account._id})`)

    return res.json({ token });
})

export default router;