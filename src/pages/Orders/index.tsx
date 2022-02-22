import React, { useEffect, useState } from 'react';
import { FlatList } from 'react-native';
import firestore from '@react-native-firebase/firestore';

import { LoadIndicator } from '@components/Animations/LoadIndicator';
import { Filters } from '@components/Filters';
import { OrderCard, OrderProps } from '@components/OrderCard';
import { Container, Header, Title, Counter } from './styles';

export function Orders() {
  const [status, setStatus] = useState('open');
  const [isLoading, setIsLoading] = useState(false);
  const [orders, setOrders] = useState<OrderProps[]>([]);
  
  useEffect(() => {
    setIsLoading(true);
    
    const subscribe = firestore()
    .collection('orders')
    .where('status', '==', status)
    .onSnapshot(querySnapshot => {
      const data = querySnapshot.docs.map(doc => {
        return {
          id: doc.id,
          ...doc.data()
        }
      }) as OrderProps[];

      setOrders(data);
      setIsLoading(false);
    })
    
    return () => subscribe();
  }, [status]);
  
  return (
    <Container>
      <Filters onFilter={setStatus} />
      <Header>
        <Title>Chamados {status === 'open' ? 'aberto' : 'encerrado'}</Title>
        <Counter>{orders.length}</Counter>
      </Header>
      
      { isLoading ? 
        <LoadIndicator />
        : <FlatList
            data={orders}
            keyExtractor={item => item.id}
            renderItem={({ item }) => <OrderCard data={item} />}
            contentContainerStyle={{ paddingBottom: 100 }}
            showsVerticalScrollIndicator={false}
            style={{ flex: 1 }}
        />
      }
    </Container>
  );
}