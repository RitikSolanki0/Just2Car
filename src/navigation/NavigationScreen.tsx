// import { StyleSheet, Text, View } from 'react-native'
// import React from 'react'
// import LoginScreen from '../screens/auth/loginscreen/LoginScreen'
// import HomeScreen from '../screens/homescreens/HomeScreen'

// const NavigationScreen = () => {
//   return (
//     <HomeScreen />
//   )
// }

// export default NavigationScreen

// const styles = StyleSheet.create({})












import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';

// Screens
import LoginScreen from '../screens/auth/loginscreen/LoginScreen';
import BottomNavigator from './BottomNavigator';
import CarDetailScreen from '../screens/cardetailsscreen/CarDetailScreen';
import InquiryNowScreen from '../screens/scheduledatescreen/ScheduleDateScreen';
import ConfirmScheduleDateScreen from '../screens/confirmscheduledate/ConfirmScheduleDateScreen';
import ScheduleDateScreen from '../screens/scheduledatescreen/ScheduleDateScreen';
import NotificationScreen from '../screens/notificationscreen/NotificationScreen';
import FiltersScreen from '../screens/filterscreen/FiltersScreen';

const Stack = createNativeStackNavigator();

const NavigationScreen = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator 
        screenOptions={{ headerShown: false }}
        initialRouteName="BottomNavigator" 
      >
        <Stack.Screen name="LoginScreen" component={LoginScreen} />
        <Stack.Screen name="BottomNavigator" component={BottomNavigator} />
        <Stack.Screen name="CarDetailScreen" component={CarDetailScreen} />
        <Stack.Screen name="ScheduleDateScreen" component={ScheduleDateScreen} />
        <Stack.Screen name="ConfirmScheduleDateScreen" component={ConfirmScheduleDateScreen} />
        <Stack.Screen name="NotificationScreen" component={NotificationScreen} />
        <Stack.Screen name="FiltersScreen" component={FiltersScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default NavigationScreen;