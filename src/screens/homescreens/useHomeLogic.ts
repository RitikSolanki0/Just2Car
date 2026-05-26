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

//   // --- 🚀 अलग-अलग लोडिंग स्टेट्स ताकि ऊपर वाला हिस्सा जल्दी दिखे ---
//   const [loadingStatic, setLoadingStatic] = useState(true); // For Brands & Banners
//   const [loadingCars, setLoadingCars] = useState(true);     // For Car List

//   const [currentCity, setCurrentCity] = useState("Detecting...");
//   const dispatch = useDispatch();

//   // --- 1. STATIC DATA FETCH (सबसे तेज़ - ब्रैंड्स और बैनर) ---
//   const fetchStaticData = useCallback(async () => {
//     try {
//       console.log("📡 Fetching Static Data (Instantly)...");
//       const [brandRes, bannerRes] = await Promise.all([
//         axios.get(ENDPOINTS.GET_BRANDS),
//         axios.get(ENDPOINTS.GET_BANNERS)
//       ]);
//       if (brandRes.data.success) setBrands(brandRes.data.data);
//       if (bannerRes.data.success) setBanners(bannerRes.data.data);
//     } catch (error) {
//       console.log("❌ Static Fetch Error:", error);
//     } finally {
//       setLoadingStatic(false); // जैसे ही ये आए, ऊपर का हिस्सा रेंडर हो जाए
//     }
//   }, []);

//   // --- 2. DYNAMIC CARS FETCH (लोकेशन पर आधारित) ---
//   const fetchCarsData = useCallback(async (lat: number | null, lng: number | null) => {
//     setLoadingCars(true);
//     try {
//       const token = await AsyncStorage.getItem('userToken');
//       const config = { 
//         headers: { Authorization: `Bearer ${token}` },
//         params: { lat, lng } 
//       };

//       const carRes = await axios.get(ENDPOINTS.GET_CARS, config);

//       if (carRes.data.success) {
//         const allCars = carRes.data.data;
//         setCars(allCars);
//         dispatch(setWishlist(allCars.filter((car: any) => car.isWishlisted === true)));

//         if (lat && lng && allCars.length > 0) {
//             setCurrentCity(allCars[0].city?.name || "All India");
//         } else {
//             setCurrentCity("All India");
//         }
//       }
//     } catch (error) {
//       setCurrentCity("All India");
//     } finally {
//       setLoadingCars(false);
//     }
//   }, [dispatch]);

//   // --- 3. GPS & Permission logic ---
//   const handleLocationUpdate = async () => {
//     const hasPermission = await requestLocationPermission();
//     if (!hasPermission) {
//       setCurrentCity("All India");
//       fetchCarsData(null, null);
//       return;
//     }

//     Geolocation.getCurrentPosition(
//       (position) => fetchCarsData(position.coords.latitude, position.coords.longitude),
//       (error) => {
//         setCurrentCity("All India");
//         fetchCarsData(null, null);
//       },
//       { enableHighAccuracy: true, timeout: 15000, maximumAge: 10000 }
//     );
//   };

//   const requestLocationPermission = async () => {
//     if (Platform.OS === 'android') {
//         const granted = await PermissionsAndroid.request(PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION);
//         if (granted === PermissionsAndroid.RESULTS.GRANTED) return true;
//         return false;
//     }
//     return true;
//   };

//   // --- 🚀 मुख्य बदलाव: दोनों को अलग-अलग फायर करें ---
//   useEffect(() => {
//     // ब्रैंड्स और बैनर को बिना किसी इंतज़ार के तुरंत बुलाओ
//     fetchStaticData(); 

//     // लोकेशन और कारों को अपने हिसाब से चलने दो (Permission/GPS में समय लग सकता है)
//     handleLocationUpdate(); 
//   }, []);

//   return { 
//     brands, 
//     banners, 
//     cars, 
//     loadingStatic, // ऊपर के लिए
//     loadingCars,   // नीचे के लिए
//     currentCity, 
//     refreshHome: handleLocationUpdate 
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

//   const [loadingStatic, setLoadingStatic] = useState(true); 
//   const [loadingCars, setLoadingCars] = useState(true);     

//   const [currentCity, setCurrentCity] = useState("Detecting...");
//   const dispatch = useDispatch();

//   // --- 1. परमिशन मांगना (यह पॉपअप दिखाता है) ---
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
//     return true;
//   };

//   // --- 2. सिर्फ चेक करना (No Popup) ---
//   const checkPermissionSilent = async () => {
//     if (Platform.OS === 'android') {
//       return await PermissionsAndroid.check(PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION);
//     }
//     return true;
//   };

//   // --- 3. मुख्य नेविगेटर: तय करेगा कि पॉपअप दिखाना है या नहीं ---
//   const handleLocationUpdate = async (isManual = false) => {
//     if (isManual) setCurrentCity("Detecting...");

//     let hasPermission = false;

//     if (isManual) {
//       // यूजर ने खुद क्लिक किया है -> पॉपअप दिखाओ
//       hasPermission = await requestLocationPermission();
//       // अगर 'Never ask again' है तो सेटिंग्स खोलने का सुझाव दें
//       const status = await PermissionsAndroid.check(PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION);
//       if (!status && isManual) {
//           // यहाँ आप Linking.openSettings() वाला अलर्ट लगा सकते हैं
//       }
//     } else {
//       // ऑटोमैटिक लोड/रिफ्रेश हो रहा है
//       const firstTime = await AsyncStorage.getItem('isLocationFirstTime');

//       if (firstTime === null) {
//         // --- 🚀 यह हिस्सा पहली बार ऐप ओपन होने पर चलेगा ---
//         console.log("🎯 First time app open: Showing permission popup");
//         hasPermission = await requestLocationPermission();
//         await AsyncStorage.setItem('isLocationFirstTime', 'done'); // फ्लैग सेट करें
//       } else {
//         // रिफ्रेश या बाद की मौकों पर सिर्फ चेक करो (No Popup)
//         hasPermission = await checkPermissionSilent();
//       }
//     }

//     if (!hasPermission) {
//       setCurrentCity("All India");
//       fetchCarsData(null, null); 
//       return;
//     }

