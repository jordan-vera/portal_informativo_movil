import React from 'react';
import { View, Text, StyleSheet, ActivityIndicator, ScrollView } from 'react-native';
import { Image, Button } from 'react-native-elements';
import BootstrapStyleSheet from 'react-native-bootstrap-styles';
import Tts from 'react-native-tts';
import Icon from 'react-native-vector-icons/FontAwesome';
import UrlGlobal from '../providers/Global';
const bootstrapStyleSheet = new BootstrapStyleSheet();
const { s, c } = bootstrapStyleSheet;

class DetalleDocente extends React.Component {
    generarVoz(texto) {
        Tts.speak(texto);
    }


    render() {
        const { params } = this.props.route
        return (
            <ScrollView>
                <View style={styles.container}>
                <Image source={{ uri: UrlGlobal.urlArchivos+params.foto }} style={styles.imageDocente} PlaceholderContent={<ActivityIndicator />} />
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

                        onPress={() => { 
                            let  docente = params.nombres + " docente de la carrera de ingeniería en sistemas de información ";
                            let formacion = " Su formación académica es : " + params.formacion_academica;
                            let experiencia = "Se desempeño : " + params.experiencia_laboral;
                            this.generarVoz(docente + formacion + experiencia) }
                        }
                    />

                    <Text style={styles.textEmail}>{params.email}</Text>

                    <Text style={[s.fontWeightBold, styles.titulo]}>Formación académica</Text>
                    <Text style={styles.textFormacion}>{params.formacion_academica}</Text>

                    <Text style={[s.fontWeightBold, styles.titulo]}>Experiencia laboral</Text>
                    <Text style={styles.textFormacion}>{params.experiencia_laboral}</Text>
                </View>

            </View>
            </ScrollView>
            
        );
    }
}

export default DetalleDocente;

const styles = StyleSheet.create({
    container: {
        padding: 20
    },
    imageDocente: {
        height: 250,
        width: 'auto',
    },
    textEmail: {
        fontSize: 17,
        marginTop:5
    },
    containerBody: {
        backgroundColor: '#fff',
        marginTop: 15,
        padding: 10
    },
    titulo: {
        fontSize: 17,
        marginTop: 20,
        color: '#49494E'
    },
    textFormacion: {
        fontSize: 15,
        textAlign: 'justify',

    }
})
