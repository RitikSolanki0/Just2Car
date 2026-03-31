// import React from 'react';
// import { FlatList, Image, StyleSheet } from 'react-native';
// import { BANNERS } from '../../dummydata/dummyData';

// const BannerSection = () => (
//   <FlatList
//     horizontal
//     pagingEnabled
//     data={BANNERS}
//     showsHorizontalScrollIndicator={false}
//     contentContainerStyle={{ marginTop: 15 }}
//     renderItem={({ item }) => (
//       <Image source={item.image} style={styles.bannerImg} />
//     )}
//   />
// );

// export default BannerSection;

// const styles = StyleSheet.create({
//   bannerImg: { width: 330, height: 160, borderRadius: 15, marginRight: 15, resizeMode: 'cover' },
// });



















// import React, { useEffect, useRef, useState } from 'react';
// import { 
//   FlatList, 
//   Image, 
//   StyleSheet, 
//   Dimensions, 
//   View 
// } from 'react-native';
// import { BANNERS } from '../../dummydata/dummyData';

// const { width } = Dimensions.get('window');
// const ITEM_WIDTH = width - 40; // स्क्रीन से थोड़ा छोटा ताकि अगला बैनर हल्का सा दिखे या पैडिंग बनी रहे

// const BannerSection = () => {
//   const flatListRef = useRef<FlatList>(null);
//   const [currentIndex, setCurrentIndex] = useState(0);

//   // --- Auto Slider Logic ---
//   useEffect(() => {
//     const interval = setInterval(() => {
//       let nextIndex = (currentIndex + 1) % BANNERS.length;
      
//       flatListRef.current?.scrollToIndex({
//         index: nextIndex,
//         animated: true,
//       });

//       setCurrentIndex(nextIndex);
//     }, 3000); // 3 सेकंड में स्लाइड होगा

//     return () => clearInterval(interval);
//   }, [currentIndex]);

//   // जब यूज़र खुद स्वाइप करे तो इंडेक्स अपडेट करने के लिए
//   const handleScroll = (event: any) => {
//     const scrollPosition = event.nativeEvent.contentOffset.x;
//     const index = Math.round(scrollPosition / ITEM_WIDTH);
//     setCurrentIndex(index);
//   };

//   return (
//     <View style={styles.container}>
//       <FlatList
//         ref={flatListRef}
//         horizontal
//         pagingEnabled
//         data={BANNERS}
//         showsHorizontalScrollIndicator={false}
//         keyExtractor={(item) => item.id}
//         onMomentumScrollEnd={handleScroll}
//         contentContainerStyle={styles.listContent}
//         snapToInterval={ITEM_WIDTH + 15} // इमेज की चौड़ाई + मार्जिन
//         decelerationRate="fast"
//         renderItem={({ item }) => (
//           <Image source={item.image} style={styles.bannerImg} />
//         )}
//       />

//       {/* --- Pagination Dots (Indicators) --- */}
//       <View style={styles.dotContainer}>
//         {BANNERS.map((_, index) => (
//           <View 
//             key={index} 
//             style={[
//               styles.dot, 
//               { backgroundColor: currentIndex === index ? '#F9B233' : '#D1D5DB' }
//             ]} 
//           />
//         ))}
//       </View>
//     </View>
//   );
// };

// export default BannerSection;

// const styles = StyleSheet.create({
//   container: {
//     marginTop: 15,
//   },
//   listContent: {
//     paddingRight: 20, // आखिरी इमेज के बाद स्पेस के लिए
//   },
//   bannerImg: { 
//     width: ITEM_WIDTH, 
//     height: 160, 
//     borderRadius: 15, 
//     marginRight: 15, 
//     resizeMode: 'cover' 
//   },
//   dotContainer: {
//     flexDirection: 'row',
//     justifyContent: 'center',
//     alignItems: 'center',
//     marginTop: 10,
//   },
//   dot: {
//     width: 8,
//     height: 8,
//     borderRadius: 4,
//     marginHorizontal: 4,
//   }
// });














// import React, { useEffect, useRef, useState } from 'react';
// import { 
//   FlatList, 
//   Image, 
//   StyleSheet, 
//   Dimensions, 
//   View 
// } from 'react-native';
// import { BANNERS } from '../../dummydata/dummyData';

