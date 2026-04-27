
// import React, { useState } from "react";
// import {
//   View,
//   Text,
//   StyleSheet,
//   TextInput,
//   TouchableOpacity,
//   ScrollView,
//   Image,
// } from "react-native";
// import { SafeAreaView } from "react-native-safe-area-context";
// import Ionicons from "@react-native-vector-icons/ionicons";
// import { Colors } from "../../../theme/colors";
// import { Fonts } from "../../../theme/fonts";
// import { BRANDS, SEARCH_SUGGESTIONS, RECOMMENDED_FOR_YOU } from "../../../dummydata/dummyData";

// const SearchScreen = ({ navigation }: any) => {
//   const [searchText, setSearchText] = useState("");

//   // डेटा को 2 लाइन में बाँटने का लॉजिक
//   const chunkData = (data: any[], size: number) => {
//     const chunked = [];
//     for (let i = 0; i < data.length; i += size) {
//       chunked.push(data.slice(i, i + size));
//     }
//     return chunked;
//   };

//   const recommendedPairs = chunkData(RECOMMENDED_FOR_YOU, 2);

//   return (
//     <SafeAreaView style={styles.safeArea}>
//       <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={styles.scrollContent}>
        
//         {/* --- Search Bar --- */}
//         <View style={styles.searchHeader}>
//           <TouchableOpacity onPress={() => navigation.goBack()}>
//             <Ionicons name="arrow-back" size={26} color={Colors.black} />
//           </TouchableOpacity>
//           <TextInput 
//             style={styles.searchInput}
//             value={searchText}
//             onChangeText={(text) => setSearchText(text)}
//             placeholder="Search..."
//             autoFocus={true}
//           />
//           {searchText.length > 0 && (
//             <TouchableOpacity onPress={() => setSearchText("")}>
//               <Ionicons name="close-circle" size={20} color="gray" />
//             </TouchableOpacity>
//           )}
//         </View>

//         {/* --- Suggestions (Only shows when typing) --- */}
//         {searchText.length > 0 && (
//           <View style={styles.suggestionsCard}>
//             {SEARCH_SUGGESTIONS.filter(item => 
//               item.toLowerCase().includes(searchText.toLowerCase())
//             ).map((item, index) => (
//               <TouchableOpacity key={index} style={styles.suggestionItem}>
//                 <Text style={styles.suggestionText}>{item}</Text>
//               </TouchableOpacity>
//             ))}
//           </View>
//         )}

//         {/* --- Recommended For You (2 Rows Horizontal) --- */}
//         <Text style={styles.sectionTitle}>Recommended for you</Text>
//         <ScrollView horizontal showsHorizontalScrollIndicator={false}>
//           {recommendedPairs.map((pair, index) => (
//             <View key={index} style={styles.columnWrapper}>
//               {pair.map((item, i) => (
//                 <TouchableOpacity key={i} style={styles.chip}>
//                   <Text style={styles.chipText}>{item}</Text>
//                 </TouchableOpacity>
//               ))}
//             </View>
//           ))}
//         </ScrollView>

//         {/* --- Popular Brands (With Names Below Logos) --- */}
//         <Text style={styles.sectionTitle}>Popular Brands</Text>
//         <ScrollView 
//           horizontal 
//           showsHorizontalScrollIndicator={false} 
//           contentContainerStyle={styles.brandScrollContent}
//         >
//           {BRANDS.map((item) => (
//             <TouchableOpacity key={item.id} style={styles.brandItem} activeOpacity={0.7}>
//               {/* लोगो वाला गोला */}
//               <View style={styles.brandCircle}>
//                 <View style={styles.logoContainer}>
//                   <Image source={item.logo} style={styles.brandLogo} />
//                 </View>
//               </View>
              
//               {/* ब्रांड का नाम यहाँ जोड़ा गया है */}
//               <Text style={styles.brandName} numberOfLines={1}>
//                 {item.name}
//               </Text>
//             </TouchableOpacity>
//           ))}
//         </ScrollView>

//         <View style={{ height: 120 }} />
//       </ScrollView>
//     </SafeAreaView>
//   );
// };

// export default SearchScreen;

// const styles = StyleSheet.create({
//   safeArea: { flex: 1, backgroundColor: Colors.white },
//   scrollContent: { paddingHorizontal: 20, paddingTop: 10 },
//   searchHeader: { flexDirection: "row", alignItems: "center", backgroundColor: "#F2F4F7", borderRadius: 15, paddingHorizontal: 15, height: 55, marginTop: 10 },
//   searchInput: { flex: 1, marginLeft: 15, fontFamily: Fonts.medium, fontSize: 16, color: Colors.black },
//   suggestionsCard: { backgroundColor: "#FFFFFF", borderRadius: 15, paddingVertical: 10, marginTop: 10, elevation: 4, shadowColor: "#000", maxHeight: 250 },
//   suggestionItem: { paddingVertical: 12, paddingHorizontal: 20, borderBottomWidth: 0.5, borderBottomColor: "#F0F0F0" },
//   suggestionText: { fontFamily: Fonts.bold, fontSize: 13, color: Colors.black },
//   sectionTitle: { fontFamily: Fonts.bold, fontSize: 16, color: Colors.black, marginTop: 30, marginBottom: 15 },
//   columnWrapper: { flexDirection: 'column' },
//   chip: { backgroundColor: "#F2F4F7", paddingHorizontal: 20, paddingVertical: 12, borderRadius: 10, marginRight: 12, marginBottom: 12, minWidth: 100, alignItems: 'center' },
//   chipText: { fontFamily: Fonts.medium, fontSize: 13, color: Colors.black },

