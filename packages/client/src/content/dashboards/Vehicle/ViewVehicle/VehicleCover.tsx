import { Box, Typography } from '@mui/material';

const CivilianCover = ({ vehicle }) => {
  return (
    <>
      <Box py={4} pl={2} mb={3}>
        <Typography gutterBottom variant="h4">
          Okey officer, tutaj to co udało mi się znaleźć o {vehicle.plate}
        </Typography>
        <Typography variant="subtitle2">
          Indeks stanowy: {vehicle.plate}, właściciel {vehicle.owner.name}.{' '}
          <br />
          {vehicle.color[0].toUpperCase() + vehicle.color.slice(1)} {vehicle.model}. <br />
          {vehicle.records.length} wpisów w rejestrze pojazdów.{' '}
          {vehicle.owner.records?.filter((record) => record.active).length || 0}{' '}
          aktywnych wpisów w kartotece właściciela pojazdu.{' '}
        </Typography>
      </Box>
    </>
  );
};

export default CivilianCover;
