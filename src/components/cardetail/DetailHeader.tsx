import React from 'react';
import { View, TouchableOpacity, StyleSheet } from 'react-native';
import Ionicons from "@react-native-vector-icons/ionicons";
import { Colors } from '../../theme/colors';

const DetailHeader = ({ onBack }: { onBack: () => void }) => (
  <View style={styles.header}>
    <TouchableOpacity onPress={onBack}>
      <Ionicons name="arrow-back" size={28} color={Colors.black} />
    </TouchableOpacity>
    <TouchableOpacity>
      <Ionicons name="share-social-outline" size={26} color={Colors.black} />
    </TouchableOpacity>
  </View>
);

export default DetailHeader;

const styles = StyleSheet.create({
  header: { flexDirection: "row", justifyContent: "space-between", paddingHorizontal: 20, paddingVertical: 15 },
});
