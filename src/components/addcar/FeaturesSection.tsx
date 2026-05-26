
// import React, { useState } from 'react';
// import { View, Text, TouchableOpacity, TextInput, StyleSheet } from 'react-native';
// import Ionicons from "@react-native-vector-icons/ionicons";
// import { Fonts } from '../../theme/fonts';
// import { Colors } from '../../theme/colors';

// const FeaturesSection = ({ features, setFeatures }: any) => {
//   const [inputText, setInputText] = useState("");

//   // --- फीचर ऐड करने का फंक्शन ---
//   const addFeature = () => {
//     if (inputText.trim().length > 0) {
//       // अगर पहले से एडेड नहीं है तो जोड़ें
//       if (!features.includes(inputText.trim())) {
//         setFeatures([...features, inputText.trim()]);
//       }
//       setInputText(""); // इनपुट साफ़ करें
//     }
//   };

//   // --- फीचर हटाने का फंक्शन ---
//   const removeFeature = (itemToRemove: string) => {
//     setFeatures(features.filter((item: string) => item !== itemToRemove));
//   };

//   return (
//     <View style={styles.container}>
//       <Text style={styles.label}>Features</Text>

//       {/* --- Input & Add Button Row --- */}
//       <View style={styles.inputRow}>
//         <View style={styles.searchBox}>
//           <TextInput 
//             placeholder="Type feature (e.g. Sunroof)" 
//             style={styles.searchInput} 
//             placeholderTextColor="#9CA3AF"
//             value={inputText}
//             onChangeText={setInputText}
//             onSubmitEditing={addFeature} // कीबोर्ड के 'Enter' से भी ऐड होगा
//           />
//         </View>
//         <TouchableOpacity style={styles.addBtn} onPress={addFeature} activeOpacity={0.8}>
//            <Text style={styles.addBtnText}>ADD</Text>
//         </TouchableOpacity>
//       </View>

//       {/* --- Selected Features (Chips with Cross) --- */}
//       <View style={styles.chipContainer}>
//         {features.map((item: string, index: number) => (
//           <View key={index} style={styles.chip}>
//             <Text style={styles.chipLabel}>{item}</Text>
//             <TouchableOpacity onPress={() => removeFeature(item)} style={styles.crossIcon}>
//               <Ionicons name="close-circle" size={18} color={Colors.primary} />
//             </TouchableOpacity>
//           </View>
//         ))}
//       </View>

//       {/* अगर कोई फीचर नहीं है तो हिंट दिखाएँ */}
//       {features.length === 0 && (
//         <Text style={styles.hintText}>No features added yet. Type and click ADD.</Text>
//       )}
//     </View>
//   );
// };

// export default FeaturesSection;

// const styles = StyleSheet.create({
//   container: { marginTop: 10 },
//   label: { fontFamily: Fonts.bold, fontSize: 16, color: Colors.black, marginTop: 18, marginBottom: 10 },
  
//   inputRow: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     justifyContent: 'space-between',
//   },
//   searchBox: { 
//     flex: 1,
//     backgroundColor: "#F2F4F7", 
//     borderRadius: 10, 
//     paddingHorizontal: 15, 
//     height: 48, 
//     justifyContent: "center",
//     borderWidth: 1,
//     borderColor: '#E5E7EB'
//   },
//   searchInput: { fontFamily: Fonts.regular, fontSize: 14, color: 'black' },
  
//   addBtn: {
//     backgroundColor: Colors.secondary,
//     height: 48,
//     paddingHorizontal: 20,
//     borderRadius: 10,
//     justifyContent: 'center',
//     alignItems: 'center',
//     marginLeft: 10,
//     elevation: 2,
//   },
//   addBtnText: {
//     color: Colors.white,
//     fontFamily: Fonts.bold,
//     fontSize: 13,
//   },

