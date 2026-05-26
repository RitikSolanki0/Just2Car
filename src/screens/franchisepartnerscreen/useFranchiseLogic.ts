// import { useState, useEffect } from 'react';
// import axios from 'axios';
// import AsyncStorage from '@react-native-async-storage/async-storage';
// import { ENDPOINTS } from '../../services/apiConfig';
// import { showSuccessToast, showErrorToast } from '../../utils/showToast';

// export const useFranchiseLogic = (navigation: any) => {
//   const [formData, setFormData] = useState({
//     name: '',
//     phone: '',
//     email: '',
//     message: '',
//     state: { id: '', name: '' },
//     city: { id: '', name: '' }
//   });

//   const [statesList, setStatesList] = useState<any[]>([]);
//   const [citiesList, setCitiesList] = useState<any[]>([]);
//   const [loading, setLoading] = useState(false);

//   useEffect(() => {
//     fetchStates();
//   }, []);

//   const fetchStates = async () => {
//     try {
//       const res = await axios.get(ENDPOINTS.GET_STATES);
//       if (res.data.success) setStatesList(res.data.data);
//     } catch (e) { console.log(e); }
//   };

//   const onStateChange = async (name: string) => {
//     const item = statesList.find(s => s.name === name);
//     if (item) {
//       setFormData({ ...formData, state: { id: item._id, name: item.name }, city: { id: '', name: '' } });
//       try {
//         const res = await axios.get(ENDPOINTS.GET_CITIES(item._id));
//         if (res.data.success) setCitiesList(res.data.data);
//       } catch (e) { console.log(e); }
//     }
//   };

//   const onCityChange = (name: string) => {
//     const item = citiesList.find(c => c.name === name);
//     if (item) setFormData({ ...formData, city: { id: item._id, name: item.name } });
//   };

//   const handleSubmit = async () => {
//     const { name, phone, email, state, city, message } = formData;
    
//     if (!name || !phone || !email || !state.id || !city.id) {
//       showErrorToast("Error", "Please fill all required fields.");
//       return;
//     }

//     setLoading(true);
//     try {
//       const token = await AsyncStorage.getItem('userToken');
//       const response = await axios.post(ENDPOINTS.FRANCHISE_INQUIRY, {
//         name,
//         phone,
//         email,
//         message,
//         state: state.id,
//         city: city.id
//       }, {
//         headers: { Authorization: `Bearer ${token}` }
//       });

//       if (response.data.success) {
//         showSuccessToast("Success", response.data.message);
//         navigation.goBack();
//       }
//     } catch (error: any) {
//       showErrorToast("Failed", error.response?.data?.message || "Something went wrong.");
//     } finally {
//       setLoading(false);
//     }
//   };

//   return { formData, setFormData, statesList, citiesList, loading, onStateChange, onCityChange, handleSubmit };
// };



















import { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { ENDPOINTS } from '../../services/apiConfig';
import { showSuccessToast, showErrorToast } from '../../utils/showToast';
import { RootState } from '../../redux/store';

export const useFranchiseLogic = (navigation: any) => {
  // 🚀 1. Redux se User Data uthao
  const userData = useSelector((state: RootState) => state.auth.userData);

  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    message: '',
    state: { id: '', name: '' },
    city: { id: '', name: '' }
  });

  const [statesList, setStatesList] = useState<any[]>([]);
  const [citiesList, setCitiesList] = useState<any[]>([]);
  const [loading, setLoading] = useState(false);

  // 🚀 2. App khulte hi pre-fill karo but editable rakho
  useEffect(() => {
    if (userData) {
      setFormData(prev => ({
        ...prev,
        name: userData.fullName || '',
        phone: userData.phone || '',
        email: userData.email || '',
      }));
    }
    fetchStates();
  }, [userData]);

  const fetchStates = async () => {
    try {
      const res = await axios.get(ENDPOINTS.GET_STATES);
      if (res.data.success) setStatesList(res.data.data);
    } catch (e) { console.log(e); }
  };

  const onStateChange = async (name: string) => {
    const item = statesList.find(s => s.name === name);
    if (item) {
      setFormData(prev => ({ ...prev, state: { id: item._id, name: item.name }, city: { id: '', name: '' } }));
      try {
        const res = await axios.get(ENDPOINTS.GET_CITIES(item._id));
        if (res.data.success) setCitiesList(res.data.data);
      } catch (e) { console.log(e); }
    }
  };

  const onCityChange = (name: string) => {
    const item = citiesList.find(c => c.name === name);
    if (item) setFormData(prev => ({ ...prev, city: { id: item._id, name: item.name } }));
  };

  const handleSubmit = async () => {
    const { name, phone, email, state, city, message } = formData;
    
    // Basic Validation
    if (!name.trim() || !phone || !email.trim() || !state.id || !city.id) {
      showErrorToast("Incomplete Form", "Please provide all details so we can reach you.");
      return;
    }

    if (phone.length !== 10) {
        showErrorToast("Invalid Phone", "Mobile number must be 10 digits.");
        return;
    }

    setLoading(true);
    try {
      const token = await AsyncStorage.getItem('userToken');
      const response = await axios.post(ENDPOINTS.FRANCHISE_INQUIRY, {
        name, phone, email, message,
        state: state.id,
        city: city.id
      }, {
        headers: { Authorization: `Bearer ${token}` }
      });

      if (response.data.success) {
        showSuccessToast("Inquiry Sent", "Our team will contact you shortly!");
        navigation.goBack();
      }
    } catch (error: any) {
      showErrorToast("Error", error.response?.data?.message || "Failed to submit.");
    } finally {
      setLoading(false);
    }
  };

  return { formData, setFormData, statesList, citiesList, loading, onStateChange, onCityChange, handleSubmit };
};