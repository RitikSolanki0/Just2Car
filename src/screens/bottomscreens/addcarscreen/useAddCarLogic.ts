// import { useState, useEffect } from 'react';
// import axios from 'axios';
// import AsyncStorage from '@react-native-async-storage/async-storage';
// import { ENDPOINTS } from '../../../services/apiConfig';
// import { showSuccessToast, showErrorToast } from '../../../utils/showToast';
// import { Alert } from 'react-native';

// export const useAddCarLogic = (navigation: any) => {
//     // --- Form States ---
//     const [sellerName, setSellerName] = useState("");
//     const [sellerEmail, setSellerEmail] = useState("");
//     const [sellerMobile, setSellerMobile] = useState("");
//     const [regNumber, setRegNumber] = useState("");
//     const [carName, setCarName] = useState(""); // API field 'name'
//     const [condition, setCondition] = useState("1st"); // noOfOwners के लिए
//     const [year, setYear] = useState("");
//     const [kmDriven, setKmDriven] = useState("");
//     const [expectedPrice, setExpectedPrice] = useState("");
//     const [fuelType, setFuelType] = useState("");
//     const [transmission, setTransmission] = useState("Manual");
//     const [description, setDescription] = useState("");
//     const [features, setFeatures] = useState<string[]>([]);
//     const [mediaFiles, setMediaFiles] = useState<any[]>([]);

//     // --- API Data States ---
//     const [states, setStates] = useState<any[]>([]);
//     const [cities, setCities] = useState<any[]>([]);
//     const [brands, setBrands] = useState<any[]>([]);
//     const [models, setModels] = useState<any[]>([]);

//     // --- Selection IDs ---
//     const [selectedState, setSelectedState] = useState({ id: "", name: "" });
//     const [selectedCity, setSelectedCity] = useState({ id: "", name: "" });
//     const [selectedBrand, setSelectedBrand] = useState({ id: "", name: "" });
//     const [selectedModel, setSelectedModel] = useState({ id: "", name: "" });
//     const [variant, setVariant] = useState("");

//     const [address, setAddress] = useState("");
//     const [location, setLocation] = useState("");

//     const [loading, setLoading] = useState(false);

//     // 1. लोड होते ही User Data, States और Brands फेच करें
//     useEffect(() => {
//         const initData = async () => {
//             // Get Logged-in User Info
//             const userData = await AsyncStorage.getItem('userData');
//             if (userData) {
//                 const user = JSON.parse(userData);
//                 setSellerName(user.fullName || "");
//                 setSellerEmail(user.email || "");
//                 setSellerMobile(user.phone || "");
//             }

//             // Fetch Initial Lists
//             try {
//                 const [stateRes, brandRes] = await Promise.all([
//                     axios.get(ENDPOINTS.GET_STATES),
//                     axios.get(ENDPOINTS.GET_BRANDS)
//                 ]);
//                 setStates(stateRes.data.data);
//                 setBrands(brandRes.data.data);
//             } catch (e) {
//                 console.log("Error loading initial data", e);
//             }
//         };
//         initData();
//     }, []);

//     // 2. जब State बदले तो Cities लोड करें
//     const onStateChange = async (name: string) => {
//         const item = states.find(s => s.name === name);
//         if (item) {
//             setSelectedState({ id: item._id, name: item.name });
//             setSelectedCity({ id: "", name: "" }); // Reset City
//             try {
//                 const res = await axios.get(ENDPOINTS.GET_CITIES(item._id));
//                 setCities(res.data.data);
//             } catch (e) { console.log(e); }
//         }
//     };

//     // 3. जब Brand बदले तो Models लोड करें
//     const onBrandChange = async (name: string) => {
//         const item = brands.find(b => b.name === name);
//         if (item) {
//             setSelectedBrand({ id: item._id, name: item.name });
//             setSelectedModel({ id: "", name: "" }); // Reset Model
//             try {
//                 const res = await axios.get(ENDPOINTS.GET_MODELS(item._id));
//                 setModels(res.data.data);
//             } catch (e) { console.log(e); }
//         }
//     };

//     // const handleSellCarSubmission = async () => {
//     //     if (!carName || !selectedBrand.id || !expectedPrice || !sellerMobile) {
//     //         showErrorToast("Error", "Please fill required fields.");
//     //         return;
//     //     }

//     //     setLoading(true);
//     //     try {
//     //         // images और video को अलग करें
//     //         const images = mediaFiles.filter(f => f.mime.startsWith('image')).map(f => f.path);
//     //         const video = mediaFiles.find(f => f.mime.startsWith('video'))?.path || null;

//     //         const payload = {
//     //             sellerName,
//     //             sellerMobile,
//     //             sellerEmail,
//     //             state: selectedState.id,
//     //             city: selectedCity.id,
//     //             address: address.trim(), // नई चाबी (Key)
//     //             make: selectedBrand.name,
//     //             model: selectedModel.name,
//     //             variant,
//     //             name: carName,
//     //             year: parseInt(year),
//     //             kmDriven: parseInt(kmDriven),
//     //             fuelType,
//     //             transmission,
//     //             registrationNumber: regNumber,
//     //             noOfOwners: condition === "1st" ? 1 : condition === "2nd" ? 2 : 3,
//     //             expectedPrice: parseFloat(expectedPrice),
//     //             description,
//     //             features,
//     //             images: images, // नोट: असली ऐप में यहाँ FormData लगेगा फाइल अपलोड के लिए
//     //             inspectionVideo: video,

//     //         };

//     //         const response = await axios.post(ENDPOINTS.SELL_CAR, payload);
//     //         if (response.data.success) {
//     //             showSuccessToast("Success", "Car listing submitted!");
//     //             navigation.navigate('HomeScreen');
//     //         }
//     //     } catch (error: any) {
//     //         showErrorToast("Failed", error.response?.data?.message || "Submission failed");
//     //     } finally {
//     //         setLoading(false);
//     //     }
//     // };

//     const handleSellCarSubmission = async () => {
//   // --- 📝 यहाँ पूरी रिपोर्ट कंसोल में दिखेगी ---
//   console.log("=== 🚗 CAR SUBMISSION DATA REPORT ===");
//   console.log("Seller Name:", sellerName);
//   console.log("Seller Mobile:", sellerMobile);
//   console.log("Seller Email:", sellerEmail);
//   console.log("Car Name:", carName);
//   console.log("Reg Number:", regNumber);
//   console.log("State (ID):", selectedState.id, "| Name:", selectedState.name);
//   console.log("City (ID):", selectedCity.id, "| Name:", selectedCity.name);
//   console.log("Brand:", selectedBrand.name);
//   console.log("Model:", selectedModel.name);
//   console.log("Variant:", variant);
//   console.log("Condition (Owners):", condition);
//   console.log("Year:", year);
//   console.log("Fuel Type:", fuelType);
//   console.log("Transmission:", transmission);
//   console.log("KM Driven:", kmDriven);
//   console.log("Price:", expectedPrice);
//   console.log("Address:", address);
//   console.log("Features List:", features);
//   console.log("Media Files Count:", mediaFiles.length);
//   console.log("====================================");

//   // 1. वैलिडेशन चेक
//   if (!carName || !selectedBrand.id || !expectedPrice || !sellerMobile || !address) {
//     Alert.alert("Error", "Please fill all required fields, including Address.");
//     return;
//   }

//   setLoading(true);
//   try {
//     const images = mediaFiles.filter(f => f.mime.startsWith('image')).map(f => f.path);
//     const video = mediaFiles.find(f => f.mime.startsWith('video'))?.path || null;

//     const payload = {
//       sellerName, sellerMobile, sellerEmail,
//       state: selectedState.id, city: selectedCity.id,
//       make: selectedBrand.name, model: selectedModel.name,
//       variant, name: carName, year: parseInt(year),
//       kmDriven: parseInt(kmDriven), fuelType, transmission,
//       registrationNumber: regNumber,
//       noOfOwners: condition === "1st" ? 1 : condition === "2nd" ? 2 : 3,
//       expectedPrice: parseFloat(expectedPrice),
//       description, features, address, // एड्रेस यहाँ जुड़ गया
//       images, inspectionVideo: video
//     };

//     const response = await axios.post(ENDPOINTS.SELL_CAR, payload);
//     if (response.data.success) {
//       showSuccessToast("Success", "Car listing submitted!");
//       navigation.navigate('HomeScreen');
//     }
//   } catch (error: any) {
//     console.log("API ERROR:", error.response?.data || error.message);
//     showErrorToast("Failed", error.response?.data?.message || "Submission failed");
//   } finally {
//     setLoading(false);
//   }
// };

//     return {
//         sellerName, setSellerName, sellerEmail, setSellerEmail, sellerMobile, setSellerMobile,
//         carName, setCarName, regNumber, setRegNumber, variant, setVariant, year, setYear,
//         kmDriven, setKmDriven, expectedPrice, setExpectedPrice, fuelType, setFuelType,
//         transmission, setTransmission, description, setDescription, features, setFeatures,
//         mediaFiles, setMediaFiles, loading, handleSellCarSubmission,
//         states: states.map(s => s.name),
//         cities: cities.map(c => c.name),
//         address, setAddress,
//         brands: brands.map(b => b.name),
//         models: models.map(m => m.name),
//         selectedState, onStateChange,
//         selectedCity, onCitySelect: (n: string) => setSelectedCity({ id: cities.find(c => c.name === n)._id, name: n }),
//         selectedBrand, onBrandChange,
//         selectedModel, onModelSelect: (n: string) => setSelectedModel({ id: models.find(m => m.name === n)._id, name: n }),
//         condition, setCondition,
//         location, setLocation
//     };
// };

















// import { useState, useEffect } from 'react';
// import axios from 'axios';
// import AsyncStorage from '@react-native-async-storage/async-storage';
// import { ENDPOINTS } from '../../../services/apiConfig';
// import { showSuccessToast, showErrorToast } from '../../../utils/showToast';
// import { Alert } from 'react-native';

// export const useAddCarLogic = (navigation: any) => {
//     // --- Form States ---
//     const [sellerName, setSellerName] = useState("");
//     const [sellerEmail, setSellerEmail] = useState("");
//     const [sellerMobile, setSellerMobile] = useState("");
//     const [regNumber, setRegNumber] = useState("");
//     const [carName, setCarName] = useState(""); 
//     const [condition, setCondition] = useState("1st"); 
//     const [year, setYear] = useState("");
//     const [kmDriven, setKmDriven] = useState("");
//     const [expectedPrice, setExpectedPrice] = useState("");
//     const [fuelType, setFuelType] = useState("");
//     const [transmission, setTransmission] = useState("Manual");
//     const [description, setDescription] = useState("");
//     const [features, setFeatures] = useState<string[]>([]);
//     const [mediaFiles, setMediaFiles] = useState<any[]>([]);

//     // --- API Data States ---
//     const [states, setStates] = useState<any[]>([]);
//     const [cities, setCities] = useState<any[]>([]);
//     const [brands, setBrands] = useState<any[]>([]);
//     const [models, setModels] = useState<any[]>([]);

//     // --- Selection IDs ---
//     const [selectedState, setSelectedState] = useState({ id: "", name: "" });
//     const [selectedCity, setSelectedCity] = useState({ id: "", name: "" });
//     const [selectedBrand, setSelectedBrand] = useState({ id: "", name: "" });
//     const [selectedModel, setSelectedModel] = useState({ id: "", name: "" });
//     const [variant, setVariant] = useState("");

//     const [address, setAddress] = useState("");
//     const [location, setLocation] = useState(""); // Registration City

//     const [loading, setLoading] = useState(false);

//     // 1. लोड होते ही User Data, States और Brands फेच करें
//     useEffect(() => {
//         const initData = async () => {
//             console.log("--- 🏁 Initializing AddCar Data ---");
//             const userData = await AsyncStorage.getItem('userData');
//             if (userData) {
//                 const user = JSON.parse(userData);
//                 console.log("👤 Logged-in User:", user.fullName);
//                 setSellerName(user.fullName || "");
//                 setSellerEmail(user.email || "");
//                 setSellerMobile(user.phone || "");
//             }

//             try {
//                 console.log("📡 Fetching States & Brands...");
//                 const [stateRes, brandRes] = await Promise.all([
//                     axios.get(ENDPOINTS.GET_STATES),
//                     axios.get(ENDPOINTS.GET_BRANDS)
//                 ]);
//                 setStates(stateRes.data.data);
//                 setBrands(brandRes.data.data);
//                 console.log("✅ Initial Data Loaded: States(", stateRes.data.data.length, ") Brands(", brandRes.data.data.length, ")");
//             } catch (e) {
//                 console.log("❌ Initial Fetch Error:", e);
//             }
//         };
//         initData();
//     }, []);

//     // 2. जब State बदले तो Cities लोड करें
//     const onStateChange = async (name: string) => {
//         console.log("📍 State Selection Changed:", name);
//         const item = states.find(s => s.name === name);
//         if (item) {
//             setSelectedState({ id: item._id, name: item.name });
//             setSelectedCity({ id: "", name: "" }); 
//             try {
//                 const res = await axios.get(ENDPOINTS.GET_CITIES(item._id));
//                 setCities(res.data.data);
//                 console.log("🏙️ Cities Loaded for", name, ":", res.data.data.length);
//             } catch (e) { console.log("❌ City Fetch Error:", e); }
//         }
//     };

//     // 3. जब Brand बदले तो Models लोड करें
//     const onBrandChange = async (name: string) => {
//         console.log("🚗 Brand Selection Changed:", name);
//         const item = brands.find(b => b.name === name);
//         if (item) {
//             setSelectedBrand({ id: item._id, name: item.name });
//             setSelectedModel({ id: "", name: "" }); 
//             try {
//                 const res = await axios.get(ENDPOINTS.GET_MODELS(item._id));
//                 setModels(res.data.data);
//                 console.log("🚘 Models Loaded for", name, ":", res.data.data.length);
//             } catch (e) { console.log("❌ Model Fetch Error:", e); }
//         }
//     };

