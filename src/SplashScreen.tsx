import React, { FC } from 'react';
import { View, Image, StatusBar } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

const SplashScreen: FC = () => {
    return (
        <SafeAreaView style={{ flex: 1 }}>
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                <StatusBar hidden={true} />
                <Image style={{ width: '100%', height: '100%', resizeMode: 'stretch', }} source={require('../assets/splashScreen.jpg')} />
            </View>
        </SafeAreaView>
    );
};
export default SplashScreen;
