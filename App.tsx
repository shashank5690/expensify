
import React from 'react';
import { View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Dashboard from './src/Screens/ScreenDashboard/ScreenDashboard';
import Scanner from './src/Screens/ScreenScanner/ScreenScanner';
import Ionicons from 'react-native-vector-icons/Ionicons';
import AddTransaction from './src/Screens/ScreenAddTransaction/AddTransaction';
const Tab = createBottomTabNavigator();

const App = () => (
  <NavigationContainer>
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName = '';

          if (route.name === 'Dashboard') {
            iconName = focused ? 'home' : 'home-outline';
          } else if (route.name === 'AddTransaction') {
            iconName = focused ? 'wine' : 'wine-outline';
          } else if (route.name === 'Scanner') {
            iconName = focused ? 'scan-circle' : 'scan-outline';
          }

          return <Ionicons name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: '#466EFA',
        tabBarInactiveTintColor: 'gray',
        tabBarStyle:{
          paddingTop:20,
          paddingBottom:20,
          height:80,
        }
      })}
    >
      <Tab.Screen name="Dashboard" component={Dashboard} options={{ headerShown: false }} />
      <Tab.Screen name="AddTransaction" component={AddTransaction} options={{ headerShown: false }} />
      <Tab.Screen name="Scanner" component={Scanner} options={{ headerShown: false }} />
    </Tab.Navigator>
  </NavigationContainer>

);

export default App;
