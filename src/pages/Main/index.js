import React from 'react';

import { Container, Content } from './styles';

import Header from '~/components/Header';
import Menu from '~/components/Menu';
import Listing from '~/components/Listing';

const Main = () => (
  <Container>
    <Header />
    <Content>
      <Menu />
      <Listing />
    </Content>
  </Container>
);

export default Main;
