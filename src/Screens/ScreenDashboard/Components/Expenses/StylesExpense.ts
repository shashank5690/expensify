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
      borderRadius:10,
    },
    expenseBlock: {
      alignItems: 'center',
      marginRight: 12,
      borderRadius:15,
    },
    expenseCard: {
      width: 65,
      height: 65,
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