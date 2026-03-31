// import { useState } from 'react';
// import axios from 'axios';
// import AsyncStorage from '@react-native-async-storage/async-storage';
// import { ENDPOINTS } from '../../../services/apiConfig';
// import { showSuccessToast, showErrorToast } from '../../../utils/showToast';

// export const useSignupLogic = (navigation: any) => {
//   const [fullName, setFullName] = useState("");
//   const [email, setEmail] = useState("");
//   const [phone, setPhone] = useState("");
//   const [city, setCity] = useState("687a1e2685f02307150323ca"); // डिफ़ॉल्ट सिटी आईडी
//   const [password, setPassword] = useState("");
//   const [loading, setLoading] = useState(false);
//   const [isPasswordVisible, setIsPasswordVisible] = useState(false);

//   const handleSignup = async () => {
//     if (!fullName || !email || !phone || !password) {
//       showErrorToast("Error", "Please fill all required fields.");
//       return;
//     }

//     setLoading(true);
//     try {
//       const response = await axios.post(ENDPOINTS.REGISTER, {
//         fullName,
//         email: email.trim(),
//         phone,
//         password,
//         city
//       });

//       const data = response.data;
//       if (data.token) {
//         await AsyncStorage.setItem('userToken', data.token);
//         await AsyncStorage.setItem('userData', JSON.stringify(data.user));
//         showSuccessToast("Welcome!", "Registration successful! ❤️");
//         navigation.replace('BottomNavigator');
//       }
//     } catch (error: any) {
//       const errorMsg = error.response?.data?.message || "Registration failed. Try again.";
//       showErrorToast("Failed", errorMsg);
//     } finally {
//       setLoading(false);
//     }
//   };

//   return {
//     fullName, setFullName, email, setEmail, phone, setPhone,
//     city, setCity, password, setPassword, loading,
//     isPasswordVisible, setIsPasswordVisible, handleSignup
//   };
// };












// import { useState } from 'react';
// import axios from 'axios';
// import AsyncStorage from '@react-native-async-storage/async-storage';
// import { ENDPOINTS } from '../../../services/apiConfig';
// import { showSuccessToast, showErrorToast } from '../../../utils/showToast';

// export const useSignupLogic = (navigation: any) => {
//   const [fullName, setFullName] = useState("");
//   const [email, setEmail] = useState("");
//   const [phone, setPhone] = useState("");
//   const [city, setCity] = useState("687a1e2685f02307150323ca");
//   const [password, setPassword] = useState("");
//   const [loading, setLoading] = useState(false);
//   const [isPasswordVisible, setIsPasswordVisible] = useState(false);

//   // --- ईमेल वैलिडेट करने का फंक्शन (Regex) ---
//   const validateEmail = (emailStr: string) => {
//     const reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
//     return reg.test(emailStr);
//   };

//   const handleSignup = async () => {
//     // 1. "All fields are required" चेक
//     if (!fullName.trim() || !email.trim() || !phone.trim() || !password.trim() || !city.trim()) {
//       showErrorToast("Missing Info", "All fields are required. Please fill them all.");
//       return;
//     }

//     // 2. ईमेल फॉर्मेट चेक
//     if (!validateEmail(email.trim())) {
//       showErrorToast("Invalid Email", "Please enter a valid email address.");
//       return;
//     }

//     // 3. फोन नंबर 10 डिजिट चेक
//     if (phone.length !== 10) {
//       showErrorToast("Invalid Phone", "Phone number must be exactly 10 digits.");
//       return;
//     }

//     setLoading(true);
//     try {
//       const response = await axios.post(ENDPOINTS.REGISTER, {
//         fullName: fullName.trim(),
//         email: email.trim(),
//         phone: phone.trim(),
//         password: password,
//         city: city.trim()
//       });

//       const data = response.data;
//       if (data.token) {
//         await AsyncStorage.setItem('userToken', data.token);
//         await AsyncStorage.setItem('userData', JSON.stringify(data.user));
//         showSuccessToast("Welcome!", "Registration successful! ❤️");
//         navigation.replace('BottomNavigator');
//       }
//     } catch (error: any) {
//       // API से आने वाला एरर मैसेज दिखाएँ
//       const errorMsg = error.response?.data?.message || "Registration failed. Try again.";
//       showErrorToast("Failed", errorMsg);
//     } finally {
//       setLoading(false);
//     }
//   };

//   return {
//     fullName, setFullName, email, setEmail, phone, setPhone,
//     city, setCity, password, setPassword, loading,
//     isPasswordVisible, setIsPasswordVisible, handleSignup
//   };
// };




















// import { useState, useEffect } from 'react';
// import axios from 'axios';
// import AsyncStorage from '@react-native-async-storage/async-storage';
// import { ENDPOINTS } from '../../../services/apiConfig';
// import { showSuccessToast, showErrorToast } from '../../../utils/showToast';

