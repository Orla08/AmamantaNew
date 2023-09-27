import React, { Component } from 'react';
import { View, Text, Button, StyleSheet, TextInput, Pressable, Alert,TouchableOpacity } from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign'
import { useNavigation } from "@react-navigation/native";
//import * as Notifications from 'expo-notifications';

class Prueba extends Component {
  constructor(props) {
    super(props);
    this.state = {
      inputHours: '',
      inputMinutes: '',
      inputSeconds: '',
      remainingSeconds: 0,
      isRunning: false,
    };
  }

  // Función para iniciar el temporizador
  startTimer = () => {
    const { inputHours, inputMinutes, inputSeconds } = this.state;
    const hours = parseInt(inputHours, 10);
    const minutes = parseInt(inputMinutes, 10);
    const seconds = parseInt(inputSeconds, 10);



    if (hours >= 0 && minutes >= 0 && seconds >= 0) {
      const totalSeconds = hours * 3600 + minutes * 60 + seconds;
      if (totalSeconds > 0) {
        this.setState({ isRunning: true, remainingSeconds: totalSeconds });
        this.timer = setInterval(this.tick, 1000); // Actualiza cada segundo
      } else {
        Alert.alert('Seleccione un tiempo válido antes de empezar.');
      }
    } else {
      Alert.alert('Ingrese valores numéricos válidos para las horas, minutos y segundos.');
    }
  };

  // Función para detener el temporizador
  stopTimer = () => {
    this.setState({ isRunning: false });
    clearInterval(this.timer);
  };

  // Función para reiniciar el temporizador
  resetTimer = () => {
    this.setState({
      inputHours: '',
      inputMinutes: '',
      inputSeconds: '',
      remainingSeconds: 0,
      isRunning: false,
    });
    clearInterval(this.timer);
  };

  // Función para formatear segundos a "hh:mm:ss"
  formatTime = (seconds) => {
    const hours = Math.floor(seconds / 3600);
    const minutes = Math.floor((seconds % 3600) / 60);
    const remainingSeconds = seconds % 60;

    return `${hours.toString().padStart(2, '0')}:${minutes
      .toString()
      .padStart(2, '0')}:${remainingSeconds.toString().padStart(2, '0')}`;
  };

  // Función para actualizar el contador de segundos
  tick = () => {
    this.setState((prevState) => ({
      remainingSeconds: prevState.remainingSeconds - 1,
    }));

    if (this.state.remainingSeconds === 0) { //Si el contador llega a 0 manda la notificacion y el alert
      this.stopTimer();
      //this.sendNotification(); // Enviar notificación cuando el temporizador se agote
      Alert.alert('Se acabo el tiempo');
    }
  };

  // Función para enviar una notificación
 /*  sendNotification = async () => {
    try {
      await Notifications.scheduleNotificationAsync({
        content: {
          title: 'Temporizador terminado',
          body: '¡El temporizador ha finalizado!',
        },
        trigger: null, // Notificación inmediata
      });
    } catch (error) {
      console.error('Error al programar la notificación:', error);
    }
    
  }; */

  componentWillUnmount() {
    clearInterval(this.timer); // Limpia el temporizador cuando el componente se desmonta
  }

  

  render() {
    const { inputHours, inputMinutes, inputSeconds, remainingSeconds, isRunning } = this.state;
    const formattedTime = this.formatTime(remainingSeconds);
    const xx = useNavigation();
    // const navegacionb = useNavigation();
    return (
      <View style={styles.container}>
        <View style={styles.containerIntroduccion}>
          <Pressable style={styles.iconoAtras} onPress={() => { xx.navigate("Home") }}>
            <AntDesign name="left" size={24} color="white" />
          </Pressable>
          <Text style={styles.txtBienvenida}>Cronómetro</Text>
        </View>
          <Text style={styles.txtSuperior}>
          Digite la cantidad de tiempo en la que desea volver amamantar al bebe, en el formato  (Horas:Minutos:Segundos) 
          </Text>
        <View style={{ flexDirection: 'row' , justifyContent:'space-between', marginHorizontal:80}}>
          <TextInput
            style={styles.input}
            placeholder=" Horas "
            keyboardType="numeric"
            onChangeText={(text) => this.setState({ inputHours: text })}
            value={inputHours}
          />
          <Text style={{ marginTop: 10 }}> : </Text>
          <TextInput
            style={styles.input}
            placeholder=" Minutos "
            keyboardType="numeric"
            onChangeText={(text) => this.setState({ inputMinutes: text })}
            value={inputMinutes}
          />
          <Text style={{ marginTop: 10 }}> : </Text>
          <TextInput
            style={styles.input}
            placeholder=" Segundos "
            keyboardType="numeric"
            onChangeText={(text) => this.setState({ inputSeconds: text })}
            value={inputSeconds}
          />
        </View>
        <View >
            {!isRunning ? (
              <View style={styles.contenedorBoton1}>
                  <TouchableOpacity
                onPress={this.startTimer} 
                style={styles.btns}
                >
                  <Text>Iniciar</Text>
                </TouchableOpacity>
              </View>
                
            ) : (
                <View style={styles.contenedorBoton2}>
                  <TouchableOpacity
                  onPress={this.stopTimer} 
                  style={styles.btns}
                  >
                      <Text>Detener</Text>
                  </TouchableOpacity>

                  <TouchableOpacity
                  onPress={this.resetTimer}
                  style={styles.btns}
                  >
                      <Text>Reiniciar</Text>
                  </TouchableOpacity>
                </View>
                
              
            )}
        </View>
        

        <Text style={styles.temporizador}>
          Temporizador: {'\n'}{'\n'}{ formattedTime}
          </Text>
      </View>
    );
  }
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
  },
  iconoAtras: {
    marginTop: 65,
  },
  txtBienvenida: {
    fontSize: 30,
    color: '#fff',
    textAlign: 'center',
    marginTop: 60,
    fontWeight: '600',
    marginHorizontal: 80,
  },
  txtSuperior:{
    marginVertical:40,
    textAlign: 'justify',
    fontSize: 17,
    marginHorizontal:40,
  },
  input: {
    alignItems:'flex-end',
    height: 30,
    borderColor: 'gray',
    borderWidth: 1,
    paddingHorizontal: 4,
    margin: 5,
  },
  contenedorBoton1:{
    flexDirection: 'row',
    justifyContent:'space-around'
  },
  contenedorBoton2:{
    justifyContent:'space-around',
    marginHorizontal:90,
    flexDirection:'row'
  },
  btns:{
    backgroundColor:'#6A71B9',
    color: '#fff',
    padding:5,
    borderRadius:6
  },
  temporizador:{
    marginTop: 60,
    fontSize:20,
    fontWeight: '600',
    textAlign: 'center',
  }
});

export default Prueba;
