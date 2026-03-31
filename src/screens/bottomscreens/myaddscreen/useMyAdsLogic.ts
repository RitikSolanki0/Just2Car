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
    // स्क्रीन पर वापस आने पर डेटा रिफ्रेश करने के लिए
    const unsubscribe = navigation.addListener('focus', () => {
      fetchMyAds();
    });
    return unsubscribe;
  }, [navigation]);

  const onRefresh = useCallback(() => {
    setRefreshing(true);
    fetchMyAds();
  }, []);

  // --- स्टेटस के हिसाब से कलर और लेबल (Updated for your Keys) ---
  const getStatusInfo = (status: string) => {
    switch (status) {
      case 'pending': 
        return { color: '#2563EB', bg: '#EFF6FF', label: 'Pending Inspection', icon: 'time-outline' };
      case 'reject': 
        return { color: '#DC2626', bg: '#FEF2F2', label: 'Rejected', icon: 'close-circle' };
      case 'scheduled': 
        return { color: '#EA580C', bg: '#FFF7ED', label: 'Scheduled', icon: 'calendar-outline' };
      case 'user_accepted': 
        return { color: '#059669', bg: '#ECFDF5', label: 'Accepted', icon: 'checkmark-circle' };
      case 'assigned': 
        return { color: '#8B5CF6', bg: '#F5F3FF', label: 'Assigned', icon: 'person-outline' };
      case 'completed': 
        return { color: '#059669', bg: '#ECFDF5', label: 'Completed', icon: 'checkmark-done-circle' };
      case 'failed': 
        return { color: '#DC2626', bg: '#FEF2F2', label: 'Failed', icon: 'alert-circle' };
      default: 
        return { color: 'gray', bg: '#F3F4F6', label: 'Unknown', icon: 'help-circle' };
    }
  };

  return { ads, loading, refreshing, onRefresh, getStatusInfo };
};