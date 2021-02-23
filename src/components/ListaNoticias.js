import React from 'react';
import { View, Text, StyleSheet, Image, Pressable, ScrollView, ActivityIndicator } from 'react-native';
import BootstrapStyleSheet from 'react-native-bootstrap-styles';
import ApiHttp from '../providers/ApiHttp';
import UrlGlobal from '../providers/Global';
const bootstrapStyleSheet = new BootstrapStyleSheet();
const { s, c } = bootstrapStyleSheet;

class ListaNoticias extends React.Component {

    state = {
        noticias: [],
        error: false,
        loading: false,
    }

    handlePress = (params) => {
        this.props.navigation.navigate('DetalleNoticia', params);
    }

    getAllNoticias = async () => {
        this.setState({ loading: true });
        try {
            const data = await ApiHttp.noticia.getByTipo('Normal');
            this.setState({ loading: false, error: false, noticias: data });
        } catch (error) {
            this.setState({ loading: false, error: true });
        }
    }

    componentDidMount() {
        this.getAllNoticias();
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

    render() {
        return (
            <ScrollView>
                <View style={styles.container}>
                    <View style={styles.containerNoticia}>
                        <View style={[s.container]}>
                            {this.spinner()}
                            {this.error()}

                            {
                                this.state.noticias.map((noticia) => {
                                    return (
                                        <Pressable key={noticia.idnoticia} onPress={() => this.handlePress(noticia)}>
                                            <View style={[s.row, styles.filaNoticia, s.borderBottom]}>
                                                <View style={[s.col2, styles.colImagen]}>
                                                    <Image source={{ uri: UrlGlobal.urlArchivos+noticia.portada_url }} style={styles.imageNoticia}></Image>
                                                </View>
                                                <View style={[s.col4]}>
                                                    <Text style={[styles.titulo]} numberOfLines={2}>
                                                        {noticia.titulo}
                                                    </Text>
                                                    <Text style={styles.descripcion} numberOfLines={2}>
                                                        {noticia.descripcion}
                                                    </Text>
                                                </View>
                                            </View>
                                        </Pressable>
                                    );
                                })
                            }

                        </View>
                    </View>
                </View>
            </ScrollView>
        );
    }
}

/*
<SearchBar
    placeholder="Buscar noticias"
    onChangeText={this.updateSearch}
    value={this.state.search}
/>
 */

export default ListaNoticias;

const styles = StyleSheet.create({
    container: {
        paddingTop: 2
    },
    containerNoticia: {
        paddingTop: 2,
    },
    imageNoticia: {
        resizeMode: 'stretch',
        height: 70,
        width: 'auto',
    },
    colImagen: {
        padding: 0
    },
    filaNoticia: {
        marginBottom: 5
    },
    titulo: {
        color: "#171718",
        fontSize:15
    },
    descripcion: {
        color: 'gray',
    },
    msjError: {
        color: 'red',
        padding: 10
    }
})