//     // --- 🚀 मुख्य सबमिशन फंक्शन ---
//     // const handleSellCarSubmission = async () => {
//     //     console.log("=== 📝 STARTING SUBMISSION PROCESS ===");

//     //     // डेटा रिपोर्ट
//     //     const report = {
//     //         sellerName, sellerMobile, sellerEmail, carName, regNumber,
//     //         state: selectedState.name, city: selectedCity.name, address,
//     //         make: selectedBrand.name, model: selectedModel.name, variant,
//     //         condition, year, fuelType, transmission, kmDriven, expectedPrice,
//     //         featuresCount: features.length, mediaCount: mediaFiles.length
//     //     };
//     //     console.log("📊 Data Report:", JSON.stringify(report, null, 2));

//     //     // 1. वैलिडेशन
//     //     if (!carName || !selectedBrand.id || !expectedPrice || !sellerMobile || !address || mediaFiles.length === 0) {
//     //         console.log("⚠️ Validation Failed: Required fields missing.");
//     //         Alert.alert("Missing Info", "Please fill all required fields and add at least one image.");
//     //         return;
//     //     }

//     //     setLoading(true);
//     //     try {
//     //         // 2. टोकन निकालें
//     //         console.log("🔑 Checking User Token...");
//     //         const token = await AsyncStorage.getItem('userToken');
//     //         if (!token) {
//     //             console.log("❌ Token Not Found!");
//     //             Alert.alert("Unauthorized", "Session expired. Please login again.");
//     //             setLoading(false); return;
//     //         }

//     //         // --- 3. FormData तैयार करें (फाइल अपलोड के लिए ज़रूरी) ---
//     //         console.log("📦 Constructing FormData...");
//     //         const formData = new FormData();

//     //         // टेक्स्ट डेटा जोड़ें
//     //         formData.append('sellerName', sellerName);
//     //         formData.append('sellerMobile', sellerMobile);
//     //         formData.append('sellerEmail', sellerEmail);
//     //         formData.append('state', selectedState.id);
//     //         formData.append('city', selectedCity.id);
//     //         formData.append('address', address.trim());
//     //         formData.append('make', selectedBrand.name);
//     //         formData.append('model', selectedModel.name);
//     //         formData.append('variant', variant || "Base");
//     //         formData.append('name', carName);
//     //         formData.append('year', year);
//     //         formData.append('kmDriven', kmDriven);
//     //         formData.append('fuelType', fuelType || "Petrol");
//     //         formData.append('transmission', transmission);
//     //         formData.append('registrationNumber', regNumber);
//     //         formData.append('registrationCity', location || selectedCity.name);
//     //         formData.append('noOfOwners', condition === "1st" ? "1" : condition === "2nd" ? "2" : "3");
//     //         formData.append('expectedPrice', expectedPrice);
//     //         formData.append('description', description || "No description");
//     //         formData.append('negotiable', 'false');
//     //         formData.append('sellerType', 'individual');

//     //         // फीचर्स एरे जोड़ें
//     //         features.forEach((f, i) => formData.append(`features[${i}]`, f));

//     //         // --- 4. इमेजेस जोड़ें (Binary Format) ---
//     //         const imageFiles = mediaFiles.filter(f => f.mime && f.mime.startsWith('image'));
//     //         console.log("🖼️ Adding", imageFiles.length, "images to FormData");
//     //         imageFiles.forEach((file, index) => {
//     //             formData.append('images', {
//     //                 uri: file.path,
//     //                 type: file.mime || 'image/jpeg',
//     //                 name: `car_img_${index}_${Date.now()}.jpg`,
//     //             } as any);
//     //         });

//     //         // --- 5. वीडियो जोड़ें ---
//     //         const videoFile = mediaFiles.find(f => f.mime && f.mime.startsWith('video'));
//     //         if (videoFile) {
//     //             console.log("🎥 Adding video to FormData");
//     //             formData.append('inspectionVideo', {
//     //                 uri: videoFile.path,
//     //                 type: videoFile.mime || 'video/mp4',
//     //                 name: `car_video_${Date.now()}.mp4`,
//     //             } as any);
//     //         }

//     //         console.log("📡 Sending API Request to:", ENDPOINTS.SELL_CAR);

//     //         // --- 6. API हिट करें ---
//     //         const response = await axios.post(ENDPOINTS.SELL_CAR, formData, {
//     //             headers: {
//     //                 'Authorization': `Bearer ${token}`,
//     //                 'Content-Type': 'multipart/form-data',
//     //             },
//     //             timeout: 60000, // 1 मिनट का टाइमआउट (वीडियो के लिए)
//     //         });

//     //         console.log("✅ API Response Success:", JSON.stringify(response.data, null, 2));

//     //         if (response.data.success) {
//     //             showSuccessToast("Success", "Car listed successfully! ❤️");
//     //             navigation.navigate('HomeScreen');
//     //         }
//     //     } catch (error: any) {
//     //         console.log("--- ❌ API ERROR REPORT ---");
//     //         if (error.response) {
//     //             console.log("Status:", error.response.status);
//     //             console.log("Server Message:", JSON.stringify(error.response.data, null, 2));
//     //         } else {
//     //             console.log("Network Error:", error.message);
//     //         }
//     //         showErrorToast("Failed", error.response?.data?.message || "Something went wrong during submission.");
//     //     } finally {
//     //         setLoading(false);
//     //         console.log("=== 🏁 PROCESS ENDED ===");
//     //     }
//     // };

//     const handleSellCarSubmission = async () => {
//     console.log("=== 📝 STARTING SUBMISSION PROCESS ===");

//     if (!carName || !selectedBrand.id || !expectedPrice || !sellerMobile || !address || mediaFiles.length === 0) {
//         Alert.alert("Error", "Required fields or images are missing.");
//         return;
//     }

//     setLoading(true);
//     try {
//         const token = await AsyncStorage.getItem('userToken');
//         const formData = new FormData();

//         // --- 1. टेक्स्ट डेटा (सब कुछ String में भेजें) ---
//         formData.append('sellerName', String(sellerName));
//         formData.append('sellerMobile', String(sellerMobile));
//         formData.append('sellerEmail', String(sellerEmail));
//         formData.append('state', String(selectedState.id));
//         formData.append('city', String(selectedCity.id));
//         formData.append('address', String(address).trim());
//         formData.append('make', String(selectedBrand.name));
//         formData.append('model', String(selectedModel.name));
//         formData.append('variant', String(variant || "Base"));
//         formData.append('name', String(carName));
//         formData.append('year', String(year));
//         formData.append('kmDriven', String(kmDriven));
//         formData.append('fuelType', String(fuelType || "Petrol"));
//         formData.append('transmission', String(transmission));
//         formData.append('registrationNumber', String(regNumber));
//         formData.append('registrationCity', String(location || selectedCity.name));
//         formData.append('noOfOwners', condition === "1st" ? "1" : condition === "2nd" ? "2" : "3");
//         formData.append('expectedPrice', String(expectedPrice));
//         formData.append('description', String(description || "No description"));
//         formData.append('negotiable', 'false');
//         formData.append('sellerType', 'individual');

//         // फीचर्स को भेजने का तरीका
//         if (features.length > 0) {
//             features.forEach((f) => formData.append('features', f));
//         }

//         // --- 2. इमेजेस (सिर्फ 'images' चाबी का उपयोग करें) ---
//         const imageFiles = mediaFiles.filter(f => f.mime && f.mime.startsWith('image'));
//         imageFiles.forEach((file, index) => {
//             const fileData = {
//                 uri: file.path,
//                 type: file.mime || 'image/jpeg',
//                 name: `image_${index}.jpg`,
//             };
//             formData.append('images', fileData as any);
//         });

//         // --- 3. वीडियो (अगर है) ---
//         const videoFile = mediaFiles.find(f => f.mime && f.mime.startsWith('video'));
//         if (videoFile) {
//             formData.append('inspectionVideo', {
//                 uri: videoFile.path,
//                 type: videoFile.mime || 'video/mp4',
//                 name: 'video.mp4',
//             } as any);
//         }

//         // नोट: 'documents' को हटा दिया है क्योंकि पिछले एरर में शायद इसकी वजह से 'map' वाला क्रैश हो रहा था।

//         console.log("📡 Final Attempt to API with FormData...");

//         const response = await axios.post(ENDPOINTS.SELL_CAR, formData, {
//             headers: {
//                 'Authorization': `Bearer ${token}`,
//                 'Content-Type': 'multipart/form-data',
//             },
//             // फाइल बड़ी हो सकती है इसलिए टाइमआउट बढ़ाया
//             timeout: 60000, 
//         });

//         console.log("✅ API Success Response:", response.data);

//         if (response.data.success) {
//             showSuccessToast("Success", "Car listed successfully!");
//             navigation.navigate('HomeScreen');
//         }
//     } catch (error: any) {
//         console.log("--- ❌ API ERROR REPORT ---");
//         if (error.response) {
//             console.log("Status Code:", error.response.status);
//             console.log("Server Msg:", JSON.stringify(error.response.data, null, 2));
//         } else {
//             console.log("Error Message:", error.message);
//         }
//         showErrorToast("Server Error", "Backend code is crashing. Please contact admin.");
//     } finally {
//         setLoading(false);
//     }
// };

//     return {
//         sellerName, setSellerName, sellerEmail, setSellerEmail, sellerMobile, setSellerMobile,
//         carName, setCarName, regNumber, setRegNumber, variant, setVariant, year, setYear,
//         kmDriven, setKmDriven, expectedPrice, setExpectedPrice, fuelType, setFuelType,
//         transmission, setTransmission, description, setDescription, features, setFeatures,
//         mediaFiles, setMediaFiles, loading, handleSellCarSubmission,
//         states: states.map(s => s.name),
//         cities: cities.map(c => c.name),
//         address, setAddress,
//         brands: brands.map(b => b.name),
//         models: models.map(m => m.name),
//         selectedState, onStateChange,
//         selectedCity, onCitySelect: (n: string) => {
//             const city = cities.find(c => c.name === n);
//             if (city) setSelectedCity({ id: city._id, name: n });
//         },
//         selectedBrand, onBrandChange,
//         selectedModel, onModelSelect: (n: string) => {
//             const model = models.find(m => m.name === n);
//             if (model) setSelectedModel({ id: model._id, name: n });
//         },
//         condition, setCondition,
//         location, setLocation
//     };
// };




















// import { useState, useEffect } from 'react';
// import axios from 'axios';
// import AsyncStorage from '@react-native-async-storage/async-storage';
// import { ENDPOINTS } from '../../../services/apiConfig';
// import { showSuccessToast, showErrorToast } from '../../../utils/showToast';
// import { Alert } from 'react-native';

// export const useAddCarLogic = (navigation: any) => {
//     // --- Form States ---
//     const [sellerName, setSellerName] = useState("");
//     const [sellerEmail, setSellerEmail] = useState("");
//     const [sellerMobile, setSellerMobile] = useState("");
//     const [regNumber, setRegNumber] = useState("");
//     const [carName, setCarName] = useState(""); 
//     const [condition, setCondition] = useState("1st"); 
//     const [year, setYear] = useState("");
//     const [kmDriven, setKmDriven] = useState("");
//     const [expectedPrice, setExpectedPrice] = useState("");
//     const [fuelType, setFuelType] = useState("");
//     const [transmission, setTransmission] = useState("Manual");
//     const [description, setDescription] = useState("");
//     const [features, setFeatures] = useState<string[]>([]);
//     const [mediaFiles, setMediaFiles] = useState<any[]>([]);

//     // --- API Data States ---
//     const [states, setStates] = useState<any[]>([]);
//     const [cities, setCities] = useState<any[]>([]);
//     const [brands, setBrands] = useState<any[]>([]);
//     const [models, setModels] = useState<any[]>([]);

//     // --- Selection IDs ---
//     const [selectedState, setSelectedState] = useState({ id: "", name: "" });
//     const [selectedCity, setSelectedCity] = useState({ id: "", name: "" });
//     const [selectedBrand, setSelectedBrand] = useState({ id: "", name: "" });
//     const [selectedModel, setSelectedModel] = useState({ id: "", name: "" });
//     const [variant, setVariant] = useState("");

//     const [address, setAddress] = useState("");
//     const [location, setLocation] = useState(""); // Registration City

//     const [loading, setLoading] = useState(false);

//     // 1. Initial Load
//     useEffect(() => {
//         const initData = async () => {
//             console.log("--- 🏁 Initializing AddCar Data ---");
//             const userData = await AsyncStorage.getItem('userData');
//             if (userData) {
//                 const user = JSON.parse(userData);
//                 setSellerName(user.fullName || "");
//                 setSellerEmail(user.email || "");
//                 setSellerMobile(user.phone || "");
//             }

//             try {
//                 const [stateRes, brandRes] = await Promise.all([
//                     axios.get(ENDPOINTS.GET_STATES),
//                     axios.get(ENDPOINTS.GET_BRANDS)
//                 ]);
//                 setStates(stateRes.data.data);
//                 setBrands(brandRes.data.data);
//                 console.log("✅ Basic Lists Loaded");
//             } catch (e) {
//                 console.log("❌ Initial Fetch Error:", e);
//             }
//         };
//         initData();
//     }, []);

//     // 2. State to City Logic
//     const onStateChange = async (name: string) => {
//         const item = states.find(s => s.name === name);
//         if (item) {
//             setSelectedState({ id: item._id, name: item.name });
//             setSelectedCity({ id: "", name: "" }); 
//             try {
//                 const res = await axios.get(ENDPOINTS.GET_CITIES(item._id));
//                 setCities(res.data.data);
//             } catch (e) { console.log(e); }
//         }
//     };

