import { StyleSheet } from 'react-native';
import { Fonts } from '../../utils/fonts';

export const styles = StyleSheet.create({
    container: {
        backgroundColor: '#23303B',
        height: '100%',
    },
    scrollView: {
        flexGrow: 1,
        justifyContent: 'center',  
    },
    innerContainer: {
        alignItems: 'center',   
        top: 50,     
    },
    text: {
        fontSize: 30,
        lineHeight: 43.95,
        fontFamily:'Sofia Pro',
        color: '#FFFFFF',
        marginBottom: 40,            
    },
    stylefield: {
        width: 316,
        height: 63,
        borderRadius: 10,
        backgroundColor: '#FFFFFF',
        marginBottom: 20,            
    },
    stylefield1:{
        width:232,
        height: 63,            
        borderRadius: 10,
        backgroundColor: '#FFFFFF',
        right:10
    },
    input: {
        color: '#A4A9AE',
        fontSize: 16,
        fontFamily:Fonts.SofiaPro,
        paddingTop: 20,
        paddingLeft: 20,
    },
    buttoncontainer: {
        width: 316,
        height: 63,
        borderRadius: 10,
        backgroundColor: '#456EFE',
        justifyContent: 'center',
        marginBottom: 20,            
    },
    button: {
        borderRadius: 10,
    },
    buttonText: {
        fontFamily: 'Sofia Pro',
        fontSize: 20,
        fontWeight: '400',
        lineHeight: 59.3,
        textAlign: 'center',
        color: '#FFFFFF',
    },
    forget: {
        fontSize: 18,
        color: '#8E949A',
        fontFamily: 'Sofia Pro',
        marginBottom: 40,           
        textAlign: 'center',
        top: 20,
    },

        termsContainer: {
          flexDirection: 'row',
          alignItems: 'center',
          marginBottom: 20,
          right:20,
          
        },
        checkbox: {
          width: 18.23,
          height: 17.83,
          borderRadius: 4,
          marginRight: 10, 
        },
        termsText: {
          fontFamily: 'Sofia Pro',
          fontSize: 16,
          fontWeight: '500',
          lineHeight: 23.44,
          color: '#FFFFFF',
        },
    finger: {
     width: 66.36,
    height: 63,
    borderTopRightRadius: 10,
    borderBottomRightRadius: 10,
    overflow: 'hidden', 
    left:10   
    },
    MyCircleSvg: {
        top: -205,
        left: 245,
        position: 'absolute',
    },
    passwordstyle:{
         flexDirection:'row',
         alignItems:'center',
         marginBottom: 20,            

    }
});
