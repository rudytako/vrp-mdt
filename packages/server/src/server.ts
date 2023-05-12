import express from 'express';
import morgan from 'morgan';
import Database from './services/DatabaseService';
import * as dotenv from 'dotenv';

import UdpService from './services/UdpService';

dotenv.config()

const app = express();
const DatabaseService = new Database();

app.use(morgan('dev'));
app.use(express.urlencoded({ extended: true })); 
app.use(express.json());

import AdminRoutes from './routes/AdminRoutes';
import AccountRoutes from './routes/AccountRoutes';
import CivilianRoutes from './routes/CivilianRoutes';
import PropertyRoutes from './routes/PropertyRoutes';
import CadRoutes from './routes/CadRoutes';
import VehicleRoutes from './routes/VehicleRoutes';
import Account from './services/AccountService';
import ReportRoutes from './routes/ReportRoutes';

app.use('/admin/', AdminRoutes);
app.use('/account/', AccountRoutes);
app.use('/civilian/', CivilianRoutes);
app.use('/property', PropertyRoutes);
app.use('/cad/', CadRoutes);
app.use('/vehicle/', VehicleRoutes);
app.use('/report/', ReportRoutes);

app.listen(3030, async() => {
    DatabaseService.init();
    new UdpService().start();
    await new Account().checkFirstRun();
    console.log('[MDT] MDT-Server listening on port 3030')
})