import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity,  FlatList } from 'react-native';
import Ionicons from "@react-native-vector-icons/ionicons";
import { Colors } from '../../../theme/colors';
import { Fonts } from '../../../theme/fonts';

const PACKAGES = [
  { id: '1', name: 'Free', price: '₹0', duration: '30 Days', features: ['1 Car Listing', 'Basic Support', 'Standard Visibility'] },
  { id: '2', name: 'Silver', price: '₹499', duration: '60 Days', features: ['5 Car Listings', 'Priority Support', 'Featured Tag', 'Verified Badge'], popular: true },
  { id: '3', name: 'Gold', price: '₹999', duration: '90 Days', features: ['Unlimited Listings', '24/7 Support', 'Top Page Visibility', 'Premium Badge'] },
];

const PackageScreen = ({ navigation }: any) => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}><Ionicons name="arrow-back" size={28} color="black" /></TouchableOpacity>
        <Text style={styles.headerTitle}>Our Packages</Text>
      </View>

      <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={styles.content}>
        {PACKAGES.map((item) => (
          <View key={item.id} style={[styles.card, item.popular && styles.popularCard]}>
            {item.popular && <View style={styles.popularBadge}><Text style={styles.popularText}>MOST POPULAR</Text></View>}
            
            <Text style={styles.packageName}>{item.name}</Text>
            <Text style={styles.price}>{item.price}<Text style={styles.duration}> / {item.duration}</Text></Text>
            
            <View style={styles.divider} />
            
            {item.features.map((f, i) => (
              <View key={i} style={styles.featureRow}>
                <Ionicons name="checkmark-circle" size={18} color={item.popular ? Colors.primary : Colors.secondary} />
                <Text style={styles.featureText}>{f}</Text>
              </View>
            ))}

            <TouchableOpacity style={[styles.buyBtn, item.popular && { backgroundColor: Colors.secondary }]}>
              <Text style={styles.buyBtnText}>Choose Plan</Text>
            </TouchableOpacity>
          </View>
        ))}
      </ScrollView>
    </SafeAreaView>
  );
};

export default PackageScreen;

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#F9FAFB' },
  header: { flexDirection: 'row', alignItems: 'center', padding: 20, backgroundColor: 'white' },
  headerTitle: { fontFamily: Fonts.bold, fontSize: 18, marginLeft: 15 },
  content: { padding: 20 },
  card: { backgroundColor: 'white', borderRadius: 20, padding: 25, marginBottom: 25, elevation: 5, shadowColor: '#000', shadowOpacity: 0.1, shadowRadius: 10 },
  popularCard: { borderWidth: 2, borderColor: Colors.secondary },
  popularBadge: { position: 'absolute', top: -12, right: 20, backgroundColor: Colors.secondary, paddingHorizontal: 12, paddingVertical: 4, borderRadius: 10 },
  popularText: { color: 'white', fontSize: 10, fontFamily: Fonts.bold },
  packageName: { fontFamily: Fonts.bold, fontSize: 20, color: Colors.primary },
  price: { fontFamily: Fonts.bold, fontSize: 32, color: 'black', marginTop: 10 },
  duration: { fontSize: 14, color: 'gray', fontFamily: Fonts.regular },
  divider: { height: 1, backgroundColor: '#F3F4F6', marginVertical: 20 },
  featureRow: { flexDirection: 'row', alignItems: 'center', marginBottom: 12 },
  featureText: { marginLeft: 10, fontFamily: Fonts.medium, fontSize: 14, color: '#4B5563' },
  buyBtn: { marginTop: 20, backgroundColor: Colors.primary, paddingVertical: 15, borderRadius: 12, alignItems: 'center' },
  buyBtnText: { color: 'white', fontFamily: Fonts.bold, fontSize: 16 },
});