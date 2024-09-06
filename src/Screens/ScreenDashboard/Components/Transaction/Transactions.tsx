import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';
import { getTransactions, getCategories } from '../../../../db/database';
import styles from './stylesTransaction';

interface Category {
  id: number;
  name: string;
  type: string;
  emoji: string;  
}

interface Transaction {
  id: number;
  category_id: number;
  amount: number;
  date: number;
  description: string;
  type: string;
}

const Transactions: React.FC = () => {
  const [transactions, setTransactions] = useState<Transaction[]>([]);
  const [categories, setCategories] = useState<Category[]>([]);

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
        amount: transaction.type === 'Income'
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
          <Text style={styles.transactionCategory}>
            {category.name}
          </Text>
          <Text style={styles.transactionDate}>{item.date}</Text>
        </View>
        <Text style={styles.transactionAmount}>{item.amount}</Text>
      </View>
    );
  };

  return (
    <View style={styles.transactionsContainer}>
      <View style={styles.transactionsHeader}>
        <Text style={styles.transactionsHeading}>Transactions</Text>
      </View>
      <FlatList
        data={transactions}
        renderItem={renderTransactionItem}
        keyExtractor={(item) => item.id.toString()}
        showsVerticalScrollIndicator={false}
        style={styles.transactionsList}
      />
    </View>
  );
};

export default Transactions;
