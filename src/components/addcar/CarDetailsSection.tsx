// import React from 'react';
// import { View, Text, TextInput, StyleSheet } from 'react-native';
// import Ionicons from "@react-native-vector-icons/ionicons";
// import { Fonts } from '../../theme/fonts';

// const CarDetailsSection = ({  regNumber, setRegNumber }: any) => (
//   <View style={styles.container}>
//     <Text style={styles.sectionHeading}>Car Identity</Text>

//     {/* Registration Number */}
//     <Text style={styles.label}>Registration Number</Text>
//     <View style={styles.inputWithIcon}>
//       <Ionicons name="card-outline" size={20} color="gray" />
//       <TextInput 
//         style={styles.flexInput} 
//         placeholder="e.g. MP09CA1234" 
//         autoCapitalize="characters"
//         value={regNumber} 
//         onChangeText={setRegNumber} 
//       />
//     </View>
//   </View>
// );

// export default CarDetailsSection;

// const styles = StyleSheet.create({
//   container: { marginTop: 20 },
//   sectionHeading: { fontFamily: Fonts.bold, fontSize: 18, color: 'black', marginBottom: 5 },
//   label: { fontFamily: Fonts.bold, fontSize: 15, color: '#374151', marginTop: 15, marginBottom: 8 },
//   inputWithIcon: { backgroundColor: "#F2F4F7", borderRadius: 12, paddingHorizontal: 15, height: 52, flexDirection: 'row', alignItems: 'center', borderWidth: 1, borderColor: '#E5E7EB' },
//   flexInput: { flex: 1, marginLeft: 10, fontFamily: Fonts.regular, color: 'black', fontSize: 14 },
// });















import React from 'react';
import { View, Text, TextInput, StyleSheet } from 'react-native';
import Ionicons from "@react-native-vector-icons/ionicons";
import { Fonts } from '../../theme/fonts';

// --- 🚀 फिक्स: 'error' प्रोप यहाँ रिसीव करें ---
const CarDetailsSection = ({ regNumber, setRegNumber, error }: any) => (
  <View style={styles.container}>
    <Text style={styles.sectionHeading}>Car Identity</Text>

    <Text style={styles.label}>Registration Number</Text>
    
    {/* --- 🚀 फिक्स: यहाँ एरे स्टाइल [] का इस्तेमाल किया है --- */}
    <View style={[styles.inputWithIcon, error && { borderColor: 'red', borderWidth: 1.5 }]}>
      <Ionicons name="card-outline" size={20} color="gray" />
      <TextInput 
        style={styles.flexInput} 
        placeholder="e.g. MP09CA0000" 
        autoCapitalize="characters"
        value={regNumber} 
        onChangeText={setRegNumber} 
        maxLength={10}
      />
    </View>
  </View>
);

export default CarDetailsSection;

const styles = StyleSheet.create({
  container: { marginTop: 20 },
  sectionHeading: { fontFamily: Fonts.bold, fontSize: 18, color: 'black', marginBottom: 5 },
  label: { fontFamily: Fonts.bold, fontSize: 15, color: '#374151', marginTop: 15, marginBottom: 8 },
  inputWithIcon: { backgroundColor: "#F2F4F7", borderRadius: 12, paddingHorizontal: 15, height: 52, flexDirection: 'row', alignItems: 'center', borderWidth: 1, borderColor: '#E5E7EB' },
  flexInput: { flex: 1, marginLeft: 10, fontFamily: Fonts.regular, color: 'black', fontSize: 14 },
});