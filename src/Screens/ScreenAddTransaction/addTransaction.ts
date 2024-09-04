import {StyleSheet} from 'react-native';




export const  styles = StyleSheet.create({
  container: {
    // margin: 15,
    height: '100%',
    backgroundColor: '#FFFFFF',

  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 16,
    backgroundColor: '#fff',
    marginTop: 30,
    fontFamily: 'Sofia Pro',

  },
  headerText: {
    fontSize: 24,
    fontWeight: '600',
    color: '#23303B',
    fontFamily: 'Sofia Pro Bold',
  },
  card: {
    padding: 15,
    borderRadius: 10,
    // backgroundColor: 'gray',
    marginBottom: 15,
  },
  EnterAmount: {
    fontSize: 20,
    color: '#000',
    marginBottom: 12,
    marginTop: 12,
    fontFamily: 'Sofia Pro Bold',
  },
  inputAmount: {
    fontSize: 32,
    fontFamily: 'Sofia Pro Bold',
    marginBottom: 15,
    backgroundColor: '#00000020', 
    borderRadius: 12, 
    padding: 10, 
    color: '#333', 
  },

  inputDescription: {
    marginBottom: 15,
    fontSize: 18,
    fontFamily: 'Sofia Pro Bold',
    backgroundColor: '#00000020',
    borderRadius: 12, 
    padding: 10, 
    color: '#333', 
  },
  entryTypeText: {
    marginTop: 10,
    marginBottom: 10,
    fontSize: 16,
    fontFamily: 'Sofia Pro Bold',
  },
    segmentedControl: {
    marginBottom: 15,
    fontFamily: 'Sofia Pro Bold',
  },
  categoryButton: {
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#00000020',
    borderRadius: 12,
    marginBottom: 6,
    fontFamily: 'Sofia Pro Bold',
  },
  selectedCategoryButton: {
    backgroundColor: '#007BFF20',
  },
  categoryButtonText: {
    fontFamily: 'Sofia Pro Bold',
    color: '#000000',
  },
  selectedCategoryButtonText: {
    color: '#007BFF',
    fontFamily: 'Sofia Pro Bold',
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between', 
    marginVertical: 20, 
  },
  button: {
    flex: 1, 
    alignItems: 'center',
    justifyContent: 'center', 
    height: 50,
    borderRadius: 12, 
    marginHorizontal: 12, 
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
