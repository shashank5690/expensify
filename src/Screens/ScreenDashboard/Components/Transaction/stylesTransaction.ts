import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    transactionsContainer: {
      marginTop: 20,
    },
    transactionsHeader: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      paddingHorizontal: 16,
      marginBottom: 12,
    },
    transactionsHeading: {
      fontSize: 20,
      color: '#000',
      fontFamily: 'Sofia Pro Bold',
    },
    transactionsList: {
      paddingHorizontal: 4,
    },
    transactionCard: {
      flexDirection: 'row',
      alignItems: 'center',
      paddingVertical: 20,
      paddingHorizontal: 18,
      borderRadius: 24,
      marginBottom: 12,
      backgroundColor: '#fff',
      shadowColor: '#bfc0c0',
      shadowOffset: { width: 3, height: 5 },
      shadowOpacity: 0.6,
      shadowRadius: 12,
      elevation: 12,
    },
    emojiContainer: {
      backgroundColor: '#f0f0f0',
      borderRadius: 20,
      padding: 12,
      marginRight: 12,
    },
    emoji: {
      fontSize: 25,
    },
    transactionDetails: {
      flex: 1,
    },
    transactionDescription: {
      fontSize: 20,
      fontFamily: 'Sofia Pro Bold',
      color: '#000',
      marginBottom: 4,
      
    },
    transactionCategory: {
      fontSize: 15,
      color: '#6c757d',
      fontFamily: 'Sofia Pro Bold',
      marginBottom: 4,
    },
    transactionDate: {
      fontSize: 14,
      color: '#6c757d',
      fontFamily: 'Sofia Pro',
    },
    transactionAmount: {
      fontSize: 22,
      fontFamily: 'Sofia Pro Bold',
      color: '#212529',
      textAlign: 'right',
    },
  });

  export default styles;