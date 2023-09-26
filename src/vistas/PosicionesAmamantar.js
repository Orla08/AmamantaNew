import { View, Text, Image, Pressable, ScrollView, StyleSheet, SafeAreaView } from 'react-native'
import React from 'react'
import AntDesign from 'react-native-vector-icons/AntDesign'
import { useNavigation } from "@react-navigation/native";


const PosicionesAmamantar = () => {
    const xx = useNavigation();
    return (
        <SafeAreaView style={styles.container}>
        <View >
            <View style={styles.containerIntroduccion}>
                    <Pressable style={styles.iconoAtras}
                        onPress={() => { xx.navigate("Home") }}>
                        <AntDesign name="left" size={24} color="white" />
                    </Pressable>
                    <Text style={styles.txtIntroduccion}>Posiciones para amamantar</Text>
            </View>
            <ScrollView showsVerticalScrollIndicator={false}>

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
        marginLeft:58,
        marginRight:65,
        lineHeight:28
    },
    imagen: {
        backgroundColor: '#000',
        width: 300,
        height: 300,
        borderRadius: 20,
        marginHorizontal: 50,
        marginVertical: 30,
    },
    txt_s: {
        fontSize: 20,
        marginBottom: 10,
        textAlign: 'justify',
        marginHorizontal: 30
    },
    conceptos: {
        fontSize: 20,
        textAlign: 'justify',
        color: '#000',
        fontWeight: '600',
    },
    txtSubtitulos: {
        fontSize: 25,
        marginBottom: 15,
        color: '#000',
        textAlign: 'justify',
        fontWeight: '600',
        marginHorizontal: 30
    },

})


export default PosicionesAmamantar