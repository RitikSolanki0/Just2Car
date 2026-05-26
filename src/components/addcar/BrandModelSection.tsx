
// import React from 'react';
// import { View, Text, TextInput, StyleSheet } from 'react-native';
// import CustomDropdown from './CustomDropdown'; 
// import { Fonts } from '../../theme/fonts';
// import { Colors } from '../../theme/colors';

// const BrandModelSection = ({ 
//   brand, 
//   setBrand, 
//   model, 
//   setModel, 
//   variant, 
//   setVariant, 
//   brandsList, 
//   modelsList 
// }: any) => (
//   <View style={styles.container}>
//     {/* --- Brand & Model Row --- */}
//     <View style={styles.row}>
//       <CustomDropdown 
//         label="Brand" 
//         placeholder="Select" 
//         data={brandsList} 
//         selectedValue={brand} 
//         onSelect={setBrand} 
//       />
//       <View style={{ width: 15 }} />
//       <CustomDropdown 
//         label="Model" 
//         placeholder="Select" 
//         data={modelsList} 
//         selectedValue={model} 
//         onSelect={setModel} 
//       />
//     </View>

//     {/* --- Variant Input (🚀 ड्रॉपडाउन हटाकर इनपुट लगाया गया है) --- */}
//     <View style={styles.marginTop}>
//       <Text style={styles.label}>Variant</Text>
//       <TextInput
//         style={styles.inputFull}
//         placeholder="e.g. VXI Plus"
//         placeholderTextColor="#9CA3AF"
//         value={variant}
//         onChangeText={setVariant}
//       />
//     </View>
//   </View>
// );

// export default BrandModelSection;

// const styles = StyleSheet.create({
//   container: { 
//     width: '100%' 
//   },
//   row: { 
//     flexDirection: "row", 
//     justifyContent: "space-between" 
//   },
//   marginTop: { 
//     marginTop: 5 
//   },
//   label: { 
//     fontFamily: Fonts.bold, 
//     fontSize: 16, 
//     color: 'black', 
//     marginTop: 18, 
//     marginBottom: 8 
//   },
//   inputFull: { 
//     backgroundColor: "#F2F4F7", 
//     borderRadius: 12, 
//     paddingHorizontal: 15, 
//     height: 50, 
//     fontFamily: Fonts.regular, 
//     color: 'black',
//     borderWidth: 1,
//     borderColor: '#E5E7EB' // आपके बाकी इनपुट्स जैसी बॉर्डर
//   },
// });














import React from 'react';
import { View, Text, TextInput, StyleSheet } from 'react-native';
import CustomDropdown from './CustomDropdown'; 
import { Fonts } from '../../theme/fonts';
import { Colors } from '../../theme/colors';

// --- 🚀 फिक्स: यहाँ 'errors' प्रोप रिसीव करें ---
const BrandModelSection = ({ 
  brand, setBrand, model, setModel, variant, setVariant, 
  brandsList, modelsList, variantsList, errors 
}: any) => (
  <View style={styles.container}>
    <View style={styles.row}>
      {/* --- 🚀 फिक्स: Brand Dropdown को एरर पास करें --- */}
      <CustomDropdown 
        label="Brand" 
        placeholder="Select" 
        data={brandsList} 
        selectedValue={brand} 
        onSelect={setBrand} 
        error={errors.brand} 
      />
      <View style={{ width: 15 }} />
      {/* --- 🚀 फिक्स: Model Dropdown को एरर पास करें --- */}
      <CustomDropdown 
        label="Model" 
        placeholder="Select" 
        data={modelsList} 
        selectedValue={model} 
        onSelect={setModel} 
        error={errors.model}
      />
    </View>

    <View style={styles.marginTop}>
     
     <CustomDropdown 
        label="Variant" 
        placeholder="Select Variant" 
        data={variantsList} 
        selectedValue={variant} 
        onSelect={setVariant} 
        error={errors.variant}
      />
    </View>
  </View>
);

export default BrandModelSection;

const styles = StyleSheet.create({
  container: { width: '100%' },
  row: { flexDirection: "row", justifyContent: "space-between" },
  marginTop: { marginTop: 5 },
  label: { fontFamily: Fonts.bold, fontSize: 16, color: 'black', marginTop: 18, marginBottom: 8 },
  inputFull: { 
    backgroundColor: "#F2F4F7", 
    borderRadius: 12, 
    paddingHorizontal: 15, 
    height: 50, 
    fontFamily: Fonts.regular, 
    color: 'black',
    borderWidth: 1,
    borderColor: '#E5E7EB'
  },
});