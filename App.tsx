// App.tsx

import React from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context'; // <-- इसे इम्पोर्ट करें
import NavigationScreen from './src/navigation/NavigationScreen';

const App = () => {
  return (
    
    <SafeAreaProvider>
      <NavigationScreen />
    </SafeAreaProvider>
  );
};

export default App;




