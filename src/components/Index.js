import React, { useCallback } from "react";
import { View, Text, StyleSheet, Image, Alert, SafeAreaView, ScrollView } from 'react-native';
import YoutubePlayer from "react-native-youtube-iframe";
import BootstrapStyleSheet from 'react-native-bootstrap-styles';
const bootstrapStyleSheet = new BootstrapStyleSheet();
const { s, c } = bootstrapStyleSheet;

export default function Index() {

    const onStateChange = useCallback((state) => {
        if (state === "ended") {
            setPlaying(false);
            Alert.alert("video has finished playing!");
        }
    }, []);

    const videos = [
        {
            titulo: "video 1",
            descripcion: "descripcion del viedo",
            video_url: "https://www.youtube.com/watch?v=n11rMk2twJ0"
        },
        {
            titulo: "titulo 2",
            descripcion: "descripcion del viedo 2",
            video_url: "https://www.youtube.com/watch?v=VFadvkBuwRY"
        },
    ];

    const transformarUrl = (url) => {
        let urlPartes = url.split("=");
        var idVideo = urlPartes[1];
        let partesIncluidas = idVideo.split('&');
        if (partesIncluidas.length > 0) {
            idVideo = partesIncluidas[0];
        }
        return idVideo + "";
    }

    return (
        <ScrollView>
            <View style={styles.container}>
                <View style={[s.container]}>
                    <View style={[s.row]}>
                        <View style={[s.col5]}>
                            <View style={styles.containerImage}>
                                <Image source={require('../assets/logoutc.png')} style={styles.logoUtc}></Image>
                            </View>
                        </View>
                        <View style={[s.col7]}>
                            <Image source={require('../assets/logo.png')} style={styles.logoSistema}></Image>
                        </View>
                    </View>
                </View>
                <Text style={styles.titulo}>
                    Portal infomativo de la carrera de Sistemas de información - UTC extensión La Maná
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

const styles = StyleSheet.create({
    container: {
        paddingTop: 0,
        paddingLeft: 20,
        paddingRight: 20,
        paddingBottom: 30
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
    }
});


