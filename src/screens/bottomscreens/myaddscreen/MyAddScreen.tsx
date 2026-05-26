
// import React from "react";
// import { View, Text, StyleSheet, FlatList, Image, TouchableOpacity } from "react-native";
// import { SafeAreaView } from "react-native-safe-area-context";
// import { useSelector } from "react-redux";
// import Ionicons from "@react-native-vector-icons/ionicons";
// import { RootState } from "../../../redux/store";
// import { Colors } from "../../../theme/colors";
// import { Fonts } from "../../../theme/fonts";

// const MyAddScreen = ({ navigation }: any) => {
//   const myAds = useSelector((state: RootState) => state.myAds.ads);

//   // स्टेटस के हिसाब से रंग और टेक्स्ट तय करना
//   const getStatusStyle = (status: string) => {
//     switch (status) {
//       case 'waiting_inspection': return { color: '#6B7280', bg: '#F3F4F6', label: 'Waiting for Inspection' };
//       case 'waiting_confirmation': return { color: '#EA580C', bg: '#FFF7ED', label: 'Waiting for your Confirmation' };
//       case 'scheduled': return { color: '#2563EB', bg: '#EFF6FF', label: 'Inspection Scheduled' };
//       case 'approved': return { color: '#059669', bg: '#ECFDF5', label: 'Ad Approved' };
//       case 'rejected': return { color: '#DC2626', bg: '#FEF2F2', label: 'Ad Rejected' };
//       default: return { color: 'gray', bg: '#eee', label: 'Pending' };
//     }
//   };

//   return (
//     <SafeAreaView style={styles.safeArea}>
//       <View style={styles.header}>
//         <Text style={styles.headerTitle}>My Ads</Text>
//       </View>

//       {myAds.length > 0 ? (
//         <FlatList
//           data={myAds}
//           keyExtractor={(item) => item.id}
//           contentContainerStyle={styles.listContainer}
//           renderItem={({ item }) => {
//             const statusStyle = getStatusStyle(item.status);
//             return (
//               <View style={styles.adCard}>
//                 <Image source={{ uri: item.image }} style={styles.carImg} />

//                 <View style={styles.details}>
//                   <Text style={styles.carTitle}>{item.title}</Text>
//                   <Text style={styles.carPrice}>{item.price}</Text>

//                   {/* Status Badge */}
//                   <View style={[styles.statusBadge, { backgroundColor: statusStyle.bg }]}>
//                     <Text style={[styles.statusText, { color: statusStyle.color }]}>{statusStyle.label}</Text>
//                   </View>

//                   {/* Action Button: सिर्फ कन्फर्मेशन के समय दिखेगा */}
//                   {item.status === 'waiting_confirmation' && (
//                     <TouchableOpacity 
//                         style={styles.actionBtn}
//                         onPress={() => navigation.navigate('ConfirmScheduleDateScreen', { car: item })}
//                     >
//                         <Text style={styles.actionBtnText}>Confirm Now</Text>
//                     </TouchableOpacity>
//                   )}
//                 </View>
//               </View>
//             );
//           }}
//         />
//       ) : (
//         <View style={styles.emptyContainer}>
//           <Ionicons name="car-outline" size={80} color="#E5E7EB" />
//           <Text style={styles.emptyText}>You haven't posted any ads yet.</Text>
//         </View>
//       )}
//     </SafeAreaView>
//   );
// };

// export default MyAddScreen;

// const styles = StyleSheet.create({
//   safeArea: { flex: 1, backgroundColor: Colors.white },
//   header: { padding: 20, borderBottomWidth: 1, borderBottomColor: '#f0f0f0' },
//   headerTitle: { fontFamily: Fonts.bold, fontSize: 22, color: 'black' },
//   listContainer: { padding: 20, paddingBottom: 100 },
//   adCard: { 
//     flexDirection: 'row', 
//     backgroundColor: 'white', 
//     borderRadius: 15, 
//     marginBottom: 20, 
//     elevation: 3, 
//     padding: 10,
//     shadowColor: '#000', shadowOpacity: 0.1, shadowRadius: 5
//   },
//   carImg: { width: 100, height: 100, borderRadius: 10, backgroundColor: '#eee' },
//   details: { flex: 1, marginLeft: 15, justifyContent: 'center' },
//   carTitle: { fontFamily: Fonts.bold, fontSize: 16, color: 'black' },
//   carPrice: { fontFamily: Fonts.medium, fontSize: 14, color: 'gray', marginTop: 2 },
//   statusBadge: { 
//     alignSelf: 'flex-start', 
//     paddingHorizontal: 10, 
//     paddingVertical: 4, 
//     borderRadius: 6, 
//     marginTop: 8 
//   },
//   statusText: { fontSize: 11, fontFamily: Fonts.bold },
//   actionBtn: { 
//     backgroundColor: Colors.secondary, 
//     marginTop: 10, 
//     paddingVertical: 8, 
//     borderRadius: 8, 
//     alignItems: 'center' 
//   },
//   actionBtnText: { color: 'white', fontFamily: Fonts.bold, fontSize: 12 },
//   emptyContainer: { flex: 1, justifyContent: 'center', alignItems: 'center' },
//   emptyText: { fontFamily: Fonts.medium, fontSize: 16, color: 'gray', marginTop: 10 }
// });







