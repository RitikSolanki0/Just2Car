import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Ionicons from "@react-native-vector-icons/ionicons";
import { Colors } from '../../../theme/colors';
import { Fonts } from '../../../theme/fonts';

const AboutUsScreen = ({ navigation }: any) => (
  <SafeAreaView style={styles.container}>
    <View style={styles.header}>
      <TouchableOpacity onPress={() => navigation.goBack()}><Ionicons name="arrow-back" size={28} color="black" /></TouchableOpacity>
      <Text style={styles.headerTitle}>About Us</Text>
    </View>
    <View style={styles.content}>
      <Image source={require("../../../assets/images/imageslogo.png")} style={styles.logo} />
      <Text style={styles.appName}>Just2Car</Text>
      <Text style={styles.version}>Version 1.0.0</Text>
      <Text style={styles.desc}>
        Just2Car is India's most trusted marketplace for pre-owned cars. We ensure a seamless buying and selling experience with verified inspections.
      </Text>
    </View>
  </SafeAreaView>
);

export default AboutUsScreen;

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: 'white' },
  header: { flexDirection: 'row', alignItems: 'center', padding: 20 },
  headerTitle: { fontFamily: Fonts.bold, fontSize: 18, marginLeft: 15 },
  content: { flex: 1, alignItems: 'center', paddingTop: 50, paddingHorizontal: 30 },
  logo: { width: 120, height: 120, borderRadius: 60 },
  appName: { fontFamily: Fonts.bold, fontSize: 28, marginTop: 20, color: Colors.primary },
  version: { fontFamily: Fonts.medium, fontSize: 14, color: 'gray' },
  desc: { fontFamily: Fonts.regular, fontSize: 15, textAlign: 'center', marginTop: 30, lineHeight: 24, color: '#4B5563' },
});