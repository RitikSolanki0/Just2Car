// import React from "react";
// import {
//   View,
//   Text,
//   StyleSheet,
//   TextInput,
//   ScrollView,
//   Image,
//   TouchableOpacity,
//   FlatList,
// } from "react-native";
// import Ionicons from "@react-native-vector-icons/ionicons";
// import {Colors} from "../../theme/colors";
// import {Fonts} from "../../theme/fonts";

// const brands = [
//   { id: "1", logo: require("../../assets/images/carlogo/vw.png") },
//   { id: "2", logo: require("../../assets/images/carlogo/MercedesLogo.png") },
//   { id: "3", logo: require("../../assets/images/carlogo/NissanLogo.png") },
//   { id: "4", logo: require("../../assets/images/carlogo/skodalogo.png") },
// ];

// const cars = [
//   {
//     id: "1",
//     price: "₹1,60,000",
//     image: require("../../assets/images/carimages/car1.jpg"),
//   },
//   {
//     id: "2",
//     price: "₹2,10,000",
//     image: require("../../assets/images/carimages/car2.jpg"),
//   },
//   {
//     id: "3",
//     price: "₹3,50,000",
//     image: require("../../assets/images/carimages/car3.jpg"),
//   },
//   {
//     id: "4",
//     price: "₹4,20,000",
//     image: require("../../assets/images/carimages/car4.jpg"),
//   },
// ];

// const HomeScreen = () => {
//   return (
//     <ScrollView style={styles.container}>
//       {/* Header */}
//       <View style={styles.header}>
//         <View>
//           <Text style={styles.helloText}>
//             Hi <Text style={styles.nameText}>Aman</Text>
//           </Text>
//           <Text style={styles.locationText}>Vijay Nagar Indore</Text>
//         </View>

//         <Ionicons name="notifications-outline" size={24} color="black" />
//       </View>

//       {/* Search Bar */}
//       <View style={styles.searchBar}>
//         <TextInput placeholder="Search Cars..." style={styles.input} />
//         <Ionicons name="mic-outline" size={20} color="gray" />
//       </View>

//       {/* Brands */}
//       <Text style={styles.sectionTitle}>Start with Car Brand</Text>

//       <ScrollView horizontal showsHorizontalScrollIndicator={false}>
//         {brands.map((item) => (
//           <View key={item.id} style={styles.brandCircle}>
//             <Image source={item.logo} style={styles.brandLogo} />
//           </View>
//         ))}
//       </ScrollView>

//       {/* Banner */}
//       <View style={styles.banner}>
//         <Image
//           source={require("../../assets/images/carimages/banner.jpg")}
//           style={styles.bannerImage}
//         />
//       </View>

//       {/* Buy / Sell Buttons */}
//       <View style={styles.actionRow}>
//         <TouchableOpacity style={styles.buyButton}>
//           <Text style={styles.actionText}>Buy Car</Text>
//         </TouchableOpacity>

//         <TouchableOpacity style={styles.sellButton}>
//           <Text style={styles.actionText}>Sell Car</Text>
//         </TouchableOpacity>
//       </View>

//       {/* Recommendations */}
//       <Text style={styles.sectionTitle}>Fresh Recommendation</Text>

//       <FlatList
//         data={cars}
//         numColumns={2}
//         keyExtractor={(item) => item.id}
//         scrollEnabled={false}
//         columnWrapperStyle={{ justifyContent: "space-between" }}
//         renderItem={({ item }) => (
//           <View style={styles.card}>
//             <Image source={item.image} style={styles.carImage} />
//             <Text style={styles.price}>{item.price}</Text>
//           </View>
//         )}
//       />
//     </ScrollView>
//   );
// };

// export default HomeScreen;

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: Colors.white,
//     padding: 15,
//   },

//   header: {
//     flexDirection: "row",
//     justifyContent: "space-between",
//     alignItems: "center",
//   },

