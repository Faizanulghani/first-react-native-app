import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import Home from './src/screens/Home';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Profile from './src/screens/Profile';
import About from './src/screens/About';
import { NavigationContainer } from '@react-navigation/native';

const Stack = createNativeStackNavigator();

const App = () => {
  const StackNavigator = () => {
    return (
      <Stack.Navigator
        screenOptions={{ headerStyle: { backgroundColor: 'yellow' } }}
      >
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen
          name="Profile"
          component={Profile}
          options={{ headerStyle: { backgroundColor: 'red' } }}
        />
        <Stack.Screen name="About" component={About} />
      </Stack.Navigator>
    );
  };
  return (
    <NavigationContainer>
      <StackNavigator />
    </NavigationContainer>
  );
};

export default App;

const styles = StyleSheet.create({});
