// import { useState, useEffect } from 'react';

// export const useFiltersLogic = (navigation: any, route: any) => {
//   const { initialCategory } = route.params || {};
//   const [activeCategory, setActiveCategory] = useState(initialCategory || "Make & Model");

//   // सभी सिलेक्टेड फिल्टर्स
//   const [selectedFilters, setSelectedFilters] = useState<any>({
//     model: [],
//     price: null, // {min, max}
//     km: null,    // {min, max}
//   });

//   useEffect(() => {
//     if (initialCategory) setActiveCategory(initialCategory);
//   }, [initialCategory]);

//   // --- टॉगल फंक्शन ---
//   const toggleModel = (id: string) => {
//     setSelectedFilters((prev: any) => {
//       const list = prev.model.includes(id) 
//         ? prev.model.filter((i: any) => i !== id) 
//         : [...prev.model, id];
//       return { ...prev, model: list };
//     });
//   };

//   const selectPrice = (min: number, max: number) => {
//     setSelectedFilters((prev: any) => ({ ...prev, price: { min, max } }));
//   };

//   const selectKm = (min: number, max: number) => {
//     setSelectedFilters((prev: any) => ({ ...prev, km: { min, max } }));
//   };

//   // --- 🚀 मुख्य काम: API URL तैयार करना ---
//   const applyFilters = () => {
//     let queryParams = [];
//     if (selectedFilters.price) {
//       queryParams.push(`minPrice=${selectedFilters.price.min}&maxPrice=${selectedFilters.price.max}`);
//     }
//     if (selectedFilters.km) {
//       queryParams.push(`minKm=${selectedFilters.km.min}&maxKm=${selectedFilters.km.max}`);
//     }
//     if (selectedFilters.model.length > 0) {
//       queryParams.push(`model=${selectedFilters.model.join(',')}`);
//     }

//     const finalPath = `/cars?${queryParams.join('&')}`;
//     console.log("📡 Final Filter Query:", finalPath);

//     // वापस सर्च स्क्रीन पर जाएँ और डेटा भेजें
//     navigation.navigate('SearchScreen', { filterQuery: finalPath });
//   };

//   return {
//     activeCategory, setActiveCategory,
//     selectedFilters, toggleModel, selectPrice, selectKm,
//     applyFilters, clearAll: () => setSelectedFilters({ model: [], price: null, km: null })
//   };
// };

















// import { useState, useEffect, useCallback } from 'react';
// import axios from 'axios';
// import { ENDPOINTS } from '../../services/apiConfig';

// export const useFiltersLogic = (navigation: any, route: any) => {
//   const { initialCategory } = route.params || {};
//   const [activeCategory, setActiveCategory] = useState(initialCategory || "Make & Model");

//   // --- 🚀 असली डेटा के लिए स्टेट्स ---
//   const [brands, setBrands] = useState<any[]>([]);
//   const [models, setModels] = useState<any[]>([]);
//   const [loading, setLoading] = useState(false);

//   const [selectedFilters, setSelectedFilters] = useState<any>({
//     model: [],
//     brand: [], // ब्रांड्स के लिए भी
//     price: null,
//     km: null,
//   });

//   // --- 1. लोड होते ही Brands और Models फेच करें ---
//   useEffect(() => {
//     const fetchData = async () => {
//       setLoading(true);
//       try {
//         const [brandRes, modelRes] = await Promise.all([
//           axios.get(ENDPOINTS.GET_BRANDS),
//           axios.get(ENDPOINTS.GET_TOP_MODELS)
//         ]);
//         if (brandRes.data.success) setBrands(brandRes.data.data);
//         if (modelRes.data.success) setModels(modelRes.data.data);
//       } catch (e) {
//         console.log("Filter Data Fetch Error:", e);
//       } finally {
//         setLoading(false);
//       }
//     };
//     fetchData();
//   }, []);

//   useEffect(() => {
//     if (initialCategory) setActiveCategory(initialCategory);
//   }, [initialCategory]);

