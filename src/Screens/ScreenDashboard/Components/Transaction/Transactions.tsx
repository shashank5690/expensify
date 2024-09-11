import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  Alert,
  TouchableOpacity,
} from 'react-native';
import {
  getTransactions,
  getCategories,
  deleteTransaction,
  getIncomeExpenseTotals,
} from '../../../../db/database';
import styles from './stylesTransaction';
import {
  ALERT_TYPE,
  Dialog,
  AlertNotificationRoot,
} from 'react-native-alert-notification';
import Category from '../../Utils/types';
import Transaction from '../../Utils/types';
import { useDispatch } from 'react-redux';
import { addExpense, addIncome } from '../../../../utils/redux/transactionSlice';

const Transactions: React.FC = () => {
  const [transactions, setTransactions] = useState<Transaction[]>([]);
  const [categories, setCategories] = useState<Category[]>([]);

  const dispatch=useDispatch();
  const fetchCategories = async () => {
    try {
      const fetchedCategories = await getCategories('Expense');
      const fetchedIncomeCategories = await getCategories('Income');
      setCategories([...fetchedCategories, ...fetchedIncomeCategories]);
    } catch (error) {
      console.error('Failed to fetch categories:', error);
    }
  };

  const fetchTransactions = async () => {
    try {
      const fetchedTransactions = await getTransactions();
      const formattedTransactions = fetchedTransactions.map(transaction => ({
        ...transaction,
        date: new Date(transaction.date * 1000).toLocaleDateString(),
        amount:
          transaction.type === 'Income'
            ? `+₹${transaction.amount.toFixed(2)}`
            : `-₹${transaction.amount.toFixed(2)}`,
      }));
      setTransactions(formattedTransactions);
    } catch (error) {
      console.error('Failed to fetch transactions:', error);
    }
  };

  useEffect(() => {
    fetchCategories();
    fetchTransactions();
  }, []);

  const getCategoryDetails = (categoryId: number) => {
    const category = categories.find(cat => cat.id === categoryId);
    return category ? category : {name: 'Unknown Category', emoji: '❓'};
  };

  const handleDeleteTransaction = async (id: number) => {
    Dialog.show({
      type: ALERT_TYPE.INFO,
      title: 'Delete Transaction',
      textBody: 'Are you sure you want to delete this transaction?',
      button: 'Delete',
      onPressButton: async () => {
        try {
          await deleteTransaction(id);
          setTransactions(
            transactions.filter(transaction => transaction.id !== id),
          );
          fetchTotals();
          Dialog.hide();
        } catch (error) {
          console.error('Failed to delete transaction:', error);
        }
      },
    });
  };


  const fetchTotals = async () => {
    try {
      const totals = await getIncomeExpenseTotals();
      dispatch(addIncome(totals.totalIncome));
      dispatch(addExpense(totals.totalExpense));
    } catch (error) {
      console.error('Failed to fetch income total', error);
    }
  };

  const renderTransactionItem = ({item}: {item: Transaction}) => {
    const category = getCategoryDetails(item.category_id);

    return (
      <TouchableOpacity
        style={styles.transactionCard}
        onLongPress={() => handleDeleteTransaction(item.id)}>
        <View style={styles.emojiContainer}>
          <Text style={styles.emoji}>{category.emoji}</Text>
        </View>
        <View style={styles.transactionDetails}>
          <Text style={styles.transactionDescription}>{item.description}</Text>
          <Text style={styles.transactionCategory}>{category.name}</Text>
          <Text style={styles.transactionDate}>{item.date}</Text>
        </View>
        <Text style={styles.transactionAmount}>{item.amount}</Text>
      </TouchableOpacity>
    );
  };

  return (
    <AlertNotificationRoot>
      <View style={styles.transactionsContainer}>
        <View style={styles.transactionsHeader}>
          <Text style={styles.transactionsHeading}>Transactions</Text>
        </View>
        <FlatList
          data={transactions}
          renderItem={renderTransactionItem}
          keyExtractor={item => item.id.toString()}
          showsVerticalScrollIndicator={false}
          style={styles.transactionsList}
        />
      </View>
    </AlertNotificationRoot>
  );
};

export default Transactions;
