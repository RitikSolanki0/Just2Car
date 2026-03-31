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

















import { useState, useEffect } from 'react';
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { ENDPOINTS } from '../../../services/apiConfig';
import { showSuccessToast, showErrorToast } from '../../../utils/showToast';
import { Alert } from 'react-native';

export const useAddCarLogic = (navigation: any) => {
    // --- Form States ---
    const [sellerName, setSellerName] = useState("");
    const [sellerEmail, setSellerEmail] = useState("");
    const [sellerMobile, setSellerMobile] = useState("");
    const [regNumber, setRegNumber] = useState("");
    const [carName, setCarName] = useState(""); 
    const [condition, setCondition] = useState("1st"); 
    const [year, setYear] = useState("");
    const [kmDriven, setKmDriven] = useState("");
    const [expectedPrice, setExpectedPrice] = useState("");
    const [fuelType, setFuelType] = useState("");
    const [transmission, setTransmission] = useState("Manual");
    const [description, setDescription] = useState("");
    const [features, setFeatures] = useState<string[]>([]);
    const [mediaFiles, setMediaFiles] = useState<any[]>([]);

    // --- API Data States ---
    const [states, setStates] = useState<any[]>([]);
    const [cities, setCities] = useState<any[]>([]);
    const [brands, setBrands] = useState<any[]>([]);
    const [models, setModels] = useState<any[]>([]);

    // --- Selection IDs ---
    const [selectedState, setSelectedState] = useState({ id: "", name: "" });
    const [selectedCity, setSelectedCity] = useState({ id: "", name: "" });
    const [selectedBrand, setSelectedBrand] = useState({ id: "", name: "" });
    const [selectedModel, setSelectedModel] = useState({ id: "", name: "" });
    const [variant, setVariant] = useState("");

    const [address, setAddress] = useState("");
    const [location, setLocation] = useState(""); // Registration City

    const [loading, setLoading] = useState(false);

    // 1. लोड होते ही User Data, States और Brands फेच करें
    useEffect(() => {
        const initData = async () => {
            console.log("--- 🏁 Initializing AddCar Data ---");
            const userData = await AsyncStorage.getItem('userData');
            if (userData) {
                const user = JSON.parse(userData);
                console.log("👤 Logged-in User:", user.fullName);
                setSellerName(user.fullName || "");
                setSellerEmail(user.email || "");
                setSellerMobile(user.phone || "");
            }

            try {
                console.log("📡 Fetching States & Brands...");
                const [stateRes, brandRes] = await Promise.all([
                    axios.get(ENDPOINTS.GET_STATES),
                    axios.get(ENDPOINTS.GET_BRANDS)
                ]);
                setStates(stateRes.data.data);
                setBrands(brandRes.data.data);
                console.log("✅ Initial Data Loaded: States(", stateRes.data.data.length, ") Brands(", brandRes.data.data.length, ")");
            } catch (e) {
                console.log("❌ Initial Fetch Error:", e);
            }
        };
        initData();
    }, []);

    // 2. जब State बदले तो Cities लोड करें
    const onStateChange = async (name: string) => {
        console.log("📍 State Selection Changed:", name);
        const item = states.find(s => s.name === name);
        if (item) {
            setSelectedState({ id: item._id, name: item.name });
            setSelectedCity({ id: "", name: "" }); 
            try {
                const res = await axios.get(ENDPOINTS.GET_CITIES(item._id));
                setCities(res.data.data);
                console.log("🏙️ Cities Loaded for", name, ":", res.data.data.length);
            } catch (e) { console.log("❌ City Fetch Error:", e); }
        }
    };

    // 3. जब Brand बदले तो Models लोड करें
    const onBrandChange = async (name: string) => {
        console.log("🚗 Brand Selection Changed:", name);
        const item = brands.find(b => b.name === name);
        if (item) {
            setSelectedBrand({ id: item._id, name: item.name });
            setSelectedModel({ id: "", name: "" }); 
            try {
                const res = await axios.get(ENDPOINTS.GET_MODELS(item._id));
                setModels(res.data.data);
                console.log("🚘 Models Loaded for", name, ":", res.data.data.length);
            } catch (e) { console.log("❌ Model Fetch Error:", e); }
        }
    };

    // --- 🚀 मुख्य सबमिशन फंक्शन ---
    // const handleSellCarSubmission = async () => {
    //     console.log("=== 📝 STARTING SUBMISSION PROCESS ===");

    //     // डेटा रिपोर्ट
    //     const report = {
    //         sellerName, sellerMobile, sellerEmail, carName, regNumber,
    //         state: selectedState.name, city: selectedCity.name, address,
    //         make: selectedBrand.name, model: selectedModel.name, variant,
    //         condition, year, fuelType, transmission, kmDriven, expectedPrice,
    //         featuresCount: features.length, mediaCount: mediaFiles.length
    //     };
    //     console.log("📊 Data Report:", JSON.stringify(report, null, 2));

    //     // 1. वैलिडेशन
    //     if (!carName || !selectedBrand.id || !expectedPrice || !sellerMobile || !address || mediaFiles.length === 0) {
    //         console.log("⚠️ Validation Failed: Required fields missing.");
    //         Alert.alert("Missing Info", "Please fill all required fields and add at least one image.");
    //         return;
    //     }

    //     setLoading(true);
    //     try {
    //         // 2. टोकन निकालें
    //         console.log("🔑 Checking User Token...");
    //         const token = await AsyncStorage.getItem('userToken');
    //         if (!token) {
    //             console.log("❌ Token Not Found!");
    //             Alert.alert("Unauthorized", "Session expired. Please login again.");
    //             setLoading(false); return;
    //         }

    //         // --- 3. FormData तैयार करें (फाइल अपलोड के लिए ज़रूरी) ---
    //         console.log("📦 Constructing FormData...");
    //         const formData = new FormData();

    //         // टेक्स्ट डेटा जोड़ें
    //         formData.append('sellerName', sellerName);
    //         formData.append('sellerMobile', sellerMobile);
    //         formData.append('sellerEmail', sellerEmail);
    //         formData.append('state', selectedState.id);
    //         formData.append('city', selectedCity.id);
    //         formData.append('address', address.trim());
    //         formData.append('make', selectedBrand.name);
    //         formData.append('model', selectedModel.name);
    //         formData.append('variant', variant || "Base");
    //         formData.append('name', carName);
    //         formData.append('year', year);
    //         formData.append('kmDriven', kmDriven);
    //         formData.append('fuelType', fuelType || "Petrol");
    //         formData.append('transmission', transmission);
    //         formData.append('registrationNumber', regNumber);
    //         formData.append('registrationCity', location || selectedCity.name);
    //         formData.append('noOfOwners', condition === "1st" ? "1" : condition === "2nd" ? "2" : "3");
    //         formData.append('expectedPrice', expectedPrice);
    //         formData.append('description', description || "No description");
    //         formData.append('negotiable', 'false');
    //         formData.append('sellerType', 'individual');

    //         // फीचर्स एरे जोड़ें
    //         features.forEach((f, i) => formData.append(`features[${i}]`, f));

    //         // --- 4. इमेजेस जोड़ें (Binary Format) ---
    //         const imageFiles = mediaFiles.filter(f => f.mime && f.mime.startsWith('image'));
    //         console.log("🖼️ Adding", imageFiles.length, "images to FormData");
    //         imageFiles.forEach((file, index) => {
    //             formData.append('images', {
    //                 uri: file.path,
    //                 type: file.mime || 'image/jpeg',
    //                 name: `car_img_${index}_${Date.now()}.jpg`,
    //             } as any);
    //         });

    //         // --- 5. वीडियो जोड़ें ---
    //         const videoFile = mediaFiles.find(f => f.mime && f.mime.startsWith('video'));
    //         if (videoFile) {
    //             console.log("🎥 Adding video to FormData");
    //             formData.append('inspectionVideo', {
    //                 uri: videoFile.path,
    //                 type: videoFile.mime || 'video/mp4',
    //                 name: `car_video_${Date.now()}.mp4`,
    //             } as any);
    //         }

    //         console.log("📡 Sending API Request to:", ENDPOINTS.SELL_CAR);

    //         // --- 6. API हिट करें ---
    //         const response = await axios.post(ENDPOINTS.SELL_CAR, formData, {
    //             headers: {
    //                 'Authorization': `Bearer ${token}`,
    //                 'Content-Type': 'multipart/form-data',
    //             },
    //             timeout: 60000, // 1 मिनट का टाइमआउट (वीडियो के लिए)
    //         });

    //         console.log("✅ API Response Success:", JSON.stringify(response.data, null, 2));

    //         if (response.data.success) {
    //             showSuccessToast("Success", "Car listed successfully! ❤️");
    //             navigation.navigate('HomeScreen');
    //         }
    //     } catch (error: any) {
    //         console.log("--- ❌ API ERROR REPORT ---");
    //         if (error.response) {
    //             console.log("Status:", error.response.status);
    //             console.log("Server Message:", JSON.stringify(error.response.data, null, 2));
    //         } else {
    //             console.log("Network Error:", error.message);
    //         }
    //         showErrorToast("Failed", error.response?.data?.message || "Something went wrong during submission.");
    //     } finally {
    //         setLoading(false);
    //         console.log("=== 🏁 PROCESS ENDED ===");
    //     }
    // };

    const handleSellCarSubmission = async () => {
    console.log("=== 📝 STARTING SUBMISSION PROCESS ===");

    if (!carName || !selectedBrand.id || !expectedPrice || !sellerMobile || !address || mediaFiles.length === 0) {
        Alert.alert("Error", "Required fields or images are missing.");
        return;
    }

    setLoading(true);
    try {
        const token = await AsyncStorage.getItem('userToken');
        const formData = new FormData();

        // --- 1. टेक्स्ट डेटा (सब कुछ String में भेजें) ---
        formData.append('sellerName', String(sellerName));
        formData.append('sellerMobile', String(sellerMobile));
        formData.append('sellerEmail', String(sellerEmail));
        formData.append('state', String(selectedState.id));
        formData.append('city', String(selectedCity.id));
        formData.append('address', String(address).trim());
        formData.append('make', String(selectedBrand.name));
        formData.append('model', String(selectedModel.name));
        formData.append('variant', String(variant || "Base"));
        formData.append('name', String(carName));
        formData.append('year', String(year));
        formData.append('kmDriven', String(kmDriven));
        formData.append('fuelType', String(fuelType || "Petrol"));
        formData.append('transmission', String(transmission));
        formData.append('registrationNumber', String(regNumber));
        formData.append('registrationCity', String(location || selectedCity.name));
        formData.append('noOfOwners', condition === "1st" ? "1" : condition === "2nd" ? "2" : "3");
        formData.append('expectedPrice', String(expectedPrice));
        formData.append('description', String(description || "No description"));
        formData.append('negotiable', 'false');
        formData.append('sellerType', 'individual');

        // फीचर्स को भेजने का तरीका
        if (features.length > 0) {
            features.forEach((f) => formData.append('features', f));
        }

        // --- 2. इमेजेस (सिर्फ 'images' चाबी का उपयोग करें) ---
        const imageFiles = mediaFiles.filter(f => f.mime && f.mime.startsWith('image'));
        imageFiles.forEach((file, index) => {
            const fileData = {
                uri: file.path,
                type: file.mime || 'image/jpeg',
                name: `image_${index}.jpg`,
            };
            formData.append('images', fileData as any);
        });

        // --- 3. वीडियो (अगर है) ---
        const videoFile = mediaFiles.find(f => f.mime && f.mime.startsWith('video'));
        if (videoFile) {
            formData.append('inspectionVideo', {
                uri: videoFile.path,
                type: videoFile.mime || 'video/mp4',
                name: 'video.mp4',
            } as any);
        }

        // नोट: 'documents' को हटा दिया है क्योंकि पिछले एरर में शायद इसकी वजह से 'map' वाला क्रैश हो रहा था।

        console.log("📡 Final Attempt to API with FormData...");

        const response = await axios.post(ENDPOINTS.SELL_CAR, formData, {
            headers: {
                'Authorization': `Bearer ${token}`,
                'Content-Type': 'multipart/form-data',
            },
            // फाइल बड़ी हो सकती है इसलिए टाइमआउट बढ़ाया
            timeout: 60000, 
        });

        console.log("✅ API Success Response:", response.data);

        if (response.data.success) {
            showSuccessToast("Success", "Car listed successfully!");
            navigation.navigate('HomeScreen');
        }
    } catch (error: any) {
        console.log("--- ❌ API ERROR REPORT ---");
        if (error.response) {
            console.log("Status Code:", error.response.status);
            console.log("Server Msg:", JSON.stringify(error.response.data, null, 2));
        } else {
            console.log("Error Message:", error.message);
        }
        showErrorToast("Server Error", "Backend code is crashing. Please contact admin.");
    } finally {
        setLoading(false);
    }
};

    return {
        sellerName, setSellerName, sellerEmail, setSellerEmail, sellerMobile, setSellerMobile,
        carName, setCarName, regNumber, setRegNumber, variant, setVariant, year, setYear,
        kmDriven, setKmDriven, expectedPrice, setExpectedPrice, fuelType, setFuelType,
        transmission, setTransmission, description, setDescription, features, setFeatures,
        mediaFiles, setMediaFiles, loading, handleSellCarSubmission,
        states: states.map(s => s.name),
        cities: cities.map(c => c.name),
        address, setAddress,
        brands: brands.map(b => b.name),
        models: models.map(m => m.name),
        selectedState, onStateChange,
        selectedCity, onCitySelect: (n: string) => {
            const city = cities.find(c => c.name === n);
            if (city) setSelectedCity({ id: city._id, name: n });
        },
        selectedBrand, onBrandChange,
        selectedModel, onModelSelect: (n: string) => {
            const model = models.find(m => m.name === n);
            if (model) setSelectedModel({ id: model._id, name: n });
        },
        condition, setCondition,
        location, setLocation
    };
};