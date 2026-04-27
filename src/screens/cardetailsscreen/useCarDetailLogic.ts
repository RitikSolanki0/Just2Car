// import { useState, useEffect, useMemo } from 'react';
// import axios from 'axios';
// import AsyncStorage from '@react-native-async-storage/async-storage';
// import { ENDPOINTS } from '../../services/apiConfig';

// export const useCarDetailLogic = (carId: string) => {
//   const [carData, setCarData] = useState<any>(null);
//   const [loading, setLoading] = useState(true);
//   const [isModalVisible, setModalVisible] = useState(false);
//   const [showFullDesc, setShowFullDesc] = useState(false);

//   // फिल्टर स्टेट्स
//   const [showImages, setShowImages] = useState(true);
//   const [showVideos, setShowVideos] = useState(true);

//   useEffect(() => {
//     if (carId) fetchDetails();
//   }, [carId]);

// const fetchDetails = async () => {
//     setLoading(true);
//     try {
//       const token = await AsyncStorage.getItem('userToken');
//       const url = ENDPOINTS.GET_CAR_DETAILS(carId);
      
//       console.log("📡 Fetching Details from:", url);

//       const response = await axios.get(url, {
//         headers: { Authorization: `Bearer ${token}` }
//       });

//       // --- 📝 यहाँ पूरा API रिस्पॉन्स दिखेगा ---
//       console.log("====================================");
//       console.log("✅ API SUCCESS: Car Data Received");
//       console.log(JSON.stringify(response.data.data, null, 2)); // डेटा को सुंदर फॉर्मेट में प्रिंट करें
//       console.log("====================================");

//       if (response.data.success) {
//         setCarData(response.data.data);
//       }
//     } catch (error: any) {
//       console.log("❌ API ERROR DETAIL:", error.response?.data || error.message);
//     } finally {
//       setLoading(false);
//     }
// };

//   // --- API इमेजेस को गैलरी फॉर्मेट में बदलना ---
//   const mediaList = useMemo(() => {
//     if (!carData) return [];
    
//     const media: any[] = [];
    
//     // इमेजेस जोड़ें
//     if (showImages && carData.images) {
//       carData.images.forEach((img: string) => {
//         media.push({ type: 'image', url: { uri: img } });
//       });
//     }

//     // अगर API में वीडियो आता है (अभी response में नहीं है, पर भविष्य के लिए)
//     if (showVideos && carData.inspectionVideo) {
//       media.push({ type: 'video', url: { uri: carData.inspectionVideo } });
//     }

//     return media;
//   }, [carData, showImages, showVideos]);

//   return {
//     carData,
//     loading,
//     mediaList,
//     showFullDesc, setShowFullDesc,
//     showImages, setShowImages,
//     showVideos, setShowVideos,
//     isModalVisible, setModalVisible
//   };
// };










import { useState, useEffect, useMemo } from 'react';
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { ENDPOINTS } from '../../services/apiConfig';
import { showErrorToast } from '../../utils/showToast';

export const useCarDetailLogic = (carId: string) => {
  const [carData, setCarData] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [inquiryLoading, setInquiryLoading] = useState(false); 
  const [isModalVisible, setModalVisible] = useState(false);
  const [showFullDesc, setShowFullDesc] = useState(false);

  const [showImages, setShowImages] = useState(true);
  const [showVideos, setShowVideos] = useState(true);

  useEffect(() => {
    if (carId) fetchDetails();
  }, [carId]);

  const fetchDetails = async () => {
    setLoading(true);
    try {
      const token = await AsyncStorage.getItem('userToken');
      const response = await axios.get(ENDPOINTS.GET_CAR_DETAILS(carId), {
        headers: { Authorization: `Bearer ${token}` }
      });
      if (response.data.success) {
        setCarData(response.data.data);
      }
    } catch (error: any) {
      console.log("❌ Detail Fetch Error:", error.message);
    } finally {
      setLoading(false);
    }
  };

  // --- 🚀 मुख्य इंक्वायरी फंक्शन ---
  const handleSendInquiry = async () => {
    setInquiryLoading(true);
    try {
      const token = await AsyncStorage.getItem('userToken');
      const userRaw = await AsyncStorage.getItem('userData');
      const user = userRaw ? JSON.parse(userRaw) : null;

      if (!token || !user) {
        showErrorToast("Error", "Please login to send inquiry.");
        return;
      }

      const payload = {
        carId: carId,
        buyerName: user.fullName,
        buyerPhone: user.phone,
        buyerMessage: "Is this price negotiable?" // डिफ़ॉल्ट मैसेज
      };

      console.log("📡 Sending Inquiry Payload:", payload);

      const response = await axios.post(ENDPOINTS.SEND_INQUIRY, payload, {
        headers: { Authorization: `Bearer ${token}` }
      });

      if (response.data.success) {
        console.log("✅ Inquiry Sent Success");
        setModalVisible(true); // सफलता मिलने पर मोडल दिखाएँ
      }
    } catch (error: any) {
      console.log("❌ Inquiry API Error:", error.response?.data || error.message);
      showErrorToast("Failed", error.response?.data?.message || "Could not send inquiry.");
    } finally {
      setInquiryLoading(false);
    }
  };

  // Media List logic...
  const mediaList = useMemo(() => {
    if (!carData) return [];
    const media: any[] = [];
    if (showImages && carData.images) {
      carData.images.forEach((img: string) => media.push({ type: 'image', url: { uri: img } }));
    }
    if (showVideos && carData.inspectionVideo) {
      media.push({ type: 'video', url: { uri: carData.inspectionVideo } });
    }
    return media;
  }, [carData, showImages, showVideos]);

  return {
    carData, loading, mediaList,
    showFullDesc, setShowFullDesc,
    showImages, setShowImages,
    showVideos, setShowVideos,
    isModalVisible, setModalVisible,
    inquiryLoading, handleSendInquiry // ये नए हैं
  };
};