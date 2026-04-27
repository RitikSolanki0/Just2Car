import React, { useEffect } from 'react';
import { View, Text, StatusBar } from 'react-native';
import Animated, { 
  useSharedValue, 
  useAnimatedStyle, 
  withTiming, 
  Easing 
} from 'react-native-reanimated';
import { styles } from './SplashScreenStyles';

const SplashScreen = () => {
  const opacity = useSharedValue(0);
  const scale = useSharedValue(0.5);

  useEffect(() => {
    opacity.value = withTiming(1, { duration: 1000 });
    scale.value = withTiming(1, { 
      duration: 1000, 
      easing: Easing.out(Easing.back(1.5)) 
    });
  }, []);

  const animatedStyle = useAnimatedStyle(() => ({
    opacity: opacity.value,
    transform: [{ scale: scale.value }],
  }));

  return (
    <View style={styles.container}>
      <StatusBar hidden />
      
      <Animated.View style={[styles.logoContainer, animatedStyle]}>
        <Text style={styles.j2cText}>
          <Text style={styles.whiteLetter}>J</Text>
          <Text style={styles.orangeLetter}>2</Text>
          <Text style={styles.whiteLetter}>C</Text>
        </Text>
        <Text style={styles.brandName}>Just2Car</Text>
      </Animated.View>

      <View style={styles.footer}>
        <Text style={styles.versionText}>India's Trusted Car Market</Text>
      </View>
    </View>
  );
};

export default SplashScreen;