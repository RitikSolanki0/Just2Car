import React, { useEffect } from 'react';
import { View, StyleSheet } from 'react-native';
import Animated, { 
  useAnimatedStyle, 
  useSharedValue, 
  withRepeat, 
  withTiming, 
  Easing 
} from 'react-native-reanimated';

const SkeletonBase = ({ width, height, borderRadius = 8, style }: any) => {
  const opacity = useSharedValue(0.3);

  useEffect(() => {
    // हल्का सा चमकने वाला (Pulse) इफेक्ट
    opacity.value = withRepeat(
      withTiming(0.7, { duration: 800, easing: Easing.inOut(Easing.ease) }),
      -1, // अनगिनत बार
      true // वापस रिवर्स हो
    );
  }, []);

  const animatedStyle = useAnimatedStyle(() => ({
    opacity: opacity.value,
  }));

  return (
    <Animated.View 
      style={[
        styles.skeleton, 
        { width, height, borderRadius }, 
        style, 
        animatedStyle
      ]} 
    />
  );
};

export default SkeletonBase;

const styles = StyleSheet.create({
  skeleton: {
    backgroundColor: '#E1E9EE', // हल्का ग्रे कलर
  },
});