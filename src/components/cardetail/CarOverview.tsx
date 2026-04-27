// import React from 'react';
// import { View, Text, StyleSheet } from 'react-native';
// import { Colors } from '../../theme/colors';
// import { Fonts } from '../../theme/fonts';

// const CarOverview = ({ car }: any) => {
//   const data = [
//     { label: 'Reg. year', value: 'Aug 2019' },
//     { label: 'Fuel', value: 'Petrol' },
//     { label: 'KM driven', value: car?.kms || '54,338 km' },
//     { label: 'Transmission', value: 'Manual' },
//     { label: 'Engine capacity', value: '1368cc' },
//     { label: 'Ownership', value: '2nd' },
//   ];

//   return (
//     <View style={styles.container}>
//       <Text style={styles.title}>Car overview</Text>
//       <View style={styles.grid}>
//         {data.map((item, index) => (
//           <View key={index} style={styles.gridItem}>
//             <Text style={styles.label}>{item.label}</Text>
//             <Text style={styles.value}>{item.value}</Text>
//           </View>
//         ))}
//       </View>
//     </View>
//   );
// };

// export default CarOverview;

// const styles = StyleSheet.create({
//   container: { backgroundColor: 'white', padding: 20, marginTop: 10, borderRadius: 15, borderWidth: 1, borderColor: '#f0f0f0' },
//   title: { fontFamily: Fonts.bold, fontSize: 18, color: 'black', marginBottom: 15 },
//   grid: { flexDirection: 'row', flexWrap: 'wrap' },
//   gridItem: { width: '33.33%', marginBottom: 20 },
//   label: { color: 'gray', fontSize: 12, fontFamily: Fonts.regular },
//   value: { color: 'black', fontSize: 14, fontFamily: Fonts.semiBold, marginTop: 4 },
// });

















// import React, { useState } from 'react';
// import { View, Text, StyleSheet, TouchableOpacity, LayoutAnimation, Platform, UIManager } from 'react-native';
// import Ionicons from "@react-native-vector-icons/ionicons";
// import { Colors } from '../../theme/colors';
// import { Fonts } from '../../theme/fonts';

// // Android के लिए एनिमेशन इनेबल करें
// if (Platform.OS === 'android' && UIManager.setLayoutAnimationEnabledExperimental) {
//   UIManager.setLayoutAnimationEnabledExperimental(true);
// }

// const CarOverview = ({ car }: any) => {
//   const [expanded, setExpanded] = useState(false);

//   const toggleExpand = () => {
//     LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
//     setExpanded(!expanded);
//   };

//   const overviewData = [
//     { label: 'Reg. year', value: 'Aug 2019' },
//     { label: 'Fuel', value: 'Petrol' },
//     { label: 'KM driven', value: car?.kms || '54,338 km' },
//     { label: 'Transmission', value: 'Manual' },
//     { label: 'Engine capacity', value: '1368cc' },
//     { label: 'Ownership', value: '2nd' },
//     { label: 'Make year', value: 'Jul 2019' },
//     { label: 'Spare key', value: 'No' },
//     { label: 'Reg number', value: 'MH12**1604' },
//   ];

//   return (
//     <View style={styles.container}>
//       <TouchableOpacity 
//         style={styles.header} 
//         activeOpacity={0.7} 
//         onPress={toggleExpand}
//       >
//         <View style={{ flex: 1 }}>
//           <Text style={styles.title}>Car overview</Text>
//           {!expanded && (
//             <Text style={styles.subtitle}>
//               View car details like registration number, ownership, model year, and more.
//             </Text>
//           )}
//         </View>
//         <Ionicons name={expanded ? "chevron-up" : "chevron-down"} size={22} color="gray" />
//       </TouchableOpacity>

//       {expanded && (
//         <View style={styles.gridContainer}>
//           {overviewData.map((item, index) => (
//             <View key={index} style={styles.gridItem}>
//               <Text style={styles.label}>{item.label}</Text>
//               <Text style={styles.value}>{item.value}</Text>
//             </View>
//           ))}
//         </View>
//       )}
//     </View>
//   );
// };

// export default CarOverview;

