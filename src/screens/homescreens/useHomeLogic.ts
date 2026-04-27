// import { useState, useEffect } from 'react';
// import axios from 'axios';
// import { ENDPOINTS } from '../../services/apiConfig';

// export const useHomeLogic = () => {
//   const [brands, setBrands] = useState<any[]>([]);
//   const [loadingBrands, setLoadingBrands] = useState(true);

//   useEffect(() => {
//     fetchBrands();
//   }, []);

//   const fetchBrands = async () => {
//     try {
//       const response = await axios.get(ENDPOINTS.GET_BRANDS);
//       if (response.data.success) {
//         setBrands(response.data.data);
//       }
//     } catch (error) {
//       console.log("Error fetching brands:", error);
//     } finally {
//       setLoadingBrands(false);
//     }
//   };

//   return {
//     brands,
//     loadingBrands,
//     refreshHome: fetchBrands // रिफ्रेश करने के लिए फंक्शन
//   };
// };















// import { useState, useEffect, useCallback  } from 'react';
// import axios from 'axios';
// import { PermissionsAndroid, Platform } from 'react-native';
// import AsyncStorage from '@react-native-async-storage/async-storage';
// import Geolocation from 'react-native-geolocation-service'; 
// import { useDispatch } from 'react-redux'; // Dispatch जोड़ें
// import { ENDPOINTS } from '../../services/apiConfig';
// import { setWishlist } from '../../redux/wishlistSlice'; // Action इम्पोर्ट करें

// export const useHomeLogic = () => {
//   const [brands, setBrands] = useState<any[]>([]);
//   const [banners, setBanners] = useState<any[]>([]);
//   const [cars, setCars] = useState<any[]>([]);
//   const [loading, setLoading] = useState(true);
//    const [currentCity, setCurrentCity] = useState("Detecting...");
//   const dispatch = useDispatch();

// //   useEffect(() => {
// //     fetchAllData();
// //   }, []);

// //   const fetchAllData = async () => {
// //     setLoading(true);
// //     try {
// //       const token = await AsyncStorage.getItem('userToken');
// //       const config = { headers: { Authorization: `Bearer ${token}` } };

// //       const [brandRes, bannerRes, carRes] = await Promise.all([
// //         axios.get(ENDPOINTS.GET_BRANDS),
// //         axios.get(ENDPOINTS.GET_BANNERS),
// //         axios.get(ENDPOINTS.GET_CARS, config)
// //       ]);

// //       if (brandRes.data.success) setBrands(brandRes.data.data);
// //       if (bannerRes.data.success) setBanners(bannerRes.data.data);
      
// //       if (carRes.data.success) {
// //         const allCars = carRes.data.data;
// //         setCars(allCars);

// //         // --- 🚀 जादुई हिस्सा: API के 'isWishlisted' डेटा को Redux में सिंक करें ---
// //         const initialWishlist = allCars.filter((car: any) => car.isWishlisted === true);
// //         dispatch(setWishlist(initialWishlist)); 
// //       }

// //     } catch (error) {
// //       console.log("Error fetching home data:", error);
// //     } finally {
// //       setLoading(false);
// //     }
// //   };

// //   return { brands, banners, cars, loading, refreshHome: fetchAllData };
// // };


//   // --- 1. लोकेशन परमिशन मांगना (Android) ---
//   const requestLocationPermission = async () => {
//     if (Platform.OS === 'android') {
//       const granted = await PermissionsAndroid.request(
//         PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION
//       );
//       return granted === PermissionsAndroid.RESULTS.GRANTED;
//     }
//     return true; // iOS के लिए अलग लॉजिक लगता है
//   };

//   // --- 2. GPS कोर्डिनेट्स गेट करना ---
//   const getLocationAndFetchData = async () => {
//     const hasPermission = await requestLocationPermission();

//     if (!hasPermission) {
//       console.log("Location permission denied");
//       fetchAllData(null, null); // बिना लोकेशन के डेटा लाएं
//       return;
//     }

