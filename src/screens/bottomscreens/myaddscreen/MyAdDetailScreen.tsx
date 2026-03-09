// import React from "react";
// import { View, Text, StyleSheet, ScrollView, Image, TouchableOpacity } from "react-native";
// import { SafeAreaView } from "react-native-safe-area-context";
// import Ionicons from "@react-native-vector-icons/ionicons";
// import { Colors } from "../../../theme/colors";
// import { Fonts } from "../../../theme/fonts";

// const MyAdDetailScreen = ({ route, navigation }: any) => {
//   const { ad } = route.params;

//   return (
//     <SafeAreaView style={styles.container}>
//       {/* Header */}
//       <View style={styles.header}>
//         <TouchableOpacity onPress={() => navigation.goBack()}>
//           <Ionicons name="arrow-back" size={28} color="black" />
//         </TouchableOpacity>
//         <Text style={styles.headerTitle}>Ad Details</Text>
//         <TouchableOpacity><Ionicons name="trash-outline" size={24} color="red" /></TouchableOpacity>
//       </View>

//       <ScrollView showsVerticalScrollIndicator={false}>
//         {/* Main Image */}
//         <Image source={ad.image ? { uri: ad.image } : require('../../../assets/images/carimages/car1.jpg')} style={styles.mainImg} />

//         <View style={styles.content}>
//           <Text style={styles.title}>{ad.title}</Text>
//           <Text style={styles.price}>{ad.price}</Text>

//           {/* --- Status Tracker (Professional Look) --- */}
//           <View style={styles.statusCard}>
//              <Text style={styles.sectionTitle}>Current Status</Text>
//              <View style={styles.statusRow}>
//                 <Ionicons name="time-outline" size={20} color={Colors.secondary} />
//                 <Text style={styles.statusText}>
//                    {ad.status === 'waiting_inspection' ? "Your car is waiting for inspection by our expert." : "Status Updated"}
//                 </Text>
//              </View>
//           </View>

//           {/* --- Technical Details --- */}
//           <Text style={styles.sectionTitle}>Car Overview</Text>
//           <View style={styles.grid}>
//              <DetailItem label="Brand" value={ad.details?.brand || "N/A"} />
//              <DetailItem label="Model" value={ad.details?.model || "N/A"} />
//              <DetailItem label="Fuel" value={ad.details?.fuel || "N/A"} />
//              <DetailItem label="KM Driven" value={ad.details?.kms || "0"} />
//              <DetailItem label="Transmission" value={ad.details?.transmission || "Manual"} />
//              <DetailItem label="Location" value={ad.details?.location || "Indore"} />
//           </View>

//           {/* --- Features --- */}
//           <Text style={styles.sectionTitle}>Features Added</Text>
//           <View style={styles.featureRow}>
//              {ad.details?.features?.map((f: string, i: number) => (
//                <View key={i} style={styles.featureBadge}><Text style={styles.featureText}>{f}</Text></View>
//              ))}
//           </View>
//         </View>
//       </ScrollView>
//     </SafeAreaView>
//   );
// };

// const DetailItem = ({ label, value }: any) => (
//   <View style={styles.gridItem}>
//     <Text style={styles.itemLabel}>{label}</Text>
//     <Text style={styles.itemValue}>{value}</Text>
//   </View>
// );

// export default MyAdDetailScreen;

// const styles = StyleSheet.create({
//   container: { flex: 1, backgroundColor: 'white' },
//   header: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', padding: 15 },
//   headerTitle: { fontFamily: Fonts.bold, fontSize: 18, color: 'black' },
//   mainImg: { width: '100%', height: 250, resizeMode: 'cover' },
//   content: { padding: 20 },
//   title: { fontFamily: Fonts.bold, fontSize: 24, color: 'black' },
//   price: { fontFamily: Fonts.bold, fontSize: 20, color: Colors.secondary, marginTop: 5 },
//   statusCard: { backgroundColor: '#F9FAFB', padding: 15, borderRadius: 12, marginVertical: 20, borderWidth: 1, borderColor: '#E5E7EB' },
//   sectionTitle: { fontFamily: Fonts.bold, fontSize: 16, color: 'black', marginBottom: 10 },
//   statusRow: { flexDirection: 'row', alignItems: 'center' },
//   statusText: { marginLeft: 10, fontFamily: Fonts.medium, fontSize: 13, color: '#4B5563' },
//   grid: { flexDirection: 'row', flexWrap: 'wrap', marginTop: 10 },
//   gridItem: { width: '50%', marginBottom: 15 },
//   itemLabel: { fontSize: 12, color: 'gray', fontFamily: Fonts.regular },
//   itemValue: { fontSize: 14, color: 'black', fontFamily: Fonts.semiBold, marginTop: 2 },
//   featureRow: { flexDirection: 'row', flexWrap: 'wrap', marginTop: 5 },
//   featureBadge: { backgroundColor: '#F3F4F6', paddingHorizontal: 12, paddingVertical: 6, borderRadius: 20, marginRight: 8, marginBottom: 8 },
//   featureText: { fontSize: 12, fontFamily: Fonts.medium, color: '#374151' }
// });
