// import React from "react";
// import { View, Text, StyleSheet, FlatList, Image, TouchableOpacity } from "react-native";
// import { SafeAreaView } from "react-native-safe-area-context";
// import { useSelector } from "react-redux";
// import Ionicons from "@react-native-vector-icons/ionicons";
// import { RootState } from "../../../redux/store";
// import { Colors } from "../../../theme/colors";
// import { Fonts } from "../../../theme/fonts";

// const MyAddScreen = ({ navigation }: any) => {
//   const myAds = useSelector((state: RootState) => state.myAds.ads);

//   // स्टेटस के हिसाब से स्टाइल और लेबल तय करना
//   const getStatusInfo = (status: string) => {
//     switch (status) {
//       case 'waiting_inspection': 
//         return { color: '#2563EB', bg: '#EFF6FF', label: 'Waiting for Inspection', icon: 'time-outline' };
//       case 'waiting_confirmation': 
//         return { color: Colors.secondary, bg: Colors.primary, label: 'confirm Time', icon: 'alert-circle' };
//       case 'approved': 
//         return { color: '#059669', bg: '#ECFDF5', label: 'Ad Live', icon: 'checkmark-done-circle' };
//       case 'rejected': 
//         return { color: '#DC2626', bg: '#FEF2F2', label: 'Ad Rejected', icon: 'close-circle' };
//       default: 
//         return { color: 'gray', bg: '#F3F4F6', label: 'Pending', icon: 'help-circle' };
//     }
//   };

//   return (
//     <SafeAreaView style={styles.safeArea}>
//       {/* Header */}
//       <View style={styles.header}>
//         <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backBtn}>
//           <Ionicons name="chevron-back" size={28} color="black" />
//         </TouchableOpacity>
//         <Text style={styles.headerTitle}>My Ads</Text>
//       </View>

//       {myAds.length > 0 ? (
//         <FlatList
//           data={myAds}
//           keyExtractor={(item) => item.id}
//           contentContainerStyle={styles.listContainer}
//           showsVerticalScrollIndicator={false}
//           renderItem={({ item }) => {
//             const statusStyle = getStatusInfo(item.status);
//             return (
//               <TouchableOpacity 
//                 style={styles.adCard} 
//                 activeOpacity={0.9}
//                 onPress={() => navigation.navigate('MyAdDetailScreen', { ad: item })}
//               >
//                 <Image 
//                     source={item.image ? { uri: item.image } : require('../../../assets/images/carimages/car1.jpg')} 
//                     style={styles.carImg} 
//                 />

//                 <View style={styles.details}>
//                   <Text style={styles.carTitle} numberOfLines={1}>{item.title}</Text>
//                   <Text style={styles.carPrice}>{item.price}</Text>

//                   <View style={[styles.statusBadge, { backgroundColor: statusStyle.bg }]}>
//                     <Ionicons name={statusStyle.icon as any} size={14} color={statusStyle.color} />
//                     <Text style={[styles.statusText, { color: statusStyle.color }]}>{statusStyle.label}</Text>
//                   </View>

//                   {item.status === 'waiting_confirmation' && (
//                     <Text style={styles.tapHint}>Tap to confirm time slot</Text>
//                   )}
//                 </View>
//                 <Ionicons name="chevron-forward" size={20} color="#DDD" />
//               </TouchableOpacity>
//             );
//           }}
//         />
//       ) : (
//         <View style={styles.emptyContainer}>
//           <Ionicons name="car-sport-outline" size={100} color="#F3F4F6" />
//           <Text style={styles.emptyText}>You haven't posted any ads yet.</Text>
//           <TouchableOpacity style={styles.addBtn} onPress={() => navigation.navigate('AddCarScreen')}>
//              <Text style={styles.addBtnText}>Post an Ad</Text>
//           </TouchableOpacity>
//         </View>
//       )}
//     </SafeAreaView>
//   );
// };

