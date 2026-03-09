import React from 'react';
import { ScrollView, Text, StyleSheet, View, TouchableOpacity } from 'react-native';
import Ionicons from "@react-native-vector-icons/ionicons";
import { SafeAreaView } from 'react-native-safe-area-context';
import { Colors } from '../../../theme/colors';
import { Fonts } from '../../../theme/fonts';

const TermsAndConditionsScreen = ({ navigation }: any) => (
  <SafeAreaView style={styles.container}>
    <View style={styles.header}>
      <TouchableOpacity onPress={() => navigation.goBack()}><Ionicons name="arrow-back" size={28} color="black" /></TouchableOpacity>
      <Text style={styles.headerTitle}>Terms & Conditions</Text>
    </View>
    <ScrollView contentContainerStyle={styles.content}>
      <Text style={styles.sectionTitle}>Introduction</Text>
      <Text style={styles.text}>Welcome to Just2Car. By using our app, you agree to comply with our terms of service...</Text>
    </ScrollView>
  </SafeAreaView>
);

export default TermsAndConditionsScreen;

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: 'white' },
  header: { flexDirection: 'row', alignItems: 'center', padding: 20, borderBottomWidth: 1, borderBottomColor: '#f3f4f6' },
  headerTitle: { fontFamily: Fonts.bold, fontSize: 18, marginLeft: 15 },
  content: { padding: 20 },
  sectionTitle: { fontFamily: Fonts.bold, fontSize: 16, marginTop: 20, color: 'black' },
  text: { fontFamily: Fonts.regular, fontSize: 14, color: '#4B5563', lineHeight: 22, marginTop: 10 },
});