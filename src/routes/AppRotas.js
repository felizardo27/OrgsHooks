import {NavigationContainer} from '@react-navigation/native';
import React from 'react';
import Home from '../screens/Home';
import MelhoresProdutores from '../screens/MelhoresProdutores';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

const Tab = createBottomTabNavigator();

export default function AppRotas() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Home" component={Home} />
        <Tab.Screen name="Produtores" component={MelhoresProdutores} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
