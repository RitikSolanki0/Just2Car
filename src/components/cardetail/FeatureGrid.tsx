import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import Ionicons from "@react-native-vector-icons/ionicons";
import { Colors } from '../../theme/colors';
import { Fonts } from '../../theme/fonts';

const FeatureGrid = () => (
  <View style={styles.container}>
    {/* Media Row */}
    <View style={styles.mediaRow}>
      <TouchableOpacity style={styles.mediaBtn}>
        <Ionicons name="checkbox" size={20} color={Colors.white} />
        <Text style={styles.mediaBtnText}> Image</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.mediaBtn}>
        <Ionicons name="checkbox" size={20} color={Colors.white} />
        <Text style={styles.mediaBtnText}> Video</Text>
      </TouchableOpacity>
      <TouchableOpacity><Text style={styles.seeAll}>See All</Text></TouchableOpacity>
    </View>

    {/* Grid Items */}
    <View style={styles.detailsGrid}>
      <GridItem icon="speedometer-outline" label="Contact Dealer" />
      <GridItem icon="car-outline" label="Car details (Model...)" />
      <GridItem icon="location-outline" label="Dehli, India" />
      <GridItem icon="cash-outline" label="EMI/Loan" />
    </View>
  </View>
);

const GridItem = ({ icon, label }: any) => (
  <View style={styles.gridItem}>
    <Ionicons name={icon} size={22} color={Colors.black} />
    <Text style={styles.gridLabel} numberOfLines={1}>{label}</Text>
  </View>
);

export default FeatureGrid;

const styles = StyleSheet.create({
  container: { paddingHorizontal: 20, marginTop: 20 },
  mediaRow: { flexDirection: "row", alignItems: "center", justifyContent: 'space-between' },
  mediaBtn: { flexDirection: "row", alignItems: "center", backgroundColor: Colors.secondary, paddingHorizontal: 15, paddingVertical: 8, borderRadius: 5 },
  mediaBtnText: { color: Colors.white, fontFamily: Fonts.bold },
  seeAll: { color: "gray", textDecorationLine: "underline" },
  detailsGrid: { flexDirection: "row", flexWrap: "wrap", marginTop: 30 },
  gridItem: { width: "50%", flexDirection: "row", alignItems: "center", marginBottom: 20 },
  gridLabel: { marginLeft: 10, fontSize: 13, color: Colors.primary, fontFamily: Fonts.medium, flex: 1 },
});
