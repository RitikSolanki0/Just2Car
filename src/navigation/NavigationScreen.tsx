
// import React from 'react';
// import { createNativeStackNavigator } from '@react-navigation/native-stack';
// import { NavigationContainer } from '@react-navigation/native';

// // Screens
// import LoginScreen from '../screens/auth/loginscreen/LoginScreen';
// import BottomNavigator from './BottomNavigator';
// import CarDetailScreen from '../screens/cardetailsscreen/CarDetailScreen';
// import InquiryNowScreen from '../screens/scheduledatescreen/ScheduleDateScreen';
// import ConfirmScheduleDateScreen from '../screens/confirmscheduledate/ConfirmScheduleDateScreen';
// import ScheduleDateScreen from '../screens/scheduledatescreen/ScheduleDateScreen';
// import NotificationScreen from '../screens/notificationscreen/NotificationScreen';
// import FiltersScreen from '../screens/filterscreen/FiltersScreen';
// import WishlistScreen from '../screens/profilesidescreens/wishlistscreen/WishlistScreen';
// import MyAdDetailScreen from '../screens/bottomscreens/myaddscreen/MyAdDetailScreen';
// import PrivacyPolicyScreen from '../screens/profilesidescreens/privacypolicy/PrivacyPolicyScreen';
// import TermsAndConditionsScreen from '../screens/profilesidescreens/termsandconditions/TermsAndConditionsScreen';
// import AboutUsScreen from '../screens/profilesidescreens/aboutus/AboutUsScreen';
// import SignupScreen from '../screens/auth/signupscreen/SignupScreen';

// const Stack = createNativeStackNavigator();



// const NavigationScreen = () => {
//   return (
//     <NavigationContainer>
//       <Stack.Navigator 
//         screenOptions={{ headerShown: false }}
//         initialRouteName="SignupScreen" 
//       >
//         <Stack.Screen name="LoginScreen" component={LoginScreen} />
//         <Stack.Screen name="SignupScreen" component={SignupScreen} />
//         <Stack.Screen name="BottomNavigator" component={BottomNavigator} />
//         <Stack.Screen name="CarDetailScreen" component={CarDetailScreen} />
//         <Stack.Screen name="ScheduleDateScreen" component={ScheduleDateScreen} />
//         <Stack.Screen name="ConfirmScheduleDateScreen" component={ConfirmScheduleDateScreen} />
//         <Stack.Screen name="NotificationScreen" component={NotificationScreen} />
//         <Stack.Screen name="FiltersScreen" component={FiltersScreen} />

//         <Stack.Screen name="WishlistScreen" component={WishlistScreen} />
//         <Stack.Screen name="PrivacyPolicyScreen" component={PrivacyPolicyScreen} />
//         <Stack.Screen name="TermsAndConditionsScreen" component={TermsAndConditionsScreen} />
//         <Stack.Screen name="AboutUsScreen" component={AboutUsScreen} />

//         <Stack.Screen name='MyAdDetailScreen' component={MyAdDetailScreen} />
//       </Stack.Navigator>
//     </NavigationContainer>
//   );
// };

// export default NavigationScreen;
















// import React, { useState, useEffect } from 'react';
// import { View, ActivityIndicator, StyleSheet } from 'react-native';
// import { createNativeStackNavigator } from '@react-navigation/native-stack';
// import { NavigationContainer } from '@react-navigation/native';
// import AsyncStorage from '@react-native-async-storage/async-storage';

// // Screens
// import LoginScreen from '../screens/auth/loginscreen/LoginScreen';
// import BottomNavigator from './BottomNavigator';
// import CarDetailScreen from '../screens/cardetailsscreen/CarDetailScreen';
// import ConfirmScheduleDateScreen from '../screens/confirmscheduledate/ConfirmScheduleDateScreen';
// import ScheduleDateScreen from '../screens/scheduledatescreen/ScheduleDateScreen';
// import NotificationScreen from '../screens/notificationscreen/NotificationScreen';
// import FiltersScreen from '../screens/filterscreen/FiltersScreen';
// import WishlistScreen from '../screens/profilesidescreens/wishlistscreen/WishlistScreen';
// import MyAdDetailScreen from '../screens/myaddetailscreen/MyAdDetailScreen';
// import PrivacyPolicyScreen from '../screens/profilesidescreens/privacypolicy/PrivacyPolicyScreen';
// import TermsAndConditionsScreen from '../screens/profilesidescreens/termsandconditions/TermsAndConditionsScreen';
// import AboutUsScreen from '../screens/profilesidescreens/aboutus/AboutUsScreen';
// import SignupScreen from '../screens/auth/signupscreen/SignupScreen';
// import { Colors } from '../theme/colors';
// import SplashScreen from '../screens/auth/splashscreen/SplashScreen';

