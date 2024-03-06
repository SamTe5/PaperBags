

import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import { SafeAreaView,Text } from 'react-native';
import Home from './pages/Home';
import Profile from './pages/Profile';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

const Stack=createNativeStackNavigator()
const Tab=createBottomTabNavigator()

const App=()=> {
  
  return (
    <NavigationContainer>
      <Tab.Navigator initialRouteName="Home" screenOptions={{headerShown:false}}>
        <Tab.Screen name="Home" component={Home}/>
        <Tab.Screen name="Profile" component={Profile}/>
      </Tab.Navigator>
    </NavigationContainer>
  );
}



export default App;
