import {
  Input,
  Typography,
  Chip,
  Button,
  Container,
  Grid,
  Select,
  Divider,
  TextField,
  MenuItem,
} from '@mui/material';

export default () => {
  return (
    <>
      <Grid container direction={"column"} spacing={3} maxWidth={'sm'} alignItems={'center'} textAlign={'center'}>
        <Grid item>
          <TextField id="outlined-basic" label="Callsign" variant="outlined" />
        </Grid>
        <Grid item>
          <TextField select fullWidth label={'Typ jednostki'} sx={{width: '15rem'}}>
           <MenuItem value="1">West Traffic Division</MenuItem>
            <MenuItem value="2">East Traffic Division</MenuItem>
            <MenuItem value="3">North Traffic Division</MenuItem>
            <MenuItem value="4">South Traffic Division</MenuItem>
          </TextField>
        </Grid>
        <Grid item>
          <TextField select label={'Status jednostki'} sx={{width: '15rem'}}>
            <MenuItem value="1" selected>WOLNA</MenuItem>
            <MenuItem value="2">ZAJĘTA</MenuItem>
          </TextField>
        </Grid>
        <Grid item>
        <Button variant="contained" fullWidth={false}>Wpisz do systemu CAD</Button>
        </Grid>
      </Grid>
    </>
  );
};