//   // --- 🚀 टॉगल फंक्शन (अब ये असली _id इस्तेमाल करेगा) ---
//   const toggleItem = (key: string, id: string) => {
//     setSelectedFilters((prev: any) => {
//       const list = prev[key].includes(id) 
//         ? prev[key].filter((i: any) => i !== id) 
//         : [...prev[key], id];
//       return { ...prev, [key]: list };
//     });
//   };

//   const selectRange = (key: string, min: number, max: number) => {
//     setSelectedFilters((prev: any) => ({ ...prev, [key]: { min, max } }));
//   };

// //   const applyFilters = () => {
// //     let queryParams = [];
// //     if (selectedFilters.price) {
// //       queryParams.push(`minPrice=${selectedFilters.price.min}&maxPrice=${selectedFilters.price.max}`);
// //     }
// //     if (selectedFilters.km) {
// //       queryParams.push(`minKm=${selectedFilters.km.min}&maxKm=${selectedFilters.km.max}`);
// //     }
// //     // असली IDs भेजें
// //     if (selectedFilters.brand.length > 0) {
// //       queryParams.push(`brand=${selectedFilters.brand.join(',')}`);
// //     }
// //     if (selectedFilters.model.length > 0) {
// //       queryParams.push(`model=${selectedFilters.model.join(',')}`);
// //     }

// //     const finalQuery = queryParams.join('&');

// //     navigation.navigate('BottomNavigator', {
// //       screen: 'SearchScreen', 
// //       params: { filterQuery: finalQuery },
// //     });
// //   };

// const applyFilters = () => {
//     let queryParams = [];

//     // 1. 💰 Price (Backend keys: minPrice, maxPrice)
//     if (selectedFilters.price) {
//       queryParams.push(`minPrice=${selectedFilters.price.min}`);
//       queryParams.push(`maxPrice=${selectedFilters.price.max}`);
//     }

//     // 2. 🚗 KM (Backend keys: minKm, maxKm)
//     if (selectedFilters.km) {
//       queryParams.push(`minKm=${selectedFilters.km.min}`);
//       queryParams.push(`maxKm=${selectedFilters.km.max}`);
//     }

//     // 3. 🏢 Brand & Model (IDs as Comma Separated String)
//     if (selectedFilters.brand.length > 0) {
//       queryParams.push(`brand=${selectedFilters.brand.join(',')}`);
//     }
//     if (selectedFilters.model.length > 0) {
//       queryParams.push(`model=${selectedFilters.model.join(',')}`);
//     }

//     // 4. 🔢 No of Owners (Backend key: noOfOwners)
//     if (selectedFilters.noOfOwners.length > 0) {
//       queryParams.push(`noOfOwners=${selectedFilters.noOfOwners.join(',')}`);
//     }

//     // 5. ⛽ Fuel & Transmission (Single string as per your backend regex)
//     if (selectedFilters.fuelType.length > 0) {
//       queryParams.push(`fuelType=${selectedFilters.fuelType[0]}`); // Backend regex single string le raha hai
//     }
//     if (selectedFilters.transmission.length > 0) {
//       queryParams.push(`transmission=${selectedFilters.transmission[0]}`);
//     }

//     const finalQuery = queryParams.join('&');
//     console.log("🚀 Sending to Backend:", finalQuery);

//     navigation.navigate('BottomNavigator', {
//       screen: 'SearchScreen', 
//       params: { filterQuery: finalQuery },
//     });
//   };

//   return {
//     activeCategory, setActiveCategory,
//     selectedFilters, toggleItem, selectRange,
//     applyFilters, brands, models, loading,
//     clearAll: () => setSelectedFilters({ model: [], brand: [], price: null, km: null })
//   };
// };


















// import { useState, useEffect, useCallback } from 'react';
// import axios from 'axios';
// import { ENDPOINTS } from '../../services/apiConfig';

// export const useFiltersLogic = (navigation: any, route: any) => {
//   const { initialCategory } = route.params || {};
//   const [activeCategory, setActiveCategory] = useState(initialCategory || "Make & Model");

