// import { StyleSheet, Text, View } from 'react-native'
// import React from 'react'

// const ConfirmScheduleDateScreen = () => {
//   return (
//     <View>
//       <Text>ConfirmScheduleDateScreen</Text>
//     </View>
//   )
// }

// export default ConfirmScheduleDateScreen

// const styles = StyleSheet.create({})















// import React from "react";
// import {
//   View,
//   Text,
//   StyleSheet,
//   Image,
//   TouchableOpacity,
//   ScrollView,
// } from "react-native";
// import Ionicons from "@react-native-vector-icons/ionicons";
// import { Colors } from "../../theme/colors";
// import { Fonts } from "../../theme/fonts";
// import { SafeAreaView } from "react-native-safe-area-context";
// import { useSafeAreaInsets } from "react-native-safe-area-context";

// const ConfirmScheduleDateScreen = ({ navigation, route }: any) => {
//   // पिछले स्क्रीन से डेटा प्राप्त करें
//   const { car, date, time } = route.params || {};
//   const insets = useSafeAreaInsets();

//   return (
//     <SafeAreaView style={styles.safeArea}>
//       {/* Header */}
//       <View style={styles.header}>
//         <TouchableOpacity onPress={() => navigation.goBack()}>
//           <Ionicons name="arrow-back" size={28} color={Colors.black} />
//         </TouchableOpacity>
//         <Text style={styles.headerTitle}>Summary</Text>
//         <TouchableOpacity>
//           <Ionicons name="help-circle-outline" size={28} color={Colors.black} />
//         </TouchableOpacity>
//       </View>

//       <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={styles.content}>
        
//         {/* Car Image */}
//         <View style={styles.imageContainer}>
//           <Image 
//             source={car?.image || require("../../assets/images/carimages/car1.jpg")} 
//             style={styles.carImage} 
//           />
//         </View>

//         {/* Car Title & Share */}
//         <View style={styles.infoContainer}>
//           <View style={styles.titleRow}>
//             <View>
//               <Text style={styles.carName}>{car?.name || "Maruti Suzuki Ertiga"}</Text>
//               <Text style={styles.carPrice}>Est Rs.8.64 - 13.08 Lakh*</Text>
//               <Text style={styles.exShowroom}>
//                 Ex-showroom Price in <Text style={styles.boldText}>New Delhi </Text>
//                 {/* <Text style={styles.editText}>Edit</Text> */}
//               </Text>
//             </View>
//             <TouchableOpacity>
//               <Ionicons name="share-social-outline" size={24} color={Colors.black} />
//             </TouchableOpacity>
//           </View>

//           {/* Success Badge */}
//           <View style={styles.successBadgeRow}>
//              <View style={styles.greenCircle}>
//                 <Ionicons name="checkmark-circle" size={40} color={Colors.success || "#22C55E"} />
//              </View>
//              <Text style={styles.successText}>Free Inspection Booked</Text>
//           </View>

//           {/* Details Section */}
//           <View style={styles.detailsList}>
            
//             <View style={styles.detailItem}>
//               <Ionicons name="location" size={22} color="#EF4444" />
//               <Text style={styles.detailText}>
//                 394, Jail Rd, Nangal Village, Delhi Cantonment, New Delhi, Delhi 110010
//               </Text>
//             </View>

//             <View style={styles.detailItem}>
//               <Ionicons name="calendar" size={22} color={Colors.black} />
//               <Text style={styles.detailText}>
//                 Date - <Text style={styles.boldText}>{date || "08 Sep 2023"}</Text>
//               </Text>
//             </View>

//             <View style={styles.detailItem}>
//               <Ionicons name="time" size={22} color={Colors.black} />
//               <Text style={styles.detailText}>
//                 Time - <Text style={styles.boldText}>{time || "11 AM"}</Text>
//               </Text>
//             </View>

//           </View>
//         </View>
//       </ScrollView>

