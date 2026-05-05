// import React from 'react';
// import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native'; // Image जोड़ें
// import Ionicons from "@react-native-vector-icons/ionicons";
// import { useSelector } from 'react-redux';
// import { Colors } from '../../theme/colors';
// import { Fonts } from '../../theme/fonts';
// import { useNavigation } from '@react-navigation/native';
// import { RootState } from '../../redux/store';
// import TopServices from './TopServices';

// const HomeHeader = () => {
//   const navigation = useNavigation<any>();

//   // --- 1. Redux से यूजर का लेटेस्ट डेटा निकालें ---
//   const userData = useSelector((state: RootState) => state.auth.userData);
//   const wishlistCount = useSelector((state: RootState) => state.wishlist.items.length);

//   // --- 2. फर्स्ट नेम निकालने का लॉजिक (Exact Match) ---
//   const getFirstName = (fullName: string | undefined) => {
//     if (!fullName) return "User";
//     // नाम को स्पेस से तोड़ें और पहला हिस्सा (Index 0) लें
//     return fullName.trim().split(' ')[0]; 
//   };

//   return (
//     <View style={styles.container}>
//       {/* 1st Row: Profile & Location */}
//       <View style={styles.header}>
//         <View style={styles.row}>
//           {/* --- प्रोफाइल इमेज: अब यह डायनामिक है --- */}
//           <TouchableOpacity 
//             style={styles.profileImg} 
//             // onPress={() => navigation.navigate('ProfileScreen')}
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
//                 {/* --- डायनामिक फर्स्ट नेम डिस्प्ले --- */}
//                 {getFirstName(userData?.fullName)}
//               </Text>
//             </Text>
//           </View>
//         </View>

//         <View style={styles.row}>
//           <Ionicons name="location-sharp" size={16} color="#EF4444" />
//           <Text style={styles.locText}>Vijay Nagar Indore</Text>
//         </View>
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
//     overflow: 'hidden' // इमेज को गोल रखने के लिए
//   },
//   fullImg: {
//     width: '100%',
//     height: '100%',
//     resizeMode: 'cover'
//   },
//   hiText: { fontSize: 16, fontFamily: Fonts.regular, color: 'black' },
//   nameText: { color: Colors.secondary, fontFamily: Fonts.bold },
//   locText: { fontSize: 11, marginLeft: 3, fontFamily: Fonts.medium, color: '#666' },
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
























import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native';
import Ionicons from "@react-native-vector-icons/ionicons";
import { useSelector } from 'react-redux';
import { Colors } from '../../theme/colors';
import { Fonts } from '../../theme/fonts';
import { useNavigation } from '@react-navigation/native';
import { RootState } from '../../redux/store';
import TopServices from './TopServices';

interface HomeHeaderProps {
  cityName: string;
  onLocationPress: () => void; // क्लिक हैंडलर
}

const HomeHeader = ({ cityName, onLocationPress }: HomeHeaderProps) => {
  const navigation = useNavigation<any>();

  const userData = useSelector((state: RootState) => state.auth.userData);
  const wishlistCount = useSelector((state: RootState) => state.wishlist.items.length);

  const getFirstName = (fullName: string | undefined) => {
    if (!fullName) return "User";
    return fullName.trim().split(' ')[0]; 
  };

  return (
    <View style={styles.container}>
      {/* 1st Row: Profile & Location */}
      <View style={styles.header}>
        <View style={styles.row}>
          <TouchableOpacity 
            style={styles.profileImg} 
            onPress={() => navigation.navigate('ProfileScreen')}
          >
             {userData?.profileImage ? (
                <Image source={{ uri: userData.profileImage }} style={styles.fullImg} />
             ) : (
                <Ionicons name="person" size={20} color="#999" />
             )}
          </TouchableOpacity>

          <View style={{ marginLeft: 10 }}>
            <Text style={styles.hiText}>
              Hi <Text style={styles.nameText}>{getFirstName(userData?.fullName)}</Text>
            </Text>
          </View>
        </View>

        {/* --- 🚀 क्लिक करने पर परमिशन या सेटिंग खुलेगी --- */}
        <TouchableOpacity 
          style={styles.row} 
          onPress={onLocationPress}
          activeOpacity={0.7}
        >
          <Ionicons name="location-sharp" size={16} color="#EF4444" />
          <Text style={styles.locText} numberOfLines={1}>
             {cityName}
          </Text>
        </TouchableOpacity>
      </View>

      <TopServices />

      {/* 2nd Row: Search Bar & Icons */}
      <View style={styles.searchSection}>
        <TouchableOpacity 
          activeOpacity={0.9}
          style={styles.searchBar} 
          onPress={() => navigation.navigate('SearchScreen')}
        >
          <Ionicons name="search-outline" size={20} color="gray" style={{marginRight: 8}} />
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
});