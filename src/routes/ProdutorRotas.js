import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Home from '../screens/Home';
import Produtor from '../screens/Produtor';
import Cesta from '../screens/Cesta';

const Stack = createNativeStackNavigator();

export default function ProdutorRotas({componentePrincipal = Home}) {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="HomeScreen" component={componentePrincipal} />
      <Stack.Screen name="Produtor" component={Produtor} />
      <Stack.Screen name="Cesta" component={Cesta} />
    </Stack.Navigator>
  );
}
