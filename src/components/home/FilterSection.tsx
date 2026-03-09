import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import Ionicons from "@react-native-vector-icons/ionicons";
import { Colors } from '../../theme/colors';
import { useNavigation } from '@react-navigation/native';

const FilterSection = () => {
  const navigation = useNavigation<any>();
  return (
    <View style={styles.filterRow}>
      <TouchableOpacity style={styles.prefBtn} onPress={() => navigation.navigate('FiltersScreen')}>
        <Text style={styles.prefText}>Preference</Text>
        <Ionicons name="options-outline" size={16} color="black" />
      </TouchableOpacity>
     <TouchableOpacity 
        style={styles.filterBtn} 
        onPress={() => navigation.navigate('FiltersScreen', { initialCategory: 'Budget' })}
      >
        <Text style={styles.prefText}>Price</Text>
        <Ionicons name="chevron-down" size={14} color="gray" />
      </TouchableOpacity>

      {/* 3. Kms -> Kms Driven टैब खुलेगा */}
      <TouchableOpacity 
        style={styles.filterBtn} 
        onPress={() => navigation.navigate('FiltersScreen', { initialCategory: 'Kms Driven' })}
      >
        <Text style={styles.prefText}>Kms</Text>
        <Ionicons name="chevron-down" size={14} color="gray" />
      </TouchableOpacity>
    </View>
  );
};

export default FilterSection;

const styles = StyleSheet.create({
  filterRow: { flexDirection: 'row', marginTop: 15, justifyContent: 'space-between' },
  prefBtn: { backgroundColor: Colors.secondary, flexDirection: 'row', alignItems: 'center', paddingHorizontal: 12, paddingVertical: 8, borderRadius: 8 },
  prefText: { marginRight: 8, fontWeight: 'bold' },
  filterBtn: { backgroundColor: '#F2F4F7', flexDirection: 'row', alignItems: 'center', paddingHorizontal: 15, paddingVertical: 8, borderRadius: 8, width: '30%', justifyContent: 'space-between' },
});