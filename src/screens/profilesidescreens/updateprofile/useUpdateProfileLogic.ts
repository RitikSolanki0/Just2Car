import { useState } from 'react';
import { Alert } from 'react-native';
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';
import ImagePicker from 'react-native-image-crop-picker';
import { useDispatch, useSelector } from 'react-redux';
import { ENDPOINTS } from '../../../services/apiConfig';
import { RootState } from '../../../redux/store';
import { setSignIn } from '../../../redux/authSlice'; // डेटा अपडेट के लिए
import { showSuccessToast, showErrorToast } from '../../../utils/showToast';

export const useUpdateProfileLogic = (navigation: any) => {
  const dispatch = useDispatch();
  const { userData, userToken } = useSelector((state: RootState) => state.auth);

  // --- States ---
  const [fullName, setFullName] = useState(userData?.fullName || "");
  const [phone, setPhone] = useState(userData?.phone || "");
  const [profileImage, setProfileImage] = useState<any>(null); // नई चुनी गई इमेज
  const [loading, setLoading] = useState(false);

  // --- 1. इमेज सेलेक्ट करने का फंक्शन ---
  const pickImage = () => {
    ImagePicker.openPicker({
      width: 400,
      height: 400,
      cropping: true,
      mediaType: 'photo',
    }).then(image => {
      setProfileImage(image);
    }).catch(e => console.log(e));
  };

  // --- 2. प्रोफाइल अपडेट करने का फंक्शन ---
  const handleUpdate = async () => {
    if (!fullName.trim() || !phone.trim()) {
      showErrorToast("Error", "Name and Phone cannot be empty.");
      return;
    }

    setLoading(true);
    try {
      const formData = new FormData();
      formData.append('fullName', fullName);
      formData.append('phone', phone);

      // अगर यूज़र ने नई इमेज चुनी है
      if (profileImage) {
        formData.append('profileImage', {
          uri: profileImage.path,
          type: profileImage.mime,
          name: 'profile.jpg',
        } as any);
      }

      const response = await axios.put(ENDPOINTS.PROFILE, formData, {
        headers: {
          'Authorization': `Bearer ${userToken}`,
          'Content-Type': 'multipart/form-data',
        },
      });

      if (response.data.success) {
        const updatedUser = response.data.data.user;
        
        // 1. AsyncStorage अपडेट करें
        await AsyncStorage.setItem('userData', JSON.stringify(updatedUser));
        
        // 2. Redux अपडेट करें (ताकि पूरी ऐप में नया नाम/फोटो दिखे)
        dispatch(setSignIn({ token: userToken!, user: updatedUser }));

        showSuccessToast("Success", "Profile updated successfully! ❤️");
        navigation.goBack();
      }
    } catch (error: any) {
      console.log("Update Error:", error.response?.data || error.message);
      showErrorToast("Failed", error.response?.data?.message || "Update failed");
    } finally {
      setLoading(false);
    }
  };

  return {
    fullName, setFullName,
    phone, setPhone,
    profileImage,
    currentImage: userData?.profileImage,
    email: userData?.email, // सिर्फ दिखाने के लिए
    loading,
    pickImage,
    handleUpdate
  };
};