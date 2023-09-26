import React from 'react'
import { View, Text, StyleSheet, ImageBackground, Image, ScrollView, Pressable, Button, SafeAreaView } from 'react-native'
const imgIntrouccion = require('../../assets/home/madre_hijo.jpg')
import AntDesign from 'react-native-vector-icons/AntDesign'
//import {Video, ResizeMode} from 'expo-av';


const Videos = () => {

    const video = React.useRef(null);
    const [status, setStatus] = React.useState({});
    const video2 = React.useRef(null);
    const [status2, setStatus2] = React.useState({});


    return (
      <SafeAreaView style={styles.container}>
        <View>
            <View style={[styles.containerIntroduccion, styles.sombra]}>
                <Text style={styles.txtBienvenida}>Videos tutoriales</Text>
            </View>
            <ScrollView showsVerticalScrollIndicator={false}>
            <View style={styles.contenedorVideos}>
                <View style={{alignItems: 'center'}}>
                 {/*    <Video
                        ref={video}
                        style={styles.video}
                        source={{
                        uri: 'https://d23dyxeqlo5psv.cloudfront.net/big_buck_bunny.mp4',
                        }}
                        useNativeControls
                        resizeMode={ResizeMode.CONTAIN}
                        isLooping
                        isMuted={false} // Habilita el sonido
                        onPlaybackStatusUpdate={status => setStatus(() => status)}
                    /> */}
                </View>
                <View style={styles.buttons}>
                    <Button
                    title={status.isPlaying ? 'Pause' : 'Play'}
                    onPress={() =>
                        status.isPlaying ? video.current.pauseAsync() : video.current.playAsync()
                    }
                    />
                </View>
            </View>
            <View style={styles.contenedorVideos}>
            <View >
               {/*  <Video
                    ref={video2}
                    style={styles.video}
                    source={
                        require('../assets/videos/video.mp4')
                    }
                    useNativeControls
                    resizeMode={ResizeMode.CONTAIN}
                    isLooping
                    isMuted={false} // Habilita el sonido
                    onPlaybackStatusUpdate={status2 => setStatus2(() => status2)}
                /> */}
            </View>
            <View style={styles.buttons}>
                <Button
                title={status2.isPlaying ? 'Pause' : 'Play'}
                onPress={() =>
                    status2.isPlaying ? video2.current.pauseAsync() : video2.current.playAsync()
                }
                />
            </View>
            </View>
            
            

                <View>
                    <Text style={[styles.textos]}>
                        Formas para alimentar al bebé
                    </Text>
                </View>
                <ImageBackground
                    source={imgIntrouccion} style={styles.imagenprueba}>
                    <View style={styles.posicion}>
                        <AntDesign name="caretright" size={50} color="black" />
                    </View>
                </ImageBackground>
            </ScrollView>

        </View>
      </SafeAreaView>

    )
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    containerIntroduccion: {
        backgroundColor: '#ffadc6',
        height: 130,
        marginBottom: 10,
        justifyContent: 'center',
        flexDirection: 'row'
    },
    txtBienvenida: {
        fontSize: 30,
        color: '#fff',
        textAlign: 'center',
        marginTop: 60,
        fontWeight: '700',
        //fontFamily: 'Roboto'
    },
    contenedorVideos:{
        alignItems: 'center',
        paddingTop:20
    },
    video:{
        width: 300, // Establece el ancho deseado para el video
        height: 180, // Establece la altura deseada para el video
        borderRadius:20
    },
    posicion: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        width: 300,
        opacity: 0.5
    },
    imagenprueba: {
        width: 300,
        height: 200,
        marginHorizontal: 50,
        marginVertical: 30,
    },
    textos: {
        textAlign: 'center',
        fontSize: 22,
        marginHorizontal: 70
    }
}
)

export default Videos