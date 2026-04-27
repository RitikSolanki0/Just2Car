// import { useNavigation } from '@react-navigation/native';
// import { useDispatch, useSelector } from 'react-redux';
// import axios from 'axios';
// import AsyncStorage from '@react-native-async-storage/async-storage';
// import { RootState } from '../../redux/store';
// import { toggleWishlist } from '../../redux/wishlistSlice';
// import { ENDPOINTS } from '../../services/apiConfig';
// import { showSuccessToast, showErrorToast } from '../../utils/showToast';

// export const useCarCardLogic = (item: any) => {
//   const navigation = useNavigation<any>();
//   const dispatch = useDispatch();

//   // Redux से चेक करें कि आइटम विशलिस्ट में है या नहीं
//   const wishlistItems = useSelector((state: RootState) => state.wishlist.items);
//   const isFavorite = wishlistItems.some((fav: any) => String(fav._id) === String(item._id));

//   // --- कार का पूरा नाम (Brand + Model) ---
//   const getCarName = () => {
//     const brandName = item.brand?.name ? `${item.brand.name} ` : "";
//     const modelName = typeof item.model === 'object' ? item.model.name : item.model;
//     return brandName + modelName;
//   };

//   // --- विशलिस्ट टॉगल API कॉल ---
//   const handleWishlistToggle = async () => {
//     try {
//       const token = await AsyncStorage.getItem('userToken');
      
//       // API Call: {{base_url}}/wishlist/toggle
//       const response = await axios.post(
//         ENDPOINTS.TOGGLE_WISHLIST, 
//         { carId: item._id }, 
//         { headers: { Authorization: `Bearer ${token}` } }
//       );

//       if (response.data.success) {
//         // API सफल होने पर Redux अपडेट करें
//         dispatch(toggleWishlist(item));
        
//         if (response.data.isAdded) {
//           showSuccessToast("Saved", "Car added to your wishlist ❤️");
//         } else {
//           showSuccessToast("Removed", "Car removed from wishlist");
//         }
//       }
//     } catch (error: any) {
//       console.log("Wishlist Toggle Error:", error);
//       showErrorToast("Error", "Could not update wishlist. Please try again.");
//     }
//   };

//   const handlePress = () => {
//     navigation.navigate('CarDetailScreen', { car: item });
//   };

//   return {
//     isFavorite,
//     getCarName,
//     handleWishlistToggle,
//     handlePress,
//   };
// };
















// import { useNavigation } from '@react-navigation/native';
// import { useDispatch, useSelector } from 'react-redux';
// import { useMemo } from 'react'; // useMemo जोड़ें
// import axios from 'axios';
// import AsyncStorage from '@react-native-async-storage/async-storage';
// import { RootState } from '../../redux/store';
// import { toggleWishlist } from '../../redux/wishlistSlice';
// import { ENDPOINTS } from '../../services/apiConfig';
// import { showSuccessToast, showErrorToast } from '../../utils/showToast';

// export const useCarCardLogic = (item: any) => {
//   const navigation = useNavigation<any>();
//   const dispatch = useDispatch();

//   const wishlistItems = useSelector((state: RootState) => state.wishlist.items);

//   // --- 🚀 पक्का लॉजिक: Redux और API दोनों चेक करें ---
//   const isFavorite = useMemo(() => {
//     // 1. चेक करें कि क्या Redux की विशलिस्ट में यह कार है
//     const inRedux = wishlistItems?.some(
//       (fav: any) => fav && String(fav._id) === String(item?._id)
//     );

//     // 2. अगर Redux में नहीं है, तो चेक करें कि क्या API ने इसे true भेजा है
//     return inRedux || item?.isWishlisted;
//   }, [wishlistItems, item?._id, item?.isWishlisted]);

//   const getCarName = () => {
//     if (!item) return "Car Name";
//     const brandName = item.brand?.name ? `${item.brand.name} ` : "";
//     const modelName = typeof item.model === 'object' ? item.model?.name : item.model;
//     return brandName + (modelName || "");
//   };

