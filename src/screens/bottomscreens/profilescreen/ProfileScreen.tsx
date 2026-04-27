// import { StyleSheet, Text, View } from 'react-native'
// import React from 'react'

// const ProfileScreen = () => {
//   return (
//     <View>
//       <Text>ProfileScreen</Text>
//     </View>
//   )
// }

// export default ProfileScreen

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
// import { Colors } from "../../../theme/colors";
// import { Fonts } from "../../../theme/fonts";
// import { SafeAreaView } from "react-native-safe-area-context";

// const ProfileScreen = ({ navigation }: any) => {

//   // मेनु आइटम्स की लिस्ट
//   const menuItems = [
//     { id: '1', label: 'Favorites', icon: 'heart-outline' },
//     { id: '2', label: 'Tell your friends', icon: 'person-outline' },
//     { id: '3', label: 'Setting', icon: 'create-outline' },
//     { id: '4', label: 'Logout', icon: 'log-out-outline' },
//   ] as const;

//   return (
//     <SafeAreaView style={styles.safeArea}>
//       {/* Header Back Button */}
//       <View style={styles.header}>
//         <TouchableOpacity onPress={() => navigation.goBack()}>
//           <Ionicons name="chevron-back" size={30} color={Colors.black} />
//         </TouchableOpacity>
//       </View>

//       <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={styles.scrollContent}>

//         {/* --- Profile Info Section --- */}
//         <View style={styles.profileSection}>
//           <View style={styles.imageWrapper}>
//             {/* <Image 
//               source={{ uri: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1887&auto=format&fit=crop' }} 
//               style={styles.profileImage} 
//             /> */}
//             <Image 
//     // अपनी इमेज का सही पाथ यहाँ डालें (Relative Path)
//     source={require("../../../assets/images/imageslogo.png")} 
//     style={styles.profileImage} 
//     resizeMode="cover" // लोगो या इमेज को फिट करने के लिए
//   />
//             {/* Image Edit Icon */}
//             <TouchableOpacity style={styles.imageEditBtn}>
//                <Ionicons name="pencil" size={16} color={Colors.secondary} />
//             </TouchableOpacity>
//           </View>

//           <View style={styles.nameContainer}>
//             <View>
//               <Text style={styles.userName}>Sayan Saha</Text>
//               <Text style={styles.userRole}>Buyer / Seller</Text>
//             </View>
//             {/* Name Edit Icon */}
//             {/* <TouchableOpacity style={styles.nameEditBtn}>
//                <Ionicons name="pencil" size={16} color={Colors.secondary} />
//             </TouchableOpacity> */}
//           </View>

//           {/* Contact Details */}
//           <View style={styles.contactRow}>
//             <Ionicons name="call-outline" size={24} color={Colors.primary} />
//             <Text style={styles.contactText}>+91 89107 - 95286</Text>
//           </View>

//           <View style={styles.contactRow}>
//             <Ionicons name="chatbubble-outline" size={24} color={Colors.primary} />
//             <Text style={styles.contactText}>Sayan.ccc78@gmail.com</Text>
//           </View>
//         </View>

//         {/* --- Menu Options List --- */}
//         <View style={styles.menuSection}>
//           {menuItems.map((item) => (
//             <TouchableOpacity key={item.id} style={styles.menuItem}>
//               <View style={styles.menuIconWrapper}>
//                 <Ionicons name={item.icon} size={28} color={Colors.secondary} />
//               </View>
//               <Text style={styles.menuLabel}>{item.label}</Text>
//             </TouchableOpacity>
//           ))}
//         </View>

//         {/* Padding for Bottom Tab Bar */}
//         <View style={{ height: 120 }} />
//       </ScrollView>
//     </SafeAreaView>
//   );
// };

// export default ProfileScreen;

// const styles = StyleSheet.create({
//   safeArea: { flex: 1, backgroundColor: Colors.white },
//   header: { paddingHorizontal: 15, paddingVertical: 10 },
//   scrollContent: { paddingHorizontal: 30 },

