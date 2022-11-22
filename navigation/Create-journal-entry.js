import React  from 'react';
import { View, Text, StyleSheet } from 'react-native';


export default function ItemComponent ({Entries}) {
    return (
      <View style={styles.itemsList}>
        {Entries.map((Entry, index) => {
          return (
            <View key={index}>
              <Text style={styles.itemtext}>{Entry.name}</Text>
            </View>
          );
        })}
      </View>
    );
 }

const styles = StyleSheet.create({
  itemsList: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'space-around'
  },
  itemtext: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center'
  }
});