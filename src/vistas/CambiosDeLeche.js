import { View, Text, ScrollView, StyleSheet, Image, Pressable, SafeAreaView } from 'react-native'
import React from 'react'
const imgIntrouccion = require("../../assets/tonykroos.jpg");
import { useNavigation } from "@react-navigation/native";
import AntDesign from 'react-native-vector-icons/AntDesign'
//import Home from './HomeScreen.js';

const CambiosDeLeche = () => {
    const xx = useNavigation();
    return (
        <SafeAreaView style={styles.container}>
        <View>
            <View style={styles.containerIntroduccion}>
                <Pressable style={styles.iconoAtras}
                    onPress={() => { xx.navigate("Home") }}>
                    <AntDesign name="left" size={24} color="white" />
                </Pressable>
                <Text style={styles.txtIntroduccion}>Cambios de la leche</Text>
            </View>
            <ScrollView showsVerticalScrollIndicator={false}>
                <View>
                    <Image
                        style={styles.imagen}
                        source={imgIntrouccion} />
                </View>
                <View>
                    <Text style={styles.txt_s}>
                        Si. Tu leche materna se modifica los días posteriores al nacimiento y sigue cambiando a medida que tu  bebé crece. Aprende que ocurrirá
                        con tu leche, con tu bebé y contigo en las primeras semanas.
                    </Text>
                </View>
                <Text style={styles.conceptos}>Nacimiento</Text>
                <Text style={styles.txt_s}>
                    <Text style={styles.conceptos}>Leche: </Text>
                    <Text style={styles.txt_s}>tu cuerpo produce clostro (una leche rica en nutrientes, espesa y de color amarillento). Le aporta
                        a tu bebé protección temprana contra enfermedades.</Text>
                </Text>
                <Text style={styles.txt_s}>
                    <Text style={styles.conceptos}>Cuerpo: </Text>
                    <Text style={styles.txt_s}>probablemente tu bebé esté despierto en la primera hora después de su nacimiento. Es un buen momento para amamantarlo.
                        Tú(mamá): deja que tu bebé inicie el proceso de buscar tu pezón. Esta forma de lactancia iniciada por el bebé lo ayuda a prenderse bien.</Text>
                </Text>
                <Text style={styles.conceptos}>Primeras 12 a 24 horas</Text>
                <Text style={styles.txt_s}>
                    <Text style={styles.conceptos}>Leche: </Text>
                    <Text style={styles.txt_s}>tu bebé tomará alrededor de 1 cucharadita de calostro cada vez que se alimente. Quizás no veas el calostro,
                        pero tiene lo que tu bebé necesita y en la cantidad justa. </Text>
                </Text>
                <Text style={styles.txt_s}>
                    <Text style={styles.conceptos}>Bebé: </Text>
                    <Text style={styles.txt_s}>es normal que el bebé duerma mucho. ¡El trabajo de parto y el parto son extenuantes! A algunos bebés les gusta acurrucarse
                        y quizá esten muy cansados al principio para lactar. Las sesiones de alimentación pueden ser cortas y desorganizadas.</Text>
                </Text>
                <Text style={styles.txt_s}>
                    <Text style={styles.conceptos}>Tú (mamá): </Text>
                    <Text style={styles.txt_s}>.tu cuerpo aún no está produciendo el calostro. Aprovecha la necesidad instintiva de tu bebé de succionar y alimentarse cada
                        vez que se despierta, cada dos horas, para ayudar a que tu leche baje más rápido.</Text>
                </Text>
                <Text style={styles.conceptos}>Los siguientes 3 a 5 días</Text>
                <Text style={styles.txt_s}>
                    <Text style={styles.conceptos}>Leche: </Text>
                    <Text style={styles.txt_s}>tu leche madura (blanca) reemplaza al calostro. Al principio es normal que la leche madura tenga un tinte amarillo o dorado. </Text>
                </Text>
                <Text style={styles.txt_s}>
                    <Text style={styles.conceptos}>Bebé: </Text>
                    <Text style={styles.txt_s}>tu bebé comerá muchas veces, al menos de 8 a 12 veces o más por 24 horas. Los bebés lactantes muy pequeños no tienen horarios para
                        comer. Está bien si tu bebé come cada 2 a 3 horas durante varias horas y después duerme de 3 a 4 horas. Las sesiones de alimentación pueden durar 15 a 20 minutos en cada seno.
                        El ritmo de succión del bebé será lento y largó. Es posible que escuches el sonido del bebé tragar.</Text>
                </Text>
                <Text style={styles.txt_s}>
                    <Text style={styles.conceptos}>Tú (mamá): </Text>
                    <Text style={styles.txt_s}>tus senos pueden estar llenos y perder algo de leche. (Puedes usar protectores mamarios desechables o paños en el sosten
                        para que absorban las pérdidas).</Text>
                </Text>
                <Text style={styles.conceptos}>Primeras 4 a 6 semanas</Text>
                <Text style={styles.txt_s}>
                    <Text style={styles.conceptos}>Leche: </Text>
                    <Text style={styles.txt_s}>continúa la leche blanca. </Text>
                </Text>
                <Text style={styles.txt_s}>
                    <Text style={styles.conceptos}>Bebé: </Text>
                    <Text style={styles.txt_s}>tu bebé probablemente ya sepa amamantar y tenga un estómago más grande para tomar más leche. Amamantar puede requerir de menos
                        tiempo y puede ser más espaciado.</Text>
                </Text>
                <Text style={styles.txt_s}>
                    <Text style={styles.conceptos}>Tú (mamá): </Text>
                    <Text style={styles.txt_s}>tu cuerpo se acostumbra a la lactancia materna. Tus senos pueden estar más blandos y las pérdidas pueden disminuir.</Text>
                </Text>
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
        marginHorizontal:40
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
        marginHorizontal: 30,
        color:'#595858',
    },
    conceptos: {
        fontSize: 20,
        textAlign: 'justify',
        color: '#000',
        fontWeight: '600',
        marginHorizontal: 30,
        marginTop: 25
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


export default CambiosDeLeche