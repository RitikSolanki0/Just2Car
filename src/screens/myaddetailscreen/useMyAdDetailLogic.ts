import { Colors } from "../../theme/colors";

export const useMyAdDetailLogic = (ad: any) => {
  
  // --- स्टेटस के हिसाब से मैसेज और स्टाइल तय करना ---
  const getStatusDetails = (status: string) => {
    switch (status) {
      case 'pending':
        return {
          title: "Inspection Pending",
          desc: "Your application is received. Our expert will assign an inspection slot soon.",
          color: Colors.primary,
          bg: "#F3F4F6",
          icon: "time-outline",
          canConfirm: false
        };
      case 'scheduled':
        return {
          title: "Action Required",
          desc: "Just2Car has scheduled your inspection. Please confirm the date and time to proceed.",
          color: "#EA580C",
          bg: "#FFF7ED",
          icon: "calendar-outline",
          canConfirm: true // इस पर बटन दिखेगा
        };
      case 'reject':
        return {
          title: "Ad Rejected",
          desc: "Sorry, your car listing was rejected after initial review.",
          color: "#DC2626",
          bg: "#FEF2F2",
          icon: "close-circle-outline",
          canConfirm: false
        };
      case 'user_accepted':
        return {
          title: "Confirmed",
          desc: "Inspection time confirmed. Our team will visit you as per the schedule.",
          color: "#059669",
          bg: "#ECFDF5",
          icon: "checkmark-circle-outline",
          canConfirm: false
        };
      case 'completed':
        return {
          title: "Inspection Completed",
          desc: "Your car has been inspected and will be live soon!",
          color: "#059669",
          bg: "#ECFDF5",
          icon: "ribbon-outline",
          canConfirm: false
        };
      default:
        return {
          title: "Status Update",
          desc: "Your application is under process.",
          color: "gray",
          bg: "#F9FAFB",
          icon: "information-circle-outline",
          canConfirm: false
        };
    }
  };

  const statusInfo = getStatusDetails(ad.inspectionStatus);

  return { statusInfo };
};