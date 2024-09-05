import React from "react";
import { Text, View } from "react-native";
import LottieView from "lottie-react-native";


export default function Splash(){
    return(
        <View style={{flex:1,}}>
            <LottieView
                source={require('../../assets/splash1.json')}
                autoPlay
                loop={false}
                style={{width: '100%', height: '100%'}}
            />
        </View>
    )
}