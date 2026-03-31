import React from 'react';
import { View, StyleSheet, Dimensions } from 'react-native';
import SkeletonBase from './SkeletonBase';

const { width } = Dimensions.get('window');

const BannerSkeleton = () => {
  return (
    <View style={styles.container}>
      {/* बड़ा बैनर वाला डिब्बा */}
      <SkeletonBase width={width - 30} height={190} borderRadius={20} />
      
      {/* नीचे छोटे डॉट्स के लिए स्केलेटन */}
      <View style={styles.dots}>
        <SkeletonBase width={20} height={8} borderRadius={4} style={{ marginHorizontal: 4 }} />
        <SkeletonBase width={8} height={8} borderRadius={4} style={{ marginHorizontal: 4 }} />
        <SkeletonBase width={8} height={8} borderRadius={4} style={{ marginHorizontal: 4 }} />
      </View>
    </View>
  );
};

export default BannerSkeleton;

const styles = StyleSheet.create({
  container: { marginTop: 15, alignItems: 'center' },
  dots: { flexDirection: 'row', marginTop: 15 },
});