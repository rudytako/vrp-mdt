import { Link } from 'react-router-dom';
import { Box, Typography } from '@mui/material';
import { IProperty } from '../types/Property'; 

const PropertyCover = ({ property }: { property: IProperty }) => {
  return (
    <>
      <Box py={4} pl={2} mb={3}>
        <Typography gutterBottom variant="h4">
          Okey officer, tutaj to co udało mi się znaleźć o {property.name}
        </Typography>
        <Typography variant="subtitle2">
          Adres: {property.address} <br />
          Właściciel: <Link to={`/dashboards/viewCivilian/${property.owner.cId}`}>{property.owner.name}</Link>
        </Typography>
      </Box>
    </>
  );
};

export default PropertyCover;
