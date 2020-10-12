import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Preload from '../screens/Preload/Preload';
import SignIn from '../screens/SignIn/SignIn';
import SignUp from '../screens/SignUp/SignUp';
import MainTab from './MainTab';
import Barber from '../screens/Barber/Barber';

const Stack = createStackNavigator();

const MainStack = () => (
  <Stack.Navigator
    initialRouteName = 'Preload'
    screenOptions = {{
      headerShown: false
    }}
  >
    <Stack.Screen name='Preload' component={Preload} screenOptions = {{headerShown: false}} />
    <Stack.Screen name='SignIn' component={SignIn} screenOptions = {{headerShown: false}}/>
    <Stack.Screen name='SignUp' component={SignUp} screenOptions = {{headerShown: false}}/>
    <Stack.Screen name='MainTab' component={MainTab} screenOptions = {{headerShown: false}}/>
    <Stack.Screen name='Barber' component={Barber} screenOptions = {{headerShown: false}}/>
  </Stack.Navigator>
);

export default MainStack;