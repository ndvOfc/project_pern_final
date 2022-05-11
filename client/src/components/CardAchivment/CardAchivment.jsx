/* eslint-disable react/prop-types */
import { Box, CardMedia, Typography } from '@mui/material';
import React from 'react';

function CardAchivment({ el }) {
  // console.log(el);
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        maxWidth: '15vw',
        margin: '4vw',
      }}
    >
      <CardMedia src={el.image} alt={el.name} title="Achivment" component="img" />
      <Typography sx={{ fontSize: '1em' }}>Прогресс: {el.progress()}</Typography>
    </Box>
  );
}

export default CardAchivment;