//   profileSection: {
//     alignItems: "flex-start",
//     marginTop: 10,
//   },
//   imageWrapper: {
//     position: 'relative',
//     marginBottom: 20,
//   },
//   // profileImage: {
//   //   width: 140,
//   //   height: 140,
//   //   borderRadius: 70,
//   //   backgroundColor: '#008080', // फिग्मा जैसा टील कलर
//   // },
//   profileImage: {
//   width: 120,
//   height: 120,
//   borderRadius: 60,
//   backgroundColor: Colors.primary, // अगर ज़रूरत न हो तो इसे कमेंट कर दें
// },
//   imageEditBtn: {
//     position: 'absolute',
//     bottom: 5,
//     right: 5,
//     backgroundColor: Colors.white,
//     padding: 8,
//     borderRadius: 20,
//     elevation: 5,
//     shadowColor: '#000',
//     shadowOffset: { width: 0, height: 2 },
//     shadowOpacity: 0.2,
//     shadowRadius: 3,
//   },

//   nameContainer: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     justifyContent: 'space-between',
//     width: '100%',
//     marginBottom: 30,
//   },
//   userName: {
//     fontFamily: Fonts.bold,
//     fontSize: 22,
//     color: Colors.black,
//   },
//   userRole: {
//     fontFamily: Fonts.regular,
//     fontSize: 14,
//     color: 'gray',
//     marginTop: 2,
//   },
//   nameEditBtn: {
//     backgroundColor: Colors.white,
//     padding: 10,
//     borderRadius: 25,
//     elevation: 3,
//     shadowColor: '#000',
//     shadowOffset: { width: 0, height: 1 },
//     shadowOpacity: 0.1,
//     shadowRadius: 2,
//   },

//   contactRow: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     marginBottom: 20,
//   },
//   contactText: {
//     marginLeft: 20,
//     fontFamily: Fonts.medium,
//     fontSize: 16,
//     color: 'gray',
//   },

//   menuSection: {
//     marginTop: 20,
//   },
//   menuItem: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     paddingVertical: 15,
//     marginBottom: 10,
//   },
//   menuIconWrapper: {
//     width: 50,
//     alignItems: 'flex-start',
//   },
//   menuLabel: {
//     fontFamily: Fonts.medium,
//     fontSize: 18,
//     color: Colors.black,
//     marginLeft: 5,
//   },
// });























// import React from "react";
// import {
//   View,
//   Text,
//   StyleSheet,
//   Image,
//   TouchableOpacity,
//   ScrollView,
//   Share, // ऐप शेयर करने के लिए
//   Alert, // लॉगआउट कन्फर्मेशन के लिए
// } from "react-native";
// import Ionicons from "@react-native-vector-icons/ionicons";
// import { Colors } from "../../../theme/colors";
// import { Fonts } from "../../../theme/fonts";
// import { SafeAreaView } from "react-native-safe-area-context";
// import { CommonActions } from '@react-navigation/native';
// import AsyncStorage from "@react-native-async-storage/async-storage";

// const ProfileScreen = ({ navigation }: any) => {

//   // --- फंक्शन: ऐप शेयर करना ---
//   const handleShareApp = async () => {
//     try {
//       await Share.share({
//         message: 'Hey! Check out Just2Car app for the best car deals! Download now and find your dream car.',
//         title: 'Just2Car App',
//       });
//     } catch (error: any) {
//       console.log(error.message);
//     }
//   };

//   // --- फंक्शन: लॉगआउट ---
//   const handleLogout = () => {
//     Alert.alert(
//       "Logout",
//       "Are you sure you want to logout from Just2Car?",
//       [
//         { text: "Cancel", style: "cancel" },
//         {
//           text: "Logout",
//           style: "destructive",
//           // onPress: () => {
//           //   // स्टैक को रिसेट करें ताकि यूज़र वापस न आ सके
//           //   navigation.reset({
//           //     index: 0,
//           //     routes: [{ name: 'LoginScreen' }],
//           //   });
//           // }
//            onPress: async () => { 
//           try {
//             // अब आप यहाँ await इस्तेमाल कर सकते हैं
//             await AsyncStorage.removeItem('userToken');
//             await AsyncStorage.removeItem('userData');

//             navigation.reset({
//               index: 0,
//               routes: [{ name: 'LoginScreen' }],
//             });
//           } catch (error) {
//             console.log("Logout Error:", error);
//           }
//         }
//         }
//       ]
//     );
//   };

