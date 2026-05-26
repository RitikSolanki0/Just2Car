// import React, { useEffect, useState } from "react";
// import {
//   View,
//   Text,
//   StyleSheet,
//   TouchableOpacity,
//   ScrollView,
// } from "react-native";
// import { SafeAreaView } from "react-native-safe-area-context";
// import { useSafeAreaInsets } from "react-native-safe-area-context";
// import Ionicons from "@react-native-vector-icons/ionicons";
// import { Colors } from "../../theme/colors";
// import { Fonts } from "../../theme/fonts";
// import { 
//   FILTER_CATEGORIES, 
//   MODEL_OPTIONS, 
//   BUDGET_OPTIONS, 
//   KMS_OPTIONS 
// } from "../../dummydata/dummyData";

// const FiltersScreen = ({ navigation, route }: any) => {
//   const [selectedOptions, setSelectedOptions] = useState<string[]>([]);
//   const insets = useSafeAreaInsets();

//   // --- नेविगेशन पैरामीटर्स रिसीव करें ---
//   const { initialCategory } = route.params || {};
//   const [activeCategory, setActiveCategory] = useState(initialCategory || "Make & Model");

//   // अगर होम स्क्रीन से दोबारा अलग कैटेगरी सेलेक्ट होकर आए
//   useEffect(() => {
//     if (initialCategory) {
//       setActiveCategory(initialCategory);
//     }
//   }, [initialCategory]);

//   // चेकबॉक्स टॉगल लॉजिक
//   const toggleOption = (id: string) => {
//     if (selectedOptions.includes(id)) {
//       setSelectedOptions(selectedOptions.filter(item => item !== id));
//     } else {
//       setSelectedOptions([...selectedOptions, id]);
//     }
//   };

//   return (
//     <SafeAreaView style={styles.safeArea} edges={['top']} >
//       {/* --- Header --- */}
//       <View style={styles.header}>
//         <TouchableOpacity onPress={() => navigation.goBack()}>
//           <Ionicons name="arrow-back" size={28} color={Colors.black} />
//         </TouchableOpacity>
//         <Text style={styles.headerTitle}>Filters</Text>
//       </View>

//       <View style={styles.mainContainer}>
//         {/* --- Left Sidebar (Categories) --- */}
//         <View style={styles.sidebar}>
//           <ScrollView showsVerticalScrollIndicator={false}>
//             {FILTER_CATEGORIES.map((cat) => (
//               <TouchableOpacity
//                 key={cat}
//                 style={[
//                     styles.categoryBtn, 
//                     activeCategory === cat && styles.activeCategoryBtn
//                 ]}
//                 onPress={() => setActiveCategory(cat)}
//               >
//                 <Text style={[
//                     styles.categoryText, 
//                     activeCategory === cat && styles.activeCategoryText
//                 ]}>
//                   {cat}
//                 </Text>
//               </TouchableOpacity>
//             ))}
//           </ScrollView>
//         </View>

//         {/* --- Right Content (Options) --- */}
//         <View style={styles.contentArea}>
//           <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={{ padding: 15 }}>

//             {/* 1. Make & Model के लिए कंटेंट */}
//             {activeCategory === "Make & Model" && (
//               <View>
//                 <Text style={styles.contentTitle}>Suggestions</Text>
//                 {MODEL_OPTIONS.suggestions.map((item) => (
//                   <OptionItem 
//                     key={item.id} 
//                     item={item} 
//                     isSelected={selectedOptions.includes(item.id)} 
//                     onPress={() => toggleOption(item.id)} 
//                   />
//                 ))}

//                 <Text style={[styles.contentTitle, { marginTop: 25 }]}>All Brand</Text>
//                 {MODEL_OPTIONS.allBrands.map((item) => (
//                   <OptionItem 
//                     key={item.id} 
//                     item={item} 
//                     isSelected={selectedOptions.includes(item.id)} 
//                     onPress={() => toggleOption(item.id)} 
//                   />
//                 ))}
//               </View>
//             )}

//             {/* 2. Budget के लिए कंटेंट */}
//             {activeCategory === "Budget" && (
//               <View>
//                 <Text style={styles.contentTitle}>Select Price Range</Text>
//                 {BUDGET_OPTIONS.map((item) => (
//                   <OptionItem 
//                     key={item.id} 
//                     item={item} 
//                     isSelected={selectedOptions.includes(item.id)} 
//                     onPress={() => toggleOption(item.id)} 
//                   />
//                 ))}
//               </View>
//             )}

