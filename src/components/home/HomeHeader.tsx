
// import React from 'react';
// import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native';
// import Ionicons from "@react-native-vector-icons/ionicons";
// import { useSelector } from 'react-redux';
// import { Colors } from '../../theme/colors';
// import { Fonts } from '../../theme/fonts';
// import { useNavigation } from '@react-navigation/native';
// import { RootState } from '../../redux/store';
// import TopServices from './TopServices';

// // --- 🚀 प्रोप्स का इंटरफेस (Interface for City Name) ---
// interface HomeHeaderProps {
//   cityName: string;
//   onLocationPress: () => void;
// }

// const HomeHeader = ({ cityName, onLocationPress }: HomeHeaderProps) => {
//   const navigation = useNavigation<any>();

//   // --- Redux से यूजर का डेटा और विशलिस्ट काउंट निकालें ---
//   const userData = useSelector((state: RootState) => state.auth.userData);
//   const wishlistCount = useSelector((state: RootState) => state.wishlist.items.length);

//   // --- फर्स्ट नेम निकालने का लॉजिक ---
//   const getFirstName = (fullName: string | undefined) => {
//     if (!fullName) return "User";
//     return fullName.trim().split(' ')[0]; 
//   };

//   return (
//     <View style={styles.container}>
//       {/* 1st Row: Profile & Location */}
//       <View style={styles.header}>
//         <View style={styles.row}>
//           {/* प्रोफाइल इमेज */}
//           <TouchableOpacity 
//             style={styles.profileImg} 
//             onPress={() => navigation.navigate('ProfileScreen')}
//           >
//              {userData?.profileImage ? (
//                 <Image 
//                   source={{ uri: userData.profileImage }} 
//                   style={styles.fullImg} 
//                 />
//              ) : (
//                 <Ionicons name="person" size={20} color="#999" />
//              )}
//           </TouchableOpacity>

//           <View style={{ marginLeft: 10 }}>
//             <Text style={styles.hiText}>
//               Hi <Text style={styles.nameText}>
//                 {getFirstName(userData?.fullName)}
//               </Text>
//             </Text>
//           </View>
//         </View>

//         {/* --- 🚀 डायनामिक लोकेशन (City Name) यहाँ दिखेगी --- */}
//         {/* <View style={styles.row}>
//           <Ionicons name="location-sharp" size={16} color="#EF4444" />
//           <Text style={styles.locText} numberOfLines={1}>
//              {cityName || "Detecting..."}
//           </Text>
//         </View> */}
//          <TouchableOpacity 
//           style={styles.row} 
//           onPress={onLocationPress}
//           activeOpacity={0.7}
//         >
//           <Ionicons name="location-sharp" size={16} color="#EF4444" />
//           <Text style={styles.locText} numberOfLines={1}>
//              {cityName}
//           </Text>
//         </TouchableOpacity>
//       </View>

//       <TopServices />

//       {/* 2nd Row: Search Bar & Icons */}
//       <View style={styles.searchSection}>
//         <TouchableOpacity 
//           activeOpacity={0.9}
//           style={styles.searchBar} 
//           onPress={() => navigation.navigate('SearchScreen')}
//         >
//           <Ionicons name="search-outline" size={20} color="gray" style={{marginRight: 8}} />
//           <Text style={styles.placeholderText}>Search Cars...</Text>
//         </TouchableOpacity>

//         <View style={styles.iconGroup}>
//           {/* Wishlist with Badge */}
//           <TouchableOpacity 
//             style={styles.iconBtn} 
//             onPress={() => navigation.navigate('WishlistScreen')}
//           >
//             <View>
//               <Ionicons name="heart-outline" size={24} color="black" />
//               {wishlistCount > 0 && (
//                 <View style={styles.badgeContainer}>
//                   <Text style={styles.badgeText}>
//                     {wishlistCount > 9 ? '9+' : wishlistCount}
//                   </Text>
//                 </View>
//               )}
//             </View>
//           </TouchableOpacity>

//           <TouchableOpacity 
//             style={styles.iconBtn} 
//             onPress={() => navigation.navigate('NotificationScreen')}
//           >
//             <Ionicons name="notifications-outline" size={24} color="black" />
//           </TouchableOpacity>
//         </View>
//       </View>
//     </View>
//   );
// };

// export default HomeHeader;

