
// import { useState, useEffect, useCallback } from 'react';
// import axios from 'axios';
// import AsyncStorage from '@react-native-async-storage/async-storage';
// import { ENDPOINTS, BASE_URL } from '../../../services/apiConfig';
// import { useRoute } from '@react-navigation/native';

// export const useSearchLogic = () => {
//   const [searchText, setSearchText] = useState("");
//   const [searchResults, setSearchResults] = useState<any[]>([]);
//   const [topBrands, setTopBrands] = useState<any[]>([]);
//   const [topModels, setTopModels] = useState<any[]>([]);
//   const [loading, setLoading] = useState(false);
//   const [isResultView, setIsResultView] = useState(false);

//   const route = useRoute<any>();
//   // initialSearch होम स्क्रीन से आता है, filterQuery फ़िल्टर स्क्रीन से
//   const { initialSearch, filterQuery } = route.params || {}; 

//   const fetchInitialData = useCallback(async () => {
//     try {
//       const [brandRes, modelRes] = await Promise.all([
//         axios.get(ENDPOINTS.GET_BRANDS),
//         axios.get(ENDPOINTS.GET_TOP_MODELS)
//       ]);
//       if (brandRes.data.success) {
//         setTopBrands(brandRes.data.data.filter((b: any) => b.isTopBrand === true));
//       }
//       if (modelRes.data.success) {
//         setTopModels(modelRes.data.data);
//       }
//     } catch (e) { console.log("Initial Data Error:", e); }
//   }, []);

//   const performSearch = useCallback(async (query: string) => {
//     if (!query.trim()) return;
//     setLoading(true);
//     try {
//       const token = await AsyncStorage.getItem('userToken');
//       const res = await axios.get(ENDPOINTS.GET_CARS_SEARCH(query), {
//         headers: { Authorization: `Bearer ${token}` }
//       });
//       if (res.data.success) {
//         setSearchResults(res.data.data);
//       }
//     } catch (e) { console.log("Search API Error:", e); }
//     finally { setLoading(false); }
//   }, []);

//   // --- 🚀 नया: फ़िल्टर के आधार पर सर्च करने का फंक्शन ---
//   const performFilterSearch = useCallback(async (queryString: string) => {
//     setLoading(true);
//     setIsResultView(true); // सीधे कार्ड्स दिखाओ
//     try {
//       const token = await AsyncStorage.getItem('userToken');
//       const res = await axios.get(`${BASE_URL}/cars?${queryString}`, {
//         headers: { Authorization: `Bearer ${token}` }
//       });
//       if (res.data.success) {
//         setSearchResults(res.data.data);
//       }
//     } catch (e) { console.log("Filter API Error:", e); }
//     finally { setLoading(false); }
//   }, []);

//   const triggerSearch = useCallback((query: string) => {
//     if (!query.trim()) return;
//     setSearchText(query);
//     setIsResultView(true); 
//     performSearch(query);
//   }, [performSearch]);

//   // इफेक्ट 1: शुरूआती डेटा + होम सर्च + फ़िल्टर सर्च
//   useEffect(() => {
//     fetchInitialData();

//     if (initialSearch) {
//       triggerSearch(initialSearch);
//     } else if (filterQuery) {
//       console.log("🔍 Applying Filter Query:", filterQuery);
//       performFilterSearch(filterQuery);
//     }
//   }, [initialSearch, filterQuery, fetchInitialData, triggerSearch, performFilterSearch]);

//   // इफेक्ट 2: टाइपिंग के दौरान सुझाव
//   useEffect(() => {
//     if (isResultView || searchText.trim() === "") {
//         if (searchText.trim() === "") setSearchResults([]);
//         return;
//     }
//     const delayDebounceFn = setTimeout(() => {
//       performSearch(searchText);
//     }, 500);
//     return () => clearTimeout(delayDebounceFn);
//   }, [searchText, isResultView, performSearch]);

//   const chunkData = (data: any[], size: number) => {
//     const chunked = [];
//     if (!data) return [];
//     for (let i = 0; i < data.length; i += size) {
//       chunked.push(data.slice(i, i + size));
//     }
//     return chunked;
//   };

//   return {
//     searchText, setSearchText,
//     searchResults,
//     topBrands,
//     topModels: chunkData(topModels, 2),
//     loading,
//     isResultView, setIsResultView,
//     triggerSearch
//   };
// };



















// import { useState, useEffect, useCallback } from 'react';
// import axios from 'axios';
// import AsyncStorage from '@react-native-async-storage/async-storage';
// import { ENDPOINTS, BASE_URL } from '../../../services/apiConfig';
// import { useRoute, useFocusEffect } from '@react-navigation/native';

