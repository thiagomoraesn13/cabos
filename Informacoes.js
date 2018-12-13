
import React, {Component} from 'react';
import {
  Platform, 
  StyleSheet, 
  Text, 
  View,
  ImageBackground,
  TextInput,
  TouchableOpacity,
  Image,
  FlatList,
  Dimensions,
} from 'react-native';


export default class Informacoes extends Component {
  static navigationOptions = {
     title: 'Informacoes'
    } 
state = {
    data: null
}

componentDidMount() {
  const params  = this.props.navigation.state.params
 // fetch(`https://paracabos-teste.herokuapp.com/produtos/1`)
  
   fetch("https://paracabos-teste.herokuapp.com/produtos/"+params.id)
  .then(response => response.json())
  .then(response => this.setState({ data: response }))
  .catch(error => console.warn('errorsan' + error.error));
}
  render() {
    if (this.state.data !== null){
        var component = ([
        <Text style={styles.itemText}>Nome do Produto: {this.state.data.nome}</Text>,  
        <Text style={styles.itemText}>Marca: {this.state.data.marca}</Text>,
        <Text style={styles.itemText}>Descrição: {this.state.data.descricao}</Text>,
        

         ] )
    }
    return (
        <View>
        {component}
        </View>
      );
    }
}
const styles = StyleSheet.create({
  container:{
      flex: 1,
      marginVertical: 20,
  },
  itemText: {
    color: '#026093',
    fontSize: 30,
  },
  item: {
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
    margin: 6,
    height: Dimensions.get('window').width / 4, // approximate a square
    borderWidth: 1,
    paddingHorizontal: 3, 
    borderColor: '#026093',
    padding: 20
  },
  itemInvisible: {
    backgroundColor: 'transparent',
  }
})