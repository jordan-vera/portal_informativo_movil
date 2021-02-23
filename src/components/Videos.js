import React, { useCallback } from 'react';
import { View, Text } from 'react-native';
import ApiHttp from '../providers/ApiHttp';
import YoutubePlayer from "react-native-youtube-iframe";
import BootstrapStyleSheet from 'react-native-bootstrap-styles';
const bootstrapStyleSheet = new BootstrapStyleSheet();
const { s, c } = bootstrapStyleSheet;

const onStateChange = useCallback((state) => {
    if (state === "ended") {
        setPlaying(false);
        Alert.alert("video has finished playing!");
    }
}, []);

class Videos extends React.Component {

    state = {
        videos: []
    }

    getAllVideos = async () => {
        try {
            const data = await ApiHttp.video.allshow();
            this.setState({ videos: data })
        } catch (error) {
        }
    }

    transformarUrl = (url) => {
        let urlPartes = url.split("=");
        var idVideo = urlPartes[1];
        let partesIncluidas = idVideo.split('&');
        if (partesIncluidas.length > 0) {
            idVideo = partesIncluidas[0];
        }
        return idVideo;
    }

    componentDidMount(){
        this.getAllVideos();
    }

    render() {
        return (
            <View>
                {
                    this.state.videos.map((video, idx) => {
                        return (
                            <View key={idx} style={[s.borderBottom, styles.containerVideos]}>
                                <YoutubePlayer
                                    height={190}
                                    play={false}
                                    videoId={this.transformarUrl(video.video_url)}
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
        );
    }
}

export default Videos;

const styles = StyleSheet.create({
    containerVideos: {
        marginBottom: 0,
        paddingBottom: 20,
        marginTop: 5,

    },
    textoVideo: {
        fontSize: 16
    }
});