//     Geolocation.getCurrentPosition(
//       (position) => fetchCarsData(position.coords.latitude, position.coords.longitude),
//       (error) => {
//         setCurrentCity("All India");
//         fetchCarsData(null, null);
//       },
//       { enableHighAccuracy: true, timeout: 15000, maximumAge: 10000 }
//     );
//   };

//   // ... बाकी fetchStaticData और fetchCarsData कोड वही रहेगा ...

//   const fetchStaticData = useCallback(async () => {
//     try {
//       const [brandRes, bannerRes] = await Promise.all([
//         axios.get(ENDPOINTS.GET_BRANDS),
//         axios.get(ENDPOINTS.GET_BANNERS)
//       ]);
//       if (brandRes.data.success) setBrands(brandRes.data.data);
//       if (bannerRes.data.success) setBanners(bannerRes.data.data);
//     } catch (error) { console.log(error); } finally { setLoadingStatic(false); }
//   }, []);

//   const onManualCitySearch = async (cityName: string) => {
//   setLoadingCars(true);
//   setCurrentCity(cityName); // तुरंत UI अपडेट करें
//   try {
//     const token = await AsyncStorage.getItem('userToken');
//     const response = await axios.get(ENDPOINTS.GET_CARS, {
//       headers: { Authorization: `Bearer ${token}` },
//       params: { search: cityName } // आपकी API में 'search' पैरामीटर शहर भी ढूंढता है
//     });
//     if (response.data.success) {
//       setCars(response.data.data);
//     }
//   } catch (error) {
//     console.log(error);
//   } finally {
//     setLoadingCars(false);
//   }
// };

//   const fetchCarsData = useCallback(async (lat: number | null, lng: number | null) => {
//     setLoadingCars(true);
//     try {
//       const token = await AsyncStorage.getItem('userToken');
//       const config = { headers: { Authorization: `Bearer ${token}` }, params: { lat, lng } };
//       const carRes = await axios.get(ENDPOINTS.GET_CARS, config);
//       if (carRes.data.success) {
//         const allCars = carRes.data.data;
//         setCars(allCars);
//         dispatch(setWishlist(allCars.filter((car: any) => car.isWishlisted === true)));
//         setCurrentCity(lat && lng && allCars.length > 0 ? allCars[0].city?.name : "All India");
//       }
//     } catch (error) { setCurrentCity("All India"); } finally { setLoadingCars(false); }
//   }, [dispatch]);

//   useEffect(() => {
//     fetchStaticData(); 
//     handleLocationUpdate(false); // स्टार्टअप पर कॉल
//   }, []);

//   return { 
//     brands, banners, cars, loadingStatic, loadingCars, currentCity, onManualCitySearch, 
//     refreshHome: () => handleLocationUpdate(false), 
//     onLocationPress: () => handleLocationUpdate(true) 
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

//   const [loadingStatic, setLoadingStatic] = useState(true); 
//   const [loadingCars, setLoadingCars] = useState(true);     

//   const [currentCity, setCurrentCity] = useState("Detecting...");
//   const dispatch = useDispatch();

//   // --- 1. लोकेशन परमिशन मांगना (Popup) ---
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
//     return true;
//   };

//   // --- 2. सिर्फ चेक करना (No Popup) ---
//   const checkPermissionSilent = async () => {
//     if (Platform.OS === 'android') {
//       return await PermissionsAndroid.check(PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION);
//     }
//     return true;
//   };

//   // --- 3. GPS से डेटा लाना ---
//   const handleLocationUpdate = async (isManual = false) => {
//     if (isManual) setCurrentCity("Detecting...");

//     let hasPermission = false;

//     if (isManual) {
//       hasPermission = await requestLocationPermission();
//     } else {
//       const firstTime = await AsyncStorage.getItem('isLocationFirstTime');
//       if (firstTime === null) {
//         hasPermission = await requestLocationPermission();
//         await AsyncStorage.setItem('isLocationFirstTime', 'done');
//       } else {
//         hasPermission = await checkPermissionSilent();
//       }
//     }

//     if (!hasPermission) {
//       setCurrentCity("All India");
//       fetchCarsData(null, null); 
//       return;
//     }

//     Geolocation.getCurrentPosition(
//       (position) => {
//         fetchCarsData(position.coords.latitude, position.coords.longitude);
//       },
//       (error) => {
//         console.log("GPS Error:", error);
//         setCurrentCity("All India");
//         fetchCarsData(null, null);
//       },
//       { enableHighAccuracy: true, timeout: 15000, maximumAge: 10000 }
//     );
//   };

//   // --- 4. STATIC DATA FETCH (Brands & Banners) ---
//   const fetchStaticData = useCallback(async () => {
//     try {
//       const [brandRes, bannerRes] = await Promise.all([
//         axios.get(ENDPOINTS.GET_BRANDS),
//         axios.get(ENDPOINTS.GET_BANNERS)
//       ]);
//       if (brandRes.data.success) setBrands(brandRes.data.data);
//       if (bannerRes.data.success) setBanners(bannerRes.data.data);
//     } catch (error) {
//       console.log("❌ Static Fetch Error:", error);
//     } finally {
//       setLoadingStatic(false);
//     }
//   }, []);

//   // --- 5. DYNAMIC CARS FETCH (With Persistence Check) ---
//   const fetchCarsData = useCallback(async (lat: number | null, lng: number | null, manualCity?: string) => {
//     setLoadingCars(true);
//     try {
//       const token = await AsyncStorage.getItem('userToken');

//       // अगर manualCity है तो सर्च पैरामीटर भेजें, वरना lat/lng
//       const params = manualCity ? { search: manualCity } : { lat, lng };

//       const config = { 
//         headers: { Authorization: `Bearer ${token}` },
//         params: params
//       };

//       const carRes = await axios.get(ENDPOINTS.GET_CARS, config);

//       if (carRes.data.success) {
//         const allCars = carRes.data.data;
//         setCars(allCars);
//         dispatch(setWishlist(allCars.filter((car: any) => car.isWishlisted === true)));

//         // सिटी नाम सेट करने का लॉजिक
//         if (manualCity) {
//             setCurrentCity(manualCity); // अगर यूजर ने टाइप किया है तो वही दिखाओ
//         } else if (lat && lng && allCars.length > 0) {
//             setCurrentCity(allCars[0].city?.name || "All India");
//         } else {
//             setCurrentCity("All India");
//         }
//       }
//     } catch (error) {
//       console.log("❌ Fetch Error:", error);
//       setCurrentCity(manualCity || "All India");
//     } finally {
//       setLoadingCars(false);
//     }
//   }, [dispatch]);

