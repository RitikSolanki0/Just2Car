import { useState, useEffect } from 'react';
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { ENDPOINTS } from '../../services/apiConfig';
import { showErrorToast } from '../../utils/showToast';

export const useScheduleDateLogic = (navigation: any, car: any) => {
  const [loading, setLoading] = useState(false);
  const [selectedDate, setSelectedDate] = useState("");
  const [selectedTime, setSelectedTime] = useState("09:00 AM");
  const [location, setLocation] = useState("Hub");
  const [address, setAddress] = useState("");
  const [reason, setReason] = useState(""); // API के लिए ज़रूरी
  
  const [availableDates, setAvailableDates] = useState<string[]>([]);
  const [availableTimes, setAvailableTimes] = useState(["09:00 AM", "11:00 AM", "01:00 PM", "04:00 PM"]);
  const [showSuccess, setShowSuccess] = useState(false);
  const [showPicker, setShowPicker] = useState(false);

  // 7 दिन की डेट जेनरेट करना
  useEffect(() => {
    const dates = [];
    for (let i = 1; i <= 7; i++) {
      const d = new Date();
      d.setDate(d.getDate() + i);
      const day = String(d.getDate()).padStart(2, '0');
      const month = String(d.getMonth() + 1).padStart(2, '0');
      const year = d.getFullYear();
      dates.push(`${year}-${month}-${day}`); // API को YYYY-MM-DD फॉर्मेट चाहिए
    }
    setAvailableDates(dates);
    setSelectedDate(dates[0]);
  }, []);

  const handleRescheduleSubmit = async () => {
    if (!selectedDate || !selectedTime) {
      showErrorToast("Error", "Please select date and time.");
      return;
    }

    setLoading(true);
    try {
      const token = await AsyncStorage.getItem('userToken');
      const payload = {
        carId: car?._id,
        preferredDate: selectedDate,
        preferredTime: selectedTime,
        reason: reason || "Requesting a more convenient time slot.",
        address: location === "Home" ? address : "At Hub"
      };

      const response = await axios.put(ENDPOINTS.REQUEST_RESCHEDULE, payload, {
        headers: { Authorization: `Bearer ${token}` }
      });

      if (response.data.success) {
        setShowSuccess(true); // सफलता का मोडल दिखाएँ
      }
    } catch (error: any) {
      console.log("Reschedule Error:", error.response?.data || error.message);
      showErrorToast("Failed", error.response?.data?.message || "Could not send request.");
    } finally {
      setLoading(false);
    }
  };

  return {
    loading, selectedDate, setSelectedDate, selectedTime, setSelectedTime,
    location, setLocation, address, setAddress, reason, setReason,
    availableDates, availableTimes, setAvailableTimes, showSuccess, setShowSuccess,
    showPicker, setShowPicker, handleRescheduleSubmit
  };
};