import { useNavigation } from '@react-navigation/native';
import React, {useEffect, useState} from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, InteractionManager} from 'react-native';
import axios from 'axios';
import Home from './Home';
import database, { FirebaseDatabaseTypes } from '@react-native-firebase/database';
import getFirestore from '@react-native-firebase/database';
import { set } from 'react-native-reanimated';
import List from './Journal-entry';
import { getDatabase, ref, child, get } from "@react-native-firebase/database";
import { panGestureHandlerCustomNativeProps } from 'react-native-gesture-handler/lib/typescript/handlers/PanGestureHandler';

const Journal = () => {
    const [journalText, setJournalText] = useState(null);
    const [date, setDate] = useState(null);
    useEffect(() => {
        let today = new Date();
        let date = (today.getMonth() + 1) + '/' + today.getDate() + '/' + today.getFullYear();
        setDate(date);
    }, []);

    const navigation = useNavigation(); 
     let addItem = journalEntry => {
        database().ref('/Entries').push({
          name: journalEntry,
          
        });     
      };

      let addEmotion = journalEntry => {
        database().ref('/Emotions').push({
          name: journalEntry,
          
        });     
      };

      let addValue = journalEntry => {
        database().ref('/Values').push({
          name: journalEntry,
          
        });     
      };
      let addWork = journalEntry => {
        database().ref('/Working').push({
          name: journalEntry,
          
        });     
      };

    const [name, onChangeText] = React.useState("");
    const [emotion, setEmotion] = React.useState("");
    

    const onPress = async() => {
        navigation.navigate('Home')
        addItem(name);
        





    

    const options = {
        method: 'GET',
        url: 'https://twinword-emotion-analysis-v1.p.rapidapi.com/analyze/',
        params: {
          text: journalText
        },
        headers: {
          'X-RapidAPI-Key': 'fa8e044ce2msh2fc16b111e982cap1fcb9fjsn2953f7b7193f',
          'X-RapidAPI-Host': 'twinword-emotion-analysis-v1.p.rapidapi.com'
          
        }
        
    };
      
    await axios.request(options).then(function (response) {
        
        addEmotion(response.data.emotions_detected[0]);

        let joy = response.data.emotion_scores.joy;
        let surprise = response.data.emotion_scores.surprise;
        let sadness = response.data.emotion_scores.sadness;
        let disgust = response.data.emotion_scores.disgust;
        let anger = response.data.emotion_scores.anger;
        let fear = response.data.emotion_scores.fear;
        let total = joy + surprise + sadness + disgust + anger + fear;
        joy /= total;
        surprise /= total;
        sadness /= total;
        disgust /= total;
        anger /= total;
        fear /= total;
        let emotions =  [joy, surprise, sadness, disgust, anger, fear];
        let mainEmotion = [0, 0, 0, 0, 0, 0];
        let secondaryEmotions = [0, 0, 0, 0, 0, 0];
        for (let i = 0; i < emotions.length; i++) {
            if (emotions[i] > .8) {
                mainEmotion[i] = emotions[i];
                //alert(emotionNames[i] + ": " + mainEmotion[i]);
                break;
            }
            else if (emotions[i] > .3) {
                secondaryEmotions[i] = emotions[i];
            }
        }


            for (let i = 0; i < secondaryEmotions.length; i++) {
                if (secondaryEmotions[i] > 0) {
                    //alert(emotionNames[i] + ": " + secondaryEmotions[i]);
                }
            }
            for(let i = 0; i < mainEmotion.length; i++)
            {
                if(mainEmotion[i]>0)
                {
                    addValue(i);
                   
                    
                }
                
            }
            });






        let itemsRef = database().ref('/Values');
        
    
        itemsRef.on('value', (snapshot) => {
        response = snapshot.val();
        addWork(response);
    }, (errorObject) => {
      console.log('The read failed: ' + errorObject.name);
    }); 





            
    };
    
    return (
        <View style={styles.container}>
            <TextInput style={styles.title} multiline={true} placeholder="New Entry" />
            <Text style={styles.text}>{date}</Text>
            <TextInput
                style={styles.journalEntry}
                multiline={true}
                placeholder={"Compose your entry here..."}
                onChangeText={(journalText) => setJournalText(journalText)}
                value={journalText}
            />
            <TextInput style={styles.journalEntry}   onChangeText={(journalText) => setJournalText(journalText)} value={journalText} placeholder = {"Compose your entry here..."} />
        <TextInput style={styles.journalEntry}   multiline = {true} onChangeText={journalText => onChangeText(journalText) }  placeholder = {"Compose your entry here..."}/>
            <TouchableOpacity
                style={styles.button}
                onPress={onPress}>
                <Text style={styles.buttonText}>Generate Analysis</Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        justifyContent: 'center',
    },
    text: {
        top: '7%',
        //fontFamily: 'LexendExa-Regular',
        alignSelf: 'center',
        position: 'absolute',
        color: 'black',
        fontSize: 15,
    },
    title: {
        flexShrink: 1,
        top: '2%',
        position: 'absolute',
        alignSelf: 'center',
        fontSize: 20,
        //fontFamily: 'LexendExa-Medium'
    },
    journalEntry: {
        height: '72%',
        alignSelf: 'center',
        width: '97%',
        position: 'relative',
        justifyContent: 'space-evenly',
       // fontFamily: 'LexendExa-Medium'
    },
    button: {
        alignSelf: 'center',
        width: '55%',
        borderRadius: 20,
        top: '89%',
        position: 'absolute',
        backgroundColor: '#00352F',
        padding: 10
    },
    buttonText: {
        alignSelf: 'center',
        color: '#fff',
        //fontFamily: 'LexendExa-Regular',
    }
});

export default Journal;