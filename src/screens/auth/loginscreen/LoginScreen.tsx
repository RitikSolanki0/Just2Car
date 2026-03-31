// import React, { useState } from "react";
// import {
//   View,
//   Text,
//   StyleSheet,
//   TextInput,
//   TouchableOpacity,
//   StatusBar,
//   ScrollView,
// } from "react-native";
// import { SafeAreaView } from 'react-native-safe-area-context';
// import { Colors } from "../../../theme/colors";
// import { Fonts } from "../../../theme/fonts";

// const LoginScreen = ({ navigation }: any) => {

//   const handleLogin = () => {
//     // लॉगिन के बाद होम पर भेजें
//     navigation.replace('BottomNavigator');
//   };

//   return (
//     <SafeAreaView style={styles.container}>
//       <StatusBar barStyle="default" backgroundColor={Colors.primary} />
      
//       <ScrollView 
//         contentContainerStyle={styles.scrollContainer} 
//         keyboardShouldPersistTaps="handled"
//         showsVerticalScrollIndicator={false}
//       >
//         {/* --- Top Header Section (Hello moved down) --- */}
//         <View style={styles.headerContainer}>
//           <Text style={styles.headerText}>Hello</Text>
//         </View>

//         {/* --- Form Section (White Card) --- */}
//         <View style={styles.formContainer}>
//           <Text style={styles.title}>Again!</Text>
//           <Text style={styles.subtitle}>Welcome back you've been missed</Text>

//           {/* Email Input */}
//           <TextInput
//             placeholder="Email"
//             placeholderTextColor="#9CA3AF"
//             style={styles.input}
//             keyboardType="email-address"
//             autoCapitalize="none"
//           />

//           {/* Password Input */}
//           <TextInput
//             placeholder="Password"
//             placeholderTextColor="#9CA3AF"
//             secureTextEntry={true}
//             style={styles.input}
//           />

//           {/* "Or" Divider */}
//           <Text style={styles.orText}>Or</Text>

//           {/* Mobile Input */}
//           <TextInput
//             placeholder="Mobile no."
//             placeholderTextColor="#9CA3AF"
//             keyboardType="number-pad"
//             style={styles.input}
//           />

//           {/* Login Button */}
//           <TouchableOpacity style={styles.loginButton} onPress={handleLogin} activeOpacity={0.8}>
//             <Text style={styles.loginText}>Login</Text>
//           </TouchableOpacity>

//           {/* --- Sign Up Link (New) --- */}
//           <View style={styles.signupRow}>
//             <Text style={styles.noAccountText}>Don't have an account? </Text>
//             <TouchableOpacity onPress={() => navigation.navigate('SignupScreen')}>
//               <Text style={styles.signupLink}>Sign up</Text>
//             </TouchableOpacity>
//           </View>
//         </View>
//       </ScrollView>
//     </SafeAreaView>
//   );
// };

