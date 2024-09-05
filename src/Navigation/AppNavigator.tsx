import React, { useEffect, useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../utils/redux/store';
import ScreenLogin from '../Screens/ScreenLogin/ScreenLogin';
import ScreenSignup from '../Screens/ScreenSignUp/ScreenSignUp';
import OnboardScreen from '../Screens/ScreenOnboard/ScreenOnboard';
import { AuthStackParamList } from '../utils/types/interface';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { setUser } from '../Screens/ScreenLogin/redux/authSlice';
import auth from '@react-native-firebase/auth';
import BottomNavigation from './BottomNavigation';
import Splash from '../Screens/ScreenSplash/SplashScreen';

const AuthStack = createStackNavigator<AuthStackParamList>();

const AppNavigator: React.FC = () => {
  const isAuthenticated = useSelector((state: RootState) => state.auth.isAuthenticated);
  const dispatch = useDispatch();
  const [isSplashVisible, setIsSplashVisible] = useState(true);



  useEffect(() => {
    const checkToken = async () => {
      try {
        const token = await AsyncStorage.getItem('token');
        if (token) {
          const currentUser = auth().currentUser;
          if (currentUser) {
            const user = {
              email: currentUser.email!,
              password: '',
            };
            dispatch(setUser(user));
          }
        } else { 
          dispatch(setUser(null));
        }
      } catch (error) {
        dispatch(setUser(null));
      }finally {
        setTimeout(() => {
          setIsSplashVisible(false);
        }, 1000); 
      }
    };

    checkToken();
  }, [dispatch]);

  if (isSplashVisible) {
    return <Splash />;
  }



  return (
    <NavigationContainer>
      {isAuthenticated ? (
         <BottomNavigation/>
      ) : (
        <AuthStack.Navigator initialRouteName="OnboardScreen">
          <AuthStack.Screen name="OnboardScreen" component={OnboardScreen} options={{ headerShown: false }} />
          <AuthStack.Screen name="ScreenLogin" component={ScreenLogin} options={{ headerShown: false }} />
          <AuthStack.Screen name="ScreenSignup" component={ScreenSignup} options={{ headerShown: false }} />
        </AuthStack.Navigator>
      )}
    </NavigationContainer>
  );
};

export default AppNavigator;
