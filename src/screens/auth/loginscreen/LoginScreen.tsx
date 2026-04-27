
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
              if (val) setPhone("");
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
              if (val) setEmail("");
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