// export default MyAddScreen;

// const styles = StyleSheet.create({
//   safeArea: { flex: 1, backgroundColor: Colors.white },
//   header: { flexDirection: 'row', alignItems: 'center', padding: 15, borderBottomWidth: 1, borderBottomColor: '#f3f4f6' },
//   backBtn: { padding: 5 },
//   headerTitle: { fontFamily: Fonts.bold, fontSize: 22, color: 'black', marginLeft: 10 },
//   listContainer: { padding: 20, paddingBottom: 100 },
//   adCard: { flexDirection: 'row', backgroundColor: 'white', borderRadius: 16, marginBottom: 15, elevation: 4, padding: 12, alignItems: 'center', shadowColor: '#000', shadowOpacity: 0.1, shadowRadius: 10 },
//   carImg: { width: 85, height: 85, borderRadius: 12, backgroundColor: '#f0f0f0' },
//   details: { flex: 1, marginLeft: 15 },
//   carTitle: { fontFamily: Fonts.bold, fontSize: 16, color: 'black' },
//   carPrice: { fontFamily: Fonts.medium, fontSize: 14, color: Colors.secondary, marginTop: 2 },
//   statusBadge: { flexDirection: 'row', alignItems: 'center', alignSelf: 'flex-start', paddingHorizontal: 10, paddingVertical: 5, borderRadius: 6, marginTop: 8 },
//   statusText: { fontSize: 10, fontFamily: Fonts.bold, marginLeft: 5 },
//   tapHint: { fontSize: 9, color: '#EA580C', fontFamily: Fonts.bold, marginTop: 5 },
//   emptyContainer: { flex: 1, justifyContent: 'center', alignItems: 'center', paddingHorizontal: 40 },
//   emptyText: { fontFamily: Fonts.medium, fontSize: 16, color: 'gray', marginTop: 10, textAlign: 'center' },
//   addBtn: { marginTop: 20, backgroundColor: Colors.primary, paddingHorizontal: 30, paddingVertical: 12, borderRadius: 25 },
//   addBtnText: { color: 'white', fontFamily: Fonts.bold }
// });

































// import React from "react";
// import { 
//   View, 
//   Text, 
//   StyleSheet, 
//   FlatList, 
//   Image, 
//   TouchableOpacity, 
//   Dimensions 
// } from "react-native";
// import { SafeAreaView } from "react-native-safe-area-context";
// import { useSelector } from "react-redux";
// import Ionicons from "@react-native-vector-icons/ionicons";
// import { RootState } from "../../../redux/store";
// import { Colors } from "../../../theme/colors";
// import { Fonts } from "../../../theme/fonts";

// const { width } = Dimensions.get("window");
// const isTablet = width > 600; // टैबलेट पहचानने के लिए

// const MyAddScreen = ({ navigation }: any) => {
//   const myAds = useSelector((state: RootState) => state.myAds.ads);

//   const getStatusInfo = (status: string) => {
//     switch (status) {
//       case 'waiting_inspection': 
//         return { color: '#2563EB', bg: '#EFF6FF', label: 'Waiting for Inspection', icon: 'time-outline' };
//       case 'waiting_confirmation': 
//         return { color: Colors.secondary, bg: Colors.primary, label: 'Confirm Time', icon: 'alert-circle' };
//       case 'approved': 
//         return { color: '#059669', bg: '#ECFDF5', label: 'Ad Live', icon: 'checkmark-done-circle' };
//       case 'rejected': 
//         return { color: '#DC2626', bg: '#FEF2F2', label: 'Ad Rejected', icon: 'close-circle' };
//       default: 
//         return { color: 'gray', bg: '#F3F4F6', label: 'Pending', icon: 'help-circle' };
//     }
//   };

//   const renderItem = ({ item }: any) => {
//     const statusStyle = getStatusInfo(item.status);
//     return (
//       <TouchableOpacity 
//         style={[styles.adCard, isTablet && styles.tabletCard]} 
//         activeOpacity={0.9}
//         onPress={() => navigation.navigate('MyAdDetailScreen', { ad: item })}
//       >
//         <Image 
//             source={item.image ? { uri: item.image } : require('../../../assets/images/carimages/car1.jpg')} 
//             style={styles.carImg} 
//         />