//   const [brands, setBrands] = useState<any[]>([]);
//   const [models, setModels] = useState<any[]>([]);
//   const [loading, setLoading] = useState(false);

//   // --- 🚀 फिक्स 1: सभी Keys को खाली Array [] के साथ इनिशियलाइज़ करें ---
//   const [selectedFilters, setSelectedFilters] = useState<any>({
//     brand: [],
//     model: [],
//     fuelType: [],
//     transmission: [],
//     noOfOwners: [],
//     price: null,
//     km: null,
//   });

//   useEffect(() => {
//     const fetchData = async () => {
//       setLoading(true);
//       try {
//         const [brandRes, modelRes] = await Promise.all([
//           axios.get(ENDPOINTS.GET_BRANDS),
//           axios.get(ENDPOINTS.GET_TOP_MODELS)
//         ]);
//         if (brandRes.data.success) setBrands(brandRes.data.data);
//         if (modelRes.data.success) setModels(modelRes.data.data);
//       } catch (e) {
//         console.log("Filter Data Fetch Error:", e);
//       } finally {
//         setLoading(false);
//       }
//     };
//     fetchData();
//   }, []);

//   useEffect(() => {
//     if (initialCategory) setActiveCategory(initialCategory);
//   }, [initialCategory]);

//   const toggleItem = (key: string, id: any) => {
//     setSelectedFilters((prev: any) => {
//       const currentList = prev[key] || []; // बैकअप अगर key न मिले
//       const list = currentList.includes(id) 
//         ? currentList.filter((i: any) => i !== id) 
//         : [...currentList, id];
//       return { ...prev, [key]: list };
//     });
//   };

//   const selectRange = (key: string, min: number, max: number) => {
//     setSelectedFilters((prev: any) => ({ ...prev, [key]: { min, max } }));
//   };

//   // --- 🚀 फिक्स 2: .length चेक करने से पहले ?. लगायें ---
//   const applyFilters = () => {
//     let queryParams = [];

//     if (selectedFilters.price) {
//       queryParams.push(`minPrice=${selectedFilters.price.min}&maxPrice=${selectedFilters.price.max}`);
//     }
//     if (selectedFilters.km) {
//       queryParams.push(`minKm=${selectedFilters.km.min}&maxKm=${selectedFilters.km.max}`);
//     }

//     // Optional Chaining (?.) का उपयोग करें ताकि undefined होने पर क्रैश न हो
//     if (selectedFilters.brand?.length > 0) {
//       queryParams.push(`brand=${selectedFilters.brand.join(',')}`);
//     }
//     if (selectedFilters.model?.length > 0) {
//       queryParams.push(`model=${selectedFilters.model.join(',')}`);
//     }
//     if (selectedFilters.fuelType?.length > 0) {
//       queryParams.push(`fuelType=${selectedFilters.fuelType.join(',')}`);
//     }
//     if (selectedFilters.transmission?.length > 0) {
//       queryParams.push(`transmission=${selectedFilters.transmission.join(',')}`);
//     }
//     if (selectedFilters.noOfOwners?.length > 0) {
//       queryParams.push(`noOfOwners=${selectedFilters.noOfOwners.join(',')}`);
//     }

//     const finalQuery = queryParams.join('&');
//     console.log("📡 Sending Filter Query:", finalQuery);

//     navigation.navigate('BottomNavigator', {
//       screen: 'SearchScreen', 
//       params: { filterQuery: finalQuery },
//     });
//   };

//   const clearAll = () => {
//     setSelectedFilters({ 
//       brand: [], model: [], fuelType: [], 
//       transmission: [], noOfOwners: [], 
//       price: null, km: null 
//     });
//   };

//   return {
//     activeCategory, setActiveCategory,
//     selectedFilters, toggleItem, selectRange,
//     applyFilters, brands, models, loading, clearAll
//   };
// };



