//             {/* 3. Kms Driven के लिए कंटेंट */}
//             {activeCategory === "Kms Driven" && (
//               <View>
//                 <Text style={styles.contentTitle}>Select Usage Range</Text>
//                 {KMS_OPTIONS.map((item) => (
//                   <OptionItem 
//                     key={item.id} 
//                     item={item} 
//                     isSelected={selectedOptions.includes(item.id)} 
//                     onPress={() => toggleOption(item.id)} 
//                   />
//                 ))}
//               </View>
//             )}

//             {/* अन्य कैटेगरीज के लिए डिफ़ॉल्ट मैसेज */}
//             {activeCategory !== "Make & Model" && activeCategory !== "Budget" && activeCategory !== "Kms Driven" && (
//                 <View style={styles.emptyContent}>
//                     <Text style={styles.emptyText}>Options for {activeCategory} coming soon...</Text>
//                 </View>
//             )}

//           </ScrollView>
//         </View>
//       </View>

//       {/* --- Footer Buttons --- */}
//       <View style={[styles.footer, { paddingBottom: insets.bottom + 10 }]}>
//         <TouchableOpacity style={styles.clearBtn} onPress={() => setSelectedOptions([])}>
//           <Text style={styles.clearText}>CLEAR ALL</Text>
//         </TouchableOpacity>
//         <TouchableOpacity style={styles.showBtn} onPress={() => navigation.goBack()}>
//           <Text style={styles.showText}>SHOW CAR</Text>
//         </TouchableOpacity>
//       </View>
//     </SafeAreaView>
//   );
// };

// // --- Checkbox Item Component (Internal) ---
// const OptionItem = ({ item, isSelected, onPress }: any) => (
//   <TouchableOpacity style={styles.optionRow} onPress={onPress} activeOpacity={0.7}>
//     <View style={[styles.checkbox, isSelected && styles.checkboxSelected]}>
//       {isSelected && <Ionicons name="checkmark" size={16} color={Colors.white} />}
//     </View>
//     <Text style={styles.optionLabel}>
//       {item.label} <Text style={styles.countText}>({item.count})</Text>
//     </Text>
//   </TouchableOpacity>
// );

// export default FiltersScreen;

// const styles = StyleSheet.create({
//   safeArea: { flex: 1, backgroundColor: Colors.white },
//   header: {
//     flexDirection: "row",
//     alignItems: "center",
//     paddingHorizontal: 20,
//     paddingVertical: 10,
//     borderBottomWidth: 1,
//     borderBottomColor: "#F3F4F6",
//     paddingBottom: 15,
//   },
//   headerTitle: {
//     fontFamily: Fonts.bold,
//     fontSize: 20,
//     color: Colors.black,
//     marginLeft: 25,
//   },
//   mainContainer: {
//     flex: 1,
//     flexDirection: "row",
//   },
//   sidebar: {
//     width: "35%",
//     backgroundColor: "#F3F4F7", 
//   },
//   categoryBtn: {
//     paddingVertical: 18,
//     paddingHorizontal: 15,
//     borderBottomWidth: 1,
//     borderBottomColor: "#E5E7EB",
//   },
//   activeCategoryBtn: {
//     backgroundColor: Colors.primary,
//   },
//   categoryText: {
//     fontFamily: Fonts.medium,
//     fontSize: 13,
//     color: "#6B7280",
//   },
//   activeCategoryText: {
//     fontFamily: Fonts.bold,
//     color: Colors.white,
//   },
//   contentArea: {
//     width: "65%",
//     backgroundColor: Colors.white,
//   },
//   contentTitle: {
//     fontFamily: Fonts.bold,
//     fontSize: 14,
//     color: Colors.black,
//     marginBottom: 20,
//   },
//   optionRow: {
//     flexDirection: "row",
//     alignItems: "center",
//     marginBottom: 22,
//   },
//   checkbox: {
//     width: 24,
//     height: 24,
//     borderRadius: 6,
//     borderWidth: 1.5,
//     borderColor: "#D1D5DB",
//     backgroundColor: "#F9FAFB",
//     justifyContent: "center",
//     alignItems: "center",
//   },
//   checkboxSelected: {
//     backgroundColor: Colors.primary,
//     borderColor: Colors.primary,
//   },
//   optionLabel: {
//     marginLeft: 15,
//     fontFamily: Fonts.medium,
//     fontSize: 14,
//     color: Colors.black,
//   },
//   countText: {
//     color: "#9CA3AF",
//     fontFamily: Fonts.regular,
//   },
//   emptyContent: {
//     paddingTop: 50,
//     alignItems: 'center',
//   },
//   emptyText: {
//     color: 'gray',
//     fontFamily: Fonts.medium,
//   },
//   footer: {
//     flexDirection: "row",
//     padding: 15,
//     borderTopWidth: 1,
//     borderTopColor: "#F3F4F6",
//     backgroundColor: Colors.white,
//   },
//   clearBtn: {
//     flex: 1,
//     backgroundColor: "#F3F4F7",
//     height: 55,
//     justifyContent: "center",
//     alignItems: "center",
//     borderRadius: 12,
//     marginRight: 10,
//   },
//   clearText: {
//     fontFamily: Fonts.bold,
//     color: "#9CA3AF",
//   },
//   showBtn: {
//     flex: 1.5,
//     backgroundColor: Colors.secondary,
//     height: 55,
//     justifyContent: "center",
//     alignItems: "center",
//     borderRadius: 12,
//   },
//   showText: {
//     fontFamily: Fonts.bold,
//     color: Colors.white,
//     fontSize: 16,
//   },
// });

















