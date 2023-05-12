import { DangerousOutlined, RemoveRedEye, ReportProblem, ReportProblemOutlined } from '@mui/icons-material';
import {
  Container,
  Table,
  TableBody,
  Grid,
  TextField,
  TableRow,
  TableCell,
  Typography,
  TableHead,
  Icon,
  Button
} from '@mui/material';
import { useState } from 'react';
import { VehiclesService } from 'src/services/VehiclesService';
import { IVehicle } from './types/Vehicle';

const Vehicle = () => {
  const [vehicles, setVehicles] = useState<IVehicle[]>([]);
  const [searchVehicle, setSearchVehicle] = useState('');

  const fetchVehicles = async () => {
    try {
      const vehicles = await VehiclesService.findVehicle(searchVehicle);
      setVehicles(vehicles.vehicles);
    } catch (error) {
      console.error(error);
    }    
  }

  const handleSearchChange = (event) => {
    setSearchVehicle(event.target.value);
  }

  return (
    <div>
      <Container style={{marginTop: '50px'}}>
        <Grid container direction={'column'} alignItems={'center'} justifyContent={'center'}>
          <Typography variant='h1' style={{fontWeight: 600}}>Vehicles Database</Typography>
          <Typography textAlign={"center"} mt={'30px'} variant='h4' style={{color: '#737373'}}>Due to security issues we can not show you each vehicle. Please search for specific vehicle.</Typography>
          <Typography mt={'10px'} variant='h4' style={{color: '#c75e55'}}>IMPORTANT: Each action will be logged.</Typography>
        </Grid>
        <Grid container direction="row" justifyContent="center">
          <Grid mt={5} item>
            <Grid width={"40rem"} container direction={"column"}>
              <Grid item>
                <TextField value={searchVehicle} onChange={handleSearchChange} fullWidth={true} id="outlined-basic" label="Szukaj pojazdu" variant="outlined" />
              </Grid>
              <Grid mt={2} item>
                <Button fullWidth={true} variant="contained" onClick={fetchVehicles} >Wyszukaj</Button>
              </Grid>
            </Grid>
          </Grid>
          { vehicles[0] &&
          <Grid mt={6} item width={'80%'}>
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell>Włąściciel</TableCell>
                  <TableCell>Indeks stanowy</TableCell>
                  <TableCell>Model</TableCell>
                  <TableCell>Akcja</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {vehicles.map((vehicle) => (
                  <TableRow key={vehicle._id}>
                    <TableCell>
                      <Typography>{vehicle.owner.name}</Typography>
                    </TableCell>
                    <TableCell>
                      <Typography>{vehicle.plate}</Typography>
                    </TableCell>
                    <TableCell>
                      <Typography>{vehicle.model}</Typography>
                    </TableCell>
                    <TableCell>
                      <Button href={`/dashboards/viewVehicle/${vehicle.plate}`} color="primary" startIcon={<RemoveRedEye />}></Button>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </Grid>}
        </Grid>
      </Container>
    </div>
  );
};

export default Vehicle;
