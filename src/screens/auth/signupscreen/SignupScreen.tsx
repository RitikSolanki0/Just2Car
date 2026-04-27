// import React from "react";
// import { View, Text, TextInput, TouchableOpacity, StatusBar, ScrollView, ActivityIndicator } from "react-native";
// // SafeAreaView हटाकर useSafeAreaInsets जोड़ें
// import { useSafeAreaInsets } from 'react-native-safe-area-context';
// import Ionicons from "@react-native-vector-icons/ionicons";
// import { styles } from "./SignupScreenStyles";
// import { useSignupLogic } from "./useSignupLogic";
// import CustomDropdown from "../../../components/addcar/CustomDropdown";
// import { Colors } from "../../../theme/colors";

// const SignupScreen = ({ navigation }: any) => {
//   const insets = useSafeAreaInsets(); // स्टेटस बार की सटीक हाइट के लिए

//   const {
//     fullName, setFullName, email, setEmail, phone, setPhone, password, setPassword,
//     loading, isPasswordVisible, setIsPasswordVisible,
//     states, cities, selectedStateName, handleStateSelect,
//     selectedCityName, handleCitySelect, handleSignup
//   } = useSignupLogic(navigation);

//   return (
//     // कंटेनर को Colors.primary दिया ताकि ऊपर स्टेटस बार एरिया नीला दिखे
//     <View style={styles.container}>

//       {/* स्टेटस बार सेटिंग्स (Android 15 Fix) */}
//       <StatusBar
//         barStyle="light-content"
//         backgroundColor="transparent"
//         translucent={true}
//       />

//       <ScrollView
//         contentContainerStyle={[
//           styles.scrollContainer,
//           { paddingBottom: insets.bottom }
//         ]}
//         keyboardShouldPersistTaps="handled"
//         bounces={false}
//       >

//         {/* हेडर में डायनामिक पैडिंग (insets.top) */}
//         <View style={[styles.headerContainer, { paddingTop: insets.top + 40 }]}>
//           <Text style={styles.headerText}>Create{"\n"}Account</Text>
//         </View>

//         {/* सफ़ेद फॉर्म कार्ड */}
//         <View style={styles.formContainer}>
//           <Text style={styles.title}>Join Us!</Text>
//           <Text style={styles.subtitle}>Enter your details to get started</Text>

//           <TextInput placeholder="Full Name" placeholderTextColor="#9CA3AF" style={styles.input} value={fullName} onChangeText={setFullName} />

//           <TextInput placeholder="Email Address" placeholderTextColor="#9CA3AF" style={styles.input} value={email} onChangeText={setEmail} keyboardType="email-address" autoCapitalize="none" />

//           <TextInput placeholder="Phone Number" placeholderTextColor="#9CA3AF" style={styles.input} value={phone} onChangeText={setPhone} keyboardType="number-pad" maxLength={10} />

//           <View style={{ marginBottom: 10 }}>
//             <CustomDropdown label="State" placeholder="Select State" data={states} selectedValue={selectedStateName} onSelect={handleStateSelect} />
//           </View>

//           <View style={{ marginBottom: 10 }}>
//             <CustomDropdown label="City" placeholder="Select City" data={cities} selectedValue={selectedCityName} onSelect={handleCitySelect} />
//           </View>

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

//           <TouchableOpacity style={styles.signupButton} onPress={handleSignup} disabled={loading}>
//             {loading ? <ActivityIndicator color="white" /> : <Text style={styles.signupText}>Sign Up</Text>}
//           </TouchableOpacity>

//           <View style={styles.loginRow}>
//             <Text style={styles.accountText}>Already have an account? </Text>
//             <TouchableOpacity onPress={() => navigation.navigate('LoginScreen')}>
//               <Text style={styles.loginLink}>Login</Text>
//             </TouchableOpacity>
//           </View>
//         </View>
//       </ScrollView>
//     </View>
//   );
// };

// export default SignupScreen;
























