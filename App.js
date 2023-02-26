import React  from 'react';
import { View, Text } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import Tabs from './navigation/Tabs';




const Stack = createNativeStackNavigator();

const App = () => {
    return (
        <NavigationContainer>
          
          <Tabs />
      
        </NavigationContainer>
    )
}

export default App;