//     Geolocation.getCurrentPosition(
//       (position) => {
//         const { latitude, longitude } = position.coords;
//         console.log("📍 Location Found:", latitude, longitude);
//         fetchAllData(latitude, longitude); // कोर्डिनेट्स के साथ डेटा लाएं
//       },
//       (error) => {
//         console.log("Location Error:", error);
//         fetchAllData(null, null);
//       },
//       { enableHighAccuracy: true, timeout: 15000, maximumAge: 10000 }
//     );
//   };

//   // --- 3. डेटा फेच करना (Lat/Long के साथ) ---
//   const fetchAllData = async (lat: number | null, lng: number | null) => {
//     setLoading(true);
//     try {
//       const token = await AsyncStorage.getItem('userToken');
//       const config = { 
//         headers: { Authorization: `Bearer ${token}` },
//         params: { lat, lng } // API को lat/lng भेजें
//       };

//       const [brandRes, bannerRes, carRes] = await Promise.all([
//         axios.get(ENDPOINTS.GET_BRANDS),
//         axios.get(ENDPOINTS.GET_BANNERS),
//         axios.get(ENDPOINTS.GET_CARS, config) // यहाँ जा रहा है lat/long
//       ]);

//       if (brandRes.data.success) setBrands(brandRes.data.data);
//       if (bannerRes.data.success) setBanners(bannerRes.data.data);
      
//       if (carRes.data.success) {
//         setCars(carRes.data.data);
//         // बैकएंड से डिटेक्ट हुई सिटी का नाम सेट करें (अगर बैकएंड भेज रहा है)
//         // मान लेते हैं कि पहली कार की सिटी ही यूजर की सिटी है
//         if (carRes.data.data.length > 0) {
//             setCurrentCity(carRes.data.data[0].city?.name || "give permission");
//         }
//       }
//     } catch (error) {
//       console.log("Fetch Error:", error);
//     } finally {
//       setLoading(false);
//     }
//   };

//   useEffect(() => {
//     getLocationAndFetchData();
//   }, []);

//   return { brands, banners, cars, loading, currentCity, refreshHome: getLocationAndFetchData };
// };
























// import { useState, useEffect, useCallback } from 'react';
// import { PermissionsAndroid, Platform } from 'react-native';
// import axios from 'axios';
// import AsyncStorage from '@react-native-async-storage/async-storage';
// import Geolocation from 'react-native-geolocation-service'; 
// import { useDispatch } from 'react-redux'; 
// import { ENDPOINTS } from '../../services/apiConfig';
// import { setWishlist } from '../../redux/wishlistSlice'; 

// export const useHomeLogic = () => {
//   const [brands, setBrands] = useState<any[]>([]);
//   const [banners, setBanners] = useState<any[]>([]);
//   const [cars, setCars] = useState<any[]>([]);
//   const [loading, setLoading] = useState(true);
  
//   // --- 🚀 डिफ़ॉल्ट रूप से "Detecting..." दिखाएँ ---
//   const [currentCity, setCurrentCity] = useState("Detecting...");
  
//   const dispatch = useDispatch();

//   // --- 1. लोकेशन परमिशन मांगना (Android) ---
//   const requestLocationPermission = async () => {
//     if (Platform.OS === 'android') {
//       try {
//         const granted = await PermissionsAndroid.request(
//           PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION
//         );
//         return granted === PermissionsAndroid.RESULTS.GRANTED;
//       } catch (err) {
//         return false;
//       }
//     }
//     return true; // iOS के लिए अलग से Info.plist सेटअप चाहिए होता है
//   };

//   // --- 2. GPS कोर्डिनेट्स गेट करना ---
//   const getLocationAndFetchData = async () => {
//     const hasPermission = await requestLocationPermission();

//     if (!hasPermission) {
//       console.log("📍 Location permission denied");
//       // --- 🚀 फिक्स: परमिशन न मिलने पर "All India" सेट करें ---
//       setCurrentCity("All India");
//       fetchAllData(null, null); 
//       return;
//     }

//     Geolocation.getCurrentPosition(
//       (position) => {
//         const { latitude, longitude } = position.coords;
//         console.log("📍 GPS Coords Found:", latitude, longitude);
//         fetchAllData(latitude, longitude); 
//       },
//       (error) => {
//         console.log("📍 Location Error:", error.message);
//         setCurrentCity("All India"); // एरर आने पर भी "All India" दिखाएँ
//         fetchAllData(null, null);
//       },
//       { enableHighAccuracy: true, timeout: 15000, maximumAge: 10000 }
//     );
//   };

