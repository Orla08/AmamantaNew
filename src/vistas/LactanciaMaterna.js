import { View, Text, Image, StyleSheet, Pressable, SafeAreaView } from 'react-native'
import React from 'react'
import { useNavigation } from "@react-navigation/native";
import AntDesign from 'react-native-vector-icons/AntDesign'
//import Home from './HomeScreen.js';



const imgLac = require("../../assets/iconos/LacMac.png");

const LactanciaMaterna = () => {
    const xx = useNavigation();
    return (
        <SafeAreaView style={styles.container}>
            <View>
                <View style={styles.containerIntroduccion}>
                    <Pressable style={styles.iconoAtras}
                        onPress={() => { xx.navigate("Home") }}>
                        <AntDesign name="left" size={24} color="white" />
                    </Pressable>
                    <Text style={styles.txtIntroduccion}>Lactancia Materna</Text>
                </View>
                <View>
                    <Text style={styles.txt_s}>Mamá estas en una etapa, la
                        cual es uno de los mejores momentos de tu vida.
                    </Text>
                    <Text style={styles.txt_s}>
                        Esta cartilla busca guiarte, dando
                        respuesta a tus dudas e inquietudes
                        y brindándote consejos para este
                        proceso tan importante para ti,
                        como para tu bebé y toda la familia.
                    </Text>
                </View>
                <View>
                    <Image
                        style={styles.imagen}
                        source={imgLac}
                    />
                </View>
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
        flexDirection: 'row',
        display: 'flex',
    },
    iconoAtras: {
        marginTop: 20,
        alignItems: 'flex-start',
        marginTop:70
    },
    txtIntroduccion: {
        fontSize: 30,
        fontWeight: '600',
        color: '#fff',
        textAlign: 'center',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop:60,
        marginHorizontal:40
    },
    imagen: {
        width: 309,
        height: 291,
        borderRadius: 20,
        marginHorizontal: 50,
        marginVertical: 30,
        objectFit: 'fill'
    },
    txt_s: {
        paddingTop:25,
        padding:2,
        fontSize: 20,
        marginHorizontal: 50,
        marginBottom: 10,
        textAlign: 'justify',
        color:'#595858',
        lineHeight: 19
    }

})

export default LactanciaMaterna