//   const menuItems = [
//     { id: 'fav', label: 'Favorites', icon: 'heart-outline' },
//     { id: 'about', label: 'About Us', icon: 'information-circle-outline' },
//     { id: 'share', label: 'Tell your friends', icon: 'person-add-outline' },
//     { id: 'privacy', label: 'Privacy Policy', icon: 'lock-closed-outline' },
//     { id: 'terms', label: 'Terms and Conditions', icon: 'document-text-outline' },
//     { id: 'logout', label: 'Logout', icon: 'log-out-outline' },
//   ] as const;

//   // क्लिक हैंडलर लॉजिक
//   const onMenuPress = (id: string) => {
//     if (id === 'fav') navigation.navigate('WishlistScreen');
//     else if (id === 'share') handleShareApp();
//     else if (id === 'about') navigation.navigate('AboutUsScreen');
//     else if (id === 'terms') navigation.navigate('TermsAndConditionsScreen');
//     else if (id === 'privacy') navigation.navigate('PrivacyPolicyScreen');
//     else if (id === 'logout') handleLogout();
//   };

//   return (
//     <SafeAreaView style={styles.safeArea}>
//       {/* Header Back Button */}
//       <View style={styles.header}>
//         <TouchableOpacity onPress={() => navigation.goBack()}>
//           <Ionicons name="chevron-back" size={30} color={Colors.black} />
//         </TouchableOpacity>
//       </View>

//       <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={styles.scrollContent}>

//         {/* --- Profile Info Section --- */}
//         <View style={styles.profileSection}>
//           <View style={styles.imageWrapper}>
//             <Image
//               source={require("../../../assets/images/imageslogo.png")}
//               style={styles.profileImage}
//               resizeMode="cover"
//             />
//             {/* Image Edit Icon */}
//             <TouchableOpacity style={styles.imageEditBtn} onPress={ () => navigation.navigate("UpdateProfileScreen")} >  
//               <Ionicons name="pencil" size={16} color={Colors.secondary} />
//             </TouchableOpacity>
//           </View>

//           <View style={styles.nameContainer}>
//             <View>
//               <Text style={styles.userName}>Sayan Saha</Text>
//               <Text style={styles.userRole}>Buyer / Seller</Text>
//             </View>
//           </View>

//           {/* Contact Details */}
//           <View style={styles.contactRow}>
//             <Ionicons name="call-outline" size={24} color={Colors.primary} />
//             <Text style={styles.contactText}>+91 89107 - 95286</Text>
//           </View>

//           <View style={styles.contactRow}>
//             <Ionicons name="chatbubble-outline" size={24} color={Colors.primary} />
//             <Text style={styles.contactText}>Sayan.ccc78@gmail.com</Text>
//           </View>
//         </View>

//         {/* --- Menu Options List --- */}
//         <View style={styles.menuSection}>
//           {menuItems.map((item) => (
//             <TouchableOpacity
//               key={item.id}
//               style={styles.menuItem}
//               onPress={() => onMenuPress(item.id)}
//             >
//               <View style={styles.menuIconWrapper}>
//                 <Ionicons name={item.icon} size={28} color={Colors.secondary} />
//               </View>
//               <Text style={styles.menuLabel}>{item.label}</Text>
//             </TouchableOpacity>
//           ))}
//         </View>

//         {/* Space for Custom Bottom Tab Bar */}
//         <View style={{ height: 120 }} />
//       </ScrollView>
//     </SafeAreaView>
//   );
// };

// export default ProfileScreen;

// const styles = StyleSheet.create({
//   safeArea: { flex: 1, backgroundColor: Colors.white },
//   header: { paddingHorizontal: 15, paddingVertical: 10 },
//   scrollContent: { paddingHorizontal: 30 },

//   profileSection: {
//     alignItems: "flex-start",
//     marginTop: 10,
//   },
//   imageWrapper: {
//     position: 'relative',
//     marginBottom: 20,
//   },
//   profileImage: {
//     width: 120,
//     height: 120,
//     borderRadius: 60,
//     backgroundColor: Colors.primary,
//   },
//   imageEditBtn: {
//     position: 'absolute',
//     bottom: 5,
//     right: 5,
//     backgroundColor: Colors.white,
//     padding: 8,
//     borderRadius: 20,
//     elevation: 5,
//     shadowColor: '#000',
//     shadowOffset: { width: 0, height: 2 },
//     shadowOpacity: 0.2,
//     shadowRadius: 3,
//   },

