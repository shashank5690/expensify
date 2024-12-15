import React, {useState} from 'react';
import {
  View,
  Text,
  StatusBar,
  TouchableOpacity,
  ScrollView,
  FlatList,
} from 'react-native';
import Profile from './assets/Profile';
import Card from './Components/CardWallet/CardWallet';
import Month from './assets/Month';
import Week from './assets/Week';
import Day from './assets/Day';
import Expenses from './Components/Expenses/Expenses';
import Transactions from './Components/Transaction/Transactions';
import styles from './StylesDashboard';
import {DashboardProps} from '../../utils/types/interface';
import {useDispatch} from 'react-redux';
import {logoutUser} from '../../utils/firebaseAuth';
import Logout from './assets/Logout';
import CardIncome from './Components/CardIncome/CardIncome';
import CardExpense from './Components/CardExpense/CardExpense';
import MonthTransactions from './Components/QuickActionCard/MonthTransactions';
import WeekTransactions from './Components/QuickActionCard/WeekTransactions';
import DayTransactions from './Components/QuickActionCard/DayTransactions';
import Modal from 'react-native-modal';


const Dashboard: React.FC<DashboardProps> = () => {
  const dispatch = useDispatch();
  const [selectedExpense, setSelectedExpense] = useState<string | null>(null);
  const [isMonthSheetVisible, setIsMonthSheetVisible] = useState(false);
  const [isWeekSheetVisible, setIsWeekSheetVisible] = useState(false);
  const [isDaySheetVisible, setIsDaySheetVisible] = useState(false);
  const handleSelectExpense = (expense: string) => {
    setSelectedExpense(expense === selectedExpense ? null : expense);
  };

  const handleLogout = () => {
    logoutUser(dispatch);
  };

  const handleOpenMonthSheet = () => {
    setIsMonthSheetVisible(true);
  };

  const handleOpenWeekSheet = () => {
    setIsWeekSheetVisible(true);
  };

  const handleOpenDaySheet = () => {
    setIsDaySheetVisible(true);
  };

  const handleCloseSheet = () => {
    setIsMonthSheetVisible(false);
    setIsWeekSheetVisible(false);
    setIsDaySheetVisible(false);
  };

  const renderContent = () => (
    <View style={styles.content}>
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        style={styles.cardScrollView}
        contentContainerStyle={styles.cardScrollViewContent}>
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
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        style={styles.cardScrollViewQuickActions}
        contentContainerStyle={styles.cardScrollViewContentQuickAction}>
        <View style={styles.actionsContainer}>
          <TouchableOpacity
            style={styles.actionCard}
            onPress={handleOpenMonthSheet}>
            <Month style={styles.icon1} />
            <Text style={styles.actionText1}>Month</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.actionCard}
            onPress={handleOpenWeekSheet}>
            <Week style={styles.icon2} />
            <Text style={styles.actionText2}>Week</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.actionCard}
            onPress={handleOpenDaySheet}>
            <Day style={styles.icon3} />
            <Text style={styles.actionText3}>Day</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>

      <Expenses
        selectedExpense={selectedExpense}
        onSelectExpense={handleSelectExpense}
      />

      <Transactions />
    </View>
  );

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
        data={[{key: 'content'}]}
        renderItem={renderContent}
        keyExtractor={item => item.key}
        showsVerticalScrollIndicator={false}
      />

      <Modal
        isVisible={
          isMonthSheetVisible || isWeekSheetVisible || isDaySheetVisible
        }
        onBackdropPress={handleCloseSheet}
        style={{justifyContent: 'flex-end', margin: 0}}>
        {isMonthSheetVisible && (
          <MonthTransactions onClose={handleCloseSheet} />
        )}
        {isWeekSheetVisible && <WeekTransactions onClose={handleCloseSheet} />}
        {isDaySheetVisible && <DayTransactions onClose={handleCloseSheet} />}
      </Modal>
    </View>
  );
};

export default Dashboard;