//       {/* Footer Buttons */}
//       {/* <View style={styles.footer}> */}
//       <View style={[styles.footer, { paddingBottom: insets.bottom + 10 }]}>
//         <TouchableOpacity 
//           style={styles.rescheduleBtn}
//           onPress={() => navigation.navigate('ScheduleDateScreen')}
//         >
//           <Text style={styles.rescheduleText}>REQUEST FOR RESCHEDULE</Text>
//         </TouchableOpacity>

//         <TouchableOpacity 
//           style={styles.doneBtn}
//           onPress={() => navigation.navigate('BottomNavigator')}
//         >
//           <Text style={styles.doneText}>DONE</Text>
//         </TouchableOpacity>
//       </View>
//     </SafeAreaView>
//   );
// };

// export default ConfirmScheduleDateScreen;

// const styles = StyleSheet.create({
//   safeArea: { flex: 1, backgroundColor: Colors.white },
//   header: {
//     flexDirection: "row",
//     justifyContent: "space-between",
//     alignItems: "center",
//     paddingHorizontal: 15,
//     paddingVertical: 10,
//   },
//   headerTitle: { fontFamily: Fonts.bold, fontSize: 18, color: Colors.black },
//   content: { paddingBottom: 120 },
//   imageContainer: { 
//     width: "100%", 
//     height: 200, 
//     justifyContent: 'center', 
//     alignItems: 'center',
//     marginTop: 10 
//   },
//   carImage: { width: "85%", height: "100%", resizeMode: "contain" },
  
//   infoContainer: { paddingHorizontal: 20, marginTop: 20 },
//   titleRow: { flexDirection: "row", justifyContent: "space-between", alignItems: "flex-start" },
//   carName: { fontFamily: Fonts.bold, fontSize: 22, color: Colors.black },
//   carPrice: { fontFamily: Fonts.bold, fontSize: 18, color: Colors.black, marginTop: 4 },
//   exShowroom: { fontSize: 12, color: "#999", marginTop: 2 },
//   boldText: { fontWeight: "bold", color: Colors.black },
//   editText: { color: "#3498db", fontSize: 10 },

//   successBadgeRow: { 
//     flexDirection: "row", 
//     alignItems: "center", 
//     marginTop: 30,
//     backgroundColor: Colors.white 
//   },
//   greenCircle: { marginRight: 15 },
//   successText: { fontFamily: Fonts.bold, fontSize: 18, color: Colors.black },

//   detailsList: { marginTop: 30 },
//   detailItem: { flexDirection: "row", alignItems: "flex-start", marginBottom: 20 },
//   detailText: { 
//     marginLeft: 15, 
//     fontSize: 14, 
//     color: Colors.black, 
//     fontFamily: Fonts.medium,
//     lineHeight: 20,
//     flex: 1 
//   },

//   footer: { 
//     position: "absolute", 
//     bottom: 0, 
//     flexDirection: "row", 
//     width: "100%", 
//     padding: 15, 
//     backgroundColor: Colors.white,
//     justifyContent: 'space-between',
//     borderTopWidth: 1,
//     borderTopColor: '#f0f0f0',
//   },
//   rescheduleBtn: { 
//     backgroundColor: "#DEDEDE", 
//     flex: 1, 
//     height: 55, 
//     borderRadius: 8, 
//     justifyContent: "center", 
//     alignItems: "center",
//     marginRight: 10
//   },
//   rescheduleText: { fontFamily: Fonts.bold, fontSize: 11, color: Colors.black, textAlign: 'center' },
  
//   doneBtn: { 
//     backgroundColor: Colors.secondary, 
//     flex: 1, 
//     height: 55, 
//     borderRadius: 8, 
//     justifyContent: "center", 
//     alignItems: "center" 
//   },
//   doneText: { fontFamily: Fonts.bold, fontSize: 16, color: Colors.white },
// });


















