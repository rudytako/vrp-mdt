import {
    TextField,
    Dialog,
    DialogContent,
    Button
} from '@mui/material';

import Grid from '@mui/material/Grid';

import Typography from '@mui/material/Typography';

import { useState } from 'react';

export default () => {

    const [state, setState] = useState({ email: '', password: '' });

    return (
        <Dialog open={true}>
            <DialogContent sx={{ textAlign: 'center' }}>
                <Grid container direction={'column'} rowSpacing={'20px'}>
                    <Grid item>
                        <Typography variant="h2">Rejestracja w systemie MDT</Typography>
                    </Grid>
                    <Grid item>
                        <TextField
                            label="Email"
                            value={state.email}
                            onChange={(e) => setState({ ...state, email: e.target.value })}
                        />
                    </Grid>
                    <Grid item>
                        <TextField

                            label="Hasło"
                            value={state.password}
                            onChange={(e) => setState({ ...state, password: e.target.value })}
                        />
                    </Grid>
                <Grid item>
                    <Button variant="contained" color="primary">
                        Zarejestruj
                    </Button>
                </Grid>
                </Grid>
            </DialogContent>
        </Dialog>
    );
};