//   // --- 6. 🚀 मैन्युअल सिटी सर्च (Locking Logic) ---
//   const onManualCitySearch = async (cityName: string) => {
//     if (!cityName.trim()) return;
//     setLoadingCars(true);
//     setCurrentCity(cityName);
//     try {
//       // --- लोकेशन को मेमोरी में लॉक करें ---
//       await AsyncStorage.setItem('lockedCity', cityName); 

//       const token = await AsyncStorage.getItem('userToken');
//       const response = await axios.get(ENDPOINTS.GET_CARS, {
//         headers: { Authorization: `Bearer ${token}` },
//         params: { search: cityName } 
//       });
//       if (response.data.success) {
//         setCars(response.data.data);
//       }
//     } catch (error) {
//       console.log("Manual Search Error:", error);
//     } finally {
//       setLoadingCars(false);
//     }
//   };

//   // --- 7. 🚀 GPS पर वापस लौटने का फंक्शन ---
//   const resetToGPS = async () => {
//     console.log("🔓 Unlocking location and resetting to GPS");
//     await AsyncStorage.removeItem('lockedCity'); // लॉक हटाएँ
//     handleLocationUpdate(true); // GPS से डेटा लाएँ
//   };

//   // --- 8. INITIAL LOAD (Check for Lock) ---
//   useEffect(() => {
//     const initApp = async () => {
//       fetchStaticData();

//       // चेक करें कि क्या यूजर ने पहले से कोई सिटी लॉक की है?
//       const savedCity = await AsyncStorage.getItem('lockedCity');
//       if (savedCity) {
//         console.log("🔒 App opened with locked city:", savedCity);
//         setCurrentCity(savedCity);
//         fetchCarsData(null, null, savedCity);
//       } else {
//         handleLocationUpdate(false);
//       }
//     };
//     initApp();
//   }, []);

//   return { 
//     brands, 
//     banners, 
//     cars, 
//     loadingStatic, 
//     loadingCars, 
//     currentCity, 
//     onManualCitySearch,
//     resetToGPS, // इसे भी रिटर्न करें
//     refreshHome: async () => {
//         const savedCity = await AsyncStorage.getItem('lockedCity');
//         if (savedCity) {
//             fetchCarsData(null, null, savedCity);
//         } else {
//             handleLocationUpdate(false);
//         }
//     }, 
//     onLocationPress: () => handleLocationUpdate(true) 
//   };
// };






















// import { useState, useEffect, useCallback, useRef } from 'react';
// import { PermissionsAndroid, Platform } from 'react-native';
// import axios from 'axios';
// import AsyncStorage from '@react-native-async-storage/async-storage';
// import Geolocation from 'react-native-geolocation-service'; 
// import { useDispatch, useSelector } from 'react-redux'; 
// import { ENDPOINTS } from '../../services/apiConfig';
// import { setWishlist } from '../../redux/wishlistSlice'; 
// import { RootState } from '../../redux/store';
// import { setStaticData } from '../../redux/dataSlice'; // 👈 Import setStaticData

// export const useHomeLogic = () => {
//   const dispatch = useDispatch();

//   // 🚀 Redux se data aur status lo
//   const { brands, banners, isStaticDataLoaded } = useSelector((state: RootState) => state.data);

//   const [cars, setCars] = useState<any[]>([]);
//   const [loadingCars, setLoadingCars] = useState(true);     
//   const [currentCity, setCurrentCity] = useState("Detecting...");

//   const lastFetchRef = useRef(""); 
//   const carsRef = useRef<any[]>([]);

//   // --- 1. STATIC DATA FETCH (Optimized) ---
//   const fetchStaticData = useCallback(async () => {
//     // 🛡️ Agar Redux mein data pehle se hai, toh API call mat karo
//     if (isStaticDataLoaded) {
//       console.log("✅ Static Data already in Redux, skipping API calls.");
//       return;
//     }

//     try {
//       console.log("📡 Fetching Static Data for the first time...");
//       const [brandRes, bannerRes, topModelsRes] = await Promise.all([
//         axios.get(ENDPOINTS.GET_BRANDS),
//         axios.get(ENDPOINTS.GET_BANNERS),
//         axios.get(ENDPOINTS.GET_TOP_MODELS)
//       ]);

//       if (brandRes.data.success && bannerRes.data.success) {
//         // 🚀 Data ko Redux mein save kar do
//         dispatch(setStaticData({
//           brands: brandRes.data.data,
//           banners: bannerRes.data.data,
//           topModels: topModelsRes.data.data
//         }));
//       }
//     } catch (error) {
//       console.log("❌ Static Fetch Error:", error);
//     }
//   }, [isStaticDataLoaded, dispatch]);

//   // --- 2. DYNAMIC CARS FETCH (Wait for GPS/City) ---
//   const fetchCarsData = useCallback(async (lat: number | null, lng: number | null, manualCity?: string) => {
//     const currentRequestKey = JSON.stringify({ lat, lng, manualCity });

//     if (lastFetchRef.current === currentRequestKey && carsRef.current.length > 0) {
//       setLoadingCars(false);
//       return;
//     }

//     setLoadingCars(true);
//     try {
//       const token = await AsyncStorage.getItem('userToken');
//       const params = manualCity ? { search: manualCity } : { lat, lng };

//       const carRes = await axios.get(ENDPOINTS.GET_CARS, {
//         headers: { Authorization: `Bearer ${token}` },
//         params: params
//       });

//       if (carRes.data.success) {
//         const allCars = carRes.data.data;
//         setCars(allCars);
//         carsRef.current = allCars;
//         lastFetchRef.current = currentRequestKey;

//         dispatch(setWishlist(allCars.filter((car: any) => car.isWishlisted === true)));

//         if (manualCity) setCurrentCity(manualCity);
//         else if (lat && lng && allCars.length > 0) setCurrentCity(allCars[0].city?.name || "All India");
//         else setCurrentCity("All India");
//       }
//     } catch (error) {
//       console.log('❌ Fetch Error:', error);
//       setCurrentCity(manualCity || 'All India');
//     } finally {
//       setLoadingCars(false);
//     }
//   }, [dispatch]);

