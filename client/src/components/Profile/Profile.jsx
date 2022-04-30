import { Box, Grid, Paper } from '@mui/material';
import { styled } from '@mui/material/styles';
import React from 'react';

function Profile() {
  const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(),
    textAlign: 'center',
    color: theme.palette.text.secondary,
    height: '300px',
  }));

  return (
    <>
      <Box sx={{ padding: '30px 20px', width: 800, margin: '20px auto' }}>
        <Grid container spacing={1}>
          <Grid item xs={4}>
            <Item>
              <Box>sdsdsd</Box>
              <Box>sdsds</Box>
            </Item>
          </Grid>
          <Grid item xs={8}>
            <Item>xs=4</Item>
          </Grid>
          <Grid item xs={12}>
            <Item>xs=4</Item>
          </Grid>
        </Grid>
      </Box>
      <Box sx={{ display: 'flex' }}>
        <Paper elevation={10} sx={{ width: 300, margin: '20px 0' }} />
        <Paper elevation={10} sx={{ padding: '30px 20px', width: 300, margin: '20px auto' }} />
        <Paper elevation={10} sx={{ padding: '30px 20px', width: 300, margin: '20px' }} />
      </Box>
    </>
  );
}

export default Profile;
