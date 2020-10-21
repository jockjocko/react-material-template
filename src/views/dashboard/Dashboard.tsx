import React from 'react';
import { Box, Breadcrumbs, Container, Typography } from '@material-ui/core';
import Page from '../../components/page/Page';

interface Props {}

export const Dashboard: React.FunctionComponent<Props> = () => {
  return (
    <Page title={'Dashboard'}>
      <Container>
        <Box mt={3} mb={2}>
          <Breadcrumbs aria-label="breadcrumb">
            <Typography variant="h6">Dashboard</Typography>
          </Breadcrumbs>
        </Box>
      </Container>
    </Page>
  );
};

export default Dashboard;