//   const handleLocationUpdate = async (isManual = false) => {
//     if (isManual) setCurrentCity("Detecting...");
//     const hasPermission = await PermissionsAndroid.check(PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION);
//     if (!hasPermission && isManual) {
//        const granted = await PermissionsAndroid.request(PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION);
//        if (granted !== 'granted') { fetchCarsData(null, null); return; }
//     } else if (!hasPermission) { fetchCarsData(null, null); return; }

//     Geolocation.getCurrentPosition(
//       (position) => fetchCarsData(position.coords.latitude, position.coords.longitude),
//       (error) => { console.log(error); fetchCarsData(null, null); },
//       { enableHighAccuracy: true, timeout: 15000, maximumAge: 10000 }
//     );
//   };

//   const onManualCitySearch = async (cityName: string) => {
//     if (!cityName.trim()) return;
//     await AsyncStorage.setItem('lockedCity', cityName); 
//     fetchCarsData(null, null, cityName);
//   };

//   const resetToGPS = async () => {
//     await AsyncStorage.removeItem('lockedCity');
//     lastFetchRef.current = ""; 
//     carsRef.current = [];
//     handleLocationUpdate(true);
//   };

//   const refreshHome = async () => {
//     lastFetchRef.current = ""; 
//     carsRef.current = [];
//     const savedCity = await AsyncStorage.getItem('lockedCity');
//     if (savedCity) fetchCarsData(null, null, savedCity);
//     else handleLocationUpdate(false);
//   };

//   useEffect(() => {
//     const initApp = async () => {
//       await fetchStaticData(); // Ye ab Redux check karega
//       const savedCity = await AsyncStorage.getItem('lockedCity');
//       if (savedCity) {
//         setCurrentCity(savedCity);
//         fetchCarsData(null, null, savedCity);
//       } else {
//         handleLocationUpdate(false);
//       }
//     };
//     initApp();
//   }, [fetchStaticData]);

//   return { 
//     brands, // Redux wala data automatic yahan aayega
//     banners, // Redux wala data automatic yahan aayega
//     cars, 
//     loadingStatic: !isStaticDataLoaded, 
//     loadingCars, 
//     currentCity, 
//     onManualCitySearch, resetToGPS, refreshHome,
//     onLocationPress: () => handleLocationUpdate(true) 
//   };
// };








// import { useState, useEffect, useCallback, useRef } from 'react';
// import { PermissionsAndroid, Platform } from 'react-native';
// import axios from 'axios';
// import AsyncStorage from '@react-native-async-storage/async-storage';
// import Geolocation from 'react-native-geolocation-service'; 
// import { useDispatch, useSelector } from 'react-redux'; 
// import { ENDPOINTS } from '../../services/apiConfig';
// import { setWishlist } from '../../redux/wishlistSlice'; 
// import { RootState } from '../../redux/store';
// import { setStaticData } from '../../redux/dataSlice';

// export const useHomeLogic = () => {
//   const dispatch = useDispatch();
//   const { brands, banners, isStaticDataLoaded } = useSelector((state: RootState) => state.data);

//   const [cars, setCars] = useState<any[]>([]);
//   const [loadingCars, setLoadingCars] = useState(true);     
//   const [currentCity, setCurrentCity] = useState("Detecting...");

//   const lastFetchRef = useRef(""); 
//   const carsRef = useRef<any[]>([]);
//   // 🚀 Naya Lock: Isse pata chalega ki App load ho rahi hai
//   const isInitializing = useRef(false); 

//   const fetchStaticData = useCallback(async () => {
//     if (isStaticDataLoaded) return;
//     try {
//       const [brandRes, bannerRes, topModelsRes] = await Promise.all([
//         axios.get(ENDPOINTS.GET_BRANDS),
//         axios.get(ENDPOINTS.GET_BANNERS),
//         axios.get(ENDPOINTS.GET_TOP_MODELS)
//       ]);
//       if (brandRes.data.success && bannerRes.data.success) {
//         dispatch(setStaticData({
//           brands: brandRes.data.data,
//           banners: bannerRes.data.data,
//           topModels: topModelsRes.data.data
//         }));
//       }
//     } catch (error) { console.log("❌ Static Error:", error); }
//   }, [isStaticDataLoaded, dispatch]);

//   const fetchCarsData = useCallback(async (lat: number | null, lng: number | null, manualCity?: string) => {
//     const currentRequestKey = JSON.stringify({ lat, lng, manualCity });

//     // 🛡️ Double Call Guard
//     if (lastFetchRef.current === currentRequestKey && carsRef.current.length > 0) {
//       setLoadingCars(false);
//       return;
//     }

//     setLoadingCars(true);
//     try {
//       const token = await AsyncStorage.getItem('userToken');
//       const params = manualCity ? { search: manualCity } : { lat, lng };
//       const carRes = await axios.get(ENDPOINTS.GET_CARS, {
//         headers: { Authorization: `Bearer ${token}` },
//         params: params
//       });

//       if (carRes.data.success) {
//         const allCars = carRes.data.data;
//         setCars(allCars);
//         carsRef.current = allCars;
//         lastFetchRef.current = currentRequestKey;
//         dispatch(setWishlist(allCars.filter((car: any) => car.isWishlisted === true)));

//         if (manualCity) setCurrentCity(manualCity);
//         else if (lat && lng && allCars.length > 0) setCurrentCity(allCars[0].city?.name || "All India");
//         else setCurrentCity("All India");
//       }
//     } catch (error) { console.log('❌ Fetch Error:', error); }
//     finally { setLoadingCars(false); }
//   }, [dispatch]);

//   const handleLocationUpdate = async (isManual = false) => {
//     if (isManual) setCurrentCity("Detecting...");

//     const hasPermission = await PermissionsAndroid.check(PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION);
//     if (!hasPermission && isManual) {
//        const granted = await PermissionsAndroid.request(PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION);
//        if (granted !== 'granted') { fetchCarsData(null, null); return; }
//     } else if (!hasPermission) {
//        fetchCarsData(null, null);
//        return;
//     }

//     Geolocation.getCurrentPosition(
//       (position) => fetchCarsData(position.coords.latitude, position.coords.longitude),
//       (error) => { fetchCarsData(null, null); },
//       { enableHighAccuracy: true, timeout: 15000, maximumAge: 10000 }
//     );
//   };

