import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#FFFFFF',
    },
    header: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
      padding: 16,
      backgroundColor: '#fff',
      marginTop: 30,
      fontFamily: 'Sofia Pro',
    },
    headerText: {
      fontSize: 24,
      fontWeight: '600',
      color: '#23303B',
      fontFamily: 'Sofia Pro Bold',
    },
    content: {
      flex: 1,
      padding: 16,
    },
    cardScrollView: {
      marginBottom: 16,
    },
    cardScrollViewContent: {
      flexDirection: 'row',
      alignItems: 'center',
    },
    cardWrapper: {
      width: 355, 
      marginRight: 12, 
      backgroundColor: '#fff',
    },
    quickActionsText: {
      fontSize: 20,
      color: '#000',
      marginBottom: 12,
      marginTop: 12,
      fontFamily: 'Sofia Pro Bold',
    },
    actionsContainer: {
      flexDirection: 'row',
      justifyContent: 'space-between',
    },
    logoutButton:{
      width: 24,
      height: 24,
      right: 10,
    },
    logoutIconContainer: {
      backgroundColor: '#fff',
      borderColor: '#ced4da',
      borderWidth: 1,
      borderRadius: 50,
      width: 45,
      height: 45,
      justifyContent: 'center',
      alignItems: 'center',
      right: 13,
      bottom: 11,
    },    
    logoutIcon: {
      width: 16,
      height: 16,
      left:2,
    },
    actionCard: {
      width: 110,
      height: 110,
      backgroundColor: '#fff',
      borderRadius: 10,
      justifyContent: 'center',
      alignItems: 'center',
      shadowColor: '#adb5bd',
      shadowOffset: { width: 4, height: 8 },
      shadowOpacity: 1,
      shadowRadius: 12,
      elevation: 10,
      marginHorizontal: 6,
    },
    icon1: {
      marginBottom: 2,
    },
    icon2: {
      marginBottom: 2,
    },
    icon3: {
      top: 10,
    },
    actionText1: {
      fontSize: 14,
      color: '#000',
      bottom: 36,
      fontFamily: 'Sofia Pro Bold',
    },
    actionText2: {
      fontSize: 14,
      fontFamily: 'Sofia Pro Bold',
      color: '#000',
      bottom: 36,
    },
    actionText3: {
      fontSize: 14,
      fontFamily: 'Sofia Pro Bold',
      color: '#000',
      top: 10,
      left: 5,
    },
  });

  
  export default styles;