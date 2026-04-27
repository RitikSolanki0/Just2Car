import { useState, useEffect, useCallback } from 'react';
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useDispatch, useSelector } from 'react-redux';
import { ENDPOINTS } from '../../../services/apiConfig';
import { toggleWishlist, setWishlist } from '../../../redux/wishlistSlice'; // setWishlist एक्शन ज़रूर बना लें
import { RootState } from '../../../redux/store';
import { showSuccessToast, showErrorToast } from '../../../utils/showToast';

export const useWishlistLogic = (navigation: any) => {
  const [loading, setLoading] = useState(true);
  const [refreshing, setRefreshing] = useState(false);
  const dispatch = useDispatch();
  
  // Redux से डेटा लें
  const wishlistItems = useSelector((state: RootState) => state.wishlist.items);

  // --- 1. API से विशलिस्ट फेच करना ---
  const fetchWishlist = async () => {
    try {
      const token = await AsyncStorage.getItem('userToken');
      const response = await axios.get(ENDPOINTS.GET_WISHLIST, {
        headers: { Authorization: `Bearer ${token}` }
      });

      if (response.data.success) {
        // API से हमें { car: {...} } का एरे मिल रहा है, उसे मैप करके सिर्फ कारों का एरे बनायें
        const cars = response.data.data.map((item: any) => item.car);
        // Redux को अपडेट करें (ताकि पूरी ऐप में सिंक रहे)
        dispatch(setWishlist(cars)); 
      }
    } catch (error) {
      console.log("Fetch Wishlist Error:", error);
    } finally {
      setLoading(false);
      setRefreshing(false);
    }
  };

  useEffect(() => {
    fetchWishlist();
  }, []);

  // --- 2. आइटम रिमूव (Toggle) करना ---
  const handleRemove = async (car: any) => {
    try {
      const token = await AsyncStorage.getItem('userToken');
      const response = await axios.post(ENDPOINTS.TOGGLE_WISHLIST, 
        { carId: car._id }, 
        { headers: { Authorization: `Bearer ${token}` } }
      );

      if (response.data.success) {
        // Redux से हटाएं
        dispatch(toggleWishlist(car));
        showSuccessToast("Removed", "Car removed from your wishlist.");
      }
    } catch (error) {
      showErrorToast("Error", "Could not remove from wishlist.");
    }
  };

  const onRefresh = useCallback(() => {
    setRefreshing(true);
    fetchWishlist();
  }, []);

  return { 
    wishlistItems, 
    loading, 
    refreshing, 
    onRefresh, 
    handleRemove 
  };
};