//   helloText: {
//     fontSize: 16,
//     fontFamily: Fonts.regular,
//   },

//   nameText: {
//     fontFamily: Fonts.bold,
//     color: Colors.primary,
//   },

//   locationText: {
//     fontSize: 12,
//     color: Colors.textSecondary,
//   },

//   searchBar: {
//     flexDirection: "row",
//     alignItems: "center",
//     backgroundColor: Colors.textSecondary,
//     borderRadius: 12,
//     paddingHorizontal: 12,
//     marginTop: 15,
//     height: 45,
//   },

//   input: {
//     flex: 1,
//     fontSize: 14,
//   },

//   sectionTitle: {
//     marginTop: 20,
//     fontSize: 15,
//     fontFamily: Fonts.bold,
//   },

//   brandCircle: {
//     width: 55,
//     height: 55,
//     borderRadius: 30,
//     backgroundColor: Colors.textSecondary,
//     justifyContent: "center",
//     alignItems: "center",
//     marginRight: 12,
//     marginTop: 12,
//   },

//   brandLogo: {
//     width: 30,
//     height: 30,
//     resizeMode: "contain",
//   },

//   banner: {
//     marginTop: 20,
//     borderRadius: 15,
//     overflow: "hidden",
//   },

//   bannerImage: {
//     width: "100%",
//     height: 160,
//     resizeMode: "cover",
//   },

//   actionRow: {
//     flexDirection: "row",
//     justifyContent: "space-between",
//     marginTop: 20,
//   },

//   buyButton: {
//     flex: 1,
//     backgroundColor: "#FF6A00",
//     padding: 15,
//     borderRadius: 12,
//     marginRight: 10,
//     alignItems: "center",
//   },

//   sellButton: {
//     flex: 1,
//     backgroundColor: "#2E6BFF",
//     padding: 15,
//     borderRadius: 12,
//     alignItems: "center",
//   },

//   actionText: {
//     color: Colors.white,
//     fontFamily: Fonts.bold,
//   },

//   card: {
//     width: "48%",
//     backgroundColor: Colors.white,
//     borderRadius: 12,
//     marginTop: 15,
//     padding: 10,
//     elevation: 3,
//   },

//   carImage: {
//     width: "100%",
//     height: 90,
//     resizeMode: "contain",
//   },

//   price: {
//     marginTop: 8,
//     fontFamily: Fonts.bold,
//     fontSize: 14,
//   },
// });

























// import React, { useCallback } from 'react';
// import { View, Text, StyleSheet, TextInput, FlatList, Image, TouchableOpacity } from 'react-native';
// import Ionicons from "@react-native-vector-icons/ionicons";
// import { Colors } from '../../theme/colors';
// import { Fonts } from '../../theme/fonts';
// import { BRANDS, RECOMMENDATIONS, BANNERS } from '../../dummydata/dummyData';
// import CarCard from '../../components/CarCard';
// import { SafeAreaView } from 'react-native-safe-area-context';
// import { useNavigation } from '@react-navigation/native';

// const HomeScreen = () => {
//   const navigation = useNavigation<any>();
//   // Optimization: Render item function for FlatList
//   const renderCarItem = useCallback(({ item }: any) => <CarCard item={item} />, []);

//   // Header Component (Sab kuch jo list ke upar hai)
//   const ListHeader = () => (
//     <View>
//       {/* Top Header */}
//       <View style={styles.header}>
//         <View style={styles.row}>
//           <View style={styles.profileImg} />
//           <View style={{ marginLeft: 10 }}>
//             <Text style={styles.hiText}>Hi <Text style={styles.nameText}>Aman</Text></Text>
//           </View>
//         </View>
//         <View style={styles.row}>
//           <Ionicons name="location-outline" size={16} color="red" />
//           <Text style={styles.locText}>Vijay Nagar Indore</Text>
//         </View>
//       </View>