// export default LoginScreen;

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: Colors.white,
//   },
//   scrollContainer: {
//     flexGrow: 1,
//   },
//   headerContainer: {
//     backgroundColor: Colors.primary,
//     // --- Hello को नीचे करने के लिए paddingTop बढ़ाया गया है ---
//     paddingTop: 60, 
//     paddingBottom: 40, 
//     paddingHorizontal: 30,
//   },
//   headerText: {
//     fontFamily: Fonts.bold,
//     fontSize: 55,
//     color: Colors.white,
//   },
//   formContainer: {
//     flex: 1,
//     backgroundColor: Colors.white,
//     marginTop: -50, // कार्ड का ओवरलैप
//     borderTopLeftRadius: 40,
//     borderTopRightRadius: 40,
//     paddingHorizontal: 30,
//     paddingTop: 35,
//   },
//   title: {
//     fontFamily: Fonts.bold,
//     fontSize: 42,
//     color: Colors.secondary,
//   },
//   subtitle: {
//     fontFamily: Fonts.medium,
//     fontSize: 15,
//     color: '#6B7280',
//     marginTop: 5,
//     marginBottom: 35,
//   },
//   input: {
//     backgroundColor: "#F3F4F6", 
//     borderRadius: 15,
//     height: 55,
//     paddingHorizontal: 20,
//     fontFamily: Fonts.medium,
//     fontSize: 15,
//     color: 'black',
//     marginBottom: 15,
//   },
//   orText: {
//     fontFamily: Fonts.medium,
//     color: '#9CA3AF',
//     textAlign: 'center',
//     marginVertical: 10,
//   },
//   loginButton: {
//     backgroundColor: Colors.primary,
//     paddingVertical: 16,
//     borderRadius: 15,
//     alignItems: 'center',
//     marginTop: 20,
//     elevation: 4,
//     shadowColor: Colors.primary,
//     shadowOffset: { width: 0, height: 4 },
//     shadowOpacity: 0.2,
//     shadowRadius: 5,
//   },
//   loginText: {
//     fontFamily: Fonts.bold,
//     fontSize: 16,
//     color: Colors.white,
//   },
//   // --- Sign up row styles ---
//   signupRow: {
//     flexDirection: 'row',
//     justifyContent: 'center',
//     marginTop: 25,
//     marginBottom: 20,
//   },
//   noAccountText: {
//     fontFamily: Fonts.medium,
//     fontSize: 14,
//     color: '#6B7280',
//   },
//   signupLink: {
//     fontFamily: Fonts.bold,
//     fontSize: 14,
//     color: Colors.secondary, // ऑरेंज कलर ताकि क्लिकेबल लगे
//   },
// });




























//  api and chhote part me yaha se 

// import React from "react";
// import { View, Text, TextInput, TouchableOpacity, StatusBar, ScrollView, ActivityIndicator } from "react-native";
// import { SafeAreaView } from 'react-native-safe-area-context';
// import Ionicons from "@react-native-vector-icons/ionicons";
// import { styles } from "./LoginScreenStyles"; // स्टाइल इम्पोर्ट
// import { useLoginLogic } from "./useLoginLogic"; // लॉजिक इम्पोर्ट
// import { Colors } from "../../../theme/colors";


// const LoginScreen = ({ navigation }: any) => {
//   // लॉजिक हुक से डेटा निकालें
//   const { email, setEmail, password, setPassword, loading, isPasswordVisible, togglePasswordVisibility, handleLogin } = useLoginLogic(navigation);

//   return (
//     <SafeAreaView style={styles.container}>
//       {/* <StatusBar barStyle="light-content" /> */}
//       <StatusBar barStyle="default" backgroundColor={Colors.primary} />
      
//       <ScrollView contentContainerStyle={styles.scrollContainer} keyboardShouldPersistTaps="handled" showsVerticalScrollIndicator={false}>
        
//         <View style={styles.headerContainer}>
//           <Text style={styles.headerText}>Hello</Text>
//         </View>

//         <View style={styles.formContainer}>
//           <Text style={styles.title}>Again!</Text>
//           <Text style={styles.subtitle}>Welcome back you've been missed</Text>

//           <TextInput
//             placeholder="Email"
//             placeholderTextColor="#9CA3AF"
//             style={styles.input}
//             value={email}
//             onChangeText={setEmail}
//             autoCapitalize="none"
//           />
//           <View style={styles.passwordContainer}>
//             <TextInput
//               placeholder="Password"
//               placeholderTextColor="#9CA3AF"
//               secureTextEntry={!isPasswordVisible} // ! का मतलब है 'उलटा'
//               style={styles.passwordInput}
//               value={password}
//               onChangeText={setPassword}
//             />
//             <TouchableOpacity onPress={togglePasswordVisibility}>
//               <Ionicons 
//                 name={isPasswordVisible ? "eye-outline" : "eye-off-outline"} 
//                 size={22} 
//                 color="#9CA3AF" 
//               />
//             </TouchableOpacity>
//           </View>

//           <Text style={styles.orText}>Or</Text>

//           <TextInput placeholder="Mobile no." placeholderTextColor="#9CA3AF" keyboardType="number-pad" style={styles.input} />

