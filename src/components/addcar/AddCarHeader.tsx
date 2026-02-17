import React from 'react';
import { View, TouchableOpacity, StyleSheet } from 'react-native';
import Ionicons from "@react-native-vector-icons/ionicons";
import { Colors } from '../../theme/colors';

const AddCarHeader = ({ onBack }: { onBack: () => void }) => (
  <View style={styles.header}>
    <TouchableOpacity onPress={onBack}>
      <Ionicons name="arrow-back" size={28} color={Colors.black} />
    </TouchableOpacity>
  </View>
);

export default AddCarHeader;

const styles = StyleSheet.create({
  header: { paddingHorizontal: 15, paddingTop: 10 },
});
