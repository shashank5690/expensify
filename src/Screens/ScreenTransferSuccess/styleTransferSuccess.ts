import { StyleSheet } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from '../../Responsive/Responsive'; 

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingHorizontal: wp('4%'), 
    paddingTop: hp('3.5%'),
  },
  header: {
    flexDirection: 'row', 
    alignItems: 'center', 
    justifyContent: 'space-between', 
    marginBottom: hp('2%'),
    padding: wp('5%'),
  },
  headerText: {
    fontSize: wp('6%'),
    fontWeight: '600',
    color: '#23303B',
  },
  successText: {
    fontFamily: 'Sofia Pro Bold',
    fontSize: wp('8%'),
    fontWeight: '600',
    lineHeight: hp('5%'),
    textAlign: 'center',
    color: '#456EFE',
    marginBottom: hp('1.5%'),
  },
  description: {
    marginTop: hp('4%'),
  },
  descriptionText: {
    fontFamily: 'Sofia Pro',
    fontSize: wp('4.5%'),
    fontWeight: '500',
    lineHeight: hp('3.3%'),
    textAlign: 'center',
    color: '#A4A9AE',
  },
  successImage: {
    alignSelf: 'center',
    marginTop: hp('10%'),
  },
  button: {
    width: wp('80%'),
    height: hp('8%'),
    position: 'absolute',
    bottom: hp('12%'),
    left: wp('10%'),
    borderRadius: 10,
    backgroundColor: '#456EFE',
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    fontFamily: 'Sofia Pro',
    fontSize: wp('5%'),
    fontWeight: '500',
    lineHeight: hp('3.5%'),
    textAlign: 'right',
    color: '#FFFFFF',
  },
});
