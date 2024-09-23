// HomeScreen.js
import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, ScrollView  } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const imageSource = require('../assets/header.jpg');
const imageSourceId = require('../assets/Id.jpg');
const imageSourceBar = require('../assets/Bar.jpg');
const imageSourceFoo = require('../assets/footer.jpg');

const aspectRatioHeader = 16 / 11;
const aspectRatioFooter = 16 / 4;


const HomeScreen = () => {
    const navigation = useNavigation();
  return (
    <View style={styles.container}>
        {/* Image Section */}
        <View style={styles.imageContainer}>
            <Image source={imageSource} style={styles.image} />
        </View>

        {/* Button Section */}
        <View style={styles.buttonSection}>
            <TouchableOpacity style={styles.transparentButton} 
                            onPress={() => navigation.navigate('Id')}>
            <Image source={imageSourceId} style={styles.buttonIcon} />
            </TouchableOpacity>

            <TouchableOpacity style={styles.transparentButton} onPress={() => navigation.navigate('Barcode')}>
            <Image source={imageSourceBar} style={styles.buttonIcon} />
            </TouchableOpacity>
        </View>
  
        <ScrollView contentContainerStyle={styles.scrollContainer}>
            <View style={styles.ashView}>
                <Text style={styles.textDesignHeader}>Username</Text>
                <Text style={styles.textDesign}>mhossai3</Text>
            </View>
            <View style={styles.WhiteView}>
                <Text style={styles.textDesignHeader}>ID Number</Text>
                <Text style={styles.textDesign}>22663100221797</Text>
            </View>
            <View style={styles.ashView}>
                <Text style={styles.textDesignHeader}>Last Name</Text>
                <Text style={styles.textDesign}>Hossain</Text>
            </View>
            <View style={styles.WhiteView}>
                <Text style={styles.textDesignHeader}>First Name</Text>
                <Text style={styles.textDesign}>Mohammed Sayed</Text>
            </View>
            <View style={styles.ashView}>
                <Text style={styles.textDesignHeader}>Email</Text>
                <Text style={styles.textDesign}>mhossai3@confederationcollege.ca</Text>
            </View>
            <View style={styles.WhiteView}>
                <Text style={styles.textDesignHeader}>Program</Text>
                <Text style={styles.textDesign}>Digital Marketing Analytics</Text>
            </View>
            <View style={styles.ashView}>
                <Text style={styles.textDesignHeader}>Card Type</Text>
                <Text style={styles.textDesign}>SU</Text>
            </View>
            <View style={styles.WhiteView}>
                <Text style={styles.textDesignHeader}>Expiry Date</Text>
                <Text style={styles.textDesign}>2024-08-31 T00.00.00</Text>
            </View>
            <View style={styles.ashView}>
                <Text style={styles.textDesignHeader}>Use CaptureMe</Text>
                <Text style={styles.textDesign}>No</Text>
            </View>

            <View style={styles.imageContainerFooter}>
            <Image source={imageSourceFoo} style={styles.image} />
            </View>

        </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
container: {
    flex: 1,
    backgroundColor : "#FFF",
    flexDirection : 'column',
},
imageContainer: {
    width: '100%', // Full screen width
    height: undefined, // No fixed height
    aspectRatio: aspectRatioHeader, // Maintain aspect ratio
},
imageContainerFooter: {
    width: '100%', // Full screen width
    height: undefined, // No fixed height
    aspectRatio: aspectRatioFooter, // Maintain aspect ratio
},
image: {
    width: '100%', // Full width
    height: '100%', // Full height of the container
},
ashView : {
    height : 70,
    backgroundColor : "#eaeded",
    padding : 10,
    paddingLeft : 20
},
WhiteView : {
    height : 70,
    backgroundColor : "#fff",
    padding : 10,
    paddingLeft : 20
},
Footer : {
    height : 80,
    backgroundColor : "#004e74",
    padding : 10
},
textDesignHeader : {
    fontSize : 20,
    fontWeight : '700',
    color : "#000",
},
textDesign : {
    fontSize : 16,
    fontWeight : 'bold',
    color : "#000",
},
scrollContainer: {
    flexGrow: 1, // Allows content to expand
    justifyContent: 'center', // Centers content if not enough to fill screen
},
transparentButton: {
    alignItems: 'center',
    padding: 10,
    backgroundColor: 'transparent', // Transparent background for the button
  },
buttonIcon: {
    width: 100, // Adjust the width of the icon
    height: 100, // Adjust the height of the icon
    resizeMode: 'contain', // Ensure the icon fits within the container
},
buttonSection: {
    flexDirection: 'row',
    justifyContent: 'space-around', // Space buttons evenly
    alignItems: 'center',
  },
  buttonText: {
    color: '#000',
    marginTop: 5,
    fontSize: 14,
    textAlign: 'center',
  },
  
});

export default HomeScreen;