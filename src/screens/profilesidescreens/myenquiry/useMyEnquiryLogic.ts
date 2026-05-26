import { useState, useEffect, useCallback } from 'react';
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { ENDPOINTS } from '../../../services/apiConfig';

export const useMyEnquiryLogic = () => {
  const [enquiries, setEnquiries] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [refreshing, setRefreshing] = useState(false);

  const fetchEnquiries = async () => {
    try {
      const token = await AsyncStorage.getItem('userToken');
      const response = await axios.get(ENDPOINTS.MY_INQUIRIES, {
        headers: { Authorization: `Bearer ${token}` }
      });
      if (response.data.success) {
        setEnquiries(response.data.data);
      }
    } catch (error) {
      console.log("Enquiry Fetch Error:", error);
    } finally {
      setLoading(false);
      setRefreshing(false);
    }
  };

  useEffect(() => {
    fetchEnquiries();
  }, []);

  const onRefresh = useCallback(() => {
    setRefreshing(true);
    fetchEnquiries();
  }, []);

  return { enquiries, loading, refreshing, onRefresh };
};