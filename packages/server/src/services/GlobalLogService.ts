import { GlobalLogModel } from "../models/GlobalLogModel";

export default class GlobalLogService {
  static async createLog(type: string, message: string, data?: any) {
    return await GlobalLogModel.create({
      type,
      message,
      date: new Date(),
      data,
    });
  }
}
