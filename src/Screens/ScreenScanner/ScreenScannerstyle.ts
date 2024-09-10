import { StyleSheet } from "react-native";
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from '../../Responsive/Responsive'

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: wp('4%'),
    backgroundColor: '#fff',
    marginTop: hp('4%'),
  },
  headerText: {
    fontSize: wp('6%'),
    fontWeight: '600',
    color: '#23303B',
    fontFamily: 'Sofia Pro Bold',
  },
  QrScanner: {
    height: wp('67%'), 
    width: wp('67%'),
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: wp('6%'), 
  },
  scanningSection: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    bottom: hp('3%'),
  },
  topEdge: {
    transform: [{ rotate: '180deg' }],
    top: hp('2%'),
  },
  bottomEdge: {
    bottom: hp('2%'),
  },
  instructionText: {
    textAlign: 'center',
    fontSize: wp('4.5%'),
    fontFamily: 'Sofia Pro Bold',
    color: '#A4A9AE',
    marginVertical: hp('2%'),
    paddingHorizontal: wp('8%'),
    bottom: hp('12%'),
    lineHeight: hp('3.5%'),
    gap: hp('1%'),
  },
  scanButton: {
    backgroundColor: '#456EFE',
    borderRadius: wp('3%'),
    paddingVertical: hp('2%'),
    paddingHorizontal: wp('27%'),
    marginBottom: hp('5%'),
    alignSelf: 'center',
    bottom: hp('2%'),
  },
  scanButtonText: {
    fontSize: wp('4.5%'),
    color: '#FFFFFF',
    fontWeight: '600',
    fontFamily: 'Sofia Pro Bold',
  },
});
