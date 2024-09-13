import { StyleSheet } from "react-native";
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from '../../../../Responsive/Responsive';  

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: wp('4%'),  
    backgroundColor: '#fff',
    borderTopLeftRadius: wp('6%'),
    borderTopRightRadius: wp('6%'),
    maxHeight: '80%',
  },
  header: {
    fontSize: wp('6%'),
    fontFamily: 'Sofia Pro Bold',
    color: '#000',
    marginBottom: hp('2%'),
    alignSelf: 'center',
  },
  transactionsList: {
    paddingHorizontal: wp('2%'),
  },
  transactionCard: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: hp('2.5%'),
    paddingHorizontal: wp('4.5%'),
    borderRadius: wp('6%'),
    marginBottom: hp('1.5%'),
    backgroundColor: '#fff',
    shadowColor: '#bfc0c0',
    shadowOffset: { width: 3, height: 5 },
    shadowOpacity: 0.6,
    shadowRadius: 12,
    elevation: 12,
  },
  emojiContainer: {
    backgroundColor: '#f0f0f0',
    borderRadius: wp('5%'),
    padding: wp('3%'),
    marginRight: wp('3%'),
  },
  emoji: {
    fontSize: wp('6.5%'),
  },
  transactionDetails: {
    flex: 1,
  },
  transactionDescription: {
    fontSize: wp('5%'),
    fontFamily: 'Sofia Pro Bold',
    color: '#000',
    marginBottom: hp('0.5%'),
  },
  transactionCategory: {
    fontSize: wp('4%'),
    color: '#6c757d',
    fontFamily: 'Sofia Pro Bold',
    marginBottom: hp('0.5%'),
  },
  transactionDate: {
    fontSize: wp('3.5%'),
    color: '#6c757d',
    fontFamily: 'Sofia Pro',
  },
  transactionAmount: {
    fontSize: wp('5.5%'),
    fontFamily: 'Sofia Pro Bold',
    color: '#212529',
    textAlign: 'right',
  },
  closeButton: {
    backgroundColor: '#456EFE',
    padding: wp('3%'),
    borderRadius: wp('3%'),
    alignItems: 'center',
    position: 'absolute',
    bottom: hp('5%'),
    width: wp('90%'),
    left: wp('5%'),
  },
  closeButtonText: {
    color: '#fff',
    fontSize: wp('4.5%'),
    fontFamily: 'Sofia Pro Bold',
  },
  noTransactionText: {
    fontSize: wp('5%'),
    fontFamily: 'Sofia Pro Bold',
    color: '#6c757d',
    textAlign: 'center',
    marginVertical: hp('2%'),
  },
});

export default styles;
