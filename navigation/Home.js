import * as React from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Button} from 'react-native';
import Journal from './Journal';
import { useNavigation } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import database, { FirebaseDatabaseTypes } from '@react-native-firebase/database';
import getFirestore from '@react-native-firebase/database';
import { set } from 'react-native-reanimated';
import List from './Journal-entry';
import { getDatabase, ref, child, get } from "@react-native-firebase/database";


const AppButton = () => {
  const title = "Create Entry";
  const navigation = useNavigation();
  return(
  <TouchableOpacity onPress={() => navigation.navigate('Journal')}
  style={styles.appButtonContainer}>
    <Text style={styles.appButtonText}>{title}</Text>
  </TouchableOpacity>
  )
 };
 



 



const Home = () => {
  const title = "Create Entry";
  const navigation = useNavigation();
   return (
     <><View>
      
       <Text style={styles.text}>Create a Journal</Text>
       <Text style={styles.text2}>Entry to get Started</Text>

     </View><AppButton/></>

      );
 }

 const styles = StyleSheet.create({
   container: {
       flex: 1,
       backgroundColor: '#fff',
       justifyContent: 'center',
   },
   journalEntry: {
       top: 85,
       fontFamily: 'LexendExa-Regular',
       alignSelf: 'center',
       width: '97%',
       position: 'absolute',
       justifyContent: 'space-evenly',
   },
   text: {
       top: 50,
       alignSelf: 'center',
       fontFamily: 'LexendExa-Regular',
       color: '00352F',
       fontSize: 25,
       marginLeft: 25,
       marginRight: 25
   },
   text2: {
    top: 60,
    alignSelf: 'center',
    fontFamily: 'LexendExa-Regular',
    color: '00352F',
    fontSize: 25,
    marginLeft: 25,
    marginRight: 25
},
   text1: {
    top: 30,
    alignSelf: 'center',
    fontFamily: 'LexendExa-Regular',
    color: '00352F',
    fontSize: 17,
},
   appButtonContainer: {
     elevation: 8,
     backgroundColor: "#00352F",
     borderRadius: 50,
     paddingVertical: 13,
     paddingHorizontal: 20,
     marginLeft: 10,
     marginRight: 10,
     top: 250
   },
   appButtonText: {
     fontSize: 18,
     color: "white",
     fontWeight: "bold",
     fontFamily: 'LexendExa-Regular',
     alignSelf: "center",
   },
   title: {
       flexShrink: 1,
       top: -295,
       alignSelf: 'center',
       fontFamily: 'LexendExa-Medium',
       fontSize: 20,
   }
});
 export default Home;