// import React from "react";
// import { View, Text, TouchableOpacity, ScrollView, ActivityIndicator } from "react-native";
// import { SafeAreaView, useSafeAreaInsets } from "react-native-safe-area-context";
// import Ionicons from "@react-native-vector-icons/ionicons";
// import { Colors } from "../../theme/colors";
// import { styles } from "./FiltersStyles";
// import { useFiltersLogic } from "./useFiltersLogic";

// // --- 🚀 फिक्स: यहाँ सारे मिसिंग ऑप्शंस इम्पोर्ट करें ---
// import {
//   FILTER_CATEGORIES,
//   BUDGET_OPTIONS,
//   KMS_OPTIONS,
//   FUEL_OPTIONS,
//   TRANSMISSION_OPTIONS,
//   OWNER_OPTIONS
// } from "./filterData";

// const FiltersScreen = ({ navigation, route }: any) => {
//   const insets = useSafeAreaInsets();
//   const logic = useFiltersLogic(navigation, route);

//   return (
//     <SafeAreaView style={styles.safeArea} edges={['top']}>
//       {/* Header */}
//       <View style={styles.header}>
//         <TouchableOpacity onPress={() => navigation.goBack()}>
//           <Ionicons name="arrow-back" size={28} color={Colors.black} />
//         </TouchableOpacity>
//         <Text style={styles.headerTitle}>Filters</Text>
//       </View>

//       <View style={styles.mainContainer}>
//         {/* Sidebar */}
//         <View style={styles.sidebar}>
//           <ScrollView showsVerticalScrollIndicator={false}>
//             {FILTER_CATEGORIES.map((cat: string) => (
//               <TouchableOpacity
//                 key={cat}
//                 style={[styles.categoryBtn, logic.activeCategory === cat && styles.activeCategoryBtn]}
//                 onPress={() => logic.setActiveCategory(cat)}
//               >
//                 <Text style={[styles.categoryText, logic.activeCategory === cat && styles.activeCategoryText]}>
//                   {cat}
//                 </Text>
//               </TouchableOpacity>
//             ))}
//           </ScrollView>
//         </View>

//         {/* Content Area */}
//         <View style={styles.contentArea}>
//           {logic.loading ? (
//             <View style={styles.emptyContent}><ActivityIndicator color={Colors.primary} /></View>
//           ) : (
//             <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={{ padding: 20 }}>

//               {/* 1. Make & Model (Multi Select रहेगा) */}
//               {logic.activeCategory === "Brands" && (
//                 <View>
//                   <Text style={styles.contentTitle}>Select Brands</Text>
//                   {logic.brands.map((item: any) => (
//                     <OptionItem key={item._id} label={item.name} isSelected={logic.selectedFilters.brand.includes(item._id)} onPress={() => logic.toggleItem('brand', item._id)} />
//                   ))}
//                 </View>
//               )}

//               {/* 2. Budget (Single Select) */}
//               {logic.activeCategory === "Budget" && (
//                 <View>
//                   {BUDGET_OPTIONS.map((item: any) => (
//                     <OptionItem key={item.id} label={item.label} isSelected={logic.selectedFilters.price?.max === item.max} onPress={() => logic.selectRange('price', item.min, item.max)} />
//                   ))}
//                 </View>
//               )}

//               {/* 3. Fuel (अब Single Select होगा) */}
//               {logic.activeCategory === "Fuel" && (
//                 <View>
//                   <Text style={styles.contentTitle}>Fuel Type</Text>
//                   {FUEL_OPTIONS.map((item: string) => (
//                     <OptionItem
//                       key={item}
//                       label={item}
//                       // चेक करें कि क्या यही वैल्यू सिलेक्टेड है
//                       isSelected={logic.selectedFilters.fuelType === item}
//                       onPress={() => logic.selectSingle('fuelType', item)}
//                     />
//                   ))}
//                 </View>
//               )}

