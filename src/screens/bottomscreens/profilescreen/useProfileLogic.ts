import { useState, useEffect, useCallback } from 'react';
import { Share, Alert } from 'react-native';
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useDispatch } from 'react-redux';
import { ENDPOINTS } from '../../../services/apiConfig';
import { setSignOut } from '../../../redux/authSlice';

export const useProfileLogic = (navigation: any) => {
  const [profileData, setProfileData] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const dispatch = useDispatch();

  useEffect(() => {
    fetchProfile();
  }, []);

  const fetchProfile = async () => {
    try {
      const token = await AsyncStorage.getItem('userToken');
      const response = await axios.get(ENDPOINTS.PROFILE, {
        headers: { Authorization: `Bearer ${token}` }
      });
      if (response.data.success) {
        setProfileData(response.data.data.user);
        await AsyncStorage.setItem('userData', JSON.stringify(response.data.data.user));
      }
    } catch (error) {
      console.log("Profile Fetch Error:", error);
    } finally {
      setLoading(false);
    }
  };

   useEffect(() => {
    // पहली बार लोड करने के लिए
    fetchProfile();

    // जब भी यूजर वापस इस स्क्रीन पर आए (जैसे UpdateProfile से back आए)
    const unsubscribe = navigation.addListener('focus', () => {
      fetchProfile();
    });

    return unsubscribe; // क्लीनअप
  }, [navigation]);

  const handleShareApp = async () => {
    try {
      await Share.share({
        message: 'Check out Just2Car app for the best car deals! Download now.',
        title: 'Just2Car App',
      });
    } catch (error: any) {
      console.log(error.message);
    }
  };

const handleLogout = () => {
    Alert.alert("Logout", "Are you sure you want to logout from Just2Car?", [
      { text: "Cancel", style: "cancel" },
      {
        text: "Logout",
        style: "destructive",
        onPress: async () => {
          try {
            // 1. पूरी मेमोरी साफ़ करें
            await AsyncStorage.clear(); 
            
            // 2. Redux स्टेट को खाली करें
            // जैसे ही टोकन null होगा, NavigationScreen अपने आप लॉगिन पर भेज देगी
            dispatch(setSignOut()); 
            
            // --- ❌ यहाँ navigation.reset की ज़रूरत नहीं है, इसे हटा दिया गया है ---
          } catch (error) {
            console.log("Logout Error:", error);
          }
        }
      }
    ]);
  };

  const onMenuPress = (id: string) => {
    if (id === 'fav') navigation.navigate('WishlistScreen');
    else if (id === 'share') handleShareApp();
    else if (id === 'about') navigation.navigate('AboutUsScreen');
    else if (id === 'terms') navigation.navigate('TermsAndConditionsScreen');
    else if (id === 'privacy') navigation.navigate('PrivacyPolicyScreen');
    else if (id === 'logout') handleLogout();
  };

  return { profileData, loading, onMenuPress, handleLogout };
};