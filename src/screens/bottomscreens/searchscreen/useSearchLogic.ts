// import { useState, useEffect } from 'react';
// import axios from 'axios';
// import { ENDPOINTS } from '../../../services/apiConfig';

// export const useSearchLogic = () => {
//   const [searchText, setSearchText] = useState("");
//   const [searchResults, setSearchResults] = useState<any[]>([]);
//   const [topBrands, setTopBrands] = useState<any[]>([]);
//   const [topModels, setTopModels] = useState<any[]>([]);
//   const [loading, setLoading] = useState(false);

//   useEffect(() => {
//     fetchInitialData();
//   }, []);

//   const fetchInitialData = async () => {
//     try {
//       console.log("📡 Fetching Data from:", ENDPOINTS.GET_TOP_MODELS);

//       // --- बिना टोकन के रिक्वेस्ट ---
//       const [brandRes, modelRes] = await Promise.all([
//         axios.get(ENDPOINTS.GET_BRANDS),
//         axios.get(ENDPOINTS.GET_TOP_MODELS) 
//       ]);

//       if (brandRes.data.success) {
//         const filteredBrands = brandRes.data.data.filter((b: any) => b.isTopBrand === true);
//         setTopBrands(filteredBrands);
//       }

//       if (modelRes.data.success) {
//         setTopModels(modelRes.data.data);
//       }
//     } catch (e: any) {
//       // --- यहाँ एरर को गहराई से पकड़ेंगे ---
//       console.log("❌ ERROR STATUS:", e.response?.status); // अगर यहाँ 401 है, तो टोकन डालना ही पड़ेगा
//       console.log("❌ ERROR MESSAGE:", e.response?.data?.message || e.message);
//     }
//   };

//   // ... (performSearch और chunkData वही रहेगा) ...
  
//   const performSearch = async () => {
//     setLoading(true);
//     try {
//       const res = await axios.get(ENDPOINTS.GET_CARS_SEARCH(searchText));
//       if (res.data.success) {
//         setSearchResults(res.data.data);
//       }
//     } catch (e) {
//       console.log("Search error", e);
//     } finally {
//       setLoading(false);
//     }
//   };

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
//   };
// };


















// import { useState, useEffect, useCallback } from 'react';
// import axios from 'axios';
// import { ENDPOINTS } from '../../../services/apiConfig';

// export const useSearchLogic = () => {
//   const [searchText, setSearchText] = useState("");
//   const [searchResults, setSearchResults] = useState<any[]>([]);
//   const [topBrands, setTopBrands] = useState<any[]>([]);
//   const [topModels, setTopModels] = useState<any[]>([]);
//   const [loading, setLoading] = useState(false);

//   // 1. स्क्रीन लोड होते ही Brands और Top Models फेच करें
//   useEffect(() => {
//     fetchInitialData();
//   }, []);

//   const fetchInitialData = async () => {
//     try {
//       const [brandRes, modelRes] = await Promise.all([
//         axios.get(ENDPOINTS.GET_BRANDS),
//         axios.get(ENDPOINTS.GET_TOP_MODELS)
//       ]);

//       if (brandRes.data.success) {
//         // --- सिर्फ "isTopBrand: true" वाले ब्रांड्स रखें ---
//         const filteredBrands = brandRes.data.data.filter((b: any) => b.isTopBrand === true);
//         setTopBrands(filteredBrands);
//       }

//       if (modelRes.data.success) {
//         setTopModels(modelRes.data.data);
//       }
//     } catch (e) {
//       console.log("Error loading search data", e);
//     }
//   };

//   // 2. सर्च लॉजिक: जब यूजर टाइप करे तो API कॉल करें
//   useEffect(() => {
//     const delayDebounceFn = setTimeout(() => {
//       if (searchText.trim().length > 0) {
//         performSearch();
//       } else {
//         setSearchResults([]);
//       }
//     }, 500); // 500ms का डिले (Debounce) ताकि सर्वर पर लोड न पड़े

//     return () => clearTimeout(delayDebounceFn);
//   }, [searchText]);

//   const performSearch = async () => {
//     setLoading(true);
//     try {
//       const res = await axios.get(ENDPOINTS.GET_CARS_SEARCH(searchText));
//       if (res.data.success) {
//         setSearchResults(res.data.data);
//       }
//     } catch (e) {
//       console.log("Search error", e);
//     } finally {
//       setLoading(false);
//     }
//   };

//   // डेटा को 2 लाइन में बाँटने का लॉजिक
//   const chunkData = (data: any[], size: number) => {
//     const chunked = [];
//     for (let i = 0; i < data.length; i += size) {
//       chunked.push(data.slice(i, i + size));
//     }
//     return chunked;
//   };