//         <View style={styles.details}>
//           <Text style={styles.carTitle} numberOfLines={1}>{item.title}</Text>
//           <Text style={styles.carPrice}>{item.price}</Text>

//           <View style={[styles.statusBadge, { backgroundColor: statusStyle.bg }]}>
//             <Ionicons name={statusStyle.icon as any} size={13} color={statusStyle.color} />
//             <Text style={[styles.statusText, { color: statusStyle.color }]}>{statusStyle.label}</Text>
//           </View>

//           {item.status === 'waiting_confirmation' && (
//             <Text style={styles.tapHint}>Tap to confirm time slot</Text>
//           )}
//         </View>

//         <View style={styles.arrowIcon}>
//           <Ionicons name="chevron-forward" size={18} color="#243B53" />
//         </View>
//       </TouchableOpacity>
//     );
//   };

//   return (
//     <SafeAreaView style={styles.safeArea}>
//       <View style={styles.header}>
//         <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backBtn}>
//           <Ionicons name="chevron-back" size={28} color="black" />
//         </TouchableOpacity>
//         <Text style={styles.headerTitle}>My Ads</Text>
//       </View>

//       {myAds.length > 0 ? (
//         <FlatList
//           key={isTablet ? 'h' : 'v'} // key बदलना ज़रूरी है जब numColumns बदलता है
//           data={myAds}
//           keyExtractor={(item) => item.id}
//           numColumns={isTablet ? 2 : 1}
//           contentContainerStyle={styles.listContainer}
//           columnWrapperStyle={isTablet ? { justifyContent: 'space-between' } : null}
//           showsVerticalScrollIndicator={false}
//           renderItem={renderItem}
//         />
//       ) : (
//         <View style={styles.emptyContainer}>
//           <Ionicons name="car-sport-outline" size={100} color="#F3F4F6" />
//           <Text style={styles.emptyText}>You haven't posted any ads yet.</Text>
//           <TouchableOpacity style={styles.addBtn} onPress={() => navigation.navigate('AddCarScreen')}>
//              <Text style={styles.addBtnText}>Post an Ad</Text>
//           </TouchableOpacity>
//         </View>
//       )}
//     </SafeAreaView>
//   );
// };

// export default MyAddScreen;

// const styles = StyleSheet.create({
//   safeArea: { flex: 1, backgroundColor: Colors.white },
//   header: { 
//     flexDirection: 'row', 
//     alignItems: 'center', 
//     padding: 15, 
//     borderBottomWidth: 1, 
//     borderBottomColor: '#f3f4f6' 
//   },
//   backBtn: { padding: 5 },
//   headerTitle: { fontFamily: Fonts.bold, fontSize: 22, color: 'black', marginLeft: 10 },

//   listContainer: { 
//     padding: 15, // पैडिंग को थोड़ा कम किया ताकि ग्रिड में जगह मिले
//     paddingBottom: 120 
//   },

//   adCard: { 
//     flexDirection: 'row', 
//     backgroundColor: 'white', 
//     borderRadius: 12, 
//     marginBottom: 15, 
//     elevation: 5, 
//     height: 115, 
//     width: '100%',
//     overflow: 'hidden', 
//     shadowColor: Colors.primary, 
//     shadowOpacity: 0.2, 
//     shadowRadius: 8,
//     alignItems: 'center'
//   },

//   // टैबलेट के लिए कार्ड की चौड़ाई आधी (लगभग)
//   tabletCard: {
//     width: '59%',
//   },

//   carImg: { 
//     width: width * 0.28, // स्क्रीन की चौड़ाई का 28% हिस्सा (रिस्पॉन्सिव)
//     maxWidth: 130, // बहुत बड़े स्क्रीन पर इसे फिक्स किया
//     minWidth: 90,
//     height: '100%', 
//     resizeMode: 'cover',
//   },

//   details: { 
//     flex: 1, 
//     paddingHorizontal: 16, 
//     justifyContent: 'center' 
//   },
//   carTitle: { fontFamily: Fonts.bold, fontSize: 16, color: Colors.black },
//   carPrice: { fontFamily: Fonts.semiBold, fontSize: 14, color: Colors.black, marginTop: 2 },