//   // Chips Container Style
//   chipContainer: {
//     flexDirection: 'row',
//     flexWrap: 'wrap', // अगली लाइन में जाने के लिए
//     marginTop: 15,
//   },
//   chip: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     backgroundColor: '#F3F4F6', // हल्का ग्रे बैकग्राउंड
//     paddingHorizontal: 12,
//     paddingVertical: 8,
//     borderRadius: 20,
//     marginRight: 10,
//     marginBottom: 10,
//     borderWidth: 1,
//     borderColor: '#E5E7EB',
//   },
//   chipLabel: {
//     fontFamily: Fonts.medium,
//     fontSize: 13,
//     color: Colors.black,
//   },
//   crossIcon: {
//     marginLeft: 8,
//   },
//   hintText: {
//     fontSize: 12,
//     color: 'gray',
//     fontFamily: Fonts.regular,
//     fontStyle: 'italic',
//     marginTop: 5,
//   }
// });






















// import React, { useState } from 'react';
// import { View, Text, TouchableOpacity, TextInput, StyleSheet } from 'react-native';
// import Ionicons from "@react-native-vector-icons/ionicons";
// import { Fonts } from '../../theme/fonts';
// import { Colors } from '../../theme/colors';

// // --- 🚀 फिक्स: 'error' प्रोप यहाँ रिसीव करें ---
// const FeaturesSection = ({ features, setFeatures, error }: any) => {
//   const [inputText, setInputText] = useState("");

//   const addFeature = () => {
//     if (inputText.trim().length > 0) {
//       if (!features.includes(inputText.trim())) {
//         setFeatures([...features, inputText.trim()]);
//       }
//       setInputText("");
//     }
//   };

//   const removeFeature = (itemToRemove: string) => {
//     setFeatures(features.filter((item: string) => item !== itemToRemove));
//   };

//   return (
//     <View style={styles.container}>
//       <Text style={styles.label}>Features</Text>

//       <View style={styles.inputRow}>
//         {/* --- 🚀 फिक्स: एरर होने पर यहाँ लाल बॉर्डर दिखेगी --- */}
//         <View style={[
//             styles.searchBox, 
//             error && { borderColor: 'red', borderWidth: 1.5 }
//         ]}>
//           <TextInput 
//             placeholder="Feature(e.g. Sunroof, Alloy wheel)" 
//             style={styles.searchInput} 
//             placeholderTextColor="#9CA3AF"
//             value={inputText}
//             onChangeText={setInputText}
//             onSubmitEditing={addFeature}
//           />
//         </View>
//         <TouchableOpacity style={styles.addBtn} onPress={addFeature} activeOpacity={0.8}>
//            <Text style={styles.addBtnText}>ADD</Text>
//         </TouchableOpacity>
//       </View>

//       <View style={styles.chipContainer}>
//         {features.map((item: string, index: number) => (
//           <View key={index} style={styles.chip}>
//             <Text style={styles.chipLabel}>{item}</Text>
//             <TouchableOpacity onPress={() => removeFeature(item)} style={styles.crossIcon}>
//               <Ionicons name="close-circle" size={18} color={Colors.primary} />
//             </TouchableOpacity>
//           </View>
//         ))}
//       </View>

//       {features.length === 0 && (
//         <Text style={styles.hintText}>No features added yet. Type and click ADD.</Text>
//       )}
//     </View>
//   );
// };

// export default FeaturesSection;

// const styles = StyleSheet.create({
//   container: { marginTop: 10 },
//   label: { fontFamily: Fonts.bold, fontSize: 16, color: Colors.black, marginTop: 18, marginBottom: 10 },
//   inputRow: { flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' },
//   searchBox: { 
//     flex: 1,
//     backgroundColor: "#F2F4F7", 
//     borderRadius: 10, 
//     paddingHorizontal: 15, 
//     height: 48, 
//     justifyContent: "center",
//     borderWidth: 1,
//     borderColor: '#E5E7EB'
//   },
//   searchInput: { fontFamily: Fonts.regular, fontSize: 14, color: 'black' },
//   addBtn: { backgroundColor: Colors.secondary, height: 48, paddingHorizontal: 20, borderRadius: 10, justifyContent: 'center', alignItems: 'center', marginLeft: 10, elevation: 2 },
//   addBtnText: { color: Colors.white, fontFamily: Fonts.bold, fontSize: 13 },
//   chipContainer: { flexDirection: 'row', flexWrap: 'wrap', marginTop: 15 },
//   chip: { flexDirection: 'row', alignItems: 'center', backgroundColor: '#F3F4F6', paddingHorizontal: 12, paddingVertical: 8, borderRadius: 20, marginRight: 10, marginBottom: 10, borderWidth: 1, borderColor: '#E5E7EB' },
//   chipLabel: { fontFamily: Fonts.medium, fontSize: 13, color: Colors.black },
//   crossIcon: { marginLeft: 8 },
//   hintText: { fontSize: 12, color: 'gray', fontFamily: Fonts.regular, fontStyle: 'italic', marginTop: 5 }
// });


























