import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import Ionicons from "@react-native-vector-icons/ionicons";
import { Colors } from '../../theme/colors';
import { Fonts } from '../../theme/fonts';

const DealerBanner = () => (
  <View style={styles.dealerStrip}>
    <View style={styles.row}>
      <Ionicons name="person-circle" size={24} color={Colors.secondary} />
      <Text style={styles.dealerText}>Become a Car Dealer</Text>
    </View>
    <TouchableOpacity style={styles.applyBtn}>
      <Text style={styles.applyText}>Apply Now</Text>
    </TouchableOpacity>
  </View>
);

export default DealerBanner;

const styles = StyleSheet.create({
  dealerStrip: { backgroundColor: Colors.primary, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', padding: 12, borderRadius: 10, marginTop: 15 },
  row: { flexDirection: 'row', alignItems: 'center' },
  dealerText: { color: 'white', marginLeft: 8, fontSize: 14, fontFamily: Fonts.medium },
  applyBtn: { backgroundColor: Colors.secondary, paddingHorizontal: 15, paddingVertical: 5, borderRadius: 15 },
  applyText: { fontSize: 11, fontFamily: Fonts.bold, color: 'white' },
});