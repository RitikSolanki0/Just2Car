// import React from "react";
// import { View, Text, TextInput, TouchableOpacity, StatusBar, ScrollView, ActivityIndicator } from "react-native";
// import { SafeAreaView } from 'react-native-safe-area-context';
// import Ionicons from "@react-native-vector-icons/ionicons";
// import { styles } from './SignupScreenStyles';
// import { useSignupLogic } from './useSignupLogic';
// import { Colors } from "../../../theme/colors";

// const SignupScreen = ({ navigation }: any) => {
//   const { 
//     fullName, setFullName, email, setEmail, phone, setPhone,
//     city, setCity, password, setPassword, loading,
//     isPasswordVisible, setIsPasswordVisible, handleSignup 
//   } = useSignupLogic(navigation);

//   return (
//     <SafeAreaView style={styles.container}>
//       {/* <StatusBar barStyle="light-content" /> */}
//       <StatusBar barStyle="default" backgroundColor={Colors.primary} />
//       <ScrollView contentContainerStyle={styles.scrollContainer} keyboardShouldPersistTaps="handled">
        
//         <View style={styles.headerContainer}>
//           <Text style={styles.headerText}>Create{"\n"}Account</Text>
//         </View>

//         <View style={styles.formContainer}>
//           <Text style={styles.title}>Join Us!</Text>
//           <Text style={styles.subtitle}>Enter your details to get started</Text>

//           <TextInput placeholder="Full Name" style={styles.input} value={fullName} onChangeText={setFullName} />
//           <TextInput placeholder="Email Address" style={styles.input} value={email} onChangeText={setEmail} keyboardType="email-address" autoCapitalize="none" />
//           <TextInput placeholder="Phone Number" style={styles.input} value={phone} onChangeText={setPhone} keyboardType="number-pad" maxLength={10} />
//           <TextInput placeholder="City ID" style={styles.input} value={city} onChangeText={setCity} />

//           <View style={styles.passwordContainer}>
//             <TextInput
//               placeholder="Password"
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
//     </SafeAreaView>
//   );
// };

// export default SignupScreen;
















import React from "react";
import { View, Text, TextInput, TouchableOpacity, StatusBar, ScrollView, ActivityIndicator } from "react-native";
import { SafeAreaView } from 'react-native-safe-area-context';
import Ionicons from "@react-native-vector-icons/ionicons";
import { styles } from "./SignupScreenStyles";
import { useSignupLogic } from "./useSignupLogic";
import CustomDropdown from "../../../components/addcar/CustomDropdown"; // ड्रॉपडाउन कंपोनेंट
import { Colors } from "../../../theme/colors";

const SignupScreen = ({ navigation }: any) => {
  const { 
    fullName, setFullName, email, setEmail, phone, setPhone, password, setPassword,
    loading, isPasswordVisible, setIsPasswordVisible,
    states, cities, selectedStateName, handleStateSelect, 
    selectedCityName, handleCitySelect, handleSignup 
  } = useSignupLogic(navigation);

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="default" backgroundColor={Colors.primary} />
      <ScrollView contentContainerStyle={styles.scrollContainer} keyboardShouldPersistTaps="handled">
        
        <View style={styles.headerContainer}>
          <Text style={styles.headerText}>Create{"\n"}Account</Text>
        </View>

        <View style={styles.formContainer}>
          <Text style={styles.title}>Join Us!</Text>
          <Text style={styles.subtitle}>Enter your details to get started</Text>

          <TextInput placeholder="Full Name" style={styles.input} value={fullName} onChangeText={setFullName} />
          
          <TextInput placeholder="Email Address" style={styles.input} value={email} onChangeText={setEmail} keyboardType="email-address" autoCapitalize="none" />
          
          <TextInput placeholder="Phone Number" style={styles.input} value={phone} onChangeText={setPhone} keyboardType="number-pad" maxLength={10} />

          {/* --- State Dropdown --- */}
          <View style={{ marginBottom: 10 }}>
            <CustomDropdown 
                label="State" 
                placeholder="Select State" 
                data={states} 
                selectedValue={selectedStateName} 
                onSelect={handleStateSelect} 
            />
          </View>

          {/* --- City Dropdown --- */}
          <View style={{ marginBottom: 10 }}>
            <CustomDropdown 
                label="City" 
                placeholder="Select City" 
                data={cities} 
                selectedValue={selectedCityName} 
                onSelect={handleCitySelect} 
            />
          </View>

          <View style={styles.passwordContainer}>
            <TextInput
              placeholder="Password"
              secureTextEntry={!isPasswordVisible}
              style={styles.passwordInput}
              value={password}
              onChangeText={setPassword}
            />
            <TouchableOpacity onPress={() => setIsPasswordVisible(!isPasswordVisible)}>
              <Ionicons name={isPasswordVisible ? "eye-outline" : "eye-off-outline"} size={22} color="#9CA3AF" />
            </TouchableOpacity>
          </View>

          <TouchableOpacity style={styles.signupButton} onPress={handleSignup} disabled={loading}>
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
    </SafeAreaView>
  );
};

export default SignupScreen;