import React, { useState } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Modal,
  FlatList,
  StyleSheet,
  Dimensions,
  TouchableWithoutFeedback
} from 'react-native';
import Ionicons from "@react-native-vector-icons/ionicons";
import { Fonts } from '../../theme/fonts';
import { Colors } from '../../theme/colors';

const { height } = Dimensions.get('window');

const CustomDropdown = ({ label, placeholder, data, selectedValue, onSelect }: any) => {
  const [visible, setVisible] = useState(false);

  const handleSelect = (item: string) => {
    onSelect(item);
    setVisible(false);
  };

  return (
    <View style={{ flex: 1 }}>
      <Text style={styles.label}>{label}</Text>
      <TouchableOpacity 
        style={styles.dropdown} 
        onPress={() => setVisible(true)}
        activeOpacity={0.7}
      >
        <Text style={[styles.dropdownText, selectedValue && { color: 'black' }]}>
          {selectedValue || placeholder}
        </Text>
        <Ionicons name="chevron-down" size={20} color="black" />
      </TouchableOpacity>

      {/* Dropdown Modal */}
      <Modal visible={visible} transparent animationType="fade">
        <TouchableWithoutFeedback onPress={() => setVisible(false)}>
          <View style={styles.modalOverlay}>
            <View style={styles.modalContent}>
              <View style={styles.modalHeader}>
                <Text style={styles.modalTitle}>Select {label}</Text>
                <TouchableOpacity onPress={() => setVisible(false)}>
                  <Ionicons name="close" size={24} color="black" />
                </TouchableOpacity>
              </View>

              <FlatList
                data={data}
                keyExtractor={(item) => item}
                showsVerticalScrollIndicator={false}
                style={{ maxHeight: height * 0.4 }} 
                renderItem={({ item }) => (
                  <TouchableOpacity 
                    style={styles.optionItem} 
                    onPress={() => handleSelect(item)}
                  >
                    <Text style={[styles.optionText, selectedValue === item && styles.selectedText]}>
                      {item}
                    </Text>
                    {selectedValue === item && (
                      <Ionicons name="checkmark-circle" size={20} color={Colors.primary} />
                    )}
                  </TouchableOpacity>
                )}
              />
            </View>
          </View>
        </TouchableWithoutFeedback>
      </Modal>
    </View>
  );
};

export default CustomDropdown;

const styles = StyleSheet.create({
  label: { fontFamily: Fonts.bold, fontSize: 16, color: Colors.black, marginTop: 18, marginBottom: 8 },
  dropdown: { 
    backgroundColor: "#F2F4F7", 
    borderRadius: 12, 
    paddingHorizontal: 15, 
    height: 50, 
    flexDirection: 'row', 
    alignItems: 'center', 
    justifyContent: 'space-between',
    borderWidth: 1,
    borderColor: '#E5E7EB'
  },
  dropdownText: { color: "#9CA3AF", fontFamily: Fonts.regular, fontSize: 14 },
  
  // Modal Styles
  modalOverlay: { flex: 1, backgroundColor: 'rgba(0,0,0,0.5)', justifyContent: 'center', alignItems: 'center' },
  modalContent: { width: '85%', backgroundColor: 'white', borderRadius: 20, padding: 20, elevation: 10 },
  modalHeader: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginBottom: 20, borderBottomWidth: 1, borderBottomColor: '#f0f0f0', paddingBottom: 10 },
  modalTitle: { fontFamily: Fonts.bold, fontSize: 18, color: Colors.primary },
  optionItem: { paddingVertical: 15, borderBottomWidth: 0.5, borderBottomColor: '#eee', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' },
  optionText: { fontFamily: Fonts.medium, fontSize: 16, color: '#4B5563' },
  selectedText: { color: Colors.primary, fontFamily: Fonts.bold },
});