//   // --- 3. डेटा फेच करना (Lat/Long + Wishlist Sync के साथ) ---
//   const fetchAllData = async (lat: number | null, lng: number | null) => {
//     setLoading(true);
//     try {
//       const token = await AsyncStorage.getItem('userToken');
//       const config = { 
//         headers: { Authorization: `Bearer ${token}` },
//         params: { lat, lng } 
//       };

//       console.log("📡 Fetching Home Data with Params:", config.params);

//       const [brandRes, bannerRes, carRes] = await Promise.all([
//         axios.get(ENDPOINTS.GET_BRANDS),
//         axios.get(ENDPOINTS.GET_BANNERS),
//         axios.get(ENDPOINTS.GET_CARS, config) 
//       ]);

//       if (brandRes.data.success) setBrands(brandRes.data.data);
//       if (bannerRes.data.success) setBanners(bannerRes.data.data);
      
//       if (carRes.data.success) {
//         const allCars = carRes.data.data;
//         setCars(allCars);

//         // --- 🚀 विशलिस्ट सिंक लॉजिक (Redux) ---
//         const wishlistedFromAPI = allCars.filter((car: any) => car.isWishlisted === true);
//         dispatch(setWishlist(wishlistedFromAPI));

//         // --- 🚀 सिटी डिस्प्ले लॉजिक ---
//         if (lat && lng && allCars.length > 0) {
//             // अगर कोर्डिनेट्स भेजे थे, तो पहली कार का शहर ही यूजर का शहर है
//             setCurrentCity(allCars[0].city?.name || "All India");
//         } else {
//             // अगर लोकेशन नहीं मिली या उस लोकेशन पर कारें नहीं हैं
//             setCurrentCity("All India");
//         }
//       }
//     } catch (error) {
//       console.log("❌ Fetching Error:", error);
//       setCurrentCity("All India");
//     } finally {
//       setLoading(false);
//     }
//   };

//   useEffect(() => {
//     getLocationAndFetchData();
//   }, []);

//   return { 
//     brands, 
//     banners, 
//     cars, 
//     loading, 
//     currentCity, 
//     refreshHome: getLocationAndFetchData 
//   };
// };




















// import { useState, useEffect, useCallback } from 'react';
// import { PermissionsAndroid, Platform, Linking, Alert } from 'react-native';
// import axios from 'axios';
// import AsyncStorage from '@react-native-async-storage/async-storage';
// import Geolocation from 'react-native-geolocation-service'; 
// import { useDispatch } from 'react-redux'; 
// import { ENDPOINTS } from '../../services/apiConfig';
// import { setWishlist } from '../../redux/wishlistSlice'; 

// export const useHomeLogic = () => {
//   const [brands, setBrands] = useState<any[]>([]);
//   const [banners, setBanners] = useState<any[]>([]);
//   const [cars, setCars] = useState<any[]>([]);
//   const [loading, setLoading] = useState(true);
//   const [currentCity, setCurrentCity] = useState("Detecting...");
  
//   const dispatch = useDispatch();

//   // --- 1. लोकेशन परमिशन मांगना (Smart Logic) ---
//   const requestLocationPermission = async () => {
//     if (Platform.OS === 'android') {
//       try {
//         const granted = await PermissionsAndroid.request(
//           PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION
//         );

//         // अगर परमिशन मिल गई
//         if (granted === PermissionsAndroid.RESULTS.GRANTED) {
//           return true;
//         }

//         // अगर यूजर ने "Never Ask Again" (हमेशा के लिए मना) कर दिया है
//         if (granted === PermissionsAndroid.RESULTS.NEVER_ASK_AGAIN) {
//           Alert.alert(
//             "Location Permission",
//             "You have permanently denied location access. Please enable it from settings to see cars in your city.",
//             [
//               { text: "Cancel", style: "cancel" },
//               { text: "Open Settings", onPress: () => Linking.openSettings() }
//             ]
//           );
//         }
//         return false;
//       } catch (err) {
//         return false;
//       }
//     }
//     return true; 
//   };

