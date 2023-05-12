import {
    Box,
    Typography,
    Card,
    CardHeader,
    Divider,
    Avatar,
    useTheme,
    styled,
  } from '@mui/material';
  
  import ShoppingBagTwoToneIcon from '@mui/icons-material/ShoppingBagTwoTone';
  import FavoriteTwoToneIcon from '@mui/icons-material/FavoriteTwoTone';
  import StarTwoToneIcon from '@mui/icons-material/StarTwoTone';
  import Label from 'src/components/Label';
  import AssignmentIndIcon from '@mui/icons-material/AssignmentInd';

  const AvatarPrimary = styled(Avatar)(
    ({ theme }) => `
        background: ${theme.colors.primary.lighter};
        color: ${theme.colors.primary.main};
        width: ${theme.spacing(7)};
        height: ${theme.spacing(7)};
  `
  );
  
  function CivilianPersonalData({civilian}) {
    const theme = useTheme();
  
    const getLicense = (license) => {
        return (
            <Label color={civilian.licenses.includes(license) ? 'success' : 'error'}>{civilian.licenses.includes(license) ? 'TAK' : 'NIE'}</Label>
        )
    }

    return (
      <Card>
        {/* <CardHeader title="Dodatkowe informacje" /> */}
        <Divider />
        <Box px={2} py={4} display="flex" alignItems="flex-start">
          <AvatarPrimary>
            <ShoppingBagTwoToneIcon />
          </AvatarPrimary>
          <Box pl={3} flex={1}>
            <Typography variant="h4">Dodatkowe informacje</Typography>
  
            <Box pt={2} display="flex">
              <Box pr={2}>
                <Typography
                  gutterBottom
                  variant="caption"
                  sx={{ fontSize: `${theme.typography.pxToRem(12)}` }}
                >
                  Wzrost
                </Typography>
                <Typography variant="h4">{civilian.additionalInfo.height || '---'}cm</Typography>
              </Box>
              <Box pr={2}>
                <Typography
                  gutterBottom
                  variant="caption"
                  sx={{ fontSize: `${theme.typography.pxToRem(12)}` }}
                >
                  Waga
                </Typography>
                <Typography variant="h4">{civilian.additionalInfo.weight || '---'}kg</Typography>
              </Box>
              <Box>
                <Typography
                  gutterBottom
                  variant="caption"
                  sx={{ fontSize: `${theme.typography.pxToRem(12)}` }}
                >
                  Kolor oczu
                </Typography>
                <Typography variant="h4">{`${civilian.additionalInfo.eyeColor[0].toUpperCase()}${civilian.additionalInfo.eyeColor.slice(1)}`}</Typography>
              </Box>
            </Box>
          </Box>
        </Box>
        <Divider />
        <Box px={2} py={4} display="flex" alignItems="flex-start">
          <AvatarPrimary>
            <AssignmentIndIcon />
          </AvatarPrimary>
          <Box pl={2} flex={1}>
            <Typography variant="h4">Licencje</Typography>
  
            <Box pt={2} display="flex" textAlign={'center'}>
              <Box pr={2}>
                <Typography
                  gutterBottom
                  variant="caption"
                  sx={{ fontSize: `${theme.typography.pxToRem(12)}` }}
                >
                  Kierowcy
                </Typography>
                <Typography variant="h4">{getLicense('DRIVER')}</Typography>
              </Box>
              <Box pr={2}>
                <Typography
                  gutterBottom
                  variant="caption"
                  sx={{ fontSize: `${theme.typography.pxToRem(12)}` }}
                >
                  CCW
                </Typography>
                <Typography variant="h4">{getLicense('CCW')}</Typography>
              </Box>
              <Box>
                <Typography
                  gutterBottom
                  variant="caption"
                  sx={{ fontSize: `${theme.typography.pxToRem(12)}` }}
                >
                  Zielona karta
                </Typography>
                <Typography variant="h4">{getLicense('GREEN_CARD')}</Typography>
              </Box>
            </Box>
          </Box>
        </Box>
      </Card>
    );
  }
  
  export default CivilianPersonalData;
  