//   // --- ब्रांड सेक्शन के लिए स्टाइल्स ---
//   brandScrollContent: {
//     paddingBottom: 10,
//   },
//   brandItem: {
//     alignItems: 'center', // सेंटर अलाइनमेंट के लिए
//     marginRight: 20,
//   },
//   brandCircle: {
//     width: 65,
//     height: 65,
//     borderRadius: 35,
//     borderWidth: 1,
//     borderColor: "#E5E7EB",
//     justifyContent: "center",
//     alignItems: "center",
//     backgroundColor: Colors.white,
//     // हलकी परछाई (Shadow)
//     elevation: 2,
//     shadowColor: '#000',
//     shadowOffset: { width: 0, height: 1 },
//     shadowOpacity: 0.1,
//     shadowRadius: 2,
//   },
//   logoContainer: {
//     width: 40,
//     height: 40,
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
//   brandLogo: {
//     width: '100%',
//     height: '100%',
//     resizeMode: "contain",
//   },
//   brandName: {
//     marginTop: 8,
//     fontSize: 11,
//     fontFamily: Fonts.medium,
//     color: 'black',
//     textAlign: 'center',
//   },
// });























//  api integration and chhote part me yaha se 


// import React from "react";
// import { View, Text, TextInput, TouchableOpacity, ScrollView, Image, ActivityIndicator } from "react-native";
// import { SafeAreaView } from "react-native-safe-area-context";
// import Ionicons from "@react-native-vector-icons/ionicons";
// import { Colors } from "../../../theme/colors";
// import { styles } from "./SearchScreenStyles";
// import { useSearchLogic } from "./useSearchLogic";

// const SearchScreen = ({ navigation }: any) => {
//   const { 
//     searchText, setSearchText, 
//     searchResults, 
//     topBrands, 
//     topModels, 
//     loading 
//   } = useSearchLogic();

//   return (
//     <SafeAreaView style={styles.safeArea}>
//       <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={styles.scrollContent}>
        
//         {/* --- 1. Search Bar --- */}
//         <View style={styles.searchHeader}>
//           <TouchableOpacity onPress={() => navigation.goBack()}>
//             <Ionicons name="arrow-back" size={26} color={Colors.black} />
//           </TouchableOpacity>
//           <TextInput 
//             style={styles.searchInput}
//             value={searchText}
//             onChangeText={setSearchText}
//             placeholder="Search Cars..."
//             autoFocus={true}
//           />
//           {loading ? (
//              <ActivityIndicator size="small" color="gray" />
//           ) : searchText.length > 0 && (
//             <TouchableOpacity onPress={() => setSearchText("")}>
//               <Ionicons name="close-circle" size={20} color="gray" />
//             </TouchableOpacity>
//           )}
//         </View>

//         {/* --- 2. Suggestions (Only shows when results found) --- */}
//         {searchText.length > 0 && searchResults.length > 0 && (
//           <View style={styles.suggestionsCard}>
//             {searchResults.map((item, index) => (
//               <TouchableOpacity 
//                 key={index} 
//                 style={styles.suggestionItem}
//                 onPress={() => navigation.navigate('CarDetailScreen', { car: item })}
//               >
//                 <Text style={styles.suggestionText}>{item.model}</Text>
//               </TouchableOpacity>
//             ))}
//           </View>
//         )}

//         {/* --- 3. Recommended For You (Top Models API) --- */}
//         <Text style={styles.sectionTitle}>Recommended for you</Text>
//         <ScrollView horizontal showsHorizontalScrollIndicator={false}>
//           {topModels.map((pair: any, index: number) => (
//             <View key={index} style={styles.columnWrapper}>
//               {pair.map((item: any, i: number) => (
//                 <TouchableOpacity key={i} style={styles.chip}>
//                   <Text style={styles.chipText}>{item.name}</Text>
//                 </TouchableOpacity>
//               ))}
//             </View>
//           ))}
//         </ScrollView>

//         {/* --- 4. Popular Brands (Brands API with isTopBrand: true) --- */}
//         <Text style={styles.sectionTitle}>Popular Brands</Text>
//         <ScrollView 
//           horizontal 
//           showsHorizontalScrollIndicator={false} 
//           contentContainerStyle={styles.brandScrollContent}
//         >
//           {topBrands.map((item) => (
//             <TouchableOpacity 
//               key={item._id} 
//               style={styles.brandItem} 
//               onPress={() => navigation.navigate('FiltersScreen', { initialCategory: 'Make & Model' })}
//             >
//               <View style={styles.brandCircle}>
//                 <View style={styles.logoContainer}>
//                   <Image source={{ uri: item.image }} style={styles.brandLogo} />
//                 </View>
//               </View>
//               <Text style={styles.brandName} numberOfLines={1}>{item.name}</Text>
//             </TouchableOpacity>
//           ))}
//         </ScrollView>