// export const useSearchLogic = () => {
//   const [searchText, setSearchText] = useState("");
//   const [searchResults, setSearchResults] = useState<any[]>([]);
//   const [topBrands, setTopBrands] = useState<any[]>([]);
//   const [topModels, setTopModels] = useState<any[]>([]);
//   const [loading, setLoading] = useState(false);
//   const [isResultView, setIsResultView] = useState(false);

//   const route = useRoute<any>();
//   const { initialSearch, filterQuery } = route.params || {};

//   // --- 1. शुरूआती डेटा (Brands & Models) ---
//   const fetchInitialData = useCallback(async () => {
//     try {
//       const [brandRes, modelRes] = await Promise.all([
//         axios.get(ENDPOINTS.GET_BRANDS),
//         axios.get(ENDPOINTS.GET_TOP_MODELS)
//       ]);
//       if (brandRes.data.success) {
//         setTopBrands(brandRes.data.data.filter((b: any) => b.isTopBrand === true));
//       }
//       if (modelRes.data.success) {
//         setTopModels(modelRes.data.data);
//       }
//     } catch (e) { console.log("Initial Data Error:", e); }
//   }, []);

//   // --- 2. सर्च (सजेशन के लिए) ---
//   const performSearch = useCallback(async (query: string) => {
//     if (!query.trim()) return;
//     setLoading(true);
//     try {
//       const token = await AsyncStorage.getItem('userToken');
//       const res = await axios.get(ENDPOINTS.GET_CARS_SEARCH(query), {
//         headers: { Authorization: `Bearer ${token}` }
//       });
//       if (res.data.success) {
//         setSearchResults(res.data.data);
//       }
//     } catch (e) { console.log("Search API Error:", e); }
//     finally { setLoading(false); }
//   }, []);

//   // --- 3. फ़िल्टर सर्च (असली कार्ड्स के लिए) ---
//   const performFilterSearch = useCallback(async (queryString: string) => {
//     setLoading(true);
//     setIsResultView(true); // 🚀 सबसे ज़रूरी: रिजल्ट मोड ऑन करें
//     try {
//       const token = await AsyncStorage.getItem('userToken');
//       // यहाँ queryString में 'minPrice=0&maxPrice=200000' जैसा डेटा आ रहा है
//       const res = await axios.get(`${BASE_URL}/cars?${queryString}`, {
//         headers: { Authorization: `Bearer ${token}` }
//       });
//       if (res.data.success) {
//         setSearchResults(res.data.data);
//       }
//     } catch (e) { console.log("Filter API Error:", e); }
//     finally { setLoading(false); }
//   }, []);

//   const triggerSearch = useCallback((query: string) => {
//     if (!query.trim()) return;
//     setSearchText(query);
//     setIsResultView(true);
//     performSearch(query);
//   }, [performSearch]);

//   // --- इफेक्ट: पैरामीटर्स चेक करें ---
//   useEffect(() => {
//     fetchInitialData();

//     if (initialSearch) {
//       triggerSearch(initialSearch);
//     } else if (filterQuery) {
//       // 🚀 फ़िल्टर से आने पर यहाँ से कॉल होगा
//       performFilterSearch(filterQuery);
//     }
//   }, [initialSearch, filterQuery, fetchInitialData, triggerSearch, performFilterSearch]);

//   // --- इफेक्ट: टाइपिंग ---
//   useEffect(() => {
//     if (isResultView || searchText.trim() === "") {
//       if (searchText.trim() === "") setSearchResults([]);
//       return;
//     }
//     const delayDebounceFn = setTimeout(() => {
//       performSearch(searchText);
//     }, 500);
//     return () => clearTimeout(delayDebounceFn);
//   }, [searchText, isResultView, performSearch]);

//   useFocusEffect(
//     useCallback(() => {
//       return () => {
//         // Reset search state on back
//         setSearchText("");
//         setSearchResults([]);
//         setIsResultView(false);
//       };
//     }, [])
//   );

//   const chunkData = (data: any[], size: number) => {
//     const chunked = [];
//     if (!data) return [];
//     for (let i = 0; i < data.length; i += size) {
//       chunked.push(data.slice(i, i + size));
//     }
//     return chunked;
//   };

//   return {
//     searchText, setSearchText,
//     searchResults,
//     topBrands,
//     topModels: chunkData(topModels, 2),
//     loading,
//     isResultView, setIsResultView,
//     triggerSearch
//   };
// };





















// import { useState, useEffect, useCallback, useMemo } from 'react';
// import axios from 'axios';
// import AsyncStorage from '@react-native-async-storage/async-storage';
// import { ENDPOINTS, BASE_URL } from '../../../services/apiConfig';
// import { useRoute, useFocusEffect } from '@react-navigation/native';
// import { useSelector } from 'react-redux'; // 👈 Redux hook
// import { RootState } from '../../../redux/store'; // 👈 RootState type

