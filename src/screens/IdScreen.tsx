// screens/IdScreen.js
import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import moment from 'moment'; // Import moment

const imageSource = require('../../assets/idcard.jpg');
const imageSourceFoo = require('../../assets/footer.jpg');

const aspectRatioHeader = 16 / 23;
const aspectRatioFooter = 16 / 4;

const IdScreen = () => {

  const [currentTime, setCurrentTime] = useState('');
  const [currentDate, setCurrentDate] = useState('');
  const [isRunning, setIsRunning] = useState(true);

  useEffect(() => {
    // Set the date and time once when the component mounts
    const now = moment();
    setCurrentDate(now.format('DD/MM/YYYY')); // Set date format using moment
    setCurrentTime(now.format('hh:mm:ss A'));    // Set time format using moment
  }, []); // Empty dependency array ensures this runs only once




  return (
    <View style={styles.container}>
      <View style={styles.container}>
        {/* Barcode Image */}
        <View style={styles.imageContainer}>
            <Image source={imageSource} style={styles.image} resizeMode="contain" />
        </View>

        {/* Display the current local time */}
        <Text style={styles.timeText}>Last checked with server:</Text>
        <Text style={styles.timeText}>{currentDate} {currentTime}</Text>

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
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
    color: "#000"
  },
});

export default IdScreen;
