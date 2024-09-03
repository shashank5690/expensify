import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingHorizontal: 16,
    paddingTop: 30,
  },
  header: {
    flexDirection: 'row', 
    alignItems: 'center', 
    justifyContent: 'space-between', 
    marginBottom: 20,
  },
  headerText: {
    fontSize: 24,
    fontWeight: '600',
    color: '#23303B',
  },
  successText: {
    fontFamily: 'Sofia Pro Bold',
    fontSize: 32,
    fontWeight: '600',
    lineHeight: 39.52,
    textAlign: 'center',
    color: '#456EFE',
    marginBottom: 10,
  },
  description:{
  marginTop:30,
  },
  descriptionText: {
    fontFamily: 'Sofia Pro',
    fontSize: 18,
    fontWeight: '500',
    lineHeight: 26.37,
    textAlign: 'center',
    color: '#A4A9AE',
  },
  successImage: {
    alignSelf: 'center',
    marginTop:'20%'
  },
  button: {
    width: 316,
    height: 63,
    position: 'absolute',
    bottom: '15%',
    left: 56,
    borderRadius: 10,
    backgroundColor: '#456EFE',
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    fontFamily: 'Sofia Pro',
    fontSize: 20,
    fontWeight: '500',
    lineHeight: 29.3,
    textAlign: 'right',
    color: '#FFFFFF',
  },
});