//     // 3. Brand to Model Logic (Updated for IDs)
//     const onBrandChange = async (name: string) => {
//         console.log("🚗 Brand Selected:", name);
//         const item = brands.find(b => b.name === name);
//         if (item) {
//             // यहाँ हम ID और Name दोनों को स्टेट में रख रहे हैं
//             setSelectedBrand({ id: item._id, name: item.name });
//             setSelectedModel({ id: "", name: "" }); 
//             try {
//                 console.log("📡 Fetching models for Brand ID:", item._id);
//                 const res = await axios.get(ENDPOINTS.GET_MODELS(item._id));
//                 setModels(res.data.data);
//             } catch (e) { console.log(e); }
//         }
//     };

//     // --- 🚀 Submission Logic (FormData) ---
//     const handleSellCarSubmission = async () => {
//         console.log("=== 📝 STARTING SUBMISSION PROCESS ===");

//         // 1. Validation
//         if (!carName || !selectedBrand.id || !selectedModel.id || !expectedPrice || !sellerMobile || !address || mediaFiles.length === 0) {
//             console.log("⚠️ Validation Failed");
//             Alert.alert("Missing Info", "Please fill all required fields and add at least one image.");
//             return;
//         }

//         setLoading(true);
//         try {
//             const token = await AsyncStorage.getItem('userToken');
//             if (!token) {
//                 Alert.alert("Unauthorized", "Session expired.");
//                 setLoading(false); return;
//             }

//             const formData = new FormData();

//             // --- 2. Appending Text Data ---
//             formData.append('sellerName', sellerName);
//             formData.append('sellerMobile', sellerMobile);
//             formData.append('sellerEmail', sellerEmail);
//             formData.append('state', selectedState.id);
//             formData.append('city', selectedCity.id);
//             formData.append('address', address.trim());

//             // --- फिक्स: 'make' की जगह 'brand' और 'id' भेज रहे हैं ---
//             formData.append('brand', selectedBrand.id); 
//             formData.append('model', selectedModel.id);

//             formData.append('variant', variant || "Base");
//             formData.append('name', carName);
//             formData.append('year', year);
//             formData.append('kmDriven', kmDriven);
//             formData.append('fuelType', fuelType || "Petrol");
//             formData.append('transmission', transmission);
//             formData.append('registrationNumber', regNumber);
//             formData.append('registrationCity', location || selectedCity.name);
//             formData.append('noOfOwners', condition === "1st" ? "1" : condition === "2nd" ? "2" : "3");
//             formData.append('expectedPrice', expectedPrice);
//             formData.append('description', description || "No description");
//             formData.append('negotiable', 'false');
//             formData.append('sellerType', 'individual');

//             // Features loop
//             features.forEach((f, i) => formData.append(`features[${i}]`, f));

//             // Images loop
//             const imageFiles = mediaFiles.filter(f => f.mime && f.mime.startsWith('image'));
//             imageFiles.forEach((file, index) => {
//                 formData.append('images', {
//                     uri: file.path,
//                     type: file.mime || 'image/jpeg',
//                     name: `img_${index}.jpg`,
//                 } as any);
//             });

//             // Video
//             const videoFile = mediaFiles.find(f => f.mime && f.mime.startsWith('video'));
//             if (videoFile) {
//                 formData.append('inspectionVideo', {
//                     uri: videoFile.path,
//                     type: videoFile.mime || 'video/mp4',
//                     name: 'video.mp4',
//                 } as any);
//             }

//             console.log("📡 Sending API Request with IDs for Brand and Model...");
//             console.log("Brand ID:", selectedBrand.id);
//             console.log("Model ID:", selectedModel.id);

//             const response = await axios.post(ENDPOINTS.SELL_CAR, formData, {
//                 headers: {
//                     'Authorization': `Bearer ${token}`,
//                     'Content-Type': 'multipart/form-data',
//                 },
//                 timeout: 60000,
//             });

//             if (response.data.success) {
//                 // Form Reset
//                 setRegNumber(""); setCarName(""); setYear(""); setKmDriven(""); setExpectedPrice("");
//                 setDescription(""); setFeatures([]); setMediaFiles([]);
//                 showSuccessToast("Success", "Car listed successfully! ❤️");
//                 navigation.navigate('HomeScreen');
//             }
//         } catch (error: any) {
//             console.log("❌ API ERROR:", error.response?.data || error.message);
//             showErrorToast("Failed", error.response?.data?.message || "Submission failed");
//         } finally {
//             setLoading(false);
//         }
//     };

//     return {
//         sellerName, setSellerName, sellerEmail, setSellerEmail, sellerMobile, setSellerMobile,
//         carName, setCarName, regNumber, setRegNumber, variant, setVariant, year, setYear,
//         kmDriven, setKmDriven, expectedPrice, setExpectedPrice, fuelType, setFuelType,
//         transmission, setTransmission, description, setDescription, features, setFeatures,
//         mediaFiles, setMediaFiles, loading, handleSellCarSubmission,
//         states: states.map(s => s.name),
//         cities: cities.map(c => c.name),
//         address, setAddress,
//         brands: brands.map(b => b.name),
//         models: models.map(m => m.name),
//         selectedState, onStateChange,
//         selectedCity, onCitySelect: (n: string) => {
//             const city = cities.find(c => c.name === n);
//             if (city) setSelectedCity({ id: city._id, name: n });
//         },
//         selectedBrand, onBrandChange,
//         selectedModel, onModelSelect: (n: string) => {
//             const model = models.find(m => m.name === n);
//             if (model) setSelectedModel({ id: model._id, name: n });
//         },
//         condition, setCondition, location, setLocation
//     };
// };






















// import { useState, useEffect } from 'react';
// import axios from 'axios';
// import AsyncStorage from '@react-native-async-storage/async-storage';
// import { ENDPOINTS } from '../../../services/apiConfig';
// import { showSuccessToast, showErrorToast } from '../../../utils/showToast';
// import { Alert } from 'react-native';

// export const useAddCarLogic = (navigation: any) => {
//     // --- Form States ---
//     const [sellerName, setSellerName] = useState("");
//     const [sellerEmail, setSellerEmail] = useState("");
//     const [sellerMobile, setSellerMobile] = useState("");
//     const [regNumber, setRegNumber] = useState("");
//     const [carName, setCarName] = useState("");
//     const [condition, setCondition] = useState("1st");
//     const [year, setYear] = useState("");
//     const [kmDriven, setKmDriven] = useState("");
//     const [expectedPrice, setExpectedPrice] = useState("");
//     const [fuelType, setFuelType] = useState("");
//     const [transmission, setTransmission] = useState("Manual");
//     const [description, setDescription] = useState("");
//     const [features, setFeatures] = useState<string[]>([]);
//     const [mediaFiles, setMediaFiles] = useState<any[]>([]);

//     // --- API Data States ---
//     const [states, setStates] = useState<any[]>([]);
//     const [cities, setCities] = useState<any[]>([]);
//     const [brands, setBrands] = useState<any[]>([]);
//     const [models, setModels] = useState<any[]>([]);

//     // --- Selection IDs ---
//     const [selectedState, setSelectedState] = useState({ id: "", name: "" });
//     const [selectedCity, setSelectedCity] = useState({ id: "", name: "" });
//     const [selectedBrand, setSelectedBrand] = useState({ id: "", name: "" });
//     const [selectedModel, setSelectedModel] = useState({ id: "", name: "" });
//     const [variant, setVariant] = useState("");

//     const [address, setAddress] = useState("");
//     const [location, setLocation] = useState(""); // Registration City

//     const [loading, setLoading] = useState(false);

//     // 1. Initial Load
//     useEffect(() => {
//         const initData = async () => {
//             console.log("--- 🏁 Initializing AddCar Data ---");
//             const userData = await AsyncStorage.getItem('userData');
//             if (userData) {
//                 const user = JSON.parse(userData);
//                 console.log("👤 Logged-in User Data found:", user.fullName);
//                 setSellerName(user.fullName || "");
//                 setSellerEmail(user.email || "");
//                 setSellerMobile(user.phone || "");
//             }

//             try {
//                 const [stateRes, brandRes] = await Promise.all([
//                     axios.get(ENDPOINTS.GET_STATES),
//                     axios.get(ENDPOINTS.GET_BRANDS)
//                 ]);
//                 setStates(stateRes.data.data);
//                 setBrands(brandRes.data.data);
//                 console.log("✅ API States & Brands loaded successfully");
//             } catch (e) {
//                 console.log("❌ Initial Fetch Error:", e);
//             }
//         };
//         initData();
//     }, []);

//     // 2. State to City Logic
//     const onStateChange = async (name: string) => {
//         console.log("📍 User selected State:", name);
//         const item = states.find(s => s.name === name);
//         if (item) {
//             setSelectedState({ id: item._id, name: item.name });
//             setSelectedCity({ id: "", name: "" });
//             try {
//                 const res = await axios.get(ENDPOINTS.GET_CITIES(item._id));
//                 setCities(res.data.data);
//                 console.log("🏙️ Cities updated for State ID:", item._id);
//             } catch (e) { console.log("❌ City Fetch Error:", e); }
//         }
//     };

//     // 3. Brand to Model Logic
//     const onBrandChange = async (name: string) => {
//         console.log("🚗 User selected Brand:", name);
//         const item = brands.find(b => b.name === name);
//         if (item) {
//             setSelectedBrand({ id: item._id, name: item.name });
//             setSelectedModel({ id: "", name: "" });
//             try {
//                 console.log("📡 Fetching models for Brand ID:", item._id);
//                 const res = await axios.get(ENDPOINTS.GET_MODELS(item._id));
//                 setModels(res.data.data);
//                 console.log("🚘 Models updated for Brand:", name);
//             } catch (e) { console.log("❌ Model Fetch Error:", e); }
//         }
//     };

//     // --- 🚀 Submission Logic with Detailed Logging ---
//     const handleSellCarSubmission = async () => {
//         console.log("====================================");
//         console.log("🚀 STARTING SELL-CAR SUBMISSION");
//         console.log("====================================");

//         // --- 📋 Step 1: Log all current states ---
//         const rawDataReport = {
//             sellerName,
//             sellerEmail,
//             sellerMobile,
//             carName,
//             regNumber,
//             registrationCity: location || selectedCity.name,
//             state: selectedState,
//             city: selectedCity,
//             brand: selectedBrand,
//             model: selectedModel,
//             variant: variant || "Base",
//             condition,
//             year,
//             kmDriven,
//             expectedPrice,
//             fuelType: fuelType || "Petrol",
//             transmission,
//             address,
//             description,
//             featuresCount: features.length,
//             mediaCount: mediaFiles.length
//         };

//         console.log("📦 RAW FORM DATA REPORT:", JSON.stringify(rawDataReport, null, 2));

//         // 1. Validation check with Log
//         if (!selectedBrand.id || !selectedModel.id || !expectedPrice || !sellerMobile  || mediaFiles.length === 0) {
//             console.log("⚠️ VALIDATION FAILED: Some required fields are empty");
//             Alert.alert("Missing Info", "Please fill all required fields and add at least one image.");
//             return;
//         }

//         setLoading(true);
//         try {
//             console.log("🔑 Retrieving Auth Token...");
//             const token = await AsyncStorage.getItem('userToken');

//             if (!token) {
//                 console.log("❌ ERROR: User Token not found in storage");
//                 Alert.alert("Unauthorized", "Session expired.");
//                 setLoading(false); return;
//             }
//             console.log("✅ Token found, preparing FormData...");

//             const formData = new FormData();

//             // --- 2. Appending data and logging each append ---
//             formData.append('sellerName', sellerName);
//             formData.append('sellerMobile', sellerMobile);
//             formData.append('sellerEmail', sellerEmail);
//             formData.append('state', selectedState.id);
//             formData.append('city', selectedCity.id);
//             formData.append('address', address.trim());
//             formData.append('brand', selectedBrand.id);
//             formData.append('model', selectedModel.id);
//             formData.append('variant', variant || "Base");
//             formData.append('name', carName);
//             formData.append('year', year);
//             formData.append('kmDriven', kmDriven);
//             formData.append('fuelType', fuelType || "Petrol");
//             formData.append('transmission', transmission);
//             formData.append('registrationNumber', regNumber);
//             formData.append('registrationCity', location || selectedCity.name);
//             formData.append('noOfOwners', condition === "1st" ? "1" : condition === "2nd" ? "2" : "3");
//             formData.append('expectedPrice', expectedPrice);
//             formData.append('description', description || "No description");
//             formData.append('negotiable', 'false');
//             formData.append('sellerType', 'individual');

//             // Features
//             // features.forEach((f, i) => {
//             //     formData.append(`features[${i}]`, f);
//             // });
//             if (features.length > 0) {
//                 features.forEach((f) => {
//                     console.log("➕ Appending Feature to FormData:", f);
//                     formData.append('features', f); // बिना इंडेक्स के append करें
//                 });
//             } else {
//                 // अगर कोई फीचर नहीं है, तो कम से कम एक खाली स्ट्रिंग भेजें ताकि फील्ड undefined न रहे
//                 formData.append('features', "");
//             }

//             // Images
//             const imageFiles = mediaFiles.filter(f => f.mime && f.mime.startsWith('image'));
//             console.log(`🖼️ Appending ${imageFiles.length} Images to FormData`);
//             imageFiles.forEach((file, index) => {
//                 formData.append('images', {
//                     uri: file.path,
//                     type: file.mime || 'image/jpeg',
//                     name: `img_${index}.jpg`,
//                 } as any);
//             });

//             // Video
//             const videoFile = mediaFiles.find(f => f.mime && f.mime.startsWith('video'));
//             if (videoFile) {
//                 console.log("🎥 Appending Video to FormData");
//                 formData.append('inspectionVideo', {
//                     uri: videoFile.path,
//                     type: videoFile.mime || 'video/mp4',
//                     name: 'video.mp4',
//                 } as any);
//             }

