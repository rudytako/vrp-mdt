import { useParams } from 'react-router';
import { useEffect, useState } from 'react';
import { Container, Grid, Alert } from '@mui/material';

import VehicleCover from './VehicleCover';

import { VehiclesService } from 'src/services/VehiclesService';
import { IVehicle } from '../types/Vehicle';
import VehicleRecords from './VehicleRecord';

const ViewVehicle = () => {
  const { id } = useParams();
  const [vehicle, setVehicle] = useState<IVehicle>({} as IVehicle);

  useEffect(() => {
    const fetchVehicle = async () => {
      VehiclesService.getVehicle(id).then((vehicle) => {
        setVehicle(vehicle.vehicle);
      });
    }

    fetchVehicle().catch(console.error);
  }, []);

  return (
    <>
      {vehicle.uid && (
        <Container sx={{ mt: 3 }} maxWidth="lg">
          <Grid
            container
            direction="row"
            justifyContent="center"
            alignItems="stretch"
            spacing={3}
          >
            <Grid item xs={12} md={8}>
              <VehicleCover vehicle={vehicle} />
              <VehicleRecords vehicle={vehicle} records={vehicle.records}/>
            </Grid>
          </Grid>
        </Container>
      )}
    </>
  );
};

export default ViewVehicle;