// const styles = StyleSheet.create({
//   container: { backgroundColor: Colors.white, paddingBottom: 5 },
//   header: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginTop: 10 },
//   row: { flexDirection: 'row', alignItems: 'center' },
//   profileImg: { 
//     width: 35, 
//     height: 35, 
//     borderRadius: 20, 
//     backgroundColor: '#F2F4F7', 
//     justifyContent: 'center', 
//     alignItems: 'center', 
//     borderWidth: 1, 
//     borderColor: '#E0E0E0',
//     overflow: 'hidden'
//   },
//   fullImg: {
//     width: '100%',
//     height: '100%',
//     resizeMode: 'cover'
//   },
//   hiText: { fontSize: 16, fontFamily: Fonts.regular, color: 'black' },
//   nameText: { color: Colors.secondary, fontFamily: Fonts.bold },
//   locText: { 
//     fontSize: 11, 
//     marginLeft: 3, 
//     fontFamily: Fonts.medium, 
//     color: '#666',
//     maxWidth: 120 // ज्यादा लंबी सिटी होने पर नाम न कटे
//   },
//   searchSection: { flexDirection: 'row', alignItems: 'center', marginTop: 10, justifyContent: 'space-between' },
//   searchBar: { flex: 1, height: 48, backgroundColor: '#F9FAFB', borderRadius: 12, flexDirection: 'row', alignItems: 'center', paddingHorizontal: 12, borderWidth: 1, borderColor: '#E5E7EB' },
//   placeholderText: { flex: 1, color: 'gray', fontFamily: Fonts.regular, fontSize: 14 },
//   iconGroup: { flexDirection: 'row', alignItems: 'center', marginLeft: 10 },
//   iconBtn: { padding: 5, marginLeft: 5 },
//   badgeContainer: { position: 'absolute', top: -5, right: -5, backgroundColor: '#EF4444', minWidth: 16, height: 16, borderRadius: 8, justifyContent: 'center', alignItems: 'center', borderWidth: 1.5, borderColor: 'white' },
//   badgeText: { color: 'white', fontSize: 9, fontFamily: Fonts.bold, textAlign: 'center' },
// });
























// import React from 'react';
// import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native';
// import Ionicons from "@react-native-vector-icons/ionicons";
// import { useSelector } from 'react-redux';
// import { Colors } from '../../theme/colors';
// import { Fonts } from '../../theme/fonts';
// import { useNavigation } from '@react-navigation/native';
// import { RootState } from '../../redux/store';
// import TopServices from './TopServices';

// interface HomeHeaderProps {
//   cityName: string;
//   onLocationPress: () => void; // क्लिक हैंडलर
// }

// const HomeHeader = ({ cityName, onLocationPress }: HomeHeaderProps) => {
//   const navigation = useNavigation<any>();

//   const userData = useSelector((state: RootState) => state.auth.userData);
//   const wishlistCount = useSelector((state: RootState) => state.wishlist.items.length);

//   const getFirstName = (fullName: string | undefined) => {
//     if (!fullName) return "User";
//     return fullName.trim().split(' ')[0]; 
//   };

//   return (
//     <View style={styles.container}>
//       {/* 1st Row: Profile & Location */}
//       <View style={styles.header}>
//         <View style={styles.row}>
//           <TouchableOpacity 
//             style={styles.profileImg} 
//             onPress={() => navigation.navigate('ProfileScreen')}
//           >
//              {userData?.profileImage ? (
//                 <Image source={{ uri: userData.profileImage }} style={styles.fullImg} />
//              ) : (
//                 <Ionicons name="person" size={20} color="#999" />
//              )}
//           </TouchableOpacity>

//           <View style={{ marginLeft: 10 }}>
//             <Text style={styles.hiText}>
//               Hi <Text style={styles.nameText}>{getFirstName(userData?.fullName)}</Text>
//             </Text>
//           </View>
//         </View>

//         {/* --- 🚀 क्लिक करने पर परमिशन या सेटिंग खुलेगी --- */}
//         <TouchableOpacity 
//           style={styles.row} 
//           onPress={onLocationPress}
//           activeOpacity={0.7}
//         >
//           <Ionicons name="location-sharp" size={16} color="#EF4444" />
//           <Text style={styles.locText} numberOfLines={1}>
//              {cityName}
//           </Text>
//         </TouchableOpacity>
//       </View>

//       <TopServices />

//       {/* 2nd Row: Search Bar & Icons */}
//       <View style={styles.searchSection}>
//         <TouchableOpacity 
//           activeOpacity={0.9}
//           style={styles.searchBar} 
//           onPress={() => navigation.navigate('SearchScreen')}
//         >
//           <Ionicons name="search-outline" size={20} color="gray" style={{marginRight: 8}} />
//           <Text style={styles.placeholderText}>Search Brand, Model or City...</Text>
//         </TouchableOpacity>

//         <View style={styles.iconGroup}>
//           <TouchableOpacity style={styles.iconBtn} onPress={() => navigation.navigate('WishlistScreen')}>
//             <View>
//               <Ionicons name="heart-outline" size={24} color="black" />
//               {wishlistCount > 0 && (
//                 <View style={styles.badgeContainer}>
//                   <Text style={styles.badgeText}>{wishlistCount > 9 ? '9+' : wishlistCount}</Text>
//                 </View>
//               )}
//             </View>
//           </TouchableOpacity>

//           <TouchableOpacity style={styles.iconBtn} onPress={() => navigation.navigate('NotificationScreen')}>
//             <Ionicons name="notifications-outline" size={24} color="black" />
//           </TouchableOpacity>
//         </View>
//       </View>
//     </View>
//   );
// };

// export default HomeHeader;

