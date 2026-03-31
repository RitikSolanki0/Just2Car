import React from 'react';
import { View, ScrollView, StyleSheet } from 'react-native';
import SkeletonBase from './SkeletonBase';

const BrandSkeleton = () => {
  return (
    <View style={styles.container}>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {[1, 2, 3, 4, 5].map((item) => (
          <View key={item} style={styles.item}>
            {/* लोगो के लिए गोल स्केलेटन */}
            <SkeletonBase width={60} height={60} borderRadius={30} />
            {/* नाम के लिए छोटा डिब्बा */}
            <SkeletonBase width={50} height={10} borderRadius={5} style={{ marginTop: 10 }} />
          </View>
        ))}
      </ScrollView>
    </View>
  );
};

export default BrandSkeleton;

const styles = StyleSheet.create({
  container: { marginTop: 15, paddingLeft: 5 },
  item: { marginRight: 20, alignItems: 'center' },
});