// const styles = StyleSheet.create({
//   container: { backgroundColor: 'white', padding: 20, marginTop: 12, borderRadius: 15, marginHorizontal: 15, elevation: 2, shadowColor: '#000', shadowOpacity: 0.05, shadowRadius: 5 },
//   header: { flexDirection: 'row', alignItems: 'center' },
//   title: { fontFamily: Fonts.bold, fontSize: 18, color: 'black' },
//   subtitle: { fontSize: 12, color: 'gray', marginTop: 5, fontFamily: Fonts.regular, lineHeight: 18 },
//   gridContainer: { flexDirection: 'row', flexWrap: 'wrap', marginTop: 20, borderTopWidth: 1, borderTopColor: '#f3f4f6', paddingTop: 15 },
//   gridItem: { width: '33.33%', marginBottom: 20 },
//   label: { fontSize: 12, color: Colors.textSecondary, fontFamily: Fonts.regular },
//   value: { fontSize: 14, color: 'black', fontFamily: Fonts.semiBold, marginTop: 4 },
// });




















// import React, { useState } from 'react';
// import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
// import Ionicons from "@react-native-vector-icons/ionicons";
// import Animated, { FadeInUp, FadeOutUp, Layout } from 'react-native-reanimated'; // Reanimated इम्पोर्ट करें
// import { Colors } from '../../theme/colors';
// import { Fonts } from '../../theme/fonts';

// const CarOverview = ({ car }: any) => {
//   const [expanded, setExpanded] = useState(false);

//   const overviewData = [
//     { label: 'Reg. year', value: 'Aug 2019' },
//     { label: 'Fuel', value: 'Petrol' },
//     { label: 'KM driven', value: car?.kms || '54,338 km' },
//     { label: 'Transmission', value: 'Manual' },
//     { label: 'Engine capacity', value: '1368cc' },
//     { label: 'Ownership', value: '2nd' },
//     { label: 'Make year', value: 'Jul 2019' },
//     { label: 'Spare key', value: 'No' },
//     { label: 'Reg number', value: 'MH12**1604' },
//   ];

//   return (
//     // layout={Layout.duration(300)} से पूरा कार्ड स्मूथली बड़ा/छोटा होगा
//     <Animated.View layout={Layout.duration(300)} style={styles.container}>
//       <TouchableOpacity 
//         style={styles.header} 
//         activeOpacity={0.7} 
//         onPress={() => setExpanded(!expanded)}
//       >
//         <View style={{ flex: 1 }}>
//           <Text style={styles.title}>Car overview</Text>
//           {!expanded && (
//             <Text style={styles.subtitle}>
//               View car details like registration number, ownership, model year, and more.
//             </Text>
//           )}
//         </View>
//         <Ionicons name={expanded ? "chevron-up" : "chevron-down"} size={22} color="gray" />
//       </TouchableOpacity>

//       {expanded && (
//         // Animated.View के साथ FadeIn और FadeOut का उपयोग
//         <Animated.View 
//             entering={FadeInUp.duration(300)} 
//             exiting={FadeOutUp.duration(200)} 
//             style={styles.gridContainer}
//         >
//           {overviewData.map((item, index) => (
//             <View key={index} style={styles.gridItem}>
//               <Text style={styles.label}>{item.label}</Text>
//               <Text style={styles.value}>{item.value}</Text>
//             </View>
//           ))}
//         </Animated.View>
//       )}
//     </Animated.View>
//   );
// };

// export default CarOverview;

// const styles = StyleSheet.create({
//   container: { 
//     backgroundColor: 'white', 
//     padding: 20, 
//     marginTop: 12, 
//     borderRadius: 15, 
//     marginHorizontal: 15, 
//     elevation: 2, 
//     shadowColor: '#000', 
//     shadowOpacity: 0.05, 
//     shadowRadius: 5 
//   },
//   header: { flexDirection: 'row', alignItems: 'center' },
//   title: { fontFamily: Fonts.bold, fontSize: 18, color: 'black' },
//   subtitle: { fontSize: 12, color: 'gray', marginTop: 5, fontFamily: Fonts.regular, lineHeight: 18 },
//   gridContainer: { 
//     flexDirection: 'row', 
//     flexWrap: 'wrap', 
//     marginTop: 20, 
//     borderTopWidth: 1, 
//     borderTopColor: '#f3f4f6', 
//     paddingTop: 15 
//   },
//   gridItem: { width: '33.33%', marginBottom: 20 },
//   label: { fontSize: 11, color: '#9CA3AF', fontFamily: Fonts.regular },
//   value: { fontSize: 13, color: 'black', fontFamily: Fonts.semiBold, marginTop: 4 },
// });
















