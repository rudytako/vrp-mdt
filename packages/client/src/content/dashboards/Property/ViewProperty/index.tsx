import { useParams } from 'react-router';
import { useEffect, useState } from 'react';
import { Container, Grid, Alert } from '@mui/material';
import PropertyCover from './PropertyCover';
import { IProperty } from '../types/Property';
import { PropertyService } from 'src/services/PropertyService';

const ViewProperty = () => {
  const { id } = useParams();
  const [property, setProperty] = useState<IProperty>({} as IProperty);

  useEffect(() => {
    const fetchProperty = async () => {
      PropertyService.getProperty(id).then((property) => {
        setProperty(property.property);
      });
    }

    fetchProperty().catch(console.error);
  }, []);

  return (
    <>
      {property.uid && (
        <Container sx={{ mt: 3 }} maxWidth="lg">
          <Grid
            container
            direction="row"
            justifyContent="center"
            alignItems="stretch"
            spacing={3}
          >
            <Grid item xs={12} md={8}>
              <PropertyCover property={property} />
            </Grid>
          </Grid>
        </Container>
      )}
    </>
  );
};

export default ViewProperty;
