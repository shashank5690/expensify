import React from 'react'
import { View } from 'react-native'
import ScreenFinguerprint from './src/Screens/ScreenFingerprint/ScreenFingerprint'
import ScreenLogin from './src/Screens/ScreenLogin/ScreenLogin'
import ScreenSignup from './src/Screens/ScreenSignUp/ScreenSignUp'
import ScreenTransfer from './src/Screens/ScreenTransfer/ScreenTransfer'

const App = () => {
  return (
    <View>
      {/* <ScreenFinguerprint/> */}
      {/* <ScreenLogin/> */}
      {/* <ScreenSignup/> */}
<ScreenTransfer/>
    </View>
  )
}

export default App
