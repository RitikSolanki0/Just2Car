import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  StatusBar,
  ScrollView,
} from "react-native";
import { Colors } from "../../../theme/colors";
import { Fonts } from "../../../theme/fonts";
import { SafeAreaView } from 'react-native-safe-area-context'; 

// TypeScript के लिए navigation prop का type डिफाइन करें
type LoginScreenProps = {
  navigation: any;
};

const LoginScreen = ({ navigation }: LoginScreenProps) => {

  // Login होने के बाद MainApp (Tabs वाली स्क्रीन) पर जाने के लिए
  const handleLogin = () => {
    // .replace() का इस्तेमाल करते हैं ताकि यूज़र वापस Login स्क्रीन पर न आ सके
    navigation.navigate('BottomNavigator');
  };

  return (
    <SafeAreaView style={styles.container}>
      {/* Status bar को screen के हिसाब से style करते हैं */}
      {/* <StatusBar barStyle="light-content" backgroundColor={Colors.primary} /> */}
      
      <ScrollView 
        contentContainerStyle={styles.scrollContainer} 
        keyboardShouldPersistTaps="handled"
        showsVerticalScrollIndicator={false}
      >
        {/* --- Top Header Section (Dark Blue) --- */}
        <View style={styles.headerContainer}>
          <Text style={styles.headerText}>Hello</Text>
        </View>

        {/* --- Form Section (White) --- */}
        <View style={styles.formContainer}>
          <Text style={styles.title}>
            Again!
          </Text>
          <Text style={styles.subtitle}>
            Welcome back you've been missed
          </Text>

          {/* Email Input */}
          <TextInput
            placeholder="Email"
            placeholderTextColor={Colors.textSecondary}
            style={styles.input}
            keyboardType="email-address"
            autoCapitalize="none"
          />

          {/* Password Input */}
          <TextInput
            placeholder="Password"
            placeholderTextColor={Colors.textSecondary}
            secureTextEntry={true}
            style={styles.input}
          />

          {/* "Or" Divider */}
          <Text style={styles.orText}>Or</Text>

          {/* Mobile Input */}
          <TextInput
            placeholder="Mobile no."
            placeholderTextColor={Colors.textSecondary}
            keyboardType="number-pad"
            style={styles.input}
          />

          {/* Login Button */}
          <TouchableOpacity style={styles.loginButton} onPress={handleLogin} activeOpacity={0.8}>
            <Text style={styles.loginText}>Login</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default LoginScreen;

// Professional Styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.white, // Form Area का background
  },
  scrollContainer: {
    flexGrow: 1, // यह सुनिश्चित करता है कि ScrollView पूरी जगह ले
  },
  headerContainer: {
    backgroundColor: Colors.primary,
    paddingTop: 60, // ऊपर से स्पेस
    paddingBottom: 80, // नीचे से स्पेस ताकि "Again" टेक्स्ट ओवरलैप हो सके
    paddingHorizontal: 30,
  },
  headerText: {
    fontFamily: Fonts.bold,
    fontSize: 50,
    color: Colors.white,
  },
  formContainer: {
    flex: 1,
    backgroundColor: Colors.white,
    marginTop: -40, // यह फॉर्म को ऊपर ब्लू एरिया में थोड़ा ओवरलैप कराएगा
    borderTopLeftRadius: 30, // सुंदर कर्व के लिए
    borderTopRightRadius: 30,
    paddingHorizontal: 30,
    paddingTop: 30,
  },
  title: {
    fontFamily: Fonts.bold,
    fontSize: 40,
    color: Colors.secondary, // Orange color from your theme
  },
  subtitle: {
    fontFamily: Fonts.regular,
    fontSize: 16,
    color: Colors.textSecondary,
    marginTop: 8,
    marginBottom: 30,
  },
  input: {
    backgroundColor: Colors.cardBg, // Light Gray Background
    borderRadius: 14,
    height: 55,
    paddingHorizontal: 20,
    fontFamily: Fonts.medium,
    fontSize: 15,
    color: Colors.textPrimary,
    marginBottom: 15, // Inputs के बीच में स्पेस
  },
  orText: {
    fontFamily: Fonts.regular,
    color: Colors.textSecondary,
    textAlign: 'center',
    marginVertical: 10,
  },
  loginButton: {
    backgroundColor: Colors.primary,
    paddingVertical: 16,
    borderRadius: 14,
    alignItems: 'center',
    marginTop: 20,
    elevation: 5,
    shadowColor: Colors.primary,
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 5,
  },
  loginText: {
    fontFamily: Fonts.semiBold,
    fontSize: 16,
    color: Colors.white,
  },
});