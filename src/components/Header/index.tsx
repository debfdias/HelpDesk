import React from 'react';
import auth from "@react-native-firebase/auth";

import { LogoutButton } from '@components/Buttons/LogoutButton';
import { Container, Wrapper, Title, SubTitle } from './styles';

export function Header() {
  function handleSignOut() { 
    auth().signOut();
  }

  return (
    <Container>
      <Wrapper>
        <Title>HelpDesk</Title>
        <SubTitle>Conte aí a sua bronca que vamos te ajudar! :)</SubTitle>
      </Wrapper>
      <LogoutButton onPress={ handleSignOut } />
    </Container>
  );
}