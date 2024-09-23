// Import libraries
import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, Image,  } from 'react-native';
import SplashScreen from './src/SplashScreen';
import HomeScreen from './src/HomeScreen';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import IdScreen from './src/screens/IdScreen';
import BarcodeScreen from './src/screens/BarcodeScreen';

// Create the navigation stack
const Stack = createNativeStackNavigator();

// Create the main component
const App = () => {
  const [isSplashVisible, setIsSplashVisible] = useState(true);

  // Use useEffect to handle the splash screen timeout
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsSplashVisible(false);
    }, 3000); // 3 seconds

    // Clear the timer when the component unmounts
    return () => clearTimeout(timer);
  }, []);

  // If the splash screen is visible, return the SplashScreen component
  if (isSplashVisible) {
    return <SplashScreen />;
  }

  // Otherwise, return the main app component
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Id"
          component={IdScreen}
          options={{ 
            title: 'Back', 
            headerStyle: { backgroundColor: '#004e74' }, // Set navigation bar color to red
            headerTintColor: '#fff', // Optional: set the text/icon color to white for contrast 
          }}
        />
        <Stack.Screen
          name="Barcode"
          component={BarcodeScreen}
          options={{ 
            title: 'Back',
            headerStyle: { backgroundColor: '#004e74' }, // Set navigation bar color to red
            headerTintColor: '#fff', // Optional: set the text/icon color to white for contrast 
            }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

// Define styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  
});

// Make this component available to the app
export default App;
