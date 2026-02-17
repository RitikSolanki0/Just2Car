import React from 'react';
import { View, Text, TouchableOpacity, TextInput, StyleSheet } from 'react-native';
import Ionicons from "@react-native-vector-icons/ionicons";
import { Fonts } from '../../theme/fonts';
import { Colors } from '../../theme/colors';

const FeaturesSection = ({ features, toggleFeature, availableFeatures }: any) => (
  <View>
    <Text style={styles.label}>Features</Text>
    <View style={styles.searchBox}>
      <TextInput placeholder="Search" style={styles.searchInput} placeholderTextColor="#C7C7CD" />
    </View>
    <View style={styles.checkboxGrid}>
      {availableFeatures.map((item: any) => (
        <TouchableOpacity key={item.id} style={styles.checkboxItem} onPress={() => toggleFeature(item.id)}>
          <Ionicons 
            name={features.includes(item.id) ? "checkbox" : "square-outline"} 
            size={24} color={Colors.primary} 
          />
          <Text style={styles.checkboxLabel}>{item.label}</Text>
        </TouchableOpacity>
      ))}
    </View>
  </View>
);

export default FeaturesSection;

const styles = StyleSheet.create({
  label: { fontFamily: Fonts.bold, fontSize: 16, color: Colors.black, marginTop: 18, marginBottom: 8 },
  searchBox: { backgroundColor: "#F2F4F7", borderRadius: 10, paddingHorizontal: 15, height: 45, justifyContent: "center" },
  searchInput: { fontFamily: Fonts.regular, fontSize: 14 },
  checkboxGrid: { flexDirection: "row", flexWrap: "wrap", marginTop: 15 },
  checkboxItem: { width: "50%", flexDirection: "row", alignItems: "center", marginBottom: 15 },
  checkboxLabel: { marginLeft: 10, fontFamily: Fonts.medium, fontSize: 14, color: Colors.black },
});