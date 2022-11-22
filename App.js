import * as React from 'react';
import { StyleSheet, Text, View} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Journal from './navigation/Journal';
import Home from './navigation/Home';
import Statistics from './navigation/Statistics';
import Profile from './navigation/Profile';
import Analysis from './navigation/Analysis';
import Calendar from './navigation/Calendar';

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
        {<Tab.Screen name = "Home" component = {Home}/> }
        <Tab.Screen name = "Journal" component = {Journal} />
        <Tab.Screen name = "Calendar" component = {Calendar}/>
        {<Tab.Screen name = "Statistics" component = {Statistics}/> }
        <Tab.Screen name = "Profile" component = {Profile}/>
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