//         <View style={{ height: 120 }} />
//       </ScrollView>
//     </SafeAreaView>
//   );
// };

// export default SearchScreen;





















// import React from "react";
// import { View, Text, TextInput, TouchableOpacity, ScrollView, Image, ActivityIndicator } from "react-native";
// import { SafeAreaView } from "react-native-safe-area-context";
// import Ionicons from "@react-native-vector-icons/ionicons";
// import { Colors } from "../../../theme/colors";
// import { styles } from "./SearchScreenStyles";
// import { useSearchLogic } from "./useSearchLogic";

// const SearchScreen = ({ navigation }: any) => {
//   const { 
//     searchText, setSearchText, 
//     searchResults, 
//     topBrands, 
//     topModels, 
//     loading 
//   } = useSearchLogic();

//   return (
//     <SafeAreaView style={styles.safeArea}>
//       <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={styles.scrollContent}>
        
//         {/* --- 1. Search Bar --- */}
//         <View style={styles.searchHeader}>
//           <TouchableOpacity onPress={() => navigation.goBack()}>
//             <Ionicons name="arrow-back" size={26} color={Colors.black} />
//           </TouchableOpacity>
//           <TextInput 
//             style={styles.searchInput}
//             value={searchText}
//             onChangeText={setSearchText}
//             placeholder="Search Cars..."
//             autoFocus={true}
//           />
//           {loading ? (
//              <ActivityIndicator size="small" color="gray" />
//           ) : searchText.length > 0 && (
//             <TouchableOpacity onPress={() => setSearchText("")}>
//               <Ionicons name="close-circle" size={20} color="gray" />
//             </TouchableOpacity>
//           )}
//         </View>

//         {/* --- 2. Suggestions (Fixed: No Object rendering) --- */}
//         {searchText.length > 0 && searchResults.length > 0 && (
//           <View style={styles.suggestionsCard}>
//             {searchResults.map((item, index) => (
//               <TouchableOpacity 
//                 key={index} 
//                 style={styles.suggestionItem}
//                 onPress={() => navigation.navigate('CarDetailScreen', { car: item })}
//               >
//                 {/* --- 🚀 फिक्स: item.model.name का उपयोग करें --- */}
//                 <Text style={styles.suggestionText}>
//                    {item.brand?.name} {typeof item.model === 'object' ? item.model?.name : item.model}
//                 </Text>
//               </TouchableOpacity>
//             ))}
//           </View>
//         )}

//         {/* --- 3. Recommended For You --- */}
//         <Text style={styles.sectionTitle}>Recommended for you</Text>
//         <ScrollView horizontal showsHorizontalScrollIndicator={false}>
//           {topModels.map((pair: any, index: number) => (
//             <View key={index} style={styles.columnWrapper}>
//               {pair.map((item: any, i: number) => (
//                 <TouchableOpacity 
//                     key={i} 
//                     style={styles.chip}
//                     onPress={() => {
//                         setSearchText(item.name); // चिप पर क्लिक करने पर सर्च टाइप हो जाए
//                     }}
//                 >
//                   <Text style={styles.chipText}>{item.name}</Text>
//                 </TouchableOpacity>
//               ))}
//             </View>
//           ))}
//         </ScrollView>

//         {/* --- 4. Popular Brands --- */}
//         <Text style={styles.sectionTitle}>Popular Brands</Text>
//         <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={styles.brandScrollContent}>
//           {topBrands.map((item) => (
//             <TouchableOpacity 
//               key={item._id} 
//               style={styles.brandItem} 
//               onPress={() => navigation.navigate('FiltersScreen', { initialCategory: 'Make & Model' })}
//             >
//               <View style={styles.brandCircle}>
//                 <View style={styles.logoContainer}>
//                   <Image source={{ uri: item.image }} style={styles.brandLogo} />
//                 </View>
//               </View>
//               <Text style={styles.brandName} numberOfLines={1}>{item.name}</Text>
//             </TouchableOpacity>
//           ))}
//         </ScrollView>

//         <View style={{ height: 120 }} />
//       </ScrollView>
//     </SafeAreaView>
//   );
// };

// export default SearchScreen;













// import React from "react";
// import { View, Text, TextInput, TouchableOpacity, ScrollView, Image, ActivityIndicator, FlatList } from "react-native";
// import { SafeAreaView } from "react-native-safe-area-context";
// import Ionicons from "@react-native-vector-icons/ionicons";
// import { styles } from "./SearchScreenStyles";
// import { useSearchLogic } from "./useSearchLogic";
// import CarCard from "../../../components/carcard/CarCard"; 

// const SearchScreen = ({ navigation }: any) => {
//   const { 
//     searchText, setSearchText, 
//     searchResults, 
//     topBrands, 
//     topModels, 
//     loading,
//     isResultView, setIsResultView,
//     triggerSearch  
//   } = useSearchLogic();