// export const useSignupLogic = (navigation: any) => {
//   const [fullName, setFullName] = useState("");
//   const [email, setEmail] = useState("");
//   const [phone, setPhone] = useState("");
//   const [password, setPassword] = useState("");
//   const [loading, setLoading] = useState(false);
//   const [isPasswordVisible, setIsPasswordVisible] = useState(false);

//   // --- API डेटा के लिए स्टेट्स ---
//   const [statesList, setStatesList] = useState<any[]>([]); // API से आई पूरी लिस्ट
//   const [citiesList, setCitiesList] = useState<any[]>([]); // API से आई सिटी लिस्ट
  
//   const [selectedStateName, setSelectedStateName] = useState(""); // Dropdown UI के लिए
//   const [selectedStateId, setSelectedStateId] = useState(""); // API भेजने के लिए
  
//   const [selectedCityName, setSelectedCityName] = useState(""); // Dropdown UI के लिए
//   const [selectedCityId, setSelectedCityId] = useState(""); // API भेजने के लिए

//   // 1. स्क्रीन लोड होते ही States फेच करें
//   useEffect(() => {
//     fetchStates();
//   }, []);

//   const fetchStates = async () => {
//     try {
//       const res = await axios.get(ENDPOINTS.GET_STATES);
//       if (res.data.success) {
//         setStatesList(res.data.data);
//       }
//     } catch (e) {
//       console.log("Error fetching states", e);
//     }
//   };

//   // 2. जब State चुनी जाए, तो Cities फेच करें
//   const handleStateSelect = async (stateName: string) => {
//     setSelectedStateName(stateName);
//     const stateObj = statesList.find(s => s.name === stateName);
//     if (stateObj) {
//       setSelectedStateId(stateObj._id);
//       setSelectedCityName(""); // पुरानी सिटी साफ़ करें
//       setSelectedCityId("");
      
//       try {
//         const res = await axios.get(ENDPOINTS.GET_CITIES(stateObj._id));
//         if (res.data.success) {
//           setCitiesList(res.data.data);
//         }
//       } catch (e) {
//         console.log("Error fetching cities", e);
//       }
//     }
//   };

//   const handleCitySelect = (cityName: string) => {
//     setSelectedCityName(cityName);
//     const cityObj = citiesList.find(c => c.name === cityName);
//     if (cityObj) setSelectedCityId(cityObj._id);
//   };

//   const validateEmail = (emailStr: string) => {
//     const reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
//     return reg.test(emailStr);
//   };

//   const handleSignup = async () => {
//     if (!fullName || !email || !phone || !password || !selectedCityId) {
//       showErrorToast("Error", "Please fill all fields including state and city.");
//       return;
//     }

//     if (!validateEmail(email)) {
//       showErrorToast("Error", "Invalid email format.");
//       return;
//     }

//     if (phone.length !== 10) {
//       showErrorToast("Error", "Phone must be 10 digits.");
//       return;
//     }

//     setLoading(true);
//     try {
//       const response = await axios.post(ENDPOINTS.REGISTER, {
//         fullName: fullName.trim(),
//         email: email.trim(),
//         phone: phone.trim(),
//         password: password,
//         city: selectedCityId // यहाँ सिटी की ID जा रही है
//       });

//       if (response.data.token) {
//         await AsyncStorage.setItem('userToken', response.data.token);
//         showSuccessToast("Welcome!", "Registration successful!");
//         navigation.replace('BottomNavigator');
//       }
//     } catch (error: any) {
//       showErrorToast("Failed", error.response?.data?.message || "Something went wrong.");
//     } finally {
//       setLoading(false);
//     }
//   };

//   return {
//     fullName, setFullName, email, setEmail, phone, setPhone, password, setPassword,
//     loading, isPasswordVisible, setIsPasswordVisible,
//     states: statesList.map(s => s.name), // सिर्फ नाम भेजें Dropdown को
//     cities: citiesList.map(c => c.name), // सिर्फ नाम भेजें Dropdown को
//     selectedStateName, handleStateSelect,
//     selectedCityName, handleCitySelect,
//     handleSignup
//   };
// };







import { useState, useEffect } from 'react';
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useDispatch } from 'react-redux'; // Redux Dispatch जोड़ें
import { ENDPOINTS } from '../../../services/apiConfig';
import { showSuccessToast, showErrorToast } from '../../../utils/showToast';
import { setSignIn } from '../../../redux/authSlice'; // Action इम्पोर्ट करें

export const useSignupLogic = (navigation: any) => {
  const dispatch = useDispatch(); // Dispatch हुक

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
      showErrorToast("Error", "Please fill all fields including state and city.");
      return;
    }

    if (!validateEmail(email)) {
      showErrorToast("Error", "Invalid email format.");
      return;
    }

    if (phone.length !== 10) {
      showErrorToast("Error", "Phone must be 10 digits.");
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