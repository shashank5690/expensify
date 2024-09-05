import { StyleSheet } from 'react-native';
import { Fonts } from '../../utils/fonts';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from '../../Responsive/Responsive'; 

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
        top: hp('8.5%'), 
    },
    text: {
        fontSize: wp('8%'), 
        lineHeight: wp('10%'), 
        fontFamily: 'Sofia Pro Bold',
        color: '#FFFFFF',
        marginBottom: hp('4%'), 
    },
    stylefield: {
        width: wp('80%'), 
        height: hp('7%'), 
        borderRadius: 10,
        backgroundColor: '#FFFFFF',
        marginBottom: hp('2%'), 
    },
    stylefield1: {
        width: wp('60%'),
        height: hp('7%'), 
        borderRadius: 10,
        backgroundColor: '#FFFFFF',
        right: 7,
    },
    input: {
        color: '#A4A9AE',
        fontSize: wp('4%'), 
        fontFamily: Fonts.SofiaPro,
        paddingTop: hp('2%'), 
        paddingLeft: wp('5%'), 
    },
    buttoncontainer: {
        width: wp('80%'), 
        height: hp('8%'),
        borderRadius: 10,
        backgroundColor: '#456EFE',
        justifyContent: 'center',
        bottom: 10,
    },
    button: {
        borderRadius: 10,
    },
    buttonText: {
        fontFamily: 'Sofia Pro Bold',
        fontSize: wp('5%'), 
        fontWeight: '400',
        lineHeight: hp('6%'), 
        textAlign: 'center',
        color: '#FFFFFF',
    },
    forget: {
        fontSize: wp('4.5%'),
        color: '#8E949A',
        fontFamily: 'Sofia Pro',
        marginBottom: hp('5%'), 
        textAlign: 'center',
        top: hp('2%'), 
    },
    termsContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        right: 50,
    },
    checkbox: {
        width: wp('15%'), 
        height: hp('8%'),
        borderRadius: 4,
    },
    termsText: {
        fontFamily: 'Sofia Pro',
        fontSize: wp('4%'), 
        fontWeight: '500',
        lineHeight: hp('5%'), 
        color: '#FFFFFF',
        bottom: 15,
    },
    finger: {
        width: wp('17%'),
        height: hp('10%'),
        borderTopRightRadius: 10,
        borderBottomRightRadius: 10,
        overflow: 'hidden',
        left: 10,
        top: hp('1.5%')
    },
    MyCircleSvg: {
        top: hp('-20%'), 
        left: wp('60%'), 
        position: 'absolute',
    },
    passwordstyle: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: hp('2%'), 
    },
    error:{
        color:'red',
        paddingTop:hp('0.6%'),
        paddingLeft:wp('0.5%')
    }
});