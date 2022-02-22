import React, { useState } from 'react';
import { Alert } from 'react-native';

import { NormalButton } from '@components/Buttons/NormalButton';
import { Input } from '@components/Input';
import { Form, Title } from './styles';

import auth from '@react-native-firebase/auth';

export function SignUpForm() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  function handleSignUp() {
    setIsLoading(true);

    auth().createUserWithEmailAndPassword(email, password)
    .then(() => Alert.alert("Sucesso", "Conta criada!"))
    .catch((error) => console.log(error))
    .finally(() => setIsLoading(false));

  }

  return (
    <Form>
      <Title>Cadastrar conta</Title>
      <Input placeholder="E-mail" onChangeText={setEmail} />
      <Input placeholder="Senha" secureTextEntry onChangeText={setPassword} />
      <NormalButton title="Cadastrar" isLoading={isLoading} onPress={handleSignUp} />
    </Form>
  );
}