// const { width } = Dimensions.get('window');
// const ITEM_WIDTH = width - 40; 
// const GAP = 15;

// // --- ट्रिक: डेटा के अंत में पहला आइटम फिर से जोड़ें ---
// const EXTENDED_BANNERS = [...BANNERS, BANNERS[0]];

// const BannerSection = () => {
//   const flatListRef = useRef<FlatList>(null);
//   const [currentIndex, setCurrentIndex] = useState(0);
//   const scrollValue = useRef(0);

//   useEffect(() => {
//     const interval = setInterval(() => {
//       // अगर हम आखिरी क्लोन बैनर पर हैं, तो पहले असली पर जंप करें
//       if (currentIndex === BANNERS.length) {
//         // बिना एनीमेशन के चुपके से इंडेक्स 0 पर जाएँ
//         flatListRef.current?.scrollToOffset({ offset: 0, animated: false });
//         // फिर अगले (इंडेक्स 1) पर एनीमेशन के साथ जाएँ
//         scrollForward(1);
//       } else {
//         scrollForward(currentIndex + 1);
//       }
//     }, 3000);

//     return () => clearInterval(interval);
//   }, [currentIndex]);

//   const scrollForward = (nextIndex: number) => {
//     flatListRef.current?.scrollToIndex({
//       index: nextIndex,
//       animated: true,
//     });
//     setCurrentIndex(nextIndex);
//   };

//   const handleScroll = (event: any) => {
//     const contentOffset = event.nativeEvent.contentOffset.x;
//     const index = Math.round(contentOffset / (ITEM_WIDTH + GAP));
    
//     // अगर यूज़र हाथ से स्वाइप करके आखिरी क्लोन पर पहुँच जाए
//     if (index === BANNERS.length) {
//        // यहाँ हम सिर्फ स्टेट अपडेट करेंगे, जंप इंटरवल हैंडल करेगा
//        setCurrentIndex(BANNERS.length);
//     } else {
//        setCurrentIndex(index);
//     }
//   };

//   return (
//     <View style={styles.container}>
//       <FlatList
//         ref={flatListRef}
//         horizontal
//         data={EXTENDED_BANNERS} // क्लोन वाला डेटा यूज़ करें
//         showsHorizontalScrollIndicator={false}
//         keyExtractor={(item, index) => index.toString()}
//         onMomentumScrollEnd={handleScroll}
//         snapToInterval={ITEM_WIDTH + GAP}
//         decelerationRate="fast"
//         contentContainerStyle={styles.listContent}
//         renderItem={({ item }) => (
//           <Image source={item.image} style={styles.bannerImg} />
//         )}
//         // index आउट ऑफ बाउंड एरर रोकने के लिए
//         getItemLayout={(data, index) => (
//           { length: ITEM_WIDTH + GAP, offset: (ITEM_WIDTH + GAP) * index, index }
//         )}
//       />

//       {/* --- Pagination Dots --- */}
//       <View style={styles.dotContainer}>
//         {BANNERS.map((_, index) => {
//           // इंडेक्स को 0 से 4 के बीच रखने के लिए (क्लोन को 0 मानें)
//           const activeIndex = currentIndex === BANNERS.length ? 0 : currentIndex;
//           return (
//             <View 
//               key={index} 
//               style={[
//                 styles.dot, 
//                 { backgroundColor: activeIndex === index ? '#F9B233' : '#D1D5DB' }
//               ]} 
//             />
//           );
//         })}
//       </View>
//     </View>
//   );
// };

// export default BannerSection;

// const styles = StyleSheet.create({
//   container: { marginTop: 15 },
//   listContent: { paddingRight: 20 },
//   bannerImg: { 
//     width: ITEM_WIDTH, 
//     height: 160, 
//     borderRadius: 15, 
//     marginRight: GAP, 
//     resizeMode: 'cover' 
//   },
//   dotContainer: {
//     flexDirection: 'row',
//     justifyContent: 'center',
//     alignItems: 'center',
//     marginTop: 10,
//   },
//   dot: { width: 8, height: 8, borderRadius: 4, marginHorizontal: 4 },
// });
















// reanimated clausor yaha se

