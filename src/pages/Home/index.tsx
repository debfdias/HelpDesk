import React from 'react';

import { Header } from '@components/Header';
import { Orders } from '@pages/Orders';
import { NewOrder } from '@pages/NewOrder';

import { Container } from './styles';

export function Home() {
  return (
    <Container>
      <Header />
      <Orders />
      <NewOrder />
    </Container>
  );
}