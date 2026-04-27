
// import React, { useState, useEffect } from "react";
// import {
//   View,
//   Text,
//   StyleSheet,
//   Image,
//   TouchableOpacity,
//   ScrollView,
//   Modal,
//   FlatList,
// } from "react-native";
// import Ionicons from "@react-native-vector-icons/ionicons";
// import { Colors } from "../../theme/colors";
// import { Fonts } from "../../theme/fonts";
// import { SafeAreaView, useSafeAreaInsets } from "react-native-safe-area-context";

// const ScheduleDateScreen = ({ navigation, route }: any) => {
//   const { car } = route.params || {};
//   const insets = useSafeAreaInsets();

//   // --- States ---
//   const [selectedDate, setSelectedDate] = useState("");
//   const [selectedTime, setSelectedTime] = useState("11 AM");
//   const [availableDates, setAvailableDates] = useState<string[]>([]);
//   const [availableTimes, setAvailableTimes] = useState(["9 AM", "11 AM", "1 PM", "4 PM"]);
//   const [location, setLocation] = useState("Hub");

//   // Modals States
//   const [isSuccessModalVisible, setIsSuccessModalVisible] = useState(false);
//   const [isTimeModalVisible, setIsTimeModalVisible] = useState(false);

//   // Time Picker States
//   const [tempHour, setTempHour] = useState("09");
//   const [tempMinute, setTempMinute] = useState("00");
//   const [tempPeriod, setTempPeriod] = useState("AM");

//   // डेटा जनरेट करना
//   const hours = Array.from({ length: 12 }, (_, i) => (i + 1).toString().padStart(2, '0'));
//   const minutes = Array.from({ length: 12 }, (_, i) => (i * 5).toString().padStart(2, '0'));

//   useEffect(() => {
//     const dates = [];
//     for (let i = 1; i <= 7; i++) {
//       const date = new Date();
//       date.setDate(date.getDate() + i);
//       const day = date.getDate().toString().padStart(2, '0');
//       const month = date.toLocaleString('default', { month: 'short' });
//       dates.push(`${day} ${month}`);
//     }
//     setAvailableDates(dates);
//     setSelectedDate(dates[0]);
//   }, []);

//   // नया टाइम सेव करना
//   const saveCustomTime = () => {
//     const newTime = `${tempHour}:${tempMinute} ${tempPeriod}`;
//     if (!availableTimes.includes(newTime)) {
//       setAvailableTimes([...availableTimes, newTime]);
//     }
//     setSelectedTime(newTime);
//     setIsTimeModalVisible(false);
//   };

//   return (
//     <SafeAreaView style={styles.safeArea}>
//       <View style={styles.header}>
//         <TouchableOpacity onPress={() => navigation.goBack()}><Ionicons name="arrow-back" size={28} color="black" /></TouchableOpacity>
//         <Text style={styles.headerTitle}>Book a Inspection Time</Text>
//         <TouchableOpacity><Ionicons name="help-circle-outline" size={28} color="black" /></TouchableOpacity>
//       </View>

//       <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={{ paddingBottom: 120 }}>
//         <View style={styles.imageContainer}>
//           <Image source={car?.image ? (typeof car.image === 'string' ? { uri: car.image } : car.image) : require("../../assets/images/carimages/car1.jpg")} style={styles.carImage} />
//         </View>

//         <View style={styles.detailsSection}>
//           <Text style={styles.carName}>{car?.title || car?.name || "Car Name"}</Text>
//           <Text style={styles.carPrice}>{car?.price || "₹ 0.00"}</Text>

//           <Text style={styles.sectionTitle}>Select Date</Text>
//           <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.selectorRow}>
//             {availableDates.map((date) => (
//               <TouchableOpacity key={date} style={[styles.pill, selectedDate === date ? styles.btnActive : styles.pillInactive]} onPress={() => setSelectedDate(date)}>
//                 <Text style={[styles.pillText, selectedDate === date ? styles.textWhite : styles.textGray]}>{date}</Text>
//               </TouchableOpacity>
//             ))}
//           </ScrollView>

//           <Text style={styles.sectionTitle}>Choose Time</Text>
//           <View style={styles.gridRow}>
//             {availableTimes.map((time) => (
//               <TouchableOpacity key={time} style={[styles.pillLarge, selectedTime === time ? styles.btnActive : styles.pillInactive]} onPress={() => setSelectedTime(time)}>
//                 <Text style={[styles.pillText, selectedTime === time ? styles.textWhite : styles.textGray]}>{time}</Text>
//               </TouchableOpacity>
//             ))}
//             <TouchableOpacity style={styles.addMoreBtn} onPress={() => setIsTimeModalVisible(true)}>
//               <Ionicons name="add" size={30} color="#9CA3AF" />
//             </TouchableOpacity>
//           </View>
//         </View>
//       </ScrollView>

//       <View style={[styles.footer, { paddingBottom: insets.bottom + 20 }]}>
//         <TouchableOpacity style={styles.confirmBtn} onPress={() => setIsSuccessModalVisible(true)}>
//           <Text style={styles.confirmText}>SUBMIT</Text>
//         </TouchableOpacity>
//       </View>

