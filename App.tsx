import React, { useEffect } from 'react';
import { Provider } from 'react-redux';
import AppNavigator from './src/Navigation/AppNavigator'; 
import store from './src/utils/redux/store'; 
import { View } from 'react-native';

const App = () => {


  return (
    <Provider store={store}>
      <AppNavigator />
    </Provider>
  );
};



export default App;