//   statusBadge: { 
//     flexDirection: 'row', 
//     alignItems: 'center', 
//     alignSelf: 'flex-start', 
//     paddingHorizontal: 8, 
//     paddingVertical: 4, 
//     borderRadius: 6, 
//     marginTop: 6 
//   },
//   statusText: { fontSize: 9, fontFamily: Fonts.bold, marginLeft: 4 },
//   tapHint: { fontSize: 8.5, color: '#EA580C', fontFamily: Fonts.bold, marginTop: 4 },

//   arrowIcon: { paddingRight: 10 },

//   emptyContainer: { flex: 1, justifyContent: 'center', alignItems: 'center', paddingHorizontal: 40 },
//   emptyText: { fontFamily: Fonts.medium, fontSize: 16, color: 'gray', marginTop: 10, textAlign: 'center' },
//   addBtn: { marginTop: 20, backgroundColor: Colors.primary, paddingHorizontal: 30, paddingVertical: 12, borderRadius: 25 },
//   addBtnText: { color: 'white', fontFamily: Fonts.bold }
// });
















// api integration and chhote part me yaha se 

// import React from "react";
// import { View, Text, FlatList, Image, TouchableOpacity, ActivityIndicator, RefreshControl } from "react-native";
// import { SafeAreaView } from "react-native-safe-area-context";
// import Ionicons from "@react-native-vector-icons/ionicons";
// import { styles, isTablet } from "./MyAddScreenStyles";
// import { useMyAdsLogic } from "./useMyAdsLogic";

// const MyAddScreen = ({ navigation }: any) => {
//   const { ads, loading, refreshing, onRefresh, getStatusInfo } = useMyAdsLogic(navigation);

//   const renderItem = ({ item }: any) => {
//     // API से 'inspectionStatus' की कोडिंग उठाएं
//     const statusStyle = getStatusInfo(item.inspectionStatus);

//     return (
//       <TouchableOpacity 
//         style={[styles.adCard, isTablet && styles.tabletCard]} 
//         activeOpacity={0.9}
//         onPress={() => navigation.navigate('MyAdDetailScreen', { ad: item })}
//       >
//         <Image 
//             source={item.images && item.images.length > 0 
//                 ? { uri: item.images[0] } 
//                 : require('../../../assets/images/carimages/car1.jpg')} 
//             style={styles.carImg} 
//         />

//         <View style={styles.details}>
//           <Text style={styles.carTitle} numberOfLines={1}>{item.model.name}</Text>
//           <Text style={styles.carReg}>{item.registrationNumber}</Text>
//           <Text style={styles.carPrice}>₹ {item.expectedPrice?.toLocaleString()}</Text>

//           <View style={[styles.statusBadge, { backgroundColor: statusStyle.bg }]}>
//             <Ionicons name={statusStyle.icon as any} size={12} color={statusStyle.color} />
//             <Text style={[styles.statusText, { color: statusStyle.color }]}>{statusStyle.label}</Text>
//           </View>
//         </View>

//         <View style={styles.arrowIcon}>
//           <Ionicons name="chevron-forward" size={18} color="#CCC" />
//         </View>
//       </TouchableOpacity>
//     );
//   };

//   if (loading) {
//     return (
//       <View style={{ flex: 1, justifyContent: 'center' }}>
//         <ActivityIndicator size="large" color="#243B53" />
//       </View>
//     );
//   }

//   return (
//     <SafeAreaView style={styles.safeArea}>
//       <View style={styles.header}>
//         <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backBtn}>
//           <Ionicons name="chevron-back" size={28} color="black" />
//         </TouchableOpacity>
//         <Text style={styles.headerTitle}>My Ads</Text>
//       </View>

//       {ads.length > 0 ? (
//         <FlatList
//           key={isTablet ? 'tablet' : 'mobile'}
//           data={ads}
//           keyExtractor={(item) => item._id}
//           numColumns={isTablet ? 2 : 1}
//           contentContainerStyle={styles.listContainer}
//           columnWrapperStyle={isTablet ? { justifyContent: 'space-between' } : null}
//           showsVerticalScrollIndicator={false}
//           renderItem={renderItem}
//           refreshControl={
//             <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
//           }
//         />
//       ) : (
//         <View style={styles.emptyContainer}>
//           <Ionicons name="car-sport-outline" size={100} color="#F3F4F6" />
//           <Text style={styles.emptyText}>You haven't posted any ads yet.</Text>
//           <TouchableOpacity style={styles.addBtn} onPress={() => navigation.navigate('AddCarScreen')}>
//              <Text style={styles.addBtnText}>Post an Ad</Text>
//           </TouchableOpacity>
//         </View>
//       )}
//     </SafeAreaView>
//   );
// };