//             console.log("📡 SENDING REQUEST TO:", ENDPOINTS.SELL_CAR);

//             const response = await axios.post(ENDPOINTS.SELL_CAR, formData, {
//                 headers: {
//                     'Authorization': `Bearer ${token}`,
//                     'Content-Type': 'multipart/form-data',
//                 },
//                 timeout: 60000,
//             });

//             console.log("✅ SERVER RESPONSE SUCCESS:", JSON.stringify(response.data, null, 2));

//             if (response.data.success) {
//                 // Form Reset
//                 console.log("🧹 Success! Resetting form and navigating to Home");
//                 setRegNumber(""); setCarName(""); setYear(""); setKmDriven(""); setExpectedPrice("");
//                 setDescription(""); setFeatures([]); setMediaFiles([]);
//                 showSuccessToast("Success", "Car listed successfully! ❤️");
//                 navigation.navigate('HomeScreen');
//             }
//         } catch (error: any) {
//             console.log("❌ SERVER ERROR REPORT:");
//             if (error.response) {
//                 console.log("Status:", error.response.status);
//                 console.log("Data:", JSON.stringify(error.response.data, null, 2));
//                 console.log("Headers:", error.response.headers);
//             } else {
//                 console.log("Error Message:", error.message);
//             }
//             showErrorToast("Failed", error.response?.data?.message || "Submission failed");
//         } finally {
//             setLoading(false);
//             console.log("🔚 SUBMISSION ATTEMPT FINISHED");
//             console.log("====================================");
//         }
//     };

//     return {
//         sellerName, setSellerName, sellerEmail, setSellerEmail, sellerMobile, setSellerMobile,
//         carName, setCarName, regNumber, setRegNumber, variant, setVariant, year, setYear,
//         kmDriven, setKmDriven, expectedPrice, setExpectedPrice, fuelType, setFuelType,
//         transmission, setTransmission, description, setDescription, features, setFeatures,
//         mediaFiles, setMediaFiles, loading, handleSellCarSubmission,
//         states: states.map(s => s.name),
//         cities: cities.map(c => c.name),
//         address, setAddress,
//         brands: brands.map(b => b.name),
//         models: models.map(m => m.name),
//         selectedState, onStateChange,
//         selectedCity, onCitySelect: (n: string) => {
//             const city = cities.find(c => c.name === n);
//             if (city) {
//                 setSelectedCity({ id: city._id, name: n });
//                 console.log("🏙️ Final City Selection:", n, "(ID:", city._id, ")");
//             }
//         },
//         selectedBrand, onBrandChange,
//         selectedModel, onModelSelect: (n: string) => {
//             const model = models.find(m => m.name === n);
//             if (model) {
//                 setSelectedModel({ id: model._id, name: n });
//                 console.log("🚘 Final Model Selection:", n, "(ID:", model._id, ")");
//             }
//         },
//         condition, setCondition, location, setLocation
//     };
// };




























// import { useState, useEffect } from 'react';
// import axios from 'axios';
// import AsyncStorage from '@react-native-async-storage/async-storage';
// import { ENDPOINTS } from '../../../services/apiConfig';
// import { showSuccessToast, showErrorToast } from '../../../utils/showToast';
// import { Alert } from 'react-native';
// import ImagePicker from 'react-native-image-crop-picker';
// // --- 🚀 कंप्रेशन के लिए लाइब्रेरी ---
// import { Image as ImageCompressor, Video as VideoCompressor } from 'react-native-compressor';

// export const useAddCarLogic = (navigation: any) => {
//     // --- Form States ---
//     const [sellerName, setSellerName] = useState("");
//     const [sellerEmail, setSellerEmail] = useState("");
//     const [sellerMobile, setSellerMobile] = useState("");
//     const [regNumber, setRegNumber] = useState("");
//     const [carName, setCarName] = useState("");
//     const [condition, setCondition] = useState("1st");
//     const [year, setYear] = useState("");
//     const [kmDriven, setKmDriven] = useState("");
//     const [expectedPrice, setExpectedPrice] = useState("");
//     const [fuelType, setFuelType] = useState("");
//     const [transmission, setTransmission] = useState("Manual");
//     const [description, setDescription] = useState("");
//     const [features, setFeatures] = useState<string[]>([]);
//     const [mediaFiles, setMediaFiles] = useState<any[]>([]);

//     // --- API Data States ---
//     const [states, setStates] = useState<any[]>([]);
//     const [cities, setCities] = useState<any[]>([]);
//     const [brands, setBrands] = useState<any[]>([]);
//     const [models, setModels] = useState<any[]>([]);

//     const [selectedState, setSelectedState] = useState({ id: "", name: "" });
//     const [selectedCity, setSelectedCity] = useState({ id: "", name: "" });
//     const [selectedBrand, setSelectedBrand] = useState({ id: "", name: "" });
//     const [selectedModel, setSelectedModel] = useState({ id: "", name: "" });
//     const [variant, setVariant] = useState("");

//     const [address, setAddress] = useState("");
//     const [location, setLocation] = useState(""); 

//     const [loading, setLoading] = useState(false);

//     // 1. Initial Load
//     useEffect(() => {
//         const initData = async () => {
//             console.log("--- 🏁 Initializing AddCar Data ---");
//             const userData = await AsyncStorage.getItem('userData');
//             if (userData) {
//                 const user = JSON.parse(userData);
//                 console.log("👤 Logged-in User:", user.fullName);
//                 setSellerName(user.fullName || "");
//                 setSellerEmail(user.email || "");
//                 setSellerMobile(user.phone || "");
//             }

//             try {
//                 const [stateRes, brandRes] = await Promise.all([
//                     axios.get(ENDPOINTS.GET_STATES),
//                     axios.get(ENDPOINTS.GET_BRANDS)
//                 ]);
//                 setStates(stateRes.data.data);
//                 setBrands(brandRes.data.data);
//             } catch (e) { console.log("❌ Initial Fetch Error:", e); }
//         };
//         initData();
//     }, []);

//     // --- 🚀 NEW: Media Picker with High Speed Compression ---
//     const handleUploadMedia = (type: 'image' | 'video') => {
//         console.log(`--- 📂 Picking ${type} ---`);

//         const pickerOptions = type === 'image' ? {
//             multiple: true,
//             mediaType: 'photo' as const,
//             maxFiles: 4 - mediaFiles.filter(f => f.mime.startsWith('image')).length,
//         } : {
//             mediaType: 'video' as const,
//         };

//         ImagePicker.openPicker(pickerOptions).then(async (results) => {
//             setLoading(true); // लोडिंग चालू
//             let processedFiles: any[] = [];
//             const filesArray = Array.isArray(results) ? results : [results];

//             for (const file of filesArray) {
//                 try {
//                     if (file.mime.startsWith('image')) {
//                         console.log(`📸 Original Image Size: ${Math.round(file.size / 1024)} KB`);

//                         // इमेज कंप्रेस करें
//                         const compressedPath = await ImageCompressor.compress(file.path, {
//                             maxWidth: 1200,
//                             quality: 0.8,
//                         });

//                         processedFiles.push({ ...file, path: compressedPath });
//                         console.log("✅ Image Compressed Successfully");

//                     } else if (file.mime.startsWith('video')) {
//                         console.log(`🎥 Original Video Size: ${Math.round(file.size / (1024 * 1024))} MB`);

//                         const duration = (file as any).duration / 1000;
//                         if (duration > 60) {
//                             Alert.alert("Error", "Video is too long (Max 1 min)");
//                             continue;
//                         }

//                         // वीडियो कंप्रेस करें (यह सबसे ज़्यादा टाइम बचाता है)
//                         const compressedVideoPath = await VideoCompressor.compress(file.path, {
//                             compressionMethod: 'auto',
//                         });

//                         processedFiles.push({ ...file, path: compressedVideoPath });
//                         console.log("✅ Video Compressed Successfully");
//                     }
//                 } catch (err) {
//                     console.log("❌ Compression Error:", err);
//                     processedFiles.push(file); // Error होने पर ऑरिजिनल जोड़ें
//                 }
//             }

//             setMediaFiles(prev => [...prev, ...processedFiles]);
//             setLoading(false);
//         }).catch(e => {
//             setLoading(false);
//             if (e.code !== 'E_PICKER_CANCELLED') console.log(e);
//         });
//     };

//     // State to City Logic
//     const onStateChange = async (name: string) => {
//         console.log("📍 State Changed:", name);
//         const item = states.find(s => s.name === name);
//         if (item) {
//             setSelectedState({ id: item._id, name: item.name });
//             setSelectedCity({ id: "", name: "" });
//             try {
//                 const res = await axios.get(ENDPOINTS.GET_CITIES(item._id));
//                 setCities(res.data.data);
//             } catch (e) { console.log(e); }
//         }
//     };

//     // Brand to Model Logic
//     const onBrandChange = async (name: string) => {
//         console.log("🚗 Brand Changed:", name);
//         const item = brands.find(b => b.name === name);
//         if (item) {
//             setSelectedBrand({ id: item._id, name: item.name });
//             setSelectedModel({ id: "", name: "" });
//             try {
//                 const res = await axios.get(ENDPOINTS.GET_MODELS(item._id));
//                 setModels(res.data.data);
//             } catch (e) { console.log(e); }
//         }
//     };

//     // --- 🚀 Submission Logic ---
//     const handleSellCarSubmission = async () => {
//         console.log("====================================");
//         console.log("🚀 STARTING SELL-CAR SUBMISSION");

//         const rawDataReport = {
//             sellerName, sellerMobile, carName, brand: selectedBrand.name,
//             price: expectedPrice, address, mediaCount: mediaFiles.length
//         };
//         console.log("📦 PAYLOAD REPORT:", JSON.stringify(rawDataReport, null, 2));

//         if (!selectedBrand.id || !selectedModel.id || !expectedPrice || !sellerMobile || !address || mediaFiles.length === 0) {
//             Alert.alert("Missing Info", "Please fill all required fields.");
//             return;
//         }

//         setLoading(true);
//         try {
//             const token = await AsyncStorage.getItem('userToken');
//             const formData = new FormData();

//             formData.append('sellerName', sellerName);
//             formData.append('sellerMobile', sellerMobile);
//             formData.append('sellerEmail', sellerEmail);
//             formData.append('state', selectedState.id);
//             formData.append('city', selectedCity.id);
//             formData.append('address', address.trim());
//             formData.append('brand', selectedBrand.id);
//             formData.append('model', selectedModel.id);
//             formData.append('variant', variant || "Base");
//             formData.append('name', carName || `${selectedBrand.name} ${selectedModel.name}`);
//             formData.append('year', year);
//             formData.append('kmDriven', kmDriven);
//             formData.append('fuelType', fuelType || "Petrol");
//             formData.append('transmission', transmission);
//             formData.append('registrationNumber', regNumber);
//             formData.append('registrationCity', location || selectedCity.name);
//             formData.append('noOfOwners', condition === "1st" ? "1" : condition === "2nd" ? "2" : "3");
//             formData.append('expectedPrice', expectedPrice);
//             formData.append('description', description);
//             formData.append('negotiable', 'false');
//             formData.append('sellerType', 'individual');

//             // Features Fix
//             if (features.length > 0) {
//                 features.forEach(f => formData.append('features', f));
//             }

//             // Images (Compressed paths are used here)
//             const imageFiles = mediaFiles.filter(f => f.mime.startsWith('image'));
//             imageFiles.forEach((file, index) => {
//                 formData.append('images', {
//                     uri: file.path,
//                     type: file.mime || 'image/jpeg',
//                     name: `img_${index}.jpg`,
//                 } as any);
//             });

//             // Video (Compressed path is used here)
//             const videoFile = mediaFiles.find(f => f.mime.startsWith('video'));
//             if (videoFile) {
//                 formData.append('inspectionVideo', {
//                     uri: videoFile.path,
//                     type: videoFile.mime || 'video/mp4',
//                     name: 'video.mp4',
//                 } as any);
//             }

//             console.log("📡 Sending Request...");
//             const response = await axios.post(ENDPOINTS.SELL_CAR, formData, {
//                 headers: {
//                     'Authorization': `Bearer ${token}`,
//                     'Content-Type': 'multipart/form-data',
//                 },
//                 timeout: 90000, // बड़ा टाइमआउट
//             });

//             console.log("✅ SUCCESS:", response.data);

//             if (response.data.success) {
//                 showSuccessToast("Success", "Car listed successfully! ❤️");
//                 navigation.navigate('HomeScreen');
//             }
//         } catch (error: any) {
//             console.log("❌ ERROR:", error.response?.data || error.message);
//             showErrorToast("Failed", error.response?.data?.message || "Submission failed");
//         } finally {
//             setLoading(false);
//             console.log("====================================");
//         }
//     };

//     return {
//         sellerName, setSellerName, sellerEmail, setSellerEmail, sellerMobile, setSellerMobile,
//         carName, setCarName, regNumber, setRegNumber, variant, setVariant, year, setYear,
//         kmDriven, setKmDriven, expectedPrice, setExpectedPrice, fuelType, setFuelType,
//         transmission, setTransmission, description, setDescription, features, setFeatures,
//         mediaFiles, setMediaFiles, loading, handleSellCarSubmission, handleUploadMedia, // इसे रिटर्न किया गया है
//         states: states.map(s => s.name),
//         cities: cities.map(c => c.name),
//         address, setAddress,
//         brands: brands.map(b => b.name),
//         models: models.map(m => m.name),
//         selectedState, onStateChange,
//         selectedCity, onCitySelect: (n: string) => {
//             const city = cities.find(c => c.name === n);
//             if (city) setSelectedCity({ id: city._id, name: n });
//         },
//         selectedBrand, onBrandChange,
//         selectedModel, onModelSelect: (n: string) => {
//             const model = models.find(m => m.name === n);
//             if (model) setSelectedModel({ id: model._id, name: n });
//         },
//         condition, setCondition, location, setLocation
//     };
// };


























