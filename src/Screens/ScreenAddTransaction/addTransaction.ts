import { StyleSheet } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from '../../Responsive/Responsive';

export const styles = StyleSheet.create({
  container: {
    height: hp('100%'),
    backgroundColor: '#F9F9F9',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: wp('4%'),
    backgroundColor: '#FFFFFF',
    marginTop: hp('3%'),
  },
  categoryList: {
   // paddingVertical: hp('0%'),
  },
  headerText: {
    fontSize: wp('6%'),
    fontWeight: '600',
    color: '#23303B',
    fontFamily: 'Sofia Pro Bold',
  },
  card: {
    paddingHorizontal: wp('4%'),
    paddingTop:hp('1%'),
    backgroundColor: '#FFFFFF',
    marginBottom: hp('2%'),
    elevation: 3,
    borderColor: '#E0E0E0',
    borderWidth: 1,
  },
  EnterAmount: {
    fontSize: wp('5%'),
    color: '#333333',
    fontFamily: 'Sofia Pro Bold',
  },
  inputAmount: {
    fontSize: wp('8%'),
    fontFamily: 'Sofia Pro Bold',
    marginBottom: hp('2%'),
    borderRadius: 12,
    padding: wp('3%'),
    color: '#333',
    borderWidth: 1,
    borderColor: '#D0D0D0',
  },
 datePickerButton: {
    backgroundColor: '#FFFFFF',
    borderRadius: 12,
    alignItems: 'center',
    top: hp('0.5%'),
    paddingVertical: hp('2%'),
    paddingHorizontal: wp('5%'),
    borderColor: '#D0D0D0',
    elevation: 3,
    justifyContent: 'space-between',
  },
  datePickerButtonText: {
    color: '#333333',
    fontFamily: 'Sofia Pro Bold',
    fontSize: wp('4%'),
  },
  inputDescription: {
    marginBottom: hp('2%'),
    fontSize: wp('4.5%'),
    fontFamily: 'Sofia Pro Bold',
    borderRadius: 12,
    padding: wp('3%'),
    color: '#333',
    borderWidth: 1,
    borderColor: '#D0D0D0',
  },
  entryTypeText: {
    marginTop: hp('0.5%'),
    marginBottom: hp('0.5%'),
    fontSize: wp('4%'),
    fontFamily: 'Sofia Pro Bold',
    color: '#555',
  },
  segmentedControl: {
    marginBottom: hp('2%'),
    fontFamily: 'Sofia Pro Bold',
  },
  categoryButton: {
    height: hp('5.7%'),
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#E0E0E0',
    borderRadius: 12,
    marginBottom: hp('1.5%'),
    fontFamily: 'Sofia Pro Bold',
    elevation: 1, 
  },
  selectedCategoryButton: {
    backgroundColor: 'gray',
  },
  categoryButtonText: {
    fontFamily: 'Sofia Pro Bold',
    color: '#000000',
  },
  selectedCategoryButtonText: {
    fontFamily: 'Sofia Pro Bold',
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: hp('2%'),
  },
  button: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    height: hp('5%'),
    borderRadius: 12,
    marginHorizontal: wp('3%'),
  },
  cancelButton: {
    backgroundColor: '#D90429',
  },
  saveButton: {
    backgroundColor: '#456EFE',
  },
  buttonText: {
    color: 'white',
    fontSize: wp('4.5%'),
    fontFamily: 'Sofia Pro Bold',
  },
});