// import React from "react";
// import { View, Text, StyleSheet, Image, TouchableOpacity, ScrollView } from "react-native";
// import Ionicons from "@react-native-vector-icons/ionicons";
// import { Colors } from "../../theme/colors";
// import { Fonts } from "../../theme/fonts";
// import { SafeAreaView, useSafeAreaInsets } from "react-native-safe-area-context";

// const ConfirmScheduleDateScreen = ({ navigation, route }: any) => {
//   // पिछले स्क्रीन से डेटा प्राप्त करें
//   const { car, date, time } = route.params || {};
//   const insets = useSafeAreaInsets();

//   return (
//     <SafeAreaView style={styles.safeArea}>
//       {/* Header */}
//       <View style={styles.header}>
//         <TouchableOpacity onPress={() => navigation.goBack()} style={styles.iconBtn}>
//           <Ionicons name="arrow-back" size={28} color={Colors.black} />
//         </TouchableOpacity>
//         <Text style={styles.headerTitle}>Summary</Text>
//         <TouchableOpacity style={styles.iconBtn}>
//           <Ionicons name="help-circle-outline" size={28} color={Colors.black} />
//         </TouchableOpacity>
//       </View>

//       <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={styles.content}>
//         {/* Car Image */}
//         <View style={styles.imageContainer}>
//           <Image 
//             source={car?.image ? (typeof car.image === 'string' ? { uri: car.image } : car.image) : require("../../assets/images/carimages/car1.jpg")} 
//             style={styles.carImage} 
//           />
//         </View>

//         {/* Car Info */}
//         <View style={styles.infoContainer}>
//           <View style={styles.titleRow}>
//             <View style={{flex: 1}}>
//               <Text style={styles.carName}>{car?.title || car?.name || "Car Name"}</Text>
//               <Text style={styles.carPrice}>{car?.price || "₹ 0.00"}</Text>
//               <Text style={styles.exShowroom}>
//                 Ex-showroom Price in <Text style={styles.boldText}>New Delhi </Text>
//               </Text>
//             </View>
//             <TouchableOpacity style={styles.shareBtn}>
//               <Ionicons name="share-social-outline" size={24} color={Colors.black} />
//             </TouchableOpacity>
//           </View>

//           {/* Success Badge */}
//           <View style={styles.successBadgeRow}>
//              <View style={styles.greenCircle}>
//                 <Ionicons name="checkmark-circle" size={40} color="#22C55E" />
//              </View>
//              <Text style={styles.successText}>Free Inspection Booked</Text>
//           </View>

//           {/* Details List */}
//           <View style={styles.detailsList}>
//             <View style={styles.detailItem}>
//               <Ionicons name="location" size={22} color="#EF4444" />
//               <Text style={styles.detailText}>
//                 394, Jail Rd, Nangal Village, Delhi Cantonment, New Delhi, Delhi 110010
//               </Text>
//             </View>

//             <View style={styles.detailItem}>
//               <Ionicons name="calendar" size={22} color={Colors.black} />
//               <Text style={styles.detailText}>
//                 Date - <Text style={styles.boldText}>{date || "Select Date"}</Text>
//               </Text>
//             </View>

//             <View style={styles.detailItem}>
//               <Ionicons name="time" size={22} color={Colors.black} />
//               <Text style={styles.detailText}>
//                 Time - <Text style={styles.boldText}>{time || "Select Time"}</Text>
//               </Text>
//             </View>
//           </View>
//         </View>
//       </ScrollView>

//       {/* Footer Buttons */}
//       <View style={[styles.footer, { paddingBottom: insets.bottom + 15 }]}>
//         <TouchableOpacity 
//           style={styles.rescheduleBtn}
//           onPress={() => navigation.navigate('ScheduleDateScreen', { car })} // Reschedule पर वापस बुक टाइम स्क्रीन पर
//         >
//           <Text style={styles.rescheduleText}>REQUEST FOR RESCHEDULE</Text>
//         </TouchableOpacity>