// export const useSearchLogic = () => {
//   const [searchText, setSearchText] = useState("");
//   const [searchResults, setSearchResults] = useState<any[]>([]);
//   const [loading, setLoading] = useState(false);
//   const [isResultView, setIsResultView] = useState(false);

//   const route = useRoute<any>();
//   const { initialSearch, filterQuery } = route.params || {};

//   // 🚀 1. Redux se Static Data lo (Ab API call ki zaroorat nahi)
//   const { brands: reduxBrands, topModels: reduxModels } = useSelector((state: RootState) => state.data);

//   // 🚀 2. Brands ko filter karo (Sirf Top Brands dikhane ke liye)
//   const topBrands = useMemo(() => 
//     reduxBrands.filter((b: any) => b.isTopBrand === true), 
//     [reduxBrands]
//   );

//   // 🚀 3. Models ko seedha use karo
//   const topModels = reduxModels;

//   // --- 2. सर्च (सजेशन के लिए) ---
//   const performSearch = useCallback(async (query: string) => {
//     if (!query.trim()) return;
//     setLoading(true);
//     try {
//       const token = await AsyncStorage.getItem('userToken');
//       const res = await axios.get(ENDPOINTS.GET_CARS_SEARCH(query), {
//         headers: { Authorization: `Bearer ${token}` }
//       });
//       if (res.data.success) {
//         setSearchResults(res.data.data);
//       }
//     } catch (e) { 
//       console.log("Search API Error:", e); 
//     } finally { 
//       setLoading(false); 
//     }
//   }, []);

//   // --- 3. फ़िल्टर सर्च (असली कार्ड्स के लिए) ---
//   const performFilterSearch = useCallback(async (queryString: string) => {
//     setLoading(true);
//     setIsResultView(true); 
//     try {
//       const token = await AsyncStorage.getItem('userToken');
//       const res = await axios.get(`${BASE_URL}/cars?${queryString}`, {
//         headers: { Authorization: `Bearer ${token}` }
//       });
//       if (res.data.success) {
//         setSearchResults(res.data.data);
//       }
//     } catch (e) { 
//       console.log("Filter API Error:", e); 
//     } finally { 
//       setLoading(false); 
//     }
//   }, []);

//   const triggerSearch = useCallback((query: string) => {
//     if (!query.trim()) return;
//     setSearchText(query);
//     setIsResultView(true);
//     performSearch(query);
//   }, [performSearch]);

//   // --- इफेक्ट: पैरामीटर्स चेक करें ---
//   useEffect(() => {
//     // 🛡️ Ab yahan fetchInitialData() ki zaroorat nahi hai
//     if (initialSearch) {
//       triggerSearch(initialSearch);
//     } else if (filterQuery) {
//       performFilterSearch(filterQuery);
//     }
//   }, [initialSearch, filterQuery, triggerSearch, performFilterSearch]);

//   // --- इफेक्ट: टाइपिंग ---
//   useEffect(() => {
//     if (isResultView || searchText.trim() === "") {
//       if (searchText.trim() === "") setSearchResults([]);
//       return;
//     }
//     const delayDebounceFn = setTimeout(() => {
//       performSearch(searchText);
//     }, 500);
//     return () => clearTimeout(delayDebounceFn);
//   }, [searchText, isResultView, performSearch]);

//   useFocusEffect(
//     useCallback(() => {
//       return () => {
//         setSearchText("");
//         setSearchResults([]);
//         setIsResultView(false);
//       };
//     }, [])
//   );

//   const chunkData = (data: any[], size: number) => {
//     const chunked = [];
//     if (!data) return [];
//     for (let i = 0; i < data.length; i += size) {
//       chunked.push(data.slice(i, i + size));
//     }
//     return chunked;
//   };

//   return {
//     searchText, setSearchText,
//     searchResults,
//     topBrands,
//     topModels: chunkData(topModels, 2),
//     loading,
//     isResultView, setIsResultView,
//     triggerSearch
//   };
// };




















// location se search karwane ke liye

import { useState, useEffect, useCallback, useMemo } from 'react';
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { ENDPOINTS, BASE_URL } from '../../../services/apiConfig';
import { useRoute, useFocusEffect } from '@react-navigation/native';
import { useSelector, useDispatch } from 'react-redux'; // 👈 Added useDispatch
import { RootState } from '../../../redux/store'; 
import { setGlobalCity } from '../../../redux/locationSlice'; // 👈 Import Action

