
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

// constructor(){
//     super();
//     this.state = {
//         data : null
//     }
// }

state = {
    data: null
}

componentDidMount() {
  const params  = this.props.navigation.state.params
  fetch(`https://paracabos-teste.herokuapp.com/produtos/1`)
  
 //  fetch("https://paracabos-teste.herokuapp.com/produtos/"+params.id)
  .then(response => response.json())
  .then(response => this.setState({ data: response }))
  .catch(error => console.warn('errorsan' + error.error));
}

// //   render() {
// //     return (
        
// //         <View style={styles.container}>
// //          <Text style = {styles.itemText}>{this.data.nome}</Text>
// //         {/* <Text style = {styles.itemText}>{params.id.outro_param}</Text>
// //          */}
// //         </View>
// //       );
// //     }
// // }
// renderItem = ({ item, index }) => {

//     if(item.id !== 0){
//     return (
      
//       <View style={styles.item}> 
//         <Text style={styles.itemText}>{item.id}</Text>
//       </View>
     
    
//     );
//     }
//   };

//     render() {
//         return (
//             <View style={styles.container}>
//               {this.state.data ?
//                 <FlatList
//                   renderItem={this.renderItem}
//                   style={styles.container}
//                   keyExtractor={(_, index) => index}
//                   numColumns={1}
//                   />:null}
//                 </View> 
//           );
//         }
// }


// componentWillMount(){
//     this.fetchData();
// }

// fetchData = async () => {
//     const params  = this.props.navigation.state.params
//     const response = await fetch("https://paracabos-teste.herokuapp.com/produtos/1");
//     const json = await response.json();
//     this.setState({data: json});
// }
  render() {
    if (this.state.data !== null){
        var component = ([
        <Text> nome: {this.state.data.nome}</Text>,  
        <Text> id: {this.state.data.id}</Text>
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