// const styles = StyleSheet.create({
//   container: { backgroundColor: Colors.white, paddingBottom: 5 },
//   header: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginTop: 10 },
//   row: { flexDirection: 'row', alignItems: 'center' },
//   profileImg: { width: 35, height: 35, borderRadius: 20, backgroundColor: '#F2F4F7', justifyContent: 'center', alignItems: 'center', borderWidth: 1, borderColor: '#E0E0E0', overflow: 'hidden' },
//   fullImg: { width: '100%', height: '100%', resizeMode: 'cover' },
//   hiText: { fontSize: 16, fontFamily: Fonts.regular, color: 'black' },
//   nameText: { color: Colors.secondary, fontFamily: Fonts.bold },
//   locText: { fontSize: 11, marginLeft: 3, fontFamily: Fonts.medium, color: '#666', maxWidth: 120 },
//   searchSection: { flexDirection: 'row', alignItems: 'center', marginTop: 10, justifyContent: 'space-between' },
//   searchBar: { flex: 1, height: 48, backgroundColor: '#F9FAFB', borderRadius: 12, flexDirection: 'row', alignItems: 'center', paddingHorizontal: 12, borderWidth: 1, borderColor: '#E5E7EB' },
//   placeholderText: { flex: 1, color: 'gray', fontFamily: Fonts.regular, fontSize: 14 },
//   iconGroup: { flexDirection: 'row', alignItems: 'center', marginLeft: 10 },
//   iconBtn: { padding: 5, marginLeft: 5 },
//   badgeContainer: { position: 'absolute', top: -5, right: -5, backgroundColor: '#EF4444', minWidth: 16, height: 16, borderRadius: 8, justifyContent: 'center', alignItems: 'center', borderWidth: 1.5, borderColor: 'white' },
//   badgeText: { color: 'white', fontSize: 9, fontFamily: Fonts.bold, textAlign: 'center' },
// });















// import React, { useState } from 'react';
// import { 
//   View, 
//   Text, 
//   TouchableOpacity, 
//   StyleSheet, 
//   Image, 
//   Modal, 
//   TextInput, 
//   TouchableWithoutFeedback,
//   Dimensions
// } from 'react-native';
// import Ionicons from "@react-native-vector-icons/ionicons";
// import { useSelector } from 'react-redux';
// import { Colors } from '../../theme/colors';
// import { Fonts } from '../../theme/fonts';
// import { useNavigation } from '@react-navigation/native';
// import { RootState } from '../../redux/store';
// import TopServices from './TopServices';

// const { width } = Dimensions.get('window');

// interface HomeHeaderProps {
//   cityName: string;
//   onLocationPress: () => void; 
//   onManualCitySearch: (city: string) => void; 
// }

// const HomeHeader = ({ cityName, onLocationPress, onManualCitySearch }: HomeHeaderProps) => {
//   const navigation = useNavigation<any>();
//   const [isModalVisible, setModalVisible] = useState(false);
//   const [typedCity, setTypedCity] = useState("");

//   const userData = useSelector((state: RootState) => state.auth.userData);
//   const wishlistCount = useSelector((state: RootState) => state.wishlist.items.length);

//   const getFirstName = (fullName: string | undefined) => {
//     if (!fullName) return "User";
//     return fullName.trim().split(' ')[0]; 
//   };

//   const handleCitySubmit = () => {
//     if (typedCity.trim().length > 0) {
//       onManualCitySearch(typedCity.trim()); // लॉजिक हुक को नाम भेजें
//       setModalVisible(false);
//       setTypedCity("");
//     }
//   };

//   return (
//     <View style={styles.container}>
//       {/* 1st Row: Profile & Location */}
//       <View style={styles.header}>
//         <View style={styles.row}>
//           <TouchableOpacity style={styles.profileImg} onPress={() => navigation.navigate('ProfileScreen')}>
//              {userData?.profileImage ? (
//                 <Image source={{ uri: userData.profileImage }} style={styles.fullImg} />
//              ) : (
//                 <Ionicons name="person" size={20} color="#999" />
//              )}
//           </TouchableOpacity>
//           <View style={{ marginLeft: 10 }}>
//             <Text style={styles.hiText}>Hi <Text style={styles.nameText}>{getFirstName(userData?.fullName)}</Text></Text>
//           </View>
//         </View>

//         {/* --- 🚀 लोकेशन क्लिक पर मोडल खुलेगा --- */}
//         <TouchableOpacity 
//           style={styles.row} 
//           onPress={() => setModalVisible(true)}
//           activeOpacity={0.7}
//         >
//           <Ionicons name="location-sharp" size={16} color="#EF4444" />
//           <Text style={styles.locText} numberOfLines={1}>
//              {cityName}
//           </Text>
//         </TouchableOpacity>
//       </View>

//       <TopServices />

//       {/* 2nd Row: Search Bar & Icons */}
//       <View style={styles.searchSection}>
//         <TouchableOpacity activeOpacity={0.9} style={styles.searchBar} onPress={() => navigation.navigate('SearchScreen')}>
//           <Ionicons name="search-outline" size={20} color="gray" style={{marginRight: 8}} />
//           <Text style={styles.placeholderText}>Search Brand, Model or City...</Text>
//         </TouchableOpacity>

//         <View style={styles.iconGroup}>
//           <TouchableOpacity style={styles.iconBtn} onPress={() => navigation.navigate('WishlistScreen')}>
//             <View>
//               <Ionicons name="heart-outline" size={24} color="black" />
//               {wishlistCount > 0 && (
//                 <View style={styles.badgeContainer}>
//                   <Text style={styles.badgeText}>{wishlistCount > 9 ? '9+' : wishlistCount}</Text>
//                 </View>
//               )}
//             </View>
//           </TouchableOpacity>

