import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TablePagination,
  TableRow,
  TableContainer,
  Typography,
  Chip
} from '@mui/material';

export default () => {
  type Unit_Status = 'FREE' | 'BUSY';

  const MOCK_UNITS = [
    {
      callsign: '27E10',
      unit: 'West Traffic Division',
      status: 'FREE'
    },
    {
      callsign: '27E11',
      unit: 'West Traffic Division',
      status: 'BUSY'
    },
    {
      callsign: '27E12',
      unit: 'West Traffic Division',
      status: 'FREE'
    },
    {
      callsign: '27E13',
      unit: 'West Traffic Division',
      status: 'FREE'
    },
    {
      callsign: '27E11',
      unit: 'West Traffic Division',
      status: 'BUSY'
    },
    {
      callsign: '27E12',
      unit: 'West Traffic Division',
      status: 'FREE'
    },
    {
      callsign: '27E13',
      unit: 'West Traffic Division',
      status: 'FREE'
    },
    {
      callsign: '27E11',
      unit: 'West Traffic Division',
      status: 'BUSY'
    }
  ];

  const UNIT_STATUS_COLOR = {
    FREE: 'success',
    BUSY: 'warning'
  };

  const UNIT_NORMALISED_STATUS = {
    FREE: 'WOLNA',
    BUSY: 'ZAJĘTA'
  }

  return (
    <>
      <TableContainer>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>CALLSIGN</TableCell>
              <TableCell>UNIT</TableCell>
              <TableCell>STATUS</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {MOCK_UNITS.map((unit) => (
              <>
                <TableRow>
                  <TableCell key={unit.callsign}>
                    <Typography>{unit.callsign}</Typography>
                  </TableCell>
                  <TableCell>
                    <Typography>{unit.unit}</Typography>
                  </TableCell>
                  <TableCell>
                    <Chip
                      label={UNIT_NORMALISED_STATUS[unit.status]}
                      color={UNIT_STATUS_COLOR[unit.status]}
                        variant="outlined"
                    />
                  </TableCell>
                </TableRow>
              </>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
};
