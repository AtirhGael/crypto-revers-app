import React  from 'react';
import { View, Text } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import Tabs from './navigation/Tabs';



// redux stuffs
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import rootReducer from './stores/tab/rootReducer';

const store = createStore(
  rootReducer,
  applyMiddleware(thunk)
)
// end here
const Stack = createNativeStackNavigator();

const App = () => {
    return (
        <Provider store={store}>
          <NavigationContainer>
          <Stack.Navigator
            screenOptions={{
              headerShown:false
            }}
            initialRouteName={'mainLayout'}
          >
            <Stack.Screen name='mainLayout' component={Tabs} />

          </Stack.Navigator>
        </NavigationContainer>
        </Provider>
    )
}

export default App;
