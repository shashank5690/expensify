import React from 'react'
import { Text, TouchableOpacity, View } from 'react-native'
import { styles } from './styleFingerprint'
import Finger from './Assets/Finger'
import Ellipseimg from './Assets/Ellipseimg'
import MyCircleSvg from './Assets/MyCircleSvg'
import { ScreenDas } from '../ScreenTransfer/utils/types'
import { useNavigation } from '@react-navigation/native'
import { useDispatch } from 'react-redux'
import { loginUser } from '../../utils/firebaseAuth'

const ScreenFingerprint = () => {

  const navigation=useNavigation<ScreenDas>();


  const dispatch = useDispatch();

  const handleLongPress = async () => {
    try {
      await loginUser('Rohit@gmail.com', 'Rohit@123', dispatch); 
      navigation.navigate('BottomNavigation',{screen:'Dashboard'}); 
    } catch (error) {
      console.error('Login failed:', error);
    }
  };
  

  return (
    <View style={styles.container}>
      <Text style={styles.fingertext}>Fingerprint</Text>
      <Text style={styles.describtion}>Place your finger in fingerprint
      sensor until the icon completely</Text>
      <TouchableOpacity onLongPress={handleLongPress} style={styles.finger}>
        <Finger />
      </TouchableOpacity>
      <View style={styles.Ellipseimg} >
      <Ellipseimg/>
      </View>
      <View style={styles.MyCircleSvg} >
      <MyCircleSvg/>
      </View>
    </View>
  )
}

export default ScreenFingerprint

