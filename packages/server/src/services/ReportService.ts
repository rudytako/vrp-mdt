import ReportModel from "../models/ReportModel";

export class ReportService{

    static async createReport(report: any){
        return await ReportModel.create(report);
    }

    static async getReports(){
        return await ReportModel.find();
    }

    static async getReport(id: string){
        const report = await ReportModel.findById(id);

        if(!report) return null;

        return report;
    }

    static async updateReport(id: string, report: any){
        return ReportModel.findOneAndUpdate({_id: id}, report, {new: true});    
    }

    static async deleteReport(id: string){
        return await ReportModel.findByIdAndDelete(id);
    }
}