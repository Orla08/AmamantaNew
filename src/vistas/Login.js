import React, { useState } from 'react'
import { Text, StyleSheet, View, Image } from 'react-native'

import Imputs from '../componentes/imputs/Imputs'
const logo = require('../../assets/imgHome/AmamantaLogo.png')
const icoEmail = require('../../assets/iconos/iconEmail.png');
const icoContrasena = require('../../assets/iconos/iconContrasena.png');

export default function Login () {
    const [id, setId] = useState('')
    const [email, setEmail] = useState('')
    const [contrasena, setContrasena] = useState('')


    return (
      <View style={styles.container}>
        <Image 
        source={logo}
        style={styles.imgLogo} resizeMode='contain'/>
        <Text style={styles.txtRegistarse}>Ingresa con tu nueva {'\n'}o crea una nueva</Text>
        <Imputs imagen={icoEmail} valor={email} setValor={setEmail} placeholder="orlan@gmail.com / Email" />
        <Imputs imagen={icoContrasena} valor={contrasena} setValor={setContrasena} placeholder="orlan@gmail.com / Email" />
      </View>
    )
  }

const styles = StyleSheet.create({
    container:{
        alignItems:'center',
        padding:20,
        backgroundColor:'#FFF0F7',
        flex:1
    },
    imgLogo:{
        width: 280,
        maxWidth:500,
        height:200,
        maxHeight:380,
        objectFit:'fill',
        marginBottom:60
    },
    txtRegistarse:{
        fontSize:30,
        textAlign: 'center',
        color: '#6A71B9',
        fontWeight: 'bold',
        marginBottom:25,
        marginHorizontal:25
    },
})