// export default MyAddScreen;



















// import React from "react";
// import { View, Text, FlatList, Image, TouchableOpacity, ActivityIndicator, RefreshControl } from "react-native";
// import { SafeAreaView } from "react-native-safe-area-context";
// import Ionicons from "@react-native-vector-icons/ionicons";
// import { styles, isTablet } from "./MyAddScreenStyles";
// import { useMyAdsLogic } from "./useMyAdsLogic";

// const MyAddScreen = ({ navigation }: any) => {
//   const { ads, loading, refreshing, onRefresh, getStatusInfo } = useMyAdsLogic(navigation);

//   const renderItem = ({ item }: any) => {
//     // --- 🚀 फिक्स: यहाँ 'item.inspectionStatus' के बजाय पूरा 'item' भेजें ---
//     const statusStyle = getStatusInfo(item); 

//     return (
//       <TouchableOpacity 
//         style={[styles.adCard, isTablet && styles.tabletCard]} 
//         activeOpacity={0.9}
//         onPress={() => navigation.navigate('MyAdDetailScreen', { ad: item })}
//       >
//         <Image 
//             source={item.images && item.images.length > 0 
//                 ? { uri: item.images[0] } 
//                 : require('../../../assets/images/carimages/car1.jpg')} 
//             style={styles.carImg} 
//         />

//         <View style={styles.details}>
//           {/* नाम और नंबर */}
//           <Text style={styles.carTitle} numberOfLines={1}>
//             {item.make} {item.model?.name || item.model}
//           </Text>
//           <Text style={styles.carReg}>{item.registrationNumber}</Text>
//           <Text style={styles.carPrice}>₹ {item.expectedPrice?.toLocaleString('en-IN')}</Text>

//           {/* स्टेटस बैज */}
//           <View style={[styles.statusBadge, { backgroundColor: statusStyle.bg }]}>
//             <Ionicons name={statusStyle.icon as any} size={12} color={statusStyle.color} />
//             <Text style={[styles.statusText, { color: statusStyle.color }]}>{statusStyle.label}</Text>
//           </View>

//           {/* एक्शन हिंट: सिर्फ शेड्यूल्ड होने पर */}
//           {item.inspectionStatus === 'scheduled' && item.status !== 'rejected' && (
//             <Text style={styles.tapHint}>Tap to confirm time slot</Text>
//           )}
//         </View>

//         <View style={styles.arrowIcon}>
//           <Ionicons name="chevron-forward" size={18} color="#CCC" />
//         </View>
//       </TouchableOpacity>
//     );
//   };

//   if (loading) {
//     return (
//       <View style={{ flex: 1, justifyContent: 'center' }}>
//         <ActivityIndicator size="large" color="#243B53" />
//       </View>
//     );
//   }

//   return (
//     <SafeAreaView style={styles.safeArea}>
//       <View style={styles.header}>
//         <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backBtn}>
//           <Ionicons name="chevron-back" size={28} color="black" />
//         </TouchableOpacity>
//         <Text style={styles.headerTitle}>My Ads</Text>
//       </View>

//       {ads.length > 0 ? (
//         <FlatList
//           key={isTablet ? 'tablet' : 'mobile'}
//           data={ads}
//           keyExtractor={(item) => item._id}
//           numColumns={isTablet ? 2 : 1}
//           contentContainerStyle={styles.listContainer}
//           columnWrapperStyle={isTablet ? { justifyContent: 'space-between' } : null}
//           showsVerticalScrollIndicator={false}
//           renderItem={renderItem}
//           refreshControl={
//             <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
//           }
//         />
//       ) : (
//         <View style={styles.emptyContainer}>
//           <Ionicons name="car-sport-outline" size={100} color="#F3F4F6" />
//           <Text style={styles.emptyText}>You haven't posted any ads yet.</Text>
//           <TouchableOpacity style={styles.addBtn} onPress={() => navigation.navigate('Add')}>
//              <Text style={styles.addBtnText}>Post an Ad</Text>
//           </TouchableOpacity>
//         </View>
//       )}
//     </SafeAreaView>
//   );
// };

// export default MyAddScreen;


