//       {/* --- SUCCESS MODAL --- */}
//       <Modal visible={isSuccessModalVisible} transparent animationType="fade">
//         <View style={styles.modalOverlay}>
//           <View style={styles.modalContent}>
//             <Ionicons name="checkmark-circle" size={80} color={Colors.primary} />
//             <Text style={styles.modalTitle}>Thank You!</Text>
//             <Text style={styles.modalSubTitle}>We will share you the confirmation message soon.</Text>
//             <TouchableOpacity style={styles.okayBtn} onPress={() => {setIsSuccessModalVisible(false); navigation.navigate('BottomNavigator');}}><Text style={styles.okayBtnText}>Done</Text></TouchableOpacity>
//           </View>
//         </View>
//       </Modal>

//       {/* --- ADVANCED TIME PICKER MODAL --- */}
//       <Modal visible={isTimeModalVisible} transparent animationType="slide">
//         <View style={styles.modalOverlay}>
//           <View style={styles.timePickerCard}>
//             <Text style={styles.pickerHeader}>Select Time</Text>
            
//             <View style={styles.pickerContainer}>
//               {/* Hours Column */}
//               <View style={styles.column}>
//                 <Text style={styles.columnLabel}>Hour</Text>
//                 <FlatList
//                   data={hours}
//                   keyExtractor={(item) => item}
//                   renderItem={({ item }) => (
//                     <TouchableOpacity onPress={() => setTempHour(item)} style={[styles.timeOption, tempHour === item && styles.selectedOption]}>
//                       <Text style={[styles.optionText, tempHour === item && styles.selectedOptionText]}>{item}</Text>
//                     </TouchableOpacity>
//                   )}
//                 />
//               </View>

//               {/* Minutes Column */}
//               <View style={styles.column}>
//                 <Text style={styles.columnLabel}>Min</Text>
//                 <FlatList
//                   data={minutes}
//                   keyExtractor={(item) => item}
//                   renderItem={({ item }) => (
//                     <TouchableOpacity onPress={() => setTempMinute(item)} style={[styles.timeOption, tempMinute === item && styles.selectedOption]}>
//                       <Text style={[styles.optionText, tempMinute === item && styles.selectedOptionText]}>{item}</Text>
//                     </TouchableOpacity>
//                   )}
//                 />
//               </View>

//               {/* AM/PM Column */}
//               <View style={styles.columnNarrow}>
//                 <Text style={styles.columnLabel}>Period</Text>
//                 {["AM", "PM"].map((p) => (
//                   <TouchableOpacity key={p} onPress={() => setTempPeriod(p)} style={[styles.timeOption, tempPeriod === p && styles.selectedOption]}>
//                     <Text style={[styles.optionText, tempPeriod === p && styles.selectedOptionText]}>{p}</Text>
//                   </TouchableOpacity>
//                 ))}
//               </View>
//             </View>

//             <View style={styles.previewBox}>
//                <Text style={styles.previewText}>Selected: {tempHour}:{tempMinute} {tempPeriod}</Text>
//             </View>

//             <View style={styles.modalBtnRow}>
//                <TouchableOpacity style={styles.cancelBtn} onPress={() => setIsTimeModalVisible(false)}><Text style={styles.cancelLabel}>Cancel</Text></TouchableOpacity>
//                <TouchableOpacity style={styles.addTimeBtn} onPress={saveCustomTime}><Text style={styles.addLabel}>Add Time</Text></TouchableOpacity>
//             </View>
//           </View>
//         </View>
//       </Modal>

//     </SafeAreaView>
//   );
// };

// export default ScheduleDateScreen;

// const styles = StyleSheet.create({
//   safeArea: { flex: 1, backgroundColor: 'white' },
//   header: { flexDirection: "row", justifyContent: "space-between", alignItems: "center", paddingHorizontal: 15, height: 60 },
//   headerTitle: { fontFamily: Fonts.bold, fontSize: 18, color: 'black' },
//   iconBtn: { padding: 5 },
//   imageContainer: { width: "100%", height: 220 },
//   carImage: { width: "100%", height: "100%", resizeMode: "cover" },
//   detailsSection: { paddingHorizontal: 20, marginTop: 20 },
//   carName: { fontFamily: Fonts.bold, fontSize: 24, color: 'black' },
//   carPrice: { fontFamily: Fonts.bold, fontSize: 18, color: Colors.secondary, marginTop: 5 },
//   sectionTitle: { fontFamily: Fonts.bold, fontSize: 16, color: 'black', marginTop: 25, marginBottom: 15 },
//   selectorRow: { flexDirection: "row" },
//   pill: { paddingHorizontal: 25, height: 55, borderRadius: 12, justifyContent: "center", alignItems: "center", marginRight: 12 },
//   pillInactive: { backgroundColor: "#F3F4F6" },
//   btnActive: { backgroundColor: Colors.primary },
//   textWhite: { color: 'white' },
//   textGray: { color: "#9CA3AF" },
//   pillText: { fontFamily: Fonts.bold, fontSize: 15 },
//   gridRow: { flexDirection: "row", flexWrap: "wrap" },
//   pillLarge: { width: "23%", height: 60, borderRadius: 12, justifyContent: "center", alignItems: "center", marginBottom: 10, marginRight: '2%' },
//   addMoreBtn: { width: "23%", height: 60, borderRadius: 12, justifyContent: "center", alignItems: "center", marginBottom: 10, borderWidth: 1, borderStyle: 'dashed', borderColor: '#9CA3AF' },
//   footer: { position: 'absolute', bottom: 0, width: '100%', paddingHorizontal: 20, backgroundColor: 'white', paddingTop: 10 },
//   confirmBtn: { backgroundColor: Colors.secondary, height: 60, borderRadius: 12, justifyContent: "center", alignItems: "center" },
//   confirmText: { fontFamily: Fonts.bold, fontSize: 18, color: 'white' },

