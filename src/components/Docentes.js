import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import ListaDocentes from './ListaDocentes';
import DetalleDocente from './DetalleDocente';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { StyleSheet } from 'react-native';

const Stack = createStackNavigator();

export default function Docentes() {
    return (
        <Stack.Navigator screenOptions={{ headerTitleStyle: { color: 'gray', fontSize:16 } }}>
            <Stack.Screen name="ListaDocentes" component={ListaDocentes} options={
                { title: 'Docentes de sistemas de información', headerLeft: ({ color }) => (<MaterialCommunityIcons style={styles.iconoDocente} name="account-group" color={"gray"} size={25} />), }
                } />
            <Stack.Screen name="DetalleDocente" component={DetalleDocente} options={({ route, navigation }) => ({ title: route.params.nombres })} />
        </Stack.Navigator>
    );
}

const styles = StyleSheet.create({
    iconoDocente: {
        paddingLeft: 10,
    }
})