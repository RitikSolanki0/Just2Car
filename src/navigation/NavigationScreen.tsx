
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




















// import React, { useState, useEffect } from 'react';
// import { View, StyleSheet } from 'react-native';
// import { createNativeStackNavigator } from '@react-navigation/native-stack';
// import { NavigationContainer } from '@react-navigation/native';
// import AsyncStorage from '@react-native-async-storage/async-storage';
// import { useDispatch, useSelector } from 'react-redux'; // Redux Hooks

// // Redux Actions & State Type
// import { RootState } from '../redux/store';
// import { setSignIn } from '../redux/authSlice';

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
// import SplashScreen from '../screens/auth/splashscreen/SplashScreen';
// import UpdateProfileScreen from '../screens/profilesidescreens/updateprofile/UpdateProfileScreen';
// import PackageScreen from '../screens/profilesidescreens/packagescreen/PackageScreen';

// const Stack = createNativeStackNavigator();

// const NavigationScreen = () => {
//   const [isAppReady, setIsAppReady] = useState(false);
//   const dispatch = useDispatch();

//   // --- 1. Redux से ग्लोबल टोकन को सुनें (यही नेविगेशन कंट्रोल करेगा) ---
//   const userToken = useSelector((state: RootState) => state.auth.userToken);

//   useEffect(() => {
//     let isMounted = true;

//     const checkInitialState = async () => {
//       try {
//         // स्टोरेज से टोकन और यूजर डेटा निकालें
//         const token = await AsyncStorage.getItem('userToken');
//         const storedUser = await AsyncStorage.getItem('userData');

//         // --- 2. अगर टोकन है, तो उसे Redux में डाल दें ---
//         if (token && storedUser) {
//           dispatch(setSignIn({ token, user: JSON.parse(storedUser) }));
//         }

//         // स्पलैश स्क्रीन दिखाने के लिए डिले
//         await new Promise(resolve => setTimeout(() => resolve(null), 2000));

//         if (isMounted) {
//           setIsAppReady(true); // अब ऐप तैयार है
//         }
//       } catch (e) {
//         console.log("Startup Error:", e);
//         if (isMounted) setIsAppReady(true);
//       }
//     };

//     checkInitialState();
//     return () => { isMounted = false; };
//   }, [dispatch]);

//   // जब तक चेक हो रहा है, यूज़र को सिर्फ SplashScreen दिखेगी
//   if (!isAppReady) {
//     return <SplashScreen />;
//   }

//   return (
//     <NavigationContainer>
//       <Stack.Navigator screenOptions={{ headerShown: false }}>

//         {/* --- 3. सबसे ज़रूरी: Conditional Rendering --- */}
//         {userToken == null ? (
//           // --- Auth Stack: अगर टोकन नहीं है तो सिर्फ ये स्क्रीन्स दिखेंगी ---
//           <Stack.Group>
//             <Stack.Screen name="LoginScreen" component={LoginScreen} />
//             <Stack.Screen name="SignupScreen" component={SignupScreen} />
//           </Stack.Group>
//         ) : (
//           // --- App Stack: अगर टोकन है तो ये स्क्रीन्स खुल जाएंगी ---
//           <Stack.Group>
//             <Stack.Screen name="BottomNavigator" component={BottomNavigator} />
//             <Stack.Screen name="CarDetailScreen" component={CarDetailScreen} />
//             <Stack.Screen name="ScheduleDateScreen" component={ScheduleDateScreen} />
//             <Stack.Screen name="ConfirmScheduleDateScreen" component={ConfirmScheduleDateScreen} />
//             <Stack.Screen name="NotificationScreen" component={NotificationScreen} />
//             <Stack.Screen name="FiltersScreen" component={FiltersScreen} />
//             <Stack.Screen name="WishlistScreen" component={WishlistScreen} />
//             <Stack.Screen name="PrivacyPolicyScreen" component={PrivacyPolicyScreen} />
//             <Stack.Screen name="TermsAndConditionsScreen" component={TermsAndConditionsScreen} />
//             <Stack.Screen name="PackageScreen" component={PackageScreen} />
//             <Stack.Screen name="AboutUsScreen" component={AboutUsScreen} />
//             <Stack.Screen name='MyAdDetailScreen' component={MyAdDetailScreen} />
//             <Stack.Screen name="UpdateProfileScreen" component={UpdateProfileScreen} />

//           </Stack.Group>
//         )}

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
import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios';

// Redux Actions & State Type
import { RootState } from '../redux/store';
import { setSignIn, setSignOut } from '../redux/authSlice';
import { ENDPOINTS } from '../services/apiConfig';

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
import MyEnquiryScreen from '../screens/profilesidescreens/myenquiry/MyEnquiryScreen';
import FranchisePartnerFormScreen from '../screens/franchisepartnerscreen/FranchisePartnerFormScreen';

const Stack = createNativeStackNavigator();

const NavigationScreen = () => {
  const [isAppReady, setIsAppReady] = useState(false);
  const dispatch = useDispatch();

  // --- 1. Redux से ग्लोबल टोकन को सुनें ---
  const userToken = useSelector((state: RootState) => state.auth.userToken);

  useEffect(() => {
    let isMounted = true;

    const checkInitialState = async () => {
      try {
        const token = await AsyncStorage.getItem('userToken');
        const storedUser = await AsyncStorage.getItem('userData');

        if (token && storedUser) {
          try {
            // 🚀 2. Token Valid है या नहीं, ये check करने के लिए API Call
            // Profile API सबसे best है क्योंकि ये lightweight है
            const response = await axios.get(ENDPOINTS.PROFILE, {
              headers: { Authorization: `Bearer ${token}` },
              timeout: 5000, // 5 second timeout अगर internet slow हो
            });

            if (response.data.success) {
              // Token valid है, Redux में डालो
              dispatch(setSignIn({ token, user: JSON.parse(storedUser) }));
            } else {
              // API fail हुई मतलब token invalid है
              throw new Error('Token Invalid');
            }
          } catch (apiError) {
            // 🚀 3. अगर Token Expire हो गया है तो Storage clear करो
            console.log("Session Expired or Token Invalid. Logging out...");
            await AsyncStorage.multiRemove(['userToken', 'userData']);
            dispatch(setSignOut()); // Redux state clear करो
          }
        }

        // स्पलैश स्क्रीन दिखाने के लिए डिले
        // await new Promise(resolve => setTimeout(resolve, 2000));
         await new Promise((resolve) => {
          setTimeout(() => resolve(null), 2000);
        });

        if (isMounted) {
          setIsAppReady(true);
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

        {/* --- Conditional Rendering based on Verified Token --- */}
        {userToken == null ? (
          <Stack.Group>
            <Stack.Screen name="LoginScreen" component={LoginScreen} />
            <Stack.Screen name="SignupScreen" component={SignupScreen} />
          </Stack.Group>
        ) : (
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
            <Stack.Screen name="MyEnquiryScreen" component={MyEnquiryScreen} />
            <Stack.Screen name='FranchisePartnerFormScreen' component={FranchisePartnerFormScreen} />
          </Stack.Group>
        )}

      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default NavigationScreen;