//   const onManualCitySearch = async (cityName: string) => {
//     if (!cityName.trim()) return;
//     await AsyncStorage.setItem('lockedCity', cityName); 
//     fetchCarsData(null, null, cityName);
//   };

//   const resetToGPS = async () => {
//     await AsyncStorage.removeItem('lockedCity');
//     lastFetchRef.current = ""; 
//     carsRef.current = [];
//     handleLocationUpdate(true);
//   };

//   const refreshHome = async () => {
//     lastFetchRef.current = ""; 
//     carsRef.current = [];
//     const savedCity = await AsyncStorage.getItem('lockedCity');
//     if (savedCity) fetchCarsData(null, null, savedCity);
//     else handleLocationUpdate(false);
//   };

//   // 🚀 FIXED INITIALIZATION
//   useEffect(() => {
//     const initApp = async () => {
//       // Agar pehle se load ho raha hai toh ruk jao
//       if (isInitializing.current) return;
//       isInitializing.current = true;

//       await fetchStaticData();

//       const savedCity = await AsyncStorage.getItem('lockedCity');
//       if (savedCity) {
//         console.log("🏙️ Loading Locked City:", savedCity);
//         setCurrentCity(savedCity);
//         await fetchCarsData(null, null, savedCity);
//       } else {
//         console.log("🛰️ Triggering GPS Auto-detect");
//         await handleLocationUpdate(false);
//       }

//       isInitializing.current = false;
//     };

//     initApp();
//   }, [fetchStaticData]); // fetchCarsData ko yahan se hataya taaki loop na bane

//   return { 
//     brands, banners, cars, loadingStatic: !isStaticDataLoaded, 
//     loadingCars, currentCity, 
//     onManualCitySearch, resetToGPS, refreshHome,
//     onLocationPress: () => handleLocationUpdate(true) 
//   };
// };




































// locatiion me search ke bad ka code

// import { useState, useEffect, useCallback, useRef } from 'react';
// import { PermissionsAndroid, Platform } from 'react-native';
// import axios from 'axios';
// import AsyncStorage from '@react-native-async-storage/async-storage';
// import Geolocation from 'react-native-geolocation-service'; 
// import { useDispatch, useSelector } from 'react-redux'; 
// import { ENDPOINTS } from '../../services/apiConfig';
// import { setWishlist } from '../../redux/wishlistSlice'; 
// import { RootState } from '../../redux/store';
// import { setStaticData } from '../../redux/dataSlice';
// import { setGlobalCity } from '../../redux/locationSlice'; // 👈 1. Action import kiya

// export const useHomeLogic = () => {
//   const dispatch = useDispatch();

//   // 🚀 2. Ab currentCity seedha Redux se lo (Global Sync)
//   const currentCity = useSelector((state: RootState) => state.location.currentCity);
//   const { brands, banners, isStaticDataLoaded } = useSelector((state: RootState) => state.data);

//   const [cars, setCars] = useState<any[]>([]);
//   const [loadingCars, setLoadingCars] = useState(true);     

//   const lastFetchRef = useRef(""); 
//   const carsRef = useRef<any[]>([]);
//   const isInitializing = useRef(false); 

//   const fetchStaticData = useCallback(async () => {
//     if (isStaticDataLoaded) return;
//     try {
//       const [brandRes, bannerRes, topModelsRes] = await Promise.all([
//         axios.get(ENDPOINTS.GET_BRANDS),
//         axios.get(ENDPOINTS.GET_BANNERS),
//         axios.get(ENDPOINTS.GET_TOP_MODELS)
//       ]);
//       if (brandRes.data.success && bannerRes.data.success) {
//         dispatch(setStaticData({
//           brands: brandRes.data.data,
//           banners: bannerRes.data.data,
//           topModels: topModelsRes.data.data
//         }));
//       }
//     } catch (error) { console.log("❌ Static Error:", error); }
//   }, [isStaticDataLoaded, dispatch]);

//   const fetchCarsData = useCallback(async (lat: number | null, lng: number | null, manualCity?: string) => {
//     const currentRequestKey = JSON.stringify({ lat, lng, manualCity });

//     if (lastFetchRef.current === currentRequestKey && carsRef.current.length > 0) {
//       setLoadingCars(false);
//       return;
//     }

//     setLoadingCars(true);
//     try {
//       const token = await AsyncStorage.getItem('userToken');
//       const params = manualCity ? { search: manualCity } : { lat, lng };
//       const carRes = await axios.get(ENDPOINTS.GET_CARS, {
//         headers: { Authorization: `Bearer ${token}` },
//         params: params
//       });

//       if (carRes.data.success) {
//         const allCars = carRes.data.data;
//         setCars(allCars);
//         carsRef.current = allCars;
//         lastFetchRef.current = currentRequestKey;
//         dispatch(setWishlist(allCars.filter((car: any) => car.isWishlisted === true)));

//         // 🚀 3. Jab data mil jaye, tab Redux City update karo
//         if (manualCity) {
//             dispatch(setGlobalCity(manualCity)); 
//         } else if (lat && lng && allCars.length > 0) {
//             const detectedCity = allCars[0].city?.name || "All India";
//             dispatch(setGlobalCity(detectedCity)); 
//         } else {
//             dispatch(setGlobalCity("All India"));
//         }
//       }
//     } catch (error) { 
//         console.log('❌ Fetch Error:', error); 
//         // Error hone par bhi manual input ko respect karo
//         if(manualCity) dispatch(setGlobalCity(manualCity));
//     }
//     finally { setLoadingCars(false); }
//   }, [dispatch]);

//   const handleLocationUpdate = async (isManual = false) => {
//     if (isManual) dispatch(setGlobalCity("Detecting...")); // 🚀 4. Redux update

//     const hasPermission = await PermissionsAndroid.check(PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION);
//     if (!hasPermission && isManual) {
//        const granted = await PermissionsAndroid.request(PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION);
//        if (granted !== 'granted') { fetchCarsData(null, null); return; }
//     } else if (!hasPermission) {
//        dispatch(setGlobalCity("All India")); // 🚀 5. Redux update
//        fetchCarsData(null, null);
//        return;
//     }

