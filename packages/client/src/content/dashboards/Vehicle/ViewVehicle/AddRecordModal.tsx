import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import MenuItem from '@mui/material/MenuItem';
import { useState } from 'react';
import { IVehicle } from '../types/Vehicle';
import { VehiclesService } from 'src/services/VehiclesService';

interface IProps {
  open: boolean;
  vehicle: IVehicle;
  setOpen: (open: boolean) => void;
}

const AddRecordModal: React.FC<IProps> = ({open, vehicle, setOpen}) => {
  const [record, setRecord] = useState('');
  const [type, setType] = useState('');

  const handleClose = () => {
    setOpen(false)
  }

  const handleAddRecord = async () => {
    const newRecord = {
      vehicle: vehicle._id,
      type: type,
      description: record 
    }
    await VehiclesService.addRecord(newRecord);
    handleClose()
  }

  return (
    <>
      <Dialog open={open}>
        <DialogTitle>Dodawanie wpisu</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Dodawanie nowego wpisu do kartoteki {vehicle.plate}.
          </DialogContentText>
          <br />
          <TextField
            autoFocus
            margin="dense"
            id="description"
            label="Opis"
            type="text"
            fullWidth
            variant="standard"
            onChange={(event) => setRecord(event.target.value)}
            value={record}
          />
          <TextField sx={{marginTop: '2rem'}} onChange={(event) => setType(event.target.value)} fullWidth select label="Wybierz typ wpisu">
            <MenuItem value="1">Upomnienie</MenuItem>
            <MenuItem value="2">Cytacja</MenuItem>
            <MenuItem value="3">BOLO</MenuItem>
          </TextField>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Anuluj</Button>
          <Button onClick={handleAddRecord}>Zapisz</Button>
        </DialogActions>
      </Dialog>
    </>
  );
};

export default AddRecordModal;
