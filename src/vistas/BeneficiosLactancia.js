import { View, Text, StyleSheet, Image, ScrollView, Pressable, SafeAreaView } from 'react-native'
import React from 'react'
import AntDesign from 'react-native-vector-icons/AntDesign'
//import Home from './HomeScreen.js';
import { useNavigation } from "@react-navigation/native";



const imgIntrouccion = require("../../assets/imgHome/made_hijo.png");


const BeneficiosLactancia = () => {
    const xx = useNavigation();
    return (
        <SafeAreaView style={styles.container}>
        <View >
            <View style={styles.containerIntroduccion}>
                <Pressable style={styles.iconoAtras}
                    onPress={() => { xx.navigate("Home") }}>
                    <AntDesign name="left" size={24} color="white" />
                </Pressable>
                <Text style={styles.txtIntroduccion}>Beneficios de la {'\n'} lactancia</Text>
            </View>
            <ScrollView showsVerticalScrollIndicator={false}>
                <View>
                    <Image
                        style={styles.imagen}
                        source={imgIntrouccion} />
                </View>
                <View>
                    <Text style={styles.conceptos}>Para la madre: </Text>
                    <Text style={styles.txt_s}>
                        <Text style={styles.conceptos}>-  </Text>
                        <Text style={styles.txt_s}>Establece y fortalece el vinculo afectivo entre madre e hijo, una experiencia única.</Text>
                    </Text>
                    <Text style={styles.txt_s}>
                        <Text style={styles.conceptos}>-  </Text>
                        <Text style={styles.txt_s}>Ayuda a la rápida recuperación despues del parto.</Text>
                    </Text><Text style={styles.txt_s}>
                        <Text style={styles.conceptos}>-  </Text>
                        <Text style={styles.txt_s}>Ayuda a quemar calorías adicionales lo que permite recuperar rápidamente el pesp previo al embarazo.</Text>
                    </Text>
                    <Text style={styles.txt_s}>
                        <Text style={styles.conceptos}>-  </Text>
                        <Text style={styles.txt_s}>Previene la depresión post-parto.</Text>
                    </Text>
                    <Text style={styles.txt_s}>
                        <Text style={styles.conceptos}>-  </Text>
                        <Text style={styles.txt_s}>Disminuye el riesgo de sangrado en el post-parto por lo tanto disminuye el riesgo de desarrollar anemia.</Text>
                    </Text>
                    <Text style={styles.txt_s}>
                        <Text style={styles.conceptos}>-  </Text>
                        <Text style={styles.txt_s}>Disminuye el riesgo a padecer diabetes tipo 2.</Text>
                    </Text>
                </View>
                <View>
                    <Image
                        style={styles.imagen}
                        source={imgIntrouccion} />
                </View>
                <View style={{ marginBottom: 20 }}>
                    <Text style={styles.conceptos}>Para el bebé:</Text>
                    <Text style={styles.txt_s}>
                        <Text style={styles.conceptos}>-  </Text>
                        <Text style={styles.txt_s}>La leche materna está llena de inmunoglobulinas que protegen a los bebés contra la neumonía, la diarrea, las proporciona
                            los nutrientes necesarios en calidad y cantidad, para un crecimiento y desarrollo adecuado.</Text>
                    </Text>
                    <Text style={styles.txt_s}>
                        <Text style={styles.conceptos}>-  </Text>
                        <Text style={styles.txt_s}>Reduce en casi 20% el riesgo de morir en el primer mes.</Text>
                    </Text>
                    <Text style={styles.txt_s}>
                        <Text style={styles.conceptos}>-  </Text>
                        <Text style={styles.txt_s}>Disminuye el riesgo de desnutrición.</Text>
                    </Text>
                    <Text style={styles.txt_s}>
                        <Text style={styles.conceptos}>-  </Text>
                        <Text style={styles.txt_s}>Tiene líquidos y electrolitos suficente para su hidratación.</Text>
                    </Text>
                    <Text style={styles.txt_s}>
                        <Text style={styles.conceptos}>-  </Text>
                        <Text style={styles.txt_s}>Favorece el desarrollo emocional e intelectual.</Text>
                    </Text>
                    <Text style={styles.txt_s}>
                        <Text style={styles.conceptos}>-  </Text>
                        <Text style={styles.txt_s}>Reduce el riesgo de sobrepeso y obesidad infantil en un 12%.</Text>
                    </Text>
                    <Text style={styles.txt_s}>
                        <Text style={styles.conceptos}>-  </Text>
                        <Text style={styles.txt_s}>Mejora el desarrollo motriz de los bebés.</Text>
                    </Text>
                    <Text style={styles.txt_s}>
                        <Text style={styles.conceptos}>-  </Text>
                        <Text style={styles.txt_s}>Alimenta al bebé en cualquier momento ya que siempre se encientra disponible y al alcance de
                            cualquier persona.</Text>
                    </Text>
                    <Text style={styles.txt_s}>
                        <Text style={styles.conceptos}>-  </Text>
                        <Text style={styles.txt_s}>No se tiene que comprar, ni necesita preparación, ni almacenamiento.</Text>
                    </Text>
                    <Text style={styles.txt_s}>
                        <Text style={styles.conceptos}>-  </Text>
                        <Text style={styles.txt_s}>Favorece el ahorro familiar al no tener que gastar en fórmulas lácteas, biberones, chupones
                            y demas utensilios para prepararla.</Text>
                    </Text>
                    <Text style={styles.txt_s}>
                        <Text style={styles.conceptos}>-  </Text>
                        <Text style={styles.txt_s}>Disminuye los gastos de atención de salud del bebé, ya que el niño es menos propenso a enfermarse.</Text>
                    </Text>
                    <Text style={[styles.txt_s]}>
                        <Text style={styles.conceptos}>-  </Text>
                        <Text style={styles.txt_s}>Ahorra tiempo en la preparacion de fórmula, el lavado y la esterilización de biberones.</Text>
                    </Text>
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
        marginLeft:55,
        marginRight:65,
        //marginHorizontal:60,
        lineHeight:30
    },
    imagen: {
        backgroundColor: '#000',
        width: 300,
        height: 180,
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
        marginHorizontal: 30
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

export default BeneficiosLactancia