//   // Modal Styles
//   modalOverlay: { flex: 1, backgroundColor: 'rgba(0,0,0,0.6)', justifyContent: 'center', alignItems: 'center' },
//   modalContent: { width: '85%', backgroundColor: 'white', borderRadius: 25, padding: 30, alignItems: 'center' },
//   modalTitle: { fontFamily: Fonts.bold, fontSize: 22 },
//   modalSubTitle: { fontFamily: Fonts.medium, fontSize: 16, color: 'gray', textAlign: 'center', marginTop: 10 },
//   okayBtn: { marginTop: 30, backgroundColor: Colors.secondary, paddingVertical: 14, borderRadius: 15, width: '100%', alignItems: 'center' },
//   okayBtnText: { color: 'white', fontFamily: Fonts.bold },

//   // --- Advanced Time Picker Styles ---
//   timePickerCard: { width: '90%', backgroundColor: 'white', borderRadius: 25, padding: 20, height: 450 },
//   pickerHeader: { fontFamily: Fonts.bold, fontSize: 20, textAlign: 'center', marginBottom: 20, color: Colors.primary },
//   pickerContainer: { flexDirection: 'row', flex: 1, justifyContent: 'space-between' },
//   column: { flex: 1, alignItems: 'center' },
//   columnNarrow: { width: 60, alignItems: 'center' },
//   columnLabel: { fontSize: 12, color: 'gray', marginBottom: 10, fontFamily: Fonts.bold },
//   timeOption: { paddingVertical: 10, width: '100%', alignItems: 'center', borderRadius: 10, marginBottom: 5 },
//   selectedOption: { backgroundColor: Colors.primary },
//   optionText: { fontSize: 16, fontFamily: Fonts.medium, color: 'black' },
//   selectedOptionText: { color: 'white', fontFamily: Fonts.bold },
//   previewBox: { padding: 15, backgroundColor: '#F3F4F6', borderRadius: 12, marginTop: 15, alignItems: 'center' },
//   previewText: { fontFamily: Fonts.bold, fontSize: 16, color: Colors.primary },
//   modalBtnRow: { flexDirection: 'row', marginTop: 15 },
//   cancelBtn: { flex: 1, padding: 15, alignItems: 'center' },
//   addTimeBtn: { flex: 1.5, backgroundColor: Colors.primary, padding: 15, borderRadius: 12, alignItems: 'center' },
//   cancelLabel: { fontFamily: Fonts.bold, color: 'gray' },
//   addLabel: { fontFamily: Fonts.bold, color: 'white' },
// });















// import React, { useState, useEffect } from "react";
// import {
//   View,
//   Text,
//   StyleSheet,
//   Image,
//   TouchableOpacity,
//   ScrollView,
//   Modal,
//   FlatList,
// } from "react-native";
// import Ionicons from "@react-native-vector-icons/ionicons";
// import { Colors } from "../../theme/colors";
// import { Fonts } from "../../theme/fonts";
// import { SafeAreaView, useSafeAreaInsets } from "react-native-safe-area-context";

// const ScheduleDateScreen = ({ navigation, route }: any) => {
//   const { car } = route.params || {};
//   const insets = useSafeAreaInsets();

//   const [selectedDate, setSelectedDate] = useState("");
//   const [selectedTime, setSelectedTime] = useState("11 AM");
//   const [availableDates, setAvailableDates] = useState<string[]>([]);
//   const [availableTimes, setAvailableTimes] = useState(["09:00 AM", "11:00 AM", "01:00 PM", "04:00 PM"]);

//   const [isSuccessModalVisible, setIsSuccessModalVisible] = useState(false);
//   const [isTimeModalVisible, setIsTimeModalVisible] = useState(false);

//   const [tempHour, setTempHour] = useState("10");
//   const [tempMinute, setTempMinute] = useState("00");
//   const [tempPeriod, setTempPeriod] = useState("AM");

//   const hours = Array.from({ length: 12 }, (_, i) => (i + 1).toString().padStart(2, '0'));
//   const minutes = Array.from({ length: 12 }, (_, i) => (i * 5).toString().padStart(2, '0'));

//   useEffect(() => {
//     const dates = [];
//     for (let i = 1; i <= 7; i++) {
//       const date = new Date();
//       date.setDate(date.getDate() + i);
//       const day = date.getDate().toString().padStart(2, '0');
//       const month = date.toLocaleString('default', { month: 'short' });
//       dates.push(`${day} ${month}`);
//     }
//     setAvailableDates(dates);
//     setSelectedDate(dates[0]);
//   }, []);

