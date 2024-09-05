import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    cardContainer: {
      backgroundColor: '#06d6a0',
      borderRadius: 10,
      padding: 8,
      shadowColor: '#000',
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 0.1,
      shadowRadius: 4,
      elevation: 5,
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
      fontFamily: 'Sofia Pro',
    },
     card:{
      marginLeft: 35,
      top: 15,
      right: 15,
     },
     master:{
      marginLeft: 10,
      right: 15,
      bottom: 10,
     },
    balance: {
      fontSize: 28,
      color: '#fff',
      marginBottom: 16,
      marginLeft: 10,
      fontFamily: 'Sofia Pro Bold',
    },
    cardNumber: {
      fontSize: 18,
      letterSpacing: 2,
      color: '#fff',
      marginBottom: 16,
      marginLeft: 10,
      fontFamily: 'Sofia Pro',
    },
    cardDetails: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      marginBottom: 16,
      marginLeft: 10,
      fontFamily: 'Sofia Pro',
    },
    validity1: {
      fontSize: 12,
      color: '#fff',
      marginRight: 8, 
      fontFamily: 'Sofia Pro',
    },
    validity2: {
      fontSize: 12,
      color: '#fff',
      marginRight: 108, 
      fontFamily: 'Sofia Pro',
    },
    cardHolderLabel: {
      fontSize: 10,
      color: '#fff',
      marginBottom: 4,
      marginLeft: 10,
      fontFamily: 'Sofia Pro',
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
      fontFamily: 'Sofia Pro Bold',
      color: '#fff',
    },
  });

  export default styles;