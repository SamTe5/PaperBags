

import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import { Image, SafeAreaView,Text } from 'react-native';
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
        <Tab.Screen name="Home" component={HomeStack}
        options={{
          tabBarIcon:({focused,color,size})=>(
            <Image source={require("../Image/home.png")}
            style={focused? { width: 25, height: 25 }:
            { width: 25, height: 25,tintColor: 'gray' }}/>
          )
        }}/>
        <Tab.Screen name='Hot' component={HotStack}
         options={{
          tabBarIcon:({focused,color,size})=>(
            <Image source={require("../Image/fire.png")}
            style={focused? { width: 25, height: 25 }:
            { width: 25, height: 25,tintColor: 'gray' }}/>
          )
        }}/>
        <Tab.Screen name="Profile" component={ProfileStack}
         options={{
          tabBarIcon:({focused,color,size})=>(
            <Image source={require("../Image/user.png")}
            style={focused? { width: 25, height: 25 }:
            { width: 25, height: 25,tintColor: 'gray' }}/>
          )
        }}/>
      </Tab.Navigator>
    </NavigationContainer>
  );
}



export default App;