// import React, { useState } from 'react';
// import { StyleSheet, View, Dimensions, Image } from 'react-native';
// import Carousel from 'react-native-reanimated-carousel';
// import Animated, { 
//   useAnimatedStyle, 
//   withTiming, 
// } from 'react-native-reanimated';
// import { BANNERS } from '../../dummydata/dummyData';
// import { Colors } from '../../theme/colors';

// const { width } = Dimensions.get('window');
// const ITEM_WIDTH = width - 40;

// const BannerSection = () => {
//   const [currentIndex, setCurrentIndex] = useState(0);

//   return (
//     <View style={styles.container}>
//       <Carousel
//         loop
//         width={width}
//         height={170}
//         autoPlay={true}
//         autoPlayInterval={3000}
//         data={BANNERS}
//         scrollAnimationDuration={1000}
//         onSnapToItem={(index) => setCurrentIndex(index)}
//         mode="parallax"
//         modeConfig={{
//           parallaxScrollingScale: 0.92,
//           parallaxScrollingOffset: 40,
//         }}
//         renderItem={({ item }) => (
//           <View style={styles.cardContainer}>
//             <Image source={item.image} style={styles.bannerImg} />
//           </View>
//         )}
//       />

//       {/* --- Smooth Dots Container --- */}
//       <View style={styles.dotContainer}>
//         {BANNERS.map((_, index) => (
//           <Dot key={index} index={index} currentIndex={currentIndex} />
//         ))}
//       </View>
//     </View>
//   );
// };

// // --- Animated Dot Component (Error Fixed) ---
// const Dot = ({ index, currentIndex }: { index: number; currentIndex: number }) => {
//   const isActive = currentIndex === index;

//   // Reanimated style for smooth transition
//   const animatedStyle = useAnimatedStyle(() => {
//     return {
//       width: withTiming(isActive ? 22 : 8, { duration: 300 }),
//       backgroundColor: withTiming(isActive ? Colors.secondary : '#D1D5DB', { duration: 300 }),
//     };
//   });

//   return <Animated.View style={[styles.dot, animatedStyle]} />;
// };

// export default BannerSection;

// const styles = StyleSheet.create({
//   container: {
//     marginTop: 15,
//     alignItems: 'center',
//   },
//   cardContainer: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
//   bannerImg: { 
//     width: ITEM_WIDTH, 
//     height: 160, 
//     borderRadius: 15, 
//     resizeMode: 'cover' 
//   },
//   dotContainer: {
//     flexDirection: 'row',
//     justifyContent: 'center',
//     alignItems: 'center',
//     marginTop: 10,
//   },
//   dot: {
//     height: 8,
//     borderRadius: 4,
//     marginHorizontal: 4,
//   },
// });









// import React from 'react';
// import { StyleSheet, View, Dimensions, Image } from 'react-native';
// import Carousel from 'react-native-reanimated-carousel';
// import Animated, { 
//   useAnimatedStyle, 
//   interpolate, 
//   useSharedValue,
//   interpolateColor,
//   Extrapolation,
//   // --- यहाँ SharedValue को टाइप की तरह इम्पोर्ट करें ---
//   SharedValue 
// } from 'react-native-reanimated';
// import { BANNERS } from '../../dummydata/dummyData';
// import { Colors } from '../../theme/colors';

// const { width } = Dimensions.get('window');
// const ITEM_WIDTH = width - 30;
// const BANNER_HEIGHT = 190;

// const BannerSection = () => {
//   const progressValue = useSharedValue(0);

//   return (
//     <View style={styles.container}>
//       <Carousel
//         loop
//         width={width}
//         height={BANNER_HEIGHT + 20}
//         autoPlay={true}
//         autoPlayInterval={3000}
//         data={BANNERS}
//         scrollAnimationDuration={800}
//         onProgressChange={(_, absoluteProgress) => {
//           progressValue.value = absoluteProgress;
//         }}
//         mode="parallax"
//         modeConfig={{
//           parallaxScrollingScale: 0.94,
//           parallaxScrollingOffset: 45,
//         }}
//         renderItem={({ item }) => (
//           <View style={styles.cardContainer}>
//             <Image source={item.image} style={styles.bannerImg} />
//           </View>
//         )}
//       />

//       {/* --- Synchronized Dots --- */}
//       <View style={styles.dotContainer}>
//         {BANNERS.map((_, index) => (
//           <Dot key={index} index={index} progressValue={progressValue} />
//         ))}
//       </View>
//     </View>
//   );
// };

