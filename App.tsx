// App.tsx

// import React from 'react';
// import { SafeAreaProvider } from 'react-native-safe-area-context'; // <-- इसे इम्पोर्ट करें
// import NavigationScreen from './src/navigation/NavigationScreen';
// import Toast from 'react-native-toast-message';
// import { toastConfig } from './src/components/common/AppToast';
// import { Provider } from 'react-redux';
// import { store } from './src/redux/store';
// import AppStatusBar from './src/components/common/AppStatusBar';

// const App = () => {
//   return (
//     <Provider store={store}>
//     <SafeAreaProvider>
//        <AppStatusBar />
//       <NavigationScreen />
//        <Toast config={toastConfig} /> 
//     </SafeAreaProvider>
//     </Provider>
//   );
// };

// export default App;













// App.tsx
import React, { useEffect } from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import NavigationScreen from './src/navigation/NavigationScreen';
import Toast from 'react-native-toast-message';
import { toastConfig } from './src/components/common/AppToast';
import { Provider } from 'react-redux';
import { store } from './src/redux/store';
import AppStatusBar from './src/components/common/AppStatusBar';
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { setSignOut } from './src/redux/authSlice';

const App = () => {

  useEffect(() => {
    // 🚀 GLOBAL AXIOS INTERCEPTOR
    // Yeh har API response ko check karta hai
    const interceptor = axios.interceptors.response.use(
      (response) => response, // Agar response sahi hai toh kuch mat karo
      async (error) => {
        // Agar Backend se 401 (Unauthorized) error aaye, matlab Token Expire ho gaya
        if (error.response && error.response.status === 401) {
          console.log("Token Expired or Unauthorized! Logging out...");
          
          try {
            // 1. Storage saaf karo
            await AsyncStorage.multiRemove(['userToken', 'userData']);
            
            // 2. Redux state update karo (setSignOut action trigger karo)
            // Jaise hi userToken 'null' hoga, NavigationScreen apne aap Login dikha degi
            store.dispatch(setSignOut());
            
          } catch (e) {
            console.log("Error during auto logout:", e);
          }
        }
        return Promise.reject(error);
      }
    );

    // Clean up function (optional but good practice)
    return () => {
      axios.interceptors.response.eject(interceptor);
    };
  }, []);

  return (
    <Provider store={store}>
      <SafeAreaProvider>
        <AppStatusBar />
        <NavigationScreen />
        <Toast config={toastConfig} />
      </SafeAreaProvider>
    </Provider>
  );
};

export default App;