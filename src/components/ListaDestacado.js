import React from 'react';
import { View, Text, StyleSheet, Image, Pressable, ScrollView } from 'react-native';
import BootstrapStyleSheet from 'react-native-bootstrap-styles';
//import { SearchBar } from 'react-native-elements';
const bootstrapStyleSheet = new BootstrapStyleSheet();
const { s, c } = bootstrapStyleSheet;

class ListaDestacado extends React.Component {

    state = {
        noticias: [
            {
                idnoticia: 7,
                titulo: "Cuenta de perfil",
                descripcion: "Descripción de cuenta de usuarioss",
                portada_url: "https://lamanoticias.files.wordpress.com/2018/10/1-696x389.png",
                tipo_noticia: "Destacado",
            },
            {
                idnoticia: 8,
                titulo: "Rango de precios de repartidores",
                descripcion: "descripcion del rango de precios de repartidores en quito",
                portada_url: "https://pbs.twimg.com/media/ELXyqNdWwAA6Umy.jpg",
                tipo_noticia: "Normal",
            },
            {
                idnoticia: 9,
                titulo: "Examen de React native",
                descripcion: "Bienvenidos al portal infomativo de la carrera de Sistemas de información de la extensión la mana",
                portada_url: "https://lamanoticias.files.wordpress.com/2019/11/participantes-de-los-cursos-vacacionales.jpg?w=1152",
                tipo_noticia: "Normal",
            },
            {
                idnoticia: 10,
                titulo: "Cuenta de perfil",
                descripcion: "Descripción de cuenta de usuarioss",
                portada_url: "https://lamanoticias.files.wordpress.com/2018/10/1-696x389.png",
                tipo_noticia: "Destacado",
            },
            {
                idnoticia: 4,
                titulo: "Rango de precios de repartidores",
                descripcion: "descripcion del rango de precios de repartidores en quito",
                portada_url: "https://pbs.twimg.com/media/ELXyqNdWwAA6Umy.jpg",
                tipo_noticia: "Normal",
            },
            {
                idnoticia: 3,
                titulo: "Examen de React native",
                descripcion: "Bienvenidos al portal infomativo de la carrera de Sistemas de información de la extensión la mana",
                portada_url: "https://lamanoticias.files.wordpress.com/2019/11/participantes-de-los-cursos-vacacionales.jpg?w=1152",
                tipo_noticia: "Normal",
            },
            {
                idnoticia: 2,
                titulo: "Cuenta de perfil",
                descripcion: "Descripción de cuenta de usuarioss",
                portada_url: "https://lamanoticias.files.wordpress.com/2018/10/1-696x389.png",
                tipo_noticia: "Destacado",
            },
            {
                idnoticia: 5,
                titulo: "Rango de precios de repartidores",
                descripcion: "descripcion del rango de precios de repartidores en quito",
                portada_url: "https://pbs.twimg.com/media/ELXyqNdWwAA6Umy.jpg",
                tipo_noticia: "Normal",
            },
            {
                idnoticia: 6,
                titulo: "Examen de React native",
                descripcion: "Bienvenidos al portal infomativo de la carrera de Sistemas de información de la extensión la mana",
                portada_url: "https://lamanoticias.files.wordpress.com/2019/11/participantes-de-los-cursos-vacacionales.jpg?w=1152",
                tipo_noticia: "Normal",
            },
            
        ]
    }

    handlePress = (params) => {
        this.props.navigation.navigate('DetalleDestacado', params);
    }

    render() {
        return (
            <ScrollView>
                <View style={styles.container}>

                    <View style={styles.containerNoticia}>
                        <View style={[s.container]}>
                            {
                                this.state.noticias.map((noticia) => {
                                    return (
                                        <Pressable key={noticia.idnoticia} onPress={() => this.handlePress(noticia)}>
                                            <View style={[s.row, styles.filaNoticia, s.borderBottom]}>
                                                <View style={[s.col2, styles.colImagen]}>
                                                    <Image source={{ uri: noticia.portada_url }} style={styles.imageNoticia}></Image>
                                                </View>
                                                <View style={[s.col4]}>
                                                    <Text style={[s.fontWeightBold, styles.titulo]}>
                                                        {noticia.titulo}
                                                    </Text>
                                                    <Text style={styles.descripcion} numberOfLines={3}>
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

export default ListaDestacado;

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
        color: "#49494E",
    },
    descripcion: {
        color: 'gray',


    }
})