//   // --- 2. GPS कोर्डिनेट्स गेट करना ---
//   const getLocationAndFetchData = async () => {
//     // अगर यूजर दोबारा क्लिक करता है, तो उसे एहसास होना चाहिए कि काम हो रहा है
//     setCurrentCity("Detecting..."); 

//     const hasPermission = await requestLocationPermission();

//     if (!hasPermission) {
//       console.log("📍 Location permission denied");
//       setCurrentCity("All India");
//       fetchAllData(null, null); 
//       return;
//     }

//     Geolocation.getCurrentPosition(
//       (position) => {
//         const { latitude, longitude } = position.coords;
//         console.log("📍 GPS Coords Found:", latitude, longitude);
//         fetchAllData(latitude, longitude); 
//       },
//       (error) => {
//         console.log("📍 Location Error:", error.message);
//         setCurrentCity("All India");
//         fetchAllData(null, null);
//       },
//       { enableHighAccuracy: true, timeout: 15000, maximumAge: 10000 }
//     );
//   };

//   // --- 3. डेटा फेच करना (Lat/Long + Wishlist Sync) ---
//   const fetchAllData = async (lat: number | null, lng: number | null) => {
//     setLoading(true);
//     try {
//       const token = await AsyncStorage.getItem('userToken');
//       const config = { 
//         headers: { Authorization: `Bearer ${token}` },
//         params: { lat, lng } 
//       };

//       const [brandRes, bannerRes, carRes] = await Promise.all([
//         axios.get(ENDPOINTS.GET_BRANDS),
//         axios.get(ENDPOINTS.GET_BANNERS),
//         axios.get(ENDPOINTS.GET_CARS, config) 
//       ]);

//       if (brandRes.data.success) setBrands(brandRes.data.data);
//       if (bannerRes.data.success) setBanners(bannerRes.data.data);
      
//       if (carRes.data.success) {
//         const allCars = carRes.data.data;
//         setCars(allCars);

//         const wishlistedFromAPI = allCars.filter((car: any) => car.isWishlisted === true);
//         dispatch(setWishlist(wishlistedFromAPI));

//         if (lat && lng && allCars.length > 0) {
//             setCurrentCity(allCars[0].city?.name || "All India");
//         } else {
//             setCurrentCity("All India");
//         }
//       }
//     } catch (error) {
//       console.log("❌ Fetching Error:", error);
//       setCurrentCity("All India");
//     } finally {
//       setLoading(false);
//     }
//   };

//   useEffect(() => {
//     getLocationAndFetchData();
//   }, []);

//   return { 
//     brands, 
//     banners, 
//     cars, 
//     loading, 
//     currentCity, 
//     refreshHome: getLocationAndFetchData 
//   };
// };

























// import { useState, useEffect, useCallback, useRef } from 'react';
// import { PermissionsAndroid, Platform, Linking, Alert } from 'react-native';
// import axios from 'axios';
// import AsyncStorage from '@react-native-async-storage/async-storage';
// import Geolocation from 'react-native-geolocation-service'; 
// import { useDispatch } from 'react-redux'; 
// import { ENDPOINTS } from '../../services/apiConfig';
// import { setWishlist } from '../../redux/wishlistSlice'; 

// export const useHomeLogic = () => {
//   const [brands, setBrands] = useState<any[]>([]);
//   const [banners, setBanners] = useState<any[]>([]);
//   const [cars, setCars] = useState<any[]>([]);
//   const [loading, setLoading] = useState(true);
//   const [loadingCars, setLoadingCars] = useState(false); // सिर्फ कारों के लिए अलग लोडर
//   const [currentCity, setCurrentCity] = useState("Detecting...");
  
//   const dispatch = useDispatch();
//   const isInitialDataLoaded = useRef(false); // ट्रैक करेगा कि Brands/Banners लोड हो चुके हैं या नहीं

