import { useState } from 'react';
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { ENDPOINTS } from '../../../services/apiConfig';
import { showSuccessToast, showErrorToast } from '../../../utils/showToast';

export const useLoginLogic = (navigation: any) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);

  const togglePasswordVisibility = () => {
    setIsPasswordVisible(!isPasswordVisible);
  };


  const handleLogin = async () => {
    if (!email || !password) {
      showErrorToast("Error", "Please enter both email and password.");
      return;
    }

    setLoading(true);

    try {
      const response = await axios.post(ENDPOINTS.LOGIN, {
        email: email.trim(),
        password: password
      });

      const data = response.data;

      if (data.token) {
        await AsyncStorage.setItem('userToken', data.token);
        await AsyncStorage.setItem('userData', JSON.stringify(data.user));
        
        showSuccessToast("Success", "Login successful! ❤️");
        navigation.replace('BottomNavigator');
      }
    } catch (error: any) {
      const errorMsg = error.response?.data?.message || "Invalid credentials. Try again.";
      showErrorToast("Login Failed", errorMsg);
      console.log("Login Error:", error);
    } finally {
      setLoading(false);
    }
  };

  return {
    email, setEmail,
    password, setPassword,
    loading,
    isPasswordVisible, 
    togglePasswordVisibility,
    handleLogin
  };
};