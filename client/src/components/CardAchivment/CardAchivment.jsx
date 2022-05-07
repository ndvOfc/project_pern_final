/* eslint-disable react/prop-types */
import { Box, CardMedia, Typography } from '@mui/material';
import React from 'react';

function CardAchivment({ stat }) {
  console.log(stat);
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
      <CardMedia src={stat.image} alt={stat.name} title="Achivment" component="img" />
      <Typography sx={{ fontSize: 10 }}>Прогресс: {stat.progress()}</Typography>
    </Box>
  );
}

export default CardAchivment;
