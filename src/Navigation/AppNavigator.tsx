import React, { useEffect, useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../utils/redux/store';
import ScreenLogin from '../Screens/ScreenLogin/ScreenLogin';
import ScreenSignup from '../Screens/ScreenSignUp/ScreenSignUp';
import OnboardScreen from '../Screens/ScreenOnboard/ScreenOnboard';
import { AppStackParamList, AuthStackParamList } from '../utils/types/interface';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { setUser } from '../Screens/ScreenLogin/redux/authSlice';
import auth from '@react-native-firebase/auth';
import BottomNavigation from './BottomNavigation';
import ScreenTransfer from '../Screens/ScreenTransfer/ScreenTransfer';
import AddTransaction from '../Screens/ScreenAddTransaction/AddTransaction';

const AuthStack = createStackNavigator<AuthStackParamList>();
const AppStack = createStackNavigator<AppStackParamList>();

const AppNavigator: React.FC = () => {
  const isAuthenticated = useSelector((state: RootState) => state.auth.isAuthenticated);
  const dispatch = useDispatch();


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
      }
    };

    checkToken();
  }, [dispatch]);



  return (
    <NavigationContainer>
      {isAuthenticated ? (
          <AppStack.Navigator>
          <AppStack.Screen name="BottomNavigation" component={BottomNavigation} options={{ headerShown: false }} />
          <AppStack.Screen name="ScreenTransfer" component={ScreenTransfer} options={{ headerShown: false }} />
          <AppStack.Screen  name="AddTransaction" component={AddTransaction} options={{ headerShown: false }}  />

        </AppStack.Navigator>
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
