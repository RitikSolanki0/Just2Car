import React from 'react';
import { ScrollView, Text, StyleSheet, View, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Ionicons from "@react-native-vector-icons/ionicons";

const PrivacyPolicyScreen = ({ navigation }: any) => (
  <SafeAreaView style={{ flex: 1, backgroundColor: 'white' }}>
    <View style={{ flexDirection: 'row', alignItems: 'center', padding: 20, borderBottomWidth: 1, borderBottomColor: '#f3f4f6' }}>
      <TouchableOpacity onPress={() => navigation.goBack()}><Ionicons name="arrow-back" size={28} color="black" /></TouchableOpacity>
      <Text style={{ fontWeight: 'bold', fontSize: 18, marginLeft: 15 }}>Privacy Policy</Text>
    </View>
    <ScrollView style={{ padding: 20 }}>
      {/* <Text style={{ fontWeight: 'bold', fontSize: 16, marginTop: 10 }}>Information Collection</Text>
      <Text style={{ fontSize: 14, color: 'gray', marginTop: 10, lineHeight: 20 }}>
        We collect data to provide better services. This includes your contact details and car preferences...
      </Text> */}
    </ScrollView>
  </SafeAreaView>
);

export default PrivacyPolicyScreen;