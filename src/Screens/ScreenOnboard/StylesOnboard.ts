import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
      backgroundColor: '#23303B',
      height: '100%',
    },
    itemContainer: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#23303B',
    },
    image: {
      width: '100%',
      height: '100%',
      resizeMode: 'cover',
    },
    itemTitle: {
      textAlign: 'left',
      fontSize: 32,
      color: '#FFFFFF',
      bottom:200,
      marginLeft: -30,
      fontFamily: 'Sofia Pro Bold',
    },
    itemTitleLastPart:{
      textAlign: 'left',
      fontSize: 32,
      marginBottom: 10,
      color: '#456EFE',
      bottom:200,
      marginLeft: -30,
      fontFamily: 'Sofia Pro Bold',
    },
    itemText: {
      marginLeft: -30,
      marginTop: 10,
      color: '#8E949A',
      lineHeight: 25,
      bottom:200,
      fontSize:16,
      fontFamily: 'Sofia Pro',
    },
    bottomContainer: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      marginHorizontal: 10,
      paddingVertical: 20,
      marginLeft: 30,
      bottom: 150,
    },
  });

  export default styles;