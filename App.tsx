import React from 'react';
import { SafeAreaView, StatusBar, View } from 'react-native';
import OnboardScreen from './src/Screens/ScreenOnboard/ScreenOnboard';
import Dashboard from './src/Screens/ScreenDashboard/ScreenDashboard';
import ScreenTransfer from './src/Screens/ScreenTransfer/ScreenTransfer';
import ScreenLogin from './src/Screens/ScreenLogin/ScreenLogin';
import ScreenSignup from './src/Screens/ScreenSignUp/ScreenSignUp';
import ScreenTransferSuccess from './src/Screens/ScreenTransferSuccess/ScreenTransferSuccess';
import ScreenScanner from './src/Screens/ScreenScanner/ScreenScanner';
import AddTransaction from './src/Screens/ScreenAddTransaction/AddTransaction';

 

const App = () => (
  <View style={{flexGrow:1}}>
   {/* <ScreenTransfer/> */}
     {/* <ScreenTransferSuccess/> */}
    {/* <ScreenLogin/> */}
    {/* <ScreenSignup/> */}
    {/* <OnboardScreen/> */}
    {/* <Dashboard/> */}
   {/* <ScreenScanner/> */}
   <AddTransaction/>
    </View>

);

export default App;
