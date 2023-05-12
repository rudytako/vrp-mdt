import PropTypes from 'prop-types';
import {
  Box,
  Typography,
} from '@mui/material';

const CivilianCover = ({ user }) => {

  const fixSex = (female, male) => {
    return user.sex == 0 ? female : male;
  }

  return (
    <>
      <Box py={4} pl={2} mb={3}>
        <Typography gutterBottom variant="h4">
          {user.name}
        </Typography>
        <Typography variant="subtitle2">{fixSex('Kobieta', 'Mężczyzna')}, urodzon{fixSex('a', 'y')} {new Date(user.dob).toLocaleDateString('pl-PL')}.<br/>{(!user.properties || user.properties?.length == 0)  ? 'Brak danych o miejscu zamieszkania' : `Zamieszkuje ${user.properties[0].address}`}. <br/>{user.name} nie opłacił {fixSex('a', '')} łącznie ${user.unpaidInvoices || '0'} wartości cytacji.</Typography>
      </Box>
    </>
  );
};

CivilianCover.propTypes = {
  // @ts-ignore
  user: PropTypes.object.isRequired
};

export default CivilianCover;
