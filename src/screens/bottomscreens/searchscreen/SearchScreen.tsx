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

//   return (
//     <SafeAreaView style={styles.safeArea}>
//       <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={styles.scrollContent}>
        
//         {/* --- Search Bar Header --- */}
//         <View style={styles.searchHeader}>
//           <TouchableOpacity onPress={() => navigation.goBack()}>
//             <Ionicons name="arrow-back" size={26} color={Colors.black} />
//           </TouchableOpacity>
//           <TextInput 
//             style={styles.searchInput}
//             value={searchText}
//             onChangeText={setSearchText}
//             placeholder="Search..."
//           />
//         </View>

//         {/* --- Suggestions List Section --- */}
//         <View style={styles.suggestionsCard}>
//           {SEARCH_SUGGESTIONS.map((item, index) => (
//             <TouchableOpacity key={index} style={styles.suggestionItem}>
//               <Text style={styles.suggestionText}>{item}</Text>
//             </TouchableOpacity>
//           ))}
//         </View>

//         {/* --- Recommended For You Section --- */}
//         <Text style={styles.sectionTitle}>Recommended for you</Text>
//         <View style={styles.chipGrid}>
//           {RECOMMENDED_FOR_YOU.map((item, index) => (
//             <TouchableOpacity key={index} style={styles.chip}>
//               <Text style={styles.chipText}>{item}</Text>
//             </TouchableOpacity>
//           ))}
//         </View>

//         {/* --- Popular Brands Section --- */}
//         <Text style={styles.sectionTitle}>Popular Brands</Text>
//         <View style={styles.brandRow}>
//           {BRANDS.slice(0, 5).map((item) => (
//             <TouchableOpacity key={item.id} style={styles.brandCircle}>
//               <Image source={item.logo} style={styles.brandLogo} />
//             </TouchableOpacity>
//           ))}
//         </View>

//         {/* Space for Bottom Tab Bar */}
//         <View style={{ height: 120 }} />
//       </ScrollView>
//     </SafeAreaView>
//   );
// };

// export default SearchScreen;

// const styles = StyleSheet.create({
//   safeArea: { flex: 1, backgroundColor: Colors.white },
//   scrollContent: { paddingHorizontal: 20, paddingTop: 10 },

//   // Search Header
//   searchHeader: {
//     flexDirection: "row",
//     alignItems: "center",
//     backgroundColor: "#E0E0E0", // फिग्मा जैसा ग्रे कलर
//     borderRadius: 15,
//     paddingHorizontal: 15,
//     height: 55,
//     marginTop: 10,
//   },
//   searchInput: {
//     flex: 1,
//     marginLeft: 15,
//     fontFamily: Fonts.medium,
//     fontSize: 16,
//     color: Colors.black,
//   },

//   // Suggestions Card
//   suggestionsCard: {
//     backgroundColor: "#F9F9F9",
//     borderRadius: 15,
//     paddingVertical: 10,
//     marginTop: 20,
//     // हलकी शैडो के लिए
//     elevation: 2,
//     shadowColor: "#000",
//     shadowOffset: { width: 0, height: 1 },
//     shadowOpacity: 0.1,
//     shadowRadius: 2,
//   },
//   suggestionItem: {
//     paddingVertical: 12,
//     paddingHorizontal: 20,
//   },
//   suggestionText: {
//     fontFamily: Fonts.bold, // फिग्मा में ये बोल्ड और कैपिटल है
//     fontSize: 14,
//     color: Colors.black,
//     letterSpacing: 0.5,
//   },

//   // Section Title
//   sectionTitle: {
//     fontFamily: Fonts.bold,
//     fontSize: 16,
//     color: Colors.black,
//     marginTop: 30,
//     marginBottom: 15,
//   },

//   // Chip Grid
//   chipGrid: {
//     flexDirection: "row",
//     flexWrap: "wrap",
//     justifyContent: "space-between",
//   },
//   chip: {
//     width: "31%", // एक लाइन में 3 चिप्स
//     backgroundColor: "#D9D9D9",
//     paddingVertical: 12,
//     borderRadius: 8,
//     alignItems: "center",
//     marginBottom: 10,
//   },
//   chipText: {
//     fontFamily: Fonts.medium,
//     fontSize: 12,
//     color: Colors.black,
//     textAlign: 'center'
//   },

//   // Popular Brands
//   brandRow: {
//     flexDirection: "row",
//     justifyContent: "space-between",
//     alignItems: "center",
//     marginTop: 5,
//   },
//   brandCircle: {
//     width: 55,
//     height: 55,
//     borderRadius: 30,
//     borderWidth: 1,
//     borderColor: "#E0E0E0",
//     justifyContent: "center",
//     alignItems: "center",
//     backgroundColor: Colors.white,
//   },
//   brandLogo: {
//     width: 35,
//     height: 35,
//     resizeMode: "contain",
//   },
// });
















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