//   return (
//     <SafeAreaView style={styles.safeArea}>
//       {/* --- 1. Search Bar --- */}
//       <View style={styles.searchHeader}>
//         <TouchableOpacity onPress={() => navigation.goBack()}>
//           <Ionicons name="arrow-back" size={26} color="black" />
//         </TouchableOpacity>
//         <TextInput 
//           style={styles.searchInput}
//           value={searchText}
//           onChangeText={(text) => {
//               setSearchText(text);
//               setIsResultView(false); // टाइप करते समय वापस सजेशन मोड में जाएँ
//           }}
//           placeholder="Search Cars..."
//           autoFocus={true}
//         />
//         {loading ? (
//             <ActivityIndicator size="small" color="gray" />
//         ) : searchText.length > 0 && (
//             <TouchableOpacity onPress={() => setSearchText("")}>
//             <Ionicons name="close-circle" size={20} color="gray" />
//             </TouchableOpacity>
//         )}
//       </View>

//       <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={styles.scrollContent}>
        
//         {/* --- 2. CONDITION: रिजल्ट व्यू या सजेशन लिस्ट? --- */}
        
//         {searchText.length > 0 && searchResults.length > 0 ? (
//           isResultView ? (
//             // --- 🚀 MODE A: रिजल्ट मिल गए और किसी नाम पर क्लिक किया (CAR CARDS) ---
//             <View style={styles.resultsGrid}>
//                 <Text style={styles.sectionTitle}>Found {searchResults.length} results</Text>
//                 <View style={styles.cardWrapperRow}>
//                    {searchResults.map((item) => (
//                       <CarCard key={item._id} item={item} width="48%" />
//                    ))}
//                 </View>
//             </View>
//           ) : (
//             // --- MODE B: अभी सिर्फ सजेशन दिखाओ (TEXT LIST) ---
//             <View style={styles.suggestionsCard}>
//               {searchResults.map((item, index) => (
//                 <TouchableOpacity 
//                   key={index} 
//                   style={styles.suggestionItem}
//                   onPress={() => {
//                       setSearchText(item.model?.name || item.model); // टेक्स्ट को पूरा करें
//                       setIsResultView(true); // अब कार्ड्स दिखाओ
//                   }}
//                 >
//                   <Text style={styles.suggestionText}>
//                      {item.brand?.name} {typeof item.model === 'object' ? item.model?.name : item.model}
//                   </Text>
//                   <Ionicons name="arrow-up-outline" size={16} color="gray" style={{transform: [{rotate: '315deg'}]}} />
//                 </TouchableOpacity>
//               ))}
//             </View>
//           )
//         ) : null}

//         {/* --- 3. Default Content (Brands & Recommended) --- */}
//         {/* ये सिर्फ तब दिखेंगे जब यूजर ने कुछ टाइप न किया हो या रिजल्ट व्यू बंद हो */}
//         {!isResultView && (
//           <>
//             <Text style={styles.sectionTitle}>Recommended for you</Text>
//             <ScrollView horizontal showsHorizontalScrollIndicator={false}>
//               {topModels.map((pair: any, index: number) => (
//                 <View key={index} style={styles.columnWrapper}>
//                   {pair.map((item: any, i: number) => (
//                     <TouchableOpacity key={i} style={styles.chip} onPress={() => { setSearchText(item.name); setIsResultView(true); }}>
//                       <Text style={styles.chipText}>{item.name}</Text>
//                     </TouchableOpacity>
//                   ))}
//                 </View>
//               ))}
//             </ScrollView>

//             <Text style={styles.sectionTitle}>Popular Brands</Text>
//             <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={styles.brandScrollContent}>
//               {topBrands.map((item) => (
//                 <TouchableOpacity key={item._id} style={styles.brandItem} onPress={() => { setSearchText(item.name); setIsResultView(true); }}>
//                   <View style={styles.brandCircle}>
//                     <View style={styles.logoContainer}>
//                       <Image source={{ uri: item.image }} style={styles.brandLogo} />
//                     </View>
//                   </View>
//                   <Text style={styles.brandName}>{item.name}</Text>
//                 </TouchableOpacity>
//               ))}
//             </ScrollView>
//           </>
//         )}

//         <View style={{ height: 120 }} />
//       </ScrollView>
//     </SafeAreaView>
//   );
// };

// export default SearchScreen;




















// import React from "react";
// import { View, Text, TextInput, TouchableOpacity, ScrollView, Image, ActivityIndicator, FlatList } from "react-native";
// import { SafeAreaView } from "react-native-safe-area-context";
// import Ionicons from "@react-native-vector-icons/ionicons";
// import { styles } from "./SearchScreenStyles";
// import { useSearchLogic } from "./useSearchLogic";
// import CarCard from "../../../components/carcard/CarCard"; 
// import { Colors } from "../../../theme/colors";
// const SearchScreen = ({ navigation }: any) => {
//   const { 
//     searchText, setSearchText, searchResults, topBrands, topModels, 
//     loading, isResultView, setIsResultView, triggerSearch 
//   } = useSearchLogic();

