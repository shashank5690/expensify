import React from 'react';
import { SafeAreaView, StatusBar, View } from 'react-native';
import OnboardScreen from './src/Screens/ScreenOnboard/ScreenOnboard';
import Dashboard from './src/Screens/ScreenDashboard/ScreenDashboard';

const App = () => (
  <View style={{flexGrow:1}}>
      <StatusBar
        translucent
        backgroundColor="transparent"
      />
    <Dashboard />
  </View>
);

export default App;
