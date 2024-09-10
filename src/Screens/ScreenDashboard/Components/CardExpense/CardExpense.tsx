import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import MasterLogo from '../../assets/MasterLogo';
import Chip from '../../assets/Chip';
import styles from './StyleCardExpense';
import { RootState } from '../../../../utils/redux/store';
import { useDispatch, useSelector } from 'react-redux';
import { getIncomeExpenseTotals } from '../../../../db/database';
import { addExpense } from '../../../../utils/redux/transactionSlice';
const Card: React.FC = () => {
  const dispatch=useDispatch()
  const [totalExpense, setTotalExpense] = useState(0);

  useEffect(() => {
    fetchTotals();
  }, []);

  const fetchTotals = async () => {
    try {
      const totals = await getIncomeExpenseTotals();
      setTotalExpense(totals.totalExpense);
      dispatch(addExpense(totals.totalExpense));
    } catch (error) {
      console.error('Failed to fetch expense total', error);
    }
  }; 
   return (
    <View style={styles.cardContainer}>
      <View style={styles.balanceRow}>
        <Text style={styles.label}>Total Expenses</Text>
        <Chip style={styles.card}/>
      </View>
      <Text style={styles.balance}>${totalExpense.toFixed(2)}</Text>
  

      
      <Text style={styles.cardNumber}>1234 5678 9012 3456</Text>
      <View style={styles.cardDetails}>
        <Text style={styles.validity1}>Valid From 10/25</Text>
        <Text style={styles.validity2}>Valid Thru 05/30</Text>
      </View>
      <Text style={styles.cardHolderLabel}>Card Holder</Text>
      <View style={styles.cardFooter}>
        <Text style={styles.cardHolderName}>Rohit Shashank</Text>
        <MasterLogo style={styles.master}/>
      </View>
    </View>
  );
};


export default Card;