//   return (
//     <SafeAreaView style={styles.safeArea}>
//       {/* 1. Search Bar */}
//       <View style={styles.searchHeader}>
//         <TouchableOpacity onPress={() => navigation.goBack()}><Ionicons name="arrow-back" size={26} color="black" /></TouchableOpacity>
//         <TextInput 
//           style={styles.searchInput}
//           value={searchText}
//           onChangeText={(text) => {
//               setSearchText(text);
//               if (isResultView) setIsResultView(false);
//           }}
//           placeholder="Search Brand or Model..." // टेक्स्ट बदला
//         />
//         {loading ? <ActivityIndicator size="small" color="gray" /> : (
//             searchText.length > 0 && <TouchableOpacity onPress={() => { setSearchText(""); setIsResultView(false); }}><Ionicons name="close-circle" size={20} color="gray" /></TouchableOpacity>
//         )}
//       </View>

//       <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={{ paddingHorizontal: 20, paddingTop: 10 }}>
        
//         {/* --- 🚀 SEARCH LOGIC --- */}
//         {searchText.length > 0 && (
//           isResultView ? (
//             <View style={{ marginTop: 10 }}>
//                <Text style={styles.sectionTitle}>Showing results for "{searchText}"</Text>
//                {!loading && searchResults.length > 0 ? (
//                  <View style={{ flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'space-between', marginTop: 10 }}>
//                     {searchResults.map((item) => (
//                       <CarCard key={item._id} item={item} width="48%" />
//                     ))}
//                  </View>
//                ) : !loading && (
//                  <Text style={{ textAlign: 'center', marginTop: 50, color: 'gray' }}>No cars found.</Text>
//                )}
//             </View>
//           ) : (
//             searchResults.length > 0 && (
//               <View style={styles.suggestionsCard}>
//                 {searchResults.map((item, index) => (
//                   <TouchableOpacity 
//                     key={index} 
//                     style={styles.suggestionItem}
//                     // क्लिक करने पर पूरा नाम (Brand + Model) सर्च करें
//                     onPress={() => triggerSearch(item.model?.name || item.model)}
//                   >
//                     <Text style={styles.suggestionText}>
//                         {item.brand?.name} {typeof item.model === 'object' ? item.model?.name : item.model}
//                     </Text>
//                     <Ionicons name="arrow-up-outline" size={16} color="#CCC" style={{transform: [{rotate: '315deg'}]}} />
//                   </TouchableOpacity>
//                 ))}
//               </View>
//             )
//           )
//         )}

//         {/* --- 2. RECOMMENDATIONS (MODELS) --- */}
//         {!isResultView && (
//           <>
//             <Text style={styles.sectionTitle}>Recommended for you</Text>
//             <ScrollView horizontal showsHorizontalScrollIndicator={false}>
//               {topModels.map((pair: any, index: number) => (
//                 <View key={index} style={{ flexDirection: 'column' }}>
//                   {pair.map((item: any, i: number) => (
//                     <TouchableOpacity 
//                         key={i} 
//                         style={styles.chip} 
//                         onPress={() => triggerSearch(item.name)} // मॉडल के नाम से सर्च
//                     >
//                       <Text style={styles.chipText}>{item.name}</Text>
//                     </TouchableOpacity>
//                   ))}
//                 </View>
//               ))}
//             </ScrollView>

//             {/* --- 3. POPULAR BRANDS --- */}
//             <Text style={styles.sectionTitle}>Popular Brands</Text>
//             <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={styles.brandScrollContent}>
//               {topBrands.map((item) => (
//                 <TouchableOpacity 
//                     key={item._id} 
//                     style={styles.brandItem} 
//                     onPress={() => triggerSearch(item.name)} // ब्रांड के नाम से सर्च
//                 >
//                   <View style={styles.brandCircle}>
//                     <View style={styles.logoContainer}><Image source={{ uri: item.image }} style={styles.brandLogo} /></View>
//                   </View>
//                   <Text style={styles.brandName}>{item.name}</Text>
//                 </TouchableOpacity>
//               ))}
//             </ScrollView>
//           </>
//         )}

//         <View style={{ height: 120 }} />
//       </ScrollView>
//     </SafeAreaView>
//   );
// };

// export default SearchScreen;





















// import React from "react";
// import {
//   View,
//   Text,
//   TextInput,
//   TouchableOpacity,
//   ScrollView,
//   Image,
//   ActivityIndicator,
// } from "react-native";
// import { SafeAreaView } from "react-native-safe-area-context";
// import Ionicons from "@react-native-vector-icons/ionicons";
// import { styles } from "./SearchScreenStyles";
// import { useSearchLogic } from "./useSearchLogic";
// import CarCard from "../../../components/carcard/CarCard"; 
// import { Colors } from "../../../theme/colors";

// const SearchScreen = ({ navigation }: any) => {
//   const { 
//     searchText, setSearchText, searchResults, topBrands, topModels, 
//     loading, isResultView, setIsResultView, triggerSearch 
//   } = useSearchLogic();

//   return (
//     <SafeAreaView style={styles.safeArea}>
//       {/* --- 1. Search Bar Header --- */}
//       <View style={styles.searchHeader}>
//         <TouchableOpacity onPress={() => navigation.goBack()}>
//           <Ionicons name="arrow-back" size={26} color={Colors.black} />
//         </TouchableOpacity>
        
