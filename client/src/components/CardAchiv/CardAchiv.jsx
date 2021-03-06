/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { Box, CardMedia, Typography } from '@mui/material';
import React from 'react';

function CardAchiv({ value }) {
  // console.log(value);
  return (
    <Box
      sx={{
        padding: '30px 20px',
        width: '50px',
        height: '50px',
        margin: '20px 20px',
      }}
    >
      <CardMedia src={value.image} alt={value.name} title={value.name} component="img" />
      {/* <Typography sx={{ fontSize: 10 }}>Прогресс: {stat.progress()}</Typography> */}
    </Box>
  );
}

export default CardAchiv;
