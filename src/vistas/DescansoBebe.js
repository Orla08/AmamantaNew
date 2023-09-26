import { View, Text, Image, Pressable, ScrollView, StyleSheet, SafeAreaView } from 'react-native'
import React from 'react'
import AntDesign from 'react-native-vector-icons/AntDesign'
import { useNavigation } from "@react-navigation/native";

const imagenSuperior = require('../../assets/imgHome/bebe.jpg')

const DescansoBebe = () => {
    xx = useNavigation();
    return (
        <SafeAreaView style={styles.container}>
        <View>
            <View style={styles.containerIntroduccion}>
                <Pressable style={styles.iconoAtras}
                    onPress={() => { xx.navigate("Home") }}>
                    <AntDesign name="left" size={24} color="white" />
                </Pressable>
                <Text style={styles.txtIntroduccion}>Posiciones para el descanso del bebé</Text>
            </View>
            <ScrollView showsVerticalScrollIndicator={false}>
                <Image
                source={imagenSuperior}
                style={styles.imagen}
                />
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
        marginLeft:30,
        marginRight:40,
        lineHeight:28
    },
    imagen: {
        width: 320,
        height: 200,
        borderRadius: 20,
        marginHorizontal: 40,
        marginVertical: 30,
    },
})

export default DescansoBebe