import { useNavigation } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Journal from './Journal';
import React, { useState } from "react";
import { FlatList, ScrollView, SafeAreaView, StatusBar, StyleSheet, Text, TouchableOpacity, Linking, View, Alert} from "react-native";
import prompt from "@powerdesigninc/react-native-prompt";
// function promptMe(){
//   var num = prompt("Please provide a rating for your mood between 1-10");
//   Alert.alert (userAdjective);
// }
const AppButton = () => {
  const title = "Rate Your Entry";
  const navigation = useNavigation();
  return(
    <TouchableOpacity onPress={() => {
      prompt('Rate Your Entry 1-10', null, (input)=>{console.log(input)});
    }}  style={styles.appButtonContainer}>
    <Text style={styles.appButtonText}>{title}</Text>
  </TouchableOpacity>
  )
 };
 const AppButton1st = () => {
  const title = "Rate Entry";
  const navigation = useNavigation();
  return(
<TouchableOpacity onPress={() => {
    prompt('Rate Your Entry 1-10', null, (input)=>{console.log(input)});
  }}  style={styles.appButton1stContainer}>
    <Text style={styles.appButtonText}>{title}</Text>
  </TouchableOpacity>
  )
 };
const DATA = [
    {
        id: '1',
        title: 'How to Become Less Angry',
        source: 'New York Times',
        date: '02/03/2022',
        link: 'https://www.nytimes.com/2019/01/23/magazine/how-to-become-less-angry.html#:~:text=Learn%20relaxation%20and%20mindfulness%20techniques,regions%20that%20regulate%20threat%20response.',
    },
    {
        id: '2',
        title: 'Six Ways Happiness is Good for your health',
        source: 'Berkeley University',
        date: '07/08/2021',
        link: 'https://greatergood.berkeley.edu/article/item/six_ways_happiness_is_good_for_your_health'
    },
    {
        id: '3',
        title: 'Learning to Like Disgust',
        source: 'National Library of Medicine',
        date: '07/02/2021',
        link: 'https://www.ncbi.nlm.nih.gov/pmc/articles/PMC3703531/'
    },
    {
        id: '4',
        title: 'We are all Mad as Hell, Thanks to Late Stage Capitalism',
        source: 'GEN',
        date: '04/03/2020',
        link: 'https://gen.medium.com/were-all-mad-as-hell-thanks-to-late-capitalism-1c0dedb41ce9'
    },
    {
      id: '5',
      title: 'We are all Mad as Hell, Thanks to Late Stage Capitalism',
      source: 'GEN',
      date: '04/03/2020',
      link: 'https://gen.medium.com/were-all-mad-as-hell-thanks-to-late-capitalism-1c0dedb41ce9'
   },
   {
    id: '6',
    title: 'We are all Mad as Hell, Thanks to Late Stage Capitalism',
    source: 'GEN',
    date: '04/03/2020',
    link: 'https://gen.medium.com/were-all-mad-as-hell-thanks-to-late-capitalism-1c0dedb41ce9'
 },
];
const Mood = ({nm}) => {
  let content
  if (nm == '2') {
    content = <Text style={{marginTop: 25,
      color: "blue",
      alignSelf: 'center',
      //fontFamily: 'LexendExa-Regular',
      fontSize: 25,
      marginLeft: 15,
      marginRight: 15 }}>Sad</Text>
  } else if (nm == '0') {
    content = <Text style={{ marginTop: 25,
      color: "orange",
      alignSelf: 'center',
      //fontFamily: 'LexendExa-Regular',
      fontSize: 25,
      marginLeft: 15,
      marginRight: 15  }}>Happy</Text>
  } else if (nm == '4') {
    content = <Text style={{ marginTop: 25,
      color: "red",
      alignSelf: 'center',
      //fontFamily: 'LexendExa-Regular',
      fontSize: 25,
      marginLeft: 15,
      marginRight: 15  }}>Angry</Text>
  }
  else if (nm == '3') {
    content = <Text style={{ marginTop: 25,
      color: "green",
      alignSelf: 'center',
      //fontFamily: 'LexendExa-Regular',
      fontSize: 25,
      marginLeft: 15,
      marginRight: 15  }}>Disgusted</Text>
  }
  else if (nm == '5') {
    content = <Text style={{ marginTop: 25,
      color: "purple",
      alignSelf: 'center',
     // fontFamily: 'LexendExa-Regular',
      fontSize: 25,
      marginLeft: 15,
      marginRight: 15  }}>Fearful</Text>
  }
  else if (nm == '1') {
    content = <Text style={{ marginTop: 25,
      color: "brown",
      alignSelf: 'center',
     // fontFamily: 'LexendExa-Regular',
      fontSize: 25,
      marginLeft: 15,
      marginRight: 15  }}>Surprised</Text>
  }
  return <View style={{ padding: 24 }}>{content}</View>
}
// const SerpApi = require('google-search-results-nodejs')
// const search = new SerpApi.GoogleSearch("2ac245bf098f88ffb9a54f77a731a5fd9f46cc03973e5b28f132127d539decf4")
// const DATA = [];
// search.json({
//  q: "Happy",
//  location: "Austin, TX"
// }, (result) => {
//   for(let i = 0; i < 5; i++) {
//     let item = {};
//     item.id = i+1;
//     item.title = result.organic_results[i].title;
//     item.link = result.organic_results[i].link;
//     item.snippet = result.organic_results[i].snippet;
//     DATA.push(item);
//   }
//   //console.log(DATA);
// })
const Item = ({ item, onPress, backgroundColor, textColor }) => (
  <TouchableOpacity onPress={onPress} style={[styles.item, backgroundColor]}>
    <Text style={[styles.title]}>{item.title}</Text>
    <Text style={[styles.source, textColor]}>{item.source}</Text>
  </TouchableOpacity>
);
const nm=3;
const Analysis = () => {
const number=nm;
const navigation = useNavigation();
const [selectedId, setSelectedId] = useState(null);
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
  <Text style={styles.heading}>Today's Mood</Text>
  <View>
    <Mood nm={number} />
  </View>
  {/* <AppButton1st/> */}
  <Text style={styles.text}>Scroll for tips and articles to better understand your mood</Text>
  <SafeAreaView style={styles.container}>
    <FlatList
      data={DATA}
      renderItem={renderItem}
      keyExtractor={(item) => item.id}
      extraData={selectedId} />
      <AppButton />
  </SafeAreaView></>
);
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
  },
  item: {
    top: 10,
    padding: 20,
    marginVertical: 5,
    marginHorizontal: 16,
  },
  title: {
   //fontFamily: 'LexendExa-Regular',
    fontSize: 15,
  },
  text: {
    marginTop: 55,
    alignSelf: 'center',
   //fontFamily: 'LexendExa-Regular',
    color: '00352F',
    fontSize: 9,
    marginBottom: 10,
    marginLeft: 15,
    marginRight: 15
},
mood: {
  marginTop: 60,
  alignSelf: 'center',
 //fontFamily: 'LexendExa-Regular',
  fontSize: 15,
  marginLeft: 15,
  marginRight: 15
},
heading: {
  marginVertical: 20,
  alignSelf: 'center',
  //fontFamily: 'LexendExa-Regular',
  color: '00352F',
  fontSize: 20,
  marginLeft: 15,
  marginRight: 15
},
  source: {
   //fontFamily: 'LexendExa-Regular',
    fontSize: 10,
  },
  Saved: {
   //fontFamily: 'LexendExa-Regular',
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
 //fontFamily: 'LexendExa-Regular',
  alignSelf: "center",
},
text3: {
  top: 50,
  alignSelf: 'center',
 //fontFamily: 'LexendExa-Regular',
  color: '00352F',
  fontSize: 25,
  marginLeft: 25,
  marginRight: 25
},
text2: {
top: 60,
alignSelf: 'center',
//fontFamily: 'LexendExa-Regular',
color: '00352F',
fontSize: 25,
marginLeft: 25,
marginRight: 25
},
text1: {
top: 30,
alignSelf: 'center',
//fontFamily: 'LexendExa-Regular',
color: '00352F',
fontSize: 17,
},
});
export default Analysis;