//   // --- Logic for 2 Rows Horizontal Scroll ---
//   // हम डेटा को 2-2 के जोड़ों (pairs) में बाँट देंगे
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

//         {/* --- Suggestions (Dynamic) --- */}
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
//         <ScrollView 
//           horizontal 
//           showsHorizontalScrollIndicator={false} 
//           contentContainerStyle={styles.horizontalContent}
//         >
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

//         {/* --- Popular Brands (Horizontal & Uniform Size) --- */}
//         <Text style={styles.sectionTitle}>Popular Brands</Text>
//         <ScrollView 
//           horizontal 
//           showsHorizontalScrollIndicator={false} 
//           contentContainerStyle={styles.horizontalContent}
//         >
//           {BRANDS.map((item) => (
//             <TouchableOpacity key={item.id} style={styles.brandCircle}>
//               <View style={styles.logoContainer}>
//                 <Image source={item.logo} style={styles.brandLogo} />
//               </View>
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

//   searchHeader: {
//     flexDirection: "row",
//     alignItems: "center",
//     backgroundColor: "#F2F4F7", 
//     borderRadius: 15,
//     paddingHorizontal: 15,
//     height: 55,
//     marginTop: 10,
//   },
//   searchInput: {
//     flex: 1,
//     marginLeft: 15,
//     fontFamily: Fonts.medium,
//     fontSize: 16,
//     color: Colors.black,
//   },

//   suggestionsCard: {
//     backgroundColor: "#FFFFFF",
//     borderRadius: 15,
//     paddingVertical: 10,
//     marginTop: 10,
//     elevation: 4,
//     shadowColor: "#000",
//     maxHeight: 250,
//   },
//   suggestionItem: {
//     paddingVertical: 12,
//     paddingHorizontal: 20,
//     borderBottomWidth: 0.5,
//     borderBottomColor: "#F0F0F0",
//   },
//   suggestionText: {
//     fontFamily: Fonts.bold,
//     fontSize: 13,
//     color: Colors.black,
//   },

//   sectionTitle: {
//     fontFamily: Fonts.bold,
//     fontSize: 16,
//     color: Colors.black,
//     marginTop: 30,
//     marginBottom: 15,
//   },

//   horizontalContent: {
//     paddingRight: 20,
//   },

//   // 2-Row Column Wrapper
//   columnWrapper: {
//     flexDirection: 'column',
//   },

//   chip: {
//     backgroundColor: "#F2F4F7",
//     paddingHorizontal: 20,
//     paddingVertical: 12,
//     borderRadius: 10,
//     marginRight: 12,
//     marginBottom: 12, // दो लाइन के बीच का स्पेस
//     alignItems: 'center',
//     justifyContent: 'center',
//     minWidth: 100, // एक जैसी चौड़ाई के लिए
//   },
//   chipText: {
//     fontFamily: Fonts.medium,
//     fontSize: 13,
//     color: Colors.black,
//   },

//   // --- Brand Logo Uniform Style ---
//   brandCircle: {
//     width: 65,
//     height: 65,
//     borderRadius: 35,
//     borderWidth: 1,
//     borderColor: "#E0E0E0",
//     justifyContent: "center",
//     alignItems: "center",
//     backgroundColor: Colors.white,
//     marginRight: 15,
//   },
//   logoContainer: {
//     width: 40, // फिक्स कंटेनर साइज
//     height: 40,
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
//   brandLogo: {
//     width: '100%',
//     height: '100%',
//     resizeMode: "contain", // यह छोटी बड़ी इमेज को बराबर फिट करेगा
//   },
// });

















import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  ScrollView,
  Image,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Ionicons from "@react-native-vector-icons/ionicons";
import { Colors } from "../../../theme/colors";
import { Fonts } from "../../../theme/fonts";
import { BRANDS, SEARCH_SUGGESTIONS, RECOMMENDED_FOR_YOU } from "../../../dummydata/dummyData";

