import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import { useState } from 'react';
import { reaction } from 'mobx';
import ModalStateStore from 'src/stores/ModalStateStore';

const AddRecordModal = ({ civilian }) => {
  const [open, setOpen] = useState(false);

  const handleClose = () => {
    setOpen(false);
    ModalStateStore.setModalVisible('AddRecordModal', false);
  };

  reaction(
    () => ModalStateStore.modals.includes('AddRecordModal'),
    (value) => {
      setOpen(value);
    }
  );

  return (
    <>
      <Dialog open={open}>
        <DialogTitle>Dodawanie wpisu</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Dodawanie nowego wpisu do kartoteki {civilian.name}.
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
          />
          <TextField
            sx={{ marginTop: '2rem' }}
            fullWidth
            select
            label="Wybierz typ wpisu"
          >
            <MenuItem value="1">Upomnienie</MenuItem>
            <MenuItem value="2">Cytacja</MenuItem>
            <MenuItem value="3">BOLO</MenuItem>
          </TextField>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Anuluj</Button>
          <Button onClick={handleClose}>Zapisz</Button>
        </DialogActions>
      </Dialog>
    </>
  );
};

export default AddRecordModal;