//   return {
//     searchText, setSearchText,
//     searchResults,
//     topBrands,
//     topModels: chunkData(topModels, 2), // 2-Row Grid के लिए
//     loading,
//   };
// };












// import { useState, useEffect } from 'react';
// import axios from 'axios';
// import AsyncStorage from '@react-native-async-storage/async-storage'; // टोकन के लिए
// import { ENDPOINTS } from '../../../services/apiConfig';

// export const useSearchLogic = () => {
//   const [searchText, setSearchText] = useState("");
//   const [searchResults, setSearchResults] = useState<any[]>([]);
//   const [topBrands, setTopBrands] = useState<any[]>([]);
//   const [topModels, setTopModels] = useState<any[]>([]);
//   const [loading, setLoading] = useState(false);
//   const [isResultView, setIsResultView] = useState(false);

//   useEffect(() => {
//     fetchInitialData();
//   }, []);

//   const fetchInitialData = async () => {
//     try {
//       const [brandRes, modelRes] = await Promise.all([
//         axios.get(ENDPOINTS.GET_BRANDS),
//         axios.get(ENDPOINTS.GET_TOP_MODELS)
//       ]);

//       if (brandRes.data.success) {
//         const filteredBrands = brandRes.data.data.filter((b: any) => b.isTopBrand === true);
//         setTopBrands(filteredBrands);
//       }

//       if (modelRes.data.success) {
//         setTopModels(modelRes.data.data);
//       }
//     } catch (e) {
//       console.log("Error loading search data", e);
//     }
//   };

//   useEffect(() => {
//   const delayDebounceFn = setTimeout(() => {
//       if (searchText.trim().length > 0) {
//         performSearch();
//       } else {
//         setSearchResults([]);
//         setIsResultView(false); // सर्च खाली करने पर रिजल्ट व्यू बंद
//       }
//     }, 500);
//     return () => clearTimeout(delayDebounceFn);
//   }, [searchText]);

//   const performSearch = async () => {
//     setLoading(true);
//     try {
//       // --- 🚀 टोकन निकालें ताकि Wishlist स्टेटस भी मिले ---
//       const token = await AsyncStorage.getItem('userToken');
      
//       const res = await axios.get(ENDPOINTS.GET_CARS_SEARCH(searchText), {
//         headers: { Authorization: `Bearer ${token}` }
//       });

//       if (res.data.success) {
//         setSearchResults(res.data.data);
//       }
//     } catch (e) {
//       console.log("Search error", e);
//     } finally {
//       setLoading(false);
//     }
//   };

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
//     isResultView, setIsResultView
//   };
// };

























// import { useState, useEffect } from 'react';
// import axios from 'axios';
// import AsyncStorage from '@react-native-async-storage/async-storage';
// import { ENDPOINTS } from '../../../services/apiConfig';

// export const useSearchLogic = () => {
//   const [searchText, setSearchText] = useState("");
//   const [searchResults, setSearchResults] = useState<any[]>([]);
//   const [topBrands, setTopBrands] = useState<any[]>([]);
//   const [topModels, setTopModels] = useState<any[]>([]);
//   const [loading, setLoading] = useState(false);
//   const [isResultView, setIsResultView] = useState(false);

//   useEffect(() => {
//     fetchInitialData();
//   }, []);

//   const fetchInitialData = async () => {
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
//     } catch (e) { console.log(e); }
//   };

//   // --- 🚀 यह सिर्फ टाइपिंग के दौरान सुझाव (Suggestions) लाएगा ---
//   useEffect(() => {
//     if (isResultView) return; // अगर हम पहले ही रिजल्ट देख रहे हैं, तो दोबारा सर्च न करें

//     const delayDebounceFn = setTimeout(() => {
//       if (searchText.trim().length > 0) {
//         performSearch(searchText);
//       } else {
//         setSearchResults([]);
//       }
//     }, 500);

//     return () => clearTimeout(delayDebounceFn);
//   }, [searchText]);

//   const performSearch = async (query: string) => {
//     setLoading(true);
//     try {
//       const token = await AsyncStorage.getItem('userToken');
//       const res = await axios.get(ENDPOINTS.GET_CARS_SEARCH(query), {
//         headers: { Authorization: `Bearer ${token}` }
//       });
//       if (res.data.success) {
//         setSearchResults(res.data.data);
//       }
//     } catch (e) { console.log(e); }
//     finally { setLoading(false); }
//   };

//   // --- 🚀 फिक्स: जब यूज़र किसी आइटम पर क्लिक करे ---
//   const triggerSearch = (query: string) => {
//     setSearchText(query);
//     setIsResultView(true); // रिजल्ट मोड ऑन करें
//     performSearch(query); // तुरंत असली डेटा लाएं
//   };

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
//     triggerSearch // इसे एक्सपोर्ट करें
//   };
// };















