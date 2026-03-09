import React, { useState } from 'react';
import { Modal, View, Text, TouchableOpacity, FlatList } from 'react-native';
import { styles } from './ScheduleDateStyles';

const TimePickerModal = ({ visible, onClose, onSave }: any) => {
  const [h, setH] = useState("01");
  const [m, setM] = useState("00");
  const [p, setP] = useState("AM");

  const hours = Array.from({ length: 12 }, (_, i) => (i + 1).toString().padStart(2, '0'));
  const minutes = Array.from({ length: 12 }, (_, i) => (i * 5).toString().padStart(2, '0'));

  return (
    <Modal visible={visible} transparent animationType="slide">
      <View style={styles.modalOverlay}>
        <View style={styles.timePickerCard}>
          <Text style={styles.pickerHeader}>Select Time</Text>
          <View style={styles.pickerContainer}>
            <View style={styles.column}>
              <Text style={styles.columnLabel}>Hour</Text>
              <FlatList data={hours} showsVerticalScrollIndicator={false} renderItem={({ item }) => (
                <TouchableOpacity onPress={() => setH(item)} style={[styles.timeOption, h === item && styles.selectedOption]}>
                  <Text style={[styles.optionText, h === item && styles.selectedOptionText]}>{item}</Text>
                </TouchableOpacity>
              )} />
            </View>
            <View style={styles.column}>
              <Text style={styles.columnLabel}>Min</Text>
              <FlatList data={minutes} showsVerticalScrollIndicator={false} renderItem={({ item }) => (
                <TouchableOpacity onPress={() => setM(item)} style={[styles.timeOption, m === item && styles.selectedOption]}>
                  <Text style={[styles.optionText, m === item && styles.selectedOptionText]}>{item}</Text>
                </TouchableOpacity>
              )} />
            </View>
            <View style={styles.column}>
              <Text style={styles.columnLabel}>Period</Text>
              {["AM", "PM"].map(item => (
                <TouchableOpacity key={item} onPress={() => setP(item)} style={[styles.timeOption, styles.periodBtn, p === item && styles.selectedOption]}>
                  <Text style={[styles.optionText, p === item && styles.selectedOptionText]}>{item}</Text>
                </TouchableOpacity>
              ))}
            </View>
          </View>
          <View style={styles.previewBox}><Text style={styles.previewText}>Selected: {h}:{m} {p}</Text></View>
          <View style={styles.modalBtnRow}>
            <TouchableOpacity style={styles.cancelBtn} onPress={onClose}><Text style={{color:'gray'}}>Cancel</Text></TouchableOpacity>
            <TouchableOpacity style={styles.addTimeBtn} onPress={() => onSave(`${h}:${m} ${p}`)}><Text style={{color:'white', fontWeight:'bold'}}>Add Time</Text></TouchableOpacity>
          </View>
        </View>
      </View>
    </Modal>
  );
};

export default TimePickerModal;
