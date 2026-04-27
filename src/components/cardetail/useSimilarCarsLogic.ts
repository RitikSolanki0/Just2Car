// src/components/cardetail/useSimilarCarsLogic.ts

// import { useState, useEffect } from 'react';
// import axios from 'axios';
// import AsyncStorage from '@react-native-async-storage/async-storage';
// import { ENDPOINTS } from '../../services/apiConfig';

// export const useSimilarCarsLogic = (brandId: string | undefined, currentCarId: string) => {
//   const [similarCars, setSimilarCars] = useState<any[]>([]);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     // --- 📝 चेक करें कि यहाँ क्या डेटा आ रहा है ---
//     console.log("🔍 Similar Cars Hook Triggered:");
//     console.log("Target Brand ID:", brandId);
//     console.log("Current Car ID:", currentCarId);

//     if (!brandId) {
//       console.log("⚠️ No Brand ID provided, skipping fetch.");
//       setLoading(false);
//       return;
//     }
//     fetchSimilarCars();
//   }, [brandId]);

//   const fetchSimilarCars = async () => {
//     try {
//       const token = await AsyncStorage.getItem('userToken');
      
//       // बैकएंड को ब्रांड आईडी भेज रहे हैं
//       const url = `${ENDPOINTS.GET_CARS}?brand=${brandId}`;
//       console.log("📡 Fetching Similar Cars from:", url);

//       const response = await axios.get(url, {
//         headers: { Authorization: `Bearer ${token}` }
//       });

//       if (response.data.success) {
//         const allCarsFromAPI = response.data.data;
//         console.log(`📦 Total cars found with this brand: ${allCarsFromAPI.length}`);

//         // --- 🚀 फिक्स: आईडी मैचिंग को स्ट्रिंग में बदलकर चेक करें ---
//         const filtered = allCarsFromAPI.filter((car: any) => {
//            // अपनी कार को लिस्ट से हटाओ
//            return String(car._id) !== String(currentCarId);
//         });

//         console.log(`✅ Similar cars after filtering current one: ${filtered.length}`);
//         setSimilarCars(filtered);
//       }
//     } catch (error: any) {
//       console.log("❌ Similar Cars Fetch Error:", error.response?.data || error.message);
//     } finally {
//       setLoading(false);
//     }
//   };

//   return { similarCars, loading };
// };





















import { useState, useEffect } from 'react';
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { ENDPOINTS } from '../../services/apiConfig';

export const useSimilarCarsLogic = (brandId: string | undefined, currentCarId: string | undefined) => {
  const [similarCars, setSimilarCars] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // --- 📝 Debug Logs ---
    console.log("🔍 Similar Cars Hook Check:");
    console.log("Input Brand ID:", brandId);
    console.log("Current Car ID:", currentCarId);

    if (!brandId || !currentCarId) {
      console.log("⚠️ Missing ID, skipping similar cars fetch.");
      setLoading(false);
      return;
    }
    fetchSimilarCars();
  }, [brandId, currentCarId]);

  const fetchSimilarCars = async () => {
    setLoading(true);
    try {
      const token = await AsyncStorage.getItem('userToken');
      
      // ब्रांड आईडी को साफ़ करें (अगर ऑब्जेक्ट है तो ID निकालें)
      const cleanBrandId = typeof brandId === 'object' ? (brandId as any)._id : brandId;

      // API: /cars?brand=ID
      const url = `${ENDPOINTS.GET_CARS}?brand=${cleanBrandId}`;
      console.log("📡 Fetching from:", url);

      const response = await axios.get(url, {
        headers: { Authorization: `Bearer ${token}` }
      });

      if (response.data.success) {
        const allCars = response.data.data;
        
        // --- 🚀 वर्तमान कार को लिस्ट से हटाएँ ---
        const filtered = allCars.filter(
          (item: any) => String(item._id) !== String(currentCarId)
        );

        console.log(`✅ Found ${filtered.length} similar cars.`);
        setSimilarCars(filtered);
      }
    } catch (error: any) {
      console.log("❌ Similar Cars Fetch Error:", error.response?.data || error.message);
    } finally {
      setLoading(false);
    }
  };

  return { similarCars, loading };
};