// import { useState, useEffect, useCallback } from 'react';
// import axios from 'axios';
// import AsyncStorage from '@react-native-async-storage/async-storage';
// import { ENDPOINTS } from '../../../services/apiConfig';
// import { showSuccessToast, showErrorToast } from '../../../utils/showToast';
// import { Alert } from 'react-native';
// import ImagePicker from 'react-native-image-crop-picker';
// import { Image as ImageCompressor, Video as VideoCompressor } from 'react-native-compressor';

// export const useAddCarLogic = (navigation: any) => {
//     // --- Form States ---
//     const [sellerName, setSellerName] = useState("");
//     const [sellerEmail, setSellerEmail] = useState("");
//     const [sellerMobile, setSellerMobile] = useState("");
//     const [regNumber, setRegNumber] = useState("");
//     const [condition, setCondition] = useState("1st");
//     const [year, setYear] = useState("");
//     const [kmDriven, setKmDriven] = useState("");
//     const [expectedPrice, setExpectedPrice] = useState("");
//     const [fuelType, setFuelType] = useState("");
//     const [transmission, setTransmission] = useState("Manual");
//     const [description, setDescription] = useState("");
//     const [features, setFeatures] = useState<string[]>([]);
//     const [mediaFiles, setMediaFiles] = useState<any[]>([]);

//     // --- API Data States ---
//     const [states, setStates] = useState<any[]>([]);
//     const [cities, setCities] = useState<any[]>([]);
//     const [brands, setBrands] = useState<any[]>([]);
//     const [models, setModels] = useState<any[]>([]);

//     const [selectedState, setSelectedState] = useState({ id: "", name: "" });
//     const [selectedCity, setSelectedCity] = useState({ id: "", name: "" });
//     const [selectedBrand, setSelectedBrand] = useState({ id: "", name: "" });
//     const [selectedModel, setSelectedModel] = useState({ id: "", name: "" });
//     const [variant, setVariant] = useState("");

//     const [address, setAddress] = useState("");
//     const [location, setLocation] = useState("");

//     const [loading, setLoading] = useState(false);

//     // --- 🚀 नया: एरर स्टेट (Individual Fields के लिए) ---
//     const [errors, setErrors] = useState<any>({});

//     // --- 🚀 नया: स्टेट अपडेटर हेल्पर (टाइप करने पर एरर हटाने के लिए) ---
//     const updateField = (setter: any, fieldName: string, value: any) => {
//         setter(value);
//         if (errors[fieldName]) {
//             setErrors((prev: any) => {
//                 const newErrors = { ...prev };
//                 delete newErrors[fieldName]; // उस फील्ड का एरर हटा दें
//                 return newErrors;
//             });
//         }
//     };

//     // 1. Initial Load
//     useEffect(() => {
//         const initData = async () => {
//             const userData = await AsyncStorage.getItem('userData');
//             if (userData) {
//                 const user = JSON.parse(userData);
//                 setSellerName(user.fullName || "");
//                 setSellerEmail(user.email || "");
//                 setSellerMobile(user.phone || "");
//             }
//             try {
//                 const [stateRes, brandRes] = await Promise.all([
//                     axios.get(ENDPOINTS.GET_STATES),
//                     axios.get(ENDPOINTS.GET_BRANDS)
//                 ]);
//                 setStates(stateRes.data.data);
//                 setBrands(brandRes.data.data);
//             } catch (e) { console.log(e); }
//         };
//         initData();
//     }, []);

//     const handleUploadMedia = (type: 'image' | 'video') => {
//         const pickerOptions = type === 'image' ? {
//             multiple: true,
//             mediaType: 'photo' as const,
//             maxFiles: 4 - mediaFiles.filter(f => f.mime.startsWith('image')).length,
//         } : { mediaType: 'video' as const };

//         ImagePicker.openPicker(pickerOptions).then(async (results) => {
//             setLoading(true);
//             let processedFiles: any[] = [];
//             const filesArray = Array.isArray(results) ? results : [results];

//             for (const file of filesArray) {
//                 try {
//                     if (file.mime.startsWith('image')) {
//                         const compressedPath = await ImageCompressor.compress(file.path, { maxWidth: 1200, quality: 0.8 });
//                         processedFiles.push({ ...file, path: compressedPath });
//                     } else if (file.mime.startsWith('video')) {
//                         const duration = (file as any).duration / 1000;
//                         if (duration > 60) { Alert.alert("Error", "Video is too long"); continue; }
//                         const compressedVideoPath = await VideoCompressor.compress(file.path, { compressionMethod: 'auto' });
//                         processedFiles.push({ ...file, path: compressedVideoPath });
//                     }
//                 } catch (err) { processedFiles.push(file); }
//             }
//             setMediaFiles(prev => [...prev, ...processedFiles]);
//             setErrors((prev: any) => ({ ...prev, mediaFiles: false })); // मीडिया ऐड होते ही एरर हटाओ
//             setLoading(false);
//         }).catch(e => setLoading(false));
//     };

//     const onStateChange = async (name: string) => {
//         updateField(() => { }, 'state', name);
//         const item = states.find(s => s.name === name);
//         if (item) {
//             setSelectedState({ id: item._id, name: item.name });
//             setSelectedCity({ id: "", name: "" });
//             try {
//                 const res = await axios.get(ENDPOINTS.GET_CITIES(item._id));
//                 setCities(res.data.data);
//             } catch (e) { console.log(e); }
//         }
//     };

//     const onBrandChange = async (name: string) => {
//         updateField(() => { }, 'brand', name);
//         const item = brands.find(b => b.name === name);
//         if (item) {
//             setSelectedBrand({ id: item._id, name: item.name });
//             setSelectedModel({ id: "", name: "" });
//             try {
//                 const res = await axios.get(ENDPOINTS.GET_MODELS(item._id));
//                 setModels(res.data.data);
//             } catch (e) { console.log(e); }
//         }
//     };

//     // --- 🚀 मुख्य सबमिशन फंक्शन (सटीक वैलिडेशन के साथ) ---
//     const handleSellCarSubmission = async () => {
//         let newErrors: any = {};

//         // एक-एक करके चेक करें और पहला एरर टोस्ट में दिखाएं
//          if (!regNumber.trim()) {
//             newErrors.regNumber = true;
//             showErrorToast("Oops", "Please enter Registration Number");
//         } else if (!selectedState.id) {
//             newErrors.state = true;
//             showErrorToast("Oops", "Please select State");
//         } else if (!selectedCity.id) {
//             newErrors.city = true;
//             showErrorToast("Oops", "Please select City");
//         } else if (!selectedBrand.id) {
//             newErrors.brand = true;
//             showErrorToast("Oops", "Please select Brand");
//         } else if (!selectedModel.id) {
//             newErrors.model = true;
//             showErrorToast("Oops", "Please select Model");
//         } else if (!variant.trim()) {
//             newErrors.variant = true;
//             showErrorToast("Oops", "Please enter Variant");
//         } else if (!year) {
//             newErrors.year = true;
//             showErrorToast("Oops", "Please select Year");
//         } else if (!fuelType) {
//             newErrors.fuelType = true;
//             showErrorToast("Oops", "Please select Fuel Type");
//         }  else if (!kmDriven.trim()) {
//             newErrors.kmDriven = true;
//             showErrorToast("Oops", "Please enter KM Driven");
//         } else if (!expectedPrice.trim()) {
//             newErrors.expectedPrice = true;
//             showErrorToast("Oops", "Please set Expected Price");
//         } else if (!address.trim()) {
//             newErrors.address = true;
//             showErrorToast("Oops", "Please enter Full Address");
//         } else if (features.length === 0) {
//             newErrors.features = true;
//             showErrorToast("Oops", "Please add at least one feature");
//         } else if (mediaFiles.length === 0) {
//             newErrors.mediaFiles = true;
//             showErrorToast("Oops", "Please upload at least one image");
//         } else if (!description.trim()) {
//             newErrors.description = true;
//             showErrorToast("Oops", "Please enter Description");
//         } 

//         if (Object.keys(newErrors).length > 0) {
//             setErrors(newErrors);
//             return;
//         }

//         setLoading(true);
//         try {
//             const token = await AsyncStorage.getItem('userToken');
//             const formData = new FormData();

//             formData.append('sellerName', sellerName);
//             formData.append('sellerMobile', sellerMobile);
//             formData.append('sellerEmail', sellerEmail);
//             formData.append('state', selectedState.id);
//             formData.append('city', selectedCity.id);
//             formData.append('address', address.trim());
//             formData.append('brand', selectedBrand.id);
//             formData.append('model', selectedModel.id);
//             formData.append('variant', variant);
//             formData.append('year', year);
//             formData.append('kmDriven', kmDriven);
//             formData.append('fuelType', fuelType);
//             formData.append('transmission', transmission);
//             formData.append('registrationNumber', regNumber);
//             formData.append('registrationCity', location || selectedCity.name);
//             formData.append('noOfOwners', condition === "1st" ? "1" : condition === "2nd" ? "2" : "3");
//             formData.append('expectedPrice', expectedPrice);
//             formData.append('description', description);
//             formData.append('negotiable', 'false');
//             formData.append('sellerType', 'individual');
//             features.forEach(f => formData.append('features', f));

//             const imageFiles = mediaFiles.filter(f => f.mime.startsWith('image'));
//             imageFiles.forEach((file, index) => {
//                 formData.append('images', { uri: file.path, type: file.mime || 'image/jpeg', name: `img_${index}.jpg` } as any);
//             });

//             const videoFile = mediaFiles.find(f => f.mime.startsWith('video'));
//             if (videoFile) {
//                 formData.append('inspectionVideo', { uri: videoFile.path, type: videoFile.mime || 'video/mp4', name: 'video.mp4' } as any);
//             }

//             const response = await axios.post(ENDPOINTS.SELL_CAR, formData, {
//                 headers: { 'Authorization': `Bearer ${token}`, 'Content-Type': 'multipart/form-data' },
//                 timeout: 90000,
//             });

//             if (response.data.success) {
//                 showSuccessToast("Success", "Car listed successfully! ❤️");
//                 navigation.navigate('HomeScreen');
//             }
//         } catch (error: any) {
//             showErrorToast("Failed", error.response?.data?.message || "Submission failed");
//         } finally { setLoading(false); }
//     };

//     return {
//         sellerName, setSellerName, sellerEmail, setSellerEmail, sellerMobile, setSellerMobile,
//         regNumber, setRegNumber: (val: any) => updateField(setRegNumber, 'regNumber', val),
//         variant, setVariant: (val: any) => updateField(setVariant, 'variant', val),
//         year, setYear: (val: any) => updateField(setYear, 'year', val),
//         kmDriven, setKmDriven: (val: any) => updateField(setKmDriven, 'kmDriven', val),
//         expectedPrice, setExpectedPrice: (val: any) => updateField(setExpectedPrice, 'expectedPrice', val),
//         fuelType, setFuelType: (val: any) => updateField(setFuelType, 'fuelType', val),
//         address, setAddress: (val: any) => updateField(setAddress, 'address', val),
//         transmission, setTransmission,  features, setFeatures,
//         mediaFiles, setMediaFiles, loading, handleSellCarSubmission, handleUploadMedia,
//         states: states.map(s => s.name),
//         cities: cities.map(c => c.name),
//         brands: brands.map(b => b.name),
//         models: models.map(m => m.name),
//         selectedState, onStateChange,
//         selectedCity, onCitySelect: (n: string) => { updateField(() => { }, 'city', n); const city = cities.find(c => c.name === n); if (city) setSelectedCity({ id: city._id, name: n }); },
//         selectedBrand, onBrandChange,
//         selectedModel, onModelSelect: (n: string) => { updateField(() => { }, 'model', n); const model = models.find(m => m.name === n); if (model) setSelectedModel({ id: model._id, name: n }); },
//         condition, setCondition, location, setLocation,
//         description, 
//         // setDescription,
//          setDescription: (val: any) => updateField(setDescription, 'description', val),
//         errors // एरर ऑब्जेक्ट यहाँ से जाएगा
//     };
// };















// import { useState, useEffect, useCallback } from 'react';
// import axios from 'axios';
// import AsyncStorage from '@react-native-async-storage/async-storage';
// import { ENDPOINTS } from '../../../services/apiConfig';
// import { showSuccessToast, showErrorToast } from '../../../utils/showToast';
// import { Alert } from 'react-native';
// import ImagePicker from 'react-native-image-crop-picker';
// import { Image as ImageCompressor, Video as VideoCompressor } from 'react-native-compressor';

// export const useAddCarLogic = (navigation: any) => {
//     // --- 1. Form States ---
//     const [sellerName, setSellerName] = useState("");
//     const [sellerEmail, setSellerEmail] = useState("");
//     const [sellerMobile, setSellerMobile] = useState("");
//     const [regNumber, setRegNumber] = useState("");
//     const [carName, setCarName] = useState("");
//     const [condition, setCondition] = useState("1st");
//     const [year, setYear] = useState("");
//     const [kmDriven, setKmDriven] = useState("");
//     const [expectedPrice, setExpectedPrice] = useState("");
//     const [fuelType, setFuelType] = useState("");
//     const [transmission, setTransmission] = useState("Manual");
//     const [description, setDescription] = useState("");
//     const [features, setFeatures] = useState<string[]>([]);
//     const [mediaFiles, setMediaFiles] = useState<any[]>([]);

//     // --- 2. API Data States ---
//     const [states, setStates] = useState<any[]>([]);
//     const [cities, setCities] = useState<any[]>([]);
//     const [brands, setBrands] = useState<any[]>([]);
//     const [models, setModels] = useState<any[]>([]);

//     const [selectedState, setSelectedState] = useState({ id: "", name: "" });
//     const [selectedCity, setSelectedCity] = useState({ id: "", name: "" });
//     const [selectedBrand, setSelectedBrand] = useState({ id: "", name: "" });
//     const [selectedModel, setSelectedModel] = useState({ id: "", name: "" });
//     const [variant, setVariant] = useState("");