//   const handleWishlistToggle = async () => {
//     if (!item?._id) return;

//     try {
//       const token = await AsyncStorage.getItem('userToken');
      
//       const response = await axios.post(
//         ENDPOINTS.TOGGLE_WISHLIST, 
//         { carId: item._id }, 
//         { headers: { Authorization: `Bearer ${token}` } }
//       );

//       if (response.data.success) {
//         dispatch(toggleWishlist(item)); // Redux अपडेट
//         showSuccessToast(response.data.isAdded ? "Saved" : "Removed", response.data.message);
//       }
//     } catch (error: any) {
//       console.log("Wishlist Toggle Error:", error);
//       showErrorToast("Error", "Could not update wishlist.");
//     }
//   };

//   const handlePress = () => {
//     if (item) navigation.navigate('CarDetailScreen', { car: item });
//   };

//   return { isFavorite, getCarName, handleWishlistToggle, handlePress };
// };














// import { useNavigation } from '@react-navigation/native';
// import { useDispatch, useSelector } from 'react-redux';
// import { useMemo } from 'react';
// import axios from 'axios';
// import AsyncStorage from '@react-native-async-storage/async-storage';
// import { RootState } from '../../redux/store';
// import { toggleWishlist } from '../../redux/wishlistSlice';
// import { ENDPOINTS } from '../../services/apiConfig';
// import { showSuccessToast, showErrorToast } from '../../utils/showToast';

// export const useCarCardLogic = (item: any) => {
//   const navigation = useNavigation<any>();
//   const dispatch = useDispatch();
//   const wishlistItems = useSelector((state: RootState) => state.wishlist.items);

//   // --- 🚀 सिंक लॉजिक: यह होम स्क्रीन के दिल को लाल रखेगा ---
//   const isFavorite = useMemo(() => {
//     if (!item) return false;
//     const currentId = item._id || item.carId || item.id;

//     return wishlistItems?.some((fav: any) => {
//         const favId = fav._id || fav.carId || fav.id;
//         return String(favId) === String(currentId);
//     });
//   }, [wishlistItems, item]);

//   const getCarName = () => {
//     if (!item) return "Car Name";
//     const brandName = item.brand?.name ? `${item.brand.name} ` : "";
//     const modelName = typeof item.model === 'object' ? item.model?.name : item.model;
//     return brandName + (modelName || "");
//   };

//   const handleWishlistToggle = async () => {
//     const currentId = item._id || item.carId || item.id;
//     if (!currentId) return;

//     try {
//       const token = await AsyncStorage.getItem('userToken');
//       const response = await axios.post(
//         ENDPOINTS.TOGGLE_WISHLIST, 
//         { carId: currentId }, 
//         { headers: { Authorization: `Bearer ${token}` } }
//       );

//       if (response.data.success) {
//         dispatch(toggleWishlist(item));
//         showSuccessToast(response.data.isAdded ? "Saved" : "Removed", response.data.message);
//       }
//     } catch (error: any) {
//       showErrorToast("Error", "Could not update wishlist.");
//     }
//   };

//   const handlePress = () => {
//     if (item) navigation.navigate('CarDetailScreen', { car: item });
//   };

//   return { isFavorite, getCarName, handleWishlistToggle, handlePress };
// };











// import { useNavigation } from '@react-navigation/native';
// import { useDispatch, useSelector } from 'react-redux';
// import { useMemo } from 'react';
// import axios from 'axios';
// import AsyncStorage from '@react-native-async-storage/async-storage';
// import { RootState } from '../../redux/store';
// import { toggleWishlist } from '../../redux/wishlistSlice';
// import { ENDPOINTS } from '../../services/apiConfig';
// import { showSuccessToast, showErrorToast } from '../../utils/showToast';

// export const useCarCardLogic = (item: any) => {
//   const navigation = useNavigation<any>();
//   const dispatch = useDispatch();
//   const wishlistItems = useSelector((state: RootState) => state.wishlist.items);