export const useSearchLogic = () => {
  const dispatch = useDispatch(); // 👈 Added Dispatch
  const [searchText, setSearchText] = useState("");
  const [searchResults, setSearchResults] = useState<any[]>([]);
  const [loading, setLoading] = useState(false);
  const [isResultView, setIsResultView] = useState(false);

  // 🚀 OLX Style Location State
  const [isLocationModalVisible, setLocationModalVisible] = useState(false);

  const route = useRoute<any>();
  const { initialSearch, filterQuery } = route.params || {};

  // 🚀 1. Redux se Static Data aur Location lo
  const { brands: reduxBrands, topModels: reduxModels } = useSelector((state: RootState) => state.data);
  const currentCity = useSelector((state: RootState) => state.location.currentCity); // 👈 Global City

  // 🚀 2. Brands ko filter karo (Sirf Top Brands dikhane ke liye)
  const topBrands = useMemo(() => 
    reduxBrands.filter((b: any) => b.isTopBrand === true), 
    [reduxBrands]
  );

  // 🚀 3. Models ko seedha use karo
  const topModels = reduxModels;

  // --- 2. सर्च (सजेशन के लिए) ---
  const performSearch = useCallback(async (query: string) => {
    // 🛡️ Guard: Agar query khali hai aur city bhi All India hai toh stop
    if (!query.trim() && currentCity === "All India") {
      setSearchResults([]);
      return;
    }
    
    setLoading(true);
    try {
      const token = await AsyncStorage.getItem('userToken');

      // 🚀 Fix: Query mein City name merge karke bhej rahe hain (Backend handles multiple keywords)
      // Example: "Swift" + "Bhopal" = "Swift Bhopal"
      const finalSearchString = currentCity !== "All India" ? `${query} ${currentCity}` : query;

      const res = await axios.get(ENDPOINTS.GET_CARS_SEARCH(finalSearchString.trim()), {
        headers: { Authorization: `Bearer ${token}` }
      });
      if (res.data.success) {
        setSearchResults(res.data.data);
      }
    } catch (e) { 
      console.log("Search API Error:", e); 
    } finally { 
      setLoading(false); 
    }
  }, [currentCity]); // 👈 CurrentCity dependency added

  // --- 3. फ़िल्टर सर्च (असली कार्ड्स के लिए) ---
  const performFilterSearch = useCallback(async (queryString: string) => {
    setLoading(true);
    setIsResultView(true); 
    try {
      const token = await AsyncStorage.getItem('userToken');
      
      // 🚀 Filter mein bhi city restriction add karna
      let finalFilterUrl = `${BASE_URL}/cars?${queryString}`;
      if (currentCity !== "All India") {
         finalFilterUrl += `&search=${currentCity}`;
      }

      const res = await axios.get(finalFilterUrl, {
        headers: { Authorization: `Bearer ${token}` }
      });
      if (res.data.success) {
        setSearchResults(res.data.data);
      }
    } catch (e) { 
      console.log("Filter API Error:", e); 
    } finally { 
      setLoading(false); 
    }
  }, [currentCity]); // 👈 Added currentCity

  const triggerSearch = useCallback((query: string) => {
    if (!query.trim()) return;
    setSearchText(query);
    setIsResultView(true);
    performSearch(query);
  }, [performSearch]);

  // 🚀 4. Manual Location Update Function for Search Screen
  const updateSearchLocation = (newCity: string) => {
    dispatch(setGlobalCity(newCity)); // Redux update
    // Agar user pehle se kuch search kar raha hai, toh results refresh karo naye city ke liye
    if (searchText || isResultView) {
      performSearch(searchText);
    }
  };

  // --- इफेक्ट: पैरामीटर्स चेक करें ---
  useEffect(() => {
    if (initialSearch) {
      triggerSearch(initialSearch);
    } else if (filterQuery) {
      performFilterSearch(filterQuery);
    }
  }, [initialSearch, filterQuery, triggerSearch, performFilterSearch]);

  // --- इफेक्ट: टाइपिंग ---
  useEffect(() => {
    if (isResultView || searchText.trim() === "") {
      if (searchText.trim() === "") setSearchResults([]);
      return;
    }
    const delayDebounceFn = setTimeout(() => {
      performSearch(searchText);
    }, 500);
    return () => clearTimeout(delayDebounceFn);
  }, [searchText, isResultView, performSearch, currentCity]); // 👈 Added currentCity

  useFocusEffect(
    useCallback(() => {
      return () => {
        setSearchText("");
        setSearchResults([]);
        setIsResultView(false);
      };
    }, [])
  );

  const chunkData = (data: any[], size: number) => {
    const chunked = [];
    if (!data) return [];
    for (let i = 0; i < data.length; i += size) {
      chunked.push(data.slice(i, i + size));
    }
    return chunked;
  };

  return {
    searchText, setSearchText,
    searchResults,
    topBrands,
    topModels: chunkData(topModels, 2),
    loading,
    isResultView, setIsResultView,
    triggerSearch,
    // 🚀 Exporting Location logic to UI
    currentCity,
    updateSearchLocation,
    isLocationModalVisible,
    setLocationModalVisible
  };
};