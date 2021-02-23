import React from 'react';
import { View, Text, Image, StyleSheet, Pressable, ScrollView, ActivityIndicator } from 'react-native';
import BootstrapStyleSheet from 'react-native-bootstrap-styles';
import ApiHttp from '../providers/ApiHttp';
import UrlGlobal from '../providers/Global';
const bootstrapStyleSheet = new BootstrapStyleSheet();
const { s, c } = bootstrapStyleSheet;

class ListaDocentes extends React.Component {

    state = {
        docentes: [],
        error: false,
        loading: false
    }

    handlePress = (params) => {
        this.props.navigation.navigate('DetalleDocente', params);
    }

    getAllDocentes = async () => {
        this.setState({ loading: true });
        try {
            const data = await ApiHttp.docente.allshow();
            this.setState({ loading: false, error: false, docentes: data });
        } catch (error) {
            this.setState({ loading: false, error: true });
        }
    }

    spinner = () => {
        if (this.state.loading) {
            return (
                <ActivityIndicator />
            );
        } else {
            return;
        }
    }

    error = () => {
        if (this.state.error) {
            return (
                <View style={styles.msjError}>
                    <Text>
                        Upss!!, ha ocurrido un error. Intentalo más tarde.
                    </Text>
                </View>
            );
        } else {
            return;
        }
    }

    componentDidMount() {
        this.getAllDocentes();
    }

    render() {
        return (
            <ScrollView>
                <View style={styles.containerNoticia}>
                    <View style={[s.container]}>
                        {this.spinner()}
                        {this.error()}
                        {
                            this.state.docentes.map((docente) => {
                                return (
                                    <Pressable key={docente.iddocente} onPress={() => this.handlePress(docente)}>
                                        <View style={[s.row, styles.filaNoticia, s.borderBottom]} >
                                            <View style={[s.col2, styles.colImagen]}>
                                                <Image source={{ uri: UrlGlobal.urlArchivos+docente.foto }} style={styles.imageNoticia}></Image>
                                            </View>
                                            <View style={[s.col10]}>
                                                <Text style={[styles.nombres]}>{docente.nombres}</Text>
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
        color: "#171718",
        fontSize:16
    },
    msjError: {
        color: 'red',
        padding: 10
    }
})

