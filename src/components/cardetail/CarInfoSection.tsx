import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Ionicons from "@react-native-vector-icons/ionicons";
import { Colors } from '../../theme/colors';
import { Fonts } from '../../theme/fonts';

const CarInfoSection = ({ car, showFullDesc, setShowFullDesc }: any) => (
  <View style={styles.contentSection}>
    <View style={styles.titleRow}>
      <Text style={styles.carName}>{car?.name || "Tesla Model 3"}</Text>
      <View style={styles.ratingRow}>
        <Text style={styles.ratingText}>4.5/5</Text>
        <Ionicons name="star" size={18} color={Colors.secondary} />
      </View>
    </View>
    <Text style={styles.priceText}>Rs. {car?.price || "18,00,000.00"}</Text>

    <Text style={styles.description}>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas diam nam eu nulla a. 
      Vestibulum aliquet facilisi interdum nibh blandit 
      {!showFullDesc && "..."}
      {showFullDesc && " more details about this amazing car that provide comfort and speed."}
      <Text style={styles.readMore} onPress={() => setShowFullDesc(!showFullDesc)}>
        {showFullDesc ? " Show less" : " Read more..."}
      </Text>
    </Text>
  </View>
);

export default CarInfoSection;

const styles = StyleSheet.create({
  contentSection: { paddingHorizontal: 20, marginTop: 25 },
  titleRow: { flexDirection: "row", justifyContent: "space-between", alignItems: "center" },
  carName: { fontFamily: Fonts.bold, fontSize: 24, color: Colors.primary },
  ratingRow: { flexDirection: "row", alignItems: "center" },
  ratingText: { fontFamily: Fonts.bold, color: Colors.secondary, marginRight: 5, fontSize: 18 },
  priceText: { fontFamily: Fonts.medium, color: "gray", fontSize: 16, marginTop: 5 },
  description: { fontFamily: Fonts.regular, color: Colors.textSecondary, marginTop: 15, lineHeight: 22 },
  readMore: { color: "#3498db", fontFamily: Fonts.medium },
});