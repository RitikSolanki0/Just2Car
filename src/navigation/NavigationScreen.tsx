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
import WishlistScreen from '../screens/profilesidescreens/wishlistscreen/WishlistScreen';
import MyAdDetailScreen from '../screens/bottomscreens/myaddscreen/MyAdDetailScreen';
import PrivacyPolicyScreen from '../screens/profilesidescreens/privacypolicy/PrivacyPolicyScreen';
import TermsAndConditionsScreen from '../screens/profilesidescreens/termsandconditions/TermsAndConditionsScreen';
import AboutUsScreen from '../screens/profilesidescreens/aboutus/AboutUsScreen';
import SignupScreen from '../screens/auth/signupscreen/SignupScreen';

const Stack = createNativeStackNavigator();

const NavigationScreen = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator 
        screenOptions={{ headerShown: false }}
        initialRouteName="BottomNavigator" 
      >
        <Stack.Screen name="LoginScreen" component={LoginScreen} />
        <Stack.Screen name="SignupScreen" component={SignupScreen} />
        <Stack.Screen name="BottomNavigator" component={BottomNavigator} />
        <Stack.Screen name="CarDetailScreen" component={CarDetailScreen} />
        <Stack.Screen name="ScheduleDateScreen" component={ScheduleDateScreen} />
        <Stack.Screen name="ConfirmScheduleDateScreen" component={ConfirmScheduleDateScreen} />
        <Stack.Screen name="NotificationScreen" component={NotificationScreen} />
        <Stack.Screen name="FiltersScreen" component={FiltersScreen} />
        
        <Stack.Screen name="WishlistScreen" component={WishlistScreen} />
        <Stack.Screen name="PrivacyPolicyScreen" component={PrivacyPolicyScreen} />
        <Stack.Screen name="TermsAndConditionsScreen" component={TermsAndConditionsScreen} />
        <Stack.Screen name="AboutUsScreen" component={AboutUsScreen} />
        
        <Stack.Screen name='MyAdDetailScreen' component={MyAdDetailScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default NavigationScreen;