//     Geolocation.getCurrentPosition(
//       (position) => fetchCarsData(position.coords.latitude, position.coords.longitude),
//       (error) => { fetchCarsData(null, null); },
//       { enableHighAccuracy: true, timeout: 15000, maximumAge: 10000 }
//     );
//   };

//   const onManualCitySearch = async (cityName: string) => {
//     if (!cityName.trim()) return;
//     await AsyncStorage.setItem('lockedCity', cityName); 
//     dispatch(setGlobalCity(cityName)); // 🚀 6. Manual search par turant Redux update
//     fetchCarsData(null, null, cityName);
//   };

//   const resetToAllIndia = async () => {
//   await AsyncStorage.removeItem('lockedCity');

//   lastFetchRef.current = "";
//   carsRef.current = [];

//   dispatch(setGlobalCity("All India"));

//   // बिना city, बिना GPS -> All India fetch
//   fetchCarsData(null, null);
// };

//   const resetToGPS = async () => {
//     await AsyncStorage.removeItem('lockedCity');
//     lastFetchRef.current = ""; 
//     carsRef.current = [];
//     handleLocationUpdate(true);
//   };

//   const refreshHome = async () => {
//     lastFetchRef.current = ""; 
//     carsRef.current = [];
//     const savedCity = await AsyncStorage.getItem('lockedCity');
//     if (savedCity) fetchCarsData(null, null, savedCity);
//     else handleLocationUpdate(false);
//   };

//   useEffect(() => {
//     const initApp = async () => {
//       if (isInitializing.current) return;
//       isInitializing.current = true;

//       await fetchStaticData();

//       const savedCity = await AsyncStorage.getItem('lockedCity');
//       if (savedCity) {
//         console.log("🏙️ Loading Locked City:", savedCity);
//         dispatch(setGlobalCity(savedCity)); // 🚀 7. Storage se city mili toh Redux update
//         await fetchCarsData(null, null, savedCity);
//       } else {
//         console.log("🛰️ Triggering GPS Auto-detect");
//         await handleLocationUpdate(false);
//       }

//       isInitializing.current = false;
//     };

//     initApp();
//   }, [fetchStaticData]); 

//   return { 
//     brands, banners, cars, loadingStatic: !isStaticDataLoaded, 
//     loadingCars, currentCity, // Ye ab Redux value hi return karega
//     onManualCitySearch, resetToGPS, resetToAllIndia, refreshHome,
//     onLocationPress: () => handleLocationUpdate(true) 
//   };
// };





















// import { useState, useEffect, useCallback, useRef } from 'react';
// import { PermissionsAndroid, Platform } from 'react-native';
// import axios from 'axios';
// import AsyncStorage from '@react-native-async-storage/async-storage';
// import Geolocation from 'react-native-geolocation-service';
// import { useDispatch, useSelector } from 'react-redux';
// import { ENDPOINTS } from '../../services/apiConfig';
// import { setWishlist } from '../../redux/wishlistSlice';
// import { RootState } from '../../redux/store';
// import { setStaticData } from '../../redux/dataSlice';
// import { setGlobalCity } from '../../redux/locationSlice';

// export const useHomeLogic = () => {
//   const dispatch = useDispatch();

//   const currentCity = useSelector((state: RootState) => state.location.currentCity);
//   const { brands, banners, isStaticDataLoaded } = useSelector((state: RootState) => state.data);

//   const [cars, setCars] = useState<any[]>([]);
//   const [loadingCars, setLoadingCars] = useState(true);

//   const lastFetchRef = useRef("");
//   const carsRef = useRef<any[]>([]);
//   const isInitializing = useRef(false);

//   // 🚀 1. Helper: Coordinates se City Name nikalne ka logic
//   // const getCityNameFromCoords = async (lat: number, lng: number) => {
//   //   try {
//   //     // OpenStreetMap Nominatim API (Free)
//   //     const res = await axios.get(`https://nominatim.openstreetmap.org/reverse?format=json&lat=${lat}&lon=${lng}&zoom=10`);
//   //     const addr = res.data.address;
//   //     // City ya Town ya Village mein se jo pehle mile
//   //     return addr.city || addr.town || addr.village || addr.state_district || "All India";
//   //   } catch (error) {
//   //     console.log("Geocoding Error:", error);
//   //     return "All India";
//   //   }
//   // };
//   const getCityNameFromCoords = async (lat: number, lng: number) => {
//     try {
//       console.log("📡 Fetching city for:", lat, lng);
//       const res = await axios.get(
//         `https://nominatim.openstreetmap.org/reverse?format=json&lat=${lat}&lon=${lng}&zoom=10`,
//         {
//           headers: {
//             // 🚀 IMPORTANT: Nominatim ko User-Agent zaroori hota hai taaki 403 error na aaye
//             'User-Agent': 'Just2Car-App/1.0 (contact@just2car.in)',
//           },
//         }
//       );

//       const addr = res.data.address;
//       // City, Town, Village ya District mein se jo bhi available ho
//       const detectedCity = addr.city || addr.town || addr.village || addr.state_district || "All India";
//       console.log("✅ Detected City:", detectedCity);
//       return detectedCity;
//     } catch (error) {
//       console.log("❌ Geocoding Error:", error);
//       return "All India";
//     }
//   };

//   const fetchStaticData = useCallback(async () => {
//     if (isStaticDataLoaded) return;
//     try {
//       const [brandRes, bannerRes, topModelsRes] = await Promise.all([
//         axios.get(ENDPOINTS.GET_BRANDS),
//         axios.get(ENDPOINTS.GET_BANNERS),
//         axios.get(ENDPOINTS.GET_TOP_MODELS)
//       ]);
//       if (brandRes.data.success && bannerRes.data.success) {
//         dispatch(setStaticData({
//           brands: brandRes.data.data,
//           banners: bannerRes.data.data,
//           topModels: topModelsRes.data.data
//         }));
//       }
//     } catch (error) { console.log("❌ Static Error:", error); }
//   }, [isStaticDataLoaded, dispatch]);

//   const fetchCarsData = useCallback(async (lat: number | null, lng: number | null, manualCity?: string) => {
//     const currentRequestKey = JSON.stringify({ lat, lng, manualCity });

//     if (lastFetchRef.current === currentRequestKey && carsRef.current.length > 0) {
//       setLoadingCars(false);
//       return;
//     }

