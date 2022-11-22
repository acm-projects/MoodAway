import React, { useState } from "react";
import axios from 'axios';
import { FlatList, SafeAreaView, StatusBar, StyleSheet, Text, TouchableOpacity, Linking, View } from "react-native";

// const DATA = [];
//     // request Axios
//     axios.get('https://app.scrapingbee.com/api/v1/store/google', {
//         params: {
//             'api_key': '50TAWJGLEE78ADGR9TF66O3JG0DBGOHS53OGM0SB293FUVA2792RP5DGCMQTI73Z6E8AVAHUCOKYC9U1',
//             'search': 'pizza new york',
//         }
//     }).then(function (response) {
//       for(let i = 0; i < 5; i++) {
//           let item = {};
//           item.id = i+1;
//           item.title = response.data.organic_results[i].title;
//           item.link = response.data.organic_results[i].url;
//           DATA.push(item);
//         }
//       alert();
//     }).catch(error => {throw error})

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
      }
  ];


const Item = ({ item, onPress, backgroundColor, textColor }) => (
  <TouchableOpacity onPress={onPress} style={[styles.item, backgroundColor]}>
    <Text style={[styles.title]}>{item.title}</Text>
    <Text style={[styles.source, textColor]}>{item.snippet}</Text>
  </TouchableOpacity>
);

const Profile = () => {
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
    <SafeAreaView style={styles.container}>
      <FlatList
        data={DATA}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        extraData={selectedId}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
  },
  item: {
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  title: {
    //fontFamily: 'LexendExa-Regular',
    fontSize: 15,
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
});

export default Profile;