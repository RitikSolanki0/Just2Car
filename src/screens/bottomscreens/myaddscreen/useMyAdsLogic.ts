// import { useState, useEffect, useCallback } from 'react';
// import axios from 'axios';
// import AsyncStorage from '@react-native-async-storage/async-storage';
// import { ENDPOINTS } from '../../../services/apiConfig';
// import { Colors } from '../../../theme/colors';

// export const useMyAdsLogic = (navigation: any) => {
//   const [ads, setAds] = useState<any[]>([]);
//   const [loading, setLoading] = useState(true);
//   const [refreshing, setRefreshing] = useState(false);

//   const fetchMyAds = async () => {
//     try {
//       const token = await AsyncStorage.getItem('userToken');
//       const response = await axios.get(ENDPOINTS.MY_CARS, {
//         headers: { Authorization: `Bearer ${token}` }
//       });
//       if (response.data.success) {
//         setAds(response.data.cars);
//       }
//     } catch (error) {
//       console.log("Error fetching my ads:", error);
//     } finally {
//       setLoading(false);
//       setRefreshing(false);
//     }
//   };

//   useEffect(() => {
//     fetchMyAds();
//     // स्क्रीन पर वापस आने पर डेटा रिफ्रेश करने के लिए
//     const unsubscribe = navigation.addListener('focus', () => {
//       fetchMyAds();
//     });
//     return unsubscribe;
//   }, [navigation]);

//   const onRefresh = useCallback(() => {
//     setRefreshing(true);
//     fetchMyAds();
//   }, []);

// const getStatusInfo = (ad: any) => {
//     // 1. सबसे पहले मुख्य स्टेटस चेक करें
//     if (ad.status === 'rejected') {
//       return { color: '#DC2626', bg: '#FEF2F2', label: 'Ad Rejected', icon: 'close-circle' };
//     }
//     if (ad.status === 'sold') {
//       return { color: '#6B7280', bg: '#F3F4F6', label: 'Sold Out', icon: 'checkmark-done' };
//     }
//     if (ad.status === 'live') {
//       return { color: '#059669', bg: '#ECFDF5', label: 'Ad Live', icon: 'checkmark-done-circle' };
//     }

//     // 2. अगर लाइव या रिजेक्ट नहीं है, तो इंस्पेक्शन स्टेटस दिखाएँ
//     switch (ad.inspectionStatus) {
//       case 'pending': 
//         return { color: '#2563EB', bg: '#EFF6FF', label: 'Waiting for Inspection', icon: 'time-outline' };
//       case 'scheduled': 
//         return { color: '#EA580C', bg: '#FFF7ED', label: 'Action Required', icon: 'alert-circle' };
//       case 'assigned': 
//         return { color: '#8B5CF6', bg: '#F5F3FF', label: 'Inspector Assigned', icon: 'person-outline' };
//       default: 
//         return { color: 'gray', bg: '#F3F4F6', label: 'Pending', icon: 'help-circle' };
//     }
//   };

//   return { ads, loading, refreshing, onRefresh, getStatusInfo };
// };












import { useState, useEffect, useCallback } from 'react';
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { ENDPOINTS } from '../../../services/apiConfig';
import { Colors } from '../../../theme/colors';

export const useMyAdsLogic = (navigation: any) => {
  const [ads, setAds] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [refreshing, setRefreshing] = useState(false);

  const fetchMyAds = async () => {
    try {
      const token = await AsyncStorage.getItem('userToken');
      const response = await axios.get(ENDPOINTS.MY_CARS, {
        headers: { Authorization: `Bearer ${token}` }
      });
      if (response.data.success) {
        setAds(response.data.cars);
      }
    } catch (error) {
      console.log("Error fetching my ads:", error);
    } finally {
      setLoading(false);
      setRefreshing(false);
    }
  };

  useEffect(() => {
    fetchMyAds();
    const unsubscribe = navigation.addListener('focus', () => {
      fetchMyAds();
    });
    return unsubscribe;
  }, [navigation]);

  const onRefresh = useCallback(() => {
    setRefreshing(true);
    fetchMyAds();
  }, []);

  // --- 🚀 फिक्स: यह फंक्शन अब पूरे 'ad' ऑब्जेक्ट को चेक करेगा ---
  const getStatusInfo = (ad: any) => {
    if (!ad) return { color: 'gray', bg: '#eee', label: 'N/A', icon: 'help-circle' };

    // 1. सबसे पहले मुख्य स्टेटस चेक करें (Highest Priority)
    if (ad.status === 'rejected') {
      return { color: '#DC2626', bg: '#FEF2F2', label: 'Ad Rejected', icon: 'close-circle' };
    }
    if (ad.status === 'sold') {
      return { color: '#6B7280', bg: '#F3F4F6', label: 'Sold Out', icon: 'checkmark-done' };
    }
    if (ad.status === 'live') {
      return { color: '#059669', bg: '#ECFDF5', label: 'Ad Live', icon: 'checkmark-done-circle' };
    }

    // 2. अगर मुख्य स्टेटस 'pending_verification' है, तब इंस्पेक्शन स्टेटस दिखाएँ
    switch (ad.inspectionStatus) {
      case 'pending': 
        return { color: '#2563EB', bg: '#EFF6FF', label: 'Waiting for Inspection', icon: 'time-outline' };
      case 'scheduled': 
        return { color: '#EA580C', bg: '#FFF7ED', label: 'Action Required', icon: 'alert-circle' };
      case 'assigned': 
        return { color: '#8B5CF6', bg: '#F5F3FF', label: 'Inspector Assigned', icon: 'person-outline' };
      case 'completed': 
        return { color: '#059669', bg: '#ECFDF5', label: 'Inspection Done', icon: 'checkmark-done' };
      default: 
        return { color: 'gray', bg: '#F3F4F6', label: 'Processing', icon: 'help-circle' };
    }
  };

  return { ads, loading, refreshing, onRefresh, getStatusInfo };
};