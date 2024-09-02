import { FontWeight } from './../../../node_modules/react-native-svg/src/lib/extract/types';
import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    container: {
     flexGrow:1,
     justifyContent: 'flex-start', 
    },
    navbar: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
      paddingHorizontal: 20,
      marginTop: 20, 
    },
    text: {
        fontFamily: 'Sofia Pro Bold',
        fontSize: 22,
        fontWeight: '700',
        lineHeight: 22,
        textAlign: 'left',
        color: '#23303B',
    },
    sure:{
        fontFamily: 'Sofia Pro Bold',
        fontSize: 30,
        fontWeight: '700',
        lineHeight: 39,
        textAlign: 'center',
        color: '#456EFE',
        marginBottom:10,
    },
    policy:{
        width:'80%',
        fontFamily: 'Sofia Pro',
        fontSize: 18,
        fontWeight: '500',
        lineHeight: 26.37,
        textAlign: 'center',
        color: '#A4A9AE',
        marginLeft:35,
    },
    policytext:{
        marginTop:40,
    },
    rec: {
        width: '100%',
        height: 150, 
        justifyContent: 'center',
        alignItems: 'center',
        marginTop:'42%'
      },
      imageContainer: {
        alignItems: 'center',
        position: 'relative', 
      },
      profileImage: {
        position: 'absolute',
        top: 20, 
        width: 120,
        height: 120, 
        borderRadius: 50, 
      },
      name:{
        fontFamily:'Sofia Pro Bold',
        fontWeight:'700',
        fontSize:26,
         color:'#23303B',
      },
      number:{
        fontFamily:'Sofia Pro',
        fontWeight:'500',
        fontSize:16,
        color: '#8E949A',
        marginLeft:13,
      },
      div:{
       position:'absolute' ,
       marginTop:120,
       alignItems:'center',
      },
      contain: {
         alignItems: 'center', 
        flexDirection:'row',
        bottom:62,
      },
      transaction:{
        bottom:22,
      },
      amount: {
        fontFamily: 'Sofia Pro Bold',
        fontSize: 36,
        fontWeight: '700',
        lineHeight: 36,
        textAlign: 'center',
        color:'#23303B',
      },
      card:{
       bottom:40,
      },
      currency: {
        fontFamily: 'Sofia Pro',
        fontSize: 20,
        fontWeight: '600',
        lineHeight: 30,
        textAlign: 'center',
      },
      button: {
        width: 316,
        height: 63,
        top: 734.41,
        left: 56,
        borderRadius: 10,
        backgroundColor: '#456EFE',
        justifyContent: 'center', 
        alignItems: 'center', 
        position: 'absolute', 
      },
      buttonText: {
        fontFamily: 'Sofia Pro',
        fontSize: 20,
        fontWeight: '500',
        lineHeight: 29.3,
        textAlign: 'right',
        color: '#FFFFFF', 
      },
  });
  