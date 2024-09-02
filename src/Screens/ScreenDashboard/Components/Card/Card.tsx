// Card.tsx
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import MasterLogo from '../../assets/MasterLogo';
import Chip from '../../assets/Chip';

const Card: React.FC = () => {
  return (
    <View style={styles.cardContainer}>
      {/* Available Balance Section */}
      <View style={styles.balanceRow}>
        <Text style={styles.label}>Available Balance</Text>
        <Chip style={styles.card}/>
      </View>
      <Text style={styles.balance}>$4534.56</Text>
  

      {/* Card Information Section */}
      <Text style={styles.cardNumber}>1234 5678 9012 3456</Text>
      <View style={styles.cardDetails}>
        <Text style={styles.validity}>Valid From 10/25</Text>
        <Text style={styles.validity}>Valid Thru 05/30</Text>
      </View>
      <Text style={styles.cardHolderLabel}>Card Holder</Text>
      <View style={styles.cardFooter}>
        <Text style={styles.cardHolderName}>Rohit Mehra</Text>
        <MasterLogo />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  cardContainer: {
    backgroundColor: '#456EFE',
    borderRadius: 10,
    padding: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 5,
    marginVertical: 10,
    opacity: 1,
  },
  balanceRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between', 
    marginBottom: 2, 
  },
  label: {
    fontSize: 14,
    color: '#fff',
    marginLeft: 12,
  },
   card:{
    marginLeft: 40,
    top: 15,
   },
  balance: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 16,
    marginLeft: 10,
  },
  cardNumber: {
    fontSize: 18,
    letterSpacing: 2,
    color: '#fff',
    marginBottom: 16,
    marginLeft: 10,
  },
  cardDetails: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 16,
    marginLeft: 10,
  },
  validity: {
    fontSize: 12,
    color: '#fff',
    marginRight: 8, 
  },
  cardHolderLabel: {
    fontSize: 10,
    color: '#fff',
    marginBottom: 4,
    marginLeft: 10,
  },
  cardFooter: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 16,
    marginLeft: 10,
  },
  cardHolderName: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#fff',
  },
});

export default Card;