// import React from "react";
// import { View, Text, FlatList, Image, TouchableOpacity, ActivityIndicator, RefreshControl } from "react-native";
// import { SafeAreaView } from "react-native-safe-area-context";
// import Ionicons from "@react-native-vector-icons/ionicons";
// import { styles, isTablet } from "./MyAddScreenStyles";
// import { useMyAdsLogic } from "./useMyAdsLogic";

// const MyAddScreen = ({ navigation }: any) => {
//   const { ads, loading, refreshing, onRefresh, getStatusInfo } = useMyAdsLogic(navigation);

//   const renderItem = ({ item }: any) => {
//     const statusStyle = getStatusInfo(item); 

//     return (
//       <TouchableOpacity 
//         style={[styles.adCard, isTablet && styles.tabletCard]} 
//         activeOpacity={0.9}
//         onPress={() => navigation.navigate('MyAdDetailScreen', { ad: item })}
//       >
//         <Image 
//             source={item.images && item.images.length > 0 
//                 ? { uri: item.images[0] } 
//                 : require('../../../assets/images/carimages/car1.jpg')} 
//             style={styles.carImg} 
//         />

//         <View style={styles.details}>
//             <Text style={styles.carTitle} numberOfLines={1}>
//     {item.make} {item.model?.name || item.model}
//   </Text>
//   <Text style={styles.carReg}>{item.registrationNumber}</Text>
//   <Text style={styles.carPrice}>₹ {item.expectedPrice?.toLocaleString('en-IN')}</Text>

//   {/* --- 🚀 स्टेटस और स्टैट्स को एक ही लाइन में रखने वाला कंटेनर --- */}
//   <View style={styles.statusAndStatsContainer}>

//     {/* स्टेटस बैज */}
//     <View style={[styles.statusBadge, { backgroundColor: statusStyle.bg }]}>
//       <Ionicons name={statusStyle.icon as any} size={11} color={statusStyle.color} />
//       <Text style={[styles.statusText, { color: statusStyle.color }]} numberOfLines={1}>
//         {statusStyle.label}
//       </Text>
//     </View>

//     {/* व्यूज़ और इनक्वायरी */}
//     <View style={styles.statsRow}>
//       <View style={styles.statItem}>
//           <Ionicons name="eye-outline" size={14} color="#6B7280" />
//           <Text style={styles.statText}>{item.views || 0}</Text>
//       </View>
//       <View style={styles.statItem}>
//           <Ionicons name="chatbubble-ellipses-outline" size={13} color="#6B7280" />
//           <Text style={styles.statText}>{item.inquiryCount || 0}</Text>
//       </View>
//     </View>

//   </View>

//           {item.inspectionStatus === 'scheduled' && item.status !== 'rejected' && (
//             <Text style={styles.tapHint}>Tap to confirm time slot</Text>
//           )}
//         </View>

//         <View style={styles.arrowIcon}>
//           <Ionicons name="chevron-forward" size={18} color="#CCC" />
//         </View>
//       </TouchableOpacity>
//     );
//   };

//   if (loading) {
//     return (
//       <View style={{ flex: 1, justifyContent: 'center' }}>
//         <ActivityIndicator size="large" color="#243B53" />
//       </View>
//     );
//   }

//   return (
//     <SafeAreaView style={styles.safeArea}>
//       <View style={styles.header}>
//         <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backBtn}>
//           <Ionicons name="chevron-back" size={28} color="black" />
//         </TouchableOpacity>
//         <Text style={styles.headerTitle}>My Ads</Text>
//       </View>

//       {ads.length > 0 ? (
//         <FlatList
//           key={isTablet ? 'tablet' : 'mobile'}
//           data={ads}
//           keyExtractor={(item) => item._id}
//           numColumns={isTablet ? 2 : 1}
//           contentContainerStyle={styles.listContainer}
//           columnWrapperStyle={isTablet ? { justifyContent: 'space-between' } : null}
//           showsVerticalScrollIndicator={false}
//           renderItem={renderItem}
//           refreshControl={
//             <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
//           }
//         />
//       ) : (
//         <View style={styles.emptyContainer}>
//           <Ionicons name="car-sport-outline" size={100} color="#F3F4F6" />
//           <Text style={styles.emptyText}>You haven't posted any ads yet.</Text>
//           <TouchableOpacity style={styles.addBtn} onPress={() => navigation.navigate('Add')}>
//              <Text style={styles.addBtnText}>Post an Ad</Text>
//           </TouchableOpacity>
//         </View>
//       )}
//     </SafeAreaView>
//   );
// };

// export default MyAddScreen;






