//         <TextInput 
//           style={styles.searchInput}
//           value={searchText}
//           onChangeText={(text) => {
//             setSearchText(text);
//             if (isResultView) setIsResultView(false); // टाइप करते ही वापस सजेशन मोड में आएं
//           }}
//           placeholder="Search Brand or Model..."
//           autoFocus={true}
//         />

//         {loading ? (
//           <ActivityIndicator size="small" color="gray" />
//         ) : (
//           searchText.length > 0 && (
//             <TouchableOpacity onPress={() => { setSearchText(""); setIsResultView(false); }}>
//               <Ionicons name="close-circle" size={20} color="gray" />
//             </TouchableOpacity>
//           )
//         )}
//       </View>

//       <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={{ paddingHorizontal: 20, paddingTop: 10 }}>
        
//         {/* --- 🚀 SEARCH LOGIC: Results or Suggestions --- */}
//         {searchText.length > 0 && (
//           isResultView ? (
//             // --- MODE A: Results View (Show Car Cards) ---
//             <View style={{ marginTop: 10 }}>
//                <Text style={styles.sectionTitle}>Showing results for "{searchText}"</Text>
//                {!loading && searchResults.length > 0 ? (
//                  <View style={{ flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'space-between', marginTop: 10 }}>
//                     {searchResults.map((item) => (
//                       <CarCard key={item._id} item={item} width="48%" />
//                     ))}
//                  </View>
//                ) : !loading && (
//                  <View style={{ alignItems: 'center', marginTop: 50 }}>
//                     <Ionicons name="search-outline" size={50} color="#CCC" />
//                     <Text style={{ color: 'gray', marginTop: 10 }}>No cars found for "{searchText}".</Text>
//                  </View>
//                )}
//             </View>
//           ) : (
//             // --- MODE B: Suggestions View (Show Text List) ---
//             searchResults.length > 0 && (
//               <View style={styles.suggestionsCard}>
//                 {searchResults.map((item, index) => {
//                   // --- फिक्स: यहाँ पूरा नाम (Brand + Model) तैयार करें ---
//                   const brandName = item.brand?.name || "";
//                   const modelName = typeof item.model === 'object' ? item.model?.name : item.model;
//                   const fullName = `${brandName} ${modelName}`.trim();

//                   return (
//                     <TouchableOpacity 
//                       key={index} 
//                       style={styles.suggestionItem}
//                       // --- अब ट्रिगर पूरे नाम (जैसे Maruti DZIRE) के साथ होगा ---
//                       onPress={() => triggerSearch(fullName)}
//                     >
//                       <Text style={styles.suggestionText}>{fullName}</Text>
//                       <Ionicons name="arrow-up-outline" size={16} color="#CCC" style={{transform: [{rotate: '315deg'}]}} />
//                     </TouchableOpacity>
//                   );
//                 })}
//               </View>
//             )
//           )
//         )}

//         {/* --- 2. RECOMMENDATIONS (MODELS) --- */}
//         {!isResultView && (
//           <>
//             <Text style={styles.sectionTitle}>Recommended for you</Text>
//             <ScrollView horizontal showsHorizontalScrollIndicator={false}>
//               {topModels.map((pair: any, index: number) => (
//                 <View key={index} style={{ flexDirection: 'column' }}>
//                   {pair.map((item: any, i: number) => (
//                     <TouchableOpacity 
//                         key={i} 
//                         style={styles.chip} 
//                         onPress={() => triggerSearch(item.name)}
//                     >
//                       <Text style={styles.chipText}>{item.name}</Text>
//                     </TouchableOpacity>
//                   ))}
//                 </View>
//               ))}
//             </ScrollView>

//             {/* --- 3. POPULAR BRANDS --- */}
//             <Text style={styles.sectionTitle}>Popular Brands</Text>
//             <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={styles.brandScrollContent}>
//               {topBrands.map((item) => (
//                 <TouchableOpacity 
//                     key={item._id} 
//                     style={styles.brandItem} 
//                     onPress={() => triggerSearch(item.name)}
//                 >
//                   <View style={styles.brandCircle}>
//                     <View style={styles.logoContainer}>
//                       <Image source={{ uri: item.image }} style={styles.brandLogo} />
//                     </View>
//                   </View>
//                   <Text style={styles.brandName}>{item.name}</Text>
//                 </TouchableOpacity>
//               ))}
//             </ScrollView>
//           </>
//         )}

//         <View style={{ height: 120 }} />
//       </ScrollView>
//     </SafeAreaView>
//   );
// };

// export default SearchScreen;





















// import React from "react";
// import { View, Text, TextInput, TouchableOpacity, ScrollView, Image, ActivityIndicator } from "react-native";
// import { SafeAreaView } from "react-native-safe-area-context";
// import Ionicons from "@react-native-vector-icons/ionicons";
// import { styles } from "./SearchScreenStyles";
// import { useSearchLogic } from "./useSearchLogic";
// import CarCard from "../../../components/carcard/CarCard"; 

// const SearchScreen = ({ navigation }: any) => {
//   const { 
//     searchText, setSearchText, searchResults, topBrands, topModels, 
//     loading, isResultView, setIsResultView, triggerSearch 
//   } = useSearchLogic();

