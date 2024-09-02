import { FontWeight } from './../../../node_modules/react-native-svg/src/lib/extract/types';
import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    // container: {
    //   flex: 1,
    // },
    navbar: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
      paddingHorizontal: 10,
      top:30,
    },
    text: {
        fontFamily: 'Sofia Pro',
        fontSize: 22,
        fontWeight: '700',
        lineHeight: 22,
        textAlign: 'left',
        color: '#23303B',
    },
  });
  