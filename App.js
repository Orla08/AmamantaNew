import React from 'react'
import { Text, StyleSheet, View, SafeAreaView, Icon } from 'react-native'
import Login from './src/vistas/Login'

import AntDesign from 'react-native-vector-icons/AntDesign'
import Icons from 'react-native-vector-icons/MaterialCommunityIcons' //Instancia Luego name y dentro del name como se llama


/* <Icons name='chevron-left' style={{color:'black', fontSize:30}}/> */
function App() {
    return (
      <SafeAreaView style={styles.container}>
        <View>
          <Login/>
        </View>
      </SafeAreaView>
    )
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    alignItems:'center'
  }
})

export default App
