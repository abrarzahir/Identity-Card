// screens/BarcodeScreen.js
import React from 'react';
import { View, StyleSheet, Image } from 'react-native';

const imageSource = require('../../assets/barCode.jpg');
const imageSourceFoo = require('../../assets/footer.jpg');
const aspectRatioHeader = 16 / 16; // Adjust as needed for your header image
const aspectRatioFooter = 16 / 4;

const BarcodeScreen = () => {
  return (
    <View style={styles.container}>
        {/* Barcode Image */}
        <View style={styles.imageContainer}>
            <Image source={imageSource} style={styles.image} resizeMode="contain" />
        </View>

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
    justifyContent: 'space-between', // Ensures space is distributed evenly
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
});

export default BarcodeScreen;
