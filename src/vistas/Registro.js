import { View, Text, StyleSheet, TextInput,TouchableOpacity, Alert,Image, SafeAreaView } from 'react-native'
import React, { useState } from 'react'
import axios from 'axios'
//import { useNavigation } from '@react-navigation/native'

const iconUsuario = require('../../assets/iconos/iconUsuario.png')
const icoEdad = require('../../assets/iconos/edad.png')
const icoEmail = require('../../assets/iconos/iconEmail.png');
const icoContrasena = require('../../assets/iconos/iconContrasena.png');

const Registro = () => {

    const [nombre, setNombre] = useState('')
    const [edad, setEdad] = useState(0)
    const [email, setEmail] = useState('')
    const [contrasena, setContrasena] = useState('')
    const [ok, setOk] = useState(false)
    const [enviar, setEnviar] = useState(false) 
    const [contra2, setContra2] = useState('');

    const autenticacion = async () => { //Declara una función asíncrona llamada 
        try {//Es un bloque try...catch, que maneja los errores que puedan ocurrir durante la ejecución de la función.
            //const response = await axios.post(...): Utiliza Axios para realizar una solicitud POST al servidor. Los datos proporcionados 
            //(nombre, edad, email y contraseña) se envían en formato JSON en el cuerpo de la solicitud.
            const response = await axios.post("http://10.1.80.37/php/jjj.php", {
                nombre: nombre,
                edad: edad,
                email: email,
                contrasena: contrasena
            })
            //console.log(response.data); // Muestra la respuesta del servidor

          
            console.log(response.data.users.edad);
            console.log(response.data.edad);

            /* const {nombre, edad, email, contrasena} = response.data.users;
            if(email == setEmail){
                console.log("El email existe bebe")
            } */
            setOk(true)
        } catch (error) { 
            console.error(error);//catch (error) { console.error(error) }: Si ocurre un error durante la solicitud, captura el error y lo muestra en la consola.
        } finally {
            setEnviar(false);// Independientemente de si la solicitud tuvo éxito o falló, este bloque se ejecutará y establecerá el estado enviar en false, lo que significa que no se realizará otra solicitud hasta que se active manualmente.
        }
    };

    const showAlert = () => 
        Alert.alert(
            'REGISTRO',
            'Esta seguro que los datos proporcionados son los correctos?',
            [
              {
                text: 'Cancelar',
                onPress: () => Alert.alert('Se cancelo su registro'),
                style: 'cancel',
              },
              {
                text: 'OK', onPress: () => {
                        autenticacion()
                        // xx.navigate("Login")
                        
                    
                    console.log('Registro Exitoso')
                    }
                }
            ]
          );
    
    // const xx = useNavigation();
  return (

    <SafeAreaView style={styles.container}>
    <View>
        {/* Imagen De Login*/}
            <Image
            source= {require('../../assets/imgHome/AmamantaLogo.png')}
            style={styles.imgLogo}
            />
        <View>
            {/* Formulario De Login*/}
            <Text style={styles.txtRegistarse}>Registrarse</Text>
            <View style={styles.containInputs}>
                 <Image
                    style={styles.iconos}
                    source={iconUsuario}
                    />
                <TextInput placeholder="Nombre"
                    style={styles.inputs}
                    onChangeText={(txtEscrito) => {setNombre(txtEscrito)}}      
                />
            </View>
            <View style={styles.containInputs}>
                 <Image
                    style={styles.iconos}
                    source={icoEdad}
                    />
                <TextInput placeholder="Edad"
                    style={styles.inputs}
                    keyboardType="numeric"
                    onChangeText={(txtEscrito) => {setEdad(txtEscrito)}}      
                />
            </View>
            <View style={styles.containInputs}>
                 <Image
                    style={styles.iconos}
                    source={icoEmail}
                    />
                <TextInput placeholder="Email"
                    style={styles.inputs}
                    keyboardType="email-address"
                    onChangeText={(txtEscrito) => {setEmail(txtEscrito)}}      
                />
            </View>
            <View style={styles.containInputs}>
                <Image
                    style={styles.iconos}
                    source={icoContrasena}
                    />
                <TextInput placeholder="Contraseña" 
                style={styles.inputs}
                secureTextEntry={true}
                onChangeText={(txtEscrito) => {setContrasena(txtEscrito)}}
                />
            </View>
            <View style={styles.containerButtoms}>
                <TouchableOpacity style={styles.button}
                onPress={() =>{
                showAlert()
                }}
                >
                    <Text style={styles.TextBotones}>Registrarse</Text>
                </TouchableOpacity>
            </View>
        </View>
        <TouchableOpacity >
            {/* onPress={() =>{xx.navigate("Login")}} */}
                <Text style={[styles.btnEnlaces,{textDecorationLine: 'underline'}]}>Ya tengo cuenta de ingreso</Text>
        </TouchableOpacity>   
    </View>
    </SafeAreaView>


  )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FFF0F7',
        paddingTop:20,
        alignItems: 'center',
        // justifyContent: 'center',
    },
    imgLogo:{
        width:280,
        height:200,
        objectFit:'fill',
        marginVertical:50, 
        marginHorizontal:60
   },
    txtRegistarse:{
        fontSize:30,
        textAlign: 'center',
        color: '#6A71B9',
        fontWeight: 'bold',
        marginBottom:15
    },
    containInputs:{
        marginTop:10,
        marginBottom:7,
        marginHorizontal:50,
        backgroundColor: '#FAD2E0',
        //paddingVertical:5,
        paddingHorizontal:15,
        flexDirection:'row',
        borderRadius:10,
        alignItems:'center'
    },
    inputs:{
        marginLeft:10,
        width:210
    },
    iconos:{
        width:20,
        height:20,   
    },
    TextBotones:{
        color: '#fff',
        textAlign: 'center',
    },
    containerButtoms:{
        flexDirection:'row',
        justifyContent: 'center'
        
    },
    button:{
        marginTop:20,
        padding:10,
        backgroundColor:'#6A71B9',
        borderRadius:10,
    },btnEnlaces:{
        marginTop:20,
        color:'#FF7BAC',
        textAlign: 'center',
        fontWeight:'600'
        /*textDecorationColor: '#FF7BAC' */
    },
})


export default Registro
