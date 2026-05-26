// // src/components/addcar/TechnicalSection.tsx

// import React from 'react';
// import { View, Text, TouchableOpacity, TextInput, StyleSheet } from 'react-native';
// import Ionicons from "@react-native-vector-icons/ionicons";
// import { Fonts } from '../../theme/fonts';
// import { Colors } from '../../theme/colors';
// import CustomDropdown from './CustomDropdown';

// const TechnicalSection = ({ fuel, setFuel, fuelsList, transmission, setTransmission, kms, setKms }: any) => (
//   <View style={styles.container}>
//     {/* Fuel Dropdown */}
//     <CustomDropdown label="Fuel Type" placeholder="Select Fuel" data={fuelsList} selectedValue={fuel} onSelect={setFuel} />

//     {/* Transmission Radio Buttons */}
//     <Text style={styles.label}>Transmission</Text>
//     <View style={styles.radioRow}>
//       {['Manual', 'Automatic'].map((type) => (
//         <TouchableOpacity key={type} style={styles.radioBtn} onPress={() => setTransmission(type)}>
//           <Ionicons 
//             name={transmission === type ? "radio-button-on" : "radio-button-off"} 
//             size={20} color={transmission === type ? Colors.primary : "gray"} 
//           />
//           <Text style={styles.radioLabel}>{type}</Text>
//         </TouchableOpacity>
//       ))}
//     </View>

//     {/* KM Driven Input */}
//     <Text style={styles.label}>KM Driven</Text>
//     <TextInput 
//       style={styles.input} 
//       placeholder="Enter Kilometers" 
//       keyboardType="numeric" 
//       value={kms} 
//       onChangeText={setKms} 
//     />
//   </View>
// );

// export default TechnicalSection;

// const styles = StyleSheet.create({
//   container: { marginTop: 10 },
//   label: { fontFamily: Fonts.bold, fontSize: 16, color: 'black', marginTop: 18, marginBottom: 8 },
//   radioRow: { flexDirection: 'row', marginBottom: 10 },
//   radioBtn: { flexDirection: 'row', alignItems: 'center', marginRight: 30 },
//   radioLabel: { marginLeft: 8, fontFamily: Fonts.medium, fontSize: 14 },
//   input: { backgroundColor: "#F2F4F7", borderRadius: 12, paddingHorizontal: 15, height: 50, fontFamily: Fonts.regular, borderWidth: 1, borderColor: '#E5E7EB' },
// });

















import React from 'react';
import { View, Text, TouchableOpacity, TextInput, StyleSheet } from 'react-native';
import Ionicons from "@react-native-vector-icons/ionicons";
import { Fonts } from '../../theme/fonts';
import { Colors } from '../../theme/colors';
import CustomDropdown from './CustomDropdown';

const TechnicalSection = ({ fuel, setFuel, fuelsList, transmission, setTransmission, kms, setKms, errors }: any) => (
  <View style={styles.container}>
    
    <CustomDropdown 
        label="Fuel Type" 
        placeholder="Select Fuel" 
        data={fuelsList} 
        selectedValue={fuel} 
        onSelect={setFuel} 
        error={errors.fuelType} 
    />

    <Text style={styles.label}>Transmission</Text>
    <View style={styles.radioRow}>
      {['Manual', 'Automatic'].map((type) => (
        <TouchableOpacity key={type} style={styles.radioBtn} onPress={() => setTransmission(type)}>
          <Ionicons 
            name={transmission === type ? "radio-button-on" : "radio-button-off"} 
            size={20} color={transmission === type ? Colors.primary : "gray"} 
          />
          <Text style={styles.radioLabel}>{type}</Text>
        </TouchableOpacity>
      ))}
    </View>

    <Text style={styles.label}>KM Driven</Text>
    <TextInput 
      style={[styles.input, errors.kmDriven && { borderColor: 'red', borderWidth: 1.5 }]} 
      placeholder="Enter Kilometers" 
      keyboardType="numeric" 
      value={kms} 
      onChangeText={setKms} 
      maxLength={7}
    />
  </View>
);

export default TechnicalSection;

const styles = StyleSheet.create({
  container: { marginTop: 10 },
  label: { fontFamily: Fonts.bold, fontSize: 16, color: 'black', marginTop: 18, marginBottom: 8 },
  radioRow: { flexDirection: 'row', marginBottom: 10 },
  radioBtn: { flexDirection: 'row', alignItems: 'center', marginRight: 30 },
  radioLabel: { marginLeft: 8, fontFamily: Fonts.medium, fontSize: 14 },
  input: { backgroundColor: "#F2F4F7", borderRadius: 12, paddingHorizontal: 15, height: 50, fontFamily: Fonts.regular, borderWidth: 1, borderColor: '#E5E7EB', color: 'black' },
});