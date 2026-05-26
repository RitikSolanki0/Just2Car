

import React, { useMemo } from 'react'; // useMemo का उपयोग परफॉरमेंस के लिए
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { Fonts } from '../../theme/fonts';
import { Colors } from '../../theme/colors';
import CustomDropdown from './CustomDropdown';

const ConditionYearSection = ({ condition, setCondition, year, setYear }: any) => {
  
  // --- 1. डायनामिक सालों की लिस्ट बनाने का लॉजिक ---
  const yearsList = useMemo(() => {
    const currentYear = new Date().getFullYear(); // आज का साल (जैसे 2025 या 2026)
    const years = [];
    
    // वर्तमान साल से शुरू करके पिछले 80 सालों तक की लिस्ट (जैसे 1945 तक)
    for (let i = 0; i <= 80; i++) {
      years.push((currentYear - i).toString());
    }
    return years;
  }, []);

  return (
    <View style={styles.row}>
      {/* Condition Section */}
      <View style={{ flex: 1.2 }}>
        <Text style={styles.label}>Condition</Text>
        <View style={styles.radioGroup}>
          {["1st", "2nd", "3rd"].map((item) => (
            <TouchableOpacity 
              key={item} 
              style={styles.radioItem} 
              onPress={() => setCondition(item)}
            >
              <View style={[styles.radioCircle, condition === item && styles.radioCircleActive]}>
                {condition === item && <View style={styles.radioInner} />}
              </View>
              <Text style={styles.radioLabel}>{item}</Text>
            </TouchableOpacity>
          ))}
        </View>
      </View>

      {/* Year Section (Now uses Dynamic List) */}
      <View style={{ flex: 0.8, marginLeft: 15 }}>
        <CustomDropdown 
          label="Year" 
          placeholder="Select" 
          data={yearsList} // यहाँ डायनामिक लिस्ट पास की गई है
          selectedValue={year} 
          onSelect={setYear} 
        />
      </View>
    </View>
  );
};

export default ConditionYearSection;

// ... (Styles वही रहेंगे जो पिछले कोड में थे)
const styles = StyleSheet.create({
  row: { flexDirection: "row", justifyContent: "space-between", alignItems: 'flex-start' },
  label: { fontFamily: Fonts.bold, fontSize: 16, color: Colors.black, marginTop: 18, marginBottom: 8 },
  radioGroup: { flexDirection: "row", alignItems: "center", height: 50 },
  radioItem: { flexDirection: "row", alignItems: "center", marginRight: 12 },
  radioCircle: { height: 20, width: 20, borderRadius: 10, borderWidth: 2, borderColor: "black", alignItems: "center", justifyContent: "center" },
  radioCircleActive: { borderColor: "black" },
  radioInner: { height: 10, width: 10, borderRadius: 5, backgroundColor: "black" },
  radioLabel: { marginLeft: 6, fontFamily: Fonts.medium, fontSize: 14, color: Colors.black },
});