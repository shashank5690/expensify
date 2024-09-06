import React from 'react';
import { View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Dashboard from '../Screens/ScreenDashboard/ScreenDashboard';
import Scanner from '../Screens/ScreenScanner/ScreenScanner';
import AddTransaction from '../Screens/ScreenAddTransaction/AddTransaction';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { AppStackParamList } from '../utils/types/interface';

const Tab = createBottomTabNavigator<AppStackParamList>();
const BottomNavigation = () => (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName = '';

          if (route.name === 'Dashboard') {
            iconName = focused ? 'home' : 'home-outline';
          } else if (route.name === 'AddTransaction') {
            iconName = focused ? 'wallet' : 'wallet-outline';
          } else if (route.name === 'Scanner') {
            iconName = focused ? 'scan-circle' : 'scan-outline';
          }

          return <Ionicons name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: '#466EFA',
        tabBarInactiveTintColor: 'gray',
        tabBarStyle:{
          paddingTop:18,
          paddingBottom:18,
          height:76,
        }
      })}
    >
      <Tab.Screen name="Dashboard" component={Dashboard} options={{ headerShown: false }} />
      <Tab.Screen name="AddTransaction" component={AddTransaction} options={{ headerShown: false }} />
      <Tab.Screen name="Scanner" component={Scanner} options={{ headerShown: false }} />
    </Tab.Navigator>

);

export default BottomNavigation;
