import { Container } from '@material-ui/core';
import React from 'react';
import ModuleItem from './ModuleItem/ModuleItem';
import TopicsItem from './TopicsItem/TopicsItem';

function Modules() {
  return (
    <Container>
      <ModuleItem />
      <TopicsItem />
    </Container>
  );
}

export default Modules;
