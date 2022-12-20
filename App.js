// Example to Use React Native Vector Icons
// https://aboutreact.com/react-native-vector-icons/
 
// Import React
import React, { useState } from 'react';
// import Home from './Home';
// import Profile from './Profile';
 
// Import required component
import {Button, Image, SafeAreaView, StyleSheet, Text, View} from 'react-native';
 
// Import vector icons
import Icon from 'react-native-vector-icons/FontAwesome';
import { NavigationContainer} from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from './Home';
import Profile from './Profile';
import Account from './Account';
import Landing from './Landing';
import Login from './Login';
import Logo from './Logo';
import Root from './Root';
import Registration from './Registration';
import SignUp from './SignUp';
import SusuCal from './SusuCal'
import PasswordReset from './PasswordReset';



const Stack = createNativeStackNavigator();

const MyStack = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown:false}}>
        
        <Stack.Screen name='Start' component={Landing}/>
        <Stack.Screen name='Registration' component={Registration}/>
        <Stack.Screen name='SignUp' component={SignUp}/>
        <Stack.Screen name='Login' component={Login}/>
        <Stack.Screen name="PassReset" component={PasswordReset}/>
        <Stack.Screen name="Home" component={Home} options={{ title: 'Home' }}/>
        <Stack.Screen name="Profile" component={Profile} />
        <Stack.Screen name="Account" component={Account} />
        

        {/* <Stack.Screen name="Calculator" component={SusuCal} /> */}

      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default MyStack;

