
import { useState, useEffect } from 'react';
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useDispatch } from 'react-redux'; // Redux Dispatch जोड़ें
import { ENDPOINTS } from '../../../services/apiConfig';
import { showSuccessToast, showErrorToast } from '../../../utils/showToast';
import { setSignIn } from '../../../redux/authSlice'; // Action इम्पोर्ट करें

export const useSignupLogic = (navigation: any) => {
  const dispatch = useDispatch(); 

  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);

  const [statesList, setStatesList] = useState<any[]>([]);
  const [citiesList, setCitiesList] = useState<any[]>([]);
  const [selectedStateName, setSelectedStateName] = useState("");
  const [selectedStateId, setSelectedStateId] = useState("");
  const [selectedCityName, setSelectedCityName] = useState("");
  const [selectedCityId, setSelectedCityId] = useState("");

  useEffect(() => {
    fetchStates();
  }, []);

  const fetchStates = async () => {
    try {
      const res = await axios.get(ENDPOINTS.GET_STATES);
      if (res.data.success) {
        setStatesList(res.data.data);
      }
    } catch (e) {
      console.log("Error fetching states", e);
    }
  };

  const handleStateSelect = async (stateName: string) => {
    setSelectedStateName(stateName);
    const stateObj = statesList.find(s => s.name === stateName);
    if (stateObj) {
      setSelectedStateId(stateObj._id);
      setSelectedCityName("");
      setSelectedCityId("");
      try {
        const res = await axios.get(ENDPOINTS.GET_CITIES(stateObj._id));
        if (res.data.success) {
          setCitiesList(res.data.data);
        }
      } catch (e) {
        console.log("Error fetching cities", e);
      }
    }
  };

  const handleCitySelect = (cityName: string) => {
    setSelectedCityName(cityName);
    const cityObj = citiesList.find(c => c.name === cityName);
    if (cityObj) setSelectedCityId(cityObj._id);
  };

  const validateEmail = (emailStr: string) => {
    const reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    return reg.test(emailStr);
  };

  const handleSignup = async () => {
    if (!fullName || !email || !phone || !password || !selectedCityId) {
      showErrorToast("Oops", "Please fill all fields including state and city.");
      return;
    }

    if (!validateEmail(email)) {
      showErrorToast("Invalid Email", "Please enter a valid email address");
      return;
    }

    if (phone.length !== 10) {
      showErrorToast("Invalid Phone", "Phone must be 10 digits.");
      return;
    }

    setLoading(true);
    try {
      const response = await axios.post(ENDPOINTS.REGISTER, {
        fullName: fullName.trim(),
        email: email.trim(),
        phone: phone.trim(),
        password: password,
        city: selectedCityId
      });

      if (response.data.token) {
        // 1. AsyncStorage में डेटा सेव करें
        await AsyncStorage.setItem('userToken', response.data.token);
        await AsyncStorage.setItem('userData', JSON.stringify(response.data.user));

        // 2. Redux State अपडेट करें (यही स्क्रीन बदल देगा)
        dispatch(setSignIn({ token: response.data.token, user: response.data.user }));

        showSuccessToast("Welcome!", "Registration successful!");

        // navigation.replace('BottomNavigator'); <-- इसे हटा दिया गया है
      }
    } catch (error: any) {
      showErrorToast("Failed", error.response?.data?.message || "Something went wrong.");
    } finally {
      setLoading(false);
    }
  };

  return {
    fullName, setFullName, email, setEmail, phone, setPhone, password, setPassword,
    loading, isPasswordVisible, setIsPasswordVisible,
    states: statesList.map(s => s.name),
    cities: citiesList.map(c => c.name),
    selectedStateName, handleStateSelect,
    selectedCityName, handleCitySelect,
    handleSignup
  };
};