//   const saveCustomTime = () => {
//     const newTime = `${tempHour}:${tempMinute} ${tempPeriod}`;
//     if (!availableTimes.includes(newTime)) {
//       setAvailableTimes([...availableTimes, newTime]);
//     }
//     setSelectedTime(newTime);
//     setIsTimeModalVisible(false);
//   };

//   return (
//     <SafeAreaView style={styles.safeArea}>
//       <View style={styles.header}>
//         <TouchableOpacity onPress={() => navigation.goBack()}><Ionicons name="arrow-back" size={28} color="black" /></TouchableOpacity>
//         <Text style={styles.headerTitle}>Book a Inspection Time</Text>
//         <TouchableOpacity><Ionicons name="help-circle-outline" size={28} color="black" /></TouchableOpacity>
//       </View>

//       <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={{ paddingBottom: 120 }}>
//         <View style={styles.imageContainer}>
//           <Image source={car?.image ? (typeof car.image === 'string' ? { uri: car.image } : car.image) : require("../../assets/images/carimages/car1.jpg")} style={styles.carImage} />
//         </View>

//         <View style={styles.detailsSection}>
//           <Text style={styles.carName}>{car?.title || car?.name || "Car Name"}</Text>
//           <Text style={styles.carPrice}>{car?.price || "₹ 0.00"}</Text>

//           <Text style={styles.sectionTitle}>Select Date</Text>
//           <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.selectorRow}>
//             {availableDates.map((date) => (
//               <TouchableOpacity key={date} style={[styles.pill, selectedDate === date ? styles.btnActive : styles.pillInactive]} onPress={() => setSelectedDate(date)}>
//                 <Text style={[styles.pillText, selectedDate === date ? styles.textWhite : styles.textGray]}>{date}</Text>
//               </TouchableOpacity>
//             ))}
//           </ScrollView>

//           <Text style={styles.sectionTitle}>Choose Time</Text>
//           <View style={styles.gridRow}>
//             {availableTimes.map((time) => (
//               <TouchableOpacity key={time} style={[styles.pillLarge, selectedTime === time ? styles.btnActive : styles.pillInactive]} onPress={() => setSelectedTime(time)}>
//                 <Text style={[styles.pillText, selectedTime === time ? styles.textWhite : styles.textGray]}>{time}</Text>
//               </TouchableOpacity>
//             ))}
//             <TouchableOpacity style={styles.addMoreBtn} onPress={() => setIsTimeModalVisible(true)}>
//               <Ionicons name="add" size={30} color="#9CA3AF" />
//             </TouchableOpacity>
//           </View>
//         </View>
//       </ScrollView>

//       <View style={[styles.footer, { paddingBottom: insets.bottom + 20 }]}>
//         <TouchableOpacity style={styles.confirmBtn} onPress={() => setIsSuccessModalVisible(true)}>
//           <Text style={styles.confirmText}>SUBMIT</Text>
//         </TouchableOpacity>
//       </View>

//       <Modal visible={isSuccessModalVisible} transparent animationType="fade">
//         <View style={styles.modalOverlay}>
//           <View style={styles.modalContent}>
//             <Ionicons name="checkmark-circle" size={80} color={Colors.primary} />
//             <Text style={styles.modalTitle}>Thank You!</Text>
//             <Text style={styles.modalSubTitle}>We will share you the confirmation message soon.</Text>
//             <TouchableOpacity style={styles.okayBtn} onPress={() => {setIsSuccessModalVisible(false); navigation.navigate('BottomNavigator');}}><Text style={styles.okayBtnText}>Done</Text></TouchableOpacity>
//           </View>
//         </View>
//       </Modal>

//       {/* --- ADVANCED TIME PICKER MODAL --- */}
//       <Modal visible={isTimeModalVisible} transparent animationType="slide">
//         <View style={styles.modalOverlay}>
//           <View style={styles.timePickerCard}>
//             <Text style={styles.pickerHeader}>Select Time</Text>
            
//             <View style={styles.pickerContainer}>
//               {/* Hours Column */}
//               <View style={styles.column}>
//                 <Text style={styles.columnLabel}>Hour</Text>
//                 <FlatList
//                   data={hours}
//                   showsVerticalScrollIndicator={false}
//                   keyExtractor={(item) => item}
//                   renderItem={({ item }) => (
//                     <TouchableOpacity onPress={() => setTempHour(item)} style={[styles.timeOption, tempHour === item && styles.selectedOption]}>
//                       <Text style={[styles.optionText, tempHour === item && styles.selectedOptionText]}>{item}</Text>
//                     </TouchableOpacity>
//                   )}
//                 />
//               </View>

//               {/* Minutes Column */}
//               <View style={styles.column}>
//                 <Text style={styles.columnLabel}>Min</Text>
//                 <FlatList
//                   data={minutes}
//                   showsVerticalScrollIndicator={false}
//                   keyExtractor={(item) => item}
//                   renderItem={({ item }) => (
//                     <TouchableOpacity onPress={() => setTempMinute(item)} style={[styles.timeOption, tempMinute === item && styles.selectedOption]}>
//                       <Text style={[styles.optionText, tempMinute === item && styles.selectedOptionText]}>{item}</Text>
//                     </TouchableOpacity>
//                   )}
//                 />
//               </View>

