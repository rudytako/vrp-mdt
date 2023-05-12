import AccountModel from "../models/AccountModel";
import { UserAccount, AccountPermission } from "../types/Account";
import * as crypto from "crypto";
import GlobalLogService from "./GlobalLogService";

export default class Account {
  async createUser(user: UserAccount) {
    const salt = crypto.randomBytes(16).toString("hex");
    user.password = crypto
      .pbkdf2Sync(user.password, salt, 1000, 64, `sha512`)
      .toString(`hex`);
    user.salt = salt;
    const createdUser = await AccountModel.create(user);
    return createdUser;
  }

  async deleteUser(userId: string) {
    return await AccountModel.findByIdAndDelete(userId);
  }

  async checkFirstRun() {
    const count = await AccountModel.countDocuments();
    if(count === 0) {
      await this.createUser({
        password: "admin",
        email: "admin@localhost",
        characters: [],
        permissions: ["CREATE_MDT_USERS", "MANAGE_PERMISSIONS", "VIEW_MDT_LOGS", "MDT_ADMIN", "MANAGE_UNITS"]
      });
    }
    await GlobalLogService.createLog("MDT", "Utworzono startowe konto administratora");
    return 
  }
}