// import { useState, useEffect, useCallback } from 'react';
// import axios from 'axios';
// import { ENDPOINTS } from '../../services/apiConfig';

// export const useFiltersLogic = (navigation: any, route: any) => {
//   const { initialCategory } = route.params || {};
//   const [activeCategory, setActiveCategory] = useState(initialCategory || "Brands");

//   const [brands, setBrands] = useState<any[]>([]);
//   const [models, setModels] = useState<any[]>([]);
//   const [loading, setLoading] = useState(false);

//   // --- 🚀 स्टेट अपडेट: सिंगल वैल्यू के लिए null इस्तेमाल करें ---
//   const [selectedFilters, setSelectedFilters] = useState<any>({
//     brand: [],        // Multi-select
//     model: [],        // Multi-select
//     fuelType: null,    // Single-select (Fix)
//     transmission: null, // Single-select (Fix)
//     noOfOwners: null,   // Single-select (Fix)
//     price: null,
//     km: null,
//   });

//   useEffect(() => {
//     const fetchData = async () => {
//       setLoading(true);
//       try {
//         const [brandRes, modelRes] = await Promise.all([
//           axios.get(ENDPOINTS.GET_BRANDS),
//           axios.get(ENDPOINTS.GET_TOP_MODELS)
//         ]);
//         if (brandRes.data.success) setBrands(brandRes.data.data);
//         if (modelRes.data.success) setModels(modelRes.data.data);
//       } catch (e) { console.log(e); } finally { setLoading(false); }
//     };
//     fetchData();
//   }, []);

//   useEffect(() => {
//     if (initialCategory) setActiveCategory(initialCategory);
//   }, [initialCategory]);

//   // --- 🚀 मल्टी-सिलेक्शन (Brand/Model) के लिए ---
//   const toggleItem = (key: string, id: any) => {
//     setSelectedFilters((prev: any) => {
//       const currentList = prev[key] || [];
//       const list = currentList.includes(id) 
//         ? currentList.filter((i: any) => i !== id) 
//         : [...currentList, id];
//       return { ...prev, [key]: list };
//     });
//   };

//   // --- 🚀 फिक्स: सिंगल-सिलेक्शन (Fuel/Trans/Owner) के लिए नया फंक्शन ---
//   const selectSingle = (key: string, value: any) => {
//     setSelectedFilters((prev: any) => ({
//       ...prev,
//       // अगर दोबारा उसी पर क्लिक किया तो अन-सेलेक्ट (null) कर दो, वरना नई वैल्यू सेट करो
//       [key]: prev[key] === value ? null : value 
//     }));
//   };

//   const selectRange = (key: string, min: number, max: number) => {
//     setSelectedFilters((prev: any) => ({ ...prev, [key]: { min, max } }));
//   };

//   const applyFilters = () => {
//     let queryParams = [];

//     if (selectedFilters.price) queryParams.push(`minPrice=${selectedFilters.price.min}&maxPrice=${selectedFilters.price.max}`);
//     if (selectedFilters.km) queryParams.push(`minKm=${selectedFilters.km.min}&maxKm=${selectedFilters.km.max}`);

//     if (selectedFilters.brand?.length > 0) queryParams.push(`brand=${selectedFilters.brand.join(',')}`);
//     if (selectedFilters.model?.length > 0) queryParams.push(`model=${selectedFilters.model.join(',')}`);

//     // --- 🚀 सिंगल वैल्यूज़ को सीधे भेजें ---
//     if (selectedFilters.fuelType) queryParams.push(`fuelType=${selectedFilters.fuelType}`);
//     if (selectedFilters.transmission) queryParams.push(`transmission=${selectedFilters.transmission}`);
//     if (selectedFilters.noOfOwners) queryParams.push(`noOfOwners=${selectedFilters.noOfOwners}`);

//     const finalQuery = queryParams.join('&');
//     console.log("📡 Sending Filter Query:", finalQuery);

//     navigation.navigate('BottomNavigator', {
//       screen: 'SearchScreen', 
//       params: { filterQuery: finalQuery },
//     });
//   };

