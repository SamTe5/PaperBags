

import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import { SafeAreaView,Text } from 'react-native';
import Home from './src/pages/Home';


const App=()=> {
  
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Home" component={Home}/>
        <Tab.Screen/>
      </Tab.Navigator>
    </NavigationContainer>
  );
}



export default App;