const SearchScreen = ({ navigation }: any) => {
  const [searchText, setSearchText] = useState("");

  // डेटा को 2 लाइन में बाँटने का लॉजिक
  const chunkData = (data: any[], size: number) => {
    const chunked = [];
    for (let i = 0; i < data.length; i += size) {
      chunked.push(data.slice(i, i + size));
    }
    return chunked;
  };

  const recommendedPairs = chunkData(RECOMMENDED_FOR_YOU, 2);

  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={styles.scrollContent}>
        
        {/* --- Search Bar --- */}
        <View style={styles.searchHeader}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Ionicons name="arrow-back" size={26} color={Colors.black} />
          </TouchableOpacity>
          <TextInput 
            style={styles.searchInput}
            value={searchText}
            onChangeText={(text) => setSearchText(text)}
            placeholder="Search..."
            autoFocus={true}
          />
          {searchText.length > 0 && (
            <TouchableOpacity onPress={() => setSearchText("")}>
              <Ionicons name="close-circle" size={20} color="gray" />
            </TouchableOpacity>
          )}
        </View>

        {/* --- Suggestions (Only shows when typing) --- */}
        {searchText.length > 0 && (
          <View style={styles.suggestionsCard}>
            {SEARCH_SUGGESTIONS.filter(item => 
              item.toLowerCase().includes(searchText.toLowerCase())
            ).map((item, index) => (
              <TouchableOpacity key={index} style={styles.suggestionItem}>
                <Text style={styles.suggestionText}>{item}</Text>
              </TouchableOpacity>
            ))}
          </View>
        )}

        {/* --- Recommended For You (2 Rows Horizontal) --- */}
        <Text style={styles.sectionTitle}>Recommended for you</Text>
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          {recommendedPairs.map((pair, index) => (
            <View key={index} style={styles.columnWrapper}>
              {pair.map((item, i) => (
                <TouchableOpacity key={i} style={styles.chip}>
                  <Text style={styles.chipText}>{item}</Text>
                </TouchableOpacity>
              ))}
            </View>
          ))}
        </ScrollView>

        {/* --- Popular Brands (With Names Below Logos) --- */}
        <Text style={styles.sectionTitle}>Popular Brands</Text>
        <ScrollView 
          horizontal 
          showsHorizontalScrollIndicator={false} 
          contentContainerStyle={styles.brandScrollContent}
        >
          {BRANDS.map((item) => (
            <TouchableOpacity key={item.id} style={styles.brandItem} activeOpacity={0.7}>
              {/* लोगो वाला गोला */}
              <View style={styles.brandCircle}>
                <View style={styles.logoContainer}>
                  <Image source={item.logo} style={styles.brandLogo} />
                </View>
              </View>
              
              {/* ब्रांड का नाम यहाँ जोड़ा गया है */}
              <Text style={styles.brandName} numberOfLines={1}>
                {item.name}
              </Text>
            </TouchableOpacity>
          ))}
        </ScrollView>

        <View style={{ height: 120 }} />
      </ScrollView>
    </SafeAreaView>
  );
};

export default SearchScreen;

const styles = StyleSheet.create({
  safeArea: { flex: 1, backgroundColor: Colors.white },
  scrollContent: { paddingHorizontal: 20, paddingTop: 10 },
  searchHeader: { flexDirection: "row", alignItems: "center", backgroundColor: "#F2F4F7", borderRadius: 15, paddingHorizontal: 15, height: 55, marginTop: 10 },
  searchInput: { flex: 1, marginLeft: 15, fontFamily: Fonts.medium, fontSize: 16, color: Colors.black },
  suggestionsCard: { backgroundColor: "#FFFFFF", borderRadius: 15, paddingVertical: 10, marginTop: 10, elevation: 4, shadowColor: "#000", maxHeight: 250 },
  suggestionItem: { paddingVertical: 12, paddingHorizontal: 20, borderBottomWidth: 0.5, borderBottomColor: "#F0F0F0" },
  suggestionText: { fontFamily: Fonts.bold, fontSize: 13, color: Colors.black },
  sectionTitle: { fontFamily: Fonts.bold, fontSize: 16, color: Colors.black, marginTop: 30, marginBottom: 15 },
  columnWrapper: { flexDirection: 'column' },
  chip: { backgroundColor: "#F2F4F7", paddingHorizontal: 20, paddingVertical: 12, borderRadius: 10, marginRight: 12, marginBottom: 12, minWidth: 100, alignItems: 'center' },
  chipText: { fontFamily: Fonts.medium, fontSize: 13, color: Colors.black },

  // --- ब्रांड सेक्शन के लिए स्टाइल्स ---
  brandScrollContent: {
    paddingBottom: 10,
  },
  brandItem: {
    alignItems: 'center', // सेंटर अलाइनमेंट के लिए
    marginRight: 20,
  },
  brandCircle: {
    width: 65,
    height: 65,
    borderRadius: 35,
    borderWidth: 1,
    borderColor: "#E5E7EB",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: Colors.white,
    // हलकी परछाई (Shadow)
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
  },
  logoContainer: {
    width: 40,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
  },
  brandLogo: {
    width: '100%',
    height: '100%',
    resizeMode: "contain",
  },
  brandName: {
    marginTop: 8,
    fontSize: 11,
    fontFamily: Fonts.medium,
    color: 'black',
    textAlign: 'center',
  },
});