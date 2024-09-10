import React from 'react';
import {StatusBar, Text, View} from 'react-native';
import LottieView from 'lottie-react-native';

export default function Splash() {
  return (
    <View style={{flex: 1}}>
      <StatusBar translucent backgroundColor="transparent" />

      <LottieView
        source={require('../../assets/splash2.json')}
        autoPlay
        loop={false}
        style={{width: '100%', height: '100%'}}
      />
    </View>
  );
}