//         <TouchableOpacity 
//           style={styles.doneBtn}
//           onPress={() => navigation.navigate('BottomNavigator')} // 'HomeScreen' या 'MainApp' जो भी आपके रूट का नाम है
//         >
//           <Text style={styles.doneText}>DONE</Text>
//         </TouchableOpacity>
//       </View>
//     </SafeAreaView>
//   );
// };

// export default ConfirmScheduleDateScreen;

// const styles = StyleSheet.create({
//   safeArea: { flex: 1, backgroundColor: Colors.white },
//   header: { flexDirection: "row", justifyContent: "space-between", alignItems: "center", paddingHorizontal: 15, height: 60 },
//   headerTitle: { fontFamily: Fonts.bold, fontSize: 18, color: Colors.black },
//   iconBtn: { padding: 5 },
//   content: { paddingBottom: 150 },
//   imageContainer: { width: "100%", height: 200, justifyContent: 'center', alignItems: 'center', marginTop: 10 },
//   carImage: { width: "85%", height: "100%", resizeMode: "contain" },
//   infoContainer: { paddingHorizontal: 20, marginTop: 20 },
//   titleRow: { flexDirection: "row", justifyContent: "space-between", alignItems: "flex-start" },
//   carName: { fontFamily: Fonts.bold, fontSize: 22, color: Colors.primary },
//   carPrice: { fontFamily: Fonts.semiBold, fontSize: 18, color: Colors.black, marginTop: 4 },
//   exShowroom: { fontSize: 12, color: "#999", marginTop: 4 },
//   boldText: { fontWeight: "bold", color: Colors.black },
//   shareBtn: { backgroundColor: '#F3F4F6', padding: 8, borderRadius: 20 },
//   successBadgeRow: { flexDirection: "row", alignItems: "center", marginTop: 30 },
//   greenCircle: { marginRight: 15 },
//   successText: { fontFamily: Fonts.bold, fontSize: 18, color: Colors.black },
//   detailsList: { marginTop: 30 },
//   detailItem: { flexDirection: "row", alignItems: "flex-start", marginBottom: 20 },
//   detailText: { marginLeft: 15, fontSize: 14, color: Colors.black, fontFamily: Fonts.medium, lineHeight: 20, flex: 1 },
//   footer: { position: "absolute", bottom: 0, flexDirection: "row", width: "100%", padding: 20, backgroundColor: 'white', justifyContent: 'space-between', borderTopWidth: 1, borderTopColor: '#f0f0f0', elevation: 10 },
//   rescheduleBtn: { backgroundColor: "#F3F4F6", flex: 1, height: 55, borderRadius: 12, justifyContent: "center", alignItems: "center", marginRight: 10 },
//   rescheduleText: { fontFamily: Fonts.bold, fontSize: 11, color: '#4B5563', textAlign: 'center' },
//   doneBtn: { backgroundColor: Colors.primary, flex: 1, height: 55, borderRadius: 12, justifyContent: "center", alignItems: "center" },
//   doneText: { fontFamily: Fonts.bold, fontSize: 16, color: Colors.white },
// });















// import React from "react";
// import { View, Text, Image, TouchableOpacity, ScrollView, ActivityIndicator } from "react-native";
// import Ionicons from "@react-native-vector-icons/ionicons";
// import { SafeAreaView, useSafeAreaInsets } from "react-native-safe-area-context";
// import { styles } from "./ConfirmScheduleStyles";
// import { useConfirmScheduleLogic } from "./useConfirmScheduleLogic";
// import { Colors } from "../../theme/colors";

// const ConfirmScheduleDateScreen = ({ navigation, route }: any) => {
//   // डेटा रिसीव करें (ad object से)
//   const { car } = route.params || {};
//   const insets = useSafeAreaInsets();
  
//   const { loading, handleAcceptSchedule } = useConfirmScheduleLogic(navigation, car);

