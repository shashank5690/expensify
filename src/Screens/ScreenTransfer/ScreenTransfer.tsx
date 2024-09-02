import React from 'react';
import { View, Text } from 'react-native';
import { styles } from './styleTransfer';
import TopNavbar from './Assets/topNavbar';
import Notification from './Assets/Notification';

const ScreenTransfer = () => {
  return (
    <View >
      <View style={styles.navbar}>
        <TopNavbar />
        <Text style={styles.text}>Confirmation</Text>
        <Notification />
      </View>
      
    </View>
  );
};

export default ScreenTransfer;