//   return (
//     <SafeAreaView style={styles.safeArea}>
//       {/* 1. Search Bar */}
//       <View style={styles.searchHeader}>
//         <TouchableOpacity onPress={() => navigation.goBack()}><Ionicons name="arrow-back" size={26} color="black" /></TouchableOpacity>
        
//         <View style={styles.inputWrapper}>
//             <TextInput 
//               style={styles.searchInput}
//               value={searchText}
//               onChangeText={(text) => {
//                   setSearchText(text);
//                   if (isResultView) setIsResultView(false);
//               }}
//               placeholder="Search Brand, Model or City..."
//               autoFocus={true}
//               returnKeyType="search" // कीबोर्ड पर सर्च बटन दिखाएगा
//               onSubmitEditing={() => triggerSearch(searchText)} // एंटर दबाने पर सर्च होगा
//             />
//             <TouchableOpacity onPress={() => triggerSearch(searchText)}>
//                <Ionicons name="search-outline" size={20} color="gray" />
//             </TouchableOpacity>
//         </View>

//         {loading ? <ActivityIndicator size="small" color="gray" style={{marginLeft: 10}} /> : (
//             searchText.length > 0 && 
//             <TouchableOpacity onPress={() => { setSearchText(""); setIsResultView(false); }}>
//                 <Ionicons name="close-circle" size={20} color="gray" style={{marginLeft: 10}} />
//             </TouchableOpacity>
//         )}
//       </View>

//       <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={{ paddingHorizontal: 20, paddingTop: 10 }}>
        
//         {searchText.length > 0 && (
//           isResultView ? (
//             // --- MODE: Results Grid ---
//             <View style={{ marginTop: 10 }}>
//                <Text style={styles.sectionTitle}>Found {searchResults.length} results for "{searchText}"</Text>
//                <View style={{ flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'space-between', marginTop: 10 }}>
//                   {searchResults.map((item) => (
//                     <CarCard key={item._id} item={item} width="48%" />
//                   ))}
//                </View>
//             </View>
//           ) : (
//             // --- MODE: Smart Suggestions ---
//             searchResults.length > 0 && (
//               <View style={styles.suggestionsCard}>
//                 {searchResults.map((item, index) => {
//                   // स्मार्ट सजेशन लॉजिक: जो मैच हो रहा है वही दिखाओ
//                   const brand = item.brand?.name || "";
//                   const model = typeof item.model === 'object' ? item.model?.name : item.model;
//                   const city = item.city?.name || "";

//                   return (
//                     <View key={index}>
//                       {/* 1. Brand + Model Suggestion */}
//                       <TouchableOpacity style={styles.suggestionItem} onPress={() => triggerSearch(`${brand} ${model}`)}>
//                         <Ionicons name="car-outline" size={18} color="gray" />
//                         <Text style={styles.suggestionText}>{brand} {model}</Text>
//                         <Ionicons name="arrow-up-outline" size={14} color="#CCC" style={{transform: [{rotate: '315deg'}]}} />
//                       </TouchableOpacity>

//                       {/* 2. City Suggestion (Optional: सिर्फ तब दिखाओ जब यूजर सिटी जैसा कुछ टाइप करे) */}
//                       {city.toLowerCase().includes(searchText.toLowerCase()) && (
//                         <TouchableOpacity style={styles.suggestionItem} onPress={() => triggerSearch(city)}>
//                           <Ionicons name="location-outline" size={18} color="gray" />
//                           <Text style={styles.suggestionText}>Cars in {city}</Text>
//                           <Ionicons name="arrow-up-outline" size={14} color="#CCC" style={{transform: [{rotate: '315deg'}]}} />
//                         </TouchableOpacity>
//                       )}
//                     </View>
//                   );
//                 })}
//               </View>
//             )
//           )
//         )}

//         {/* --- Static Content --- */}
//         {!isResultView && (
//           <>
//             <Text style={styles.sectionTitle}>Recommended for you</Text>
//             <ScrollView horizontal showsHorizontalScrollIndicator={false}>
//               {topModels.map((pair: any, index: number) => (
//                 <View key={index} style={{ flexDirection: 'column' }}>
//                   {pair.map((item: any, i: number) => (
//                     <TouchableOpacity key={i} style={styles.chip} onPress={() => triggerSearch(item.name)}>
//                       <Text style={styles.chipText}>{item.name}</Text>
//                     </TouchableOpacity>
//                   ))}
//                 </View>
//               ))}
//             </ScrollView>

//             <Text style={styles.sectionTitle}>Popular Brands</Text>
//             <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={styles.brandScrollContent}>
//               {topBrands.map((item) => (
//                 <TouchableOpacity key={item._id} style={styles.brandItem} onPress={() => triggerSearch(item.name)}>
//                   <View style={styles.brandCircle}>
//                     <View style={styles.logoContainer}><Image source={{ uri: item.image }} style={styles.brandLogo} /></View>
//                   </View>
//                   <Text style={styles.brandName}>{item.name}</Text>
//                 </TouchableOpacity>
//               ))}
//             </ScrollView>
//           </>
//         )}

