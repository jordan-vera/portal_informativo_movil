import React from 'react';
import { View, Text, Image, StyleSheet, Pressable, ScrollView } from 'react-native';
import BootstrapStyleSheet from 'react-native-bootstrap-styles';
const bootstrapStyleSheet = new BootstrapStyleSheet();
const { s, c } = bootstrapStyleSheet;

class ListaDocentes extends React.Component {

    state = {
        docentes: [
            {
                iddocente: 5,
                nombres: "David Ruben Zamora Toapanta",
                email: "jordantonio.vera@gmail.com",
                formacion_academica: "ingenieria",
                foto: "https://www.ashoka.org/sites/default/files/styles/medium_1600x1000/public/thumbnails/images/daniela-kreimer.jpg?itok=R89tVtb4",
                experiencia_laboral: "fgdgaaaa",
            },
            {
                iddocente: 6,
                nombres: "Manuel Arevalo Garcia",
                email: "jordantonio.vera@gmail.com",
                formacion_academica: "asas",
                foto: "https://diseno.uc.cl/wp/wp-content/uploads/2016/11/Andres-6773_-500x500.jpg",
                experiencia_laboral: "cscd",
            }
        ]
    }

    handlePress = (params) => {
        this.props.navigation.navigate('DetalleDocente', params);
    }

    render() {
        return (
            <ScrollView>
                <View style={styles.containerNoticia}>
                    <View style={[s.container]}>
                        {
                            this.state.docentes.map((docente) => {
                                return (
                                    <Pressable key={docente.iddocente} onPress={() => this.handlePress(docente)}>
                                        <View style={[s.row, styles.filaNoticia, s.borderBottom]} >
                                            <View style={[s.col2, styles.colImagen]}>
                                                <Image source={{ uri: docente.foto }} style={styles.imageNoticia}></Image>
                                            </View>
                                            <View style={[s.col10]}>
                                                <Text style={[s.fontWeightBold, styles.nombres]}>{docente.nombres}</Text>
                                                <Text>{docente.email}</Text>
                                            </View>
                                        </View>
                                    </Pressable>
                                )
                            })
                        }
                    </View>
                </View>
            </ScrollView>
        );
    }
}

export default ListaDocentes;

const styles = StyleSheet.create({
    containerNoticia: {
        paddingTop: 2,
    },
    imageNoticia: {
        height: 70,
        width: 'auto',
    },
    colImagen: {
        padding: 0
    },
    filaNoticia: {
        marginBottom: 5
    },
    nombres: {
        fontSize: 17,
        color: '#43434B'
    }
})

