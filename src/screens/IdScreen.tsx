// screens/IdScreen.js
import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

const imageSource = require('../../assets/idcard.jpg');
const imageSourceFoo = require('../../assets/footer.jpg');

const aspectRatioHeader = 16 / 16;
const aspectRatioFooter = 16 / 4;

const IdScreen = () => {

  const [currentTime, setCurrentTime] = useState('');

  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date();
      setCurrentTime(now.toLocaleTimeString());
    }, 1000); // Update every second

    return () => clearInterval(interval); // Cleanup on unmount
  }, []);


  return (
    <View style={styles.container}>
      <View style={styles.container}>
        {/* Barcode Image */}
        <View style={styles.imageContainer}>
            <Image source={imageSource} style={styles.image} resizeMode="contain" />
        </View>

        {/* Display the current local time */}
      <Text style={styles.timeText}>{currentTime}</Text>

        {/* Footer Image */}
        <View style={styles.imageContainerFooter}>
            <Image source={imageSourceFoo} style={styles.image} resizeMode="contain" />
        </View>
    </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF',
    justifyContent: 'flex-end', // Ensures space is distributed evenly
  },
  imageContainerFooter: {
    width: '100%', // Full screen width
    height: undefined, // No fixed height
    aspectRatio: aspectRatioFooter, // Maintain aspect ratio
  },
  image: {
    width: '100%', // Full width of the container
    height: '100%', // Full height of the container
  },
  imageContainer: {
    width: '100%', // Full screen width
    height: undefined, // No fixed height
    aspectRatio: aspectRatioHeader, // Maintain aspect ratio
  },
  timeText: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginVertical: 10,
  },
});

export default IdScreen;
