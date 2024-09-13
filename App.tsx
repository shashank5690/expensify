  import React, { useEffect, useState } from 'react';
  import { ActivityIndicator, View, Text, StatusBar } from 'react-native';
  import { initializeDatabase } from './src/db/database';
  import AppNavigator from './src/Navigation/AppNavigator';
  import store from './src/utils/redux/store';
  import { Provider } from 'react-redux';
  import Splash from './src/Screens/ScreenSplash/SplashScreen';
  import { LogLevel, NotificationClickEvent, OneSignal } from 'react-native-onesignal';
  
  const ONESIGNAL_APP_ID='2a9b9ae1-1504-4d26-a6c2-f2e7175bdcd6'
  export default function App() {
    const [dbInitialized, setDbInitialized] = useState(false);
  
    useEffect(() => {
      initializeDatabase()
        .then(() => setDbInitialized(true))
        .catch(console.error);
  
      OneSignal.Debug.setLogLevel(LogLevel.Verbose);
      OneSignal.initialize(ONESIGNAL_APP_ID);
  
      OneSignal.Notifications.requestPermission(true);
  
      const onNotificationClick = (event: NotificationClickEvent) => {
       // console.log('OneSignal: notification clicked:', event);
      };
  
      OneSignal.Notifications.addEventListener('click', onNotificationClick);
  
      return () => {
        OneSignal.Notifications.removeEventListener('click', onNotificationClick);
      };
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
  

  
  
  
  
  
  
  
  
  