//   const isFavorite = useMemo(() => {
//     if (!item) return false;
//     const currentId = item._id || item.carId || item.id;
//     return wishlistItems?.some((fav: any) => {
//         const favId = fav._id || fav.carId || fav.id;
//         return String(favId) === String(currentId);
//     });
//   }, [wishlistItems, item]);

//   const getCarName = () => {
//     if (!item) return "Car Name";
//     const brandName = item.brand?.name ? `${item.brand.name} ` : "";
//     const modelName = typeof item.model === 'object' ? item.model?.name : item.model;
//     return brandName + (modelName || "");
//   };

//   const handleWishlistToggle = async () => {
//     const currentId = item._id || item.carId || item.id;
//     if (!currentId) return;

//     try {
//       // --- टोकन निकालें ---
//       const token = await AsyncStorage.getItem('userToken');
      
//       const response = await axios.post(
//         ENDPOINTS.TOGGLE_WISHLIST, 
//         { carId: currentId }, 
//         { 
//           headers: { 
//             'Authorization': `Bearer ${token}`, // टोकन यहाँ जा रहा है
//             'Content-Type': 'application/json' 
//           } 
//         }
//       );

//       if (response.data.success) {
//         dispatch(toggleWishlist(item));
//         showSuccessToast(response.data.isAdded ? "Saved" : "Removed", response.data.message);
//       }
//     } catch (error: any) {
//       console.log("Toggle Error:", error.response?.data || error.message);
//       showErrorToast("Error", "Wishlist update failed.");
//     }
//   };

//   const handlePress = () => {
//     if (item) navigation.navigate('CarDetailScreen', { car: item });
//   };

//   return { isFavorite, getCarName, handleWishlistToggle, handlePress };
// };



















import { useNavigation } from '@react-navigation/native';
import { useDispatch, useSelector } from 'react-redux';
import { useMemo } from 'react';
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { RootState } from '../../redux/store';
import { toggleWishlist } from '../../redux/wishlistSlice';
import { ENDPOINTS } from '../../services/apiConfig';
import { showSuccessToast, showErrorToast } from '../../utils/showToast';

export const useCarCardLogic = (item: any) => {
  const navigation = useNavigation<any>();
  const dispatch = useDispatch();
  const wishlistItems = useSelector((state: RootState) => state.wishlist.items);

  // --- 🚀 अब ये सिर्फ Redux को देखेगा क्योंकि हमने Home Load पर डेटा सिंक कर दिया है ---
  const isFavorite = useMemo(() => {
    if (!item || !wishlistItems) return false;
    const currentId = item._id || item.carId || item.id;

    return wishlistItems.some((fav: any) => 
        fav && String(fav._id || fav.carId || fav.id) === String(currentId)
    );
  }, [wishlistItems, item]);

  const handleWishlistToggle = async () => {
    const currentId = item._id || item.carId || item.id;
    if (!currentId) return;

    try {
      const token = await AsyncStorage.getItem('userToken');
      const response = await axios.post(
        ENDPOINTS.TOGGLE_WISHLIST, 
        { carId: currentId }, 
        { headers: { Authorization: `Bearer ${token}` } }
      );

      if (response.data.success) {
        // Redux अपडेट होगा और 'isFavorite' अपने आप कलर बदल देगा
        dispatch(toggleWishlist(item));
        showSuccessToast(response.data.isAdded ? "Saved" : "Removed", response.data.message);
      }
    } catch (error: any) {
      showErrorToast("Error", "Could not update wishlist.");
    }
  };

  const getCarName = () => {
    if (!item) return "Car Name";
    const brandName = item.brand?.name ? `${item.brand.name} ` : "";
    const modelName = typeof item.model === 'object' ? item.model?.name : item.model;
    return brandName + (modelName || "");
  };

  const handlePress = () => {
    if (item) navigation.navigate('CarDetailScreen', { car: item });
  };

  return { isFavorite, getCarName, handleWishlistToggle, handlePress };
};