import { connect } from "mongoose";

export default class Database {
    async init(){
        if(!process.env['MONGODB_URI']){
            console.log(`[MDT] MongoDB Connection URI is not specified in .env. Exitting process... `);
            process.exit(0);
        }
        await connect(process.env['MONGODB_URI']);
        console.log('[MDT] MongoDB Connection set up.')
    }
}
