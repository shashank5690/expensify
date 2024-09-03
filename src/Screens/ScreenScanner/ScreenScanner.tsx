import { View, Text, StyleSheet, StatusBar } from 'react-native'
import React from 'react'
import Profile from '../ScreenDashboard/assets/Profile';
import Bell from '../ScreenDashboard/assets/Bell';
import Scanner from './assets/Scanner';


const ScreenScanner = () => {
  return (
    <View style={styles.container}>
    <StatusBar translucent backgroundColor="transparent" />

    {/* Header Section */}
    <View style={styles.header}>
      <Profile />
      <Text style={styles.headerText}>QR Scan</Text>
      <Bell />
    </View>
    <Scanner/>


  </View>
  )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#FFFFFF',
    },
    header: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
      padding: 16,
      backgroundColor: '#fff',
      marginTop: 30,
      fontFamily: 'Sofia Pro',
    },
    headerText: {
      fontSize: 24,
      fontWeight: '600',
      color: '#23303B',
      fontFamily: 'Sofia Pro Bold',
    },
});


export default ScreenScanner