//           <TouchableOpacity style={styles.iconBtn} onPress={() => navigation.navigate('NotificationScreen')}>
//             <Ionicons name="notifications-outline" size={24} color="black" />
//           </TouchableOpacity>
//         </View>
//       </View>

//       {/* --- 🚀 Location Change Modal --- */}
//       <Modal
//         visible={isModalVisible}
//         transparent={true}
//         animationType="fade"
//         onRequestClose={() => setModalVisible(false)}
//       >
//         <TouchableWithoutFeedback onPress={() => setModalVisible(false)}>
//           <View style={styles.modalOverlay}>
//             <TouchableWithoutFeedback>
//               <View style={styles.modalContent}>
//                 <Text style={styles.modalTitle}>Change Location</Text>
//                 <Text style={styles.modalSub}>Enter city name to see available cars</Text>

//                 <View style={styles.inputBox}>
//                   <Ionicons name="search" size={18} color="gray" />
//                   <TextInput 
//                     placeholder="Enter city (e.g. Bhopal)" 
//                     style={styles.textInput}
//                     value={typedCity}
//                     onChangeText={setTypedCity}
//                     autoFocus={true}
//                     onSubmitEditing={handleCitySubmit}
//                   />
//                 </View>

//                 <View style={styles.btnRow}>
//                   <TouchableOpacity style={styles.gpsBtn} onPress={() => { onLocationPress(); setModalVisible(false); }}>
//                     <Ionicons name="locate" size={18} color={Colors.primary} />
//                     <Text style={styles.gpsText}>Use GPS</Text>
//                   </TouchableOpacity>

//                   <TouchableOpacity style={styles.searchBtn} onPress={handleCitySubmit}>
//                     <Text style={styles.searchBtnText}>Search</Text>
//                   </TouchableOpacity>
//                 </View>
//               </View>
//             </TouchableWithoutFeedback>
//           </View>
//         </TouchableWithoutFeedback>
//       </Modal>

//     </View>
//   );
// };

// export default HomeHeader;

// const styles = StyleSheet.create({
//   container: { backgroundColor: Colors.white, paddingBottom: 5 },
//   header: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginTop: 10 },
//   row: { flexDirection: 'row', alignItems: 'center' },
//   profileImg: { width: 35, height: 35, borderRadius: 20, backgroundColor: '#F2F4F7', justifyContent: 'center', alignItems: 'center', borderWidth: 1, borderColor: '#E0E0E0', overflow: 'hidden' },
//   fullImg: { width: '100%', height: '100%', resizeMode: 'cover' },
//   hiText: { fontSize: 16, fontFamily: Fonts.regular, color: 'black' },
//   nameText: { color: Colors.secondary, fontFamily: Fonts.bold },
//   locText: { fontSize: 11, marginLeft: 3, fontFamily: Fonts.medium, color: '#666', maxWidth: 120 },
//   searchSection: { flexDirection: 'row', alignItems: 'center', marginTop: 10, justifyContent: 'space-between' },
//   searchBar: { flex: 1, height: 48, backgroundColor: '#F9FAFB', borderRadius: 12, flexDirection: 'row', alignItems: 'center', paddingHorizontal: 12, borderWidth: 1, borderColor: '#E5E7EB' },
//   placeholderText: { flex: 1, color: 'gray', fontFamily: Fonts.regular, fontSize: 14 },
//   iconGroup: { flexDirection: 'row', alignItems: 'center', marginLeft: 10 },
//   iconBtn: { padding: 5, marginLeft: 5 },
//   badgeContainer: { position: 'absolute', top: -5, right: -5, backgroundColor: '#EF4444', minWidth: 16, height: 16, borderRadius: 8, justifyContent: 'center', alignItems: 'center', borderWidth: 1.5, borderColor: 'white' },
//   badgeText: { color: 'white', fontSize: 9, fontFamily: Fonts.bold, textAlign: 'center' },

//   // --- Modal Styles ---
//   modalOverlay: { flex: 1, backgroundColor: 'rgba(0,0,0,0.5)', justifyContent: 'center', alignItems: 'center' },
//   modalContent: { width: width * 0.85, backgroundColor: 'white', borderRadius: 20, padding: 25, elevation: 10 },
//   modalTitle: { fontFamily: Fonts.bold, fontSize: 20, color: 'black' },
//   modalSub: { fontFamily: Fonts.regular, fontSize: 13, color: 'gray', marginTop: 5 },
//   inputBox: { flexDirection: 'row', alignItems: 'center', backgroundColor: '#F3F4F6', borderRadius: 12, paddingHorizontal: 15, height: 50, marginTop: 20, borderWidth: 1, borderColor: '#E5E7EB' },
//   textInput: { flex: 1, marginLeft: 10, fontFamily: Fonts.medium, color: 'black' },
//   btnRow: { flexDirection: 'row', marginTop: 20, justifyContent: 'space-between' },
//   gpsBtn: { flexDirection: 'row', alignItems: 'center', padding: 10 },
//   gpsText: { marginLeft: 5, color: Colors.primary, fontFamily: Fonts.bold },
//   searchBtn: { backgroundColor: Colors.secondary, paddingHorizontal: 25, paddingVertical: 12, borderRadius: 10 },
//   searchBtnText: { color: 'white', fontFamily: Fonts.bold }
// });


