//               {/* AM/PM Column */}
//               <View style={styles.column}>
//                 <Text style={styles.columnLabel}>Period</Text>
//                 {["AM", "PM"].map((p) => (
//                   <TouchableOpacity key={p} onPress={() => setTempPeriod(p)} style={[styles.timeOption, styles.periodBtn, tempPeriod === p && styles.selectedOption]}>
//                     <Text style={[styles.optionText, tempPeriod === p && styles.selectedOptionText]}>{p}</Text>
//                   </TouchableOpacity>
//                 ))}
//               </View>
//             </View>

//             <View style={styles.previewBox}>
//                <Text style={styles.previewText}>Selected: {tempHour}:{tempMinute} {tempPeriod}</Text>
//             </View>

//             <View style={styles.modalBtnRow}>
//                <TouchableOpacity style={styles.cancelBtn} onPress={() => setIsTimeModalVisible(false)}><Text style={styles.cancelLabel}>Cancel</Text></TouchableOpacity>
//                <TouchableOpacity style={styles.addTimeBtn} onPress={saveCustomTime}><Text style={styles.addLabel}>Add Time</Text></TouchableOpacity>
//             </View>
//           </View>
//         </View>
//       </Modal>

//     </SafeAreaView>
//   );
// };

// export default ScheduleDateScreen;

// const styles = StyleSheet.create({
//   safeArea: { flex: 1, backgroundColor: 'white' },
//   header: { flexDirection: "row", justifyContent: "space-between", alignItems: "center", paddingHorizontal: 15, height: 60 },
//   headerTitle: { fontFamily: Fonts.bold, fontSize: 18, color: 'black' },
//   iconBtn: { padding: 5 },
//   imageContainer: { width: "100%", height: 220 },
//   carImage: { width: "100%", height: "100%", resizeMode: "cover" },
//   detailsSection: { paddingHorizontal: 20, marginTop: 20 },
//   carName: { fontFamily: Fonts.bold, fontSize: 24, color: 'black' },
//   carPrice: { fontFamily: Fonts.bold, fontSize: 18, color: Colors.secondary, marginTop: 5 },
//   sectionTitle: { fontFamily: Fonts.bold, fontSize: 16, color: 'black', marginTop: 25, marginBottom: 15 },
//   selectorRow: { flexDirection: "row" },
//   pill: { paddingHorizontal: 25, height: 55, borderRadius: 12, justifyContent: "center", alignItems: "center", marginRight: 12 },
//   pillInactive: { backgroundColor: "#F3F4F6" },
//   btnActive: { backgroundColor: Colors.primary },
//   textWhite: { color: 'white' },
//   textGray: { color: "#9CA3AF" },
//   pillText: { fontFamily: Fonts.bold, fontSize: 15 },
//   gridRow: { flexDirection: "row", flexWrap: "wrap" },
//   pillLarge: { width: "31%", height: 60, borderRadius: 12, justifyContent: "center", alignItems: "center", marginBottom: 10, marginRight: '2%' },
//   addMoreBtn: { width: "31%", height: 60, borderRadius: 12, justifyContent: "center", alignItems: "center", marginBottom: 10, borderWidth: 1, borderStyle: 'dashed', borderColor: '#9CA3AF' },
//   footer: { position: 'absolute', bottom: 0, width: '100%', paddingHorizontal: 20, backgroundColor: 'white', paddingTop: 10 },
//   confirmBtn: { backgroundColor: Colors.secondary, height: 60, borderRadius: 12, justifyContent: "center", alignItems: "center" },
//   confirmText: { fontFamily: Fonts.bold, fontSize: 18, color: 'white' },

//   // Modal Styles
//   modalOverlay: { flex: 1, backgroundColor: 'rgba(0,0,0,0.6)', justifyContent: 'center', alignItems: 'center' },
//   modalContent: { width: '85%', backgroundColor: 'white', borderRadius: 25, padding: 30, alignItems: 'center' },
//   modalTitle: { fontFamily: Fonts.bold, fontSize: 22 },
//   modalSubTitle: { fontFamily: Fonts.medium, fontSize: 16, color: 'gray', textAlign: 'center', marginTop: 10 },
//   okayBtn: { marginTop: 30, backgroundColor: Colors.secondary, paddingVertical: 14, borderRadius: 15, width: '100%', alignItems: 'center' },
//   okayBtnText: { color: 'white', fontFamily: Fonts.bold },

//   // --- Advanced Time Picker Styles (Fixed Padding/Width) ---
//   timePickerCard: { width: '90%', backgroundColor: 'white', borderRadius: 25, padding: 20, height: 480 },
//   pickerHeader: { fontFamily: Fonts.bold, fontSize: 20, textAlign: 'center', marginBottom: 20, color: Colors.primary },
//   pickerContainer: { flexDirection: 'row', flex: 1, justifyContent: 'space-between' },
//   column: { flex: 1, alignItems: 'center' },
//   columnLabel: { fontSize: 12, color: '#9CA3AF', marginBottom: 15, fontFamily: Fonts.bold, textTransform: 'uppercase' },
  
