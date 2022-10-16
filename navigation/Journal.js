import React, {useEffect, useState} from 'react';
import { StyleSheet, Text, View, TextInput, Button} from 'react-native';

import Home from './Home';


const Journal = () => { 
    const [date, setDate] = useState(null);
    useEffect(() => {
        let today = new Date();
        let date = (today.getMonth()+1)+'/'+today.getDate()+ '/' + today.getFullYear();
        setDate(date);
    }, []);

    return (
        <View style={styles.container}>
        <TextInput style={styles.title} multiline = {true} placeholder = "New Entry"/>
        <Text style={styles.text}>{date}</Text>
        <TextInput style={styles.journalEntry}  multiline = {true} placeholder = {"Compose your entry here..."}/>
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
        top: 60,
        alignSelf: 'center',
        position: 'absolute',
        color: 'black',
        fontSize: 15,
    },
    title: {
        flexShrink: 1,
        top: 30,
        position: 'absolute',
        alignSelf: 'center',

        fontSize: 20,
        
    },
    journalEntry: {
        height: '70%',
        alignSelf: 'center',
        width: '97%',
        position: 'relative',
        justifyContent: 'space-evenly',
    }
}); 

export default Journal;