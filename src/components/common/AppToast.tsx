import React from 'react';
import { View, Text, StyleSheet, Dimensions } from 'react-native';
import Ionicons from "@react-native-vector-icons/ionicons";
import { Colors } from '../../theme/colors';
import { Fonts } from '../../theme/fonts';

const { width } = Dimensions.get('window');

// यह ऑब्जेक्ट डिज़ाइन को कॉन्फ़िगर करेगा
export const toastConfig = {
  success: ({ text1, text2 }: any) => (
    <View style={[styles.toastContainer, { borderLeftColor: Colors.success || '#22C55E' }]}>
      <View style={styles.iconWrapper}>
         <Ionicons name="checkmark-circle" size={28} color={Colors.success || '#22C55E'} />
      </View>
      <View style={styles.textWrapper}>
        <Text style={styles.title}>{text1}</Text>
        <Text style={styles.message}>{text2}</Text>
      </View>
    </View>
  ),

  error: ({ text1, text2 }: any) => (
    <View style={[styles.toastContainer, { borderLeftColor: '#EF4444' }]}>
      <View style={styles.iconWrapper}>
         <Ionicons name="alert-circle" size={28} color="#EF4444" />
      </View>
      <View style={styles.textWrapper}>
        <Text style={styles.title}>{text1}</Text>
        <Text style={styles.message}>{text2}</Text>
      </View>
    </View>
  ),
};

const styles = StyleSheet.create({
  toastContainer: {
    height: 70,
    width: width - 40,
    backgroundColor: 'white',
    borderRadius: 12,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 15,
    borderLeftWidth: 6, // साइड में रंगीन पट्टी
    // प्रीमियम शैडो
    elevation: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.15,
    shadowRadius: 5,
  },
  iconWrapper: {
    marginRight: 12,
  },
  textWrapper: {
    flex: 1,
  },
  title: {
    fontFamily: Fonts.bold,
    fontSize: 14,
    color: '#1F2937',
  },
  message: {
    fontFamily: Fonts.medium,
    fontSize: 12,
    color: '#6B7280',
    marginTop: 2,
  },
});