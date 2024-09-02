import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    container: {
        backgroundColor: '#23303B',
        height:'100%'
    },
    scrollView: {
        flexGrow: 1,
        justifyContent: 'center',  
    },
    innerContainer: {
        alignItems: 'center',   
        top:150,     
    },
    text: {
        fontSize: 30,
        lineHeight: 43.95,
        fontFamily: 'Sofia Pro',
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
    stylefield2: {
        width: 316,
        height: 63,
        borderRadius: 10,
        backgroundColor: '#FFFFFF',
        marginBottom: 20,            
    },
    input: {
        color: '#A4A9AE',
        fontSize: 16,
        fontFamily: 'Sofia Pro',
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
        top:20,
    },
    finger: {
        width: 53.34,
        height: 61.54,
        marginBottom: 30,
        top:20,           
    },
    MyCircleSvg: {
       top:-325,
       left:245,
       position:'absolute'
    },
    signuptext: {
        fontFamily: 'Sofia Pro',
        fontSize: 18,
        fontWeight: '400',
        lineHeight: 26.37,
        textAlign: 'center',
        color: '#8E949A',
        marginTop: 20,
    },
    signup: {
        color: 'white',
    },
});