//   // यहाँ बदलाव किया गया है: width और height फिक्स की गई है
//   timeOption: { 
//     height: 45, 
//     width: 45, 
//     justifyContent: 'center', 
//     alignItems: 'center', 
//     borderRadius: 12, 
//     marginBottom: 12 
//   },
//   periodBtn: {
//     width: 60, // AM/PM के लिए थोड़ा चौड़ा
//   },
//   selectedOption: { 
//     backgroundColor: Colors.primary,
//     // शैडो ताकि सेलेक्टेड नंबर साफ़ दिखे
//     elevation: 4,
//     shadowColor: Colors.primary,
//     shadowOffset: { width: 0, height: 2 },
//     shadowOpacity: 0.3,
//     shadowRadius: 3,
//   },
//   optionText: { fontSize: 16, fontFamily: Fonts.medium, color: '#4B5563' },
//   selectedOptionText: { color: 'white', fontFamily: Fonts.bold },

//   previewBox: { padding: 15, backgroundColor: '#F9FAFB', borderRadius: 12, marginTop: 15, alignItems: 'center', borderWidth: 1, borderColor: '#E5E7EB' },
//   previewText: { fontFamily: Fonts.bold, fontSize: 16, color: Colors.primary },
//   modalBtnRow: { flexDirection: 'row', marginTop: 15 },
//   cancelBtn: { flex: 1, padding: 15, alignItems: 'center' },
//   addTimeBtn: { flex: 1.5, backgroundColor: Colors.primary, padding: 15, borderRadius: 12, alignItems: 'center' },
//   cancelLabel: { fontFamily: Fonts.bold, color: '#9CA3AF' },
//   addLabel: { fontFamily: Fonts.bold, color: 'white' },
// });
















// yaha se chhote parts me 

// import React, { useState, useEffect } from "react";
// import { View, Text, Image, TouchableOpacity, ScrollView, Modal } from "react-native";
// import Ionicons from "@react-native-vector-icons/ionicons";
// import { SafeAreaView, useSafeAreaInsets } from "react-native-safe-area-context";
// import { styles } from './ScheduleDateStyles';
// import TimePickerModal from './TimePickerModal';
// import { Colors } from "../../theme/colors";

// const ScheduleDateScreen = ({ navigation, route }: any) => {
//   const { car } = route.params || {};
//   const insets = useSafeAreaInsets();

//   // --- Logic States ---
//   const [selectedDate, setSelectedDate] = useState("");
//   const [selectedTime, setSelectedTime] = useState("11:00 AM");
//   const [availableDates, setAvailableDates] = useState<string[]>([]);
//   const [availableTimes, setAvailableTimes] = useState(["09:00 AM", "11:00 AM", "01:00 PM", "04:00 PM"]);
//   const [location, setLocation] = useState("Hub");
//   const [showSuccess, setShowSuccess] = useState(false);
//   const [showPicker, setShowPicker] = useState(false);

//   // --- 7-Day Date Generator Logic ---
//   useEffect(() => {
//     const dates = [];
//     for (let i = 1; i <= 7; i++) {
//       const d = new Date();
//       d.setDate(d.getDate() + i);
//       dates.push(`${d.getDate().toString().padStart(2, '0')} ${d.toLocaleString('default', { month: 'short' })}`);
//     }
//     setAvailableDates(dates);
//     setSelectedDate(dates[0]);
//   }, []);

//   const addNewTime = (newTime: string) => {
//     if (!availableTimes.includes(newTime)) setAvailableTimes([...availableTimes, newTime]);
//     setSelectedTime(newTime);
//     setShowPicker(false);
//   };

//   return (
//     <SafeAreaView style={styles.safeArea}>
//       {/* Header */}
//       <View style={styles.header}>
//         <TouchableOpacity onPress={() => navigation.goBack()}><Ionicons name="arrow-back" size={28} color="black" /></TouchableOpacity>
//         <Text style={styles.headerTitle}>Book a Inspection Time</Text>
//         <TouchableOpacity><Ionicons name="help-circle-outline" size={28} color="black" /></TouchableOpacity>
//       </View>

//       <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={{ paddingBottom: 120 }}>
//         <Image source={car?.image ? (typeof car.image === 'string' ? { uri: car.image } : car.image) : require("../../assets/images/carimages/car1.jpg")} style={styles.imageContainer} />

//         <View style={styles.detailsSection}>
//           <Text style={styles.carName}>{car?.title || car?.name || "Car Name"}</Text>
//           <Text style={styles.carPrice}>{car?.price || "₹ 0.00"}</Text>

//           {/* Location Selection */}
//           <Text style={styles.sectionTitle}>Choose Location</Text>
//           <View style={styles.buttonRow}>
//             <TouchableOpacity style={[styles.locationBtn, location === "Hub" ? styles.btnActive : styles.btnInactive]} onPress={() => setLocation("Hub")}>
//               <Text style={[styles.btnText, location === "Hub" ? styles.textWhite : styles.textBlack]}>At Our Hub</Text>
//             </TouchableOpacity>
//             <TouchableOpacity style={[styles.locationBtn, location === "Home" ? styles.btnYellow : styles.btnInactive]} onPress={() => setLocation("Home")}>
//               <Text style={[styles.btnText, location === "Home" ? styles.textWhite : styles.textBlack]}>Your Home</Text>
//             </TouchableOpacity>
//           </View>