// const Stack = createNativeStackNavigator();

// const NavigationScreen = () => {
//   // --- States ---
//   const [isLoading, setIsLoading] = useState(true); // चेक करने तक लोडिंग दिखाएंगे
//   const [userToken, setUserToken] = useState<string | null>(null);

//   // --- 1. कोल्ड स्टार्ट पर टोकन चेक करना ---
//   useEffect(() => {
//     const checkLoginStatus = async () => {
//       try {
//         const token = await AsyncStorage.getItem('userToken');
//         setUserToken(token);
//       } catch (e) {
//         console.log("Check Auth Error:", e);
//       } finally {
//         // चेक पूरा होने के बाद लोडिंग बंद करें
//         // setTimeout सिर्फ इसलिए ताकि स्मूथ फील आए, आप इसे हटा भी सकते हैं
//         setTimeout(() => setIsLoading(false), 500); 
//       }
//     };

//     checkLoginStatus();
//   }, []);

//   // --- 2. जब तक चेक हो रहा है, एक "Splash" या लोडर दिखाएँ ---
//   if (isLoading) {
//     return (
//       <View style={styles.loaderContainer}>
//         <ActivityIndicator size="large" color={Colors.primary} />
//       </View>
//     );
//   }

//   return (
//     <NavigationContainer>
//       <Stack.Navigator 
//         screenOptions={{ headerShown: false }}
//         // अगर टोकन है तो सीधा 'BottomNavigator' पर, वरना 'LoginScreen' पर
//         initialRouteName={userToken ? "BottomNavigator" : "LoginScreen"} 
//       >
//         {/* Auth Screens */}
//         <Stack.Screen name="SplashScreen" component={SplashScreen} />
//         <Stack.Screen name="LoginScreen" component={LoginScreen} />
//         <Stack.Screen name="SignupScreen" component={SignupScreen} />

//         {/* Main App */}
//         <Stack.Screen name="BottomNavigator" component={BottomNavigator} />

//         {/* Other Screens */}
//         <Stack.Screen name="CarDetailScreen" component={CarDetailScreen} />
//         <Stack.Screen name="ScheduleDateScreen" component={ScheduleDateScreen} />
//         <Stack.Screen name="ConfirmScheduleDateScreen" component={ConfirmScheduleDateScreen} />
//         <Stack.Screen name="NotificationScreen" component={NotificationScreen} />
//         <Stack.Screen name="FiltersScreen" component={FiltersScreen} />
//         <Stack.Screen name="WishlistScreen" component={WishlistScreen} />
//         <Stack.Screen name="PrivacyPolicyScreen" component={PrivacyPolicyScreen} />
//         <Stack.Screen name="TermsAndConditionsScreen" component={TermsAndConditionsScreen} />
//         <Stack.Screen name="AboutUsScreen" component={AboutUsScreen} />
//         <Stack.Screen name='MyAdDetailScreen' component={MyAdDetailScreen} />
//       </Stack.Navigator>
//     </NavigationContainer>
//   );
// };

// export default NavigationScreen;

// const styles = StyleSheet.create({
//   loaderContainer: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//     backgroundColor: 'white',
//   },
// });















// race condition wala code yaha se 

// import React, { useState, useEffect } from 'react';
// import { View, StyleSheet } from 'react-native';
// import { createNativeStackNavigator } from '@react-navigation/native-stack';
// import { NavigationContainer } from '@react-navigation/native';
// import AsyncStorage from '@react-native-async-storage/async-storage';

// // Screens
// import LoginScreen from '../screens/auth/loginscreen/LoginScreen';
// import BottomNavigator from './BottomNavigator';
// import CarDetailScreen from '../screens/cardetailsscreen/CarDetailScreen';
// import ConfirmScheduleDateScreen from '../screens/confirmscheduledate/ConfirmScheduleDateScreen';
// import ScheduleDateScreen from '../screens/scheduledatescreen/ScheduleDateScreen';
// import NotificationScreen from '../screens/notificationscreen/NotificationScreen';
// import FiltersScreen from '../screens/filterscreen/FiltersScreen';
// import WishlistScreen from '../screens/profilesidescreens/wishlistscreen/WishlistScreen';
// import MyAdDetailScreen from '../screens/myaddetailscreen/MyAdDetailScreen';
// import PrivacyPolicyScreen from '../screens/profilesidescreens/privacypolicy/PrivacyPolicyScreen';
// import TermsAndConditionsScreen from '../screens/profilesidescreens/termsandconditions/TermsAndConditionsScreen';
// import AboutUsScreen from '../screens/profilesidescreens/aboutus/AboutUsScreen';
// import SignupScreen from '../screens/auth/signupscreen/SignupScreen';
// import SplashScreen from '../screens/auth/splashscreen/SplashScreen'; // आपकी स्पलैश स्क्रीन
// import UpdateProfileScreen from '../screens/profilesidescreens/updateprofile/UpdateProfileScreen';

