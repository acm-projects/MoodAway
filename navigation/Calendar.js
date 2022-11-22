
import React, {useEffect, useState} from 'react';
import { StyleSheet, Text, View, TextInput, Button} from 'react-native';
import CalendarPicker from 'react-native-calendar-picker';
import Home from './Home';


const Calendar = () => { 
    return (
        <View>
<CalendarPicker/>
        <Text>cal</Text>
        </View>
    );
}

export default Calendar;