//   return {
//     activeCategory, setActiveCategory,
//     selectedFilters, toggleItem, selectRange, selectSingle, // इसे एक्सपोर्ट करें
//     applyFilters, brands, models, loading, 
//     clearAll: () => setSelectedFilters({ brand: [], model: [], fuelType: null, transmission: null, noOfOwners: null, price: null, km: null })
//   };
// };


















// import { useState, useEffect, useCallback } from 'react';
// import axios from 'axios';
// import { ENDPOINTS } from '../../services/apiConfig';

// export const useFiltersLogic = (navigation: any, route: any) => {
//   const { initialCategory } = route.params || {};
//   const [activeCategory, setActiveCategory] = useState(initialCategory || "By Brand / Model");

//   const [brands, setBrands] = useState<any[]>([]);
//   const [allModels, setAllModels] = useState<any>({});
//   const [loading, setLoading] = useState(false);
//   const [topModels, setTopModels] = useState<any[]>([]);

//   const [selectedFilters, setSelectedFilters] = useState<any>({
//     brand: [],
//     model: [],
//     fuelType: null,
//     transmission: null,
//     noOfOwners: null,
//     price: null,
//     km: null,
//   });


//   const fetchModels = async (brandId: string) => {
//     try {

//       const res = await axios.get(
//         ENDPOINTS.GET_MODELS(brandId)
//       );

//       if (res.data.success) {

//         setAllModels((prev: any) => ({
//           ...prev,
//           [brandId]: res.data.data,
//         }));

//       }

//     } catch (e) {
//       console.log(e);
//     }
//   };

//   useEffect(() => {
//     const fetchData = async () => {
//       setLoading(true);

//       try {
//         const [brandRes, topModelsRes] = await Promise.all([
//           axios.get(ENDPOINTS.GET_BRANDS),
//           axios.get(ENDPOINTS.GET_TOP_MODELS),
//         ]);

//         if (brandRes.data.success) {
//           setBrands(brandRes.data.data);
//         }

//         if (topModelsRes.data.success) {
//           setTopModels(topModelsRes.data.data);
//         }

//       } catch (e) {
//         console.log(e);
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchData();
//   }, []);

//   useEffect(() => {
//     if (initialCategory) setActiveCategory(initialCategory);
//   }, [initialCategory]);

//   const toggleItem = async (key: string, id: any) => {

//     const isAlreadySelected =
//       selectedFilters[key]?.includes(id);

//     setSelectedFilters((prev: any) => {

//       const currentList = prev[key] || [];

//       const updatedList = isAlreadySelected
//         ? currentList.filter((i: any) => i !== id)
//         : [...currentList, id];

//       return {
//         ...prev,
//         [key]: updatedList,
//       };
//     });

//     // BRAND LOGIC
//     if (key === 'brand') {

//       // Brand REMOVE
//       if (isAlreadySelected) {

//         setAllModels((prev: any) => {

//           const updated = { ...prev };

//           delete updated[id];

//           return updated;
//         });

//       } else {

//         // Brand ADD
//         fetchModels(id);
//       }
//     }
//   };

//   const selectSingle = (key: string, value: any) => {
//     setSelectedFilters((prev: any) => ({
//       ...prev,
//       [key]: prev[key] === value ? null : value
//     }));
//   };

//   const selectRange = (key: string, min: number, max: number) => {
//     setSelectedFilters((prev: any) => ({ ...prev, [key]: { min, max } }));
//   };

