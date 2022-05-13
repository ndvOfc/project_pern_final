import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import ModalCard from '../../UI/Modal/Modal';
// import { content } from '../content';

// eslint-disable-next-line react/prop-types
export default function CardInfo({ tittle, description, intro, img }) {
  return (
    <Card
      sx={{
        maxWidth: 345,
        margin: 2,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
      }}
    >
      <CardMedia component="img" width="3rem" image={img} alt="green iguana" />
      <CardContent sx={{ display: 'flex', flexDirection: 'column' }}>
        <Typography gutterBottom variant="h5" component="div">
          {tittle}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {intro}
        </Typography>
      </CardContent>
      <CardActions>
        <ModalCard tittle={tittle} description={description} />
      </CardActions>
    </Card>
  );
}
