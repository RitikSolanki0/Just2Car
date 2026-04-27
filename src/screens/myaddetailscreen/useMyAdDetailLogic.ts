// import { Colors } from "../../theme/colors";

// export const useMyAdDetailLogic = (ad: any) => {
  
//   // --- स्टेटस के हिसाब से मैसेज और स्टाइल तय करना ---
//   const getStatusDetails = (status: string) => {
//     switch (status) {
//       case 'pending':
//         return {
//           title: "Inspection Pending",
//           desc: "Your application is received. Our expert will assign an inspection slot soon.",
//           color: Colors.primary,
//           bg: "#F3F4F6",
//           icon: "time-outline",
//           canConfirm: false
//         };
//       case 'scheduled':
//         return {
//           title: "Action Required",
//           desc: "Just2Car has scheduled your inspection. Please confirm the date and time to proceed.",
//           color: "#EA580C",
//           bg: "#FFF7ED",
//           icon: "calendar-outline",
//           canConfirm: true // इस पर बटन दिखेगा
//         };
//       case 'reject':
//         return {
//           title: "Ad Rejected",
//           desc: "Sorry, your car listing was rejected after initial review.",
//           color: "#DC2626",
//           bg: "#FEF2F2",
//           icon: "close-circle-outline",
//           canConfirm: false
//         };
//       case 'user_accepted':
//         return {
//           title: "Confirmed",
//           desc: "Inspection time confirmed. Our team will visit you as per the schedule.",
//           color: "#059669",
//           bg: "#ECFDF5",
//           icon: "checkmark-circle-outline",
//           canConfirm: false
//         };
//       case 'completed':
//         return {
//           title: "Inspection Completed",
//           desc: "Your car has been inspected and will be live soon!",
//           color: "#059669",
//           bg: "#ECFDF5",
//           icon: "ribbon-outline",
//           canConfirm: false
//         };
//       default:
//         return {
//           title: "Status Update",
//           desc: "Your application is under process.",
//           color: "gray",
//           bg: "#F9FAFB",
//           icon: "information-circle-outline",
//           canConfirm: false
//         };
//     }
//   };

//   const statusInfo = getStatusDetails(ad.inspectionStatus);

//   return { statusInfo };
// };
























// import { useState, useEffect } from 'react';
// import { Linking, Alert } from 'react-native';
// import axios from 'axios';
// import AsyncStorage from '@react-native-async-storage/async-storage';
// import { ENDPOINTS } from '../../services/apiConfig';
// import { Colors } from "../../theme/colors";

// export const useMyAdDetailLogic = (ad: any) => {
//   const [inspector, setInspector] = useState<any>(null);
//   const [loadingInspector, setLoadingInspector] = useState(false);

//   const handleCall = (phoneNumber: string) => {
//     if (!phoneNumber) {
//       Alert.alert("Error", "Phone number not available.");
//       return;
//     }

//     const url = `tel:${phoneNumber}`;
    
//     Linking.canOpenURL(url)
//       .then((supported) => {
//         if (!supported) {
//           Alert.alert("Error", "Phone calls are not supported on this device.");
//         } else {
//           return Linking.openURL(url);
//         }
//       })
//       .catch((err) => console.log("Linking Error:", err));
//   };

//   // जब स्टेटस 'assigned' हो, तभी इंस्पेक्टर की डिटेल्स फेच करें
//   useEffect(() => {
//     if (ad.inspectionStatus === 'assigned') {
//       fetchInspectorDetails();
//     }
//   }, [ad]);

//   const fetchInspectorDetails = async () => {
//     setLoadingInspector(true);
//     try {
//       const token = await AsyncStorage.getItem('userToken');
//       // API: {{base_url}}/assigned-inspection/:carId
//       const url = ENDPOINTS.ASSIGNED_INSPECTOR(ad._id); 
      
//       const response = await axios.get(url, {
//         headers: { Authorization: `Bearer ${token}` }
//       });
//       if (response.data.success) {
//         setInspector(response.data.data);
//       }
//     } catch (error) {
//       console.log("Inspector Fetch Error:", error);
//     } finally {
//       setLoadingInspector(false);
//     }
//   };