//         <View style={{ height: 120 }} />
//       </ScrollView>
//     </SafeAreaView>
//   );
// };

// export default SearchScreen;




















import React from "react";
import { 
  View, 
  Text, 
  TextInput, 
  TouchableOpacity, 
  ScrollView, 
  Image, 
  ActivityIndicator 
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Ionicons from "@react-native-vector-icons/ionicons";
import { styles } from "./SearchScreenStyles";
import { useSearchLogic } from "./useSearchLogic";
import CarCard from "../../../components/carcard/CarCard"; 
import { Colors } from "../../../theme/colors";

const SearchScreen = ({ navigation }: any) => {
  const { 
    searchText, setSearchText, searchResults, topBrands, topModels, 
    loading, isResultView, setIsResultView, triggerSearch 
  } = useSearchLogic();

  return (
    <SafeAreaView style={styles.safeArea}>
      {/* 1. Search Bar */}
      <View style={styles.searchHeader}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Ionicons name="arrow-back" size={26} color={Colors.black} />
        </TouchableOpacity>
        
        <View style={styles.inputWrapper}>
            <TextInput 
              style={styles.searchInput}
              value={searchText}
              onChangeText={(text) => {
                  setSearchText(text);
                  if (isResultView) setIsResultView(false);
              }}
              placeholder="Search Brand, Model or City..."
              autoFocus={true}
            />
            <TouchableOpacity onPress={() => triggerSearch(searchText)}>
               <Ionicons name="search-outline" size={20} color="gray" />
            </TouchableOpacity>
        </View>

        {loading ? <ActivityIndicator size="small" color="gray" style={{marginLeft: 10}} /> : (
            (searchText.length > 0 || isResultView) && 
            <TouchableOpacity onPress={() => { setSearchText(""); setIsResultView(false); }}>
                <Ionicons name="close-circle" size={20} color="gray" style={{marginLeft: 10}} />
            </TouchableOpacity>
        )}
      </View>

      <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={styles.scrollContent}>
        
        {/* --- 🚀 फिक्स: अगर रिजल्ट मोड है या कुछ टाइप किया है --- */}
        {(isResultView || (searchText.length > 0 && searchResults.length > 0)) ? (
          
          isResultView ? (
            // --- MODE A: Results Grid (Cards) ---
            <View style={{ marginTop: 10 }}>
               <Text style={styles.sectionTitle}>
                 {searchText ? `Results for "${searchText}"` : "Filtered Results"}
               </Text>
               
               {!loading && searchResults.length > 0 ? (
                 <View style={{ flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'space-between', marginTop: 10 }}>
                    {searchResults.map((item) => (
                      <CarCard key={item._id} item={item} width="48%" />
                    ))}
                 </View>
               ) : !loading && (
                 <View style={{alignItems:'center', marginTop: 50}}>
                    <Ionicons name="search-outline" size={50} color="#DDD" />
                    <Text style={{color: 'gray', marginTop: 10}}>No cars found matching your search.</Text>
                 </View>
               )}
            </View>
          ) : (
            // --- MODE B: Suggestions List (Text) ---
            <View style={styles.suggestionsCard}>
              {searchResults.map((item, index) => {
                const brand = item.brand?.name || "";
                const model = typeof item.model === 'object' ? item.model?.name : item.model;
                return (
                  <TouchableOpacity key={index} style={styles.suggestionItem} onPress={() => triggerSearch(`${brand} ${model}`)}>
                    <Ionicons name="car-outline" size={18} color="gray" />
                    <Text style={styles.suggestionText}>{brand} {model}</Text>
                    <Ionicons name="arrow-up-outline" size={14} color="#CCC" style={{transform: [{rotate: '315deg'}]}} />
                  </TouchableOpacity>
                );
              })}
            </View>
          )

        ) : null}

        {/* --- 3. Static Content (Hide when results are shown) --- */}
        {!isResultView && (
          <>
            <Text style={styles.sectionTitle}>Recommended for you</Text>
            <ScrollView horizontal showsHorizontalScrollIndicator={false}>
              {topModels.map((pair: any, index: number) => (
                <View key={index} style={{ flexDirection: 'column' }}>
                  {pair.map((item: any, i: number) => (
                    <TouchableOpacity key={i} style={styles.chip} onPress={() => triggerSearch(item.name)}>
                      <Text style={styles.chipText}>{item.name}</Text>
                    </TouchableOpacity>
                  ))}
                </View>
              ))}
            </ScrollView>

            <Text style={styles.sectionTitle}>Popular Brands</Text>
            <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={styles.brandScrollContent}>
              {topBrands.map((item) => (
                <TouchableOpacity key={item._id} style={styles.brandItem} onPress={() => triggerSearch(item.name)}>
                  <View style={styles.brandCircle}>
                    <View style={styles.logoContainer}><Image source={{ uri: item.image }} style={styles.brandLogo} /></View>
                  </View>
                  <Text style={styles.brandName}>{item.name}</Text>
                </TouchableOpacity>
              ))}
            </ScrollView>
          </>
        )}

        <View style={{ height: 120 }} />
      </ScrollView>
    </SafeAreaView>
  );
};

export default SearchScreen;