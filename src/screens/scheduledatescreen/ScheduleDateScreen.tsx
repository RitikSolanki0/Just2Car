
// api integration and chote part me yaha se 

// import React from "react";
// import { View, Text, Image, TouchableOpacity, ScrollView, Modal, TextInput, ActivityIndicator } from "react-native";
// import Ionicons from "@react-native-vector-icons/ionicons";
// import { SafeAreaView, useSafeAreaInsets } from "react-native-safe-area-context";
// import { styles } from './ScheduleDateStyles';
// import TimePickerModal from './TimePickerModal';
// import { useScheduleDateLogic } from './useScheduleDateLogic';
// import { Colors } from "../../theme/colors";
// import { formatDate } from "../../utils/dateHelpers"; // हमने जो पहले बनाया था

// const ScheduleDateScreen = ({ navigation, route }: any) => {
//   const { car } = route.params || {};
//   const insets = useSafeAreaInsets();
  
//   const logic = useScheduleDateLogic(navigation, car);

//   const addNewTime = (newTime: string) => {
//     if (!logic.availableTimes.includes(newTime)) {
//         logic.setAvailableTimes([...logic.availableTimes, newTime]);
//     }
//     logic.setSelectedTime(newTime);
//     logic.setShowPicker(false);
//   };

//   return (
//     <SafeAreaView style={styles.safeArea}>
//       <View style={styles.header}>
//         <TouchableOpacity onPress={() => navigation.goBack()}><Ionicons name="arrow-back" size={28} color="black" /></TouchableOpacity>
//         <Text style={styles.headerTitle}>Book an Inspection</Text>
//         <View style={{width: 28}} />
//       </View>

//       <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={{ paddingBottom: 150 }}>
//         <Image source={car?.images && car.images.length > 0 ? { uri: car.images[0] } : require("../../assets/images/carimages/car1.jpg")} style={styles.imageContainer} />

//         <View style={styles.detailsSection}>
//           <Text style={styles.carName}>{car?.model || "Car Details"}</Text>
//           <Text style={styles.carPrice}>₹ {car?.expectedPrice?.toLocaleString()}</Text>

//           <Text style={styles.sectionTitle}>Choose Location</Text>
//           <View style={styles.buttonRow}>
//             <TouchableOpacity style={[styles.locationBtn, logic.location === "Hub" ? styles.btnActive : styles.btnInactive]} onPress={() => logic.setLocation("Hub")}>
//               <Text style={[styles.btnText, logic.location === "Hub" ? styles.textWhite : styles.textBlack]}>At Our Hub</Text>
//             </TouchableOpacity>
//             <TouchableOpacity style={[styles.locationBtn, logic.location === "Home" ? styles.btnYellow : styles.btnInactive]} onPress={() => logic.setLocation("Home")}>
//               <Text style={[styles.btnText, logic.location === "Home" ? styles.textWhite : styles.textBlack]}>Your Home</Text>
//             </TouchableOpacity>
//           </View>

//           {logic.location === "Home" && (
//             <TextInput placeholder="Enter your full home address" style={styles.reasonInput} value={logic.address} onChangeText={logic.setAddress} multiline />
//           )}

//           <Text style={styles.sectionTitle}>Select Date</Text>
//           <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.selectorRow}>
//             {logic.availableDates.map(date => (
//               <TouchableOpacity key={date} style={[styles.pill, logic.selectedDate === date ? styles.btnActive : styles.pillInactive]} onPress={() => logic.setSelectedDate(date)}>
//                 <Text style={[styles.pillText, logic.selectedDate === date ? styles.textWhite : styles.textGray]}>{formatDate(date)}</Text>
//               </TouchableOpacity>
//             ))}
//           </ScrollView>

//           <Text style={styles.sectionTitle}>Choose Time</Text>
//           <View style={styles.gridRow}>
//             {logic.availableTimes.map(time => (
//               <TouchableOpacity key={time} style={[styles.pillLarge, logic.selectedTime === time ? styles.btnActive : styles.pillInactive]} onPress={() => logic.setSelectedTime(time)}>
//                 <Text style={[styles.pillText, logic.selectedTime === time ? styles.textWhite : styles.textGray]}>{time}</Text>
//               </TouchableOpacity>
//             ))}
//             <TouchableOpacity style={styles.addMoreBtn} onPress={() => logic.setShowPicker(true)}>
//               <Ionicons name="add" size={30} color="#9CA3AF" />
//             </TouchableOpacity>
//           </View>

