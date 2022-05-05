/* eslint-disable no-unused-vars */
import React from 'react';
import {
  Box,
  Button,
  Checkbox,
  Container,
  FormControlLabel,
  FormGroup,
  LinearProgress,
  ListItemText,
  Stack,
} from '@mui/material';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import { Link } from 'react-router-dom';

function BasicAssessment() {
  // const [progress, setProgress] = React.useState(0);
  // const [buffer, setBuffer] = React.useState(20);
  //
  // const progressRef = React.useRef(() => {});
  // React.useEffect(() => {
  //   progressRef.current = () => {
  //     if (progress > 100) {
  //       setProgress(0);
  //       setBuffer(10);
  //     } else {
  //       const diff = Math.random() * 10;
  //       const diff2 = Math.random() * 10;
  //       setProgress(progress + diff);
  //       setBuffer(progress + diff + diff2);
  //     }
  //   };
  // });
  //
  // React.useEffect(() => {
  //   const timer = setInterval(() => {
  //     progressRef.current();
  //   }, 1500);
  //
  //   return () => {
  //     clearInterval(timer);
  //   };
  // }, []);

  return (
    <Box sx={{ color: 'black', margin: '0 auto', p: '3rem' }}>
      <Container>
        {/* <LinearProgress variant="buffer" value={progress} valueBuffer={buffer} /> */}
        <Stack direction="row" spacing={1}>
          <Link to="/login">
            <ArrowBackIosIcon />
          </Link>

          <ListItemText>THEME PARTIAL</ListItemText>
        </Stack>
        <Box>
          Что выведет консоль?
          <br />
          <code>console.log(typeof NaN);</code>
        </Box>
        <FormGroup>
          <FormControlLabel control={<Checkbox />} label={<div>123</div>} />
          <FormControlLabel control={<Checkbox />} label="Ответ 2" />
          <FormControlLabel control={<Checkbox />} label="Ответ 3" />
          <FormControlLabel control={<Checkbox />} label="Ответ 4" />
        </FormGroup>
        <Stack spacing={2}>
          <Button variant="outlined">Ответить</Button>
          <Button variant="outlined">Следующий вопрос</Button>
        </Stack>
      </Container>
    </Box>
  );
}

export default BasicAssessment;