//     setLoadingCars(true);
//     try {
//       const token = await AsyncStorage.getItem('userToken');
//       const params = manualCity ? { search: manualCity } : { lat, lng };
//       const carRes = await axios.get(ENDPOINTS.GET_CARS, {
//         headers: { Authorization: `Bearer ${token}` },
//         params: params
//       });

//       if (carRes.data.success) {
//         const allCars = carRes.data.data;
//         setCars(allCars);
//         carsRef.current = allCars;
//         lastFetchRef.current = currentRequestKey;
//         dispatch(setWishlist(allCars.filter((car: any) => car.isWishlisted === true)));

//         // Redux City update logic
//         if (manualCity) {
//           dispatch(setGlobalCity(manualCity));
//         }
//       }
//     } catch (error) {
//       console.log('❌ Fetch Error:', error);
//       if (manualCity) dispatch(setGlobalCity(manualCity));
//     }
//     finally { setLoadingCars(false); }
//   }, [dispatch]);

//   // const handleLocationUpdate = async (isManual = false) => {
//   //   if (isManual) dispatch(setGlobalCity("Detecting...")); 

//   //   const hasPermission = await PermissionsAndroid.check(PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION);
//   //   if (!hasPermission && isManual) {
//   //      const granted = await PermissionsAndroid.request(PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION);
//   //      if (granted !== 'granted') { fetchCarsData(null, null); return; }
//   //   } else if (!hasPermission) {
//   //      dispatch(setGlobalCity("All India")); 
//   //      fetchCarsData(null, null);
//   //      return;
//   //   }

//   //   Geolocation.getCurrentPosition(
//   //     async (position) => {
//   //       const { latitude, longitude } = position.coords;

//   //       // 🚀 2. Change: Pehle asli City Name pata karo
//   //       const detectedCity = await getCityNameFromCoords(latitude, longitude);

//   //       // 🚀 3. Change:detected city ko Redux mein daalo aur usi city ki cars fetch karo
//   //       dispatch(setGlobalCity(detectedCity));
//   //       fetchCarsData(null, null, detectedCity); // lat/lng ki jagah city name search bhej rahe hain strict result ke liye
//   //     },
//   //     (error) => { 
//   //       dispatch(setGlobalCity("All India"));
//   //       fetchCarsData(null, null); 
//   //     },
//   //     { enableHighAccuracy: true, timeout: 15000, maximumAge: 10000 }
//   //   );
//   // };
//   const handleLocationUpdate = async (isManual = false) => {
//     if (isManual) dispatch(setGlobalCity("Detecting..."));

//     const hasPermission = await PermissionsAndroid.check(PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION);
//     if (!hasPermission && isManual) {
//       const granted = await PermissionsAndroid.request(PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION);
//       if (granted !== 'granted') { fetchCarsData(null, null); return; }
//     } else if (!hasPermission) {
//       dispatch(setGlobalCity("All India"));
//       fetchCarsData(null, null);
//       return;
//     }

//     Geolocation.getCurrentPosition(
//       async (position) => {
//         const { latitude, longitude } = position.coords;

//         // 🚀 Pehle city name pata karo coordinates se
//         const detectedCity = await getCityNameFromCoords(latitude, longitude);

//         // Redux update karo aur usi city ki cars fetch karo
//         dispatch(setGlobalCity(detectedCity));
//         fetchCarsData(null, null, detectedCity);
//       },
//       (error) => {
//         console.log("GPS Error:", error);
//         dispatch(setGlobalCity("All India"));
//         fetchCarsData(null, null);
//       },
//       { enableHighAccuracy: true, timeout: 15000, maximumAge: 10000 }
//     );
//   };

//   const onManualCitySearch = async (cityName: string) => {
//     if (!cityName.trim()) return;
//     await AsyncStorage.setItem('lockedCity', cityName);
//     dispatch(setGlobalCity(cityName));
//     fetchCarsData(null, null, cityName);
//   };

//   const resetToAllIndia = async () => {
//     await AsyncStorage.removeItem('lockedCity');
//     lastFetchRef.current = "";
//     carsRef.current = [];
//     dispatch(setGlobalCity("All India"));
//     fetchCarsData(null, null);
//   };

//   const resetToGPS = async () => {
//     await AsyncStorage.removeItem('lockedCity');
//     lastFetchRef.current = "";
//     carsRef.current = [];
//     handleLocationUpdate(true);
//   };

//   const refreshHome = async () => {
//     lastFetchRef.current = "";
//     carsRef.current = [];
//     const savedCity = await AsyncStorage.getItem('lockedCity');
//     if (savedCity) fetchCarsData(null, null, savedCity);
//     else handleLocationUpdate(false);
//   };

//   useEffect(() => {
//     const initApp = async () => {
//       if (isInitializing.current) return;
//       isInitializing.current = true;

//       await fetchStaticData();

//       const savedCity = await AsyncStorage.getItem('lockedCity');
//       if (savedCity) {
//         dispatch(setGlobalCity(savedCity));
//         await fetchCarsData(null, null, savedCity);
//       } else {
//         await handleLocationUpdate(false);
//       }

//       isInitializing.current = false;
//     };

//     initApp();
//   }, [fetchStaticData]);

//   return {
//     brands, banners, cars, loadingStatic: !isStaticDataLoaded,
//     loadingCars, currentCity,
//     onManualCitySearch, resetToGPS, resetToAllIndia, refreshHome,
//     onLocationPress: () => handleLocationUpdate(true)
//   };
// };






















import { useState, useEffect, useCallback, useRef } from 'react';
import { PermissionsAndroid, Platform } from 'react-native';
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Geolocation from 'react-native-geolocation-service'; 
import { useDispatch, useSelector } from 'react-redux'; 
import { ENDPOINTS } from '../../services/apiConfig';
import { setWishlist } from '../../redux/wishlistSlice'; 
import { RootState } from '../../redux/store';
import { setStaticData } from '../../redux/dataSlice';
import { setGlobalCity } from '../../redux/locationSlice';