// import React, { useState } from 'react';
// import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
// import Ionicons from "@react-native-vector-icons/ionicons";
// import Animated, { FadeInUp, FadeOutUp, LinearTransition } from 'react-native-reanimated';
// import { Fonts } from '../../theme/fonts';
// // --- यहाँ डेटा इम्पोर्ट किया गया है ---
// import { CAR_OVERVIEW_DATA } from '../../dummydata/dummyData'; 

// const CarOverview = ({ car }: any) => {
//   // --- 1. डिफ़ॉल्ट रूप से खुला रखने के लिए true सेट किया ---
//   const [expanded, setExpanded] = useState(true); 

//   return (
//     <Animated.View layout={LinearTransition.duration(300)} style={styles.container}>
//       <TouchableOpacity 
//         style={styles.header} 
//         activeOpacity={0.7} 
//         onPress={() => setExpanded(!expanded)}
//       >
//         <View style={styles.textColumn}>
//           <Text style={styles.title}>Car overview</Text>
//           {/* सिर्फ बंद होने पर सबटाइटल दिखेगा */}
//           {!expanded && (
//             <Text style={styles.subtitle}>
//               View car details like registration number, ownership, model year, and more.
//             </Text>
//           )}
//         </View>
        
//         <Ionicons 
//             name={expanded ? "chevron-up" : "chevron-down"} 
//             size={22} 
//             color="gray" 
//             style={styles.chevronIcon} 
//         />
//       </TouchableOpacity>

//       {expanded && (
//         <Animated.View 
//             entering={FadeInUp.duration(300)} 
//             exiting={FadeOutUp.duration(200)} 
//             style={styles.gridContainer}
//         >
//           {/* --- 2. अब डेटा dummyData.ts से आ रहा है --- */}
//           {CAR_OVERVIEW_DATA.map((item, index) => (
//             <View key={index} style={styles.gridItem}>
//               <Text style={styles.label}>{item.label}</Text>
//               {/* अगर कार डेटा मौजूद है और KM driven है तो डायनामिक दिखाएँ, वरना डमी */}
//               <Text style={styles.value}>
//                 {item.label === 'KM driven' && car?.kms ? car.kms : item.value}
//               </Text>
//             </View>
//           ))}
//         </Animated.View>
//       )}
//     </Animated.View>
//   );
// };

// export default CarOverview;

// const styles = StyleSheet.create({
//   container: { 
//     backgroundColor: 'white', 
//     padding: 20, 
//     marginTop: 12, 
//     borderRadius: 15, 
//     marginHorizontal: 15, 
//     elevation: 2, 
//     shadowColor: '#000', 
//     shadowOpacity: 0.05, 
//     shadowRadius: 5 
//   },
//   header: { 
//     flexDirection: 'row', 
//     alignItems: 'flex-start', 
//     justifyContent: 'space-between'
//   },
//   textColumn: { 
//     flex: 1,
//     marginRight: 10
//   },
//   title: { 
//     fontFamily: Fonts.bold, 
//     fontSize: 18, 
//     color: 'black',
//     lineHeight: 22,
//   },
//   subtitle: { 
//     fontSize: 12, 
//     color: 'gray', 
//     marginTop: 5, 
//     fontFamily: Fonts.regular, 
//     lineHeight: 18 
//   },
//   chevronIcon: {
//     marginTop: 2,
//   },
//   gridContainer: { 
//     flexDirection: 'row', 
//     flexWrap: 'wrap', 
//     marginTop: 20, 
//     borderTopWidth: 1, 
//     borderTopColor: '#f3f4f6', 
//     paddingTop: 15 
//   },
//   gridItem: { width: '33.33%', marginBottom: 20 },
//   label: { fontSize: 11, color: '#9CA3AF', fontFamily: Fonts.regular },
//   value: { fontSize: 13, color: 'black', fontFamily: Fonts.semiBold, marginTop: 4 },
// });















// api wala part yaha se 

