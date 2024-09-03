import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import { styles } from './styleTransferSuccess';
import Profile from '../ScreenDashboard/assets/Profile';
import Bell from '../ScreenDashboard/assets/Bell';

const ScreenTransferSuccess = () => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Profile />
        <Text style={styles.headerText}>Confirmation</Text>
        <Bell />
      </View>
      <View style={styles.description}>
      <Text style={styles.successText}>Transfer Successful!</Text>
      <Text style={styles.descriptionText}>
        Your money has been transferred successfully
      </Text>
      </View>
      <Image source={require('./assets/Success.png')} style={styles.successImage} />
      
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>View Receipt</Text>
      </TouchableOpacity>
    </View>
  );
};

export default ScreenTransferSuccess;