//   const getStatusDetails = (status: string) => {
//     switch (status) {
//       case 'pending':
//         return {
//           title: "Inspection Pending",
//           desc: "Your application is received. Our expert will assign an inspection slot soon.",
//           color: Colors.primary,
//           bg: "#F3F4F6",
//           icon: "time-outline",
//           canConfirm: false
//         };
//       case 'scheduled':
//         return {
//           title: "Action Required",
//           desc: "Just2Car has scheduled your inspection. Please confirm the date and time to proceed.",
//           color: "#EA580C",
//           bg: "#FFF7ED",
//           icon: "calendar-outline",
//           canConfirm: true
//         };
//       case 'assigned':
//         return {
//           title: "Inspector Assigned",
//           desc: "An inspector has been assigned. They will visit your location as per the schedule.",
//           color: "#8B5CF6",
//           bg: "#F5F3FF",
//           icon: "person-circle-outline",
//           canConfirm: false
//         };
//       case 'reject':
//         return {
//           title: "Ad Rejected",
//           desc: "Sorry, your car listing was rejected after initial review.",
//           color: "#DC2626",
//           bg: "#FEF2F2",
//           icon: "close-circle-outline",
//           canConfirm: false
//         };
//       case 'user_accepted':
//         return {
//           title: "Time Confirmed",
//           desc: "You have accepted the inspection schedule. Our team is on the way.",
//           color: "#059669",
//           bg: "#ECFDF5",
//           icon: "checkmark-circle-outline",
//           canConfirm: false
//         };
//       case 'completed':
//         return {
//           title: "Inspection Done",
//           desc: "Your car inspection is completed successfully!",
//           color: "#059669",
//           bg: "#ECFDF5",
//           icon: "ribbon-outline",
//           canConfirm: false
//         };
//       case 'failed':
//         return {
//           title: "Inspection Failed",
//           desc: "The inspection process could not be completed.",
//           color: "#DC2626",
//           bg: "#FEF2F2",
//           icon: "alert-circle-outline",
//           canConfirm: false
//         };
//       default:
//         return {
//           title: "Status Update",
//           desc: "Your application is under process.",
//           color: "gray",
//           bg: "#F9FAFB",
//           icon: "information-circle-outline",
//           canConfirm: false
//         };
//     }
//   };

//   const statusInfo = getStatusDetails(ad.inspectionStatus);

//   return { statusInfo, inspector, loadingInspector, handleCall };
// };





















// import { useState, useEffect } from 'react';
// import { Linking, Alert } from 'react-native';
// import axios from 'axios';
// import AsyncStorage from '@react-native-async-storage/async-storage';
// import { ENDPOINTS } from '../../services/apiConfig';
// import { Colors } from "../../theme/colors";

// export const useMyAdDetailLogic = (ad: any) => {
//   const [inspector, setInspector] = useState<any>(null);
//   const [loadingInspector, setLoadingInspector] = useState(false);

//   // ... handleCall logic वही रहेगा ...
//   const handleCall = (phoneNumber: string) => {
//     if (!phoneNumber) { Alert.alert("Error", "Phone number not available."); return; }
//     Linking.openURL(`tel:${phoneNumber}`).catch(err => console.log(err));
//   };

//   useEffect(() => {
//     if (ad.inspectionStatus === 'assigned') {
//       fetchInspectorDetails();
//     }
//   }, [ad]);

//   const fetchInspectorDetails = async () => {
//     setLoadingInspector(true);
//     try {
//       const token = await AsyncStorage.getItem('userToken');
//       const url = ENDPOINTS.ASSIGNED_INSPECTOR(ad._id); 
//       const response = await axios.get(url, { headers: { Authorization: `Bearer ${token}` } });
//       if (response.data.success) { setInspector(response.data.data); }
//     } catch (error) { console.log(error); } finally { setLoadingInspector(false); }
//   };

//   // --- 🚀 अपडेटेड स्टेटस लॉजिक ---
//   const getStatusDetails = (currentAd: any) => {
    
//     // 1. सबसे पहले चेक करें कि क्या एड रिजेक्ट हुआ है (Root status check)
//     if (currentAd.status === 'rejected') {
//       return {
//         title: "Car Rejected",
//         desc: currentAd.rejectionReason || "Your car listing was rejected by our team.",
//         date: currentAd.rejectionDate, // रिजेक्शन की तारीख
//         color: "#DC2626", // Red
//         bg: "#FEF2F2",
//         icon: "close-circle-outline",
//         canConfirm: false
//       };
//     }

