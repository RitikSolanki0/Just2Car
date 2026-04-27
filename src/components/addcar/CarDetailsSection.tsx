import React from 'react';
import { View, Text, TextInput, StyleSheet } from 'react-native';
import Ionicons from "@react-native-vector-icons/ionicons";
import { Fonts } from '../../theme/fonts';

const CarDetailsSection = ({  regNumber, setRegNumber }: any) => (
  <View style={styles.container}>
    <Text style={styles.sectionHeading}>Car Identity</Text>

    {/* Registration Number */}
    <Text style={styles.label}>Registration Number</Text>
    <View style={styles.inputWithIcon}>
      <Ionicons name="card-outline" size={20} color="gray" />
      <TextInput 
        style={styles.flexInput} 
        placeholder="e.g. MP09CA1234" 
        autoCapitalize="characters"
        value={regNumber} 
        onChangeText={setRegNumber} 
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