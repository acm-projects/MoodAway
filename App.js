import * as React from 'react';
import { StyleSheet, Text, View} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';


import Journal from './navigation/Journal';
import Home from './navigation/Home';
import Statistics from './navigation/Statistics';
import Profile from './navigation/Profile';
import Calendar from './navigation/Calendar';

const Tab = createBottomTabNavigator();

function App() { 
  return (
    <NavigationContainer>
      <Tab.Navigator 
        screenOptions={{
          headerStyle:
            {backgroundColor: '#00352F'},
          headerTitleStyle:
            {fontFamily: 'LexendExa-Medium', fontSize: 23, color: 'white'},
          tabBarStyle: 
            {backgroundColor: '#00352F'},
          tabBarLabelStyle: {
            fontFamily: 'LexendExa-Medium', color: 'white'
          }
          }}>
        <Tab.Screen name = "Home" component = {Home}/>
        <Tab.Screen name = "Calendar" component = {Calendar}/>
        <Tab.Screen name = "Journal" component = {Journal} />
        <Tab.Screen name = "Statistics" component = {Statistics}/>
        <Tab.Screen name = "Profile" component = {Profile}/>
      </Tab.Navigator>
    </NavigationContainer>
  ); 
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },


}); 

export default App;
