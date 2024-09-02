import React, { useState } from 'react';
import { View, Text, StyleSheet, StatusBar, TouchableOpacity, ScrollView } from 'react-native';
import Bell from './assets/Bell';
import Profile from './assets/Profile';
import Card from './Components/Card/Card';
import Month from './assets/Month';
import Week from './assets/Week';
import Day from './assets/Day';
import Expenses from './Components/Expenses/Expenses'; // Import the new Expenses component

const Dashboard: React.FC = () => {
  const [selectedExpense, setSelectedExpense] = useState<string | null>(null);

  const handleSelectExpense = (expense: string) => {
    setSelectedExpense(expense === selectedExpense ? null : expense);
  };

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
        <Card />

        {/* Quick Actions Section */}
        <Text style={styles.quickActionsText}>Quick Actions</Text>
        <View style={styles.actionsContainer}>
          <TouchableOpacity style={styles.actionCard}>
            <Month style={styles.icon1} />
            <Text style={styles.actionText1}>Month</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.actionCard}>
            <Week style={styles.icon2} />
            <Text style={styles.actionText2}>Week</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.actionCard}>
            <Day style={styles.icon3} />
            <Text style={styles.actionText3}>Day</Text>
          </TouchableOpacity>
        </View>

        {/* Expenses Section */}
        <Expenses
          selectedExpense={selectedExpense}
          onSelectExpense={handleSelectExpense}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  // Original styles for Dashboard component
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
  },
  content: {
    flex: 1,
    padding: 16,
  },
  quickActionsText: {
    fontSize: 20,
    color: '#000',
    marginBottom: 12,
    marginTop: 12,
    fontFamily: 'Sofia Pro Bold',
  },
  actionsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  actionCard: {
    width: 110,
    height: 110,
    backgroundColor: '#fff',
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#adb5bd',
    shadowOffset: { width: 4, height: 8 },
    shadowOpacity: 1,
    shadowRadius: 12,
    elevation: 10,
    marginHorizontal: 6,
  },
  icon1: {
    marginBottom: 2,
  },
  icon2: {
    marginBottom: 2,
  },
  icon3: {
    top: 10,
  },
  actionText1: {
    fontSize: 14,
    color: '#000',
    bottom: 36,
    fontFamily: 'Sofia Pro Bold',
  },
  actionText2: {
    fontSize: 14,
    fontFamily: 'Sofia Pro Bold',
    color: '#000',
    bottom: 36,
  },
  actionText3: {
    fontSize: 14,
    fontFamily: 'Sofia Pro Bold',
    color: '#000',
    top: 10,
    left: 5,
  },
});

export default Dashboard;
