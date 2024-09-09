import { StyleSheet } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from '../../Responsive/Responsive';

export const styles = StyleSheet.create({
  container: {
    backgroundColor: '#23303B',
    height: '100%',
  },
  fingertext: {
    width: wp('40%'),
    height: hp('6%'),
    top: hp('20%'),
    left: wp('35%'),
    color: '#FFFFFF',
    position: 'absolute',
    fontSize: wp('7%'),
    fontFamily: 'Sofia Pro Bold',
  },
  describtion: {
    width: wp('70%'),
    top: hp('28%'),
    left: wp('18%'),
    height: hp('6%'),
    fontSize: wp('4.5%'),
    justifyContent: 'center',
    fontFamily: 'Sofia Pro Bold',
  },
  finger: {
    width: wp('15%'),
    height: hp('8%'),
    top: hp('75%'),
    left: wp('45%'),
  },
  Ellipseimg: {
    width: wp('170%'),
    top: hp('75%'),
    backgroundColor: '#1C2B391A',
    shadowColor: '#FFFFFF08',
    shadowOffset: { width: wp('1%'), height: hp('2%') },
    shadowOpacity: 0.03,
    shadowRadius: wp('26%'),
    elevation: 10,
  },
  MyCircleSvg: {
    width: wp('85%'),
    height: wp('85%'),
    top: hp('-49%'),
    left: wp('50%'),
  },
});
