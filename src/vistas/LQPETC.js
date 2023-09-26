import { View, Text, StyleSheet, Image, ScrollView, Pressable, SafeAreaView } from 'react-native'
import React from 'react'
import { useNavigation } from "@react-navigation/native";
import AntDesign from 'react-native-vector-icons/AntDesign'
//import Home from './HomeScreen.js';


const imgIntrouccion = require("../../assets/iconos/tocaEstomag.png");

const LQPETC = () => {
    const xx = useNavigation();
    return (
        <SafeAreaView style={styles.container}>
        <View >
            <View style={styles.containerIntroduccion}>
                <Pressable style={styles.iconoAtras}
                    onPress={() => { xx.navigate("Home") }}>
                    <AntDesign name="left" size={24} color="white" />
                </Pressable>
                <Text style={styles.txtIntroduccion}>Lo que pasa en {'\n'}tu cuerpo</Text>
            </View>
            <ScrollView showsVerticalScrollIndicator={false}>
                <View>
                    <Text style={styles.txt_s}>El cuerpo de cada mujer es diferente, pero la mayoría de las madres experimenta una serie
                        de síntomas comunes que aunque pdrían llegar a ser molestos, son muestra del increible trabajo que hace el cuerpo humano
                        para alimentar al bebé.
                    </Text>
                    <Text style={styles.txt_s}>
                        Durante el embarazo se producen muchos cambios que favorecen la preparación para la lactancia, entre ellos:
                    </Text>
                </View>
                <View>
                    <Text style={styles.txt_s}>
                        <Text style={styles.conceptos}>Linea negra: </Text>
                        <Text style={styles.txt_s}>es la línea oscura que se dessarrolla a través de su vientre durante el embarazo</Text>
                    </Text>
                </View>
                <View>
                    <Image
                        style={styles.imagen}
                        source={imgIntrouccion} />
                </View>
                <View>
                    <Text style={styles.txtSubtitulos}>CAPITULO 1</Text>
                    <Text style={styles.txt_s}>
                        <Text style={styles.conceptos}>Cambios en los senos (mamas): </Text>
                        <Text style={styles.txt_s}>Casi desde el inicio del embarazo las mamás empiezan a cambiar. Uno de los primeros síntomas del
                            embarazo es el aumento de tensión en las mamas, ecompañado de una sensación de calor. La mama aumenta de tamaño y se prepara
                            para la función del amamantiemnto. Aumenta el tamaño y sensibilidad de los senos: Este síntoma se intesifica a lo largo del
                            embarazo, ya que el tejido graso mamaro es reemplazado por tejido glandular, maduran los conductos por donde la leche recorrerá
                            el camino hasta alimentar al bebé. Cuando la madre deja de lactar, los senos vuelven a su estado.</Text>
                    </Text>
                </View>
                <View>
                    <Image
                        style={styles.imagen}
                        source={imgIntrouccion} />
                </View>
                <Text style={styles.txt_s}>
                    <Text style={styles.conceptos}>Cambios en la pigmentación de la piel: </Text>
                    <Text style={styles.txt_s}>Durante la gestación se oscurecen zonas especifícas del cuerpo de la mujer. Este aumento de la pigmentación
                        se debe a un incremento de la actividad de la hormona melanoestimulante, responsable de la formación de la melanina provocada por la
                        progesterona. Las zonas que se oscurecen son:.</Text>
                </Text>
                <Text style={[styles.txt_s, { marginBottom: 0 }]}>
                    <Text style={styles.conceptos}>Areola: </Text>
                    <Text style={styles.txt_s}>la areola y el pezon, se oscurcen, pero además también se pigmenta un halo en torno a la areorla
                        que se conoce como areola de Bubois. Esto no es casual, sino que cumple la función de facilitar el camino hasta el pecho materno y favorecerel vínculo.</Text>
                </Text>
                <View style={{ marginBottom: 10 }}>
                    <Image
                        style={styles.imagen}
                        source={imgIntrouccion} />
                </View>

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
        width: 85,
        height: 240,
        borderRadius: 20,
        marginHorizontal: 150,
        marginVertical: 30,
        objectFit: 'fill', //Para que la imagen se adapte al tamaño
    },
    txt_s: {
        paddingTop:25,
        padding:2,
        fontSize: 20,
        marginHorizontal: 40,
        marginBottom: 10,
        textAlign: 'justify',
        color:'#595858',
        lineHeight: 19
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

export default LQPETC