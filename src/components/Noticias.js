import React from 'react';
import Destacado from './Destacado';
import Normales from './Normales';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const Tab = createMaterialBottomTabNavigator();

function Noticias() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Normales" component={Normales}
        options={{
          tabBarLabel: 'Noticias',
          tabBarIcon: ({ color }) => (<MaterialCommunityIcons name="newspaper" color={color} size={26} />),
        }}
      />
      <Tab.Screen name="Destacado" component={Destacado}
        options={{
          tabBarLabel: 'Destacado',
          tabBarIcon: ({ color }) => (<MaterialCommunityIcons name="newspaper-variant-multiple" color={color} size={26} />),
        }}
      />
    </Tab.Navigator>
  );
}

export default Noticias;
