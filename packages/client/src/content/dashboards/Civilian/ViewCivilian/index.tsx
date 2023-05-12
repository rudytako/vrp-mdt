import { useParams } from 'react-router';
import { useEffect, useState } from 'react';
import { Container, Grid, Alert } from '@mui/material';

import CivilianCover from './CivilianCover';
import CivilianPersonalData from './CivilianPersonalData';

import { CiviliansService } from 'src/services/CiviliansService';
import { ICivilian } from '../types/Civilian';
import CivilianRecords from './CivilianRecords';

const ViewCivilian = () => {
  const { id } = useParams();
  const [user, setUser] = useState({} as ICivilian);
  useEffect(() => {
    const fetchUser = async () => {
      CiviliansService.getCivilian(id).then((civilian) => {
        setUser(civilian.civilian);
      })
    };

    fetchUser().catch(console.error);
  }, []);

  return (
    <>
      {user._id && (
        <Container sx={{ mt: 3 }} maxWidth="lg">
          <Grid
            container
            direction="row"
            justifyContent="center"
            alignItems="stretch"
            spacing={3}
          >
            <Grid item xs={12} md={8}>
              <CivilianCover user={user} />
              <CivilianRecords civilian={user} records={user.records}/>
            </Grid>
            <Grid item xs={12} md={4}>
              <CivilianPersonalData civilian={user} />
            </Grid>
            <Grid item xs={12} md={8}>
            </Grid>
            <Grid item xs={12} md={4}>
            </Grid>
            <Grid item xs={12} md={7}>
              {/* <MyCards /> */}
            </Grid>
            <Grid item xs={12} md={5}>
              {/* <Addresses /> */}
            </Grid>
          </Grid>
        </Container>
      )}
    </>
  );
};

export default ViewCivilian;
