import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import ListaNoticias from './ListaNoticias';
import DetalleNoticia from './DetalleNoticia';
import { StyleSheet, View } from 'react-native';

const Stack = createStackNavigator();

class Normales extends React.Component {

    render() {
        return (
            <Stack.Navigator screenOptions={{ headerTitleStyle: { color: 'gray', fontSize: 15 } }}>

                <Stack.Screen name="ListaNoticias" component={ListaNoticias}
                    options={
                        {
                            title: '',
                            header: () => (<View></View>)
                        }
                    }
                />

                <Stack.Screen name="DetalleNoticia" component={DetalleNoticia} options={({ route, navigation }) => ({ title: route.params.titulo })} />

            </Stack.Navigator>
        );
    }
}

export default Normales;

const styles = StyleSheet.create({
    iconoDocente: {
        paddingLeft: 10,
    }
})

