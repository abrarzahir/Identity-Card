// screens/IdScreen.js
import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';


const imageSource = require('../../assets/idcard.jpg');
const imageSourceFoo = require('../../assets/footer.jpg');

const aspectRatioFooter = 16 / 4;

const IdScreen = () => {
  const [currentTime, setCurrentTime] = useState('');
  const [currentDate, setCurrentDate] = useState('');

  useEffect(() => {
    const now = new Date();
    setCurrentDate(now.toLocaleDateString());
    setCurrentTime(now.toLocaleTimeString());
  }, []); // Only run once on component mount

  return (
    <View style={styles.container}>

      {/* Barcode Image */}
      <View style={styles.imageContainer}>
          <Image source={imageSource} style={styles.image} resizeMode="contain" />
        </View>

        <Text style={styles.timeText}>Last checked with server:</Text>
        <Text style={styles.timeText}>{currentDate} {currentTime}</Text>

        {/* Footer Image */}
        <View style={styles.imageContainerFooter}>
          <Image source={imageSourceFoo} style={styles.image} resizeMode="contain" />
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
  imageContainer: {
    flex: 1, // Make the image container fill the available space
    justifyContent: 'center', // Center the image within the container
  },
  image: {
    margin : 20,
    width: '90%', // Full width of the container
    height: '100%', // Full height of the container
  },
  imageContainerFooter: {
    width: '100%', // Full screen width
    height: undefined, // No fixed height
    aspectRatio: aspectRatioFooter, // Maintain aspect ratio
  },
  imageFooter: {
    width: '100%', // Full width of the footer
    height: '100%', // Full height of the footer
  },
  timeText: {
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});

export default IdScreen;
