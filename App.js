import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './screens/HomeScreen';
import ImageScreen from './screens/ImageScreen';
import 'react-native-gesture-handler';


const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} options={{ title: 'Home Screen' }} />
        <Stack.Screen name="Image" component={ImageScreen} options={{ title: 'Selected Image' }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