// import React, { useState } from 'react';
// import { View, Text, TouchableOpacity, TextInput, StyleSheet, ScrollView } from 'react-native';
// import Ionicons from "@react-native-vector-icons/ionicons";
// import { Fonts } from '../../theme/fonts';
// import { Colors } from '../../theme/colors';

// const SUGGESTED_FEATURES = [
//   "Power Steering", "Power Windows", "Sunroof", "Alloy Wheels", "Air Conditioner", 
//    "ABS", "Airbags", 
//   "Android Auto", "Apple CarPlay", "Bluetooth Connectivity", 
//   "Navigation System", "LED Headlights", "Fog Lights", "Adjustable Steering", 
//   "Foldable Rear Seats", "USB Charging Port"
// ];

// const FeaturesSection = ({ features, setFeatures, error }: any) => {
//   const [inputText, setInputText] = useState("");

//   // --- Manual Add Logic ---
//   const addFeature = () => {
//     const trimmed = inputText.trim();
//     if (trimmed.length > 0) {
//       if (!features.includes(trimmed)) {
//         setFeatures([...features, trimmed]);
//       }
//       setInputText("");
//     }
//   };

//   // --- Toggle Selection Logic (From List) ---
//   const toggleFeature = (item: string) => {
//     if (features.includes(item)) {
//       setFeatures(features.filter((f: string) => f !== item));
//     } else {
//       setFeatures([...features, item]);
//     }
//   };

//   const removeFeature = (itemToRemove: string) => {
//     setFeatures(features.filter((item: string) => item !== itemToRemove));
//   };

//   return (
//     <View style={styles.container}>
//       <Text style={styles.label}>Features</Text>

//       {/* 1. Manual Entry Row */}
//       <View style={styles.inputRow}>
//         <View style={[
//             styles.searchBox, 
//             error && features.length === 0 && { borderColor: 'red', borderWidth: 1.5 }
//         ]}>
//           <TextInput 
//             placeholder="Type manually (e.g. Roof Rails)" 
//             style={styles.searchInput} 
//             placeholderTextColor="#9CA3AF"
//             value={inputText}
//             onChangeText={setInputText}
//             onSubmitEditing={addFeature}
//           />
//         </View>
//         <TouchableOpacity style={styles.addBtn} onPress={addFeature} activeOpacity={0.8}>
//            <Text style={styles.addBtnText}>ADD</Text>
//         </TouchableOpacity>
//       </View>

//       {/* 2. Suggestion List Section */}
//       <Text style={styles.subLabel}>Quick Select Suggestions</Text>
//       <View style={styles.suggestionContainer}>
//         {SUGGESTED_FEATURES.map((item, index) => {
//           const isSelected = features.includes(item);
//           return (
//             <TouchableOpacity 
//               key={index} 
//               style={[styles.suggestItem, isSelected && styles.suggestItemActive]}
//               onPress={() => toggleFeature(item)}
//             >
//               {isSelected && <Ionicons name="checkmark-circle" size={14} color="white" style={{marginRight: 4}} />}
//               <Text style={[styles.suggestText, isSelected && styles.suggestTextActive]}>{item}</Text>
//             </TouchableOpacity>
//           );
//         })}
//       </View>

//       {/* 3. Selected Features Display (Added Chips) */}
//       <Text style={styles.subLabel}>Selected Features ({features.length})</Text>
//       <View style={styles.chipContainer}>
//         {features.map((item: string, index: number) => (
//           <View key={index} style={styles.chip}>
//             <Text style={styles.chipLabel}>{item}</Text>
//             <TouchableOpacity onPress={() => removeFeature(item)} style={styles.crossIcon}>
//               <Ionicons name="close-circle" size={18} color={Colors.primary} />
//             </TouchableOpacity>
//           </View>
//         ))}
//       </View>

//       {features.length === 0 && (
//         <Text style={styles.hintText}>* Please select at least one feature.</Text>
//       )}
//     </View>
//   );
// };