//           <TouchableOpacity style={styles.loginButton} onPress={handleLogin} disabled={loading}>
//             {loading ? <ActivityIndicator color="white" /> : <Text style={styles.loginText}>Login</Text>}
//           </TouchableOpacity>

//           <View style={styles.signupRow}>
//             <Text style={styles.noAccountText}>Don't have an account? </Text>
//             <TouchableOpacity onPress={() => navigation.navigate('SignupScreen')}>
//               <Text style={styles.signupLink}>Sign up</Text>
//             </TouchableOpacity>
//           </View>
//         </View>

//       </ScrollView>
//     </SafeAreaView>
//   );
// };

// export default LoginScreen;

















// import React from "react";
// import { View, Text, TextInput, TouchableOpacity, StatusBar, ScrollView, ActivityIndicator } from "react-native";
// import { SafeAreaView } from 'react-native-safe-area-context';
// import Ionicons from "@react-native-vector-icons/ionicons";
// import { styles } from "./LoginScreenStyles";
// import { useLoginLogic } from "./useLoginLogic";
// import { Colors } from "../../../theme/colors";

// const LoginScreen = ({ navigation }: any) => {
//   const { 
//     email, setEmail, 
//     phone, setPhone,
//     password, setPassword, 
//     loading, 
//     isPasswordVisible, setIsPasswordVisible, 
//     handleLogin 
//   } = useLoginLogic(navigation);

//   return (
//     <SafeAreaView style={styles.container}>
//       {/* <StatusBar barStyle="light-content" /> */}
//       <StatusBar barStyle="dark-content" backgroundColor={Colors.primary} />
//       <ScrollView contentContainerStyle={styles.scrollContainer} keyboardShouldPersistTaps="handled">
        
//         <View style={styles.headerContainer}>
//           <Text style={styles.headerText}>Hello</Text>
//         </View>

//         <View style={styles.formContainer}>
//           <Text style={styles.title}>Again!</Text>
//           <Text style={styles.subtitle}>Welcome back you've been missed</Text>

//           {/* Email Input */}
//           <TextInput
//             placeholder="Email"
//             placeholderTextColor="#9CA3AF"
//             style={styles.input}
//             value={email}
//             onChangeText={(val) => {
//                 setEmail(val);
//                 if(val) setPhone(""); // अगर ईमेल भरे तो फोन खाली कर दे
//             }}
//             autoCapitalize="none"
//           />

//           {/* Password Input */}
//           <View style={styles.passwordContainer}>
//             <TextInput
//               placeholder="Password"
//               placeholderTextColor="#9CA3AF"
//               secureTextEntry={!isPasswordVisible}
//               style={styles.passwordInput}
//               value={password}
//               onChangeText={setPassword}
//             />
//             <TouchableOpacity onPress={() => setIsPasswordVisible(!isPasswordVisible)}>
//               <Ionicons name={isPasswordVisible ? "eye-outline" : "eye-off-outline"} size={22} color="#9CA3AF" />
//             </TouchableOpacity>
//           </View>

//           <Text style={styles.orText}>Or</Text>

//           {/* Mobile Input */}
//           <TextInput
//             placeholder="Mobile no."
//             placeholderTextColor="#9CA3AF"
//             keyboardType="number-pad"
//             maxLength={10}
//             style={styles.input}
//             value={phone}
//             onChangeText={(val) => {
//                 setPhone(val);
//                 if(val) setEmail(""); // अगर फोन भरे तो ईमेल खाली कर दे
//             }}
//           />

//           <TouchableOpacity style={styles.loginButton} onPress={handleLogin} disabled={loading}>
//             {loading ? <ActivityIndicator color="white" /> : <Text style={styles.loginText}>Login</Text>}
//           </TouchableOpacity>

//           <View style={styles.signupRow}>
//             <Text style={styles.noAccountText}>Don't have an account? </Text>
//             <TouchableOpacity onPress={() => navigation.navigate('SignupScreen')}>
//               <Text style={styles.signupLink}>Sign up</Text>
//             </TouchableOpacity>
//           </View>
//         </View>