//     // 2. अगर रिजेक्ट नहीं है, तो इंस्पेक्शन स्टेटस देखें
//     switch (currentAd.inspectionStatus) {
//       case 'pending':
//         return { title: "Inspection Pending", desc: "Our expert will assign an inspection slot soon.", color: Colors.primary, bg: "#F3F4F6", icon: "time-outline", canConfirm: false };
//       case 'scheduled':
//         return { title: "Action Required", desc: "Please confirm the date and time to proceed.", color: "#EA580C", bg: "#FFF7ED", icon: "calendar-outline", canConfirm: true };
//       case 'assigned':
//         return { title: "Inspector Assigned", desc: "An inspector will visit your location as per schedule.", color: "#8B5CF6", bg: "#F5F3FF", icon: "person-circle-outline", canConfirm: false };
//       case 'user_accepted':
//         return { title: "Confirmed", desc: "You have accepted the schedule. Team is on the way.", color: "#059669", bg: "#ECFDF5", icon: "checkmark-circle-outline", canConfirm: false };
//       case 'completed':
//         return { title: "Inspection Done", desc: "Inspection completed successfully!", color: "#059669", bg: "#ECFDF5", icon: "ribbon-outline", canConfirm: false };
//       default:
//         return { title: "Status Update", desc: "Application is under process.", color: "gray", bg: "#F9FAFB", icon: "information-circle-outline", canConfirm: false };
//     }
//   };

//   // अब हम पूरे 'ad' ऑब्जेक्ट को भेज रहे हैं
//   const statusInfo = getStatusDetails(ad);

//   return { statusInfo, inspector, loadingInspector, handleCall };
// };



















import { useState, useEffect } from 'react';
import { Linking, Alert } from 'react-native';
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { ENDPOINTS } from '../../services/apiConfig';
import { Colors } from "../../theme/colors";

export const useMyAdDetailLogic = (ad: any) => {
  const [inspector, setInspector] = useState<any>(null);
  const [loadingInspector, setLoadingInspector] = useState(false);

  // --- 📞 कॉल हैंडलर ---
  const handleCall = (phoneNumber: string) => {
    if (!phoneNumber) { Alert.alert("Error", "Number not available"); return; }
    Linking.openURL(`tel:${phoneNumber}`).catch(err => console.log(err));
  };

  useEffect(() => {
    if (ad.inspectionStatus === 'assigned') {
      fetchInspectorDetails();
    }
  }, [ad]);

  const fetchInspectorDetails = async () => {
    setLoadingInspector(true);
    try {
      const token = await AsyncStorage.getItem('userToken');
      const url = ENDPOINTS.ASSIGNED_INSPECTOR(ad._id); 
      const response = await axios.get(url, { headers: { Authorization: `Bearer ${token}` } });
      if (response.data.success) { setInspector(response.data.data); }
    } catch (error) { console.log(error); } finally { setLoadingInspector(false); }
  };

  // --- 🚀 स्टेटस और रिजेक्शन लॉजिक ---
  const getStatusDetails = (currentAd: any) => {
    // 1. अगर कार रिजेक्ट हुई है (Main Status)
    if (currentAd.status === 'rejected') {
      return {
        title: "Car Rejected",
        desc: `Reason: ${currentAd.rejectionReason || "Identity or car details mismatch."}`,
        date: currentAd.rejectionDate, // रिजेक्शन की तारीख
        color: "#DC2626", // Red
        bg: "#FEF2F2",
        icon: "close-circle-outline",
        canConfirm: false
      };
    }

    // 2. अगर कार बिक चुकी है
    if (currentAd.status === 'sold') {
        return { title: "Sold Out", desc: "This car has been successfully sold.", color: "gray", bg: "#F3F4F6", icon: "checkmark-done", canConfirm: false };
    }

    // 3. वरना इंस्पेक्शन स्टेटस दिखाएँ
    switch (currentAd.inspectionStatus) {
      case 'pending':
        return { title: "Inspection Pending", desc: "Your application is received. Our expert will assign an inspection slot soon.", color: Colors.primary, bg: "#F3F4F6", icon: "time-outline", canConfirm: false };
      case 'scheduled':
        return { title: "Action Required", desc: "Just2Car has scheduled your inspection. Please confirm the slot.", color: "#EA580C", bg: "#FFF7ED", icon: "calendar-outline", canConfirm: true };
      case 'assigned':
        return { title: "Inspector Assigned", desc: "An inspector will visit your location as per schedule.", color: "#8B5CF6", bg: "#F5F3FF", icon: "person-circle-outline", canConfirm: false };
      case 'user_accepted':
        return { title: "Time Confirmed", desc: "Schedule accepted. Team is on the way.", color: "#059669", bg: "#ECFDF5", icon: "checkmark-circle-outline", canConfirm: false };
      case 'completed':
        return { title: "Inspection Done", desc: "Your car inspection is completed successfully!", color: "#059669", bg: "#ECFDF5", icon: "ribbon-outline", canConfirm: false };
      default:
        return { title: "Status Update", desc: "Application is under process.", color: "gray", bg: "#F9FAFB", icon: "information-circle-outline", canConfirm: false };
    }
  };

  const statusInfo = getStatusDetails(ad);

  return { statusInfo, inspector, loadingInspector, handleCall };
};