export const useHomeLogic = () => {
  const dispatch = useDispatch();
  const currentCity = useSelector((state: RootState) => state.location.currentCity);
  const { brands, banners, isStaticDataLoaded } = useSelector((state: RootState) => state.data);
  
  const [cars, setCars] = useState<any[]>([]);
  const [loadingCars, setLoadingCars] = useState(true);     

  const lastFetchRef = useRef(""); 
  const carsRef = useRef<any[]>([]);
  const isInitializing = useRef(false); 

  const getCityNameFromCoords = async (lat: number, lng: number) => {
    try {
      const res = await axios.get(
        `https://nominatim.openstreetmap.org/reverse?format=json&lat=${lat}&lon=${lng}&zoom=10`,
        { headers: { 'User-Agent': 'Just2Car-App/1.0' } }
      );
      const addr = res.data.address;
      return addr.city || addr.town || addr.village || addr.state_district || "All India";
    } catch (error) { return "All India"; }
  };

  const fetchStaticData = useCallback(async () => {
    if (isStaticDataLoaded) return;
    try {
      const [brandRes, bannerRes, topModelsRes] = await Promise.all([
        axios.get(ENDPOINTS.GET_BRANDS),
        axios.get(ENDPOINTS.GET_BANNERS),
        axios.get(ENDPOINTS.GET_TOP_MODELS)
      ]);
      if (brandRes.data.success) {
        dispatch(setStaticData({ brands: brandRes.data.data, banners: bannerRes.data.data, topModels: topModelsRes.data.data }));
      }
    } catch (error) { console.log("❌ Static Error:", error); }
  }, [isStaticDataLoaded, dispatch]);

  const fetchCarsData = useCallback(async (lat: number | null, lng: number | null, manualCity?: string) => {
    const currentRequestKey = JSON.stringify({ lat, lng, manualCity });
    if (lastFetchRef.current === currentRequestKey && carsRef.current.length > 0) {
      setLoadingCars(false);
      return;
    }

    setLoadingCars(true);
    try {
      const token = await AsyncStorage.getItem('userToken');
      let params: any = {};
      
      if (manualCity && manualCity !== "All India" && manualCity !== "Detecting...") {
        params.search = manualCity;
      } else if (lat && lng && manualCity !== "All India") {
        params.lat = lat;
        params.lng = lng;
      }

      const carRes = await axios.get(ENDPOINTS.GET_CARS, {
        headers: { Authorization: `Bearer ${token}` },
        params: params
      });
      
      if (carRes.data.success) {
        const allCars = carRes.data.data;
        setCars(allCars);
        carsRef.current = allCars;
        lastFetchRef.current = currentRequestKey;
        dispatch(setWishlist(allCars.filter((car: any) => car.isWishlisted === true)));
        if (manualCity) dispatch(setGlobalCity(manualCity)); 
      }
    } catch (error) { console.log('❌ Fetch Error:', error); }
    finally { setLoadingCars(false); }
  }, [dispatch]);

  // 🚀 1. Location Logic (Silent vs Loud)
  const handleLocationUpdate = async (isManual = false) => {
    if (isManual) dispatch(setGlobalCity("Detecting...")); 
    
    // Check permission status (Silent check)
    let hasPermission = await PermissionsAndroid.check(PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION);
    
    // 🛡️ Agar permission nahi hai AUR user ne manually click kiya hai, tabhi popup dikhao
    if (!hasPermission && isManual) {
        const status = await PermissionsAndroid.request(PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION);
        hasPermission = status === PermissionsAndroid.RESULTS.GRANTED;
    }

    // Agar permission nahi mili (deny kar diya ya refresh hai), toh All India fetch karke ruk jao
    if (!hasPermission) {
       dispatch(setGlobalCity("All India")); 
       fetchCarsData(null, null, "All India");
       return;
    }

    Geolocation.getCurrentPosition(
      async (position) => {
        const { latitude, longitude } = position.coords;
        const detectedCity = await getCityNameFromCoords(latitude, longitude);
        await AsyncStorage.setItem('lockedCity', detectedCity);
        dispatch(setGlobalCity(detectedCity));
        fetchCarsData(latitude, longitude, detectedCity); 
      },
      (error) => { 
        dispatch(setGlobalCity("All India"));
        fetchCarsData(null, null, "All India"); 
      },
      { enableHighAccuracy: true, timeout: 15000, maximumAge: 10000 }
    );
  };

  const onManualCitySearch = async (cityName: string) => {
    if (!cityName.trim()) return;
    if (cityName === "All India") { await resetToAllIndia(); return; }
    await AsyncStorage.setItem('lockedCity', cityName); 
    dispatch(setGlobalCity(cityName)); 
    fetchCarsData(null, null, cityName);
  };

  const resetToAllIndia = async () => {
    await AsyncStorage.removeItem('lockedCity');
    lastFetchRef.current = "";
    carsRef.current = [];
    dispatch(setGlobalCity("All India"));
    fetchCarsData(null, null, "All India");
  };

  // 🚀 2. Manual GPS Button Action (Isme popup aayega)
  const resetToGPS = async () => {
    await AsyncStorage.removeItem('lockedCity');
    lastFetchRef.current = ""; 
    carsRef.current = [];
    handleLocationUpdate(true); // true means LOUD request
  };

  // 🚀 3. Refresh Action (Isme popup nahi aayega)
  const refreshHome = async () => {
    console.log("🔄 Pull to Refresh - Silent Mode");
    lastFetchRef.current = ""; // Clear cache key to force fetch
    
    const savedCity = await AsyncStorage.getItem('lockedCity');
    
    if (savedCity) {
      // Agar city locked hai, usi ka data refresh karo
      fetchCarsData(null, null, savedCity);
    } else {
      // Agar All India mode mein hai, wahi fetch karo bina GPS mangey
      fetchCarsData(null, null, "All India");
    }
  };

  useEffect(() => {
    const initApp = async () => {
      if (isInitializing.current) return;
      isInitializing.current = true;
      await fetchStaticData();
      const savedCity = await AsyncStorage.getItem('lockedCity');
      if (savedCity) {
        dispatch(setGlobalCity(savedCity)); 
        await fetchCarsData(null, null, savedCity);
      } else {
        // App open par pehli baar pooch sakte hain
        await handleLocationUpdate(true); 
      }
      isInitializing.current = false;
    };
    initApp();
  }, [fetchStaticData]); 

  return { 
    brands, banners, cars, loadingStatic: !isStaticDataLoaded, 
    loadingCars, currentCity, 
    onManualCitySearch, resetToGPS, resetToAllIndia, refreshHome,
    onLocationPress: () => handleLocationUpdate(true) 
  };
};