//   nameContainer: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     justifyContent: 'space-between',
//     width: '100%',
//     marginBottom: 30,
//   },
//   userName: {
//     fontFamily: Fonts.bold,
//     fontSize: 24,
//     color: Colors.black,
//   },
//   userRole: {
//     fontFamily: Fonts.regular,
//     fontSize: 14,
//     color: 'gray',
//     marginTop: 2,
//   },

//   contactRow: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     marginBottom: 20,
//   },
//   contactText: {
//     marginLeft: 20,
//     fontFamily: Fonts.medium,
//     fontSize: 16,
//     color: 'gray',
//   },

//   menuSection: {
//     marginTop: 20,
//   },
//   menuItem: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     paddingVertical: 15,
//     marginBottom: 5,
//   },
//   menuIconWrapper: {
//     width: 50,
//     alignItems: 'flex-start',
//   },
//   menuLabel: {
//     fontFamily: Fonts.medium,
//     fontSize: 18,
//     color: Colors.black,
//     marginLeft: 5,
//   },
// });


















// api and chote part me yaha se

import React from "react";
import { View, Text, Image, TouchableOpacity, ScrollView, ActivityIndicator } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Ionicons from "@react-native-vector-icons/ionicons";
import { Colors } from "../../../theme/colors";
import { styles } from "./ProfileScreenStyles";
import { useProfileLogic } from "./useProfileLogic";

const ProfileScreen = ({ navigation }: any) => {
  const { profileData, loading, onMenuPress } = useProfileLogic(navigation);

  const menuItems = [
    { id: 'fav', label: 'Favorites', icon: 'heart-outline' },
    // { id: 'package', label: 'My Package', icon: 'ribbon-outline' },      
    { id: 'about', label: 'About Us', icon: 'information-circle-outline' },
    { id: 'share', label: 'Tell your friends', icon: 'person-add-outline' },
    { id: 'privacy', label: 'Privacy Policy', icon: 'lock-closed-outline' },
    { id: 'terms', label: 'Terms and Conditions', icon: 'document-text-outline' },
    { id: 'logout', label: 'Logout', icon: 'log-out-outline' },
  ] as const;

  if (loading) {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <ActivityIndicator size="large" color={Colors.primary} />
      </View>
    );
  }

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Ionicons name="chevron-back" size={30} color={Colors.black} />
        </TouchableOpacity>
      </View>

      <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={styles.scrollContent}>

        <View style={styles.profileSection}>
          <View style={styles.imageWrapper}>
            <Image
              // --- Logic: Backend Image or Local fallback ---
              source={
                profileData?.profileImage
                  ? { uri: profileData.profileImage }
                  : require("../../../assets/images/imageslogo.png")
              }
              style={styles.profileImage}
              resizeMode="cover"
            />
            <TouchableOpacity style={styles.imageEditBtn} onPress={() => navigation.navigate("UpdateProfileScreen")}>
              <Ionicons name="pencil" size={16} color={Colors.secondary} />
            </TouchableOpacity>
          </View>

          <View style={styles.nameContainer}>
            <View>
              <Text style={styles.userName}>{profileData?.fullName || "Guest User"}</Text>
              <Text style={styles.userRole}>{profileData?.role?.toUpperCase() || "USER"}</Text>
            </View>
          </View>

          <View style={styles.contactRow}>
            <Ionicons name="call-outline" size={24} color={Colors.primary} />
            <Text style={styles.contactText}>{profileData?.phone || "+91 00000 00000"}</Text>
          </View>

          <View style={styles.contactRow}>
            <Ionicons name="chatbubble-outline" size={24} color={Colors.primary} />
            <Text style={styles.contactText}>{profileData?.email || "user@email.com"}</Text>
          </View>
        </View>

        <View style={styles.menuSection}>
          {menuItems.map((item) => (
            <TouchableOpacity key={item.id} style={styles.menuItem} onPress={() => onMenuPress(item.id)}>
              <View style={styles.menuIconWrapper}>
                <Ionicons name={item.icon as any} size={28} color={Colors.secondary} />
              </View>
              <Text style={styles.menuLabel}>{item.label}</Text>
            </TouchableOpacity>
          ))}
        </View>

        <View style={{ height: 120 }} />
      </ScrollView>
    </SafeAreaView>
  );
};

export default ProfileScreen;