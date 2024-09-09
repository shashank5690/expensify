import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, TouchableOpacity } from 'react-native';
import { getTransactionsByMonth, getCategories } from '../../../../db/database'; 
import styles from './StylesQuickAction';

interface Transaction {
  id: number;
  category_id: number;
  amount: number;
  date: number;
  description: string;
  type: string;
}

interface Category {
  id: number;
  name: string;
  emoji: string;
}

interface MonthTransactionsProps {
  onClose: () => void;
}

const MonthTransactions: React.FC<MonthTransactionsProps> = ({ onClose }) => {
  const [transactions, setTransactions] = useState<Transaction[]>([]);
  const [categories, setCategories] = useState<Category[]>([]);

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const fetchedExpenseCategories = await getCategories('Expense'); 
        const fetchedIncomeCategories = await getCategories('Income'); 
        setCategories([...fetchedExpenseCategories, ...fetchedIncomeCategories]); 
      } catch (error) {
        console.error('Failed to fetch categories:', error);
      }
    };

    const fetchTransactions = async () => {
      try {
        const fetchedTransactions = await getTransactionsByMonth();
        const formattedTransactions = fetchedTransactions.map(transaction => ({
          ...transaction,
          date: new Date(transaction.date * 1000).toLocaleDateString(),
          amount: transaction.type === 'Income'
            ? `+₹${transaction.amount.toFixed(2)}`
            : `-₹${transaction.amount.toFixed(2)}`,
        }));
        setTransactions(formattedTransactions);
      } catch (error) {
        console.error('Failed to fetch transactions for the month:', error);
      }
    };

    fetchCategories();
    fetchTransactions();
  }, []);

  const getCategoryDetails = (categoryId: number) => {
    const category = categories.find(cat => cat.id === categoryId);
    return category ? category : { name: 'Unknown Category', emoji: '❓' };
  };

  const renderTransactionItem = ({ item }: { item: Transaction }) => {
    const category = getCategoryDetails(item.category_id);

    return (
      <View style={styles.transactionCard}>
        <View style={styles.emojiContainer}>
          <Text style={styles.emoji}>{category.emoji}</Text>
        </View>
        <View style={styles.transactionDetails}>
          <Text style={styles.transactionDescription}>{item.description}</Text>
          <Text style={styles.transactionCategory}>{category.name}</Text>
          <Text style={styles.transactionDate}>{item.date}</Text>
        </View>
        <Text style={styles.transactionAmount}>{item.amount}</Text>
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Transactions This Month</Text>
      <FlatList
        data={transactions}
        renderItem={renderTransactionItem}
        keyExtractor={(item) => item.id.toString()}
        contentContainerStyle={styles.transactionsList}
        showsVerticalScrollIndicator={false} 
      />
      <TouchableOpacity style={styles.closeButton} onPress={onClose}>
        <Text style={styles.closeButtonText}>Close</Text>
      </TouchableOpacity>
    </View>
  );
};

export default MonthTransactions;
