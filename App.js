import React from 'react'
import { Text, View, SafeAreaView, Icon } from 'react-native'
import Login2 from './src/vistas/Login2'
import Registro from './src/vistas/Registro.js'

import AntDesign from 'react-native-vector-icons/AntDesign'
import Icons from 'react-native-vector-icons/MaterialCommunityIcons' //Instancia Luego name y dentro del name como se llama
import Home from './src/vistas/Home'
import { Navegacion } from './src/vistas/navegacion/Navegacion'


/* <Icons name='chevron-left' style={{color:'black', fontSize:30}}/> */
function App() {
    return (
          <Navegacion/>
    )
}



export default App
