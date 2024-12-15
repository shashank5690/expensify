import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    expensesText: {
      fontSize: 20,
      color: '#000',
      marginBottom: 14,
      marginTop: -4,
      fontFamily: 'Sofia Pro Bold',
    },
    expensesContainer: {
      flexDirection: 'row',
    },
    expenseBlock: {
      alignItems: 'center',
      marginRight: 12,
    },
    expenseCard: {
      width: 72,
      height: 72,
      backgroundColor: '#e9ecef',
      borderRadius: 15,
      justifyContent: 'center',
      alignItems: 'center',
    },
    expenseText: {
      fontSize: 14,
      color: '#6c757d',
      marginTop: 4,
      fontFamily: 'Sofia Pro Bold',
    },
  });

export default styles;