//     const [address, setAddress] = useState("");
//     const [location, setLocation] = useState(""); 

//     const [loading, setLoading] = useState(false);
//     const [errors, setErrors] = useState<any>({});

//     // --- 🚀 3. Form Reset Function ---
//     const resetForm = () => {
//         console.log("🧹 Form Resetting...");
//         setRegNumber(""); setCarName(""); setYear(""); setKmDriven(""); setExpectedPrice("");
//         setFuelType(""); setTransmission("Manual"); setDescription(""); setFeatures([]);
//         setMediaFiles([]); setVariant(""); setAddress(""); setLocation("");
//         setSelectedState({ id: "", name: "" }); setSelectedCity({ id: "", name: "" });
//         setSelectedBrand({ id: "", name: "" }); setSelectedModel({ id: "", name: "" });
//         setErrors({});
//     };

//     // --- 🚀 4. Validation Helper ---
//     const clearError = (fieldName: string) => {
//         if (errors[fieldName]) {
//             setErrors((prev: any) => {
//                 const newErrors = { ...prev };
//                 delete newErrors[fieldName];
//                 return newErrors;
//             });
//         }
//     };

//     const updateField = (setter: any, fieldName: string, value: any) => {
//         setter(value);
//         clearError(fieldName);
//     };

//     // Initial Load
//     useEffect(() => {
//         const initData = async () => {
//             const userData = await AsyncStorage.getItem('userData');
//             if (userData) {
//                 const user = JSON.parse(userData);
//                 setSellerName(user.fullName || "");
//                 setSellerEmail(user.email || "");
//                 setSellerMobile(user.phone || "");
//             }
//             try {
//                 const [stateRes, brandRes] = await Promise.all([
//                     axios.get(ENDPOINTS.GET_STATES),
//                     axios.get(ENDPOINTS.GET_BRANDS)
//                 ]);
//                 setStates(stateRes.data.data);
//                 setBrands(brandRes.data.data);
//             } catch (e) { console.log("Initial load error", e); }
//         };
//         initData();
//     }, []);

//     // --- 🚀 5. Fixed State/Brand Logic Functions ---
//     const onStateChange = async (name: string) => {
//         console.log("📍 State Changed:", name);
//         clearError('state');
//         const item = states.find(s => s.name === name);
//         if (item) {
//             setSelectedState({ id: item._id, name: item.name });
//             setSelectedCity({ id: "", name: "" });
//             try {
//                 const res = await axios.get(ENDPOINTS.GET_CITIES(item._id));
//                 setCities(res.data.data);
//             } catch (e) { console.log(e); }
//         }
//     };

//     const onBrandChange = async (name: string) => {
//         console.log("🚗 Brand Changed:", name);
//         clearError('brand');
//         const item = brands.find(b => b.name === name);
//         if (item) {
//             setSelectedBrand({ id: item._id, name: item.name });
//             setSelectedModel({ id: "", name: "" });
//             try {
//                 const res = await axios.get(ENDPOINTS.GET_MODELS(item._id));
//                 setModels(res.data.data);
//             } catch (e) { console.log(e); }
//         }
//     };

//     const handleUploadMedia = (type: 'image' | 'video') => {
//         const pickerOptions = type === 'image' ? {
//             multiple: true,
//             mediaType: 'photo' as const,
//             maxFiles: 4 - mediaFiles.filter(f => f.mime.startsWith('image')).length,
//         } : { mediaType: 'video' as const };

//         ImagePicker.openPicker(pickerOptions).then(async (results) => {
//             setLoading(true);
//             let processedFiles: any[] = [];
//             const filesArray = Array.isArray(results) ? results : [results];
//             for (const file of filesArray) {
//                 try {
//                     if (file.mime.startsWith('image')) {
//                         const compressedPath = await ImageCompressor.compress(file.path, { maxWidth: 1200, quality: 0.8 });
//                         processedFiles.push({ ...file, path: compressedPath });
//                     } else if (file.mime.startsWith('video')) {
//                         const duration = (file as any).duration / 1000;
//                         if (duration > 60) { Alert.alert("Error", "Video is too long"); continue; }
//                         const compressedVideoPath = await VideoCompressor.compress(file.path, { compressionMethod: 'auto' });
//                         processedFiles.push({ ...file, path: compressedVideoPath });
//                     }
//                 } catch (err) { processedFiles.push(file); }
//             }
//             setMediaFiles(prev => [...prev, ...processedFiles]);
//             clearError('mediaFiles');
//             setLoading(false);
//         }).catch(() => setLoading(false));
//     };

//     // --- 🚀 6. Submission Logic ---
//     const handleSellCarSubmission = async () => {
//         // --- 📋 Console Data Check ---
//         const submissionPayload = {
//             sellerName, carName, brand: selectedBrand.name, model: selectedModel.name, 
//             price: expectedPrice, address, features, mediaCount: mediaFiles.length
//         };
//         console.log("📤 Submitting Data:", JSON.stringify(submissionPayload, null, 2));

//         let newErrors: any = {};
//         if (!regNumber.trim()) newErrors.regNumber = true;
//         if (!selectedState.id) newErrors.state = true;
//         if (!selectedCity.id) newErrors.city = true;
//         if (!selectedBrand.id) newErrors.brand = true;
//         if (!selectedModel.id) newErrors.model = true;
//         if (!variant.trim()) newErrors.variant = true;
//         if (!year) newErrors.year = true;
//         if (!fuelType) newErrors.fuelType = true;
//         if (!kmDriven.trim()) newErrors.kmDriven = true;
//         if (!expectedPrice.trim()) newErrors.expectedPrice = true;
//         if (!address.trim()) newErrors.address = true;
//         if (features.length === 0) newErrors.features = true;
//         if (mediaFiles.length === 0) newErrors.mediaFiles = true;
//         if (!description.trim()) newErrors.description = true;

//         if (Object.keys(newErrors).length > 0) {
//             setErrors(newErrors);
//             showErrorToast("Oops", "Please fill all required fields");
//             return;
//         }

//         setLoading(true);
//         try {
//             const token = await AsyncStorage.getItem('userToken');
//             const formData = new FormData();
//             formData.append('sellerName', sellerName);
//             formData.append('sellerMobile', sellerMobile);
//             formData.append('sellerEmail', sellerEmail);
//             formData.append('state', selectedState.id);
//             formData.append('city', selectedCity.id);
//             formData.append('address', address.trim());
//             formData.append('brand', selectedBrand.id);
//             formData.append('model', selectedModel.id);
//             formData.append('variant', variant);
//             formData.append('name', carName || `${selectedBrand.name} ${selectedModel.name}`);
//             formData.append('year', year);
//             formData.append('kmDriven', kmDriven);
//             formData.append('fuelType', fuelType);
//             formData.append('transmission', transmission);
//             formData.append('registrationNumber', regNumber);
//             formData.append('registrationCity', location || selectedCity.name);
//             formData.append('noOfOwners', condition === "1st" ? "1" : condition === "2nd" ? "2" : "3");
//             formData.append('expectedPrice', expectedPrice);
//             formData.append('description', description);
//             features.forEach(f => formData.append('features', f));
//             mediaFiles.forEach((file, index) => {
//                 const key = file.mime.startsWith('image') ? 'images' : 'inspectionVideo';
//                 formData.append(key, { uri: file.path, type: file.mime, name: `file_${index}` } as any);
//             });

//             const response = await axios.post(ENDPOINTS.SELL_CAR, formData, {
//                 headers: { 'Authorization': `Bearer ${token}`, 'Content-Type': 'multipart/form-data' },
//                 timeout: 90000,
//             });

//             if (response.data.success) {
//                 console.log("✅ Success Response:", response.data);
//                 showSuccessToast("Success", "Car listed successfully! ❤️");
//                 resetForm(); // फ़ॉर्म साफ़ करें
//                 navigation.navigate('HomeScreen');
//             }
//         } catch (error: any) {
//             console.log("❌ API Error:", error.response?.data || error.message);
//             showErrorToast("Failed", error.response?.data?.message || "Submission failed");
//         } finally { setLoading(false); }
//     };

//     return {
//         sellerName, setSellerName, sellerEmail, setSellerEmail, sellerMobile, setSellerMobile,
//         regNumber, setRegNumber: (val: any) => updateField(setRegNumber, 'regNumber', val),
//         variant, setVariant: (val: any) => updateField(setVariant, 'variant', val),
//         year, setYear: (val: any) => updateField(setYear, 'year', val),
//         kmDriven, setKmDriven: (val: any) => updateField(setKmDriven, 'kmDriven', val),
//         expectedPrice, setExpectedPrice: (val: any) => updateField(setExpectedPrice, 'expectedPrice', val),
//         fuelType, setFuelType: (val: any) => updateField(setFuelType, 'fuelType', val),
//         address, setAddress: (val: any) => updateField(setAddress, 'address', val),
//         transmission, setTransmission,
//         features, setFeatures: (val: any) => { setFeatures(val); if (val.length > 0) clearError('features'); },
//         mediaFiles, setMediaFiles, loading, handleSellCarSubmission, handleUploadMedia,
//         states: states.map(s => s.name),
//         cities: cities.map(c => c.name),
//         brands: brands.map(b => b.name),
//         models: models.map(m => m.name),
//         selectedState, onStateChange,
//         selectedCity, onCitySelect: (n: string) => { 
//             const city = cities.find(c => c.name === n); 
//             if (city) { setSelectedCity({ id: city._id, name: n }); clearError('city'); }
//         },
//         selectedBrand, onBrandChange,
//         selectedModel, onModelSelect: (n: string) => { 
//             const model = models.find(m => m.name === n); 
//             if (model) { setSelectedModel({ id: model._id, name: n }); clearError('model'); }
//         },
//         condition, setCondition, location, setLocation,
//         description, setDescription: (val: any) => updateField(setDescription, 'description', val),
//         errors, carName, setCarName: (val: any) => updateField(setCarName, 'carName', val),
//     };
// };





















// import { useReducer, useEffect, useCallback, useMemo } from 'react';
// import axios from 'axios';
// import AsyncStorage from '@react-native-async-storage/async-storage';
// import { ENDPOINTS } from '../../../services/apiConfig';
// import { showSuccessToast, showErrorToast } from '../../../utils/showToast';
// import { processMediaFiles } from '../../../utils/mediaUploader';
// import { validateCarForm } from '../../../utils/validation';

// const initialSelected = { id: "", name: "" };

// const initialState = {
//   sellerName: "", sellerEmail: "", sellerMobile: "",
//   regNumber: "", carName: "", condition: "1st", year: "",
//   kmDriven: "", expectedPrice: "", fuelType: "", transmission: "Manual",
//   description: "", features: [], mediaFiles: [], variant: "",
//   address: "", location: "", states: [], cities: [], brands: [], models: [],
//   selectedState: initialSelected, selectedCity: initialSelected,
//   selectedBrand: initialSelected, selectedModel: initialSelected,
//   loading: false, errors: {}
// };

// function reducer(state: any, action: any) {
//   switch (action.type) {
//     case 'UPDATE_FIELD':
//       return { ...state, [action.field]: action.value, errors: { ...state.errors, [action.field]: false } };
//     case 'SET_API_DATA':
//       return { ...state, [action.key]: action.data };
//     case 'SET_LOADING':
//       return { ...state, loading: action.value };
//     case 'SET_ERRORS':
//       return { ...state, errors: action.value };
//     case 'RESET_FORM':
//       return { ...initialState, states: state.states, brands: state.brands, sellerName: state.sellerName, sellerEmail: state.sellerEmail, sellerMobile: state.sellerMobile };
//     default:
//       return state;
//   }
// }

// export const useAddCarLogic = (navigation: any) => {
//   const [state, dispatch] = useReducer(reducer, initialState);

//   useEffect(() => {
//     const initData = async () => {
//       const userData = await AsyncStorage.getItem('userData');
//       if (userData) {
//         const user = JSON.parse(userData);
//         dispatch({ type: 'UPDATE_FIELD', field: 'sellerName', value: user.fullName || "" });
//         dispatch({ type: 'UPDATE_FIELD', field: 'sellerEmail', value: user.email || "" });
//         dispatch({ type: 'UPDATE_FIELD', field: 'sellerMobile', value: user.phone || "" });
//       }
//       try {
//         const [stateRes, brandRes] = await Promise.all([
//           axios.get(ENDPOINTS.GET_STATES),
//           axios.get(ENDPOINTS.GET_BRANDS)
//         ]);
//         dispatch({ type: 'SET_API_DATA', key: 'states', data: stateRes.data.data });
//         dispatch({ type: 'SET_API_DATA', key: 'brands', data: brandRes.data.data });
//       } catch (e) { console.log(e); }
//     };
//     initData();
//   }, []);

//   const onStateChange = useCallback(async (name: string) => {
//     const item = state.states.find((s: any) => s.name === name);
//     if (item) {
//       dispatch({ type: 'UPDATE_FIELD', field: 'selectedState', value: { id: item._id, name: item.name } });
//       dispatch({ type: 'UPDATE_FIELD', field: 'selectedCity', value: initialSelected });
//       const res = await axios.get(ENDPOINTS.GET_CITIES(item._id));
//       dispatch({ type: 'SET_API_DATA', key: 'cities', data: res.data.data });
//     }
//   }, [state.states]);

//   const onBrandChange = useCallback(async (name: string) => {
//     const item = state.brands.find((b: any) => b.name === name);
//     if (item) {
//       dispatch({ type: 'UPDATE_FIELD', field: 'selectedBrand', value: { id: item._id, name: item.name } });
//       dispatch({ type: 'UPDATE_FIELD', field: 'selectedModel', value: initialSelected });
//       const res = await axios.get(ENDPOINTS.GET_MODELS(item._id));
//       dispatch({ type: 'SET_API_DATA', key: 'models', data: res.data.data });
//     }
//   }, [state.brands]);

