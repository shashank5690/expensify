import React from 'react';
import { SafeAreaView, StatusBar, View } from 'react-native';
import OnboardScreen from './src/Screens/ScreenOnboard/ScreenOnboard';
import Dashboard from './src/Screens/ScreenDashboard/ScreenDashboard';
import ScreenTransfer from './src/Screens/ScreenTransfer/ScreenTransfer';
import ScreenLogin from './src/Screens/ScreenLogin/ScreenLogin';
import ScreenSignup from './src/Screens/ScreenSignUp/ScreenSignUp';
import ScreenTransferSuccess from './src/Screens/ScreenTransferSuccess/ScreenTransferSuccess';
import AddTransaction from './src/Screens/ScreenAddTransaction/AddTransaction';
import ScreenScanner from './src/Screens/ScreenScanner/ScreenScanner';

const App = () => (
  <View style={{flexGrow:1}}>
   {/* <ScreenTransfer/> */}
     {/* <ScreenTransferSuccess/> */}
    {/* <ScreenLogin/> */}
    {/* <ScreenSignup/> */}
    {/* <OnboardScreen/> */}
    {/* <Dashboard/> */}
   {/* <AddTransaction/> */}
   <ScreenScanner/>
    </View>

);

export default App;
