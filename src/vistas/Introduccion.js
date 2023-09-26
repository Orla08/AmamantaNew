import { StyleSheet, Text, View, Image, ScrollView, Pressable, SafeAreaView } from 'react-native';
import { useNavigation } from "@react-navigation/native";
import AntDesign from 'react-native-vector-icons/AntDesign'

//SafeAreaView solo es en iphone

const imgIntrouccion = require("../../assets/tonykroos.jpg");

function Introduccion() {
    const xx = useNavigation();
    return (
        <SafeAreaView style={styles.container}>
        <View >
            <View style={styles.containerIntroduccion}>
                <Pressable style={styles.iconoAtras}
                    onPress={() => { xx.navigate("Home") }}>
                    <AntDesign name="left" size={24} color="white" />
                </Pressable>
                <Text style={styles.txtIntroduccion}>Introducción</Text>
            </View>
            <View>
                <Image
                    style={styles.imagen}
                    source={imgIntrouccion}
                />
            </View>
            <View>
                <Text style={styles.txt_s}>Mamá estas en una etapa, la
                    cual es uno de los mejores momentos de tu vida.
                </Text>
                <Text style={styles.txt_s}>
                    Esta cartilla busca guiarte, dando respuesta a tus dudas e inquietudes y brindándote consejos para este
                    proceso tan importante para ti, como para tu bebé y toda la familia.
                </Text>
            </View>
        </View>
        </SafeAreaView>

    );
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
        color: '#fff',
        textAlign: 'center',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop:60,
        marginRight:85,
        marginLeft:70,
        //marginHorizontal:80,
        fontWeight :'600',
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
        padding:2,
        fontSize: 20,
        marginHorizontal: 50,
        marginBottom: 10,
        textAlign: 'justify',
        color:'#595858',
        lineHeight: 19
    }

})

export default Introduccion