// import React, { useState } from 'react';
// import {
//   View,
//   Text,
//   TouchableOpacity,
//   StyleSheet,
//   Image,
//   Modal,
//   TextInput,
//   TouchableWithoutFeedback,
//   Dimensions
// } from 'react-native';
// import Ionicons from "@react-native-vector-icons/ionicons";
// import { useSelector } from 'react-redux';
// import { Colors } from '../../theme/colors';
// import { Fonts } from '../../theme/fonts';
// import { useNavigation } from '@react-navigation/native';
// import { RootState } from '../../redux/store';
// import TopServices from './TopServices';

// const { width } = Dimensions.get('window');

// interface HomeHeaderProps {
//   cityName: string;
//   onLocationPress: () => void;
//   onManualCitySearch: (city: string) => void;
//   onResetToAllIndia: () => void;
// }

// const HomeHeader = ({ cityName, onLocationPress, onManualCitySearch, onResetToAllIndia }: HomeHeaderProps) => {
//   const navigation = useNavigation<any>();
//   const [isModalVisible, setModalVisible] = useState(false);
//   const [typedCity, setTypedCity] = useState("");

//   const userData = useSelector((state: RootState) => state.auth.userData);
//   const wishlistCount = useSelector((state: RootState) => state.wishlist.items.length);

//   const getFirstName = (fullName: string | undefined) => {
//     if (!fullName) return "User";
//     return fullName.trim().split(' ')[0];
//   };

//   const handleCitySubmit = () => {
//     if (typedCity.trim().length > 0) {
//       onManualCitySearch(typedCity.trim());
//       setModalVisible(false);
//       setTypedCity("");
//     }
//   };

//   return (
//     <View style={styles.container}>
//       {/* 1st Row: Profile & Location */}
//       <View style={styles.header}>
//         <View style={styles.row}>
//           {/* <TouchableOpacity style={styles.profileImg} onPress={() => navigation.navigate('ProfileScreen')}> */}
//           <TouchableOpacity style={styles.profileImg} >
//             {userData?.profileImage ? (
//               <Image source={{ uri: userData.profileImage }} style={styles.fullImg} />
//             ) : (
//               <Ionicons name="person" size={20} color="#999" />
//             )}
//           </TouchableOpacity>
//           <View style={{ marginLeft: 10 }}>
//             <Text style={styles.hiText}>Hi <Text style={styles.nameText}>{getFirstName(userData?.fullName)}</Text></Text>
//           </View>
//         </View>

//         {/* लोकेशन डिस्प्ले (क्लिक करने पर मोडल खुलेगा) */}
//         <TouchableOpacity
//           style={styles.row}
//           onPress={() => setModalVisible(true)}
//           activeOpacity={0.7}
//         >
//           <Ionicons name="location-sharp" size={16} color="#EF4444" />
//           <Text style={styles.locText} numberOfLines={1}>
//             {cityName}
//           </Text>
//         </TouchableOpacity>
//       </View>

//       <TopServices />

//       {/* 2nd Row: Search Bar & Icons */}
//       <View style={styles.searchSection}>
//         <TouchableOpacity activeOpacity={0.9} style={styles.searchBar} onPress={() => navigation.navigate('SearchScreen')}>
//           <Ionicons name="search-outline" size={20} color="gray" style={{ marginRight: 8 }} />
//           <Text style={styles.placeholderText}>Search Brand, Model or City...</Text>
//         </TouchableOpacity>

//         <View style={styles.iconGroup}>
//           <TouchableOpacity style={styles.iconBtn} onPress={() => navigation.navigate('WishlistScreen')}>
//             <View>
//               <Ionicons name="heart-outline" size={24} color="black" />
//               {wishlistCount > 0 && (
//                 <View style={styles.badgeContainer}>
//                   <Text style={styles.badgeText}>{wishlistCount > 9 ? '9+' : wishlistCount}</Text>
//                 </View>
//               )}
//             </View>
//           </TouchableOpacity>

//           <TouchableOpacity style={styles.iconBtn} onPress={() => navigation.navigate('NotificationScreen')}>
//             <Ionicons name="notifications-outline" size={24} color="black" />
//           </TouchableOpacity>
//         </View>
//       </View>

//       {/* Location Change Modal */}
//       <Modal
//         visible={isModalVisible}
//         transparent={true}
//         animationType="fade"
//         onRequestClose={() => setModalVisible(false)}
//       >
//         <TouchableWithoutFeedback onPress={() => setModalVisible(false)}>
//           <View style={styles.modalOverlay}>
//             <TouchableWithoutFeedback>
//               <View style={styles.modalContent}>
//                 <Text style={styles.modalTitle}>Change Location</Text>
//                 <Text style={styles.modalSub}>Enter city name to see available cars</Text>

