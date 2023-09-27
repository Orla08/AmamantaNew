import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import React from "react";
import { Image } from "react-native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import Home from "../Home.js";
import Videos from "../Videos.js";
import Documentacion from "../Documentacion.js";
import ConsejosBebe from "../ConsejosBebe.js";
import DescansoBebe from "../DescansoBebe.js";
import Introduccion from "../Introduccion.js";
import LactanciaMaterna from "../LactanciaMaterna.js";
import LQPETC from "../LQPETC.js";
import BeneficiosLactancia from "../BeneficiosLactancia.js";
import CambiosDeLeche from "../CambiosDeLeche.js";
import PosicionesAmamantar from "../PosicionesAmamantar.js";
import TiposDePezon from "../TiposDePezon.js";
import Cronometro from "../Cronometro.js";
import Prueba from "../Prueba.js";
import Login2 from "../Login2.js";
import Registro from "../Registro.js";
// import Login from "../Login.js";
// import Registro from "../Registro.js";

const iconVideos = require('/Users/iMac10/Documents/GitHub/AmamantaNew/assets/iconos/video.png')
const iconHome = require('/Users/iMac10/Documents/GitHub/AmamantaNew/assets/iconos/home.png')
const iconDocumentos= require('/Users/iMac10/Documents/GitHub/AmamantaNew/assets/iconos/documentos.png') 



export const Navegacion = () => {

    return (
        <NavigationContainer >
            <SatckGroup />
        </NavigationContainer>
    );
}

//Tab
const Tab = createBottomTabNavigator(); //Instanciamos la clase createBottomTabNavigator en Tab

function TabGroup() {
    return (
        <Tab.Navigator
            initialRouteName="Inicio" //Aqui le digo al tab navigateor que por defecto debe empezar en el Screen que tiene como nombre Inicio
            screenOptions={{ //Opciones de vitsas del tab navigator
                tabBarActiveTintColor: '#191970' //Cuando se presione por defecto tendra este color
            }}
            style={{ alignItems: 'center'}}
        >
            <Tab.Screen name="Videos" component={Videos}
                options={{ headerShown: false, 
                tabBarShowLabel: false, 
                tabBarIcon: ({focused}) => (<Image source={iconVideos} style={[{tintColor: focused? '#FAD2E0':'#6A71B9'},{width:28, height:27}]}/>) }} />
            
            <Tab.Screen name="Inicio" component={Home}
                options={{ headerShown: false, 
                tabBarShowLabel: false,
                tabBarIcon: ({focused}) => (<Image source={iconHome} style={[{tintColor: focused? '#FAD2E0':'#6A71B9'},{width:33, height:30}]}/>) }}/>
            
            <Tab.Screen name="Documentacion" component={Documentacion}
                options={{ headerShown: false, 
                tabBarShowLabel: false,
                tabBarIcon: ({focused}) => (<Image source={iconDocumentos} style={[{tintColor: focused? '#FAD2E0':'#6A71B9'},{width:21, height:29}]}/>) }}/>
        </Tab.Navigator>
    )
}

// //Stack
 const Stack = createNativeStackNavigator(); //Instanciamos la clase createNativeStackNavigator en Tab

function SatckGroup() {
    return (
        <Stack.Navigator>
             <Stack.Screen name="Login" component={Login2} options={{ headerShown: false}} />
            <Stack.Screen name="Registro" component={Registro}options={{ headerShown: false }} /> 
            <Stack.Screen name="Home" component={TabGroup} options={{ headerShown: false }} />
            <Stack.Screen name="ConsejosBebe" component={ConsejosBebe} options={{ headerShown: false }} />
            <Stack.Screen name="DescansoBebe" component={DescansoBebe} options={{ headerShown: false }} />
            <Stack.Screen name="Introduccion" component={Introduccion} options={{ headerShown: false }} />
            <Stack.Screen name="LactanciaMaterna" component={LactanciaMaterna} options={{ headerShown: false }} />
            <Stack.Screen name="LQPETC" component={LQPETC} options={{ headerShown: false }} />
            <Stack.Screen name="BeneficiosLactancia" component={BeneficiosLactancia} options={{ headerShown: false }} /> 
            <Stack.Screen name="CambiosDeLeche" component={CambiosDeLeche} options={{ headerShown: false }} /> 
            <Stack.Screen name="PosicionesAmamantar" component={PosicionesAmamantar} options={{ headerShown: false }} /> 
            <Stack.Screen name="TiposDePezon" component={TiposDePezon} options={{ headerShown: false }} />
            <Stack.Screen name="Cronometro" component={Cronometro} options={{ headerShown: false }} />
            <Stack.Screen name="Prueba" component={Prueba} options={{ headerShown: false }} />
            
        </Stack.Navigator>
    )
} 


