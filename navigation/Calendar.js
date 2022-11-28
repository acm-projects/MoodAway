import React, {useEffect, useState} from 'react';
import { StyleSheet, Text, View, TextInput, Button} from 'react-native';
import {CalendarList} from 'react-native-calendars';


const Calendar = () => { 
    return (
        <View>
            <CalendarList
            markingType={'period'}
            markedDates={{
                '2022-11-02': {disabled: true, startingDay: true, color: '#A6C0F2', endingDay: true, textColor: 'black'},
                '2022-11-03': {disabled: true, startingDay: true, color: '#A6C0F2', endingDay: true, textColor: 'black'},
                '2022-11-04': {disabled: true, startingDay: true, color: '#B5CEB0', endingDay: true, textColor: 'black'},
                '2022-11-05': {disabled: true, startingDay: true, color: '#FFED8E', endingDay: true, textColor: 'black'},
                '2022-11-07': {disabled: true, startingDay: true, color: '#FFED8E', endingDay: true, textColor: 'black'},
                '2022-11-09': {disabled: true, startingDay: true, color: '#FB5858', endingDay: true, textColor: 'black'},
                '2022-11-10': {disabled: true, startingDay: true, color: '#FB5858', endingDay: true, textColor: 'black'},
                '2022-11-12': {disabled: true, startingDay: true, color: '#B090F3', endingDay: true, textColor: 'black'},
                '2022-11-13': {disabled: true, startingDay: true, color: '#B5CEB0', endingDay: true, textColor: 'black'},
                '2022-11-14': {disabled: true, startingDay: true, color: '#A6C0F2', endingDay: true, textColor: 'black'},
                '2022-11-15': {disabled: true, startingDay: true, color: '#A6C0F2', endingDay: true, textColor: 'black'},
                '2022-11-16': {disabled: true, startingDay: true, color: '#B5CEB0', endingDay: true, textColor: 'black'},
                '2022-11-18': {disabled: true, startingDay: true, color: '#FFED8E', endingDay: true, textColor: 'black'},
                '2022-11-19': {disabled: true, startingDay: true, color: '#FFED8E', endingDay: true, textColor: 'black'},
                '2022-11-20': {disabled: true, startingDay: true, color: '#FB5858', endingDay: true, textColor: 'black'},
                '2022-11-22': {disabled: true, startingDay: true, color: '#FB5858', endingDay: true, textColor: 'black'},
                '2022-11-23': {disabled: true, startingDay: true, color: '#B090F3', endingDay: true, textColor: 'black'},
                '2022-11-24': {disabled: true, startingDay: true, color: '#B5CEB0', endingDay: true, textColor: 'black'}
            }}
                
            theme={{
                selectedDayBackgroundColor: '#00352F',
                selectedDayTextColor: '#ffffff',
                textDayFontFamily: 'LexendExa-Medium',
                textMonthFontFamily: 'LexendExa-Light',
                textDayHeaderFontFamily: 'LexendExa-Regular',
            }}
             />
        </View>
    );
}
export default Calendar;