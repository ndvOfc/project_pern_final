import React, { useEffect } from 'react';
import { Container } from '@material-ui/core';
import { useDispatch, useSelector } from 'react-redux';
import ModuleItem from './ModuleItem/ModuleItem';
import TopicsItem from './TopicsItem/TopicsItem';
import { getModules } from '../../redux/thunk/moduleAsyncAction';

function Modules() {
  const dispatch = useDispatch();
  // console.log(modules);

  useEffect(() => {
    dispatch(getModules());
  }, [dispatch]);
  const { modules } = useSelector((state) => state.modulesReducer);
  console.log('=======>', modules);
  return (
    <Container>
      <ModuleItem />
      <TopicsItem />
    </Container>
  );
}

export default Modules;