// import React from "react";
// import { View, Text, TextInput, TouchableOpacity, StatusBar, ScrollView, ActivityIndicator,  KeyboardAvoidingView, Platform, } from "react-native";
// // SafeAreaView हटाकर useSafeAreaInsets जोड़ें
// import { useSafeAreaInsets } from 'react-native-safe-area-context';
// import Ionicons from "@react-native-vector-icons/ionicons";
// import { styles } from "./SignupScreenStyles";
// import { useSignupLogic } from "./useSignupLogic";
// import CustomDropdown from "../../../components/addcar/CustomDropdown";
// import { Colors } from "../../../theme/colors";

// const SignupScreen = ({ navigation }: any) => {
//   const insets = useSafeAreaInsets(); // स्टेटस बार की सटीक हाइट के लिए

//   const {
//     fullName, setFullName, email, setEmail, phone, setPhone, password, setPassword,
//     loading, isPasswordVisible, setIsPasswordVisible,
//     states, cities, selectedStateName, handleStateSelect,
//     selectedCityName, handleCitySelect, handleSignup
//   } = useSignupLogic(navigation);

//   return (
//     // कंटेनर को Colors.primary दिया ताकि ऊपर स्टेटस बार एरिया नीला दिखे
//     <View style={styles.container}>

//       {/* स्टेटस बार सेटिंग्स (Android 15 Fix) */}
//       <StatusBar
//         barStyle="light-content"
//         backgroundColor="transparent"
//         translucent={true}
//       />
//       <KeyboardAvoidingView
//         behavior={Platform.OS === "ios" ? "padding" : "height"}
//         style={{ flex: 1 }}
//       >

//       <ScrollView
//         contentContainerStyle={[
//           styles.scrollContainer,
//           { paddingBottom: insets.bottom }
//         ]}
//         keyboardShouldPersistTaps="handled"
//         bounces={false}
//       >

//         {/* हेडर में डायनामिक पैडिंग (insets.top) */}
//         <View style={[styles.headerContainer, { paddingTop: insets.top + 40 }]}>
//           <Text style={styles.headerText}>Create{"\n"}Account</Text>
//         </View>

//         {/* सफ़ेद फॉर्म कार्ड */}
//         <View style={styles.formContainer}>
//           <Text style={styles.title}>Join Us!</Text>
//           <Text style={styles.subtitle}>Enter your details to get started</Text>

//           <TextInput placeholder="Full Name" placeholderTextColor="#9CA3AF" style={styles.input} value={fullName} onChangeText={setFullName} />

//           <TextInput placeholder="Email Address" placeholderTextColor="#9CA3AF" style={styles.input} value={email} onChangeText={setEmail} keyboardType="email-address" autoCapitalize="none" />

//           <TextInput placeholder="Phone Number" placeholderTextColor="#9CA3AF" style={styles.input} value={phone} onChangeText={setPhone} keyboardType="number-pad" maxLength={10} />

//           <View style={{ marginBottom: 10 }}>
//             <CustomDropdown label="State" placeholder="Select State" data={states} selectedValue={selectedStateName} onSelect={handleStateSelect} />
//           </View>

//           <View style={{ marginBottom: 10 }}>
//             <CustomDropdown label="City" placeholder="Select City" data={cities} selectedValue={selectedCityName} onSelect={handleCitySelect} />
//           </View>

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

//           <TouchableOpacity style={styles.signupButton} onPress={handleSignup} disabled={loading}>
//             {loading ? <ActivityIndicator color="white" /> : <Text style={styles.signupText}>Sign Up</Text>}
//           </TouchableOpacity>

//           <View style={styles.loginRow}>
//             <Text style={styles.accountText}>Already have an account? </Text>
//             <TouchableOpacity onPress={() => navigation.navigate('LoginScreen')}>
//               <Text style={styles.loginLink}>Login</Text>
//             </TouchableOpacity>
//           </View>
//         </View>
//       </ScrollView>
//       </KeyboardAvoidingView>
//     </View>
//   );
// };

// export default SignupScreen;






















import React from "react";
import { 
  View, 
  Text, 
  TextInput, 
  TouchableOpacity, 
  StatusBar, 
  ScrollView, 
  ActivityIndicator,  
  KeyboardAvoidingView, 
  Platform 
} from "react-native";
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import Ionicons from "@react-native-vector-icons/ionicons";
import { styles } from "./SignupScreenStyles";
import { useSignupLogic } from "./useSignupLogic";
import CustomDropdown from "../../../components/addcar/CustomDropdown";
import { Colors } from "../../../theme/colors";

