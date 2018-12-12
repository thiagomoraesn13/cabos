
import React, {Component} from 'react';
import {
  Platform, 
  StyleSheet, 
  Text, 
  View,
  ImageBackground,
  TextInput,
  TouchableOpacity,
  Image
} from 'react-native';

import todayImage from './assets/today.jpg'


export default class Login extends Component {
  static navigationOptions = {
    title: 'Login'
}

  render() {
    return (
      <View style={styles.container}>
        <ImageBackground source = {todayImage}style={styles.background}>
        </ImageBackground>
        <View style={styles.container}>
        <TextInput 
             style={styles.inputBox} 
             placeholder = 'Username'
             underlineColorAndroid = 'rgba(0,0,0,0)'           
          />
            <TextInput 
             style={styles.inputBox} 
             placeholder = 'Password'
             underlineColorAndroid = 'rgba(0,0,0,0)'           
          />
          <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>Entrar</Text>
          </TouchableOpacity>
          <View style = {styles.signupTextCont}>
          <Text>Esqueceu sua senha?</Text>
          </View>
          <TouchableOpacity style={styles.button2}
           onPress={() => this.props.navigation.navigate('Usuario')}>
            <Text style={styles.buttonText}>Cadastrar</Text>
          </TouchableOpacity>
        </View>   
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container:{
      flex: 1,
      justifyContent : 'center',
      alignItems: 'center'   

  },
  background:{
      width: 430, height: 250
  },
  inputBox:{
    width: 250,
    borderRadius: 25,
    borderColor: '#026093',
    paddingHorizontal: 16,
    fontSize: 16,
    color: 'black',
    marginVertical: 10,
    borderWidth: 2, 
  },
  button:{
    width: 250,
    height: 50,
    backgroundColor: '#026093',
    borderRadius: 25,
    marginVertical: 10,
    
  },
  buttonText:{
    fontSize: 16,
    fontWeight: '500',
    color: '#ffffff',
    textAlign: 'center',
    marginVertical: 16,
  
  },
  signupTextCont:{
    //flexGrow: 1,
    alignItems : 'center',
    justifyContent: 'center'
  },
  button2:{
    width: 250,
    height: 50,
    backgroundColor: '#026093',
    borderRadius: 25,
    marginVertical: 70,
    
  }, 

})