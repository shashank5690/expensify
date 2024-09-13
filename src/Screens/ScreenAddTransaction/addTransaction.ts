import { StyleSheet } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from '../../Responsive/Responsive';

export const styles = StyleSheet.create({
  container: {
    height: hp('100%'),
    backgroundColor: '#FFFFFF',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: wp('4%'),
    backgroundColor: '#FFFFFF',
    marginTop: hp('3%'),
  },
  cat: {
    maxHeight: hp('34%'),
    borderWidth: 1,
    borderColor: '#D0D0D0',
    borderRadius: 12,
    paddingVertical: hp('1%'),
    paddingHorizontal: wp('3%'),
    backgroundColor: '#FFFFFF',
    //#F5F8FF
  },
  headerText: {
    fontSize: wp('6%'),
    fontWeight: '600',
    color: '#23303B',
    fontFamily: 'Sofia Pro Bold',
  },
  card: {
    paddingHorizontal: wp('4%'),
    paddingTop: hp('1%'),
    backgroundColor: '#FFFFFF',
    marginBottom: hp('2%'),
  },
  EnterAmount: {
    fontSize: wp('5%'),
    color: '#23303B',
    fontFamily: 'Sofia Pro Bold',
  },
  inputAmount: {
    fontSize: wp('8%'),
    fontFamily: 'Sofia Pro Bold',
    marginBottom: hp('2%'),
    borderRadius: 12,
    padding: wp('3%'),
    color: '#23303B',
    borderWidth: 1,
    borderColor: '#F5F8FF',
    backgroundColor: '#F5F8FF', 
  },
  datePickerButton: {
    backgroundColor: '#F5F8FF', 
    borderRadius: 12,
    alignItems: 'center',
    top: hp('0.5%'),
    paddingVertical: hp('2%'),
    marginHorizontal: wp('5%'),
    borderColor: '#466EFA', 
    elevation: 3,
    justifyContent: 'space-between',
  },
  datePickerButtonText: {
    color: '#23303B',
    fontFamily: 'Sofia Pro Bold',
    fontSize: wp('4%'),
  },
  inputDescription: {
    marginBottom: hp('2%'),
    fontSize: wp('4.5%'),
    fontFamily: 'Sofia Pro Bold',
    borderRadius: 12,
    padding: wp('3%'),
    color: '#23303B',
    borderWidth: 1,
    borderColor: '#F5F8FF',
    backgroundColor: '#F5F8FF',  },
  entryTypeText: {
    marginTop: hp('0.5%'),
    marginBottom: hp('0.5%'),
    fontSize: wp('4%'),
    fontFamily: 'Sofia Pro Bold',
    color: '#23303B',
  },
  segmentedControl: {
    marginBottom: hp('2%'),
    fontFamily: 'Sofia Pro Bold',
  },
  categoryButton: {
    height: hp('5.7%'),
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5F8FF', 
    borderRadius: 12,
    marginBottom: hp('1.5%'),
    fontFamily: 'Sofia Pro Bold',
  },
  selectedCategoryButton: {
    backgroundColor: '#466EFA', 
  },
  categoryButtonText: {
    fontFamily: 'Sofia Pro Bold',
    color: '#23303B', 
  },
  selectedCategoryButtonText: {
    fontFamily: 'Sofia Pro Bold',
    color: '#FFFFFF', 
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
    backgroundColor: '#d90429',
  },
  saveButton: {
    backgroundColor: '#466EFA', 
  },
  buttonText: {
    color: 'white',
    fontSize: wp('4.5%'),
    fontFamily: 'Sofia Pro Bold',
  },
});
