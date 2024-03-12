

import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import { SafeAreaView,Text } from 'react-native';
import Home from './pages/Home';
import Profile from './pages/Profile';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import {createNativeStackNavigator} from "@react-navigation/native-stack";
import Hot from './pages/Hot';
import Navim from './components/Nav/Navim';

const Stack=createNativeStackNavigator()
const Tab=createBottomTabNavigator()

const HomeStack=()=>{
  return(
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="HomeScreen" component={Home}/>
    </Stack.Navigator>
    
  )
}

const HotStack=()=>{
  return(
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="HotScreen" component={Hot}/>
    </Stack.Navigator>
  )
}

const ProfileStack=()=>{
  return(
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="ProfileScreen" component={Profile}/>
    </Stack.Navigator>
    
  )
}



const App=()=> {
  
  return (
    <NavigationContainer>
      <Navim/>
      <Tab.Navigator initialRouteName="Home" screenOptions={{headerShown:false}}>
        <Tab.Screen name="Home" component={HomeStack}/>
        <Tab.Screen name='Hot' component={HotStack}/>
        <Tab.Screen name="Profile" component={ProfileStack}/>
      </Tab.Navigator>
    </NavigationContainer>
  );
}



export default App;
