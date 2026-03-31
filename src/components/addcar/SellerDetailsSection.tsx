import React from 'react';
import { View, Text, TextInput, StyleSheet } from 'react-native';
import Ionicons from "@react-native-vector-icons/ionicons";
import { Fonts } from '../../theme/fonts';

const SellerDetailsSection = ({ name, setName, email, setEmail, mobile, setMobile }: any) => (
  <View style={styles.container}>
    <Text style={styles.sectionHeading}>Seller Details</Text>

    {/* Full Name */}
    <Text style={styles.label}>Full Name</Text>
    <View style={styles.inputWithIcon}>
      <Ionicons name="person-outline" size={20} color="gray" />
      <TextInput 
        style={styles.flexInput} 
        placeholder="Enter your name" 
        value={name} 
        onChangeText={setName} 
      />
    </View>

    {/* Email Address */}
    <Text style={styles.label}>Email Address</Text>
    <View style={styles.inputWithIcon}>
      <Ionicons name="mail-outline" size={20} color="gray" />
      <TextInput 
        style={styles.flexInput} 
        placeholder="Enter email address" 
        keyboardType="email-address"
        autoCapitalize="none"
        value={email} 
        onChangeText={setEmail} 
      />
    </View>

    {/* Mobile Number */}
    <Text style={styles.label}>Mobile Number</Text>
    <View style={styles.inputWithIcon}>
      <Ionicons name="call-outline" size={20} color="gray" />
      <TextInput 
        style={styles.flexInput} 
        placeholder="10 digit number" 
        keyboardType="phone-pad" 
        maxLength={10}
        value={mobile} 
        onChangeText={setMobile} 
      />
    </View>
  </View>
);

export default SellerDetailsSection;

const styles = StyleSheet.create({
  container: { marginTop: 10 },
  sectionHeading: { fontFamily: Fonts.bold, fontSize: 18, color: 'black', marginBottom: 5 },
  label: { fontFamily: Fonts.bold, fontSize: 15, color: '#374151', marginTop: 15, marginBottom: 8 },
  inputWithIcon: { backgroundColor: "#F2F4F7", borderRadius: 12, paddingHorizontal: 15, height: 52, flexDirection: 'row', alignItems: 'center', borderWidth: 1, borderColor: '#E5E7EB' },
  flexInput: { flex: 1, marginLeft: 10, fontFamily: Fonts.regular, color: 'black', fontSize: 14 },
});