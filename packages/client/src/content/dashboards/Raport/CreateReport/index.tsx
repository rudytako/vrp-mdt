import {
  Container,
  Grid,
  MenuItem,
  Table,
  TextField,
  Typography,
  Button
} from '@mui/material';

import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
export default () => {
  return (
    <>
      <Container >
        <Grid container direction={'column'} margin={'15px'} spacing={'20'} sx={{marginBottom: '20rem'}}>
          <Grid item>
            <Typography variant="h4" component="h1" gutterBottom>
              Informacje ogólne
            </Typography>
          </Grid>
          <Grid item>
            <TextField label="Nazwa raportu" variant="outlined" fullWidth />
          </Grid>
          <Grid item>
            <TextField
              select
              label="Status raportu"
              variant="outlined"
              fullWidth
            >
              {/* ACTIVE, SUSPENDED, ARCHIVE, CLOSED */}
              <MenuItem value="ACTIVE">Aktywny</MenuItem>
              <MenuItem value="SUSPENDED">Zawieszony</MenuItem>
              <MenuItem value="ARCHIVE">Archiwalny</MenuItem>
              <MenuItem value="CLOSED">Zamknięty</MenuItem>
            </TextField>
          </Grid>
          <Grid item>
            <TextField label="Data raportu" variant="outlined" fullWidth />
          </Grid>
          <Grid item>
            <TextField label="Lokalizacja" variant="outlined" fullWidth />
          </Grid>
          <Grid item>
            <TextField label="Agencje" variant="outlined" fullWidth />
          </Grid>
          <Grid item>
            <Grid container dir={'row'} justifyContent={'space-between'}>
              <Grid item>
                <Typography variant="h4" component="h1" gutterBottom>
                  Oficerowie
                </Typography>
              </Grid>
              <Grid item>
                <Button variant="contained" color="primary">
                  Dodaj oficera
                </Button>
              </Grid>
            </Grid>
            <br />
            <Grid container dir={'row'} spacing={'15'} textAlign={'center'}>
              <Grid item>
                <TextField
                  label="Dane osobowe"
                  variant="outlined"
                  fullWidth
                  sx={{ width: '20.5rem' }}
                />
              </Grid>
              <Grid item>
                <TextField
                  select
                  label="Ranga"
                  variant="outlined"
                  fullWidth
                  sx={{ width: '22rem' }}
                >
                  <MenuItem value="po1">Police Officer 1</MenuItem>
                  <MenuItem value="po2">Police Officer 2</MenuItem>
                  <MenuItem value="po3">Police Officer 3</MenuItem>
                  <MenuItem value="pd1">Police Detective 1</MenuItem>
                  <MenuItem value="pd2">Police Detective 2</MenuItem>
                  <MenuItem value="pd3">Police Detective 3</MenuItem>
                  <MenuItem value="sg1">Sergeant 1</MenuItem>
                  <MenuItem value="sg2">Sergeant 2</MenuItem>
                  <MenuItem value="lt">Lieutenant</MenuItem>
                  <MenuItem value="capt">Captain</MenuItem>
                </TextField>
              </Grid>
              <Grid item>
                <TextField
                  label="Notatka"
                  variant="outlined"
                  fullWidth
                  sx={{ width: '32rem' }}
                />
              </Grid>
            </Grid>
          </Grid>
          <Grid item>
            <Grid container dir={'row'} justifyContent={'space-between'}>
              <Grid item>
                <Typography variant="h4" component="h1" gutterBottom>
                  Cywile
                </Typography>
              </Grid>
              <Grid item>
                <Button variant="contained" color="primary">
                  Dodaj cywila
                </Button>
              </Grid>
            </Grid>
            <br />
            <Grid container dir={'row'} spacing={'15'} textAlign={'center'}>
              <Grid item>
                <TextField
                  label="Dane osobowe"
                  variant="outlined"
                  fullWidth
                  sx={{ width: '20.5rem' }}
                />
              </Grid>
              <Grid item>
                <TextField
                  select
                  label="Status"
                  variant="outlined"
                  fullWidth
                  sx={{ width: '22rem' }}
                >
                  <MenuItem value="suspect">Podejrzany</MenuItem>
                  <MenuItem value="witness">Świadek</MenuItem>
                  <MenuItem value="victim">Ofiara</MenuItem>
                  <MenuItem value="spectator">Obserwator</MenuItem>
                </TextField>
              </Grid>
              <Grid item>
                <TextField
                  label="Notatka"
                  variant="outlined"
                  fullWidth
                  sx={{ width: '32rem' }}
                />
              </Grid>
            </Grid>
          </Grid>
          <Grid item>
            <Typography variant="h4" component="h1" gutterBottom>
              Narrative
            </Typography>
            <CKEditor editor={ClassicEditor} />
          </Grid>
          <Grid item>
            <Grid container dir={'row'} justifyContent={'space-between'}>
              <Grid item>
                <Typography variant="h4" component="h1" gutterBottom>
                  Materiały dowodowe
                </Typography>
              </Grid>
              <Grid item>
                <Button variant="contained" color="primary">
                  Dodaj dowód
                </Button>
              </Grid>
            </Grid>
            <br />
            <Grid container dir={'row'} spacing={'15'} textAlign={'center'}>
              <Grid item>
                <TextField
                  label="Nazwa"
                  variant="outlined"
                  fullWidth
                  sx={{ width: '20.5rem' }}
                />
              </Grid>
              <Grid item>
                <TextField
                  label="Notatka"
                  variant="outlined"
                  fullWidth
                  sx={{ width: '54rem' }}
                />
              </Grid>
            </Grid>
          </Grid>
          <Grid item>
            <Typography variant="h4" component="h1" gutterBottom>
              Summary
            </Typography>
            <CKEditor editor={ClassicEditor} />
          </Grid>
        </Grid>
      </Container>
    </>
  );
};
