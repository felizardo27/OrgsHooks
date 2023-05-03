import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import MelhoresProdutoresRotas from './MelhoresProdutoresRotas';
import ProdutorRotas from './ProdutorRotas';
import CoracaoIcon from '../assets/coracao.svg';
import HomeIcon from '../assets/home.svg';

const Tab = createBottomTabNavigator();

export default function AppRotas() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({route}) => ({
          tabBarIcon: ({color}) => {
            let Icon = HomeIcon;
            if (route.name === 'Melhores Produtores') {
              Icon = CoracaoIcon;
            }
            return <Icon color={color} width={25} height={25} />;
          },
          tabBarLabelStyle: {
            fontSize: 12,
            marginVertical: 8,
          },
          tabBarStyle: {
            height: 60,
            paddingVertical: 8,
          },
          headerShown: false,
          tabBarActiveTintColor: '#2A9F85',
          tabBarInactiveTintColor: '#C7C7C7',
        })}>
        <Tab.Screen name="Home" component={ProdutorRotas} />
        <Tab.Screen
          name="Melhores Produtores"
          component={MelhoresProdutoresRotas}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
