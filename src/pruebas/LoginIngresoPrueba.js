import React, { useContext, useState, useEffect } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {
    View,
    Text,
    Image,
    StyleSheet,
    useWindowDimensions,
    Alert,
    ScrollView,
    TextInput,
    Button
} from 'react-native';
import Logo from '../../../assets/images/herzia-color.png';
import CustomImput from '../../components/CustomImput/Index';
import CustomButton from '../../components/CustomButton/Index';
import SocialSignInButtons from '../../components/SocialSignInButtons/Index';
import { useNavigation } from '@react-navigation/native';
import { useForm } from 'react-hook-form';
import { AuthContext } from '../../context/AuthContext';
import Spinner from 'react-native-loading-spinner-overlay';
import Auth from '../../services/auth';


const SigninScreen = () => {


    const [email, setEmail] = useState(null);
    const [password, setPassword] = useState(null);


    const { height } = useWindowDimensions();
    const navigation = useNavigation();
    const { control, handleSubmit } = useForm();


    const OlvidoContraseña = () => {
        navigation.navigate('RestablecerContrasena');
    };

    const CrearCuenta = () => {
        navigation.navigate('Registro');
    };


    return (
        <ScrollView showsVerticalScrollIndicator={false}>
            <View style={styles.root}>
                <Image
                    source={Logo}
                    style={[styles.logo, { height: height * 0.3 }]}
                    resizeMode="contain"
                />
                <CustomImput
                    iconName="account-outline"
                    name="username"
                    placeholder="Username"
                    customValue={email}
                    customOnChange={setEmail}
                    control={control}
                    rules={{
                        required: 'El usuario es requerido',
                        minLength: {
                            value: 5,
                            message: 'La usuario mínima debe ser de 5 caracteres',
                        },
                        maxLength: {
                            value: 25,
                            message: 'El usuario debe tener máximo 25 caracteres'
                        }
                    }}
                />
                <CustomImput
                    iconName="lock-outline"
                    name="password"
                    placeholder="Password"
                    customValue={password}
                    customOnChange={setPassword}
                    secureTextEntry
                    control={control}
                    rules={{
                        required: 'La contraseña es requerida',
                        minLength: {
                            value: 4,
                            message: 'La contraseña mínima debe ser de 4 caracteres',
                        },
                    }}
                />

                <CustomButton
                    text="Iniciar sesion"
                    onPress={handleSubmit(() => Auth.signIn(email, password))}
                    type={'PRIMARY'}
                />

                <CustomButton
                    text="Olvidaste tu contraseña?"
                    onPress={OlvidoContraseña}
                    type="TERTIARY"
                />


                <SocialSignInButtons />

                <CustomButton
                    text="No has creado una cuenta? Presiona aquí"
                    onPress={CrearCuenta}
                    type="TERTIARY"
                />
            </View>
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    root: {
        alignItems: 'center',
        padding: 20,
    },

    logo: {
        width: '70%',
        maxWidth: 300,
        maxHeight: 200,
    },
});

export default SigninScreen;