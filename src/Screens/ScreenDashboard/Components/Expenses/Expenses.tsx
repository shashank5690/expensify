import React from 'react';
import { View, Text, TouchableOpacity, ScrollView } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons'; 
import styles from './StylesExpense'; 

interface ExpensesProps {
  selectedExpense: string | null;
  onSelectExpense: (expense: string) => void;
}

const Expenses: React.FC<ExpensesProps> = ({ selectedExpense, onSelectExpense }) => {
  const isSelected = (expense: string) => selectedExpense === expense;

  const expenseIcons: Record<string, string> = {
    'Utilities': 'bulb', 
    'Electronics': 'phone-portrait', 
    'Food': 'restaurant', 
    'Rent': 'home', 
    'Household': 'home-outline', 
    'Transportation': 'car', 
    'Medical': 'medkit', 
    'Bonus': 'gift',
    'Consulting': 'briefcase', 
    'Part-time': 'time', 
    'Sales': 'cart', 
    'Freelance': 'pencil', 
    'Salary': 'cash', 
    'Investments': 'stats-chart', 
  };

  return (
    <>
      <Text style={styles.expensesText}>Categories</Text>
      <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.expensesContainer}>
        {Object.entries(expenseIcons).map(([label, iconName]) => (
          <View key={label} style={styles.expenseBlock}>
            <TouchableOpacity
              style={[
                styles.expenseCard,
                isSelected(label) && { backgroundColor: '#456EFE' },
              ]}
              onPress={() => onSelectExpense(label)}
            >
              <Ionicons
                name={iconName}
                size={25} 
                color={isSelected(label) ? '#FFF' : '#456EFE'} 
              />
            </TouchableOpacity>
            <Text style={[
              styles.expenseText,
              isSelected(label) && { color: '#456EFE' }, 
            ]}>
              {label}
            </Text>
          </View>
        ))}
      </ScrollView>
    </>
  );
};

export default Expenses;
