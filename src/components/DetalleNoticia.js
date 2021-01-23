import React from 'react';
import { View, Text, StyleSheet, ActivityIndicator, ScrollView } from 'react-native';
import { Image, Button } from 'react-native-elements';
import BootstrapStyleSheet from 'react-native-bootstrap-styles';
import Tts from 'react-native-tts';
import Icon from 'react-native-vector-icons/FontAwesome';
const bootstrapStyleSheet = new BootstrapStyleSheet();
const { s, c } = bootstrapStyleSheet;

class DetalleNoticia extends React.Component {
    generarVoz(texto) {
        Tts.speak(texto);
    }

    render() {
        const { params } = this.props.route;
        return (
            <ScrollView>
                <View style={styles.container}>
                    <Image source={{ uri: params.portada_url }} style={styles.imageNoticia} PlaceholderContent={<ActivityIndicator />} />
                    <View style={styles.containerBody}>

                        <Button
                            title=" Escuchar"
                            type="outline"
                            icon={
                                <Icon
                                    name="volume-up"
                                    size={15}
                                    color="#2196F3" />
                            }

                            onPress={() => { this.generarVoz(params.titulo + " " + params.descripcion) }}
                        />

                        <Text style={[s.fontWeightBold, styles.titulo]}>{params.titulo}</Text>
                        <Text style={styles.textDescripcion}>{params.descripcion}</Text>

                    </View>
                </View>
            </ScrollView>
        );
    }
}

export default DetalleNoticia;

const styles = StyleSheet.create({
    container: {
        padding: 20
    },
    imageNoticia: {
        height: 250,
        width: 'auto',
    },
    containerBody: {
        backgroundColor: '#fff',
        marginTop: 15,
        padding: 10
    },
    titulo: {
        fontSize: 17,
        marginBottom: 10,
        color: "#313136",
        marginTop: 5
    },
    textDescripcion: {
        fontSize: 15,
        textAlign: 'justify',
        color: '#3B3B3C'
    }
})