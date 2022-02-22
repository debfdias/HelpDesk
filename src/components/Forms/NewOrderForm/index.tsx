import React, { useState } from 'react';
import { Alert } from 'react-native';
import firestore from '@react-native-firebase/firestore';

import { Input } from '@components/Input';
import { NormalButton } from '@components/Buttons/NormalButton';
import { TextArea } from '@components/TextArea';

import { Form, Title } from './styles';

export function NewOrderForm() {
  const [patrimony, setPatrimony] = useState('');
  const [description, setDescription] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  function handleNewOrder() {
    setIsLoading(true);

    firestore()
    .collection('orders')
    .add({
      patrimony,
      description,
      status: 'open',
      created_at: firestore.FieldValue.serverTimestamp()
    })
    .then(() => Alert.alert("Novo chamado", "Chamado aberto com sucesso!"))
    .catch((error) => console.log(error))
    .finally(() => {
      setIsLoading(false)
      setPatrimony('');
      setDescription('');
    })    
  }

  return (
    <Form>
      <Title>Novo chamado</Title>
      <Input placeholder="Número do Patrimônio" onChangeText={setPatrimony} />
      <TextArea placeholder="Descrição" onChangeText={setDescription} />
      <NormalButton title="Enviar chamado" isLoading={isLoading} onPress={handleNewOrder} />
    </Form>
  );
}