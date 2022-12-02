import React, {useEffect, useState} from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, SafeAreaView, FlatList, Linking} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const DATA = [
  {

    title: 'Coping with Sadness | How Right Now - CDC',
    link: 'https://www.cdc.gov/howrightnow/resources/coping-with-sadness/index.html',
    date: '11-28-22'
  },
  {
    title: 'How to overcome fear and anxiety - Mental Health Foundation',
    link: 'https://www.mentalhealth.org.uk/explore-mental-health/publications/how-overcome-fear-and-anxiety',
    date: '11-28-22'
  }
];
const Item = ({ item, backgroundColor, textColor, onPress }) => (
  <TouchableOpacity onPress = {onPress} style={[styles.item, backgroundColor]}>
    <Text style={[styles.title]}>{item.title}</Text>
    <Text style={[styles.date]}>Saved on: {item.date}</Text>
    {/* <Text style={[styles.source, textColor]}>{item.source}</Text> */}
  </TouchableOpacity>
);

const Saved = () => {
const renderItem = ({ item }) => {
  const backgroundColor = "#D3D3D3";
  // const color = item.id === selectedId ? 'white' : 'black';
  return (

    <Item
      item={item}
      onPress={() => Linking.openURL(item.link)}
      backgroundColor={{backgroundColor}}
      textColor={'#808080'}
    />
  );
};
return (
  <>


  <SafeAreaView style={styles.container}>
    <FlatList
      data={DATA}
      renderItem={renderItem}
       />
  </SafeAreaView></>
);
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  item: {
    top: 10,
    padding: 20,
    marginVertical: 5,
    marginHorizontal: 16,
  },
  buttonText: {
    fontFamily: 'LexendExa-Regular',
    color: '00352F',
  },
  title: {
   fontFamily: 'LexendExa-Regular',
    fontSize: 15,
  },
  date: {
    fontFamily: 'LexendExa-Regular',
     fontSize: 10,
   },
  text: {
    marginTop: 55,
    alignSelf: 'center',
   fontFamily: 'LexendExa-Regular',
    color: '00352F',
    fontSize: 9,
    marginBottom: 10,
    marginLeft: 15,
    marginRight: 15
},
mood: {
  marginTop: 60,
  alignSelf: 'center',
 fontFamily: 'LexendExa-Regular',
  fontSize: 15,
  marginLeft: 15,
  marginRight: 15
},
heading: {
  marginVertical: 20,
  alignSelf: 'center',
  fontFamily: 'LexendExa-Regular',
  color: '00352F',
  fontSize: 20,
  marginLeft: 15,
  marginRight: 15
},
  source: {
   fontFamily: 'LexendExa-Regular',
    fontSize: 10,
  },
  Saved: {
   fontFamily: 'LexendExa-Regular',
    alignSelf: 'center',
    color: 'black',
    fontSize: 20,
},
appButtonContainer: {
  elevation: 8,
  backgroundColor: "#00352F",
  borderRadius: 50,
  paddingVertical: 13,
  paddingHorizontal: 20,
  marginLeft: 10,
  marginRight: 10,
  bottom: 20
},
appButton1stContainer: {
  elevation: 8,
  backgroundColor: "#00352F",
  borderRadius: 50,
  paddingVertical: 13,
  paddingHorizontal: 20,
  marginLeft: 10,
  marginRight: 10,
  marginTop: 20
},
appButtonText: {
  fontSize: 18,
  color: "white",
  fontWeight: "bold",
 fontFamily: 'LexendExa-Regular',
  alignSelf: "center",
},
text3: {
  top: 50,
  alignSelf: 'center',
 fontFamily: 'LexendExa-Regular',
  color: '#00352F',
  fontSize: 25,
  marginLeft: 25,
  marginRight: 25
},
text2: {
top: 60,
alignSelf: 'center',
fontFamily: 'LexendExa-Regular',
color: '#00352F',
fontSize: 25,
marginLeft: 25,
marginRight: 25
},
text1: {
top: 30,
alignSelf: 'center',
fontFamily: 'LexendExa-Regular',
color: '#00352F',
fontSize: 17,
},
});


  export default Saved;