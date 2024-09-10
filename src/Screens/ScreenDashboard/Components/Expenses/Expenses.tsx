// components/Expenses.tsx
import React, { useState } from 'react';
import { View, Text, TouchableOpacity, ScrollView } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons'; 
import Modal from 'react-native-modal';
import CategoryTransaction from '../CategoryTransaction/CategoryTransaction';
import styles from './StylesExpense'; 

interface ExpensesProps {
  selectedExpense: string | null;
  onSelectExpense: (expense: string) => void;
}

const Expenses: React.FC<ExpensesProps> = ({ selectedExpense, onSelectExpense }) => {
  const [isBottomSheetVisible, setBottomSheetVisible] = useState(false);
  const [selectedCategoryId, setSelectedCategoryId] = useState<number | null>(null);

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

  const categoryIds: Record<string, number> = {
    'Utilities': 1,
    'Electronics': 2,
    'Food': 3,
    'Rent': 4,
    'Household': 5,
    'Transportation': 6,
    'Medical': 7,
    'Bonus': 8,
    'Consulting': 9,
    'Part-time': 10,
    'Sales': 11,
    'Freelance': 12,
    'Salary': 13,
    'Investments': 14,
  };

  const handleIconPress = (expense: string, categoryId: number) => {
    onSelectExpense(expense);
    setSelectedCategoryId(categoryId);
    setBottomSheetVisible(true);
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
              onPress={() => handleIconPress(label, categoryIds[label])} // Pass both arguments
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

      <Modal
        isVisible={isBottomSheetVisible}
        onBackdropPress={() => setBottomSheetVisible(false)}
        style={{ justifyContent: 'flex-end', margin: 0 }}
      >
        <CategoryTransaction 
          categoryId={selectedCategoryId} 
          onClose={() => setBottomSheetVisible(false)} 
        />
      </Modal>
    </>
  );
};

export default Expenses;
