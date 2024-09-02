import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    expensesText: {
      fontSize: 20,
      color: '#000',
      marginBottom: 12,
      marginTop: 16,
      fontFamily: 'Sofia Pro Bold',
    },
    expensesContainer: {
      flexDirection: 'row',
    },
    expenseBlock: {
      alignItems: 'center',
      marginRight: 8,
    },
    expenseCard: {
      width: 70,
      height: 70,
      backgroundColor: '#e9ecef',
      borderRadius: 14,
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