//                 <View style={styles.inputBox}>
//                   <Ionicons name="search" size={18} color="gray" />
//                   <TextInput
//                     placeholder="Enter city (e.g. Bhopal)"
//                     style={styles.textInput}
//                     value={typedCity}
//                     onChangeText={setTypedCity}
//                     autoFocus={true}
//                     onSubmitEditing={handleCitySubmit}
//                   />
//                 </View>

//                 <View style={styles.btnRow}>
//                   {/* 🚀 बदलाव 1: "Use GPS" को "Detect Current Location" किया गया और resetToGPS से कनेक्ट किया गया */}
//                   <TouchableOpacity
//                     style={styles.allIndiaBtn}
//                     onPress={() => {
//                       onResetToAllIndia();
//                       setModalVisible(false);
//                     }}
//                   >
//                     <Ionicons name="globe-outline" size={18} color="#2563EB" />
//                     <Text style={styles.allIndiaText}>
//                       All India
//                     </Text>
//                   </TouchableOpacity>
//                   <TouchableOpacity
//                     style={styles.gpsBtn}
//                     onPress={() => { onLocationPress(); setModalVisible(false); }}
//                   >
//                     <Ionicons name="locate" size={18} color={Colors.primary} />
//                     <Text style={styles.gpsText}>Use Current Location</Text>
//                   </TouchableOpacity>

//                   <TouchableOpacity style={styles.searchBtn} onPress={handleCitySubmit}>
//                     <Text style={styles.searchBtnText}>Search</Text>
//                   </TouchableOpacity>
//                 </View>
//               </View>
//             </TouchableWithoutFeedback>
//           </View>
//         </TouchableWithoutFeedback>
//       </Modal>

//     </View>
//   );
// };

// export default HomeHeader;

// const styles = StyleSheet.create({
//   container: { backgroundColor: Colors.white, paddingBottom: 5 },
//   header: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginTop: 10 },
//   row: { flexDirection: 'row', alignItems: 'center' },
//   profileImg: { width: 35, height: 35, borderRadius: 20, backgroundColor: '#F2F4F7', justifyContent: 'center', alignItems: 'center', borderWidth: 1, borderColor: '#E0E0E0', overflow: 'hidden' },
//   fullImg: { width: '100%', height: '100%', resizeMode: 'cover' },
//   hiText: { fontSize: 16, fontFamily: Fonts.regular, color: 'black' },
//   nameText: { color: Colors.secondary, fontFamily: Fonts.bold },
//   locText: { fontSize: 11, marginLeft: 3, fontFamily: Fonts.medium, color: '#666', maxWidth: 120 },
//   searchSection: { flexDirection: 'row', alignItems: 'center', marginTop: 10, justifyContent: 'space-between' },
//   searchBar: { flex: 1, height: 48, backgroundColor: '#F9FAFB', borderRadius: 12, flexDirection: 'row', alignItems: 'center', paddingHorizontal: 12, borderWidth: 1, borderColor: '#E5E7EB' },
//   placeholderText: { flex: 1, color: 'gray', fontFamily: Fonts.regular, fontSize: 14 },
//   iconGroup: { flexDirection: 'row', alignItems: 'center', marginLeft: 10 },
//   iconBtn: { padding: 5, marginLeft: 5 },
//   badgeContainer: { position: 'absolute', top: -5, right: -5, backgroundColor: '#EF4444', minWidth: 16, height: 16, borderRadius: 8, justifyContent: 'center', alignItems: 'center', borderWidth: 1.5, borderColor: 'white' },
//   badgeText: { color: 'white', fontSize: 9, fontFamily: Fonts.bold, textAlign: 'center' },

//   // --- Modal Styles ---
//   modalOverlay: { flex: 1, backgroundColor: 'rgba(0,0,0,0.5)', justifyContent: 'center', alignItems: 'center' },
//   modalContent: { width: width * 0.85, backgroundColor: 'white', borderRadius: 20, padding: 25, elevation: 10 },
//   modalTitle: { fontFamily: Fonts.bold, fontSize: 20, color: 'black' },
//   modalSub: { fontFamily: Fonts.regular, fontSize: 13, color: 'gray', marginTop: 5 },
//   inputBox: { flexDirection: 'row', alignItems: 'center', backgroundColor: '#F3F4F6', borderRadius: 12, paddingHorizontal: 15, height: 50, marginTop: 20, borderWidth: 1, borderColor: '#E5E7EB' },
//   textInput: { flex: 1, marginLeft: 10, fontFamily: Fonts.medium, color: 'black' },
//   btnRow: { flexDirection: 'row', marginTop: 20, justifyContent: 'space-between' },
//   gpsBtn: { flexDirection: 'row', alignItems: 'center', padding: 10 },
//   gpsText: { marginLeft: 5, color: Colors.primary, fontFamily: Fonts.bold },
//   searchBtn: { backgroundColor: Colors.secondary, paddingHorizontal: 15, paddingVertical: 10, borderRadius: 10 },
//   searchBtnText: { color: 'white', fontFamily: Fonts.bold },
//   allIndiaBtn: {
//   marginTop: 15,
//   flexDirection: 'row',
//   alignItems: 'center',
//   justifyContent: 'center',
//   borderWidth: 1,
//   borderColor: '#DBEAFE',
//   backgroundColor: '#EFF6FF',
//   borderRadius: 12,
//   paddingVertical: 14,
// },