// import React from "react";
// import { 
//   View, 
//   Text, 
//   StyleSheet, 
//   ScrollView, 
//   Image, 
//   TouchableOpacity 
// } from "react-native";
// import { SafeAreaView } from "react-native-safe-area-context";
// import Ionicons from "@react-native-vector-icons/ionicons";
// import { Colors } from "../../../theme/colors";
// import { Fonts } from "../../../theme/fonts";

// const MyAdDetailScreen = ({ route, navigation }: any) => {
//   const { ad } = route.params;

//   return (
//     <SafeAreaView style={styles.container}>
//       {/* --- Header --- */}
//       <View style={styles.header}>
//         <TouchableOpacity onPress={() => navigation.goBack()} style={styles.iconBtn}>
//           <Ionicons name="arrow-back" size={26} color="black" />
//         </TouchableOpacity>
//         <Text style={styles.headerTitle}>Ad Details</Text>
//         <TouchableOpacity style={styles.iconBtn}>
//           <Ionicons name="trash-outline" size={22} color="#EF4444" />
//         </TouchableOpacity>
//       </View>

//       <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={styles.scrollContent}>
        
//         {/* Car Image */}
//         <Image 
//             source={ad.image ? { uri: ad.image } : require('../../../assets/images/carimages/car1.jpg')} 
//             style={styles.mainImg} 
//         />

//         <View style={styles.content}>
//           {/* Title & Price */}
//           <View style={styles.mainInfo}>
//             <Text style={styles.title}>{ad.title}</Text>
//             <Text style={styles.price}>{ad.price}</Text>
//           </View>

//           {/* --- Inspection Status Card (Button Inside) --- */}
//           <View style={[
//             styles.statusCard, 
//             ad.status === 'waiting_confirmation' && styles.statusCardAlert
//           ]}>
//              <View style={styles.row}>
//                 <Ionicons 
//                     name={ad.status === 'waiting_confirmation' ? "notifications-circle" : "time-outline"} 
//                     size={24} 
//                     color={ad.status === 'waiting_confirmation' ? "#EA580C" : Colors.primary} 
//                 />
//                 <Text style={styles.statusHeading}>Inspection Status</Text>
//              </View>
             
//              <Text style={styles.statusDescription}>
//                 {ad.status === 'waiting_confirmation' 
//                  ? "Admin has scheduled your inspection. Please confirm the date and time to proceed." 
//                  : "Your application is received. Our expert will assign an inspection slot soon."}
//              </Text>

//              {/* --- Action Button inside the Card --- */}
//              {ad.status === 'waiting_confirmation' && (
//                <TouchableOpacity 
//                  style={styles.inlineConfirmBtn}
//                  onPress={() => navigation.navigate('ConfirmScheduleDateScreen', { 
//                     car: ad, 
//                     date: '10 Sep 2023', 
//                     time: '11:00 AM' 
//                  })}
//                >
//                  <Text style={styles.inlineBtnText}>Confirm Appointment Now</Text>
//                  <Ionicons name="arrow-forward" size={18} color="white" />
//                </TouchableOpacity>
//              )}
//           </View>

//           {/* Technical Details Grid */}
//           <Text style={styles.sectionTitle}>Technical Overview</Text>
//           <View style={styles.grid}>
//              <DetailItem label="Brand" value={ad.details?.brand || "Maruti"} />
//              <DetailItem label="Model" value={ad.details?.model || "Swift"} />
//              <DetailItem label="Fuel" value={ad.details?.fuel || "Petrol"} />
//              <DetailItem label="Kilometers" value={ad.details?.kms || "54,338"} />
//              <DetailItem label="Transmission" value={ad.details?.transmission || "Manual"} />
//              <DetailItem label="Location" value={ad.details?.location || "Delhi"} />
//           </View>