//           {/* Date Selection */}
//           <Text style={styles.sectionTitle}>Select Date</Text>
//           <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.selectorRow}>
//             {availableDates.map(date => (
//               <TouchableOpacity key={date} style={[styles.pill, selectedDate === date ? styles.btnActive : styles.pillInactive]} onPress={() => setSelectedDate(date)}>
//                 <Text style={[styles.pillText, selectedDate === date ? styles.textWhite : styles.textGray]}>{date}</Text>
//               </TouchableOpacity>
//             ))}
//           </ScrollView>

//           {/* Time Selection */}
//           <Text style={styles.sectionTitle}>Choose Time</Text>
//           <View style={styles.gridRow}>
//             {availableTimes.map(time => (
//               <TouchableOpacity key={time} style={[styles.pillLarge, selectedTime === time ? styles.btnActive : styles.pillInactive]} onPress={() => setSelectedTime(time)}>
//                 <Text style={[styles.pillText, selectedTime === time ? styles.textWhite : styles.textGray]}>{time}</Text>
//               </TouchableOpacity>
//             ))}
//             <TouchableOpacity style={styles.addMoreBtn} onPress={() => setShowPicker(true)}>
//               <Ionicons name="add" size={30} color="#9CA3AF" />
//             </TouchableOpacity>
//           </View>
//         </View>
//       </ScrollView>

//       {/* Footer */}
//       <View style={[styles.footer, { paddingBottom: insets.bottom + 20 }]}>
//         <TouchableOpacity style={styles.confirmBtn} onPress={() => setShowSuccess(true)}>
//           <Text style={styles.confirmText}>SUBMIT</Text>
//         </TouchableOpacity>
//       </View>

//       {/* Modals */}
//       <TimePickerModal visible={showPicker} onClose={() => setShowPicker(false)} onSave={addNewTime} />
      
//       <Modal visible={showSuccess} transparent animationType="fade">
//         <View style={styles.modalOverlay}>
//           <View style={styles.modalContent}>
//             <Ionicons name="checkmark-circle" size={80} color={Colors.primary} />
//             <Text style={styles.modalTitle}>Thank You!</Text>
//             <Text style={styles.modalSubTitle}>We will share you the confirmation message soon.</Text>
//             <TouchableOpacity style={styles.okayBtn} onPress={() => {setShowSuccess(false); navigation.navigate('BottomNavigator');}}><Text style={styles.okayBtnText}>Done</Text></TouchableOpacity>
//           </View>
//         </View>
//       </Modal>
//     </SafeAreaView>
//   );
// };

// export default ScheduleDateScreen;











// import React, { useState, useEffect } from "react";
// import { View, Text, Image, TouchableOpacity, ScrollView, Modal, TextInput } from "react-native";
// import Ionicons from "@react-native-vector-icons/ionicons";
// import { SafeAreaView, useSafeAreaInsets } from "react-native-safe-area-context";
// import { styles } from './ScheduleDateStyles';
// import TimePickerModal from './TimePickerModal';
// import { Colors } from "../../theme/colors";

// const ScheduleDateScreen = ({ navigation, route }: any) => {
//   const { car } = route.params || {};
//   const insets = useSafeAreaInsets();

//   // --- Logic States ---
//   const [selectedDate, setSelectedDate] = useState("");
//   const [selectedTime, setSelectedTime] = useState("11:00 AM");
//   const [availableDates, setAvailableDates] = useState<string[]>([]);
//   const [availableTimes, setAvailableTimes] = useState(["09:00 AM", "11:00 AM", "01:00 PM", "04:00 PM"]);
//   const [location, setLocation] = useState("Hub");
//   const [address, setAddress] = useState(""); 
//   const [showSuccess, setShowSuccess] = useState(false);
//   const [showPicker, setShowPicker] = useState(false);

//   // --- 1. आने वाले 7 दिनों की तारीखें जेनरेट करना ---
//   useEffect(() => {
//     const dates = [];
//     for (let i = 1; i <= 7; i++) {
//       const d = new Date();
//       d.setDate(d.getDate() + i);
//       dates.push(`${d.getDate().toString().padStart(2, '0')} ${d.toLocaleString('default', { month: 'short' })}`);
//     }
//     setAvailableDates(dates);
//     setSelectedDate(dates[0]);
//   }, []);

//   // --- 2. नया टाइम ऐड करने का फंक्शन ---
//   const addNewTime = (newTime: string) => {
//     if (!availableTimes.includes(newTime)) setAvailableTimes([...availableTimes, newTime]);
//     setSelectedTime(newTime);
//     setShowPicker(false);
//   };

//   // --- 3. फिक्स: handleDone फंक्शन (यही मिसिंग था) ---
//   const handleDone = () => {
//     setShowSuccess(false);
//     navigation.navigate('BottomNavigator'); // सुनिश्चित करें कि आपका Tab Navigator इसी नाम से है
//   };

