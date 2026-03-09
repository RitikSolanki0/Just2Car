// import React from 'react';
// import { View, Text, TouchableOpacity, TextInput, StyleSheet } from 'react-native';
// import Ionicons from "@react-native-vector-icons/ionicons";
// import { Fonts } from '../../theme/fonts';
// import { Colors } from '../../theme/colors';

// const FeaturesSection = ({ features, toggleFeature, availableFeatures }: any) => (
//   <View>
//     <Text style={styles.label}>Features</Text>
//     <View style={styles.searchBox}>
//       <TextInput placeholder="Search" style={styles.searchInput} placeholderTextColor="#C7C7CD" />
//     </View>
//     <View style={styles.checkboxGrid}>
//       {availableFeatures.map((item: any) => (
//         <TouchableOpacity key={item.id} style={styles.checkboxItem} onPress={() => toggleFeature(item.id)}>
//           <Ionicons 
//             name={features.includes(item.id) ? "checkbox" : "square-outline"} 
//             size={24} color={Colors.primary} 
//           />
//           <Text style={styles.checkboxLabel}>{item.label}</Text>
//         </TouchableOpacity>
//       ))}
//     </View>
//   </View>
// );

// export default FeaturesSection;

// const styles = StyleSheet.create({
//   label: { fontFamily: Fonts.bold, fontSize: 16, color: Colors.black, marginTop: 18, marginBottom: 8 },
//   searchBox: { backgroundColor: "#F2F4F7", borderRadius: 10, paddingHorizontal: 15, height: 45, justifyContent: "center" },
//   searchInput: { fontFamily: Fonts.regular, fontSize: 14 },
//   checkboxGrid: { flexDirection: "row", flexWrap: "wrap", marginTop: 15 },
//   checkboxItem: { width: "50%", flexDirection: "row", alignItems: "center", marginBottom: 15 },
//   checkboxLabel: { marginLeft: 10, fontFamily: Fonts.medium, fontSize: 14, color: Colors.black },
// });


















import React, { useState } from 'react';
import { View, Text, TouchableOpacity, TextInput, StyleSheet } from 'react-native';
import Ionicons from "@react-native-vector-icons/ionicons";
import { Fonts } from '../../theme/fonts';
import { Colors } from '../../theme/colors';

const FeaturesSection = ({ features, setFeatures }: any) => {
  const [inputText, setInputText] = useState("");

  // --- फीचर ऐड करने का फंक्शन ---
  const addFeature = () => {
    if (inputText.trim().length > 0) {
      // अगर पहले से एडेड नहीं है तो जोड़ें
      if (!features.includes(inputText.trim())) {
        setFeatures([...features, inputText.trim()]);
      }
      setInputText(""); // इनपुट साफ़ करें
    }
  };

  // --- फीचर हटाने का फंक्शन ---
  const removeFeature = (itemToRemove: string) => {
    setFeatures(features.filter((item: string) => item !== itemToRemove));
  };

  return (
    <View style={styles.container}>
      <Text style={styles.label}>Features</Text>

      {/* --- Input & Add Button Row --- */}
      <View style={styles.inputRow}>
        <View style={styles.searchBox}>
          <TextInput 
            placeholder="Type feature (e.g. Sunroof)" 
            style={styles.searchInput} 
            placeholderTextColor="#9CA3AF"
            value={inputText}
            onChangeText={setInputText}
            onSubmitEditing={addFeature} // कीबोर्ड के 'Enter' से भी ऐड होगा
          />
        </View>
        <TouchableOpacity style={styles.addBtn} onPress={addFeature} activeOpacity={0.8}>
           <Text style={styles.addBtnText}>ADD</Text>
        </TouchableOpacity>
      </View>

      {/* --- Selected Features (Chips with Cross) --- */}
      <View style={styles.chipContainer}>
        {features.map((item: string, index: number) => (
          <View key={index} style={styles.chip}>
            <Text style={styles.chipLabel}>{item}</Text>
            <TouchableOpacity onPress={() => removeFeature(item)} style={styles.crossIcon}>
              <Ionicons name="close-circle" size={18} color={Colors.primary} />
            </TouchableOpacity>
          </View>
        ))}
      </View>

      {/* अगर कोई फीचर नहीं है तो हिंट दिखाएँ */}
      {features.length === 0 && (
        <Text style={styles.hintText}>No features added yet. Type and click ADD.</Text>
      )}
    </View>
  );
};

export default FeaturesSection;

const styles = StyleSheet.create({
  container: { marginTop: 10 },
  label: { fontFamily: Fonts.bold, fontSize: 16, color: Colors.black, marginTop: 18, marginBottom: 10 },
  
  inputRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
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
  
  addBtn: {
    backgroundColor: Colors.secondary,
    height: 48,
    paddingHorizontal: 20,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 10,
    elevation: 2,
  },
  addBtnText: {
    color: Colors.white,
    fontFamily: Fonts.bold,
    fontSize: 13,
  },

  // Chips Container Style
  chipContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap', // अगली लाइन में जाने के लिए
    marginTop: 15,
  },
  chip: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#F3F4F6', // हल्का ग्रे बैकग्राउंड
    paddingHorizontal: 12,
    paddingVertical: 8,
    borderRadius: 20,
    marginRight: 10,
    marginBottom: 10,
    borderWidth: 1,
    borderColor: '#E5E7EB',
  },
  chipLabel: {
    fontFamily: Fonts.medium,
    fontSize: 13,
    color: Colors.black,
  },
  crossIcon: {
    marginLeft: 8,
  },
  hintText: {
    fontSize: 12,
    color: 'gray',
    fontFamily: Fonts.regular,
    fontStyle: 'italic',
    marginTop: 5,
  }
});