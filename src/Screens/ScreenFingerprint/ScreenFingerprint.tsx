import React from 'react'
import { Text, View } from 'react-native'
import { styles } from './styleFingerprint'
import Finger from './Assets/Finger'
import Ellipseimg from './Assets/Ellipseimg'
import MyCircleSvg from './Assets/MyCircleSvg'

const ScreenFinguerprint = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.fingertext}>Fingerprint</Text>
      <Text style={styles.describtion}>Place your finger in fingerprint
      sensor until the icon completely</Text>
      <View style={styles.finger} >
      <Finger />
      </View>
      <View style={styles.Ellipseimg} >
      <Ellipseimg/>
      </View>
      <View style={styles.MyCircleSvg} >
      <MyCircleSvg/>
      </View>
    </View>
  )
}

export default ScreenFinguerprint