//   return (
//     <SafeAreaView style={styles.safeArea}>
//       <View style={styles.header}>
//         <TouchableOpacity onPress={() => navigation.goBack()} style={styles.iconBtn}>
//           <Ionicons name="arrow-back" size={28} color={Colors.black} />
//         </TouchableOpacity>
//         <Text style={styles.headerTitle}>Summary</Text>
//         <TouchableOpacity style={styles.iconBtn}>
//           <Ionicons name="help-circle-outline" size={28} color={Colors.black} />
//         </TouchableOpacity>
//       </View>

//       <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={styles.content}>
//         {/* Car Image (images[0]) */}
//         <View style={styles.imageContainer}>
//           <Image 
//             source={car?.images && car.images.length > 0 ? { uri: car.images[0] } : require("../../assets/images/carimages/car1.jpg")} 
//             style={styles.carImage} 
//           />
//         </View>

//         <View style={styles.infoContainer}>
//           <View style={styles.titleRow}>
//             <View style={{flex: 1}}>
//               <Text style={styles.carName}>{car?.model || "Car Model"}</Text>
//               <Text style={styles.carPrice}>₹ {car?.expectedPrice?.toLocaleString()}</Text>
//               <Text style={styles.exShowroom}>
//                 Reg Number: <Text style={styles.boldText}>{car?.registrationNumber}</Text>
//               </Text>
//             </View>
//             <TouchableOpacity style={styles.shareBtn}>
//               <Ionicons name="share-social-outline" size={24} color={Colors.black} />
//             </TouchableOpacity>
//           </View>

//           <View style={styles.successBadgeRow}>
//              <View style={styles.greenCircle}>
//                 <Ionicons name="checkmark-circle" size={40} color="#22C55E" />
//              </View>
//              <Text style={styles.successText}>Inspection Scheduled</Text>
//           </View>

//           <View style={styles.detailsList}>
//             <View style={styles.detailItem}>
//               <Ionicons name="location" size={22} color="#EF4444" />
//               <Text style={styles.detailText}>
//                 {car?.address}, {car?.city?.name}
//               </Text>
//             </View>

//             <View style={styles.detailItem}>
//               <Ionicons name="calendar" size={22} color={Colors.black} />
//               <Text style={styles.detailText}>
//                 Date - <Text style={styles.boldText}>{car?.scheduledDate || "Not Set"}</Text>
//               </Text>
//             </View>

//             <View style={styles.detailItem}>
//               <Ionicons name="time" size={22} color={Colors.black} />
//               <Text style={styles.detailText}>
//                 Time - <Text style={styles.boldText}>{car?.scheduledTime || "Not Set"}</Text>
//               </Text>
//             </View>
//           </View>
//         </View>
//       </ScrollView>

//       {/* Footer Buttons */}
//       <View style={[styles.footer, { paddingBottom: insets.bottom + 15 }]}>
//         <TouchableOpacity 
//           style={styles.rescheduleBtn}
//           onPress={() => navigation.navigate('ScheduleDateScreen', { car })}
//         >
//           <Text style={styles.rescheduleText}>REQUEST FOR RESCHEDULE</Text>
//         </TouchableOpacity>

//         <TouchableOpacity 
//           style={styles.doneBtn}
//           onPress={handleAcceptSchedule} // यहाँ API कॉल होगी
//           disabled={loading}
//         >
//           {loading ? (
//             <ActivityIndicator color="white" />
//           ) : (
//             <Text style={styles.doneText}>DONE</Text>
//           )}
//         </TouchableOpacity>
//       </View>
//     </SafeAreaView>
//   );
// };

// export default ConfirmScheduleDateScreen;













