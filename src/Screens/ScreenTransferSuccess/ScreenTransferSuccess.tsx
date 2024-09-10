import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import { styles } from './styleTransferSuccess';
import Profile from '../ScreenDashboard/assets/Profile';
import Bell from '../ScreenDashboard/assets/Bell';
import { ScreenDashboardProps } from './utils/types';
import { useNavigation } from '@react-navigation/native';

const ScreenTransferSuccess = () => {
  const navigation = useNavigation<ScreenDashboardProps>(); 

  const handleView=()=>{
    navigation.navigate('DashboardBottom')
  }
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
      
      <TouchableOpacity style={styles.button} onPress={handleView}>
        <Text style={styles.buttonText}>View</Text>
      </TouchableOpacity>
    </View>
  );
};

export default ScreenTransferSuccess;