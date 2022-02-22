import React from 'react';
import { RectButtonProps } from 'react-native-gesture-handler';

import { Container, Title, Loading } from './styles';

type Props = RectButtonProps & {
  title: string;
  isLoading?: boolean;
};

export function NormalButton({ title, isLoading = false, ...rest }: Props) {
  return (
    <Container enabled={!isLoading} {...rest}>
      { isLoading ? <Loading /> : <Title>{title}</Title> }
    </Container>
  )
}
