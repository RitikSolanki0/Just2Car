import React from 'react';
import { View, Text, TouchableOpacity, TextInput, StyleSheet } from 'react-native';
import { Fonts } from '../../theme/fonts';
import { Colors } from '../../theme/colors';

const ConditionYearSection = ({ condition, setCondition }: any) => (
  <View style={styles.row}>
    <View style={{ flex: 1.2 }}>
      <Text style={styles.label}>Condition</Text>
      <View style={styles.radioGroup}>
        {["1st", "2nd", "3rd"].map((item) => (
          <TouchableOpacity key={item} style={styles.radioItem} onPress={() => setCondition(item)}>
            <View style={[styles.radioCircle, condition === item && styles.radioCircleActive]}>
              {condition === item && <View style={styles.radioInner} />}
            </View>
            <Text style={styles.radioLabel}>{item}</Text>
          </TouchableOpacity>
        ))}
      </View>
    </View>
    <View style={{ flex: 0.8, marginLeft: 15 }}>
      <Text style={styles.label}>Year</Text>
      <TextInput placeholder="Enter Year" style={styles.inputFull} placeholderTextColor="#C7C7CD" keyboardType="numeric" />
    </View>
  </View>
);

export default ConditionYearSection;

const styles = StyleSheet.create({
  label: { fontFamily: Fonts.bold, fontSize: 16, color: Colors.black, marginTop: 18, marginBottom: 8 },
  inputFull: { backgroundColor: "#F2F4F7", borderRadius: 12, paddingHorizontal: 15, height: 50, fontFamily: Fonts.regular, fontSize: 14 },
  row: { flexDirection: "row", justifyContent: "space-between" },
  radioGroup: { flexDirection: "row", alignItems: "center", height: 50 },
  radioItem: { flexDirection: "row", alignItems: "center", marginRight: 15 },
  radioCircle: { height: 20, width: 20, borderRadius: 10, borderWidth: 2, borderColor: "black", alignItems: "center", justifyContent: "center" },
  radioCircleActive: { borderColor: "black" },
  radioInner: { height: 10, width: 10, borderRadius: 5, backgroundColor: "black" },
  radioLabel: { marginLeft: 8, fontFamily: Fonts.medium, fontSize: 14, color: Colors.black },
});