// import { useState, useEffect } from 'react';
// import axios from 'axios';
// import AsyncStorage from '@react-native-async-storage/async-storage';
// import { ENDPOINTS } from '../../../services/apiConfig';

// export const useSearchLogic = () => {
//   const [searchText, setSearchText] = useState("");
//   const [searchResults, setSearchResults] = useState<any[]>([]);
//   const [topBrands, setTopBrands] = useState<any[]>([]);
//   const [topModels, setTopModels] = useState<any[]>([]);
//   const [loading, setLoading] = useState(false);
//   const [isResultView, setIsResultView] = useState(false);

//   useEffect(() => {
//     fetchInitialData();
//   }, []);

//   const fetchInitialData = async () => {
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
//     } catch (e) { console.log(e); }
//   };

//   // --- टाइपिंग के दौरान सर्च ---
//   useEffect(() => {
//     if (isResultView) return;

//     const delayDebounceFn = setTimeout(() => {
//       if (searchText.trim().length > 0) {
//         performSearch(searchText);
//       } else {
//         setSearchResults([]);
//       }
//     }, 500);

//     return () => clearTimeout(delayDebounceFn);
//   }, [searchText, isResultView]);

//   // --- असली API कॉल ---
//   const performSearch = async (query: string) => {
//     setLoading(true);
//     try {
//       const token = await AsyncStorage.getItem('userToken');
//       // यह API ब्रांड और मॉडल दोनों के लिए काम करती है
//       const url = ENDPOINTS.GET_CARS_SEARCH(query); 
//       console.log("📡 Searching URL:", url);

//       const res = await axios.get(url, {
//         headers: { Authorization: `Bearer ${token}` }
//       });

//       if (res.data.success) {
//         setSearchResults(res.data.data);
//         console.log(`✅ Results found: ${res.data.data.length}`);
//       }
//     } catch (e) { 
//         console.log("Search Error:", e); 
//     } finally { 
//         setLoading(false); 
//     }
//   };

//   // जब यूजर किसी ब्रांड लोगो या मॉडल चिप पर क्लिक करे
//   // const triggerSearch = (query: string) => {
//   //   setSearchText(query);
//   //   setIsResultView(true); // सीधे कार्ड्स दिखाओ
//   //   performSearch(query);
//   // };
//   const triggerSearch = (query: string) => {
//   console.log("🔍 Final Search Triggered for:", query);
//   setSearchText(query); // अब यहाँ "Maruti DZIRE" सेट होगा
//   setIsResultView(true); 
//   performSearch(query); // API को भी "Maruti DZIRE" जाएगा
// };

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



















// import { useState, useEffect } from 'react';
// import axios from 'axios';
// import AsyncStorage from '@react-native-async-storage/async-storage';
// import { ENDPOINTS } from '../../../services/apiConfig';
// import { useRoute } from '@react-navigation/native';

// export const useSearchLogic = () => {
//   const [searchText, setSearchText] = useState("");
//   const [searchResults, setSearchResults] = useState<any[]>([]);
//   const [topBrands, setTopBrands] = useState<any[]>([]);
//   const [topModels, setTopModels] = useState<any[]>([]);
//   const [loading, setLoading] = useState(false);
//   const [isResultView, setIsResultView] = useState(false);

//   const route = useRoute<any>(); // रूट पैरामीटर्स के लिए
//   const { initialSearch } = route.params || {}; // 'initialSearch' निकालें

//   // useEffect(() => {
//   //   fetchInitialData();
//   // }, []);
//    useEffect(() => {
//     fetchInitialData();
    
//     if (initialSearch) {
//         triggerSearch(initialSearch);
//     }
//   }, [initialSearch]);

//   const fetchInitialData = async () => {
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
//     } catch (e) { console.log(e); }
//   };

//   // टाइपिंग के दौरान सिर्फ सुझाव (Suggestions) अपडेट करें
//   useEffect(() => {
//     if (isResultView || searchText.trim() === "") {
//         if (searchText.trim() === "") setSearchResults([]);
//         return;
//     }
//     const delayDebounceFn = setTimeout(() => {
//       performSearch(searchText);
//     }, 500);
//     return () => clearTimeout(delayDebounceFn);
//   }, [searchText, isResultView]);

//   const performSearch = async (query: string) => {
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
//     } catch (e) { console.log(e); }
//     finally { setLoading(false); }
//   };

//   // --- 🚀 यह फंक्शन बटन या कीबोर्ड एंटर पर चलेगा ---
//   const triggerSearch = (query: string) => {
//     if (!query.trim()) return;
//     setSearchText(query);
//     setIsResultView(true); 
//     performSearch(query);
//   };

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
// import { ENDPOINTS } from '../../../services/apiConfig';
// import { useRoute } from '@react-navigation/native';

