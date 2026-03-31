import { useState } from 'react';
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { ENDPOINTS } from '../../services/apiConfig';
import { showSuccessToast, showErrorToast } from '../../utils/showToast';

export const useConfirmScheduleLogic = (navigation: any, car: any) => {
  const [loading, setLoading] = useState(false);

  const handleAcceptSchedule = async () => {
    if (!car?._id) return;

    setLoading(true);
    try {
      const token = await AsyncStorage.getItem('userToken');
      const payload = {
        carId: car._id,
        action: "accept" // जैसा आपने बताया
      };

      const response = await axios.put(ENDPOINTS.INSPECTION_RESPOND, payload, {
        headers: { Authorization: `Bearer ${token}` }
      });

      if (response.data.success) {
        showSuccessToast("Confirmed", "Inspection schedule accepted successfully!");
        // वापस होम या माई एड्स पर भेजें
        navigation.navigate('BottomNavigator', { screen: 'MyAddScreen' });
      }
    } catch (error: any) {
      console.log("Accept Error:", error.response?.data || error.message);
      showErrorToast("Error", error.response?.data?.message || "Failed to confirm schedule.");
    } finally {
      setLoading(false);
    }
  };

  return { loading, handleAcceptSchedule };
};