//               {/* 4. Transmission (अब Single Select होगा) */}
//               {logic.activeCategory === "Transmission" && (
//                 <View>
//                   <Text style={styles.contentTitle}>Gear Box</Text>
//                   {TRANSMISSION_OPTIONS.map((item: string) => (
//                     <OptionItem
//                       key={item}
//                       label={item}
//                       isSelected={logic.selectedFilters.transmission === item}
//                       onPress={() => logic.selectSingle('transmission', item)}
//                     />
//                   ))}
//                 </View>
//               )}

//               {/* 5. Owners (अब Single Select होगा) */}
//               {logic.activeCategory === "Owners" && (
//                 <View>
//                   <Text style={styles.contentTitle}>Ownership</Text>
//                   {OWNER_OPTIONS.map((item: any) => (
//                     <OptionItem
//                       key={item.value}
//                       label={item.label}
//                       isSelected={logic.selectedFilters.noOfOwners === item.value}
//                       onPress={() => logic.selectSingle('noOfOwners', item.value)}
//                     />
//                   ))}
//                 </View>
//               )}

//               {/* 6. Kms Driven (Single Select) */}
//               {logic.activeCategory === "Kms Driven" && (
//                 <View>
//                   {KMS_OPTIONS.map((item: any) => (
//                     <OptionItem key={item.id} label={item.label} isSelected={logic.selectedFilters.km?.max === item.max} onPress={() => logic.selectRange('km', item.min, item.max)} />
//                   ))}
//                 </View>
//               )}
//             </ScrollView>
//           )}
//         </View>
//       </View>

//       {/* Footer */}
//       <View style={[styles.footer, { paddingBottom: insets.bottom + 10 }]}>
//         <TouchableOpacity style={styles.clearBtn} onPress={logic.clearAll}>
//           <Text style={styles.clearText}>CLEAR ALL</Text>
//         </TouchableOpacity>
//         <TouchableOpacity style={styles.showBtn} onPress={logic.applyFilters}>
//           <Text style={styles.showText}>SHOW CAR</Text>
//         </TouchableOpacity>
//       </View>
//     </SafeAreaView>
//   );
// };

// // --- Checkbox Item Component ---
// const OptionItem = ({ label, isSelected, onPress }: any) => (
//   <TouchableOpacity style={styles.optionRow} onPress={onPress} activeOpacity={0.7}>
//     <View style={[styles.checkbox, isSelected && styles.checkboxSelected]}>
//       {isSelected && <Ionicons name="checkmark" size={16} color={Colors.white} />}
//     </View>
//     <Text style={styles.optionLabel}>{label}</Text>
//   </TouchableOpacity>
// );

// export default FiltersScreen;
























// import React, { useState } from "react";
// import { View, Text, TouchableOpacity, ScrollView, ActivityIndicator, TextInput, Image, StyleSheet } from "react-native";
// import { SafeAreaView, useSafeAreaInsets } from "react-native-safe-area-context";
// import Ionicons from "@react-native-vector-icons/ionicons";
// import { Colors } from "../../theme/colors";
// import { styles } from "./FiltersStyles";
// import { useFiltersLogic } from "./useFiltersLogic";

// import {
//   BUDGET_OPTIONS,
//   KMS_OPTIONS,
//   FUEL_OPTIONS,
//   TRANSMISSION_OPTIONS,
//   OWNER_OPTIONS
// } from "./filterData";

// const FiltersScreen = ({ navigation, route }: any) => {
//   const insets = useSafeAreaInsets();
//   const logic = useFiltersLogic(navigation, route);

//   // Accordion states
//   const [showPopular, setShowPopular] = useState(true);
//   const [showAllBrands, setShowAllBrands] = useState(false);
//   const [showModels, setShowModels] = useState(false);

//   // Sidebar List matching OLX
//   const categories = [
//     "By Brand / Model", "By Budget", "By Year",
//     "By No. of Owners", "By KM Driven", "By Fuel", "By Transmission"
//   ];

//   return (
//     <SafeAreaView style={styles.safeArea} edges={['top']}>
//       {/* Header */}
//       <View style={styles.header}>
//         <TouchableOpacity onPress={() => navigation.goBack()}>
//           <Ionicons name="arrow-back" size={28} color={Colors.black} />
//         </TouchableOpacity>
//         <Text style={styles.headerTitle}>Filters & Sort</Text>
//       </View>

