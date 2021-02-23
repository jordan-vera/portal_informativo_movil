import React, { useCallback, useState, useEffect } from "react";
import { View, Text, StyleSheet, Image, Alert, ScrollView } from 'react-native';
import YoutubePlayer from "react-native-youtube-iframe";
import BootstrapStyleSheet from 'react-native-bootstrap-styles';
import ApiHttp from '../providers/ApiHttp';
import logoUtc from '../assets/logoutc.png';
import Logo from '../assets/logo.png';
import Tecnologia from '../assets/tecnologia.png';
const bootstrapStyleSheet = new BootstrapStyleSheet();
const { s, c } = bootstrapStyleSheet;

function Index() {

    const [videos, setVideos] = useState([]);

    const onStateChange = useCallback((state) => {
        if (state === "ended") {
            setPlaying(false);
            Alert.alert("video has finished playing!");
        }
    }, []);

    const getAllVideos = async () => {
        const data = await ApiHttp.video.allshow();
        setVideos(data);
    }

    const transformarUrl = (url) => {
        let urlPartes = url.split("=");
        var idVideo = urlPartes[1];
        let partesIncluidas = idVideo.split('&');
        if (partesIncluidas.length > 0) {
            idVideo = partesIncluidas[0];
        }
        return idVideo;
    }

    useEffect(() => {
        getAllVideos()
    }, []);

    return (
        <ScrollView style={styles.cuerpo}>
            <View style={styles.container}>
                <View style={[s.container, styles.cuerpo]}>
                    <View style={[s.row]}>
                        <View style={[s.col5]}>
                            <View style={styles.containerImage}>
                                <Image source={logoUtc} style={styles.logoUtc}></Image>
                            </View>
                        </View>
                        <View style={[s.col7]}>
                            <Image source={Logo} style={styles.logoSistema}></Image>
                        </View>
                    </View>
                </View>
                <Text style={styles.titulo}>
                    Portal infomativo de la carrera de Sistemas de información - UTC extensión La Maná
                 </Text>

                <Image source={Tecnologia} style={styles.imagen}></Image>


                <Text style={styles.actividades}>
                    Actividades
                </Text>

                {
                    videos.map((video, idx) => {
                        return (
                            <View key={idx} style={[s.borderBottom, styles.containerVideos]}>
                                <YoutubePlayer
                                    height={190}
                                    play={false}
                                    videoId={transformarUrl(video.video_url)}
                                    onChangeState={onStateChange}
                                />
                                <Text style={styles.textoVideo}>
                                    {video.descripcion}
                                </Text>
                            </View>
                        )
                    })
                }
            </View>
        </ScrollView>
    );
}

export default Index;

const styles = StyleSheet.create({

    cuerpo: {
        marginBottom: 0,
        paddingBottom: 0
    },
    container: {
        paddingTop: 0,
        paddingLeft: 20,
        paddingRight: 20,
        paddingBottom: 0,
        marginBottom: 0
    },
    titulo: {
        color: "#1E4EAE",
        textAlign: "center",
        fontSize: 15,
        fontWeight: 'bold',
        marginBottom: 15
    },
    logoUtc: {
        width: 145,
        height: 48,
        marginTop: 20,
        marginBottom: 15
    },
    logoSistema: {
        width: 165,
        height: 50,
        marginTop: 15,
        marginBottom: 15
    },
    containerImage: {
        alignItems: 'center',
    },
    containerVideos: {
        marginBottom: 0,
        paddingBottom: 20,
        marginTop: 5,
    },
    textoVideo: {
        fontSize: 16
    },
    imagen: {
        width: 'auto',
        height: 110,
        marginBottom: 20
    },
    actividades: {
        color: "#1E4EAE",
        fontSize: 15,
        fontWeight: 'bold',
    }
});


