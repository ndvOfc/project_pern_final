import React, { useEffect, useRef, useState } from 'react';
import { Container } from '@material-ui/core';
import { useDispatch, useSelector } from 'react-redux';
import { Box, Button } from '@mui/material';
import ModuleItem from './ModuleItem/ModuleItem';
import TopicsItem from './TopicsItem/TopicsItem';
import { getModules } from '../../redux/thunk/moduleAsyncAction';
import Loader from '../UI/Loader/Loader';
import { modulesArr } from './ModuleArrs';
import css from './Modules.module.css';

function Modules() {
  const dispatch = useDispatch();
  const slider = useRef();
  const [translateX, setTranslateX] = useState(0);
  const { modules } = useSelector((state) => state.modulesReducer);

  const leftHandler = () => {
    const { childNodes } = slider.current;
    // eslint-disable-next-line no-return-assign,no-const-assign
    setTranslateX(() => translateX - 10);
    // eslint-disable-next-line no-param-reassign,no-return-assign
    childNodes.forEach((element) => (element.style = `transform:translateX(${translateX}vw)`));
  };
  const rightHandler = () => {
    const { childNodes } = slider.current;
    setTranslateX(() => translateX + 10);
    // eslint-disable-next-line no-param-reassign,no-return-assign
    childNodes.forEach((element) => (element.style = `transform:translateX(${translateX}vw)`));
  };
  useEffect(() => {
    dispatch(getModules());
  }, [dispatch]);

  return (
    <Container className={css.Container}>
      <Box className={css.Box}>
        <Button
          className={(css.Btn, css.Left)}
          variant="outlined"
          size="medium"
          onClick={leftHandler}
        >
          влево
        </Button>
        <Box
          className={css.Slider}
          ref={slider}
          // sx={{
          //   margin: '15px',
          //   display: 'flex',
          //   justifyContent: 'center',
          //   flexWrap: 'nowrap',
          //   '& > :not(style)': {
          //     m: 1,
          //     width: 250,
          //     height: 120,
          //   },
          // }}
        >
          {!modules.length ? (
            <Loader />
          ) : (
            modules.map((module, index) => (
              <ModuleItem
                className={css.ModuleItem}
                key={module.id}
                titleModules={module.titleModules}
                // временное решение пока нет картирки в бд
                img={modulesArr[index].img}
              />
            ))
          )}
        </Box>
        <Button
          className={`${css.Btn} ${css.Right}`}
          variant="outlined"
          size="medium"
          onClick={rightHandler}
        >
          вправо
        </Button>
      </Box>

      <TopicsItem />
    </Container>
  );
}

export default Modules;
