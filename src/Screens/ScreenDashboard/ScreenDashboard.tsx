import React from 'react';
import { View, Text, StyleSheet, StatusBar } from 'react-native';
import Bell from './assets/Bell';
import Profile from './assets/Profile';
import Card from './Components/Card/Card';

const Dashboard: React.FC = () => {
  return (
    <View style={styles.container}>
      <StatusBar translucent backgroundColor="transparent" />
      
      {/* Header Section */}
      <View style={styles.header}>
        <Profile />
        <Text style={styles.headerText}>Expensify</Text>
        <Bell />

        
      </View>

      {/* Content Section */}
      <View style={styles.content}>
      <Card/>
        {/* Your content goes here */}
      </View>
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
  },
  content: {
    flex: 1,
    padding: 16,
  },
});

export default Dashboard;