//   // --- 1. लोकेशन परमिशन लॉजिक ---
//   const requestLocationPermission = async () => {
//     if (Platform.OS === 'android') {
//       try {
//         const granted = await PermissionsAndroid.request(PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION);
//         if (granted === PermissionsAndroid.RESULTS.GRANTED) return true;
//         if (granted === PermissionsAndroid.RESULTS.NEVER_ASK_AGAIN) {
//           Alert.alert("Location Permission", "Please enable location from settings.", [
//             { text: "Cancel" }, { text: "Open Settings", onPress: () => Linking.openSettings() }
//           ]);
//         }
//         return false;
//       } catch (err) { return false; }
//     }
//     return true; 
//   };

//   // --- 2. STATIC DATA FETCH (Brands & Banners) - सिर्फ एक बार चलेगा ---
//   const fetchStaticData = useCallback(async () => {
//     if (isInitialDataLoaded.current) return; // अगर पहले से लोड है तो दोबारा कॉल न करें

//     try {
//       console.log("📡 Fetching Static Data (Brands & Banners)...");
//       const [brandRes, bannerRes] = await Promise.all([
//         axios.get(ENDPOINTS.GET_BRANDS),
//         axios.get(ENDPOINTS.GET_BANNERS)
//       ]);
//       if (brandRes.data.success) setBrands(brandRes.data.data);
//       if (bannerRes.data.success) setBanners(bannerRes.data.data);
      
//       isInitialDataLoaded.current = true; // मार्क करें कि डेटा आ गया
//     } catch (error) {
//       console.log("❌ Static Fetch Error:", error);
//     }
//   }, []);

//   // --- 3. DYNAMIC CARS FETCH (Location Dependent) ---
//   const fetchCarsData = useCallback(async (lat: number | null, lng: number | null) => {
//     setLoadingCars(true);
//     try {
//       const token = await AsyncStorage.getItem('userToken');
//       const config = { 
//         headers: { Authorization: `Bearer ${token}` },
//         params: { lat, lng } 
//       };

//       console.log("🚗 Fetching Cars for location:", lat, lng);
//       const carRes = await axios.get(ENDPOINTS.GET_CARS, config);
      
//       if (carRes.data.success) {
//         const allCars = carRes.data.data;
//         setCars(allCars);

//         // विशलिस्ट सिंक
//         const wishlistedFromAPI = allCars.filter((car: any) => car.isWishlisted === true);
//         dispatch(setWishlist(wishlistedFromAPI));

//         // सिटी नाम अपडेट
//         if (lat && lng && allCars.length > 0) {
//             setCurrentCity(allCars[0].city?.name || "All India");
//         } else {
//             setCurrentCity("All India");
//         }
//       }
//     } catch (error) {
//       console.log("❌ Cars Fetch Error:", error);
//       setCurrentCity("All India");
//     } finally {
//       setLoadingCars(false);
//       setLoading(false); // पहली बार का मुख्य लोडर बंद करें
//     }
//   }, [dispatch]);

//   // --- 4. GPS & Permission Orchestrator ---
//   const handleLocationUpdate = async () => {
//     setCurrentCity("Detecting...");
//     const hasPermission = await requestLocationPermission();

//     if (!hasPermission) {
//       setCurrentCity("All India");
//       fetchCarsData(null, null);
//       return;
//     }

//     Geolocation.getCurrentPosition(
//       (position) => {
//         const { latitude, longitude } = position.coords;
//         fetchCarsData(latitude, longitude);
//       },
//       (error) => {
//         setCurrentCity("All India");
//         fetchCarsData(null, null);
//       },
//       { enableHighAccuracy: true, timeout: 15000, maximumAge: 10000 }
//     );
//   };

//   // --- 🚀 INITIAL LOAD (जब ऐप पहली बार खुले) ---
//   useEffect(() => {
//     fetchStaticData(); // ब्रैंड और बैनर लाओ (सिर्फ एक बार)
//     handleLocationUpdate(); // लोकेशन के हिसाब से कारें लाओ
//   }, []);

//   return { 
//     brands, 
//     banners, 
//     cars, 
//     loading, 
//     loadingCars, // कारों की लोडिंग के लिए अलग स्टेट
//     currentCity, 
//     refreshHome: handleLocationUpdate 
//   };
// };





