//           {/* Features Badges */}
//           {ad.details?.features?.length > 0 && (
//             <View style={styles.featureSection}>
//               <Text style={styles.sectionTitle}>Features Included</Text>
//               <View style={styles.featureRow}>
//                  {ad.details.features.map((f: string, i: number) => (
//                    <View key={i} style={styles.featureBadge}>
//                      <Ionicons name="checkmark-done" size={14} color={Colors.primary} />
//                      <Text style={styles.featureText}>{f}</Text>
//                    </View>
//                  ))}
//               </View>
//             </View>
//           )}
//         </View>
//       </ScrollView>
//     </SafeAreaView>
//   );
// };

// // Helper Component for Grid
// const DetailItem = ({ label, value }: any) => (
//   <View style={styles.gridItem}>
//     <Text style={styles.itemLabel}>{label}</Text>
//     <Text style={styles.itemValue}>{value}</Text>
//   </View>
// );

// export default MyAdDetailScreen;

// const styles = StyleSheet.create({
//   container: { flex: 1, backgroundColor: 'white' },
//   header: { 
//     flexDirection: 'row', 
//     justifyContent: 'space-between', 
//     alignItems: 'center', 
//     paddingHorizontal: 15, 
//     height: 60,
//     borderBottomWidth: 1, 
//     borderBottomColor: '#f3f4f6' 
//   },
//   headerTitle: { fontFamily: Fonts.bold, fontSize: 18, color: 'black' },
//   iconBtn: { padding: 5 },
//   scrollContent: { paddingBottom: 50 },
//   mainImg: { width: '100%', height: 250, resizeMode: 'cover' },
  
//   content: { padding: 20 },
//   mainInfo: { marginBottom: 20 },
//   title: { fontFamily: Fonts.bold, fontSize: 24, color: 'black' },
//   price: { fontFamily: Fonts.bold, fontSize: 20, color: Colors.secondary, marginTop: 5 },

//   // --- New Status Card Style ---
//   statusCard: { 
//     backgroundColor: '#F3F4F6', 
//     padding: 18, 
//     borderRadius: 16, 
//     marginBottom: 30, 
//     borderWidth: 1, 
//     borderColor: '#E5E7EB' 
//   },
//   statusCardAlert: {
//     backgroundColor: '#FFF7ED',
//     borderColor: '#FED7AA',
//   },
//   row: { flexDirection: 'row', alignItems: 'center', marginBottom: 10 },
//   statusHeading: { fontFamily: Fonts.bold, fontSize: 16, color: 'black', marginLeft: 10 },
//   statusDescription: { fontFamily: Fonts.regular, fontSize: 13, color: '#4B5563', lineHeight: 20, marginBottom: 15 },
  
//   inlineConfirmBtn: {
//     backgroundColor: Colors.secondary,
//     flexDirection: 'row',
//     alignItems: 'center',
//     justifyContent: 'center',
//     paddingVertical: 14,
//     borderRadius: 12,
//     elevation: 3,
//   },
//   inlineBtnText: { color: 'white', fontFamily: Fonts.bold, fontSize: 14, marginRight: 10 },

//   // Detail Grid
//   sectionTitle: { fontFamily: Fonts.bold, fontSize: 17, color: 'black', marginBottom: 15 },
//   grid: { flexDirection: 'row', flexWrap: 'wrap' },
//   gridItem: { width: '33.33%', marginBottom: 25 },
//   itemLabel: { fontSize: 11, color: '#9CA3AF', fontFamily: Fonts.regular, marginBottom: 4 },
//   itemValue: { fontSize: 14, color: 'black', fontFamily: Fonts.semiBold },

//   // Feature Section
//   featureSection: { marginTop: 10 },
//   featureRow: { flexDirection: 'row', flexWrap: 'wrap' },
//   featureBadge: { 
//     flexDirection: 'row', 
//     alignItems: 'center', 
//     backgroundColor: '#F8F9FA', 
//     paddingHorizontal: 12, 
//     paddingVertical: 8, 
//     borderRadius: 20, 
//     marginRight: 10, 
//     marginBottom: 10,
//     borderWidth: 1,
//     borderColor: '#E5E7EB'
//   },
//   featureText: { fontSize: 12, fontFamily: Fonts.medium, color: '#374151', marginLeft: 6 }
// });

