import React from "react";
import { View, Text, FlatList, Image, TouchableOpacity, ActivityIndicator, RefreshControl } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Ionicons from "@react-native-vector-icons/ionicons";
import { styles, isTablet } from "./MyAddScreenStyles";
import { useMyAdsLogic } from "./useMyAdsLogic";

const MyAddScreen = ({ navigation }: any) => {
  const { ads, loading, refreshing, onRefresh, getStatusInfo } = useMyAdsLogic(navigation);

  const renderItem = ({ item }: any) => {
    const statusStyle = getStatusInfo(item);

    return (
      <TouchableOpacity
        style={[styles.adCard, isTablet && styles.tabletCard]}
        activeOpacity={0.9}
        onPress={() => navigation.navigate('MyAdDetailScreen', { ad: item })}
      >
        <Image
          source={item.images && item.images.length > 0
            ? { uri: item.images[0] }
            : require('../../../assets/images/carimages/car1.jpg')}
          style={styles.carImg}
        />

        <View style={styles.details}>
          <Text style={styles.carTitle} numberOfLines={1}>
            {item.brand?.name} {item.model?.name || item.model}
          </Text>

          {/* --- 🚀 Naya: Reg Number aur Days Left ek line mein --- */}
          <View style={styles.regContainer}>
            <View style={styles.regLeft}>
              <Text style={styles.carReg}>
                {item.registrationNumber}
              </Text>
            </View>

            {item.daysLeft !== undefined && (
              <View style={styles.daysLeftBadge}>
                <Text style={styles.daysLeftText}>
                  {item.daysLeft} days left
                </Text>
              </View>
            )}
          </View>

          <Text style={styles.carPrice}>₹ {item.expectedPrice?.toLocaleString('en-IN')}</Text>

          {/* --- स्टेटस और स्टैट्स कंटेनर --- */}
          <View style={styles.statusAndStatsContainer}>
            <View style={[styles.statusBadge, { backgroundColor: statusStyle.bg }]}>
              <Ionicons name={statusStyle.icon as any} size={11} color={statusStyle.color} />
              <Text style={[styles.statusText, { color: statusStyle.color }]} numberOfLines={1}>
                {statusStyle.label}
              </Text>
            </View>

            <View style={styles.statsRow}>
              <View style={styles.statItem}>
                <Ionicons name="eye-outline" size={14} color="#6B7280" />
                <Text style={styles.statText}>{item.views || 0}</Text>
              </View>
              <View style={styles.statItem}>
                <Ionicons name="chatbubble-ellipses-outline" size={13} color="#6B7280" />
                <Text style={styles.statText}>{item.inquiryCount || 0}</Text>
              </View>
            </View>
          </View>

          {item.inspectionStatus === 'scheduled' && item.status !== 'rejected' && (
            <Text style={styles.tapHint}>Tap to confirm time slot</Text>
          )}
        </View>

        {/* <View style={styles.arrowIcon}>
          <Ionicons name="chevron-forward" size={18} color="#CCC" />
        </View> */}
      </TouchableOpacity>
    );
  };

  if (loading) {
    return (
      <View style={{ flex: 1, justifyContent: 'center' }}>
        <ActivityIndicator size="large" color="#243B53" />
      </View>
    );
  }

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backBtn}>
          <Ionicons name="chevron-back" size={28} color="black" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>My Ads</Text>
      </View>

      {ads.length > 0 ? (
        <FlatList
          key={isTablet ? 'tablet' : 'mobile'}
          data={ads}
          keyExtractor={(item) => item._id}
          numColumns={isTablet ? 2 : 1}
          contentContainerStyle={styles.listContainer}
          columnWrapperStyle={isTablet ? { justifyContent: 'space-between' } : null}
          showsVerticalScrollIndicator={false}
          renderItem={renderItem}
          refreshControl={<RefreshControl refreshing={refreshing} onRefresh={onRefresh} />}
        />
      ) : (
        <View style={styles.emptyContainer}>
          <Ionicons name="car-sport-outline" size={100} color="#F3F4F6" />
          <Text style={styles.emptyText}>You haven't posted any ads yet.</Text>
          <TouchableOpacity style={styles.addBtn} onPress={() => navigation.navigate('AddCarScreen')}>
            <Text style={styles.addBtnText}>Post an Ad</Text>
          </TouchableOpacity>
        </View>
      )}
    </SafeAreaView>
  );
};

export default MyAddScreen;