//       <View style={styles.mainContainer}>
//         {/* Sidebar (Left) */}
//         <View style={styles.sidebar}>
//           <ScrollView showsVerticalScrollIndicator={false}>
//             {categories.map((cat: string) => (
//               <TouchableOpacity
//                 key={cat}
//                 style={[styles.categoryBtn, logic.activeCategory === cat && styles.activeCategoryBtn]}
//                 onPress={() => logic.setActiveCategory(cat)}
//               >
//                 <Text style={[styles.categoryText, logic.activeCategory === cat && styles.activeCategoryText]}>
//                   {cat}
//                 </Text>
//               </TouchableOpacity>
//             ))}
//           </ScrollView>
//         </View>

//         {/* Content Area (Right) */}
//         <View style={styles.contentArea}>
//           <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={{ padding: 15 }}>

//             {logic.activeCategory === "By Brand / Model" ? (
//               <View>
//                 {/* 1. Search Box */}
//                 <View style={localStyles.searchContainer}>
//                   <TextInput placeholder="Search brand or model" style={localStyles.searchInput} />
//                   <Ionicons name="search" size={20} color="black" />
//                 </View>

//                 {/* 2. Popular Brands Section */}
//                 <TouchableOpacity style={localStyles.accordionHeader} onPress={() => setShowPopular(!showPopular)}>
//                   <Text style={localStyles.sectionTitle}>POPULAR BRANDS</Text>
//                   <Ionicons name={showPopular ? "chevron-up" : "chevron-down"} size={18} />
//                 </TouchableOpacity>

//                 {showPopular && (
//                   <View style={localStyles.brandGrid}>
//                     {logic.brands.slice(0, 6).map((item: any) => (
//                       <TouchableOpacity
//                         key={item._id}
//                         style={[localStyles.brandBox, logic.selectedFilters.brand.includes(item._id) && localStyles.activeBox]}
//                         onPress={() => {
//                           logic.toggleItem('brand', item._id);
//                           setShowModels(true);
//                         }}
//                       >
//                         <Image source={{ uri: item.image }} style={localStyles.brandImg} />
//                         <Text style={localStyles.brandName} numberOfLines={1}>{item.name}</Text>
//                       </TouchableOpacity>
//                     ))}
//                   </View>
//                 )}

//                 {/* 3. All Brands Section */}
//                 <TouchableOpacity style={localStyles.accordionHeader} onPress={() => setShowAllBrands(!showAllBrands)}>
//                   <Text style={localStyles.sectionTitle}>ALL BRANDS</Text>
//                   <Ionicons name={showAllBrands ? "chevron-up" : "chevron-down"} size={18} />
//                 </TouchableOpacity>
//                 {showAllBrands && logic.brands.map((item: any) => (
//                   <OptionItem key={item._id} label={item.name} isSelected={logic.selectedFilters.brand.includes(item._id)} onPress={() => { logic.toggleItem('brand', item._id); setShowModels(true); }} />
//                 ))}

//                 {/* 4. All Models Section (Only if brand selected) */}
//                 <TouchableOpacity style={localStyles.accordionHeader} onPress={() => setShowModels(!showModels)}>
//                   <Text style={localStyles.sectionTitle}>ALL MODELS</Text>
//                   <Ionicons name={showModels ? "chevron-up" : "chevron-down"} size={18} />
//                 </TouchableOpacity>

//                 {showModels && (

//                   logic.selectedFilters.brand.length === 0 ? (

//                     // TOP MODELS
//                     logic.topModels.map((item: any) => (
//                       <OptionItem
//                         key={item._id}
//                         label={item.name}
//                         isSelected={
//                           logic.selectedFilters.model.includes(item._id)
//                         }
//                         onPress={() =>
//                           logic.toggleItem('model', item._id)
//                         }
//                       />
//                     ))

//                   ) : (

//                     // SELECTED BRAND MODELS
//                     [
//                       ...new Map(
//                         Object.values(logic.allModels)
//                           .flat()
//                           .map((item: any) => [item._id, item])
//                       ).values()
//                     ].map((item: any) => (

//                       <OptionItem
//                         key={item._id}
//                         label={item.name}
//                         isSelected={
//                           logic.selectedFilters.model.includes(item._id)
//                         }
//                         onPress={() =>
//                           logic.toggleItem('model', item._id)
//                         }
//                       />

//                     ))