//   const applyFilters = () => {
//     let queryParams = [];
//     if (selectedFilters.price) queryParams.push(`minPrice=${selectedFilters.price.min}&maxPrice=${selectedFilters.price.max}`);
//     if (selectedFilters.km) queryParams.push(`minKm=${selectedFilters.km.min}&maxKm=${selectedFilters.km.max}`);
//     if (selectedFilters.brand?.length > 0) queryParams.push(`brand=${selectedFilters.brand.join(',')}`);
//     if (selectedFilters.model?.length > 0) queryParams.push(`model=${selectedFilters.model.join(',')}`);
//     if (selectedFilters.fuelType) queryParams.push(`fuelType=${selectedFilters.fuelType}`);
//     if (selectedFilters.transmission) queryParams.push(`transmission=${selectedFilters.transmission}`);
//     if (selectedFilters.noOfOwners) queryParams.push(`noOfOwners=${selectedFilters.noOfOwners}`);

//     const finalQuery = queryParams.join('&');
//     navigation.navigate('BottomNavigator', {
//       screen: 'SearchScreen',
//       params: { filterQuery: finalQuery },
//     });
//   };

//   return {
//     activeCategory, setActiveCategory,
//     selectedFilters, toggleItem, selectRange, selectSingle,
//     applyFilters, brands, allModels, topModels, loading,
//     clearAll: () => setSelectedFilters({ brand: [], model: [], fuelType: null, transmission: null, noOfOwners: null, price: null, km: null })
//   };
// };

















// import { useState, useEffect, useCallback } from 'react';
// import axios from 'axios';
// import { ENDPOINTS } from '../../services/apiConfig';

// export const useFiltersLogic = (navigation: any, route: any) => {
//   const { initialCategory } = route.params || {};
//   const [activeCategory, setActiveCategory] = useState(initialCategory || "By Brand / Model");

//   const [brands, setBrands] = useState<any[]>([]);
//   const [allModels, setAllModels] = useState<any>({}); // Selected brands ke models yahan store honge
//   const [topModels, setTopModels] = useState<any[]>([]); // Default models
//   const [loading, setLoading] = useState(false);

//   const [selectedFilters, setSelectedFilters] = useState<any>({
//     brand: [],
//     model: [],
//     fuelType: null,
//     transmission: null,
//     noOfOwners: null,
//     price: null,
//     km: null,
//     minYear: null,
//     maxYear: null,
//   });

//   const selectYearPreset = (option: any) => {
//     const currentYear = new Date().getFullYear();
//     if (option.type === 'under') {
//       setSelectedFilters((prev: any) => ({
//         ...prev,
//         minYear: currentYear - option.yearsAgo,
//         maxYear: currentYear,
//       }));
//     } else {
//       setSelectedFilters((prev: any) => ({
//         ...prev,
//         minYear: 1900,
//         maxYear: currentYear - option.yearsAgo,
//       }));
//     }
//   };


//   // Initial Data Load (Brands & Top Models)
//   useEffect(() => {
//     const fetchData = async () => {
//       setLoading(true);
//       try {
//         const [brandRes, topModelsRes] = await Promise.all([
//           axios.get(ENDPOINTS.GET_BRANDS),
//           axios.get(ENDPOINTS.GET_TOP_MODELS),
//         ]);
//         if (brandRes.data.success) setBrands(brandRes.data.data);
//         if (topModelsRes.data.success) setTopModels(topModelsRes.data.data);
//       } catch (e) {
//         console.log("Fetch Error:", e);
//       } finally {
//         setLoading(false);
//       }
//     };
//     fetchData();
//   }, []);

//   // Specific Brand ke Models fetch karna
//   const fetchModelsForBrand = async (brandId: string) => {
//     try {
//       const res = await axios.get(ENDPOINTS.GET_MODELS(brandId));
//       if (res.data.success) {
//         setAllModels((prev: any) => ({ ...prev, [brandId]: res.data.data }));
//       }
//     } catch (e) {
//       console.log("Models Fetch Error:", e);
//     }
//   };

//   useEffect(() => {
//     if (initialCategory) setActiveCategory(initialCategory);
//   }, [initialCategory]);

//   const toggleItem = async (key: string, id: any) => {
//     const isAlreadySelected = selectedFilters[key]?.includes(id);

//     setSelectedFilters((prev: any) => {
//       const currentList = prev[key] || [];
//       const updatedList = isAlreadySelected
//         ? currentList.filter((i: any) => i !== id)
//         : [...currentList, id];