const SignupScreen = ({ navigation }: any) => {
  const insets = useSafeAreaInsets();

  const {
    fullName, setFullName, email, setEmail, phone, setPhone, password, setPassword,
    loading, isPasswordVisible, setIsPasswordVisible,
    states, cities, selectedStateName, handleStateSelect,
    selectedCityName, handleCitySelect, handleSignup
  } = useSignupLogic(navigation);

  return (
    // 1. फिक्स: रूट कंटेनर का बैकग्राउंड सफ़ेद किया ताकि नीचे नीला गैप न दिखे
    <View style={{ flex: 1, backgroundColor: Colors.white }}>
      
      {/* 2. स्टेटस बार के पीछे नीला रंग बरकरार रखने के लिए गार्ड */}
      <View style={{ 
        height: insets.top, 
        backgroundColor: Colors.primary, 
        position: 'absolute', 
        top: 0, left: 0, right: 0, 
        zIndex: 10 
      }} />

      <StatusBar
        barStyle="light-content"
        backgroundColor="transparent"
        translucent={true}
      />

      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        style={{ flex: 1 }}
        // 3. फिक्स: यह ऑफसेट पासवर्ड फील्ड को कीबोर्ड से ऊपर रखने में मदद करेगा
        keyboardVerticalOffset={Platform.OS === "ios" ? 0 : -50} 
      >
        <ScrollView
          contentContainerStyle={{
            flexGrow: 1, // यह सुनिश्चित करता है कि फॉर्म पूरा खुले
            backgroundColor: Colors.white,
            paddingBottom: insets.bottom + 20
          }}
          keyboardShouldPersistTaps="handled"
          bounces={false}
          showsVerticalScrollIndicator={false}
        >
          {/* हेडर (नीला हिस्सा) */}
          <View style={[styles.headerContainer, { paddingTop: insets.top + 40 }]}>
            <Text style={styles.headerText}>Create{"\n"}Account</Text>
          </View>

          {/* सफ़ेद फॉर्म कार्ड */}
          <View style={styles.formContainer}>
            <Text style={styles.title}>Join Us!</Text>
            <Text style={styles.subtitle}>Enter your details to get started</Text>

            <TextInput 
              placeholder="Full Name" 
              placeholderTextColor="#9CA3AF" 
              style={styles.input} 
              value={fullName} 
              onChangeText={setFullName} 
            />

            <TextInput 
              placeholder="Email Address" 
              placeholderTextColor="#9CA3AF" 
              style={styles.input} 
              value={email} 
              onChangeText={setEmail} 
              keyboardType="email-address" 
              autoCapitalize="none" 
            />

            <TextInput 
              placeholder="Phone Number" 
              placeholderTextColor="#9CA3AF" 
              style={styles.input} 
              value={phone} 
              onChangeText={setPhone} 
              keyboardType="number-pad" 
              maxLength={10} 
            />

            <View style={{ marginBottom: 10 }}>
              <CustomDropdown label="State" placeholder="Select State" data={states} selectedValue={selectedStateName} onSelect={handleStateSelect} />
            </View>

            <View style={{ marginBottom: 10 }}>
              <CustomDropdown label="City" placeholder="Select City" data={cities} selectedValue={selectedCityName} onSelect={handleCitySelect} />
            </View>

            {/* पासवर्ड सेक्शन */}
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

            <TouchableOpacity 
              style={[styles.signupButton, loading && { opacity: 0.7 }]} 
              onPress={handleSignup} 
              disabled={loading}
            >
              {loading ? <ActivityIndicator color="white" /> : <Text style={styles.signupText}>Sign Up</Text>}
            </TouchableOpacity>

            <View style={styles.loginRow}>
              <Text style={styles.accountText}>Already have an account? </Text>
              <TouchableOpacity onPress={() => navigation.navigate('LoginScreen')}>
                <Text style={styles.loginLink}>Login</Text>
              </TouchableOpacity>
            </View>
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    </View>
  );
};

export default SignupScreen;