//                   )
//                 )}
//               </View>
//             ) : (
//               // Baki categories ke liye purana logic
//               <View>
//                 {logic.activeCategory === "By Budget" && BUDGET_OPTIONS.map((item: any) => (
//                   <OptionItem key={item.id} label={item.label} isSelected={logic.selectedFilters.price?.max === item.max} onPress={() => logic.selectRange('price', item.min, item.max)} />
//                 ))}
//                 {logic.activeCategory === "By Fuel" && FUEL_OPTIONS.map((item: string) => (
//                   <OptionItem key={item} label={item} isSelected={logic.selectedFilters.fuelType === item} onPress={() => logic.selectSingle('fuelType', item)} />
//                 ))}
//                 {/* ... baki fields bhi isi tarah ... */}
//               </View>
//             )}

//           </ScrollView>
//         </View>
//       </View>

//       {/* Footer */}
//       <View style={[styles.footer, { paddingBottom: insets.bottom + 10 }]}>
//         <TouchableOpacity style={styles.clearBtn} onPress={logic.clearAll}>
//           <Text style={styles.clearText}>Clear all</Text>
//         </TouchableOpacity>
//         <TouchableOpacity style={styles.showBtn} onPress={logic.applyFilters}>
//           <Text style={styles.showText}>Apply</Text>
//         </TouchableOpacity>
//       </View>
//     </SafeAreaView>
//   );
// };

// const OptionItem = ({ label, isSelected, onPress }: any) => (
//   <TouchableOpacity style={styles.optionRow} onPress={onPress} activeOpacity={0.7}>
//     <View style={[styles.checkbox, isSelected && styles.checkboxSelected]}>
//       {isSelected && <Ionicons name="checkmark" size={16} color={Colors.white} />}
//     </View>
//     <Text style={styles.optionLabel}>{label}</Text>
//   </TouchableOpacity>
// );

// const localStyles = StyleSheet.create({
//   searchContainer: { flexDirection: 'row', alignItems: 'center', borderColor: '#ccc', borderRadius: 5, paddingHorizontal: 10, height: 45, marginBottom: 10, borderWidth: 1 },
//   searchInput: { flex: 1, fontSize: 14 },
//   accordionHeader: { flexDirection: 'row', justifyContent: 'space-between', paddingVertical: 15, borderBottomWidth: 1, borderBottomColor: '#eee' },
//   sectionTitle: { fontSize: 12, fontWeight: 'bold', color: 'black' },
//   brandGrid: { flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'space-between', marginTop: 10 },
//   brandBox: { width: '30%', padding: 10, borderWidth: 1, borderColor: '#eee', alignItems: 'center', marginBottom: 10, borderRadius: 5 },
//   activeBox: { borderColor: Colors.secondary, backgroundColor: '#FFFBEB' },
//   brandImg: { width: 40, height: 40, resizeMode: 'contain' },
//   brandName: { fontSize: 10, marginTop: 5, textAlign: 'center' },
//   hint: { fontSize: 12, color: 'gray', textAlign: 'center', marginTop: 10 },
// });

// export default FiltersScreen;















import React, { useState } from "react";
import { View, Text, TouchableOpacity, ScrollView, ActivityIndicator, TextInput, Image, StyleSheet, } from "react-native";
import { SafeAreaView, useSafeAreaInsets } from "react-native-safe-area-context";
import Ionicons from "@react-native-vector-icons/ionicons";
import { Colors } from "../../theme/colors";
import { styles } from "./FiltersStyles";
import { useFiltersLogic } from "./useFiltersLogic";

import {
  BUDGET_OPTIONS,
  KMS_OPTIONS,
  FUEL_OPTIONS,
  TRANSMISSION_OPTIONS,
  OWNER_OPTIONS,
  YEAR_OPTIONS
} from "./filterData";

