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
















// src/screens/homescreens/useHomeLogic.ts

import { useState, useEffect } from 'react';
import axios from 'axios';
import { ENDPOINTS } from '../../services/apiConfig';

export const useHomeLogic = () => {
  const [brands, setBrands] = useState<any[]>([]);
  const [banners, setBanners] = useState<any[]>([]);
  const [cars, setCars] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchAllData();
  }, []);

  const fetchAllData = async () => {
    setLoading(true);
    try {
      //  APIs को एक साथ कॉल करें (प्रोफेशनल तरीका)
      const [brandRes, bannerRes , carRes] = await Promise.all([
        axios.get(ENDPOINTS.GET_BRANDS),
        axios.get(ENDPOINTS.GET_BANNERS),
        axios.get(ENDPOINTS.GET_CARS)
      ]);

      if (brandRes.data.success) setBrands(brandRes.data.data);
      if (bannerRes.data.success) setBanners(bannerRes.data.data);
      if (carRes.data.success) setCars(carRes.data.data);

    } catch (error) {
      console.log("Error fetching home data:", error);
    } finally {
      setLoading(false);
    }
  };

  return {
    brands,
    banners,
    cars,
    loading,
    refreshHome: fetchAllData
  };
};