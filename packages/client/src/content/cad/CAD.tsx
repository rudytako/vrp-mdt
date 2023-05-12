import PageTitleWrapper from 'src/components/PageTitleWrapper';
import PageHeader from './PageHeader';
import { Grid, Container } from '@mui/material';
import Footer from 'src/components/Footer';
import UnitsTable from './UnitsTable';
import SetCAD from './SetCAD';

function CAD() {
  return (
    <>
      <PageTitleWrapper>
        <PageHeader />
      </PageTitleWrapper>
      <Container maxWidth="xl">
        <Grid
          container
          direction="row"
          justifyContent="center"
        //   alignItems="stretch"
          spacing={3}
        >
          <Grid item xs={9}>
            <UnitsTable />
          </Grid>
          <Grid item xs={3}>
           <SetCAD/>
          </Grid>
        </Grid>
      </Container>
      <Footer />
    </>
  );
}

export default CAD;
