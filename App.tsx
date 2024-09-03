import React from 'react';
import { SafeAreaView, StatusBar, View } from 'react-native';
import OnboardScreen from './src/Screens/ScreenOnboard/ScreenOnboard';
import Dashboard from './src/Screens/ScreenDashboard/ScreenDashboard';
import ScreenLogin from './src/Screens/ScreenLogin/ScreenLogin';
import ScreenSignup from './src/Screens/ScreenSignUp/ScreenSignUp';
import ScreenTransfer from './src/Screens/ScreenTransfer/ScreenTransfer';

const App = () => (
  <View style={{flexGrow:1}}>
      <StatusBar
        translucent
        backgroundColor="transparent"
      />
    <Dashboard />
    {/* <ScreenLogin/> */}
    {/* <ScreenSignup/> */}
    {/* <OnboardScreen/> */}
  </View>
);

export default App;
