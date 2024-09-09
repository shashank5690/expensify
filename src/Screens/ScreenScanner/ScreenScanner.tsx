import { View, Text, StatusBar, TouchableOpacity } from 'react-native';
import React, { useState } from 'react';
import Profile from '../ScreenDashboard/assets/Profile';
import Bell from '../ScreenDashboard/assets/Bell';
import Scanner from './assets/Scanner';
import TopEdge from './assets/BottomEdge';
import BottomEdge from './assets/BottomEdge';
import {styles} from './ScreenScannerstyle'
import QRScanner from './QRScanner';

const ScreenScanner = () => {
  const [isScanning, setIsScanning] = useState(false);

  const handleScanButtonClick = () => {
    setIsScanning(true);
  };

  return (
    <View style={styles.container}>
      <StatusBar translucent backgroundColor="transparent" />

      <View style={styles.header}>
        <Profile />
        <Text style={styles.headerText}>QR Scan</Text>
        <Bell />
      </View>

      <View style={styles.scanningSection}>
        <View style={styles.topEdge}>
          <TopEdge />
        </View>
        {isScanning ? (
          <View style={styles.QrScanner}>
          <QRScanner/>
          </View>
        ) : (
          <Scanner />
        )}
        <View style={styles.bottomEdge}>
        <BottomEdge />
        </View>
      </View>

      <Text style={styles.instructionText}>
        The QR code will be automatically{'\n'}detected when you will place the {'\n'} QR code inside the frame.
      </Text>

      {!isScanning && (
        <TouchableOpacity
          style={styles.scanButton}
          onPress={() => setIsScanning(true)} 
        >
          <Text style={styles.scanButtonText}>Scan Item</Text>
        </TouchableOpacity>
      )}
    </View>
  );
};
export default ScreenScanner;