//       {/* Search Bar */}
//       <View style={styles.searchContainer}>
//         <View style={styles.searchBar}>
//           <TextInput placeholderTextColor="gray" style={styles.searchInput} />
//           {/* <Ionicons name="mic-outline" size={20} color="gray" /> */}
//         </View>
//         {/* <Ionicons name="heart-outline" size={24} color="black" style={{ marginHorizontal: 12 }} />
//         <Ionicons name="notifications-outline" size={24} color={Colors.secondary} /> */}
//         <TouchableOpacity style={{marginHorizontal: 5}}>
//            <Ionicons name="heart-outline" size={24} color="black" />
//         </TouchableOpacity>

//         {/* नोटिफिकेशन घंटी - इसके ऊपर TouchableOpacity होना ज़रूरी है */}
//         <TouchableOpacity onPress={() => navigation.navigate('NotificationScreen')}>
//            <Ionicons name="notifications-outline" size={24} color="black" />
//         </TouchableOpacity>
//       </View>

//       {/* Brands */}
//       <Text style={styles.sectionTitle}>Start with Car Brand</Text>
//       <FlatList
//         horizontal
//         data={BRANDS}
//         showsHorizontalScrollIndicator={false}
//         keyExtractor={(item, index) => index.toString()}
//         contentContainerStyle={styles.brandList}
//         renderItem={({ item }) => (
//           <View style={styles.brandCircle}>
//             <Image source={item.logo} style={styles.brandLogo} />
//           </View>
//         )}
//       />

//       {/* Banners */}
//       <FlatList
//         horizontal
//         pagingEnabled
//         data={BANNERS}
//         showsHorizontalScrollIndicator={false}
//         contentContainerStyle={{ marginTop: 15 }}
//         renderItem={({ item }) => (
//           <Image source={item.image} style={styles.bannerImg} />
//         )}
//       />

//       {/* Dealer Banner */}
//       <View style={styles.dealerStrip}>
//         <View style={styles.row}>
//           <Ionicons name="person-circle" size={24} color={Colors.secondary} />
//           <Text style={styles.dealerText}>Become a Car Dealer</Text>
//         </View>
//         <TouchableOpacity style={styles.applyBtn}>
//           <Text style={styles.applyText}>Apply Now</Text>
//         </TouchableOpacity>
//       </View>

//       {/* Filters */}
//       <View style={styles.filterRow}>
//         <TouchableOpacity style={styles.prefBtn} onPress={() => navigation.navigate('FiltersScreen')}>
//           <Text style={styles.prefText}>Preference</Text>
//           <Ionicons name="options-outline" size={16} color="black" />
//         </TouchableOpacity>
//         <View style={styles.filterBtn}><Text>Price</Text><Ionicons name="chevron-down" size={14} color="gray" /></View>
//         <View style={styles.filterBtn}><Text>Kms</Text><Ionicons name="chevron-down" size={14} color="gray" /></View>
//       </View>

//       <Text style={[styles.sectionTitle, { marginBottom: 10 }]}>Fresh Recommendation</Text>
//     </View>
//   );

//   return (
//     <SafeAreaView style={styles.container}>
//       <FlatList
//         data={RECOMMENDATIONS}
//         renderItem={renderCarItem}
//         keyExtractor={(item) => item.id}
//         numColumns={2}
//         ListHeaderComponent={ListHeader}
//         columnWrapperStyle={{ justifyContent: 'space-between' }}
//         contentContainerStyle={{ paddingBottom: 100 }}
//         showsVerticalScrollIndicator={false}
//       />
//     </SafeAreaView>
//   );
// };

// export default HomeScreen;