// export default FeaturesSection;

// const styles = StyleSheet.create({
//   container: { marginTop: 10 },
//   label: { fontFamily: Fonts.bold, fontSize: 16, color: Colors.black, marginTop: 18, marginBottom: 10 },
//   subLabel: { fontFamily: Fonts.bold, fontSize: 13, color: Colors.textSecondary, marginTop: 15, marginBottom: 10, textTransform: 'uppercase' },
  
//   inputRow: { flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' },
//   searchBox: { 
//     flex: 1,
//     backgroundColor: "#F2F4F7", 
//     borderRadius: 10, 
//     paddingHorizontal: 15, 
//     height: 48, 
//     justifyContent: "center",
//     borderWidth: 1,
//     borderColor: '#E5E7EB'
//   },
//   searchInput: { fontFamily: Fonts.regular, fontSize: 14, color: 'black' },
//   addBtn: { backgroundColor: Colors.primary, height: 48, paddingHorizontal: 20, borderRadius: 10, justifyContent: 'center', alignItems: 'center', marginLeft: 10 },
//   addBtnText: { color: Colors.white, fontFamily: Fonts.bold, fontSize: 13 },

//   // Suggestion Styles
//   suggestionContainer: { flexDirection: 'row', flexWrap: 'wrap', marginTop: 5 },
//   suggestItem: { 
//     flexDirection: 'row',
//     alignItems: 'center',
//     backgroundColor: '#FFFFFF', 
//     borderWidth: 1, 
//     borderColor: '#D1D5DB', 
//     paddingHorizontal: 12, 
//     paddingVertical: 6, 
//     borderRadius: 8, 
//     marginRight: 8, 
//     marginBottom: 8 
//   },
//   suggestItemActive: { backgroundColor: Colors.secondary, borderColor: Colors.secondary },
//   suggestText: { fontFamily: Fonts.medium, fontSize: 12, color: '#4B5563' },
//   suggestTextActive: { color: 'white', fontFamily: Fonts.bold },

//   // Selected Chips Styles
//   chipContainer: { flexDirection: 'row', flexWrap: 'wrap', marginTop: 5 },
//   chip: { flexDirection: 'row', alignItems: 'center', backgroundColor: '#F3F4F6', paddingHorizontal: 12, paddingVertical: 8, borderRadius: 20, marginRight: 10, marginBottom: 10, borderWidth: 1, borderColor: '#E5E7EB' },
//   chipLabel: { fontFamily: Fonts.medium, fontSize: 13, color: Colors.black },
//   crossIcon: { marginLeft: 8 },
//   hintText: { fontSize: 12, color: '#EF4444', fontFamily: Fonts.regular, fontStyle: 'italic', marginTop: 5 }
// });




















import React, { useState, useMemo } from 'react';
import { View, Text, TouchableOpacity, TextInput, StyleSheet } from 'react-native';
import Ionicons from "@react-native-vector-icons/ionicons";
import { Fonts } from '../../theme/fonts';
import { Colors } from '../../theme/colors';

const SUGGESTED_FEATURES = [
   "Power Steering", "Power Windows", "Sunroof", "Alloy Wheels", "Air Conditioner", 
   "ABS", "Airbags", 
  "Android Auto", "Apple CarPlay", "Bluetooth Connectivity", 
  "Navigation System", "LED Headlights", "Fog Lights", "Adjustable Steering", 
  "Foldable Rear Seats", "USB Charging Port"
];

