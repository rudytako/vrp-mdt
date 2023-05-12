import type { NextFunction, Request, Response } from "express";
import * as ErrorCodes from "../types/ErrorCodes";
import jwt from "jsonwebtoken";
import { AccountPermission } from "../types/Account";
import { FixObjectData } from "../utils/DataUtilities";

export const ValidateLoginRequest = (req: Request, res: Response, next: NextFunction) => {
  if (!req.body)
    return res
      .status(ErrorCodes.INVALID_LOGIN_BODY.code)
      .json({ message: ErrorCodes.INVALID_LOGIN_BODY.message });

  if (!req.body.email || !req.body.password)
    return res
      .status(ErrorCodes.INVALID_LOGIN_BODY.code)
      .json({ message: ErrorCodes.INVALID_LOGIN_BODY.message });

  return next();
};

export const ValidateAuthorization = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  if (!req.headers["authorization"])
    return res
      .status(ErrorCodes.FORBIDDEN.code)
      .json({ message: ErrorCodes.FORBIDDEN.message });

  jwt.verify(
    req.headers["authorization"],
    String(process.env["JWT_SECRET"]),
    (err, decoded) => {
      if (err?.message.includes("jwt malformed"))
        return res
          .status(ErrorCodes.FORBIDDEN.code)
          .json({ message: ErrorCodes.FORBIDDEN.message });
      next();
    }
  );
};

export const WithPermissions = (permissions: AccountPermission[]) => {
  return (req: Request, res: Response, next: NextFunction) => {
    if (!req.headers["authorization"])
      return res
        .status(ErrorCodes.FORBIDDEN.code)
        .json({ message: ErrorCodes.FORBIDDEN.message });

    
    const decoded = jwt.decode(req.headers["authorization"]);
    permissions.forEach((permission) => {
      if (!FixObjectData(decoded).permissions.includes(permission))
        return res
          .status(ErrorCodes.MISSING_ACCESS.code)
          .json({ message: ErrorCodes.MISSING_ACCESS.message });
    });
    next()
  };
};