// const styles = StyleSheet.create({
//   container: { flex: 1, backgroundColor: Colors.white, paddingHorizontal: 15 },
//   header: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginTop: 10 },
//   row: { flexDirection: 'row', alignItems: 'center' },
//   profileImg: { width: 40, height: 40, borderRadius: 20, backgroundColor: '#ddd' },
//   hiText: { fontSize: 16, fontFamily: Fonts.regular },
//   nameText: { color: Colors.secondary, fontFamily: Fonts.bold },
//   locText: { fontSize: 11, marginLeft: 3, fontWeight: '500' },
//   searchContainer: { flexDirection: 'row', alignItems: 'center', marginTop: 15 },
//   searchBar: { flex: 1, height: 40, backgroundColor: '#E0E0E0', borderRadius: 8, flexDirection: 'row', alignItems: 'center', paddingHorizontal: 10, borderRightWidth: 1, borderRightColor: '#ccc' },
//   searchInput: { flex: 1, height: '100%' },
//   sectionTitle: { fontSize: 15, fontFamily: Fonts.bold, marginTop: 20, color: Colors.black },
//   brandList: { marginTop: 12 },
//   brandCircle: { width: 55, height: 55, borderRadius: 30, borderWidth: 1, borderColor: '#ddd', justifyContent: 'center', alignItems: 'center', marginRight: 15 },
//   brandLogo: { width: 35, height: 35, resizeMode: 'contain' },
//   bannerImg: { width: 330, height: 160, borderRadius: 15, marginRight: 15, resizeMode: 'cover' },
//   dealerStrip: { backgroundColor: Colors.primary, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', padding: 12, borderRadius: 10, marginTop: 15 },
//   dealerText: { color: 'white', marginLeft: 8, fontSize: 14, fontFamily: Fonts.medium },
//   applyBtn: { backgroundColor: Colors.secondary, paddingHorizontal: 15, paddingVertical: 5, borderRadius: 15 },
//   applyText: { fontSize: 11, fontFamily: Fonts.bold, color: 'white' },
//   filterRow: { flexDirection: 'row', marginTop: 15, justifyContent: 'space-between' },
//   prefBtn: { backgroundColor: Colors.secondary, flexDirection: 'row', alignItems: 'center', paddingHorizontal: 12, paddingVertical: 8, borderRadius: 8 },
//   prefText: { marginRight: 8, fontWeight: 'bold' },
//   filterBtn: { backgroundColor: '#E0E0E0', flexDirection: 'row', alignItems: 'center', paddingHorizontal: 15, paddingVertical: 8, borderRadius: 8, width: '30%', justifyContent: 'space-between' },
// });




















// yaha se alag alag kiya hai code ko

import React, { useCallback } from 'react';
import { FlatList, Text, StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Colors } from '../../theme/colors';
import { Fonts } from '../../theme/fonts';
import { RECOMMENDATIONS } from '../../dummydata/dummyData';
import CarCard from '../../components/CarCard';

// Components
import HomeHeader from '../../components/home/HomeHeader';
import BrandSection from '../../components/home/BrandSection';
import BannerSection from '../../components/home/BannerSection';
import DealerBanner from '../../components/home/DealerBanner';
import FilterSection from '../../components/home/FilterSection';

const HomeScreen = () => {
  const renderCarItem = useCallback(({ item }: any) => <CarCard item={item} />, []);

  const ListHeader = () => (
    <>
      <HomeHeader />
      <BrandSection />
      <BannerSection />
      <DealerBanner />
      <FilterSection />
      <Text style={styles.freshTitle}>Fresh Recommendation</Text>
    </>
  );

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={RECOMMENDATIONS}
        // renderItem={renderCarItem}
        renderItem={({ item }) => <CarCard item={item} width="48%" />}
        keyExtractor={(item) => item.id}
        numColumns={2}
        ListHeaderComponent={ListHeader}
        columnWrapperStyle={{ justifyContent: 'space-between' }}
        contentContainerStyle={{ paddingBottom: 100 }}
        showsVerticalScrollIndicator={false}
      />
    </SafeAreaView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: Colors.white, paddingHorizontal: 15 },
  freshTitle: { fontSize: 15, fontFamily: Fonts.bold, marginTop: 20, marginBottom: 10, color: 'black' },
});