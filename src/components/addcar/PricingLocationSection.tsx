// // src/components/addcar/PricingLocationSection.tsx

// import React from 'react';
// import { View, Text, TextInput, StyleSheet } from 'react-native';
// import Ionicons from "@react-native-vector-icons/ionicons";
// import { Fonts } from '../../theme/fonts';

// const PricingLocationSection = ({ price, setPrice, location, setLocation, mobile, setMobile }: any) => (
//   <View style={styles.container}>
//     <Text style={styles.label}>Set Price</Text>
//     <TextInput 
//       style={styles.input} 
//       placeholder="Enter amount (₹)" 
//       keyboardType="numeric" 
//       value={price} 
//       onChangeText={setPrice} 
//     />

//     <Text style={styles.label}>Location</Text>
//     <View style={styles.inputWithIcon}>
//       <Ionicons name="location-outline" size={20} color="gray" />
//       <TextInput 
//         style={styles.flexInput} 
//         placeholder="Enter city or area" 
//         value={location} 
//         onChangeText={setLocation} 
//       />
//     </View>

//     <Text style={styles.label}>Mobile Number</Text>
//     <View style={styles.inputWithIcon}>
//       <Ionicons name="call-outline" size={20} color="gray" />
//       <TextInput 
//         style={styles.flexInput} 
//         placeholder="Enter 10 digit number" 
//         keyboardType="phone-pad" 
//         maxLength={10}
//         value={mobile} 
//         onChangeText={setMobile} 
//       />
//     </View>
//   </View>
// );

// export default PricingLocationSection;

// const styles = StyleSheet.create({
//   container: { marginTop: 10 },
//   label: { fontFamily: Fonts.bold, fontSize: 16, color: 'black', marginTop: 18, marginBottom: 8 },
//   input: { backgroundColor: "#F2F4F7", borderRadius: 12, paddingHorizontal: 15, height: 50, fontFamily: Fonts.regular },
//   inputWithIcon: { backgroundColor: "#F2F4F7", borderRadius: 12, paddingHorizontal: 12, height: 50, flexDirection: 'row', alignItems: 'center' },
//   flexInput: { flex: 1, marginLeft: 10, fontFamily: Fonts.regular },
// });

















// src/components/addcar/PricingLocationSection.tsx

import React from 'react';
import { View, Text, TextInput, StyleSheet } from 'react-native';
import Ionicons from "@react-native-vector-icons/ionicons";
import { Fonts } from '../../theme/fonts';

const PricingLocationSection = ({ price, setPrice, location, setLocation, mobile, setMobile , address, setAddress }: any) => (
  <View>
    <Text style={styles.label}>Set Price</Text>
    <TextInput 
      style={styles.input} 
      placeholder="Enter amount (₹)" 
      keyboardType="numeric" 
      value={price}
      onChangeText={(text) => setPrice(text)} // <-- यह बहुत ज़रूरी है
    />

  <Text style={styles.label}>Full Address</Text>
    <View style={styles.inputWithIcon}>
      <Ionicons name="map-outline" size={20} color="gray" />
      <TextInput
        style={styles.flexInput}
        placeholder="House no, Street, Area"
        value={address} // logic.address से कनेक्टेड
        onChangeText={setAddress} // logic.setAddress को अपडेट करेगा
      />
    </View>

    <Text style={styles.label}>Location</Text>
    <View style={styles.inputWithIcon}>
      <Ionicons name="location-outline" size={20} color="gray" />
      <TextInput 
        style={styles.flexInput} 
        placeholder="Enter city or area" 
        value={location}
        onChangeText={(text) => setLocation(text)} // <-- यह भी
      />
    </View>

    <Text style={styles.label}>Mobile Number</Text>
    <View style={styles.inputWithIcon}>
      <Ionicons name="call-outline" size={20} color="gray" />
      <TextInput 
        style={styles.flexInput} 
        placeholder="Enter 10 digit number" 
        keyboardType="phone-pad" 
        maxLength={10}
        // value={mobile}
        // onChangeText={(text) => setMobile(text)} // <-- यह भी
        value={mobile} // प्रोप से आ रहा है
          onChangeText={(text) => setMobile(text)}
      />
    </View>
  </View>
);

export default PricingLocationSection;

const styles = StyleSheet.create({
  label: { fontFamily: Fonts.bold, fontSize: 16, color: 'black', marginTop: 18, marginBottom: 8 },
  input: { backgroundColor: "#F2F4F7", borderRadius: 12, paddingHorizontal: 15, height: 50, fontFamily: Fonts.regular, color: 'black' },
  inputWithIcon: { backgroundColor: "#F2F4F7", borderRadius: 12, paddingHorizontal: 12, height: 50, flexDirection: 'row', alignItems: 'center' },
  flexInput: { flex: 1, marginLeft: 10, fontFamily: Fonts.regular, color: 'black' },
});