//   return (
//     <SafeAreaView style={styles.safeArea}>
//       {/* Header */}
//       <View style={styles.header}>
//         <TouchableOpacity onPress={() => navigation.goBack()}>
//           <Ionicons name="arrow-back" size={28} color="black" />
//         </TouchableOpacity>
//         <Text style={styles.headerTitle}>Book a Inspection Time</Text>
//         <TouchableOpacity>
//           {/* <Ionicons name="help-circle-outline" size={28} color="black" /> */}
//         </TouchableOpacity>
//       </View>

//       <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={{ paddingBottom: 120 }}>
//         {/* Car Image */}
//         <Image 
//           source={car?.image ? (typeof car.image === 'string' ? { uri: car.image } : car.image) : require("../../assets/images/carimages/car1.jpg")} 
//           style={styles.imageContainer} 
//         />

//         <View style={styles.detailsSection}>
//           <Text style={styles.carName}>{car?.title || car?.name || "Car Name"}</Text>
//           <Text style={styles.carPrice}>{car?.price || "₹ 0.00"}</Text>

//           {/* Choose Location */}
//           <Text style={styles.sectionTitle}>Choose Location</Text>
//           <View style={styles.buttonRow}>
//             <TouchableOpacity 
//               style={[styles.locationBtn, location === "Hub" ? styles.btnActive : styles.btnInactive]} 
//               onPress={() => setLocation("Hub")}
//             >
//               <Text style={[styles.btnText, location === "Hub" ? styles.textWhite : styles.textBlack]}>At Our Hub</Text>
//             </TouchableOpacity>
//             <TouchableOpacity 
//               style={[styles.locationBtn, location === "Home" ? styles.btnYellow : styles.btnInactive]} 
//               onPress={() => setLocation("Home")}
//             >
//               <Text style={[styles.btnText, location === "Home" ? styles.textWhite : styles.textBlack]}>Your Home</Text>
//             </TouchableOpacity>
//           </View>

//           {/* Conditional Address Input */}
//           {location === "Home" && (
//             <View style={styles.inputWrapper}>
//               <TextInput
//                 placeholder="Enter your complete home address"
//                 placeholderTextColor="#9CA3AF"
//                 style={styles.addressInput}
//                 multiline={true}
//                 value={address}
//                 onChangeText={setAddress}
//               />
//             </View>
//           )}

//           {/* Date Selection */}
//           <Text style={styles.sectionTitle}>Select Date</Text>
//           <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.selectorRow}>
//             {availableDates.map(date => (
//               <TouchableOpacity 
//                 key={date} 
//                 style={[styles.pill, selectedDate === date ? styles.btnActive : styles.pillInactive]} 
//                 onPress={() => setSelectedDate(date)}
//               >
//                 <Text style={[styles.pillText, selectedDate === date ? styles.textWhite : styles.textGray]}>{date}</Text>
//               </TouchableOpacity>
//             ))}
//           </ScrollView>

//           {/* Time Selection */}
//           <Text style={styles.sectionTitle}>Choose Time</Text>
//           <View style={styles.gridRow}>
//             {availableTimes.map(time => (
//               <TouchableOpacity 
//                 key={time} 
//                 style={[styles.pillLarge, selectedTime === time ? styles.btnActive : styles.pillInactive]} 
//                 onPress={() => setSelectedTime(time)}
//               >
//                 <Text style={[styles.pillText, selectedTime === time ? styles.textWhite : styles.textGray]}>{time}</Text>
//               </TouchableOpacity>
//             ))}
//             <TouchableOpacity style={styles.addMoreBtn} onPress={() => setShowPicker(true)}>
//               <Ionicons name="add" size={30} color="#9CA3AF" />
//             </TouchableOpacity>
//           </View>
//         </View>
//       </ScrollView>

//       {/* Footer */}
//       <View style={[styles.footer, { paddingBottom: insets.bottom + 20 }]}>
//         <TouchableOpacity style={styles.confirmBtn} onPress={() => setShowSuccess(true)}>
//           <Text style={styles.confirmText}>SUBMIT</Text>
//         </TouchableOpacity>
//       </View>

//       {/* Modals */}
//       <TimePickerModal visible={showPicker} onClose={() => setShowPicker(false)} onSave={addNewTime} />
      
//       <Modal visible={showSuccess} transparent animationType="fade">
//         <View style={styles.modalOverlay}>
//           <View style={styles.modalContent}>
//             <Ionicons name="checkmark-circle" size={80} color={Colors.primary} />
//             <Text style={styles.modalTitle}>Thank You!</Text>
//             <Text style={styles.modalSubTitle}>We will share you the confirmation message soon.</Text>
            
//             {/* यहाँ handleDone इस्तेमाल हो रहा है */}
//             <TouchableOpacity style={styles.okayBtn} onPress={handleDone}>
//               <Text style={styles.okayBtnText}>Done</Text>
//             </TouchableOpacity>
//           </View>
//         </View>
//       </Modal>
//     </SafeAreaView>
//   );
// };

// export default ScheduleDateScreen;



















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