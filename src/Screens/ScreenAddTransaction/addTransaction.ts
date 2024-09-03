import {StyleSheet} from 'react-native';
export const  styles = StyleSheet.create({
  container: {
    // margin: 15,
    height: '100%',
  },
  card: {
    padding: 15,
    borderRadius: 10,
    // backgroundColor: 'gray',
    marginBottom: 15,
  },
  inputAmount: {
    fontSize: 32,
    fontWeight: 'bold',
    marginBottom: 15,
  },
  inputDescription: {
    marginBottom: 15,
    fontSize: 18,
  },
  entryTypeText: {
    marginBottom: 6,
    fontSize: 16,
    fontWeight: 'bold',
  },
  segmentedControl: {
    marginBottom: 15,
  },
  categoryButton: {
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#00000020',
    borderRadius: 15,
    marginBottom: 6,
  },
  selectedCategoryButton: {
    backgroundColor: '#007BFF20',
  },
  categoryButtonText: {
    fontWeight: '700',
    color: '#000000',
  },
  selectedCategoryButtonText: {
    color: '#007BFF',
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  addButton: {
    height: 40,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#007BFF20',
    borderRadius: 15,
  },
  addButtonText: {
    fontWeight: '700',
    color: '#007BFF',
    marginLeft: 5,
  },
});
