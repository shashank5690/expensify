import { View, Text, StyleSheet, StatusBar, TouchableOpacity } from 'react-native';
import React from 'react';
import Profile from '../ScreenDashboard/assets/Profile';
import Bell from '../ScreenDashboard/assets/Bell';
import Scanner from './assets/Scanner';
import TopEdge from './assets/BottomEdge';
import BottomEdge from './assets/BottomEdge';

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

      {/* Scanning Section */}
      <View style={styles.scanningSection}>
        <View style={styles.topEdge}>
          <TopEdge />
        </View>
        <Scanner />
        <View style={styles.bottomEdge}>
        <BottomEdge />
        </View>
      </View>

      {/* Instruction Text */}
      <Text style={styles.instructionText}>
        The QR code will be automatically{'\n'}detected when you will place the {'\n'} QR code inside the frame.
      </Text>

      {/* Scan Item Button */}
      <TouchableOpacity style={styles.scanButton}>
        <Text style={styles.scanButtonText}>Scan Item</Text>
      </TouchableOpacity>
    </View>
  );
};

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
  },
  headerText: {
    fontSize: 24,
    fontWeight: '600',
    color: '#23303B',
    fontFamily: 'Sofia Pro Bold',
  },
  scanningSection: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    bottom:30,
  },
  topEdge: {
    transform: [{ rotate: '180deg' }],
    top: 18,
  },
  bottomEdge: {
    bottom: 18,
  },
  instructionText: {
    textAlign: 'center',
    fontSize: 18,
    fontFamily: 'Sofia Pro Bold',
    color: '#A4A9AE',
    marginVertical: 20,
    paddingHorizontal: 30,
    bottom: 110,
    lineHeight: 28,
    gap: 10,
  },
  scanButton: {
    backgroundColor: '#456EFE',
    borderRadius: 12,
    paddingVertical: 16,
    paddingHorizontal: 110,
    marginBottom: 40,
    alignSelf: 'center',
    bottom:16,
  },
  scanButtonText: {
    fontSize: 18,
    color: '#FFFFFF',
    fontWeight: '600',
    fontFamily: 'Sofia Pro Bold',
  },
});

export default ScreenScanner;