//           <Text style={styles.sectionTitle}>Reason for Reschedule</Text>
//           <TextInput placeholder="Why do you want to reschedule?" style={styles.reasonInput} value={logic.reason} onChangeText={logic.setReason} multiline />
//         </View>
//       </ScrollView>

//       {/* --- SUBMIT Button --- */}
//       <View style={[styles.footer, { paddingBottom: insets.bottom + 15 }]}>
//         <TouchableOpacity style={styles.confirmBtn} onPress={logic.handleRescheduleSubmit} disabled={logic.loading}>
//           {logic.loading ? <ActivityIndicator color="white" /> : <Text style={styles.confirmText}>SUBMIT</Text>}
//         </TouchableOpacity>
//       </View>

//       <TimePickerModal visible={logic.showPicker} onClose={() => logic.setShowPicker(false)} onSave={addNewTime} />
      
//       {/* Success Modal */}
//       <Modal visible={logic.showSuccess} transparent animationType="fade">
//         <View style={styles.modalOverlay}>
//           <View style={styles.modalContent}>
//             <Ionicons name="checkmark-circle" size={80} color={Colors.primary} />
//             <Text style={styles.modalTitle}>Thank You!</Text>
//             <Text style={styles.modalSubTitle}>We will share you the confirmation message soon.</Text>
//             <TouchableOpacity style={styles.okayBtn} onPress={() => {logic.setShowSuccess(false); navigation.navigate('BottomNavigator');}}><Text style={styles.okayBtnText}>Done</Text></TouchableOpacity>
//           </View>
//         </View>
//       </Modal>
//     </SafeAreaView>
//   );
// };

// export default ScheduleDateScreen;
























import React from "react";
import { 
  View, 
  Text, 
  Image, 
  TouchableOpacity, 
  ScrollView, 
  Modal, 
  TextInput, 
  ActivityIndicator 
} from "react-native";
import Ionicons from "@react-native-vector-icons/ionicons";
import { SafeAreaView, useSafeAreaInsets } from "react-native-safe-area-context";
import { styles } from './ScheduleDateStyles';
import TimePickerModal from './TimePickerModal';
import { useScheduleDateLogic } from './useScheduleDateLogic';
import { Colors } from "../../theme/colors";
import { formatDate } from "../../utils/dateHelpers";