// // --- Animated Dot Component (Type Fixed) ---
// const Dot = ({ index, progressValue }: { index: number; progressValue: SharedValue<number> }) => {
  
//   const animatedStyle = useAnimatedStyle(() => {
//     const dotWidth = interpolate(
//       progressValue.value,
//       [index - 1, index, index + 1],
//       [8, 25, 8],
//       Extrapolation.CLAMP
//     );

//     const opacity = interpolate(
//       progressValue.value,
//       [index - 1, index, index + 1],
//       [0.4, 1, 0.4],
//       Extrapolation.CLAMP
//     );

//     const color = interpolateColor(
//       progressValue.value,
//       [index - 1, index, index + 1],
//       ['#D1D5DB', Colors.secondary, '#D1D5DB']
//     );

//     return {
//       width: dotWidth,
//       backgroundColor: color,
//       opacity: opacity,
//     };
//   });

//   return <Animated.View style={[styles.dot, animatedStyle]} />;
// };

// export default BannerSection;

// const styles = StyleSheet.create({
//   container: {
//     marginTop: 10,
//     alignItems: 'center',
//   },
//   cardContainer: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
//   bannerImg: { 
//     width: ITEM_WIDTH, 
//     height: BANNER_HEIGHT, 
//     borderRadius: 20, 
//     resizeMode: 'cover' 
//   },
//   dotContainer: {
//     flexDirection: 'row',
//     justifyContent: 'center',
//     alignItems: 'center',
//     marginTop: 0,
//   },
//   dot: {
//     height: 8,
//     borderRadius: 4,
//     marginHorizontal: 4,
//   },
// });

















// import React from 'react';
// import { StyleSheet, View, Dimensions, Image, ActivityIndicator } from 'react-native';
// import Carousel from 'react-native-reanimated-carousel';
// import Animated, { 
//   useAnimatedStyle, 
//   interpolate, 
//   useSharedValue,
//   interpolateColor,
//   Extrapolation,
//   SharedValue 
// } from 'react-native-reanimated';
// import { Colors } from '../../theme/colors';

// const { width } = Dimensions.get('window');
// const ITEM_WIDTH = width - 30;
// const BANNER_HEIGHT = 190;

// interface BannerSectionProps {
//   data: any[];
//   loading: boolean;
// }

// const BannerSection = ({ data, loading }: BannerSectionProps) => {
//   const progressValue = useSharedValue(0);

//   // अगर डेटा लोड हो रहा है या खाली है
//   if (loading) {
//     return (
//       <View style={[styles.container, { height: BANNER_HEIGHT, justifyContent: 'center' }]}>
//         <ActivityIndicator color={Colors.secondary} />
//       </View>
//     );
//   }

//   if (data.length === 0) return null;

//   return (
//     <View style={styles.container}>
//       <Carousel
//         loop
//         width={width}
//         height={BANNER_HEIGHT + 20}
//         autoPlay={true}
//         autoPlayInterval={4000}
//         data={data} // अब यहाँ असली डेटा है
//         scrollAnimationDuration={800}
//         onProgressChange={(_, absoluteProgress) => {
//           progressValue.value = absoluteProgress;
//         }}
//         mode="parallax"
//         modeConfig={{
//           parallaxScrollingScale: 0.94,
//           parallaxScrollingOffset: 45,
//         }}
//         renderItem={({ item }) => (
//           <View style={styles.cardContainer}>
//             <Image 
//               source={{ uri: item.image }} // API से इमेज URL आ रहा है
//               style={styles.bannerImg} 
//             />
//           </View>
//         )}
//       />

//       {/* --- Synchronized Dots --- */}
//       <View style={styles.dotContainer}>
//         {data.map((_, index) => (
//           <Dot key={index} index={index} progressValue={progressValue} total={data.length} />
//         ))}
//       </View>
//     </View>
//   );
// };

// // --- Animated Dot Component ---
// const Dot = ({ index, progressValue, total }: { index: number; progressValue: SharedValue<number>; total: number }) => {
//   const animatedStyle = useAnimatedStyle(() => {
//     const dotWidth = interpolate(
//       progressValue.value,
//       [index - 1, index, index + 1],
//       [8, 25, 8],
//       Extrapolation.CLAMP
//     );

