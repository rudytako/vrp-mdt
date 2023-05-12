import { DangerousOutlined, RemoveRedEye, ReportProblemOutlined } from '@mui/icons-material';
import {
  Container,
  Table,
  TableBody,
  TableRow,
  TableCell,
  Typography,
  TableHead,
  TextField,
  Button,
  Grid,
} from '@mui/material';
import { useState } from 'react';
import { PropertyService } from 'src/services/PropertyService';
import { IProperty } from './types/Property'

const Properties = () => {
  const [properties, setProperties] = useState<IProperty[]>([]);
  const [searchProperty, setSearchProperty] = useState('');

  const fetchProperties = async () => {
    try {
      const properties = await PropertyService.findProperty(searchProperty);
      setProperties(properties.properties);
    } catch (error) {
      console.error(error);
    }
  }

  const handleSearchChange = (event) => {
    setSearchProperty(event.target.value);
  }

  return (
    <div>
      <Container style={{marginTop: '50px'}}>
        <Grid container direction={'column'} alignItems={'center'} justifyContent={'center'}>
          <Typography variant='h1' style={{fontWeight: 600}}>Properties Database</Typography>
          <Typography textAlign={"center"} mt={'30px'} variant='h4' style={{color: '#737373'}}>Due to security issues we can not show you each property. Please search for specific property.</Typography>
          <Typography mt={'10px'} variant='h4' style={{color: '#c75e55'}}>IMPORTANT: Each action will be logged.</Typography>
        </Grid>
        <Grid container direction="row" justifyContent="center">
          <Grid mt={5} item>
            <Grid width={"40rem"} container direction={"column"}>
              <Grid item>
                <TextField value={searchProperty} onChange={handleSearchChange} fullWidth={true} id="outlined-basic" label="Szukaj posiadłości" variant="outlined" />
              </Grid>
              <Grid mt={2} item>
                <Button fullWidth={true} variant="contained" onClick={fetchProperties} >Wyszukaj</Button>
              </Grid>
            </Grid>
          </Grid>
          { properties[0] &&
          <Grid mt={6} item width={'80%'}>
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell>Właściciel</TableCell>
                  <TableCell>Nazwa</TableCell>
                  <TableCell>Typ</TableCell>
                  <TableCell>Adres</TableCell>
                  <TableCell>Akcje</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {properties.map((property) => (
                  <TableRow key={property._id}>
                    <TableCell>
                      <Typography>{property.owner.name}</Typography>
                    </TableCell>
                    <TableCell>
                      <Typography>{property.name}</Typography>
                    </TableCell>
                    <TableCell>
                      <Typography>{property.type}</Typography>
                    </TableCell>
                    <TableCell>
                      <Typography> {property.address} </Typography>
                    </TableCell>
                    <TableCell>
                      <Button href={`/dashboards/viewProperty/${property.pId}`} color="primary" startIcon={<RemoveRedEye />}></Button>
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

export default Properties;