//   const imageCount = useMemo(() => 
//     state.mediaFiles.filter((f: any) => f.mime.startsWith('image')).length, 
//   [state.mediaFiles]);

//   const handleUploadMedia = useCallback(async (type: 'image' | 'video') => {
//     dispatch({ type: 'SET_LOADING', value: true });
//     const processed = await processMediaFiles(type, imageCount);
//     dispatch({ type: 'UPDATE_FIELD', field: 'mediaFiles', value: [...state.mediaFiles, ...processed] });
//     dispatch({ type: 'SET_LOADING', value: false });
//   }, [imageCount, state.mediaFiles]);

//   const handleSellCarSubmission = useCallback(async () => {
//     const validationErrors = validateCarForm(state);
//     if (Object.keys(validationErrors).length > 0) {
//       dispatch({ type: 'SET_ERRORS', value: validationErrors });
//       showErrorToast("Oops", "Please fill all required fields");
//       return;
//     }

//     dispatch({ type: 'SET_LOADING', value: true });
//     try {
//       const token = await AsyncStorage.getItem('userToken');
//       const formData = new FormData();

//       const payload = {
//         sellerName: state.sellerName, sellerMobile: state.sellerMobile, sellerEmail: state.sellerEmail,
//         state: state.selectedState.id, city: state.selectedCity.id, address: state.address.trim(),
//         brand: state.selectedBrand.id, model: state.selectedModel.id, variant: state.variant,
//         name: state.carName || `${state.selectedBrand.name} ${state.selectedModel.name}`,
//         year: state.year, kmDriven: state.kmDriven, fuelType: state.fuelType,
//         transmission: state.transmission, registrationNumber: state.regNumber,
//         registrationCity: state.location || state.selectedCity.name,
//         noOfOwners: state.condition === "1st" ? "1" : state.condition === "2nd" ? "2" : "3",
//         expectedPrice: state.expectedPrice, description: state.description
//       };

//       Object.entries(payload).forEach(([key, value]) => formData.append(key, value as any));
//       state.features.forEach((f: string) => formData.append('features', f));
//       state.mediaFiles.forEach((file: any, index: number) => {
//         const key = file.mime.startsWith('image') ? 'images' : 'inspectionVideo';
//         formData.append(key, { uri: file.path, type: file.mime, name: `file_${index}` } as any);
//       });

//       const res = await axios.post(ENDPOINTS.SELL_CAR, formData, {
//         headers: { 'Authorization': `Bearer ${token}`, 'Content-Type': 'multipart/form-data' },
//         timeout: 90000,
//       });

//       if (res.data.success) {
//         showSuccessToast("Success", "Car listed successfully!");
//         dispatch({ type: 'RESET_FORM' });
//         navigation.navigate('HomeScreen');
//       }
//     } catch (error: any) {
//       showErrorToast("Failed", error.response?.data?.message || "Submission failed");
//     } finally { dispatch({ type: 'SET_LOADING', value: false }); }
//   }, [state, navigation]);

//   // Dropdown Mappings Memoized
//   const memoizedLists = useMemo(() => ({
//     states: state.states.map((s: any) => s.name),
//     cities: state.cities.map((c: any) => c.name),
//     brands: state.brands.map((b: any) => b.name),
//     models: state.models.map((m: any) => m.name),
//   }), [state.states, state.cities, state.brands, state.models]);

//   return { 
//     ...state, ...memoizedLists, onStateChange, onBrandChange, 
//     handleSellCarSubmission, handleUploadMedia, 
//     setRegNumber: (v: string) => dispatch({ type: 'UPDATE_FIELD', field: 'regNumber', value: v }),
//     setVariant: (v: string) => dispatch({ type: 'UPDATE_FIELD', field: 'variant', value: v }),
//     setYear: (v: string) => dispatch({ type: 'UPDATE_FIELD', field: 'year', value: v }),
//     setKmDriven: (v: string) => dispatch({ type: 'UPDATE_FIELD', field: 'kmDriven', value: v }),
//     setExpectedPrice: (v: string) => dispatch({ type: 'UPDATE_FIELD', field: 'expectedPrice', value: v }),
//     setFuelType: (v: string) => dispatch({ type: 'UPDATE_FIELD', field: 'fuelType', value: v }),
//     setAddress: (v: string) => dispatch({ type: 'UPDATE_FIELD', field: 'address', value: v }),
//     setTransmission: (v: string) => dispatch({ type: 'UPDATE_FIELD', field: 'transmission', value: v }),
//     setCondition: (v: string) => dispatch({ type: 'UPDATE_FIELD', field: 'condition', value: v }),
//     setDescription: (v: string) => dispatch({ type: 'UPDATE_FIELD', field: 'description', value: v }),
//     setFeatures: (v: any) => dispatch({ type: 'UPDATE_FIELD', field: 'features', value: v }),
//     setMediaFiles: (v: any) => dispatch({ type: 'UPDATE_FIELD', field: 'mediaFiles', value: v }),
//     onCitySelect: (n: string) => {
//       const city = state.cities.find((c: any) => c.name === n);
//       if (city) dispatch({ type: 'UPDATE_FIELD', field: 'selectedCity', value: { id: city._id, name: n } });
//     },
//     onModelSelect: (n: string) => {
//       const model = state.models.find((m: any) => m.name === n);
//       if (model) dispatch({ type: 'UPDATE_FIELD', field: 'selectedModel', value: { id: model._id, name: n } });
//     }
//   };
// };
























// import { useReducer, useEffect, useCallback, useMemo } from 'react';
// import axios from 'axios';
// import AsyncStorage from '@react-native-async-storage/async-storage';
// import { ENDPOINTS } from '../../../services/apiConfig';
// import { showSuccessToast, showErrorToast } from '../../../utils/showToast';
// import { processMediaFiles } from '../../../utils/mediaUploader';
// import { validateCarForm } from '../../../utils/validation';

// const initialSelected = { id: "", name: "" };

// const initialState = {
//   sellerName: "", sellerEmail: "", sellerMobile: "",
//   regNumber: "", carName: "", condition: "1st", year: "",
//   kmDriven: "", expectedPrice: "", fuelType: "", transmission: "Manual",
//   description: "", features: [], mediaFiles: [], variant: "",
//   address: "", location: "", states: [], cities: [], brands: [], models: [], variants: [], 
//   selectedState: initialSelected, selectedCity: initialSelected,
//   selectedBrand: initialSelected, selectedModel: initialSelected,
//   loading: false, errors: {}
// };

// function reducer(state: any, action: any) {
//   switch (action.type) {
//     case 'UPDATE_FIELD':
//       return { 
//         ...state, 
//         [action.field]: action.value, 
//         // 🚀 Fix: Agar errorField alag se diya hai toh use clear karo, warna field name ko hi error key maano
//         errors: { ...state.errors, [action.errorField || action.field]: false } 
//       };
//     case 'SET_API_DATA':
//       return { ...state, [action.key]: action.data };
//     case 'SET_LOADING':
//       return { ...state, loading: action.value };
//     case 'SET_ERRORS':
//       return { ...state, errors: action.value };
//     case 'RESET_FORM':
//       return { 
//         ...initialState, 
//         states: state.states, 
//         brands: state.brands, 
//         sellerName: state.sellerName, 
//         sellerEmail: state.sellerEmail, 
//         sellerMobile: state.sellerMobile 
//       };
//     default:
//       return state;
//   }
// }

// export const useAddCarLogic = (navigation: any) => {
//   const [state, dispatch] = useReducer(reducer, initialState);

//   useEffect(() => {
//     const initData = async () => {
//       const userData = await AsyncStorage.getItem('userData');
//       if (userData) {
//         const user = JSON.parse(userData);
//         dispatch({ type: 'UPDATE_FIELD', field: 'sellerName', value: user.fullName || "" });
//         dispatch({ type: 'UPDATE_FIELD', field: 'sellerEmail', value: user.email || "" });
//         dispatch({ type: 'UPDATE_FIELD', field: 'sellerMobile', value: user.phone || "" });
//       }
//       try {
//         const [stateRes, brandRes] = await Promise.all([
//           axios.get(ENDPOINTS.GET_STATES),
//           axios.get(ENDPOINTS.GET_BRANDS)
//         ]);
//         dispatch({ type: 'SET_API_DATA', key: 'states', data: stateRes.data.data });
//         dispatch({ type: 'SET_API_DATA', key: 'brands', data: brandRes.data.data });
//       } catch (e) { console.log(e); }
//     };
//     initData();
//   }, []);

//   // 📍 State handler with Error clearing
//   const onStateChange = useCallback(async (name: string) => {
//     const item = state.states.find((s: any) => s.name === name);
//     if (item) {
//       dispatch({ 
//         type: 'UPDATE_FIELD', 
//         field: 'selectedState', 
//         errorField: 'state', // 👈 Validation 'state' key check karta hai
//         value: { id: item._id, name: item.name } 
//       });
//       dispatch({ type: 'UPDATE_FIELD', field: 'selectedCity', value: initialSelected });
//       const res = await axios.get(ENDPOINTS.GET_CITIES(item._id));
//       dispatch({ type: 'SET_API_DATA', key: 'cities', data: res.data.data });
//     }
//   }, [state.states]);

//   // 🏙️ City handler with Error clearing
//   const onCitySelect = useCallback((n: string) => {
//     const city = state.cities.find((c: any) => c.name === n);
//     if (city) {
//       dispatch({ 
//         type: 'UPDATE_FIELD', 
//         field: 'selectedCity', 
//         errorField: 'city', // 👈 Validation 'city' key check karta hai
//         value: { id: city._id, name: n } 
//       });
//     }
//   }, [state.cities]);

//   // 🚗 Brand handler with Error clearing
//   const onBrandChange = useCallback(async (name: string) => {
//     const item = state.brands.find((b: any) => b.name === name);
//     if (item) {
//       dispatch({ 
//         type: 'UPDATE_FIELD', 
//         field: 'selectedBrand', 
//         errorField: 'brand', // 👈 Validation 'brand' key check karta hai
//         value: { id: item._id, name: item.name } 
//       });
//       dispatch({ type: 'UPDATE_FIELD', field: 'selectedModel', value: initialSelected });
//       dispatch({ type: 'UPDATE_FIELD', field: 'variant', value: "" }); // Reset variant
//       dispatch({ type: 'SET_API_DATA', key: 'variants', data: [] });   // Reset variant list
//       const res = await axios.get(ENDPOINTS.GET_MODELS(item._id));
//       dispatch({ type: 'SET_API_DATA', key: 'models', data: res.data.data });
//     }
//   }, [state.brands]);

//   // 🏎️ Model handler with Error clearing
//   const onModelSelect = useCallback(async (n: string) => {
//     const model = state.models.find((m: any) => m.name === n);
//     if (model) {
//       dispatch({ 
//         type: 'UPDATE_FIELD', 
//         field: 'selectedModel', 
//         errorField: 'model', // 👈 Validation 'model' key check karta hai
//         value: { id: model._id, name: n } 
//       });
//       dispatch({ type: 'UPDATE_FIELD', field: 'variant', value: "" }); // Reset current selection

//       try {
//         const res = await axios.get(ENDPOINTS.GET_VARIANTS(model._id));
//         if (res.data.success) {
//           dispatch({ type: 'SET_API_DATA', key: 'variants', data: res.data.data });
//         }
//       } catch (e) { console.log("Variant fetch error", e); }
    
//     }
//   }, [state.models]);

//   const imageCount = useMemo(() => 
//     state.mediaFiles.filter((f: any) => f.mime && f.mime.startsWith('image')).length, 
//   [state.mediaFiles]);

//   const handleUploadMedia = useCallback(async (type: 'image' | 'video') => {
//     dispatch({ type: 'SET_LOADING', value: true });
//     const processed = await processMediaFiles(type, imageCount);
//     if (processed.length > 0) {
//       dispatch({ 
//         type: 'UPDATE_FIELD', 
//         field: 'mediaFiles', 
//         errorField: 'mediaFiles',
//         value: [...state.mediaFiles, ...processed] 
//       });
//     }
//     dispatch({ type: 'SET_LOADING', value: false });
//   }, [imageCount, state.mediaFiles]);

//   const handleSellCarSubmission = useCallback(async () => {
//     const validationErrors = validateCarForm(state);
//     if (Object.keys(validationErrors).length > 0) {
//       dispatch({ type: 'SET_ERRORS', value: validationErrors });
//       showErrorToast("Oops", "Please fill all required fields");
//       return;
//     }

//     dispatch({ type: 'SET_LOADING', value: true });
//     try {
//       const token = await AsyncStorage.getItem('userToken');
//       const formData = new FormData();

//       const payload = {
//         sellerName: state.sellerName, sellerMobile: state.sellerMobile, sellerEmail: state.sellerEmail,
//         state: state.selectedState.id, city: state.selectedCity.id, address: state.address.trim(),
//         brand: state.selectedBrand.id, model: state.selectedModel.id, variant: state.variant,
//         name: state.carName || `${state.selectedBrand.name} ${state.selectedModel.name}`,
//         year: state.year, kmDriven: state.kmDriven, fuelType: state.fuelType,
//         transmission: state.transmission, registrationNumber: state.regNumber,
//         registrationCity: state.location || state.selectedCity.name,
//         noOfOwners: state.condition === "1st" ? "1" : state.condition === "2nd" ? "2" : "3",
//         expectedPrice: state.expectedPrice, description: state.description
//       };

//       Object.entries(payload).forEach(([key, value]) => formData.append(key, value as any));
//       state.features.forEach((f: string) => formData.append('features', f));
//       state.mediaFiles.forEach((file: any, index: number) => {
//         const key = file.mime && file.mime.startsWith('image') ? 'images' : 'inspectionVideo';
//         formData.append(key, { uri: file.path, type: file.mime, name: `file_${index}` } as any);
//       });