const ScheduleDateScreen = ({ navigation, route }: any) => {
  const { car } = route.params || {};
  const insets = useSafeAreaInsets();
  
  const logic = useScheduleDateLogic(navigation, car);

  const addNewTime = (newTime: string) => {
    if (!logic.availableTimes.includes(newTime)) {
        logic.setAvailableTimes([...logic.availableTimes, newTime]);
    }
    logic.setSelectedTime(newTime);
    logic.setShowPicker(false);
  };

  // --- फिक्स: कार का नाम सुरक्षित तरीके से निकालने के लिए (Object handling) ---
  const getCarModelName = () => {
    if (!car) return "Car Details";
    // अगर model एक object है तो .name लें, वरना सीधा इस्तेमाल करें
    const modelName = typeof car.model === 'object' ? car.model.name : car.model;
    const brandName = car.brand?.name ? `${car.brand.name} ` : "";
    return brandName + (modelName || car.name || "Car");
  };

  // --- फिक्स: सिटी का नाम सुरक्षित तरीके से निकालने के लिए ---
  const getCityName = () => {
    if (!car) return "N/A";
    if (typeof car.city === 'object') return car.city.name;
    return car.city || "N/A";
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Ionicons name="arrow-back" size={28} color="black" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Book an Inspection</Text>
        <View style={{width: 28}} />
      </View>

      <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={{ paddingBottom: 150 }}>
        {/* Car Image */}
        <Image 
          source={car?.images && car.images.length > 0 ? { uri: car.images[0] } : require("../../assets/images/carimages/car1.jpg")} 
          style={styles.imageContainer} 
        />

        <View style={styles.detailsSection}>
          {/* --- फिक्स: कार का नाम यहाँ रेंडर हो रहा है --- */}
          <Text style={styles.carName}>{getCarModelName()}</Text>
          
          <Text style={styles.carPrice}>₹ {car?.expectedPrice?.toLocaleString('en-IN')}</Text>

          <View style={styles.locationRow}>
            <Ionicons name="location-outline" size={14} color="gray" />
            {/* --- फिक्स: सिटी का नाम यहाँ रेंडर हो रहा है --- */}
            <Text style={styles.locationText}> {getCityName()}</Text>
          </View>

          {/* Choose Location */}
          <Text style={styles.sectionTitle}>Choose Location</Text>
          <View style={styles.buttonRow}>
            <TouchableOpacity 
                style={[styles.locationBtn, logic.location === "Hub" ? styles.btnActive : styles.btnInactive]} 
                onPress={() => logic.setLocation("Hub")}
            >
              <Text style={[styles.btnText, logic.location === "Hub" ? styles.textWhite : styles.textBlack]}>At Our Hub</Text>
            </TouchableOpacity>
            <TouchableOpacity 
                style={[styles.locationBtn, logic.location === "Home" ? styles.btnYellow : styles.btnInactive]} 
                onPress={() => logic.setLocation("Home")}
            >
              <Text style={[styles.btnText, logic.location === "Home" ? styles.textWhite : styles.textBlack]}>Your Home</Text>
            </TouchableOpacity>
          </View>

          {/* Address Input (If Home selected) */}
          {logic.location === "Home" && (
            <TextInput 
                placeholder="Enter your full home address" 
                style={styles.reasonInput} 
                value={logic.address} 
                onChangeText={logic.setAddress} 
                multiline 
                placeholderTextColor="#9CA3AF"
            />
          )}

          {/* Date Selection */}
          <Text style={styles.sectionTitle}>Select Date</Text>
          <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.selectorRow}>
            {logic.availableDates.map(date => (
              <TouchableOpacity 
                key={date} 
                style={[styles.pill, logic.selectedDate === date ? styles.btnActive : styles.pillInactive]} 
                onPress={() => logic.setSelectedDate(date)}
              >
                <Text style={[styles.pillText, logic.selectedDate === date ? styles.textWhite : styles.textGray]}>{formatDate(date)}</Text>
              </TouchableOpacity>
            ))}
          </ScrollView>

          {/* Time Selection */}
          <Text style={styles.sectionTitle}>Choose Time</Text>
          <View style={styles.gridRow}>
            {logic.availableTimes.map(time => (
              <TouchableOpacity 
                key={time} 
                style={[styles.pillLarge, logic.selectedTime === time ? styles.btnActive : styles.pillInactive]} 
                onPress={() => logic.setSelectedTime(time)}
              >
                <Text style={[styles.pillText, logic.selectedTime === time ? styles.textWhite : styles.textGray]}>{time}</Text>
              </TouchableOpacity>
            ))}
            <TouchableOpacity style={styles.addMoreBtn} onPress={() => logic.setShowPicker(true)}>
              <Ionicons name="add" size={30} color="#9CA3AF" />
            </TouchableOpacity>
          </View>

          {/* Reason Input */}
          <Text style={styles.sectionTitle}>Reason for Reschedule</Text>
          <TextInput 
            placeholder="Why do you want to reschedule?" 
            style={styles.reasonInput} 
            value={logic.reason} 
            onChangeText={logic.setReason} 
            multiline 
            placeholderTextColor="#9CA3AF"
          />
        </View>
      </ScrollView>

      {/* Footer Submit Button */}
      <View style={[styles.footer, { paddingBottom: insets.bottom + 15 }]}>
        <TouchableOpacity 
            style={styles.confirmBtn} 
            onPress={logic.handleRescheduleSubmit} 
            disabled={logic.loading}
        >
          {logic.loading ? (
            <ActivityIndicator color="white" />
          ) : (
            <Text style={styles.confirmText}>SUBMIT</Text>
          )}
        </TouchableOpacity>
      </View>

      {/* Modals */}
      <TimePickerModal visible={logic.showPicker} onClose={() => logic.setShowPicker(false)} onSave={addNewTime} />
      
      <Modal visible={logic.showSuccess} transparent animationType="fade">
        <View style={styles.modalOverlay}>
          <View style={styles.modalContent}>
            <Ionicons name="checkmark-circle" size={80} color={Colors.primary} />
            <Text style={styles.modalTitle}>Thank You!</Text>
            <Text style={styles.modalSubTitle}>We will share you the confirmation message soon.</Text>
            <TouchableOpacity 
                style={styles.okayBtn} 
                onPress={() => {
                    logic.setShowSuccess(false); 
                    navigation.navigate('BottomNavigator');
                }}
            >
                <Text style={styles.okayBtnText}>Done</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </SafeAreaView>
  );
};

export default ScheduleDateScreen;