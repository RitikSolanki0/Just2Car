import React from 'react';
import { View, Text, FlatList, Image, StyleSheet } from 'react-native';
import { Fonts } from '../../theme/fonts';
import { BRANDS } from '../../dummydata/dummyData';

const BrandSection = () => (
  <View>
    <Text style={styles.sectionTitle}>Start with Car Brand</Text>
    <FlatList
      horizontal
      data={BRANDS}
      showsHorizontalScrollIndicator={false}
      keyExtractor={(item, index) => index.toString()}
      contentContainerStyle={styles.brandList}
      renderItem={({ item }) => (
        <View style={styles.brandCircle}>
          <Image source={item.logo} style={styles.brandLogo} />
        </View>
      )}
    />
  </View>
);

export default BrandSection;

const styles = StyleSheet.create({
  sectionTitle: { fontSize: 15, fontFamily: Fonts.bold, marginTop: 20, color: 'black' },
  brandList: { marginTop: 12 },
  brandCircle: { width: 55, height: 55, borderRadius: 30, borderWidth: 1, borderColor: '#ddd', justifyContent: 'center', alignItems: 'center', marginRight: 15 },
  brandLogo: { width: 35, height: 35, resizeMode: 'contain' },
});