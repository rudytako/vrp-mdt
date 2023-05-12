import CivilianModel from "../models/CivilianModel";
import AccountModel from "../models/AccountModel";
import CharacterModel from "../models/CharacterModel";
import Account from "../services/AccountService";
import { CharacterPermission, UserAccount } from "../types/Account";
import { Request, Response, NextFunction } from "express";
import jwt from 'jsonwebtoken'

export const WithCharacterPermissions = (
  permissions: CharacterPermission[]
) => {
  return async (req: Request, res: Response, next: NextFunction) => {
    const account = await AccountModel.findById((jwt.decode(req.headers["authorization"] as string) as UserAccount)._id);
    const character = await CharacterModel.findById(req.headers["character"]);
    if (!account || !character)
      return res.status(401).json({ message: "Invalid character or account" });

    if (account._id !== character.user) {
      return res.status(401).json({ message: "Invalid character or account" });
    }

    permissions.forEach((permission) => {
      if (!character.permissions.includes(permission))
        return res.status(401).json({ message: "Missing access" });
    });
    next();
  };
};

export const ValidateCharacter = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const character = await CharacterModel.findById(req.headers["character"]);
  if (!character) return res.status(401).json({ message: "Invalid character" });
  next();
};
