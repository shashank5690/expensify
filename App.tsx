import React, { useEffect, useState } from 'react';
import { ActivityIndicator, View, Text } from 'react-native';
import { initializeDatabase } from './src/db/database';
import AppNavigator from './src/Navigation/AppNavigator'; 
import store from './src/utils/redux/store'; 
import { Provider } from 'react-redux';
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
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <ActivityIndicator size="large" />
        <Text>Initializing Database...</Text>
      </View>
    );
  }

  return (
    <Provider store={store}>
      <AppNavigator />
      {/* <ScreenTransfer/> */}
      {/* <ScreenTransferSuccess/> */}
    </Provider>
  );
}
