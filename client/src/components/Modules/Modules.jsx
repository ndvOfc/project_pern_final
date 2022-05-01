import React, { useEffect } from 'react';
import { Container } from '@material-ui/core';
import { useDispatch, useSelector } from 'react-redux';
import ModuleItem from './ModuleItem/ModuleItem';
import TopicsItem from './TopicsItem/TopicsItem';
import { getModules } from '../../redux/thunk/moduleAsyncAction';

function Modules() {
  const dispatch = useDispatch();
  const { modules } = useSelector((state) => state.modules);
  console.log(modules);
  useEffect(() => {
    return dispatch(getModules());
    // console.log(modules);
  }, [dispatch]);
  return (
    <Container>
      <ModuleItem />
      <TopicsItem />
    </Container>
  );
}

export default Modules;