import React from "react";
import { 
  View, 
  Text, 
  StyleSheet, 
  ScrollView, 
  Image, 
  TouchableOpacity 
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Ionicons from "@react-native-vector-icons/ionicons";
import { Colors } from "../../../theme/colors";
import { Fonts } from "../../../theme/fonts";

const MyAdDetailScreen = ({ route, navigation }: any) => {
  const { ad } = route.params;

  return (
    <SafeAreaView style={styles.container}>
      {/* --- Header --- */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()} style={styles.iconBtn}>
          <Ionicons name="arrow-back" size={26} color="black" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Ad Details</Text>
        <TouchableOpacity style={styles.iconBtn}>
          {/* <Ionicons name="trash-outline" size={22} color="#EF4444" /> */}
        </TouchableOpacity>
      </View>

      <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={styles.scrollContent}>
        
        {/* Car Image */}
        <Image 
            source={ad.image ? { uri: ad.image } : require('../../../assets/images/carimages/car1.jpg')} 
            style={styles.mainImg} 
        />

        <View style={styles.content}>
          {/* Title & Price */}
          <View style={styles.mainInfo}>
            <Text style={styles.title}>{ad.title}</Text>
            <Text style={styles.price}>{ad.price}</Text>
          </View>

          {/* --- Inspection Status Card --- */}
          <View style={[
            styles.statusCard, 
            ad.status === 'waiting_confirmation' && styles.statusCardAlert
          ]}>
             <View style={styles.row}>
                <Ionicons 
                    name={ad.status === 'waiting_confirmation' ? "notifications-circle" : "time-outline"} 
                    size={24} 
                    color={ad.status === 'waiting_confirmation' ? "#EA580C" : Colors.primary} 
                />
                <Text style={styles.statusHeading}>Inspection Status</Text>
             </View>
             
             <Text style={styles.statusDescription}>
                {ad.status === 'waiting_confirmation' 
                 ? "Admin has scheduled your inspection. Please confirm the date and time to proceed." 
                 : "Your application is received. Our expert will assign an inspection slot soon."}
             </Text>

             {/* Action Button inside Card */}
             {ad.status === 'waiting_confirmation' && (
               <TouchableOpacity 
                 style={styles.inlineConfirmBtn}
                 onPress={() => navigation.navigate('ConfirmScheduleDateScreen', { 
                    car: ad, 
                    date: '10 Sep 2023', 
                    time: '11:00 AM' 
                 })}
               >
                 <Text style={styles.inlineBtnText}>Confirm Appointment Now</Text>
                 <Ionicons name="arrow-forward" size={18} color="white" />
               </TouchableOpacity>
             )}
          </View>

          {/* --- Separated Location Row --- */}
          <View style={styles.locationContainer}>
             <View style={styles.locationIconBg}>
                <Ionicons name="location" size={20} color={Colors.primary} />
             </View>
             <View style={{marginLeft: 15}}>
                <Text style={styles.itemLabel}>Car Location</Text>
                <Text style={styles.locationText}>{ad.details?.location || "Not specified"}</Text>
             </View>
          </View>

          {/* Technical Details Grid (Location removed from here) */}
          <Text style={styles.sectionTitle}>Technical Overview</Text>
          <View style={styles.grid}>
             <DetailItem label="Brand" value={ad.details?.brand || "N/A"} />
             <DetailItem label="Model" value={ad.details?.model || "N/A"} />
             <DetailItem label="Fuel" value={ad.details?.fuel || "N/A"} />
             <DetailItem label="Kilometers" value={ad.details?.kms || "N/A"} />
             <DetailItem label="Transmission" value={ad.details?.transmission || "N/A"} />
             <DetailItem label="Year" value={ad.details?.year || "N/A"} />
          </View>

          {/* --- Description Section (New) --- */}
          <View style={styles.descriptionSection}>
             <Text style={styles.sectionTitle}>Description</Text>
             <Text style={styles.descriptionText}>
                {ad.details?.description || "No description provided for this car."}
             </Text>
          </View>

          {/* Features Badges */}
          {ad.details?.features?.length > 0 && (
            <View style={styles.featureSection}>
              <Text style={styles.sectionTitle}>Features Included</Text>
              <View style={styles.featureRow}>
                 {ad.details.features.map((f: string, i: number) => (
                   <View key={i} style={styles.featureBadge}>
                     <Ionicons name="checkmark-done" size={14} color={Colors.primary} />
                     <Text style={styles.featureText}>{f}</Text>
                   </View>
                 ))}
              </View>
            </View>
          )}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

// Helper Component
const DetailItem = ({ label, value }: any) => (
  <View style={styles.gridItem}>
    <Text style={styles.itemLabel}>{label}</Text>
    <Text style={styles.itemValue}>{value}</Text>
  </View>
);

export default MyAdDetailScreen;

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: 'white' },
  header: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', paddingHorizontal: 15, height: 60, borderBottomWidth: 1, borderBottomColor: '#f3f4f6' },
  headerTitle: { fontFamily: Fonts.bold, fontSize: 18, color: 'black' },
  iconBtn: { padding: 5 },
  scrollContent: { paddingBottom: 50 },
  mainImg: { width: '100%', height: 250, resizeMode: 'cover' },
  
  content: { padding: 20 },
  mainInfo: { marginBottom: 20 },
  title: { fontFamily: Fonts.bold, fontSize: 24, color: Colors.primary },
  price: { fontFamily: Fonts.semiBold, fontSize: 20, color: Colors.black, marginTop: 5 },

  statusCard: { backgroundColor: '#F3F4F6', padding: 18, borderRadius: 16, marginBottom: 25, borderWidth: 1, borderColor: '#E5E7EB' },
  statusCardAlert: { backgroundColor: '#FFF7ED', borderColor: '#FED7AA' },
  row: { flexDirection: 'row', alignItems: 'center', marginBottom: 10 },
  statusHeading: { fontFamily: Fonts.bold, fontSize: 16, color: 'black', marginLeft: 10 },
  statusDescription: { fontFamily: Fonts.regular, fontSize: 13, color: '#4B5563', lineHeight: 20, marginBottom: 15 },
  
  inlineConfirmBtn: { backgroundColor: Colors.secondary, flexDirection: 'row', alignItems: 'center', justifyContent: 'center', paddingVertical: 14, borderRadius: 12, elevation: 3 },
  inlineBtnText: { color: 'white', fontFamily: Fonts.bold, fontSize: 14, marginRight: 10 },

  // --- Location Section Style ---
  locationContainer: { 
    flexDirection: 'row', 
    alignItems: 'center', 
    backgroundColor: '#F9FAFB', 
    padding: 15, 
    borderRadius: 12, 
    marginBottom: 25,
    borderWidth: 1,
    borderColor: '#F3F4F6'
  },
  locationIconBg: { 
    width: 40, 
    height: 40, 
    borderRadius: 20, 
    backgroundColor: '#E0E7FF', 
    justifyContent: 'center', 
    alignItems: 'center' 
  },
  locationText: { fontFamily: Fonts.semiBold, fontSize: 15, color: Colors.black, marginTop: 2 },

  sectionTitle: { fontFamily: Fonts.bold, fontSize: 17, color: 'black', marginBottom: 15 },
  grid: { flexDirection: 'row', flexWrap: 'wrap' },
  gridItem: { width: '33.33%', marginBottom: 25 },
  itemLabel: { fontSize: 11, color: '#9CA3AF', fontFamily: Fonts.regular, marginBottom: 2 },
  itemValue: { fontSize: 14, color: 'black', fontFamily: Fonts.semiBold },

  // --- Description Section Style ---
  descriptionSection: { marginBottom: 25 },
  descriptionText: { fontFamily: Fonts.regular, fontSize: 14, color: '#4B5563', lineHeight: 22 },

  featureSection: { marginTop: 10 },
  featureRow: { flexDirection: 'row', flexWrap: 'wrap' },
  featureBadge: { flexDirection: 'row', alignItems: 'center', backgroundColor: '#F8F9FA', paddingHorizontal: 12, paddingVertical: 8, borderRadius: 20, marginRight: 10, marginBottom: 10, borderWidth: 1, borderColor: '#E5E7EB' },
  featureText: { fontSize: 12, fontFamily: Fonts.medium, color: '#374151', marginLeft: 6 }
});