//       </ScrollView>
//     </SafeAreaView>
//   );
// };

// export default LoginScreen;















//  status bar thik kiya hai 

import React from "react";
import { View, Text, TextInput, TouchableOpacity, StatusBar, ScrollView, ActivityIndicator } from "react-native";
// SafeAreaView को हटाकर useSafeAreaInsets इस्तेमाल करेंगे
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import Ionicons from "@react-native-vector-icons/ionicons";
import { styles } from "./LoginScreenStyles";
import { useLoginLogic } from "./useLoginLogic";
import { Colors } from "../../../theme/colors";

const LoginScreen = ({ navigation }: any) => {
  const insets = useSafeAreaInsets(); // स्टेटस बार की हाइट गेट करने के लिए
  
  const { 
    email, setEmail, 
    phone, setPhone,
    password, setPassword, 
    loading, 
    isPasswordVisible, setIsPasswordVisible, 
    handleLogin 
  } = useLoginLogic(navigation);

  return (
    // कंटेनर का बैकग्राउंड Colors.primary रखें ताकि स्टेटस बार के पीछे नीला रंग दिखे
    <View style={[styles.container, { backgroundColor: Colors.primary }]}>
      
      {/* Android 16 के लिए सेटिंग्स: translucent={true} और backgroundColor="transparent" */}
      <StatusBar 
        barStyle="light-content" 
        backgroundColor="transparent" 
        translucent={true} 
      />

      <ScrollView 
        contentContainerStyle={styles.scrollContainer} 
        keyboardShouldPersistTaps="handled"
        bounces={false}
      >
        
        {/* हेडर में डायनामिक पैडिंग दी है ताकि 'Hello' स्टेटस बार के नीचे न दबे */}
        <View style={[styles.headerContainer, { paddingTop: insets.top + 40 }]}>
          <Text style={styles.headerText}>Hello</Text>
        </View>

        {/* फॉर्म कंटेनर */}
        <View style={styles.formContainer}>
          <Text style={styles.title}>Again!</Text>
          <Text style={styles.subtitle}>Welcome back you've been missed</Text>

          {/* Email Input */}
          <TextInput
            placeholder="Email"
            placeholderTextColor="#9CA3AF"
            style={styles.input}
            value={email}
            onChangeText={(val) => {
                setEmail(val);
                if(val) setPhone(""); 
            }}
            autoCapitalize="none"
          />

          {/* Password Input */}
          <View style={styles.passwordContainer}>
            <TextInput
              placeholder="Password"
              placeholderTextColor="#9CA3AF"
              secureTextEntry={!isPasswordVisible}
              style={styles.passwordInput}
              value={password}
              onChangeText={setPassword}
            />
            <TouchableOpacity onPress={() => setIsPasswordVisible(!isPasswordVisible)}>
              <Ionicons name={isPasswordVisible ? "eye-outline" : "eye-off-outline"} size={22} color="#9CA3AF" />
            </TouchableOpacity>
          </View>

          <Text style={styles.orText}>Or</Text>

          {/* Mobile Input */}
          <TextInput
            placeholder="Mobile no."
            placeholderTextColor="#9CA3AF"
            keyboardType="number-pad"
            maxLength={10}
            style={styles.input}
            value={phone}
            onChangeText={(val) => {
                setPhone(val);
                if(val) setEmail(""); 
            }}
          />

          <TouchableOpacity style={styles.loginButton} onPress={handleLogin} disabled={loading}>
            {loading ? <ActivityIndicator color="white" /> : <Text style={styles.loginText}>Login</Text>}
          </TouchableOpacity>

          <View style={styles.signupRow}>
            <Text style={styles.noAccountText}>Don't have an account? </Text>
            <TouchableOpacity onPress={() => navigation.navigate('SignupScreen')}>
              <Text style={styles.signupLink}>Sign up</Text>
            </TouchableOpacity>
          </View>
        </View>

      </ScrollView>
    </View>
  );
};

export default LoginScreen;