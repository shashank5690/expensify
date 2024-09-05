import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    height: '100%',
    backgroundColor: '#F9F9F9', 
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 16,
    backgroundColor: '#FFFFFF',
    marginTop: 30,
  },
  categoryList: {
    paddingVertical: 10,
     //height:'40%'
  },
  headerText: {
    fontSize: 24,
    fontWeight: '600',
    color: '#23303B',
    fontFamily: 'Sofia Pro Bold',
  },
  card: {
    padding: 20,
    backgroundColor: '#FFFFFF',
    marginBottom: 15,
    elevation: 3, 
    borderColor: '#E0E0E0',
    borderWidth: 1, 
  },
  EnterAmount: {
    fontSize: 20,
    color: '#333333',
    fontFamily: 'Sofia Pro Bold',
  },
  inputAmount: {
    fontSize: 32,
    fontFamily: 'Sofia Pro Bold',
    marginBottom: 15,
    borderRadius: 12,
    padding: 10,
    color: '#333',
    borderWidth: 1,
    borderColor: '#D0D0D0',
  },
  datePickerButton: {

    backgroundColor: '#FFFFFF', 
    borderRadius: 12,
    alignItems: 'center',
    top: 10,
    paddingVertical: 15, 
    paddingHorizontal: 20,
    borderColor: '#D0D0D0',
    elevation: 3, 
    justifyContent: 'space-between', 

  },
  datePickerButtonText: {
    color: '#333333',
    fontFamily: 'Sofia Pro Bold',
    fontSize: 16,
  },
  inputDescription: {
    marginBottom: 15,
    fontSize: 18,
    fontFamily: 'Sofia Pro Bold',
    borderRadius: 12,
    padding: 10,
    color: '#333',
    borderWidth: 1,
    borderColor: '#D0D0D0', 
  },
  entryTypeText: {
    marginTop: 10,
    marginBottom: 10,
    fontSize: 16,
    fontFamily: 'Sofia Pro Bold',
    color: '#555', 
  },
  segmentedControl: {
    marginBottom: 15,
    fontFamily: 'Sofia Pro Bold',
  },
  categoryButton: {
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
     backgroundColor: '#E0E0E0',
    borderRadius: 12,
    marginBottom: 10,
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
    marginVertical: 30,
  
  },
  button: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    height: 50,
    borderRadius: 12,
    marginHorizontal: 6, 
  },
  cancelButton: {
    backgroundColor: '#D90429',
  },
  saveButton: {
    backgroundColor: '#456EFE',
  },
  buttonText: {
    color: 'white',
    fontSize: 18,
    fontFamily: 'Sofia Pro Bold',
  },
});