// export const useSearchLogic = () => {
//   const [searchText, setSearchText] = useState("");
//   const [searchResults, setSearchResults] = useState<any[]>([]);
//   const [topBrands, setTopBrands] = useState<any[]>([]);
//   const [topModels, setTopModels] = useState<any[]>([]);
//   const [loading, setLoading] = useState(false);
//   const [isResultView, setIsResultView] = useState(false);

//   const route = useRoute<any>();
//   const { initialSearch } = route.params || {};

//   // --- 1. डेटा फेच करने का फंक्शन ---
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

//   // --- 2. सर्च करने का फंक्शन ---
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

//   // --- 3. सर्च ट्रिगर करने का फंक्शन (बटन या क्लिक पर) ---
//   const triggerSearch = useCallback((query: string) => {
//     if (!query.trim()) return;
//     setSearchText(query);
//     setIsResultView(true); 
//     performSearch(query);
//   }, [performSearch]);

//   // --- 🚀 इफेक्ट 1: शुरूआती डेटा और होम से आया सर्च हैंडल करें ---
//   useEffect(() => {
//     fetchInitialData();
    
//     if (initialSearch) {
//       console.log("🔍 Auto-searching for brand:", initialSearch);
//       triggerSearch(initialSearch);
//     }
//   }, [initialSearch, fetchInitialData, triggerSearch]);

//   // --- इफेक्ट 2: टाइपिंग के दौरान सुझाव (Suggestions) ---
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



















import { useState, useEffect, useCallback } from 'react';
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { ENDPOINTS, BASE_URL } from '../../../services/apiConfig';
import { useRoute } from '@react-navigation/native';

export const useSearchLogic = () => {
  const [searchText, setSearchText] = useState("");
  const [searchResults, setSearchResults] = useState<any[]>([]);
  const [topBrands, setTopBrands] = useState<any[]>([]);
  const [topModels, setTopModels] = useState<any[]>([]);
  const [loading, setLoading] = useState(false);
  const [isResultView, setIsResultView] = useState(false);

  const route = useRoute<any>();
  const { initialSearch, filterQuery } = route.params || {};

  // --- 1. शुरूआती डेटा (Brands & Models) ---
  const fetchInitialData = useCallback(async () => {
    try {
      const [brandRes, modelRes] = await Promise.all([
        axios.get(ENDPOINTS.GET_BRANDS),
        axios.get(ENDPOINTS.GET_TOP_MODELS)
      ]);
      if (brandRes.data.success) {
        setTopBrands(brandRes.data.data.filter((b: any) => b.isTopBrand === true));
      }
      if (modelRes.data.success) {
        setTopModels(modelRes.data.data);
      }
    } catch (e) { console.log("Initial Data Error:", e); }
  }, []);

  // --- 2. सर्च (सजेशन के लिए) ---
  const performSearch = useCallback(async (query: string) => {
    if (!query.trim()) return;
    setLoading(true);
    try {
      const token = await AsyncStorage.getItem('userToken');
      const res = await axios.get(ENDPOINTS.GET_CARS_SEARCH(query), {
        headers: { Authorization: `Bearer ${token}` }
      });
      if (res.data.success) {
        setSearchResults(res.data.data);
      }
    } catch (e) { console.log("Search API Error:", e); }
    finally { setLoading(false); }
  }, []);

  // --- 3. फ़िल्टर सर्च (असली कार्ड्स के लिए) ---
  const performFilterSearch = useCallback(async (queryString: string) => {
    setLoading(true);
    setIsResultView(true); // 🚀 सबसे ज़रूरी: रिजल्ट मोड ऑन करें
    try {
      const token = await AsyncStorage.getItem('userToken');
      // यहाँ queryString में 'minPrice=0&maxPrice=200000' जैसा डेटा आ रहा है
      const res = await axios.get(`${BASE_URL}/cars?${queryString}`, {
        headers: { Authorization: `Bearer ${token}` }
      });
      if (res.data.success) {
        setSearchResults(res.data.data);
      }
    } catch (e) { console.log("Filter API Error:", e); }
    finally { setLoading(false); }
  }, []);

  const triggerSearch = useCallback((query: string) => {
    if (!query.trim()) return;
    setSearchText(query);
    setIsResultView(true); 
    performSearch(query);
  }, [performSearch]);

  // --- इफेक्ट: पैरामीटर्स चेक करें ---
  useEffect(() => {
    fetchInitialData();
    
    if (initialSearch) {
      triggerSearch(initialSearch);
    } else if (filterQuery) {
      // 🚀 फ़िल्टर से आने पर यहाँ से कॉल होगा
      performFilterSearch(filterQuery);
    }
  }, [initialSearch, filterQuery, fetchInitialData, triggerSearch, performFilterSearch]);

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
  }, [searchText, isResultView, performSearch]);

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
    triggerSearch
  };
};