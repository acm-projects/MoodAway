import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import ItemComponent from '../navigation/Create-journal-entry';

import database from '@react-native-firebase/database';

let itemsRef = database().ref('/Entries');

export default function List() {
  const [itemsArray, setItemsArray] = React.useState([]);
  React.useEffect(() => {
    itemsRef.on('value', snapshot => {
      let data = snapshot.val();
      const Entries = Object.values(data);
      setItemsArray(Entries);
    });
  }, []);

  return (
    <View style={styles.container}>
      {itemsArray.length > 0 ? (
        <ItemComponent items={itemsArray} />
      ) : (
        <Text>No items</Text>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#ebebeb',
  },
});