// allIndiaText: {
//   marginLeft: 8,
//   color: '#2563EB',
//   fontFamily: Fonts.bold,
// },
// });
























import React, { useState } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Image,
  Modal,
  TextInput,
  TouchableWithoutFeedback,
  Dimensions
} from 'react-native';
import Ionicons from "@react-native-vector-icons/ionicons";
import { useSelector } from 'react-redux';
import { Colors } from '../../theme/colors';
import { Fonts } from '../../theme/fonts';
import { useNavigation } from '@react-navigation/native';
import { RootState } from '../../redux/store';
import TopServices from './TopServices';

const { width } = Dimensions.get('window');

interface HomeHeaderProps {
  cityName: string;
  onLocationPress: () => void;
  onManualCitySearch: (city: string) => void;
  onResetToAllIndia: () => void;
}

const HomeHeader = ({ cityName, onLocationPress, onManualCitySearch, onResetToAllIndia }: HomeHeaderProps) => {
  const navigation = useNavigation<any>();
  const [isModalVisible, setModalVisible] = useState(false);
  const [typedCity, setTypedCity] = useState("");

  const userData = useSelector((state: RootState) => state.auth.userData);
  const wishlistCount = useSelector((state: RootState) => state.wishlist.items.length);

  const getFirstName = (fullName: string | undefined) => {
    if (!fullName) return "User";
    return fullName.trim().split(' ')[0];
  };

  const handleCitySubmit = () => {
    if (typedCity.trim().length > 0) {
      onManualCitySearch(typedCity.trim());
      setModalVisible(false);
      setTypedCity("");
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View style={styles.row}>
          <TouchableOpacity style={styles.profileImg} onPress={() => navigation.navigate('ProfileScreen')}>
            {userData?.profileImage ? (
              <Image source={{ uri: userData.profileImage }} style={styles.fullImg} />
            ) : (
              <Ionicons name="person" size={20} color="#999" />
            )}
          </TouchableOpacity>
          <View style={{ marginLeft: 10 }}>
            <Text style={styles.hiText}>Hi <Text style={styles.nameText}>{getFirstName(userData?.fullName)}</Text></Text>
          </View>
        </View>

        <TouchableOpacity
          style={styles.row}
          onPress={() => setModalVisible(true)}
          activeOpacity={0.7}
        >
          <Ionicons name="location-sharp" size={16} color="#EF4444" />
          <Text style={styles.locText} numberOfLines={1}>
            {cityName}
          </Text>
        </TouchableOpacity>
      </View>

      <TopServices />

      <View style={styles.searchSection}>
        <TouchableOpacity activeOpacity={0.9} style={styles.searchBar} onPress={() => navigation.navigate('SearchScreen')}>
          <Ionicons name="search-outline" size={20} color="gray" style={{ marginRight: 8 }} />
          <Text style={styles.placeholderText}>Search Brand, Model or City...</Text>
        </TouchableOpacity>

        <View style={styles.iconGroup}>
          <TouchableOpacity style={styles.iconBtn} onPress={() => navigation.navigate('WishlistScreen')}>
            <View>
              <Ionicons name="heart-outline" size={24} color="black" />
              {wishlistCount > 0 && (
                <View style={styles.badgeContainer}>
                  <Text style={styles.badgeText}>{wishlistCount > 9 ? '9+' : wishlistCount}</Text>
                </View>
              )}
            </View>
          </TouchableOpacity>

          <TouchableOpacity style={styles.iconBtn} onPress={() => navigation.navigate('NotificationScreen')}>
            <Ionicons name="notifications-outline" size={24} color="black" />
          </TouchableOpacity>
        </View>
      </View>

      <Modal visible={isModalVisible} transparent={true} animationType="fade" onRequestClose={() => setModalVisible(false)}>
        <TouchableWithoutFeedback onPress={() => setModalVisible(false)}>
          <View style={styles.modalOverlay}>
            <TouchableWithoutFeedback>
              <View style={styles.modalContent}>
                <Text style={styles.modalTitle}>Change Location</Text>
                <Text style={styles.modalSub}>Enter city name to see available cars</Text>

                <View style={styles.inputBox}>
                  <Ionicons name="search" size={18} color="gray" />
                  <TextInput
                    placeholder="Enter city (e.g. Bhopal)"
                    style={styles.textInput}
                    value={typedCity}
                    onChangeText={setTypedCity}
                    autoFocus={true}
                    onSubmitEditing={handleCitySubmit}
                    placeholderTextColor="#9CA3AF"
                  />
                </View>

                {/* 🚀 Row 1: All India & Search */}
                <View style={styles.actionRow}>
                  <TouchableOpacity
                    style={styles.halfBtn}
                    onPress={() => {
                      onResetToAllIndia();
                      setModalVisible(false);
                    }}
                  >
                    <Ionicons name="globe-outline" size={18} color="#2563EB" />
                    <Text style={styles.blueBtnText}>All India</Text>
                  </TouchableOpacity>

                  <TouchableOpacity style={styles.searchActionBtn} onPress={handleCitySubmit}>
                    <Text style={styles.searchBtnText}>Search</Text>
                  </TouchableOpacity>
                </View>

                <View style={styles.dividerRow}>
                    <View style={styles.line} />
                    <Text style={styles.orText}>OR</Text>
                    <View style={styles.line} />
                </View>

                {/* 🚀 Row 2: GPS niche akela */}
                <TouchableOpacity
                  style={styles.gpsFullBtn}
                  onPress={() => { onLocationPress(); setModalVisible(false); }}
                >
                  <Ionicons name="locate" size={20} color={Colors.primary} />
                  <Text style={styles.gpsFullText}>Use Current Location (GPS)</Text>
                </TouchableOpacity>

              </View>
            </TouchableWithoutFeedback>
          </View>
        </TouchableWithoutFeedback>
      </Modal>
    </View>
  );
};

export default HomeHeader;

const styles = StyleSheet.create({
  container: { backgroundColor: Colors.white, paddingBottom: 5 },
  header: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginTop: 10 },
  row: { flexDirection: 'row', alignItems: 'center' },
  profileImg: { width: 35, height: 35, borderRadius: 20, backgroundColor: '#F2F4F7', justifyContent: 'center', alignItems: 'center', borderWidth: 1, borderColor: '#E0E0E0', overflow: 'hidden' },
  fullImg: { width: '100%', height: '100%', resizeMode: 'cover' },
  hiText: { fontSize: 16, fontFamily: Fonts.regular, color: 'black' },
  nameText: { color: Colors.secondary, fontFamily: Fonts.bold },
  locText: { fontSize: 11, marginLeft: 3, fontFamily: Fonts.medium, color: '#666', maxWidth: 120 },
  searchSection: { flexDirection: 'row', alignItems: 'center', marginTop: 10, justifyContent: 'space-between' },
  searchBar: { flex: 1, height: 48, backgroundColor: '#F9FAFB', borderRadius: 12, flexDirection: 'row', alignItems: 'center', paddingHorizontal: 12, borderWidth: 1, borderColor: '#E5E7EB' },
  placeholderText: { flex: 1, color: 'gray', fontFamily: Fonts.regular, fontSize: 14 },
  iconGroup: { flexDirection: 'row', alignItems: 'center', marginLeft: 10 },
  iconBtn: { padding: 5, marginLeft: 5 },
  badgeContainer: { position: 'absolute', top: -5, right: -5, backgroundColor: '#EF4444', minWidth: 16, height: 16, borderRadius: 8, justifyContent: 'center', alignItems: 'center', borderWidth: 1.5, borderColor: 'white' },
  badgeText: { color: 'white', fontSize: 9, fontFamily: Fonts.bold, textAlign: 'center' },

  // --- Modal Styles ---
  modalOverlay: { flex: 1, backgroundColor: 'rgba(0,0,0,0.5)', justifyContent: 'center', alignItems: 'center' },
  modalContent: { width: width * 0.88, backgroundColor: 'white', borderRadius: 24, padding: 25, elevation: 15 },
  modalTitle: { fontFamily: Fonts.bold, fontSize: 20, color: 'black' },
  modalSub: { fontFamily: Fonts.regular, fontSize: 13, color: 'gray', marginTop: 4 },
  inputBox: { flexDirection: 'row', alignItems: 'center', backgroundColor: '#F3F4F6', borderRadius: 12, paddingHorizontal: 15, height: 52, marginTop: 20, borderWidth: 1, borderColor: '#E5E7EB' },
  textInput: { flex: 1, marginLeft: 10, fontFamily: Fonts.medium, color: 'black' },
  
  actionRow: { flexDirection: 'row', marginTop: 15, justifyContent: 'space-between' },
  halfBtn: { flex: 1, flexDirection: 'row', alignItems: 'center', justifyContent: 'center', backgroundColor: '#EFF6FF', borderRadius: 12, height: 50, marginRight: 10, borderWidth: 1, borderColor: '#DBEAFE' },
  searchActionBtn: { flex: 1, backgroundColor: Colors.secondary, borderRadius: 12, height: 50, alignItems: 'center', justifyContent: 'center', elevation: 2 },
  
  blueBtnText: { marginLeft: 8, color: '#2563EB', fontFamily: Fonts.bold, fontSize: 14 },
  searchBtnText: { color: 'white', fontFamily: Fonts.bold, fontSize: 15 },

  dividerRow: { flexDirection: 'row', alignItems: 'center', marginVertical: 15 },
  line: { flex: 1, height: 1, backgroundColor: '#E5E7EB' },
  orText: { marginHorizontal: 10, color: '#9CA3AF', fontSize: 11, fontFamily: Fonts.bold },

  gpsFullBtn: { flexDirection: 'row', alignItems: 'center', justifyContent: 'center', backgroundColor: '#F8F9FA', borderRadius: 12, height: 55, borderWidth: 1, borderColor: '#E5E7EB', borderStyle: 'dashed' },
  gpsFullText: { marginLeft: 10, color: Colors.primary, fontFamily: Fonts.bold, fontSize: 14 },
});