//     const color = interpolateColor(
//       progressValue.value,
//       [index - 1, index, index + 1],
//       ['#D1D5DB', Colors.secondary, '#D1D5DB']
//     );

//     return {
//       width: dotWidth,
//       backgroundColor: color,
//     };
//   });

//   return <Animated.View style={[styles.dot, animatedStyle]} />;
// };

// export default BannerSection;

// const styles = StyleSheet.create({
//   container: { marginTop: 10, alignItems: 'center' },
//   cardContainer: { flex: 1, justifyContent: 'center', alignItems: 'center' },
//   bannerImg: { width: ITEM_WIDTH, height: BANNER_HEIGHT, borderRadius: 20, resizeMode: 'cover' },
//   dotContainer: { flexDirection: 'row', justifyContent: 'center', alignItems: 'center', marginTop: 0 },
//   dot: { height: 8, borderRadius: 4, marginHorizontal: 4 },
// });















import React from 'react';
import { StyleSheet, View, Dimensions, Image } from 'react-native';
import Carousel from 'react-native-reanimated-carousel';
import Animated, { 
  useAnimatedStyle, 
  interpolate, 
  useSharedValue,
  interpolateColor,
  Extrapolation,
  SharedValue 
} from 'react-native-reanimated';
import { Colors } from '../../theme/colors';
import BannerSkeleton from '../skeletons/BannerSkeleton'; // स्केलेटन इम्पोर्ट

const { width } = Dimensions.get('window');
const ITEM_WIDTH = width - 30;
const BANNER_HEIGHT = 190;

interface BannerSectionProps {
  data: any[];
  loading: boolean;
}

const BannerSection = ({ data, loading }: BannerSectionProps) => {
  const progressValue = useSharedValue(0);

  // --- लोड हो रहा है तो स्केलेटन दिखाएं ---
  if (loading) {
    return <BannerSkeleton />;
  }

  // अगर डेटा खाली है तो कुछ न दिखाएं
  if (!data || data.length === 0) return null;

  return (
    <View style={styles.container}>
      <Carousel
        loop
        width={width}
        height={BANNER_HEIGHT + 20}
        autoPlay={true}
        autoPlayInterval={4000}
        data={data}
        scrollAnimationDuration={800}
        onProgressChange={(_, absoluteProgress) => {
          progressValue.value = absoluteProgress;
        }}
        mode="parallax"
        modeConfig={{
          parallaxScrollingScale: 0.94,
          parallaxScrollingOffset: 45,
        }}
        renderItem={({ item }) => (
          <View style={styles.cardContainer}>
            <Image 
              source={{ uri: item.image }} 
              style={styles.bannerImg} 
            />
          </View>
        )}
      />

      {/* --- Real-time Synchronized Dots --- */}
      <View style={styles.dotContainer}>
        {data.map((_, index) => (
          <Dot 
            key={index} 
            index={index} 
            progressValue={progressValue} 
          />
        ))}
      </View>
    </View>
  );
};

// --- Animated Dot Component ---
const Dot = ({ index, progressValue }: { index: number; progressValue: SharedValue<number> }) => {
  const animatedStyle = useAnimatedStyle(() => {
    const dotWidth = interpolate(
      progressValue.value,
      [index - 1, index, index + 1],
      [8, 25, 8],
      Extrapolation.CLAMP
    );

    const color = interpolateColor(
      progressValue.value,
      [index - 1, index, index + 1],
      ['#D1D5DB', Colors.secondary, '#D1D5DB']
    );

    return {
      width: dotWidth,
      backgroundColor: color,
    };
  });

  return <Animated.View style={[styles.dot, animatedStyle]} />;
};

export default BannerSection;

const styles = StyleSheet.create({
  container: { marginTop: 10, alignItems: 'center' },
  cardContainer: { flex: 1, justifyContent: 'center', alignItems: 'center' },
  bannerImg: { 
    width: ITEM_WIDTH, 
    height: BANNER_HEIGHT, 
    borderRadius: 20, 
    resizeMode: 'cover' 
  },
  dotContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 0,
  },
  dot: {
    height: 8,
    borderRadius: 4,
    marginHorizontal: 4,
  },
});