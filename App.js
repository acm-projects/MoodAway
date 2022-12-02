import * as React from 'react';
import { StyleSheet, Text, View} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Calendar from './navigation/Calendar';

import Journal from './navigation/Journal';
import Home from './navigation/Home';
import Statistics from './navigation/Statistics';
import Profile from './navigation/Profile';
import Analysis from './navigation/Analysis';

Ionicons.loadFont().then();
MaterialCommunityIcons.loadFont().then();

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

function Nav() {
  return (
      <Tab.Navigator 
        screenOptions={{
          headerStyle:
            {backgroundColor: '#00352F'},
          headerTitleStyle:
            { fontSize: 23, color: 'white'},
          tabBarStyle: 
            {backgroundColor: '#00352F'},
          tabBarLabelStyle: {
            color: 'white'
          }
          }}>
        <Tab.Screen name = "Home" component = {Home} options={{
          tabBarIcon: ({color,size}) => (
            <Ionicons name ="md-home-outline" color = '#fff' size = {size} />)}}
            />
        <Tab.Screen name = "Calendar" component = {Calendar}options={{
          tabBarIcon: ({color,size}) => (
            <MaterialCommunityIcons name ="calendar-blank" color = '#fff' size = {size} />)}}/>

        {<Tab.Screen name = "Journal" component = {Journal} options={{
          tabBarIcon: ({color,size}) => (
            <Ionicons name ="add" color = '#fff' size = {size+10} />)}} /> }
        <Tab.Screen name = "Statistics" component = {Statistics}options={{
          tabBarIcon: ({color,size}) => (
            <Ionicons name ="stats-chart-outline" color = '#fff' size = {size} />)}}/>
        <Tab.Screen name = "Saved" component = {Profile} options={{
          tabBarIcon: ({color,size}) => (
            <Ionicons name ="bookmark-outline" color = '#fff' size = {size} />)}}/>
      </Tab.Navigator>
  );
}

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
        name="Nav"
        component={Nav}
        options={{ headerShown: false }}
        />
        <Stack.Screen name="Analysis" component={Analysis} />
      </Stack.Navigator>
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