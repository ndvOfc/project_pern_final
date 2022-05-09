/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { Box, CardMedia, Typography } from '@mui/material';
import React from 'react';

function CardAchiv({ value }) {
  console.log(value);
  return (
    <Box
      sx={{
        padding: '30px 20px',
        width: '50px',
        height: '50px',
        margin: '20px 20px',
        border: 'dashed red',
      }}
    >
      <CardMedia src={value.image} alt={value.name} title="Achiv" component="img" />
      {/* <Typography sx={{ fontSize: 10 }}>Прогресс: {stat.progress()}</Typography> */}
    </Box>
  );
}

export default CardAchiv;