import { useState, useEffect, useCallback, useRef } from 'react';
import { PermissionsAndroid, Platform, Linking, Alert } from 'react-native';
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Geolocation from 'react-native-geolocation-service'; 
import { useDispatch } from 'react-redux'; 
import { ENDPOINTS } from '../../services/apiConfig';
import { setWishlist } from '../../redux/wishlistSlice'; 

export const useHomeLogic = () => {
  const [brands, setBrands] = useState<any[]>([]);
  const [banners, setBanners] = useState<any[]>([]);
  const [cars, setCars] = useState<any[]>([]);
  
  // --- 🚀 अलग-अलग लोडिंग स्टेट्स ताकि ऊपर वाला हिस्सा जल्दी दिखे ---
  const [loadingStatic, setLoadingStatic] = useState(true); // For Brands & Banners
  const [loadingCars, setLoadingCars] = useState(true);     // For Car List
  
  const [currentCity, setCurrentCity] = useState("Detecting...");
  const dispatch = useDispatch();

  // --- 1. STATIC DATA FETCH (सबसे तेज़ - ब्रैंड्स और बैनर) ---
  const fetchStaticData = useCallback(async () => {
    try {
      console.log("📡 Fetching Static Data (Instantly)...");
      const [brandRes, bannerRes] = await Promise.all([
        axios.get(ENDPOINTS.GET_BRANDS),
        axios.get(ENDPOINTS.GET_BANNERS)
      ]);
      if (brandRes.data.success) setBrands(brandRes.data.data);
      if (bannerRes.data.success) setBanners(bannerRes.data.data);
    } catch (error) {
      console.log("❌ Static Fetch Error:", error);
    } finally {
      setLoadingStatic(false); // जैसे ही ये आए, ऊपर का हिस्सा रेंडर हो जाए
    }
  }, []);

  // --- 2. DYNAMIC CARS FETCH (लोकेशन पर आधारित) ---
  const fetchCarsData = useCallback(async (lat: number | null, lng: number | null) => {
    setLoadingCars(true);
    try {
      const token = await AsyncStorage.getItem('userToken');
      const config = { 
        headers: { Authorization: `Bearer ${token}` },
        params: { lat, lng } 
      };

      const carRes = await axios.get(ENDPOINTS.GET_CARS, config);
      
      if (carRes.data.success) {
        const allCars = carRes.data.data;
        setCars(allCars);
        dispatch(setWishlist(allCars.filter((car: any) => car.isWishlisted === true)));

        if (lat && lng && allCars.length > 0) {
            setCurrentCity(allCars[0].city?.name || "All India");
        } else {
            setCurrentCity("All India");
        }
      }
    } catch (error) {
      setCurrentCity("All India");
    } finally {
      setLoadingCars(false);
    }
  }, [dispatch]);

  // --- 3. GPS & Permission logic ---
  const handleLocationUpdate = async () => {
    const hasPermission = await requestLocationPermission();
    if (!hasPermission) {
      setCurrentCity("All India");
      fetchCarsData(null, null);
      return;
    }

    Geolocation.getCurrentPosition(
      (position) => fetchCarsData(position.coords.latitude, position.coords.longitude),
      (error) => {
        setCurrentCity("All India");
        fetchCarsData(null, null);
      },
      { enableHighAccuracy: true, timeout: 15000, maximumAge: 10000 }
    );
  };

  const requestLocationPermission = async () => {
    if (Platform.OS === 'android') {
        const granted = await PermissionsAndroid.request(PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION);
        if (granted === PermissionsAndroid.RESULTS.GRANTED) return true;
        return false;
    }
    return true;
  };

  // --- 🚀 मुख्य बदलाव: दोनों को अलग-अलग फायर करें ---
  useEffect(() => {
    // ब्रैंड्स और बैनर को बिना किसी इंतज़ार के तुरंत बुलाओ
    fetchStaticData(); 
    
    // लोकेशन और कारों को अपने हिसाब से चलने दो (Permission/GPS में समय लग सकता है)
    handleLocationUpdate(); 
  }, []);

  return { 
    brands, 
    banners, 
    cars, 
    loadingStatic, // ऊपर के लिए
    loadingCars,   // नीचे के लिए
    currentCity, 
    refreshHome: handleLocationUpdate 
  };
};