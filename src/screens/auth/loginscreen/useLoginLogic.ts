
import { useState } from 'react';
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useDispatch } from 'react-redux';
import { ENDPOINTS } from '../../../services/apiConfig';
import { showSuccessToast, showErrorToast } from '../../../utils/showToast';
import { setSignIn } from '../../../redux/authSlice';

export const useLoginLogic = (navigation: any) => {
  const dispatch = useDispatch(); // Dispatch हुक

  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);

  const validateEmail = (emailStr: string) => {
    const reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    return reg.test(emailStr);
  };

  const handleLogin = async () => {
    if (!password.trim()) {
      showErrorToast("Error", "Please enter your password.");
      return;
    }

    if (!email.trim() && !phone.trim()) {
      showErrorToast("Missing Info", "Please enter either Email or Mobile number.");
      return;
    }

    if (email.trim() && !validateEmail(email.trim())) {
      showErrorToast("Invalid Email", "Please enter a valid email address.");
      return;
    }

    if (phone.trim() && phone.length !== 10) {
      showErrorToast("Invalid Phone", "Phone number must be exactly 10 digits.");
      return;
    }

    setLoading(true);

    try {
      const payload = {
        email: email.trim() ? email.trim() : phone.trim(),
        password: password
      };

      const response = await axios.post(ENDPOINTS.LOGIN, payload);
      const data = response.data;

      if (data.token) {
        // 1. AsyncStorage में डेटा सेव करें
        await AsyncStorage.setItem('userToken', data.token);
        await AsyncStorage.setItem('userData', JSON.stringify(data.user));

        // 2. Redux State अपडेट करें (यही स्क्रीन बदल देगा)
        dispatch(setSignIn({ token: data.token, user: data.user }));

        showSuccessToast("Success", "Login successful! Welcome back.");

        // navigation.replace('BottomNavigator'); 
      }
    } catch (error: any) {
      const errorMsg = error.response?.data?.message || "Invalid credentials. Try again.";
      showErrorToast("Login Failed", errorMsg);
    } finally {
      setLoading(false);
    }
  };

  return {
    email, setEmail,
    phone, setPhone,
    password, setPassword,
    loading,
    isPasswordVisible, setIsPasswordVisible,
    handleLogin
  };
};













