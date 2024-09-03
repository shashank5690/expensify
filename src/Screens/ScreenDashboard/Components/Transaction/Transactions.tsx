import React from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';

interface Transaction {
  id: string;
  emoji: string;
  name: string;
  description: string;
  date: string;
  amount: string;
}

const transactions: Transaction[] = [
  { id: '1', emoji: '🍔', name: 'Food', description: 'Lunch at Pizza Hut', date: 'Sep 1, 2024', amount: '₹500' },
  { id: '2', emoji: '🚕', name: 'Transport', description: 'Uber Ride', date: 'Sep 1, 2024', amount: '₹300' },
  { id: '3', emoji: '🛒', name: 'Groceries', description: 'Supermarket Shopping', date: 'Aug 31, 2024', amount: '₹1200' },
  { id: '4', emoji: '🏠', name: 'Rent', description: 'Monthly Apartment Rent', date: 'Aug 30, 2024', amount: '₹15000' },
  { id: '5', emoji: '💡', name: 'Electricity', description: 'Electricity Bill Payment', date: 'Aug 29, 2024', amount: '₹800' },
];

interface TransactionsProps {}

const Transactions: React.FC<TransactionsProps> = () => {
  const renderTransactionItem = ({ item }: { item: Transaction }) => (
    <View style={styles.transactionCard}>
      <Text style={styles.emoji}>{item.emoji}</Text>
      <View style={styles.transactionDetails}>
        <Text style={styles.transactionName}>{item.name}</Text>
        <Text style={styles.transactionDescription}>{item.description}</Text>
        <Text style={styles.transactionDate}>{item.date}</Text>
      </View>
      <Text style={styles.transactionAmount}>{item.amount}</Text>
    </View>
  );

  return (
    <View style={styles.transactionsContainer}>
      <View style={styles.transactionsHeader}>
        <Text style={styles.transactionsHeading}>Latest Transactions</Text>
        <Text style={styles.viewAllText}>View All</Text>
      </View>
      <FlatList
        data={transactions}
        renderItem={renderTransactionItem}
        keyExtractor={(item) => item.id}
        showsVerticalScrollIndicator={false}
        style={styles.transactionsList}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  transactionsContainer: {
    marginTop: 20,
  },
  transactionsHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 16,
    marginBottom: 12,
  },
  transactionsHeading: {
    fontSize: 20,
    color: '#000',
    fontFamily: 'Sofia Pro Bold',
    right: 10,
  },
  viewAllText: {
    fontSize: 14,
    color: '#3498db',
    fontFamily: 'Sofia Pro',
    left: 10,
  },
  transactionsList: {
    paddingHorizontal: 4,
  },
  transactionCard: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    padding: 12,
    borderRadius: 10,
    marginBottom: 10,
    shadowColor: '#adb5bd',
    shadowOffset: { width: 2, height: 4 },
    shadowOpacity: 0.5,
    shadowRadius: 10,
    elevation: 10,
  },
  emoji: {
    fontSize: 30,
    marginRight: 12,
  },
  transactionDetails: {
    flex: 1,
  },
  transactionName: {
    fontSize: 18,
    fontFamily: 'Sofia Pro Bold',
    color: '#23303B',
  },
  transactionDescription: {
    fontSize: 14,
    color: '#A4A9AE',
    fontFamily: 'Sofia Pro Bold',
    marginBottom: 4,
  },
  transactionDate: {
    fontSize: 12,
    color: '#A4A9AE',
    fontFamily: 'Sofia Pro Bold',
  },
  transactionAmount: {
    fontSize: 20,
    fontFamily: 'Sofia Pro Bold',
    color: '#000',
    right: 10,
  },
});

export default Transactions;