const FiltersScreen = ({ navigation, route }: any) => {
  const insets = useSafeAreaInsets();
  const logic = useFiltersLogic(navigation, route);

  // Accordion states
  const [showPopular, setShowPopular] = useState(true);
  const [showAllBrands, setShowAllBrands] = useState(false);
  const [showModels, setShowModels] = useState(false);
  const [searchText, setSearchText] = useState('');

  // Sidebar List
  const categories = [
    "By Brand / Model", "Budget", "Fuel", "Transmission", "Owners", "Kms Driven", "By Year"
  ];

  const filteredBrands = logic.brands.filter((item: any) =>
    item.name.toLowerCase().includes(searchText.toLowerCase())
  );
  const filteredModels =
    logic.selectedFilters.brand.length === 0
      ? logic.topModels.filter((item: any) =>
        item.name.toLowerCase().includes(searchText.toLowerCase())
      )
      : Object.values(logic.allModels)
        .flat()
        .filter((item: any) =>
          item.name.toLowerCase().includes(searchText.toLowerCase())
        );

  return (
    <SafeAreaView style={styles.safeArea} edges={['top']}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Ionicons name="arrow-back" size={28} color={Colors.black} />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Filters & Sort</Text>
      </View>

      <View style={styles.mainContainer}>
        {/* Sidebar */}
        <View style={styles.sidebar}>
          <ScrollView showsVerticalScrollIndicator={false}>
            {categories.map((cat: string) => (
              <TouchableOpacity
                key={cat}
                style={[styles.categoryBtn, logic.activeCategory === cat && styles.activeCategoryBtn]}
                onPress={() => logic.setActiveCategory(cat)}
              >
                <Text style={[styles.categoryText, logic.activeCategory === cat && styles.activeCategoryText]}>
                  {cat}
                </Text>
              </TouchableOpacity>
            ))}
          </ScrollView>
        </View>

        {/* Content Area */}
        <View style={styles.contentArea}>
          {logic.loading ? (
            <View style={styles.emptyContent}><ActivityIndicator color={Colors.primary} /></View>
          ) : (
            <ScrollView showsVerticalScrollIndicator={false} keyboardShouldPersistTaps="handled" contentContainerStyle={{ padding: 15, flexGrow: 1 }}>

                   {logic.activeCategory === "By Year" && (
              <View>
                <Text style={styles.subHeader}>Choose from options below</Text>
                {YEAR_OPTIONS.map((item) => {
                  const currentYear = new Date().getFullYear();
                  const isSelected = item.type === 'under' 
                    ? logic.selectedFilters.minYear === (currentYear - item.yearsAgo)
                    : logic.selectedFilters.maxYear === (currentYear - item.yearsAgo);

                  return (
                    <TouchableOpacity 
                      key={item.id} 
                      style={[styles.yearOption, isSelected && styles.activeYearOption]} 
                      onPress={() => logic.selectYearPreset(item)}
                    >
                      <Text style={[styles.yearText, isSelected && { color: Colors.primary, fontWeight: 'bold' }]}>{item.label}</Text>
                    </TouchableOpacity>
                  );
                })}

                <Text style={[styles.subHeader, { marginTop: 30 }]}>Choose a range below</Text>
                <View style={styles.rangeRow}>
                  <TextInput
                    placeholder="2006"
                    keyboardType="numeric"
                    maxLength={4}
                    style={styles.yearInput}
                    value={logic.selectedFilters.minYear?.toString()}
                    onChangeText={(val) => logic.setCustomYear('minYear', val)}
                  />
                  <Text style={{ marginHorizontal: 10 }}>to</Text>
                  <TextInput
                    placeholder="2026"
                    keyboardType="numeric"
                    maxLength={4}
                    style={styles.yearInput}
                    value={logic.selectedFilters.maxYear?.toString()}
                    onChangeText={(val) => logic.setCustomYear('maxYear', val)}
                  />
                </View>
              </View>
            )}

              {logic.activeCategory === "By Brand / Model" ? (
                <View>
                  {/* 1. Search Box */}
                  <View style={styles.searchContainer}>
                    <TextInput placeholder="Search brand or model" style={styles.searchInput} placeholderTextColor="gray" value={searchText} onChangeText={setSearchText} />
                    <Ionicons name="search" size={20} color="black" />
                  </View>

                  {/* 2. Popular Brands Grid */}
                  <TouchableOpacity style={styles.accordionHeader} onPress={() => setShowPopular(!showPopular)}>
                    <Text style={styles.sectionTitle}>POPULAR BRANDS</Text>
                    <Ionicons name={showPopular ? "chevron-up" : "chevron-down"} size={18} />
                  </TouchableOpacity>

                  {showPopular && (
                    <View style={styles.brandGrid}>
                      {filteredBrands.slice(0, 6).map((item: any) => (
                        <TouchableOpacity
                          key={item._id}
                          style={[styles.brandBox, logic.selectedFilters.brand.includes(item._id) && styles.activeBox]}
                          onPress={() => {
                            logic.toggleItem('brand', item._id);
                            setShowModels(true);
                          }}
                        >
                          <Image source={{ uri: item.image }} style={styles.brandImg} />
                          <Text style={styles.brandName} numberOfLines={1}>{item.name}</Text>
                        </TouchableOpacity>
                      ))}
                    </View>
                  )}

                  {/* 3. All Brands List */}
                  <TouchableOpacity style={styles.accordionHeader} onPress={() => setShowAllBrands(!showAllBrands)}>
                    <Text style={styles.sectionTitle}>ALL BRANDS</Text>
                    <Ionicons name={showAllBrands ? "chevron-up" : "chevron-down"} size={18} />
                  </TouchableOpacity>
                  {showAllBrands && filteredBrands.map((item: any) => (
                    <OptionItem key={item._id} label={item.name} isSelected={logic.selectedFilters.brand.includes(item._id)} onPress={() => { logic.toggleItem('brand', item._id); setShowModels(true); }} />
                  ))}

                  {/* 4. All Models Section */}
                  <TouchableOpacity style={styles.accordionHeader} onPress={() => setShowModels(!showModels)}>
                    <Text style={styles.sectionTitle}>ALL MODELS</Text>
                    <Ionicons name={showModels ? "chevron-up" : "chevron-down"} size={18} />
                  </TouchableOpacity>

                  {/* {showModels && (
                    logic.selectedFilters.brand.length === 0 ? (
                      // Default Top Models
                      logic.topModels.map((item: any) => (
                        <OptionItem key={item._id} label={item.name} isSelected={logic.selectedFilters.model.includes(item._id)} onPress={() => logic.toggleItem('model', item._id)} />
                      ))
                    ) : (
                      // Dynamic Brand Models
                      Object.values(logic.allModels).flat().map((item: any) => (
                        <OptionItem key={item._id} label={item.name} isSelected={logic.selectedFilters.model.includes(item._id)} onPress={() => logic.toggleItem('model', item._id)} />
                      ))
                    )
                  )} */}
                  {showModels && (
                    filteredModels.map((item: any) => (
                      <OptionItem
                        key={item._id}
                        label={item.name}
                        isSelected={
                          logic.selectedFilters.model.includes(item._id)
                        }
                        onPress={() =>
                          logic.toggleItem('model', item._id)
                        }
                      />
                    ))
                  )}
                </View>
              ) : (
                // --- Baki ki purani functionality ---
                <View>
                  {logic.activeCategory === "Budget" && BUDGET_OPTIONS.map((item: any) => (
                    <OptionItem key={item.id} label={item.label} isSelected={logic.selectedFilters.price?.max === item.max} onPress={() => logic.selectRange('price', item.min, item.max)} />
                  ))}

                  {logic.activeCategory === "Fuel" && (
                    <>
                      <Text style={styles.contentTitle}>Fuel Type</Text>
                      {FUEL_OPTIONS.map((item: string) => (
                        <OptionItem key={item} label={item} isSelected={logic.selectedFilters.fuelType === item} onPress={() => logic.selectSingle('fuelType', item)} />
                      ))}
                    </>
                  )}

                  {logic.activeCategory === "Transmission" && (
                    <>
                      <Text style={styles.contentTitle}>Gear Box</Text>
                      {TRANSMISSION_OPTIONS.map((item: string) => (
                        <OptionItem key={item} label={item} isSelected={logic.selectedFilters.transmission === item} onPress={() => logic.selectSingle('transmission', item)} />
                      ))}
                    </>
                  )}

                  {logic.activeCategory === "Owners" && (
                    <>
                      <Text style={styles.contentTitle}>Ownership</Text>
                      {OWNER_OPTIONS.map((item: any) => (
                        <OptionItem key={item.value} label={item.label} isSelected={logic.selectedFilters.noOfOwners === item.value} onPress={() => logic.selectSingle('noOfOwners', item.value)} />
                      ))}
                    </>
                  )}

                  {logic.activeCategory === "Kms Driven" && KMS_OPTIONS.map((item: any) => (
                    <OptionItem key={item.id} label={item.label} isSelected={logic.selectedFilters.km?.max === item.max} onPress={() => logic.selectRange('km', item.min, item.max)} />
                  ))}
                </View>
              )}
            </ScrollView>
          )}
        </View>
      </View>

      {/* Footer */}
      <View style={[styles.footer, { paddingBottom: insets.bottom + 10 }]}>
        <TouchableOpacity style={styles.clearBtn} onPress={logic.clearAll}>
          <Text style={styles.clearText}>CLEAR ALL</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.showBtn} onPress={logic.applyFilters}>
          <Text style={styles.showText}>SHOW CAR</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const OptionItem = ({ label, isSelected, onPress }: any) => (
  <TouchableOpacity style={styles.optionRow} onPress={onPress} activeOpacity={0.7}>
    <View style={[styles.checkbox, isSelected && styles.checkboxSelected]}>
      {isSelected && <Ionicons name="checkmark" size={16} color={Colors.white} />}
    </View>
    <Text style={styles.optionLabel}>{label}</Text>
  </TouchableOpacity>
);

export default FiltersScreen;