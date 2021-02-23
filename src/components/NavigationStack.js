import React from 'react';
import Index from './Index';
import Noticias from './Noticias';
import Docentes from './Docentes';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { StyleSheet } from 'react-native';

const Tab = createMaterialTopTabNavigator();

const NavigationStack = () => {
  return (
    <Tab.Navigator style={styles.sinespacioInferior}>
      <Tab.Screen name="Home" component={Index} />
      <Tab.Screen name="Noticias" component={Noticias} />
      <Tab.Screen name="Docentes" component={Docentes} />
    </Tab.Navigator>

  );
}

const styles = StyleSheet.create({
  sinespacioInferior: {
    marginBottom: 0,
    paddingBottom: 0
}
})

export default NavigationStack;

