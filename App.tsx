// App.tsx

import React from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context'; // <-- इसे इम्पोर्ट करें
import NavigationScreen from './src/navigation/NavigationScreen';
import Toast from 'react-native-toast-message';
import { toastConfig } from './src/components/common/AppToast';
import { Provider } from 'react-redux';
import { store } from './src/redux/store';
import AppStatusBar from './src/components/common/AppStatusBar';

const App = () => {
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




