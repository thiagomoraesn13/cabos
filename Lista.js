
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


export default class Lista extends Component {
  static navigationOptions = {
    title: 'Lista de Produtos'
}
constructor(){
    super();
    this.state = {
        data : null
    }
}



componentDidMount() {
  
    fetch(`https://paracabos-teste.herokuapp.com/produtos/1/10`)
  .then(response => response.json())
  .then(response => this.setState({ data: response }))
  .catch(error => console.warn('errorsan' + error.error));
}
// renderItem({ item }) {
// return (
//     <View style={styles.container}>  
//         <Text 
//         style = {styles.itemText}>{item.descricao}</Text>
//       </View>
//   )
// }

renderItem = ({ item, index }) => {
    if (item.empty === true) {
      return <View style={[styles.item, styles.itemInvisible]} />;
    }
    if(item.id !== 0){
      // let params = {
      //   id:item.id,
      //   outro_param: item.descricao
      // }
    return (
        <TouchableOpacity onPress={() => this.props.navigation.navigate('Informacoes',{id:item.id})}>
      <View style={styles.item}> 
        <Text style={styles.itemText}>{item.descricao}</Text>
      </View>
      </TouchableOpacity>
    
    );
    }
  };

  render() {
    return (
        <View style={styles.container}>
          {this.state.data ?
            <FlatList
              data={this.state.data.data}
              renderItem={this.renderItem}
              style={styles.container}
              keyExtractor={(_, index) => index}
              numColumns={1}
              />:null}
            </View> 
      );
    }
}

// render() {
//     return (
//       <FlatList
//         data={formatData(data, numColumns)}
//         style={styles.container}
//         renderItem={this.renderItem}
//         numColumns={numColumns}
//       />
//     );
//   }
// }


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