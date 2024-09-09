 import { StyleSheet } from "react-native";

 const styles = StyleSheet.create({
    container: {
      flex: 1,
      padding: 16,
      backgroundColor: '#fff',
      borderTopLeftRadius: 24,
      borderTopRightRadius: 24,
      maxHeight: '80%',
    },
    header: {
      fontSize: 24,
      fontFamily: 'Sofia Pro Bold',
      color: '#000',
      marginBottom: 20,
      alignSelf: 'center',
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
    closeButton: {
      backgroundColor: '#456EFE',
      padding: 10,
      borderRadius: 8,
      alignItems: 'center',
    },
    closeButtonText: {
      color: '#fff', 
      fontSize: 18,
      fontFamily: 'Sofia Pro Bold',
    },
  });

  export default styles;