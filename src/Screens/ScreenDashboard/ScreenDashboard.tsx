import React, { useState,useCallback,useEffect} from 'react';
import { View, Text, StyleSheet, StatusBar, TouchableOpacity, FlatList, ScrollView } from 'react-native';
import Bell from './assets/Bell';
import Profile from './assets/Profile';
import Card from './Components/CardWallet/CardWallet';
import Month from './assets/Month';
import Week from './assets/Week';
import Day from './assets/Day';
import Expenses from './Components/Expenses/Expenses';
import Transactions from './Components/Transaction/Transactions';
import styles from './StylesDashboard';
import { DashboardProps } from '../../utils/types/interface';
import { useDispatch } from 'react-redux';
import { logoutUser } from '../../utils/firebaseAuth';
import Logout from './assets/Logout';
import CardIncome from './Components/CardIncome/CardIncome';
import CardExpense from './Components/CardExpense/CardExpense';
import { useFocusEffect } from '@react-navigation/native';
import { getTransactions } from '../../db/database';



const Dashboard: React.FC<DashboardProps> = () => {
  const dispatch = useDispatch();
  const [selectedExpense, setSelectedExpense] = useState<string | null>(null);
  const handleSelectExpense = (expense: string) => {
    setSelectedExpense(expense === selectedExpense ? null : expense);
  };

  const handleLogout = () => {
    logoutUser(dispatch);
  }

  const renderContent = () => {
    return (
      <View style={styles.content}>
             <ScrollView 
        horizontal 
        showsHorizontalScrollIndicator={false} 
        style={styles.cardScrollView}
        contentContainerStyle={styles.cardScrollViewContent}
      >
        <View style={styles.cardWrapper}>
          <Card />
        </View>
        <View style={styles.cardWrapper}>
          <CardIncome />
        </View>
        <View style={styles.cardWrapper}>
          <CardExpense />
        </View>
      </ScrollView>

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

        <Expenses
          selectedExpense={selectedExpense}
          onSelectExpense={handleSelectExpense}
        />

        <Transactions />
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <StatusBar translucent backgroundColor="transparent" />

      <View style={styles.header}>
        <Profile />
        <Text style={styles.headerText}>Expensify</Text>
        <TouchableOpacity onPress={handleLogout} style={styles.logoutButton}>
          <View style={styles.logoutIconContainer}>
            <Logout style={styles.logoutIcon} />
          </View>
        </TouchableOpacity>
      </View>

      <FlatList
        data={[{ key: 'content' }]} 
        renderItem={renderContent}
        keyExtractor={(item) => item.key}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
};

export default Dashboard;