// const Stack = createNativeStackNavigator();

// const NavigationScreen = () => {
//   // --- States ---
//   const [isAppReady, setIsAppReady] = useState(false); 
//   const [userToken, setUserToken] = useState<string | null>(null);

//   // --- 1. Race Condition Fix: Auth Check ---
//   useEffect(() => {
//     let isMounted = true; // मेमोरी लीक और रेस कंडीशन से बचने के लिए

//     const checkInitialState = async () => {
//       try {
//         // टोकन चेक करें
//         const token = await AsyncStorage.getItem('userToken');

//         // एक छोटा सा डिले (Branding के लिए)
//         // असली प्रोफेशनल एप्स में यहाँ अन्य जरूरी काम (जैसे API Init) भी किए जाते हैं
//         // await new Promise(resolve => setTimeout(resolve, 2000));
//         await new Promise(resolve => setTimeout(() => resolve(null), 2000));

//         if (isMounted) {
//           setUserToken(token);
//           setIsAppReady(true); // अब ऐप तैयार है
//         }
//       } catch (e) {
//         console.log("Startup Error:", e);
//         if (isMounted) setIsAppReady(true);
//       }
//     };

//     checkInitialState();

//     return () => { isMounted = false; }; // क्लीनअप
//   }, []);

//   // --- 2. लोडर की जगह स्पलैश स्क्रीन दिखाएँ ---
//   // जब तक checkInitialState चल रहा है, यूज़र को सिर्फ SplashScreen दिखेगी
//   if (!isAppReady) {
//     return <SplashScreen />; 
//   }

//   return (
//     <NavigationContainer>
//       <Stack.Navigator 
//         screenOptions={{ headerShown: false }}
//         // डायनामिक एंट्री पॉइंट: अगर टोकन है तो होम, वरना लॉगिन
//         initialRouteName={userToken ? "BottomNavigator" : "LoginScreen"} 
//       >
//         {/* Auth Screens */}
//         <Stack.Screen name="LoginScreen" component={LoginScreen} />
//         <Stack.Screen name="SignupScreen" component={SignupScreen} />

//         {/* Main App */}
//         <Stack.Screen name="BottomNavigator" component={BottomNavigator} />

//         {/* Other Screens (कुछ भी डिलीट नहीं किया गया) */}
//         <Stack.Screen name="CarDetailScreen" component={CarDetailScreen} />
//         <Stack.Screen name="ScheduleDateScreen" component={ScheduleDateScreen} />
//         <Stack.Screen name="ConfirmScheduleDateScreen" component={ConfirmScheduleDateScreen} />
//         <Stack.Screen name="NotificationScreen" component={NotificationScreen} />
//         <Stack.Screen name="FiltersScreen" component={FiltersScreen} />
//         <Stack.Screen name="WishlistScreen" component={WishlistScreen} />
//         <Stack.Screen name="PrivacyPolicyScreen" component={PrivacyPolicyScreen} />
//         <Stack.Screen name="TermsAndConditionsScreen" component={TermsAndConditionsScreen} />
//         <Stack.Screen name="AboutUsScreen" component={AboutUsScreen} />
//         <Stack.Screen name='MyAdDetailScreen' component={MyAdDetailScreen} />
//         <Stack.Screen name="UpdateProfileScreen" component={UpdateProfileScreen} />
//       </Stack.Navigator>
//     </NavigationContainer>
//   );
// };

// export default NavigationScreen;




















import React, { useState, useEffect } from 'react';
import { View, StyleSheet } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useDispatch, useSelector } from 'react-redux'; // Redux Hooks

// Redux Actions & State Type
import { RootState } from '../redux/store';
import { setSignIn } from '../redux/authSlice';