const FeaturesSection = ({ features, setFeatures, error }: any) => {
  const [inputText, setInputText] = useState("");

  // --- 🚀 logic: Manual added features ko top par lane ke liye ---
  const displayList = useMemo(() => {
    // Wo features jo static list mein nahi hain (User ne khud type kiye hain)
    const customFeatures = features.filter((f: string) => !SUGGESTED_FEATURES.includes(f));
    // Dono ko merge kar do (Custom pehle, fir Suggestions)
    return [...customFeatures, ...SUGGESTED_FEATURES];
  }, [features]);

  const addFeature = () => {
    const trimmed = inputText.trim();
    if (trimmed.length > 0) {
      if (!features.includes(trimmed)) {
        setFeatures([trimmed, ...features]); // Naya feature array mein sabse upar
      }
      setInputText("");
    }
  };

  const toggleFeature = (item: string) => {
    if (features.includes(item)) {
      // Remove feature
      setFeatures(features.filter((f: string) => f !== item));
    } else {
      // Add feature
      setFeatures([...features, item]);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.label}>Features</Text>

      {/* 1. Input Row */}
      <View style={styles.inputRow}>
        <View style={[
            styles.searchBox, 
            error && features.length === 0 && { borderColor: 'red', borderWidth: 1.5 }
        ]}>
          <TextInput 
            placeholder="Type feature (e.g. Roof Rails)" 
            style={styles.searchInput} 
            placeholderTextColor="#9CA3AF"
            value={inputText}
            onChangeText={setInputText}
            onSubmitEditing={addFeature}
          />
        </View>
        <TouchableOpacity style={styles.addBtn} onPress={addFeature} activeOpacity={0.8}>
           <Text style={styles.addBtnText}>ADD</Text>
        </TouchableOpacity>
      </View>

      <Text style={styles.subLabel}>Tap to select or remove features</Text>

      {/* 2. Unified Grid Section */}
      <View style={styles.suggestionContainer}>
        {displayList.map((item, index) => {
          const isSelected = features.includes(item);
          const isCustom = !SUGGESTED_FEATURES.includes(item);

          return (
            <TouchableOpacity 
              key={`${item}-${index}`} 
              style={[
                styles.suggestItem, 
                isSelected && styles.suggestItemActive,
                isCustom && isSelected && { borderColor: Colors.primary, borderWidth: 1.5 } // Custom features ko highlight
              ]}
              onPress={() => toggleFeature(item)}
              activeOpacity={0.7}
            >
              <Text style={[styles.suggestText, isSelected && styles.suggestTextActive]}>
                {item}
              </Text>
              {isSelected && (
                <Ionicons 
                  name={isCustom ? "close-circle" : "checkmark-circle"} 
                  size={16} 
                  color="white" 
                  style={{ marginLeft: 6 }} 
                />
              )}
            </TouchableOpacity>
          );
        })}
      </View>

      {features.length === 0 && (
        <Text style={styles.hintText}>* Please select or type at least one feature.</Text>
      )}
    </View>
  );
};

export default FeaturesSection;

const styles = StyleSheet.create({
  container: { marginTop: 10 },
  label: { fontFamily: Fonts.bold, fontSize: 16, color: Colors.black, marginTop: 18, marginBottom: 10 },
  subLabel: { fontFamily: Fonts.bold, fontSize: 12, color: Colors.textSecondary, marginTop: 10, marginBottom: 12, textTransform: 'uppercase' },
  
  inputRow: { flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', marginBottom: 5 },
  searchBox: { 
    flex: 1,
    backgroundColor: "#F2F4F7", 
    borderRadius: 10, 
    paddingHorizontal: 15, 
    height: 48, 
    justifyContent: "center",
    borderWidth: 1,
    borderColor: '#E5E7EB'
  },
  searchInput: { fontFamily: Fonts.regular, fontSize: 14, color: 'black' },
  addBtn: { backgroundColor: Colors.secondary, height: 48, paddingHorizontal: 20, borderRadius: 10, justifyContent: 'center', alignItems: 'center', marginLeft: 10 },
  addBtnText: { color: Colors.white, fontFamily: Fonts.bold, fontSize: 13 },

  // Unified Grid Styles
  suggestionContainer: { flexDirection: 'row', flexWrap: 'wrap', marginTop: 5 },
  suggestItem: { 
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FFFFFF', 
    borderWidth: 1, 
    borderColor: '#E5E7EB', 
    paddingHorizontal: 14, 
    paddingVertical: 8, 
    borderRadius: 10, 
    marginRight: 10, 
    marginBottom: 10,
    elevation: 1, // Halka sa shadow professional look ke liye
  },
  suggestItemActive: { 
    backgroundColor: Colors.primary, 
    borderColor: Colors.primary,
    elevation: 3 
  },
  suggestText: { fontFamily: Fonts.medium, fontSize: 13, color: '#4B5563' },
  suggestTextActive: { color: 'white', fontFamily: Fonts.bold },

  hintText: { fontSize: 12, color: '#EF4444', fontFamily: Fonts.regular, fontStyle: 'italic', marginTop: 5 }
});