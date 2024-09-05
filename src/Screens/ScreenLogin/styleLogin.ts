import { StyleSheet } from 'react-native';
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
        top: hp('15%'), 
    },
    text: {
        fontSize: wp('8%'),
        lineHeight: wp('10%'),
        fontFamily: 'Sofia Pro Bold',
        color: '#FFFFFF',
        marginBottom: hp('5%'),
    },
    stylefield: {
        width: wp('80%'),
        height: hp('7%'),
        borderRadius: 10,
        backgroundColor: '#FFFFFF',
        marginBottom: hp('3%'),
    },
    stylefield2: {
        width: wp('80%'),
        height: hp('7%'),
        borderRadius: 10,
        backgroundColor: '#FFFFFF',
        marginBottom: hp('3%'),
    },
    input: {
        color: '#A4A9AE',
        fontSize: wp('4%'),
        fontFamily: 'Sofia Pro',
        paddingTop: hp('2%'),
        paddingLeft: wp('4%'),
    },
    buttoncontainer: {
        width: wp('80%'),
        height: hp('7%'),
        borderRadius: 10,
        backgroundColor: '#456EFE',
        justifyContent: 'center',
        marginBottom: hp('3%'),
    },
    button: {
        borderRadius: 10,
    },
    buttonText: {
        fontFamily: 'Sofia Pro Bold',
        fontSize: wp('5%'),
        fontWeight: '400',
        lineHeight: wp('8%'),
        textAlign: 'center',
        color: '#FFFFFF',
    },
    forget: {
        fontSize: wp('5%'),
        color: '#8E949A',
        fontFamily: 'Sofia Pro',
        marginBottom: hp('5%'),
        textAlign: 'center',
        top: hp('2%'),
    },
    finger: {
        width: wp('15%'),
        height: hp('8%'),
        marginBottom: hp('3%'),
        top: hp('2%'),
    },
    MyCircleSvg: {
        top: hp('-35%'),
        left: wp('60%'),
        position: 'absolute',
    },
    error: {
        color: 'red',
        paddingTop: hp('1%'),
        paddingLeft:wp('0.5%')
    },
    signuptext: {
        fontFamily: 'Sofia Pro',
        fontSize: wp('5%'),
        fontWeight: '400',
        lineHeight: wp('6%'),
        textAlign: 'center',
        color: '#8E949A',
        marginTop: hp('2%'),
    },
    signup: {
        color: 'white',
    },
});
