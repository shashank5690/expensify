import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import Salary from '../../assets/Salary';
import Medical from '../../assets/Medical';
import Rent from '../../assets/Rent';
import Clothing from '../../assets/Clothing';
import Electricity from '../../assets/Electricity';
import Personal from '../../assets/Personal';
import Food from '../../assets/Food';
import Household from '../../assets/Household';
import Utilities from '../../assets/Utilities';
import Insurance from '../../assets/Insurance';
import styles from './StylesExpense';

interface ExpensesProps {
  selectedExpense: string | null;
  onSelectExpense: (expense: string) => void;
}

const Expenses: React.FC<ExpensesProps> = ({ selectedExpense, onSelectExpense }) => {
  const isSelected = (expense: string) => selectedExpense === expense;

  return (
    <>
      <Text style={styles.expensesText}>Expenses</Text>
      <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.expensesContainer}>
        {[
          { label: 'Salary', Icon: Salary },
          { label: 'Medical', Icon: Medical },
          { label: 'Rent', Icon: Rent },
          { label: 'Clothing', Icon: Clothing },
          { label: 'Electricity', Icon: Electricity },
          { label: 'Personal', Icon: Personal },
          { label: 'Food', Icon: Food },
          { label: 'Household', Icon: Household },
          { label: 'Utilities', Icon: Utilities },
          { label: 'Insurance', Icon: Insurance },
        ].map(({ label, Icon }) => (
          <View key={label} style={styles.expenseBlock}>
            <TouchableOpacity
              style={[
                styles.expenseCard,
                isSelected(label) && { backgroundColor: '#bfc0c0' },
              ]}
              onPress={() => onSelectExpense(label)}
            >
              <Icon />
            </TouchableOpacity>
            <Text style={styles.expenseText}>{label}</Text>
          </View>
        ))}
      </ScrollView>
    </>
  );
};



export default Expenses;
