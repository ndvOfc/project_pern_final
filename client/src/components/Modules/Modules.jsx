import React, { useEffect } from 'react';
import { Container } from '@material-ui/core';
import { useDispatch, useSelector } from 'react-redux';
import { Box } from '@mui/material';
import ModuleItem from './ModuleItem/ModuleItem';
import TopicsItem from './TopicsItem/TopicsItem';
import { getModules } from '../../redux/thunk/moduleAsyncAction';
import Loader from '../UI/Loader/Loader';
import { modulesArr } from './ModuleArrs';

function Modules() {
  const dispatch = useDispatch();

  const { modules } = useSelector((state) => state.modulesReducer);
  console.log('=======>', modules);
  // console.log(modules);

  useEffect(() => {
    dispatch(getModules());
  }, [dispatch]);

  return (
    <Container>
      <Box
        // className={css.Box}
        sx={{
          margin: '15px',
          display: 'flex',
          justifyContent: 'center',
          flexWrap: 'wrap',
          '& > :not(style)': {
            m: 1,
            width: 250,
            height: 120,
          },
        }}
      >
        {!modules.length ? (
          <Loader />
        ) : (
          modules.map((module, index) => (
            <ModuleItem
              key={module.id}
              titleModules={module.titleModules}
              // временное решение пока нет картирки в бд
              img={modulesArr[index].img}
            />
          ))
        )}
      </Box>

      <TopicsItem />
    </Container>
  );
}

export default Modules;
