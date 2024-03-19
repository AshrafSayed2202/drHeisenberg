// React Imports
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StatusBar } from 'react-native';
// Fontawesome Imports
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { far } from '@fortawesome/free-regular-svg-icons';
library.add(fab, fas, far)
// Pages Imports
import Login from './pages/Login';
import SignUp from './pages/SignUp';
import Home from './pages/Home';
import { COLORS } from './themes/themes';

const Stack = createNativeStackNavigator();
export default function App() {

  return (

    <NavigationContainer>
      <Stack.Navigator
        initialRouteName='login'
        screenOptions={{ headerShown: false }}
      >
        <Stack.Screen name='login' component={Login} />
        <Stack.Screen name='signUp' component={SignUp} />
        <Stack.Screen name='home' component={Home} />
      </Stack.Navigator>
      <StatusBar backgroundColor={COLORS.main} />
    </NavigationContainer>
  );
}