//       return { ...prev, [key]: updatedList };
//     });

//     // Agar Brand toggle hua hai toh Models fetch/remove karo
//     if (key === 'brand') {
//       if (isAlreadySelected) {
//         setAllModels((prev: any) => {
//           const updated = { ...prev };
//           delete updated[id];
//           return updated;
//         });
//       } else {
//         fetchModelsForBrand(id);
//       }
//     }
//   };

//   const selectSingle = (key: string, value: any) => {
//     setSelectedFilters((prev: any) => ({
//       ...prev,
//       [key]: prev[key] === value ? null : value
//     }));
//   };

//   const selectRange = (key: string, min: number, max: number) => {
//     setSelectedFilters((prev: any) => ({ ...prev, [key]: { min, max } }));
//   };

//   const applyFilters = () => {
//     let queryParams = [];
//     if (selectedFilters.price) queryParams.push(`minPrice=${selectedFilters.price.min}&maxPrice=${selectedFilters.price.max}`);
//     if (selectedFilters.km) queryParams.push(`minKm=${selectedFilters.km.min}&maxKm=${selectedFilters.km.max}`);
//     if (selectedFilters.brand?.length > 0) queryParams.push(`brand=${selectedFilters.brand.join(',')}`);
//     if (selectedFilters.model?.length > 0) queryParams.push(`model=${selectedFilters.model.join(',')}`);
//     if (selectedFilters.fuelType) queryParams.push(`fuelType=${selectedFilters.fuelType}`);
//     if (selectedFilters.transmission) queryParams.push(`transmission=${selectedFilters.transmission}`);
//     if (selectedFilters.noOfOwners) queryParams.push(`noOfOwners=${selectedFilters.noOfOwners}`);
//     if (selectedFilters.minYear) queryParams.push(`minYear=${selectedFilters.minYear}`);
//     if (selectedFilters.maxYear) queryParams.push(`maxYear=${selectedFilters.maxYear}`);

//     const finalQuery = queryParams.join('&');
//     navigation.navigate('BottomNavigator', {
//       screen: 'SearchScreen',
//       params: { filterQuery: finalQuery },
//     });
//   };

//   return {
//     activeCategory, setActiveCategory,
//     selectedFilters, toggleItem, selectRange, selectSingle,
//     applyFilters, brands, allModels, topModels, loading,
//      selectYearPreset,
//     setCustomYear: (key: 'minYear' | 'maxYear', val: string) => {
//         setSelectedFilters((prev: any) => ({ ...prev, [key]: val ? Number(val) : null }));
//     },
//     clearAll: () => {
//       setSelectedFilters({ brand: [], model: [], fuelType: null, transmission: null, noOfOwners: null, price: null, km: null, minYear: null, maxYear: null });
//       setAllModels({});
//     }
//   };
// };


















import { useState, useEffect, useCallback } from 'react';
import axios from 'axios';
import { ENDPOINTS } from '../../services/apiConfig';
import { useSelector } from 'react-redux'; // 👈 Redux hook
import { RootState } from '../../redux/store'; // 👈 RootState type

