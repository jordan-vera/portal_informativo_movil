import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import ListaDestacado from './ListaDestacado';
import DetalleDestacado from './DetalleDestacado';
import { StyleSheet, View } from 'react-native';

const Stack = createStackNavigator();

class Destacado extends React.Component {

    render() {
        return (
            <Stack.Navigator screenOptions={{ headerTitleStyle: { color: 'gray', fontSize: 15 } }}>

                <Stack.Screen name="ListaDestacado" component={ListaDestacado}
                    options={
                        {
                            title: '',
                            header: () => (<View></View>)
                        }
                    }
                />

                <Stack.Screen name="DetalleDestacado" component={DetalleDestacado} options={({ route, navigation }) => ({ title: route.params.titulo })} />

            </Stack.Navigator>
        );
    }
}

export default Destacado;

const styles = StyleSheet.create({
    iconoDocente: {
        paddingLeft: 10,
    }
})

