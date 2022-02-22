import React, { useEffect, useState } from "react";
import { NavigationContainer } from '@react-navigation/native';
import auth, { FirebaseAuthTypes } from "@react-native-firebase/auth";

import { Home } from '@pages/Home';
import { AuthRoutes } from './routes';

export function Routes() {
  const [user, setUser] = useState<FirebaseAuthTypes.User | null>(null);

  useEffect(() => {
    const subscriber = auth().onAuthStateChanged(setUser);

    return subscriber;
  }, [])

  return (
    <NavigationContainer>
      { user ? <Home /> : <AuthRoutes /> }
    </NavigationContainer>
  );
}