// Screens
import LoginScreen from '../screens/auth/loginscreen/LoginScreen';
import BottomNavigator from './BottomNavigator';
import CarDetailScreen from '../screens/cardetailsscreen/CarDetailScreen';
import ConfirmScheduleDateScreen from '../screens/confirmscheduledate/ConfirmScheduleDateScreen';
import ScheduleDateScreen from '../screens/scheduledatescreen/ScheduleDateScreen';
import NotificationScreen from '../screens/notificationscreen/NotificationScreen';
import FiltersScreen from '../screens/filterscreen/FiltersScreen';
import WishlistScreen from '../screens/profilesidescreens/wishlistscreen/WishlistScreen';
import MyAdDetailScreen from '../screens/myaddetailscreen/MyAdDetailScreen';
import PrivacyPolicyScreen from '../screens/profilesidescreens/privacypolicy/PrivacyPolicyScreen';
import TermsAndConditionsScreen from '../screens/profilesidescreens/termsandconditions/TermsAndConditionsScreen';
import AboutUsScreen from '../screens/profilesidescreens/aboutus/AboutUsScreen';
import SignupScreen from '../screens/auth/signupscreen/SignupScreen';
import SplashScreen from '../screens/auth/splashscreen/SplashScreen';
import UpdateProfileScreen from '../screens/profilesidescreens/updateprofile/UpdateProfileScreen';
import PackageScreen from '../screens/profilesidescreens/packagescreen/PackageScreen';

const Stack = createNativeStackNavigator();

const NavigationScreen = () => {
  const [isAppReady, setIsAppReady] = useState(false);
  const dispatch = useDispatch();

  // --- 1. Redux से ग्लोबल टोकन को सुनें (यही नेविगेशन कंट्रोल करेगा) ---
  const userToken = useSelector((state: RootState) => state.auth.userToken);

  useEffect(() => {
    let isMounted = true;

    const checkInitialState = async () => {
      try {
        // स्टोरेज से टोकन और यूजर डेटा निकालें
        const token = await AsyncStorage.getItem('userToken');
        const storedUser = await AsyncStorage.getItem('userData');

        // --- 2. अगर टोकन है, तो उसे Redux में डाल दें ---
        if (token && storedUser) {
          dispatch(setSignIn({ token, user: JSON.parse(storedUser) }));
        }

        // स्पलैश स्क्रीन दिखाने के लिए डिले
        await new Promise(resolve => setTimeout(() => resolve(null), 2000));

        if (isMounted) {
          setIsAppReady(true); // अब ऐप तैयार है
        }
      } catch (e) {
        console.log("Startup Error:", e);
        if (isMounted) setIsAppReady(true);
      }
    };

    checkInitialState();
    return () => { isMounted = false; };
  }, [dispatch]);

  // जब तक चेक हो रहा है, यूज़र को सिर्फ SplashScreen दिखेगी
  if (!isAppReady) {
    return <SplashScreen />;
  }

  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>

        {/* --- 3. सबसे ज़रूरी: Conditional Rendering --- */}
        {userToken == null ? (
          // --- Auth Stack: अगर टोकन नहीं है तो सिर्फ ये स्क्रीन्स दिखेंगी ---
          <Stack.Group>
            <Stack.Screen name="LoginScreen" component={LoginScreen} />
            <Stack.Screen name="SignupScreen" component={SignupScreen} />
          </Stack.Group>
        ) : (
          // --- App Stack: अगर टोकन है तो ये स्क्रीन्स खुल जाएंगी ---
          <Stack.Group>
            <Stack.Screen name="BottomNavigator" component={BottomNavigator} />
            <Stack.Screen name="CarDetailScreen" component={CarDetailScreen} />
            <Stack.Screen name="ScheduleDateScreen" component={ScheduleDateScreen} />
            <Stack.Screen name="ConfirmScheduleDateScreen" component={ConfirmScheduleDateScreen} />
            <Stack.Screen name="NotificationScreen" component={NotificationScreen} />
            <Stack.Screen name="FiltersScreen" component={FiltersScreen} />
            <Stack.Screen name="WishlistScreen" component={WishlistScreen} />
            <Stack.Screen name="PrivacyPolicyScreen" component={PrivacyPolicyScreen} />
            <Stack.Screen name="TermsAndConditionsScreen" component={TermsAndConditionsScreen} />
            <Stack.Screen name="PackageScreen" component={PackageScreen} />
            <Stack.Screen name="AboutUsScreen" component={AboutUsScreen} />
            <Stack.Screen name='MyAdDetailScreen' component={MyAdDetailScreen} />
            <Stack.Screen name="UpdateProfileScreen" component={UpdateProfileScreen} />

          </Stack.Group>
        )}

      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default NavigationScreen;