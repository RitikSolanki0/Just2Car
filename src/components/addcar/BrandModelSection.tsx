// import React, { useState } from 'react';
// import {
//   View,
//   Text,
//   TouchableOpacity,
//   Modal,
//   FlatList,
//   StyleSheet,
//   Dimensions,
//   TouchableWithoutFeedback
// } from 'react-native';
// import Ionicons from "@react-native-vector-icons/ionicons";
// import { Fonts } from '../../theme/fonts';
// import { Colors } from '../../theme/colors';

// const { height } = Dimensions.get('window');

// const CustomDropdown = ({ label, placeholder, data, selectedValue, onSelect }: any) => {
//   const [visible, setVisible] = useState(false);

//   const handleSelect = (item: string) => {
//     onSelect(item);
//     setVisible(false);
//   };

//   return (
//     <View style={{ flex: 1 }}>
//       <Text style={styles.label}>{label}</Text>
//       <TouchableOpacity 
//         style={styles.dropdown} 
//         onPress={() => setVisible(true)}
//       >
//         <Text style={[styles.dropdownText, selectedValue && { color: 'black' }]}>
//           {selectedValue || placeholder}
//         </Text>
//         <Ionicons name="chevron-down" size={20} color="black" />
//       </TouchableOpacity>

//       {/* Dropdown Modal */}
//       <Modal visible={visible} transparent animationType="fade">
//         <TouchableWithoutFeedback onPress={() => setVisible(false)}>
//           <View style={styles.modalOverlay}>
//             <View style={styles.modalContent}>
//               <Text style={styles.modalTitle}>Select {label}</Text>
//               <FlatList
//                 data={data}
//                 keyExtractor={(item) => item}
//                 showsVerticalScrollIndicator={false}
//                 style={{ maxHeight: height * 0.4 }} // लगभग 5-6 वैल्यूज़ दिखाने के लिए
//                 renderItem={({ item }) => (
//                   <TouchableOpacity 
//                     style={styles.optionItem} 
//                     onPress={() => handleSelect(item)}
//                   >
//                     <Text style={[styles.optionText, selectedValue === item && styles.selectedText]}>
//                       {item}
//                     </Text>
//                     {selectedValue === item && <Ionicons name="checkmark" size={18} color={Colors.primary} />}
//                   </TouchableOpacity>
//                 )}
//               />
//             </View>
//           </View>
//         </TouchableWithoutFeedback>
//       </Modal>
//     </View>
//   );
// };

// // दोनों को एक ही Row में रखने वाला मेन एक्सपोर्ट
// const BrandModelSection = ({ brand, setBrand, model, setModel, brandsList, modelsList }: any) => (
//   <View style={styles.row}>
//     <CustomDropdown 
//       label="Brand" 
//       placeholder="Select Brand" 
//       data={brandsList} 
//       selectedValue={brand} 
//       onSelect={setBrand} 
//     />
//     <View style={{ width: 15 }} />
//     <CustomDropdown 
//       label="Model" 
//       placeholder="Select Model" 
//       data={modelsList} 
//       selectedValue={model} 
//       onSelect={setModel} 
//     />
//   </View>
// );

// export default BrandModelSection;

// const styles = StyleSheet.create({
//   label: { fontFamily: Fonts.bold, fontSize: 16, color: Colors.black, marginTop: 18, marginBottom: 8 },
//   dropdown: { 
//     backgroundColor: "#F2F4F7", 
//     borderRadius: 12, 
//     paddingHorizontal: 15, 
//     height: 50, 
//     flexDirection: 'row', 
//     alignItems: 'center', 
//     justifyContent: 'space-between' 
//   },
//   dropdownText: { color: "#C7C7CD", fontFamily: Fonts.regular, fontSize: 14 },
//   row: { flexDirection: "row", justifyContent: "space-between" },
  
//   // Modal Styles
//   modalOverlay: { flex: 1, backgroundColor: 'rgba(0,0,0,0.5)', justifyContent: 'center', alignItems: 'center' },
//   modalContent: { width: '80%', backgroundColor: 'white', borderRadius: 20, padding: 20, elevation: 5 },
//   modalTitle: { fontFamily: Fonts.bold, fontSize: 18, marginBottom: 15, textAlign: 'center', color: Colors.primary },
//   optionItem: { paddingVertical: 15, borderBottomWidth: 0.5, borderBottomColor: '#eee', flexDirection: 'row', justifyContent: 'space-between' },
//   optionText: { fontFamily: Fonts.medium, fontSize: 16, color: 'gray' },
//   selectedText: { color: Colors.primary, fontFamily: Fonts.bold },
// });











import React from 'react';
import { View, StyleSheet } from 'react-native';
import CustomDropdown from './CustomDropdown'; // अभी बनाया हुआ कंपोनेंट

// const BrandModelSection = ({ 
//   brand, setBrand, model, setModel, variant, setVariant,
//   brandsList, modelsList, variantsList 
// }: any) => (
//   <View style={styles.container}>
//     {/* Brand और Model एक ही Row में */}
//     <View style={styles.row}>
//       <CustomDropdown 
//         label="Brand" 
//         placeholder="Select Brand" 
//         data={brandsList} 
//         selectedValue={brand} 
//         onSelect={setBrand} 
//       />
//       <View style={{ width: 15 }} />
//       <CustomDropdown 
//         label="Model" 
//         placeholder="Select Model" 
//         data={modelsList} 
//         selectedValue={model} 
//         onSelect={setModel} 
//       />
//     </View>

//     {/* Variant नीचे पूरी चौड़ाई में (Optional जैसा आपने माँगा था) */}
//     <View style={styles.marginTop}>
//       <CustomDropdown 
//         label="Variant" 
//         placeholder="Select Variant" 
//         data={variantsList} 
//         selectedValue={variant} 
//         onSelect={setVariant} 
//       />
//     </View>
//   </View>
// );

const BrandModelSection = ({ brand, setBrand, model, setModel, variant, setVariant, brandsList, modelsList, variantsList }: any) => (
  <View>
    <View style={{ flexDirection: "row" }}>
      <CustomDropdown label="Brand" placeholder="Select" data={brandsList} selectedValue={brand} onSelect={setBrand} />
      <View style={{ width: 15 }} />
      <CustomDropdown label="Model" placeholder="Select" data={modelsList} selectedValue={model} onSelect={setModel} />
    </View>
    <View style={{ marginTop: 5 }}>
      <CustomDropdown label="Variant" placeholder="Select Variant" data={variantsList} selectedValue={variant} onSelect={setVariant} />
    </View>
  </View>
);

export default BrandModelSection;

const styles = StyleSheet.create({
  container: { width: '100%' },
  row: { flexDirection: "row", justifyContent: "space-between" },
  marginTop: { marginTop: 5 }
});