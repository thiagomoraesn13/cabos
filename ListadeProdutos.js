import React from 'react';
import { 
    StyleSheet, 
    Text, 
    View, 
    FlatList, 
    Dimensions,
    TouchableOpacity 
} from 'react-native';

const data = [
  { key: 'Cabo A' }, { key: 'Cabo B' }, { key: 'Cabo C' }, { key: ' Cabo D' }, { key: 'Cabo E' }, { key: 'Cabo F' }
  , { key: 'Cabo G' }, { key: 'Cabo H' }, { key: 'Cabo I' }, { key: 'Cabo J' },

];

const formatData = (data, numColumns) => {
  const numberOfFullRows = Math.floor(data.length / numColumns);

  let numberOfElementsLastRow = data.length - (numberOfFullRows * numColumns);
  while (numberOfElementsLastRow !== numColumns && numberOfElementsLastRow !== 0) {
    data.push({ key: `blank-${numberOfElementsLastRow}`, empty: true });
    numberOfElementsLastRow++;
  }

  return data;
};

const numColumns = 1;
export default class App extends React.Component {
    static navigationOptions = {
        title: 'Pará Cabos'
    }
  renderItem = ({ item, index }) => {
    if (item.empty === true) {
      return <View style={[styles.item, styles.itemInvisible]} />;
    }
    return (
        <TouchableOpacity onPress={() => this.props.navigation.navigate('Detalhes')}>
      <View
        style={styles.item}
      >
        <Text style={styles.itemText}>{item.key}</Text>
        <Text style={styles.itemText2}>Pequena descricao do {item.key}</Text>
      </View>
      </TouchableOpacity>
    
    );
  };

  render() {
    return (
      <FlatList
        data={formatData(data, numColumns)}
        style={styles.container}
        renderItem={this.renderItem}
        numColumns={numColumns}
      />
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginVertical: 20,
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
  },
  itemText: {
    color: '#026093',
    fontSize: 30,
  },
  itemText2: {
    color: '#026093',
    fontSize: 15,
  },
});