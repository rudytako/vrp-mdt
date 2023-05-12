import { DangerousOutlined, RemoveRedEye, ReportProblem, ReportProblemOutlined } from '@mui/icons-material';
import {
  Container,
  Grid,
  Table,
  TextField,
  TableBody,
  TableRow,
  TableCell,
  Typography,
  TableHead,
  Icon,
  Button
} from '@mui/material';
import { useEffect, useState } from 'react';
import { ICivilian } from './types/Civilian';
import { CiviliansService } from 'src/services/CiviliansService';

const Civilians = () => {
  const [civilians, setCivilians] = useState<ICivilian[]>([]);
  const [searchCivilian, setSearchCivilian] = useState('');

  const fetchCivilians = async () => {
    try {
      const civilians = await CiviliansService.findCivilian(searchCivilian);
      setCivilians(civilians.civilians)
    } catch (error) {
      console.error(error);
    }
  }

  const handleSearchChange = (event) => {
    setSearchCivilian(event.target.value);
  }

  return (
    <div>
      <Container style={{ marginTop: '50px' }}>
        <Grid container direction={'column'} alignItems={'center'} justifyContent={'center'}>
          <Typography variant='h1' style={{ fontWeight: 600 }}>Civilians Database</Typography>
          <Typography textAlign={"center"} mt={'30px'} variant='h4' style={{ color: '#737373' }}>Due to security issues we can not show you each civilian. Please search for specific civilian.</Typography>
          <Typography mt={'10px'} variant='h4' style={{ color: '#c75e55' }}>IMPORTANT: Each action will be logged.</Typography>
        </Grid>
        <Grid container direction="row" justifyContent="center">
          <Grid mt={5} item>
            <Grid width={"40rem"} container direction={"column"}>
              <Grid item>
                <TextField value={searchCivilian} onChange={handleSearchChange} fullWidth={true} id="outlined-basic" label="Szukaj cywila" variant="outlined" />
              </Grid>
              <Grid mt={2} item>
                <Button fullWidth={true} variant="contained" onClick={fetchCivilians} >Wyszukaj</Button>
              </Grid>
            </Grid>
          </Grid>
          {civilians[0] &&
            <Grid mt={6} item width={'80%'}>
              <Table>
                <TableHead>
                  <TableRow>
                    <TableCell>Imie i nazwisko</TableCell>
                    <TableCell>Data urodzenia</TableCell>
                    <TableCell>Płeć</TableCell>
                    <TableCell>Akcja</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {civilians.map((civilian) => (
                    <TableRow key={civilian._id}>
                      <TableCell>
                        <Typography>{civilian.name.replace('_', ' ')}</Typography>
                      </TableCell>
                      <TableCell>
                        <Typography>{new Date(civilian.dob).toLocaleDateString('pl-PL')}</Typography>
                      </TableCell>
                      <TableCell>
                        <Typography>
                          {civilian.sex == 0 ? 'Kobieta' : 'Mężczyzna'}
                        </Typography>
                      </TableCell>
                      <TableCell>
                        <Button href={`/dashboards/viewCivilian/${civilian.cId}`} color="primary" startIcon={civilian.unpaidInvoices > 0 ? <ReportProblem /> : <RemoveRedEye />}></Button>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </Grid>}
        </Grid>
      </Container>


      {/* <Container style={{marginTop: '15px'}}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Imie i nazwisko</TableCell>
              <TableCell>Data urodzenia</TableCell>
              <TableCell>Płeć</TableCell>
              <TableCell>Akcja</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {civilians.map((civilian) => (
              <TableRow key={civilian._id}>
                <TableCell>
                  <Typography>{civilian.name.replace('_', ' ')}</Typography>
                </TableCell>
                <TableCell>
                  <Typography>{new Date(civilian.dob).toLocaleDateString('pl-PL')}</Typography>
                </TableCell>
                <TableCell>
                  <Typography>
                    {civilian.sex == 0 ? 'Kobieta' : 'Mężczyzna'}
                  </Typography>
                </TableCell>
                <TableCell>
                  <Button href={`/dashboards/viewCivilian/${civilian.cId}`} color="primary" startIcon={civilian.unpaidInvoices > 0 ? <ReportProblem/> : <RemoveRedEye />}></Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </Container> */}
    </div>
  );
};

export default Civilians;
