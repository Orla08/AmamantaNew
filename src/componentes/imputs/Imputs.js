import React, { Component } from 'react'
import { Text, StyleSheet, View, TextInput, Image } from 'react-native'


export default function Imputs({ imagen, valor, setValor, placeholder}) {
    return (
      <View style={styles.container}>
        <Image
            style={styles.iconos}
            source={imagen}
        />
        <TextInput 
        value={valor}
        onChangeText={setValor} 
        placeholder={placeholder}
        style={styles.txtInput}
        />
      </View>
    )
  }

const styles = StyleSheet.create({
    container:{
        // marginTop:10,
        // marginBottom:7,
        marginHorizontal:50,
        backgroundColor: '#FAD2E0',
        paddingHorizontal:10 ,
        flexDirection:'row',
        borderRadius:10,
        borderWidth:1,
        borderColor: '#e8e8e8',
        width:'90%',
        alignItems:'center'
    },
    txtInput:{
        fontSize:17
    },
    iconos:{
        width:20,
        height:20
    }
})
