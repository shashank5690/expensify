import React, {useEffect, useState} from 'react';
import {ActivityIndicator, View, Text, StatusBar} from 'react-native';
import {initializeDatabase} from './src/db/database';
import AppNavigator from './src/Navigation/AppNavigator';
import store from './src/utils/redux/store';
import {Provider} from 'react-redux';
import Splash from './src/Screens/ScreenSplash/SplashScreen';
import ScreenTransfer from './src/Screens/ScreenTransfer/ScreenTransfer';
import ScreenTransferSuccess from './src/Screens/ScreenTransferSuccess/ScreenTransferSuccess';

export default function App() {
  const [dbInitialized, setDbInitialized] = useState(false);

  useEffect(() => {
    initializeDatabase()
      .then(() => setDbInitialized(true))
      .catch(console.error);
  }, []);

  if (!dbInitialized) {
    return <Splash />;
  }

  return (
    <Provider store={store}>
      <StatusBar translucent backgroundColor="transparent" />

      <AppNavigator />
      {/* <ScreenTransfer/> */}
      {/* <ScreenTransferSuccess/> */}
    </Provider>
  );
}
