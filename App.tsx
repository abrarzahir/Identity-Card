// Import libraries
import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import SplashScreen from './SplashScreen';

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
    <View style={styles.container}>
      <Text>MyComponent</Text>
    </View>
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
