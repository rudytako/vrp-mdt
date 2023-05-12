import {
  Box,
  Typography,
  Card,
  CardHeader,
  Divider,
  Button,
  Table,
  TableHead,
  TableBody,
  TableRow,
  TableCell,
  Grid,
  Stack,
} from '@mui/material';

import AddTwoToneIcon from '@mui/icons-material/AddTwoTone';
import AddRecordModal from './AddRecordModal';
import ModalStateStore from 'src/stores/ModalStateStore';

function CivilianRecords({ records, civilian }) {
  
  const open = () => {
    ModalStateStore.setModalVisible('AddRecordModal', true);
  }

  return (
    <>
    <AddRecordModal civilian={civilian} />
    <Card>
      <Stack direction={"row"} sx={{
        justifyContent: 'space-between'
      }}>
      <CardHeader title="Kartoteka" />
      <Button
        variant="text"
        color="primary"
        startIcon={<AddTwoToneIcon />}
        onClick={() => open()}
      >
        Dodaj wpis
      </Button>
      </Stack>
      <Divider />
      <Box p={2}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Oficer</TableCell>
              <TableCell>Typ</TableCell>
              <TableCell>Opis</TableCell>
              <TableCell>Data</TableCell>
              <TableCell>Akcja</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {records.map((record) => (
              <TableRow key={record.id}>
                <TableCell>
                  <Typography>{record.addedBy}</Typography>
                </TableCell>
                <TableCell>
                  <Typography>{record.type}</Typography>
                </TableCell>
                <TableCell>
                  <Typography>{record.description}</Typography>
                </TableCell>
                <TableCell>
                  <Typography>
                    {new Date(record.addedAt).toLocaleDateString('pl-PL')}
                  </Typography>
                </TableCell>
                <TableCell>
                  <Button variant="text" color="primary">
                    Usuń
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </Box>
    </Card>
    </>
  );
}

export default CivilianRecords;