import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import Ionicons from "@react-native-vector-icons/ionicons";
import Animated, { FadeInUp, FadeOutUp, LinearTransition } from 'react-native-reanimated';
import { Fonts } from '../../theme/fonts';

const CarOverview = ({ car }: any) => {
  const [expanded, setExpanded] = useState(true); 

  // --- API डेटा (overview ऑब्जेक्ट) को मैप करना ---
  const ov = car?.overview;

  // मालिकाना हक़ (Ownership) को 1st, 2nd में बदलने का छोटा लॉजिक
  const getOwnership = (val: number) => {
    if (!val) return "N/A";
    const suffix = val === 1 ? "st" : val === 2 ? "nd" : val === 3 ? "rd" : "th";
    return `${val}${suffix} Owner`;
  };

  // ग्रिड में दिखाने के लिए डेटा एरे
  const overviewData = [
    { label: 'Reg. year', value: ov?.registrationYear || "N/A" },
    { label: 'Fuel', value: ov?.fuel || "N/A" },
    { label: 'KM driven', value: ov?.kmDriven ? `${ov.kmDriven.toLocaleString()} km` : "N/A" },
    { label: 'Transmission', value: ov?.transmission || "N/A" },
    { label: 'Engine capacity', value: ov?.engineCapacity ? `${ov.engineCapacity}cc` : "N/A" },
    { label: 'Ownership', value: getOwnership(ov?.ownership) },
    { label: 'Spare key', value: ov?.spareKey || "N/A" },
    { label: 'Reg number', value: ov?.registrationNumber || "N/A" },
  ];

  return (
    <Animated.View layout={LinearTransition.duration(300)} style={styles.container}>
      <TouchableOpacity 
        style={styles.header} 
        activeOpacity={0.7} 
        onPress={() => setExpanded(!expanded)}
      >
        <View style={styles.textColumn}>
          <Text style={styles.title}>Car overview</Text>
          {!expanded && (
            <Text style={styles.subtitle} numberOfLines={1}>
              {ov?.registrationYear} • {ov?.fuel} • {ov?.kmDriven} km ...
            </Text>
          )}
        </View>
        
        <Ionicons 
            name={expanded ? "chevron-up" : "chevron-down"} 
            size={22} 
            color="gray" 
            style={styles.chevronIcon} 
        />
      </TouchableOpacity>

      {expanded && (
        <Animated.View 
            entering={FadeInUp.duration(300)} 
            exiting={FadeOutUp.duration(200)} 
            style={styles.gridContainer}
        >
          {/* अब डेटा सीधे API से आए एरे (overviewData) से रेंडर हो रहा है */}
          {overviewData.map((item, index) => (
            <View key={index} style={styles.gridItem}>
              <Text style={styles.label}>{item.label}</Text>
              <Text style={styles.value}>{item.value}</Text>
            </View>
          ))}
        </Animated.View>
      )}
    </Animated.View>
  );
};

export default CarOverview;

const styles = StyleSheet.create({
  container: { 
    backgroundColor: 'white', 
    padding: 20, 
    marginTop: 12, 
    borderRadius: 15, 
    marginHorizontal: 15, 
    elevation: 2, 
    shadowColor: '#000', 
    shadowOpacity: 0.05, 
    shadowRadius: 5 
  },
  header: { 
    flexDirection: 'row', 
    alignItems: 'flex-start', 
    justifyContent: 'space-between'
  },
  textColumn: { 
    flex: 1,
    marginRight: 10
  },
  title: { 
    fontFamily: Fonts.bold, 
    fontSize: 18, 
    color: 'black',
    lineHeight: 22,
  },
  subtitle: { 
    fontSize: 12, 
    color: 'gray', 
    marginTop: 5, 
    fontFamily: Fonts.regular, 
    lineHeight: 18 
  },
  chevronIcon: {
    marginTop: 2,
  },
  gridContainer: { 
    flexDirection: 'row', 
    flexWrap: 'wrap', 
    marginTop: 20, 
    borderTopWidth: 1, 
    borderTopColor: '#f3f4f6', 
    paddingTop: 15 
  },
  gridItem: { width: '33.33%', marginBottom: 20 },
  label: { fontSize: 11, color: '#9CA3AF', fontFamily: Fonts.regular },
  value: { fontSize: 13, color: 'black', fontFamily: Fonts.semiBold, marginTop: 4 },
});