import React from "react";
import { View, Text, Image, TouchableOpacity, ScrollView, ActivityIndicator } from "react-native";
import Ionicons from "@react-native-vector-icons/ionicons";
import { SafeAreaView, useSafeAreaInsets } from "react-native-safe-area-context";
import { styles } from "./ConfirmScheduleStyles";
import { useConfirmScheduleLogic } from "./useConfirmScheduleLogic";
import { Colors } from "../../theme/colors";
import { formatDate, formatTime } from "../../utils/dateHelpers";

const ConfirmScheduleDateScreen = ({ navigation, route }: any) => {
  const { car } = route.params || {};
  const insets = useSafeAreaInsets();
  
  const { loading, handleAcceptSchedule } = useConfirmScheduleLogic(navigation, car);

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()} style={styles.iconBtn}>
          <Ionicons name="arrow-back" size={28} color={Colors.black} />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Summary</Text>
        <TouchableOpacity style={styles.iconBtn}>
          <Ionicons name="help-circle-outline" size={28} color={Colors.black} />
        </TouchableOpacity>
      </View>

      <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={styles.content}>
        <View style={styles.imageContainer}>
          <Image 
            source={car?.images && car.images.length > 0 ? { uri: car.images[0] } : require("../../assets/images/carimages/car1.jpg")} 
            style={styles.carImage} 
          />
        </View>

        <View style={styles.infoContainer}>
          <View style={styles.titleRow}>
            <View style={{flex: 1}}>
              <Text style={styles.carName}>{typeof car?.model === 'object' ? car.model.name : car?.model || "Car Name"}</Text>
              <Text style={styles.carPrice}>₹ {car?.expectedPrice?.toLocaleString()}</Text>
              <Text style={styles.exShowroom}>
                Reg Number: <Text style={styles.boldText}>{car?.registrationNumber}</Text>
              </Text>
            </View>
            <TouchableOpacity style={styles.shareBtn}>
              <Ionicons name="share-social-outline" size={24} color={Colors.black} />
            </TouchableOpacity>
          </View>

          <View style={styles.successBadgeRow}>
             <View style={styles.greenCircle}>
                <Ionicons name="checkmark-circle" size={40} color="#22C55E" />
             </View>
             <Text style={styles.successText}>Inspection Scheduled</Text>
          </View>

          <View style={styles.detailsList}>
            <View style={styles.detailItem}>
              <Ionicons name="location" size={22} color="#EF4444" />
              <Text style={styles.detailText}>
                {/* {car?.address}, {car?.city?.name || car?.city} */}
                {car?.address}, {car?.city?.name || car?.city || "N/A"}
              </Text>
            </View>

            <View style={styles.detailItem}>
              <Ionicons name="calendar" size={22} color={Colors.black} />
              <Text style={styles.detailText}>
                {/* --- फॉर्मेट की गई डेट यहाँ दिखेगी --- */}
                Date - <Text style={styles.boldText}>{formatDate(car?.scheduledDate)}</Text>
              </Text>
            </View>

            <View style={styles.detailItem}>
              <Ionicons name="time" size={22} color={Colors.black} />
              <Text style={styles.detailText}>
                {/* --- फॉर्मेट किया गया टाइम यहाँ दिखेगी --- */}
                Time - <Text style={styles.boldText}>{formatTime(car?.scheduledTime)}</Text>
              </Text>
            </View>
          </View>
        </View>
      </ScrollView>

      {/* Footer Buttons */}
      <View style={[styles.footer, { paddingBottom: insets.bottom + 15 }]}>
        <TouchableOpacity 
          style={styles.rescheduleBtn}
          onPress={() => navigation.navigate('ScheduleDateScreen', { car })}
        >
          <Text style={styles.rescheduleText}>REQUEST FOR RESCHEDULE</Text>
        </TouchableOpacity>

        <TouchableOpacity 
          style={styles.doneBtn}
          onPress={handleAcceptSchedule}
          disabled={loading}
        >
          {loading ? (
            <ActivityIndicator color="white" />
          ) : (
            <Text style={styles.doneText}>DONE</Text>
          )}
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default ConfirmScheduleDateScreen;