export const useFiltersLogic = (navigation: any, route: any) => {
  const { initialCategory } = route.params || {};
  const [activeCategory, setActiveCategory] = useState(initialCategory || "By Brand / Model");

  // 🚀 1. Redux se Static Data lo (Ab API call ki zaroorat nahi)
  const { brands, topModels } = useSelector((state: RootState) => state.data);

  const [allModels, setAllModels] = useState<any>({}); // Selected brands ke models yahan dynamic hi rahenge
  const [loading, setLoading] = useState(false);

  const [selectedFilters, setSelectedFilters] = useState<any>({
    brand: [],
    model: [],
    fuelType: null,
    transmission: null,
    noOfOwners: null,
    price: null,
    km: null,
    minYear: null,
    maxYear: null,
  });

  const selectYearPreset = (option: any) => {
    const currentYear = new Date().getFullYear();
    if (option.type === 'under') {
      setSelectedFilters((prev: any) => ({
        ...prev,
        minYear: currentYear - option.yearsAgo,
        maxYear: currentYear,
      }));
    } else {
      setSelectedFilters((prev: any) => ({
        ...prev,
        minYear: 1900,
        maxYear: currentYear - option.yearsAgo,
      }));
    }
  };

  // 🚀 2. "fetchData" hat gaya kyunki data ab Redux mein hai

  // 🚀 3. Specific Brand ke Models fetch karna (Ye dynamic hi rahega)
  const fetchModelsForBrand = async (brandId: string) => {
    try {
      const res = await axios.get(ENDPOINTS.GET_MODELS(brandId));
      if (res.data.success) {
        setAllModels((prev: any) => ({ ...prev, [brandId]: res.data.data }));
      }
    } catch (e) {
      console.log("Models Fetch Error:", e);
    }
  };

  useEffect(() => {
    if (initialCategory) setActiveCategory(initialCategory);
  }, [initialCategory]);

  const toggleItem = async (key: string, id: any) => {
    const isAlreadySelected = selectedFilters[key]?.includes(id);

    setSelectedFilters((prev: any) => {
      const currentList = prev[key] || [];
      const updatedList = isAlreadySelected
        ? currentList.filter((i: any) => i !== id)
        : [...currentList, id];

      return { ...prev, [key]: updatedList };
    });

    if (key === 'brand') {
      if (isAlreadySelected) {
        setAllModels((prev: any) => {
          const updated = { ...prev };
          delete updated[id];
          return updated;
        });
      } else {
        fetchModelsForBrand(id);
      }
    }
  };

  const selectSingle = (key: string, value: any) => {
    setSelectedFilters((prev: any) => ({
      ...prev,
      [key]: prev[key] === value ? null : value
    }));
  };

  const selectRange = (key: string, min: number, max: number) => {
    setSelectedFilters((prev: any) => ({ ...prev, [key]: { min, max } }));
  };

  const applyFilters = () => {
    let queryParams = [];
    if (selectedFilters.price) queryParams.push(`minPrice=${selectedFilters.price.min}&maxPrice=${selectedFilters.price.max}`);
    if (selectedFilters.km) queryParams.push(`minKm=${selectedFilters.km.min}&maxKm=${selectedFilters.km.max}`);
    if (selectedFilters.brand?.length > 0) queryParams.push(`brand=${selectedFilters.brand.join(',')}`);
    if (selectedFilters.model?.length > 0) queryParams.push(`model=${selectedFilters.model.join(',')}`);
    if (selectedFilters.fuelType) queryParams.push(`fuelType=${selectedFilters.fuelType}`);
    if (selectedFilters.transmission) queryParams.push(`transmission=${selectedFilters.transmission}`);
    if (selectedFilters.noOfOwners) queryParams.push(`noOfOwners=${selectedFilters.noOfOwners}`);
    if (selectedFilters.minYear) queryParams.push(`minYear=${selectedFilters.minYear}`);
    if (selectedFilters.maxYear) queryParams.push(`maxYear=${selectedFilters.maxYear}`);

    const finalQuery = queryParams.join('&');
    navigation.navigate('BottomNavigator', {
      screen: 'SearchScreen',
      params: { filterQuery: finalQuery },
    });
  };

  return {
    activeCategory, setActiveCategory,
    selectedFilters, toggleItem, selectRange, selectSingle,
    applyFilters, brands, allModels, topModels, loading,
    selectYearPreset,
    setCustomYear: (key: 'minYear' | 'maxYear', val: string) => {
      setSelectedFilters((prev: any) => ({ ...prev, [key]: val ? Number(val) : null }));
    },
    clearAll: () => {
      setSelectedFilters({ brand: [], model: [], fuelType: null, transmission: null, noOfOwners: null, price: null, km: null, minYear: null, maxYear: null });
      setAllModels({});
    }
  };
};