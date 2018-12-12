
import React, {Component} from 'react';
import {
  Platform, 
  StyleSheet, 
  Text, 
  View,
  ImageBackground,
  TextInput,
  TouchableOpacity
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome'
import { CheckBox } from 'react-native-elements'


export default class Usuario extends Component {
    static navigationOptions = {
        title: 'Tipo de Usuario'
    }
  
  render() {
    return (
      <View style={styles.container}>
      {/* <View style = {styles.box}>
     
      <Text style={styles.text}>Se você apenas está procurando os servicos dos instalados credenciados pela ParáCabos e consultar o estoque dos produtos</Text>
      </View>
      <View style = {styles.box}></View>
       */}
        <TouchableOpacity style={styles.button}
           onPress={() => this.props.navigation.navigate('Cadastro')}>
            <Text style={styles.buttonText}>Consumidor</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.button}
           onPress={() => this.props.navigation.navigate('Cadastro')}>
            <Text style={styles.buttonText}>Instalador</Text>
      </TouchableOpacity>

      </View>
    );
  }
}

const styles = StyleSheet.create({

  container:{
      flex: 1,
      justifyContent : 'center',
      alignItems: 'center',
      backgroundColor: '#026093',   

  },
  button:{
    width: 300,
    height: 50,
  
    borderRadius: 25,
    //marginVertical: 700,
    marginTop: 50,
    borderWidth: 3,
    paddingHorizontal: 1, 
    borderColor: '#ffffff',
    
  },
  buttonText:{
    fontSize: 16,
    fontWeight: '500',
    color: '#ffffff',
    textAlign: 'center',
    marginVertical: 16,
  },
  box:{
    height:150,
    width: 350,
    marginTop: 10,
    backgroundColor: 'white',
    borderColor: '#666',
    borderColor: '#999',
    borderWidth: 2,
    margin: 10, 
    borderRadius: 25
  },
  text:{
    fontSize : 20,
    color: 'black',
    marginTop: 10,
}
})