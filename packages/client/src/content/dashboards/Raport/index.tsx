import {
  Container,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  Button
} from '@mui/material';
import Chip from '@mui/material/Chip';

export default () => (
  <>
    <Container style={{ marginTop: '15px' }}>
      <Table>
        <TableHead>
          <TableRow sx={{textAlign: 'center'}}>
            <TableCell>Nazwa raportu</TableCell>
            <TableCell>Status</TableCell>
            <TableCell>Akcja</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          <TableRow>
            <TableCell>#0001 - Sprawa kradzieży Volvo Magika</TableCell>
            <TableCell><Chip label="W TOKU" color="warning" /></TableCell>
            <TableCell>
              <Button variant="text" color="primary">
                Podgląd
              </Button>
            </TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </Container>
  </>
);
