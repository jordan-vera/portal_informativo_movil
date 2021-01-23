import React from 'react';
import Index from './Index';
import Noticias from './Noticias';
import Docentes from './Docentes';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const Tab = createMaterialTopTabNavigator();

const NavigationStack = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Home" component={Index} />
      <Tab.Screen name="Noticias" component={Noticias} />
      <Tab.Screen name="Docentes" component={Docentes} />
    </Tab.Navigator>

  );
}

export default NavigationStack;