//       const res = await axios.post(ENDPOINTS.SELL_CAR, formData, {
//         headers: { 'Authorization': `Bearer ${token}`, 'Content-Type': 'multipart/form-data' },
//         timeout: 90000,
//       });

//       if (res.data.success) {
//         showSuccessToast("Success", "Car listed successfully!");
//         dispatch({ type: 'RESET_FORM' });
//         navigation.navigate('HomeScreen');
//       }
//     } catch (error: any) {
//       showErrorToast("Failed", error.response?.data?.message || "Submission failed");
//     } finally { dispatch({ type: 'SET_LOADING', value: false }); }
//   }, [state, navigation]);

//   const memoizedLists = useMemo(() => ({
//     states: state.states.map((s: any) => s.name),
//     cities: state.cities.map((c: any) => c.name),
//     brands: state.brands.map((b: any) => b.name),
//     models: state.models.map((m: any) => m.name),
//     variants: state.variants.map((v: any) => v.name),
//   }), [state.states, state.cities, state.brands, state.models]);

//   return { 
//     ...state, ...memoizedLists, 
//     onStateChange, onBrandChange, onCitySelect, onModelSelect,
//     handleSellCarSubmission, handleUploadMedia, 
//     // setRegNumber: (v: string) => dispatch({ type: 'UPDATE_FIELD', field: 'regNumber', value: v }),
//     // setVariant: (v: string) => dispatch({ type: 'UPDATE_FIELD', field: 'variant', value: v }),
//      setVariant: (v: string) => dispatch({ type: 'UPDATE_FIELD', field: 'variant', errorField: 'variant', value: v }),
//     setYear: (v: string) => dispatch({ type: 'UPDATE_FIELD', field: 'year', value: v }),
//     // setKmDriven: (v: string) => dispatch({ type: 'UPDATE_FIELD', field: 'kmDriven', value: v }),
//     // setExpectedPrice: (v: string) => dispatch({ type: 'UPDATE_FIELD', field: 'expectedPrice', value: v }),
//     setFuelType: (v: string) => dispatch({ type: 'UPDATE_FIELD', field: 'fuelType', value: v }),
//     setAddress: (v: string) => dispatch({ type: 'UPDATE_FIELD', field: 'address', value: v }),
//     setTransmission: (v: string) => dispatch({ type: 'UPDATE_FIELD', field: 'transmission', value: v }),
//     setCondition: (v: string) => dispatch({ type: 'UPDATE_FIELD', field: 'condition', value: v }),
//     setDescription: (v: string) => dispatch({ type: 'UPDATE_FIELD', field: 'description', value: v }),
//     setFeatures: (v: any) => dispatch({ type: 'UPDATE_FIELD', field: 'features', errorField: 'features', value: v }),
//     setMediaFiles: (v: any) => dispatch({ type: 'UPDATE_FIELD', field: 'mediaFiles', errorField: 'mediaFiles', value: v }),

//     // ✅ Reg Number: Auto capital aur special chars/spaces remove karein
//   setRegNumber: (v: string) => {
//     const clean = v.toUpperCase().replace(/[^A-Z0-9]/g, ''); 
//     dispatch({ type: 'UPDATE_FIELD', field: 'regNumber', value: clean });
//   },

//   // ✅ KM Driven: Sirf digits allow karein
//   setKmDriven: (v: string) => {
//     const clean = v.replace(/[^0-9]/g, '');
//     dispatch({ type: 'UPDATE_FIELD', field: 'kmDriven', value: clean });
//   },

//   // ✅ Expected Price: Sirf digits allow karein
//   setExpectedPrice: (v: string) => {
//     const clean = v.replace(/[^0-9]/g, '');
//     dispatch({ type: 'UPDATE_FIELD', field: 'expectedPrice', value: clean });
//   },
//   };
// };














































import { useReducer, useEffect, useCallback, useMemo } from 'react';
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { ENDPOINTS } from '../../../services/apiConfig';
import { showSuccessToast, showErrorToast } from '../../../utils/showToast';
import { processMediaFiles } from '../../../utils/mediaUploader';
import { validateCarForm } from '../../../utils/validation';

const initialSelected = { id: "", name: "" };

const initialState = {
  sellerName: "", sellerEmail: "", sellerMobile: "",
  regNumber: "", carName: "", condition: "1st", year: "",
  kmDriven: "", expectedPrice: "", fuelType: "", transmission: "Manual",
  description: "", features: [], mediaFiles: [], variant: "", 
  address: "", location: "", 
  states: [], cities: [], brands: [], models: [], variants: [],
  selectedState: initialSelected, selectedCity: initialSelected,
  selectedBrand: initialSelected, selectedModel: initialSelected,
  loading: false, errors: {}
};

function reducer(state: any, action: any) {
  switch (action.type) {
    case 'UPDATE_FIELD':
      return { 
        ...state, 
        [action.field]: action.value, 
        // 🚀 Yeh logic 'kmDriven' aur 'expectedPrice' ke errors ko clear karega
        errors: { ...state.errors, [action.errorField || action.field]: false } 
      };
    case 'SET_API_DATA':
      return { ...state, [action.key]: action.data };
    case 'SET_LOADING':
      return { ...state, loading: action.value };
    case 'SET_ERRORS':
      return { ...state, errors: action.value };
    case 'RESET_FORM':
      return { ...initialState, states: state.states, brands: state.brands, sellerName: state.sellerName, sellerEmail: state.sellerEmail, sellerMobile: state.sellerMobile };
    default:
      return state;
  }
}

export const useAddCarLogic = (navigation: any) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    const initData = async () => {
      const userData = await AsyncStorage.getItem('userData');
      if (userData) {
        const user = JSON.parse(userData);
        dispatch({ type: 'UPDATE_FIELD', field: 'sellerName', value: user.fullName || "" });
        dispatch({ type: 'UPDATE_FIELD', field: 'sellerEmail', value: user.email || "" });
        dispatch({ type: 'UPDATE_FIELD', field: 'sellerMobile', value: user.phone || "" });
      }
      try {
        const [stateRes, brandRes] = await Promise.all([
          axios.get(ENDPOINTS.GET_STATES),
          axios.get(ENDPOINTS.GET_BRANDS)
        ]);
        dispatch({ type: 'SET_API_DATA', key: 'states', data: stateRes.data.data });
        dispatch({ type: 'SET_API_DATA', key: 'brands', data: brandRes.data.data });
      } catch (e) { console.log(e); }
    };
    initData();
  }, []);

  const onStateChange = useCallback(async (name: string) => {
    const item = state.states.find((s: any) => s.name === name);
    if (item) {
      dispatch({ type: 'UPDATE_FIELD', field: 'selectedState', errorField: 'state', value: { id: item._id, name: item.name } });
      dispatch({ type: 'UPDATE_FIELD', field: 'selectedCity', value: initialSelected });
      const res = await axios.get(ENDPOINTS.GET_CITIES(item._id));
      dispatch({ type: 'SET_API_DATA', key: 'cities', data: res.data.data });
    }
  }, [state.states]);

  const onCitySelect = useCallback((n: string) => {
    const city = state.cities.find((c: any) => c.name === n);
    if (city) dispatch({ type: 'UPDATE_FIELD', field: 'selectedCity', errorField: 'city', value: { id: city._id, name: n } });
  }, [state.cities]);

  const onBrandChange = useCallback(async (name: string) => {
    const item = state.brands.find((b: any) => b.name === name);
    if (item) {
      dispatch({ type: 'UPDATE_FIELD', field: 'selectedBrand', errorField: 'brand', value: { id: item._id, name: item.name } });
      dispatch({ type: 'UPDATE_FIELD', field: 'selectedModel', value: initialSelected });
      dispatch({ type: 'UPDATE_FIELD', field: 'variant', value: "" }); 
      dispatch({ type: 'SET_API_DATA', key: 'variants', data: [] });   
      const res = await axios.get(ENDPOINTS.GET_MODELS(item._id));
      dispatch({ type: 'SET_API_DATA', key: 'models', data: res.data.data });
    }
  }, [state.brands]);

  const onModelSelect = useCallback(async (n: string) => {
    const model = state.models.find((m: any) => m.name === n);
    if (model) {
      dispatch({ type: 'UPDATE_FIELD', field: 'selectedModel', errorField: 'model', value: { id: model._id, name: n } });
      dispatch({ type: 'UPDATE_FIELD', field: 'variant', value: "" }); 
      try {
        const res = await axios.get(ENDPOINTS.GET_VARIANTS(model._id));
        if (res.data.success) {
          dispatch({ type: 'SET_API_DATA', key: 'variants', data: res.data.data });
        }
      } catch (e) { console.log(e); }
    }
  }, [state.models]);

  const handleUploadMedia = useCallback(async (type: 'image' | 'video') => {
    dispatch({ type: 'SET_LOADING', value: true });
    const imageCount = state.mediaFiles.filter((f: any) => f.mime && f.mime.startsWith('image')).length;
    const processed = await processMediaFiles(type, imageCount);
    if (processed.length > 0) {
      dispatch({ type: 'UPDATE_FIELD', field: 'mediaFiles', errorField: 'mediaFiles', value: [...state.mediaFiles, ...processed] });
    }
    dispatch({ type: 'SET_LOADING', value: false });
  }, [state.mediaFiles]);

  const handleSellCarSubmission = useCallback(async () => {
    const validationErrors = validateCarForm(state);
    if (Object.keys(validationErrors).length > 0) {
      dispatch({ type: 'SET_ERRORS', value: validationErrors });
      showErrorToast("Oops", "Please fill all required fields correctly");
      return;
    }
    dispatch({ type: 'SET_LOADING', value: true });
    try {
      const token = await AsyncStorage.getItem('userToken');
      const formData = new FormData();
      const payload = {
        sellerName: state.sellerName, sellerMobile: state.sellerMobile, sellerEmail: state.sellerEmail,
        state: state.selectedState.id, city: state.selectedCity.id, address: state.address.trim(),
        brand: state.selectedBrand.id, model: state.selectedModel.id, variant: state.variant,
        name: state.carName || `${state.selectedBrand.name} ${state.selectedModel.name}`,
        year: state.year, kmDriven: state.kmDriven, fuelType: state.fuelType,
        transmission: state.transmission, registrationNumber: state.regNumber,
        registrationCity: state.location || state.selectedCity.name,
        noOfOwners: state.condition === "1st" ? "1" : state.condition === "2nd" ? "2" : "3",
        expectedPrice: state.expectedPrice, description: state.description
      };
      Object.entries(payload).forEach(([key, value]) => formData.append(key, value as any));
      state.features.forEach((f: string) => formData.append('features', f));
      state.mediaFiles.forEach((file: any, index: number) => {
        const key = file.mime && file.mime.startsWith('image') ? 'images' : 'inspectionVideo';
        formData.append(key, { uri: file.path, type: file.mime, name: `file_${index}` } as any);
      });
      const res = await axios.post(ENDPOINTS.SELL_CAR, formData, {
        headers: { 'Authorization': `Bearer ${token}`, 'Content-Type': 'multipart/form-data' },
        timeout: 90000,
      });
      if (res.data.success) {
        showSuccessToast("Success", "Car listed successfully!");
        dispatch({ type: 'RESET_FORM' });
        navigation.navigate('HomeScreen');
      }
    } catch (error: any) {
      showErrorToast("Failed", error.response?.data?.message || "Submission failed");
    } finally { dispatch({ type: 'SET_LOADING', value: false }); }
  }, [state, navigation]);

  const memoizedLists = useMemo(() => ({
    states: state.states.map((s: any) => s.name),
    cities: state.cities.map((c: any) => c.name),
    brands: state.brands.map((b: any) => b.name),
    models: state.models.map((m: any) => m.name),
    variants: state.variants.map((v: any) => v.name),
  }), [state.states, state.cities, state.brands, state.models, state.variants]);

  return { 
    ...state, ...memoizedLists, 
    onStateChange, onBrandChange, onCitySelect, onModelSelect,
    handleSellCarSubmission, handleUploadMedia, 
    setRegNumber: (v: string) => dispatch({ type: 'UPDATE_FIELD', field: 'regNumber', value: v.toUpperCase().replace(/[^A-Z0-9]/g, '') }),
    setVariant: (v: string) => dispatch({ type: 'UPDATE_FIELD', field: 'variant', errorField: 'variant', value: v }),
    setYear: (v: string) => dispatch({ type: 'UPDATE_FIELD', field: 'year', value: v }),
    // 🚀 FIXED: Added errorField for KM Driven
    setKmDriven: (v: string) => dispatch({ type: 'UPDATE_FIELD', field: 'kmDriven', errorField: 'kmDriven', value: v.replace(/[^0-9]/g, '') }),
    setExpectedPrice: (v: string) => dispatch({ type: 'UPDATE_FIELD', field: 'expectedPrice', errorField: 'expectedPrice', value: v.replace(/[^0-9]/g, '') }),
    setFuelType: (v: string) => dispatch({ type: 'UPDATE_FIELD', field: 'fuelType', value: v }),
    setAddress: (v: string) => dispatch({ type: 'UPDATE_FIELD', field: 'address', value: v }),
    setTransmission: (v: string) => dispatch({ type: 'UPDATE_FIELD', field: 'transmission', value: v }),
    setCondition: (v: string) => dispatch({ type: 'UPDATE_FIELD', field: 'condition', value: v }),
    setDescription: (v: string) => dispatch({ type: 'UPDATE_FIELD', field: 'description', value: v }),
    setFeatures: (v: any) => dispatch({ type: 'UPDATE_FIELD', field: 'features', errorField: 'features', value: v }),
    setMediaFiles: (v: any) => dispatch({ type: 'UPDATE_FIELD', field: 'mediaFiles', errorField: 'mediaFiles', value: v }),
  };
};