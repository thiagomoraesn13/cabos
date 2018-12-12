
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

export default class Login extends Component {
  static navigationOptions = {
    title: 'Cadasto'
}

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.container}>
        <TextInput 
             style={styles.inputBox} 
             placeholder = 'Usuario'
             underlineColorAndroid = 'rgba(0,0,0,0)'           
          />
            <TextInput 
             style={styles.inputBox} 
             placeholder = 'Senha'
             underlineColorAndroid = 'rgba(0,0,0,0)'           
          />
            <TextInput 
             style={styles.inputBox} 
             placeholder = 'Confirme sua senha'
             underlineColorAndroid = 'rgba(0,0,0,0)'           
          />
          <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>Entrar</Text>
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