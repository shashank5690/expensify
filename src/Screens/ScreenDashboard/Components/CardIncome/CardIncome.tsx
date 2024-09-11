import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import MasterLogo from '../../assets/MasterLogo';
import Chip from '../../assets/Chip';
import styles from './StyleCardIncome';
import { RootState } from '../../../../utils/redux/rootReducer';
import { useDispatch, useSelector } from 'react-redux';
import { getIncomeExpenseTotals } from '../../../../db/database';
import { addIncome } from '../../../../utils/redux/transactionSlice';

const Card: React.FC = () => {
const dispatch=useDispatch();
  const [totalIncome, setTotalIncome] = useState(0);

const income=useSelector((state:RootState)=>state.transaction.incomeamount)
  useEffect(() => {
    fetchTotals();
  }, []);

   const fetchTotals = async () => {
    try {
      const totals = await getIncomeExpenseTotals();
    //  setTotalIncome(totals.totalIncome);
      dispatch(addIncome(totals.totalIncome));
      
    } catch (error) {
      console.error('Failed to fetch income total', error);
    }
  };
  return (
    <View style={styles.cardContainer}>
      <View style={styles.balanceRow}>
        <Text style={styles.label}>Total Income</Text>
        <Chip style={styles.card}/>
      </View>
      <Text style={styles.balance}>${income.toFixed(2)}</Text>
  

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
