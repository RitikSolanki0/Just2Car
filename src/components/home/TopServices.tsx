// import React, { useState } from 'react';
// import { 
//   ScrollView, 
//   Text, 
//   TouchableOpacity, 
//   StyleSheet, 
//   View 
// } from 'react-native';
// import Ionicons from "@react-native-vector-icons/ionicons";
// import { Colors } from '../../theme/colors';
// import { Fonts } from '../../theme/fonts';

// const TopServices = () => {
//   const [activeTab, setActiveTab] = useState('Just2Car');

//   const services = [
//     { id: 1, title: 'Buy and sell', icon: 'repeat-sharp', color: '#FF6A00' },
//     { id: 2, title: 'Insurance', icon: 'shield-checkmark-sharp', color: '#22C55E' },
//     { id: 3, title: 'Autopart', icon: 'settings-sharp', color: '#F9B233' },
//     { id: 4, title: 'Just2Car', icon: 'car-sport-sharp', color: '#2E6BFF' },
//   ]  as const;

//   return (
//     <View style={styles.container}>
//       <ScrollView 
//         horizontal 
//         showsHorizontalScrollIndicator={false}
//         contentContainerStyle={styles.scrollContent}
//       >
//         {services.map((item) => (
//           <TouchableOpacity 
//             key={item.id}
//             activeOpacity={0.8}
//             onPress={() => setActiveTab(item.title)}
//             style={[
//               styles.tabBtn,
//               activeTab === item.title ? styles.activeTab : styles.inactiveTab
//             ]}
//           >
//             <View style={[styles.iconCircle, { backgroundColor: item.color + '15' }]}>
//                <Ionicons name={item.icon} size={18} color={item.color} />
//             </View>
//             <Text style={[
//               styles.tabText, 
//               activeTab === item.title ? styles.activeTabText : styles.inactiveTabText
//             ]}>
//               {item.title}
//             </Text>
//           </TouchableOpacity>
//         ))}
//       </ScrollView>
//     </View>
//   );
// };

// export default TopServices;

// const styles = StyleSheet.create({
//   container: {
//     marginTop: 15,
//     marginBottom: 5,
//   },
//   scrollContent: {
//     paddingLeft: 2, // स्टार्टिंग अलाइनमेंट के लिए
//   },
//   tabBtn: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     paddingHorizontal: 12,
//     paddingVertical: 8,
//     borderRadius: 10,
//     marginRight: 10,
//     // Flipkart जैसा हल्का बॉर्डर और शैडो
//     borderWidth: 1,
//     elevation: 2,
//     shadowColor: '#000',
//     shadowOffset: { width: 0, height: 1 },
//     shadowOpacity: 0.1,
//     shadowRadius: 2,
//   },
//   activeTab: {
//     backgroundColor: Colors.white,
//     borderColor: Colors.primary,
//   },
//   inactiveTab: {
//     backgroundColor: '#F9FAFB',
//     borderColor: '#E5E7EB',
//   },
//   iconCircle: {
//     width: 28,
//     height: 28,
//     borderRadius: 14,
//     justifyContent: 'center',
//     alignItems: 'center',
//     marginRight: 8,
//   },
//   tabText: {
//     fontSize: 12,
//     fontFamily: Fonts.bold,
//   },
//   activeTabText: {
//     color: Colors.primary,
//   },
//   inactiveTabText: {
//     color: '#6B7280',
//   },
// });
















// import React, { useState } from 'react';
// import { 
//   ScrollView, 
//   Text, 
//   TouchableOpacity, 
//   StyleSheet, 
//   View,
//   Dimensions
// } from 'react-native';
// import Ionicons from "@react-native-vector-icons/ionicons";
// import { Colors } from '../../theme/colors';
// import { Fonts } from '../../theme/fonts';

// const { width } = Dimensions.get('window');

// const TopServices = () => {
//   const [activeTab, setActiveTab] = useState('Just2Car');

//   const services = [
//     { id: 1, title: 'Just2Car', icon: 'car-sport-sharp', color: '#2E6BFF' },
//     { id: 2, title: 'Buy & Sell', icon: 'repeat-sharp', color: '#FF6A00' }, // 'and' को '&' किया जगह बचाने के लिए
//     { id: 3, title: 'Insurance', icon: 'shield-sharp', color: '#22C55E' },
//     { id: 4, title: 'Parts', icon: 'settings-sharp', color: '#F9B233' }, // 'Autopart' को 'Parts' किया
//   ] as const;

//   return (
//     <View style={styles.container}>
//       <View style={styles.tabWrapper}>
//         {services.map((item) => (
//           <TouchableOpacity 
//             key={item.id}
//             activeOpacity={0.8}
//             onPress={() => setActiveTab(item.title)}
//             style={[
//               styles.tabBtn,
//               activeTab === item.title ? styles.activeTab : styles.inactiveTab
//             ]}
//           >
//             {/* छोटा आइकन कंटेनर */}
//             <View style={[styles.iconCircle, { backgroundColor: item.color + '15' }]}>
//                <Ionicons name={item.icon} size={14} color={item.color} />
//             </View>
//             <Text style={[
//               styles.tabText, 
//               activeTab === item.title ? styles.activeTabText : styles.inactiveTabText
//             ]} numberOfLines={1}>
//               {item.title}
//             </Text>
//           </TouchableOpacity>
//         ))}
//       </View>
//     </View>
//   );
// };

// export default TopServices;

// const styles = StyleSheet.create({
//   container: {
//     marginTop: 12,
//     marginBottom: 5,
//     paddingHorizontal: 2, // साइड से हल्का गैप
//   },
//   tabWrapper: {
//     flexDirection: 'row',
//     justifyContent: 'space-between', // चारों को बराबर दूरी पर फैला देगा
//     alignItems: 'center',
//   },
//   tabBtn: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     paddingHorizontal: 6, // पैडिंग कम की
//     paddingVertical: 6,   // पैडिंग कम की
//     borderRadius: 8,
//     borderWidth: 1,
//     // एक जैसी चौड़ाई के लिए (लगभग 23% स्क्रीन)
//     width: (width - 40) / 4, 
//     justifyContent: 'center',
    
//     // हलकी शैडो
//     elevation: 1,
//     shadowColor: '#000',
//     shadowOffset: { width: 0, height: 1 },
//     shadowOpacity: 0.05,
//     shadowRadius: 1,
//   },
//   activeTab: {
//     backgroundColor: Colors.white,
//     borderColor: Colors.primary,
//   },
//   inactiveTab: {
//     backgroundColor: '#F9FAFB',
//     borderColor: '#F3F4F6',
//   },
//   iconCircle: {
//     width: 22,
//     height: 22,
//     borderRadius: 11,
//     justifyContent: 'center',
//     alignItems: 'center',
//     marginRight: 4, // टेक्स्ट से दूरी कम की
//   },
//   tabText: {
//     fontSize: 9, // फोंट साइज छोटा किया
//     fontFamily: Fonts.bold,
//   },
//   activeTabText: {
//     color: Colors.primary,
//   },
//   inactiveTabText: {
//     color: '#9CA3AF',
//   },
// });













// import React, { useState } from 'react';
// import { 
//   Text, 
//   TouchableOpacity, 
//   StyleSheet, 
//   View,
//   Dimensions
// } from 'react-native';
// import Ionicons from "@react-native-vector-icons/ionicons";
// import { Colors } from '../../theme/colors';
// import { Fonts } from '../../theme/fonts';

// const { width } = Dimensions.get('window');

// const TopServices = () => {
//   const [activeTab, setActiveTab] = useState('Just2Car');

//   const services = [
//     { id: 1, title: 'Just2Car', icon: 'car-sport', color: '#243B53' },      // Blue
//     // { id: 1, title: '   ', icon: ' ', color: '#243B53' },
//     { id: 2, title: 'Buy & Sell', icon: 'swap-horizontal', color: '#FF6A00' }, // Orange
//     { id: 3, title: 'Insurance', icon: 'shield-checkmark', color: '#22C55E' }, // Green
//     { id: 4, title: 'Parts', icon: 'settings', color: '#F9B233' },         // Yellow
//   ] as const;

//   return (
//     <View style={styles.container}>
//       <View style={styles.tabWrapper}>
//         {services.map((item) => {
//           const isActive = activeTab === item.title;
          
//           return (
//             <TouchableOpacity 
//               key={item.id}
//               activeOpacity={0.9}
//               onPress={() => setActiveTab(item.title)}
//               style={[
//                 styles.tabBtn,
//                 { 
//                   // Active होने पर सर्विस का कलर, वरना हल्का ग्रे/सफ़ेद
//                   backgroundColor: isActive ? item.color : '#F3F4F6',
//                   borderColor: isActive ? item.color : '#E5E7EB'
//                 }
//               ]}
//             >
//               {/* आइकन कंटेनर */}
//               <View style={[
//                 styles.iconCircle, 
//                 { backgroundColor: isActive ? 'rgba(255,255,255,0.2)' : item.color + '15' }
//               ]}>
//                  <Ionicons 
//                     name={isActive ? (item.icon as any) : (item.icon + "-outline" as any)} 
//                     size={14} 
//                     color={isActive ? 'white' : item.color} 
//                  />
//               </View>

//               <Text style={[
//                 styles.tabText, 
//                 { color: isActive ? 'white' : '#4B5563' } // Active होने पर सफ़ेद टेक्स्ट
//               ]} numberOfLines={1}>
//                 {item.title}
//               </Text>
//             </TouchableOpacity>
//           );
//         })}
//       </View>
//     </View>
//   );
// };

// export default TopServices;

// const styles = StyleSheet.create({
//   container: {
//     marginTop: 12,
//     marginBottom: 5,
//     paddingHorizontal: 4,
//   },
// //   tabWrapper: {
// //     flexDirection: 'row',
// //     justifyContent: 'space-between',
// //     alignItems: 'center',
// //   },
// //   tabBtn: {
// //     flexDirection: 'row',
// //     alignItems: 'center',
// //     paddingHorizontal: 5,
// //     paddingVertical: 7,
// //     borderRadius: 10,
// //     borderWidth: 1,
// //     width: (width - 35) / 4, // परफेक्ट फिटिंग
// //     justifyContent: 'center',
    
// //     // प्रीमियम शैडो इफेक्ट
// //     elevation: 3,
// //     shadowColor: '#000',
// //     shadowOffset: { width: 0, height: 2 },
// //     shadowOpacity: 0.1,
// //     shadowRadius: 3,
// //   },
// tabWrapper: {
//   flexDirection: 'row',
//   alignItems: 'center',
//   gap: 8,
// },

// tabBtn: {
//   flexDirection: 'row',
//   alignItems: 'center',
//   paddingHorizontal: 5,
//   paddingVertical: 7,
//   borderRadius: 10,
//   borderWidth: 1,
//   width: (width - 60) / 4,
//   justifyContent: 'center',
//   elevation: 3,
// },

//   iconCircle: {
//     width: 22,
//     height: 22,
//     borderRadius: 11,
//     justifyContent: 'center',
//     alignItems: 'center',
//     marginRight: 4,
//   },
//   tabText: {
//     fontSize: 8.5, // साइज थोड़ा और छोटा किया ताकि कोई टेक्स्ट कटे न
//     fontFamily: Fonts.bold,
//   },
// });











// import React, { useState } from 'react';
// import { 
//   Text, 
//   TouchableOpacity, 
//   StyleSheet, 
//   View,
// } from 'react-native';
// import Ionicons from "@react-native-vector-icons/ionicons";
// import { Colors } from '../../theme/colors';
// import { Fonts } from '../../theme/fonts';

// const TopServices = () => {
//   const [activeTab, setActiveTab] = useState('Just2Car');

//   const services = [
//     { id: 1, title: 'Just2Car', icon: 'car-sport', color: '#243B53' },
//     { id: 2, title: 'Buy & Sell', icon: 'swap-horizontal', color: '#f87a20' },
//     { id: 3, title: 'Insurance', icon: 'shield-checkmark', color: '#41ac68' },
//     { id: 4, title: 'Parts', icon: 'settings', color: '#f8af31' },
//   ] as const;

//   return (
//     <View style={styles.container}>
//       <View style={styles.tabWrapper}>
//         {services.map((item, index) => {
//           const isActive = activeTab === item.title;
          
//           return (
//             <TouchableOpacity 
//               key={item.id}
//               activeOpacity={0.9}
//               onPress={() => setActiveTab(item.title)}
//               style={[
//                 styles.tabBtn,
//                 { 
//                   backgroundColor: isActive ? item.color : '#ffffff',
//                   borderColor: isActive ? item.color : '#E5E7EB',
//                   marginRight: index === services.length - 1 ? 0 : 8 
//                 }
//               ]}
//             >
//               {/* आइकन ऊपर (Top) */}
//               <View style={[
//                 styles.iconCircle, 
//                 { backgroundColor: isActive ? 'rgba(255,255,255,0.2)' : item.color + '15' }
//               ]}>
//                  <Ionicons 
//                     name={isActive ? (item.icon as any) : (item.icon + "-outline" as any)} 
//                     size={18} // आइकन साइज बढ़ा दिया
//                     color={isActive ? 'white' : item.color} 
//                  />
//               </View>

//               {/* टेक्स्ट नीचे (Bottom) */}
//               <Text style={[
//                 styles.tabText, 
//                 { color: isActive ? 'white' : '#374151' }
//               ]} 
//               numberOfLines={1}
//               >
//                 {item.title}
//               </Text>
//             </TouchableOpacity>
//           );
//         })}
//       </View>
//     </View>
//   );
// };

// export default TopServices;

// const styles = StyleSheet.create({
//   container: {
//     marginTop: 15,
//     marginBottom: 5,
//     paddingHorizontal: 12,
//   },
//   tabWrapper: {
//     flexDirection: 'row',
//     width: '100%',
//   },
//   tabBtn: {
//     flex: 1,
//     flexDirection: 'column', // आइकन ऊपर और टेक्स्ट नीचे करने के लिए
//     alignItems: 'center',
//     justifyContent: 'center',
//     height: 65, // ऊँचाई बढ़ा दी ताकि वर्टिकल स्पेस मिले
//     borderRadius: 12,
//     borderWidth: 1,
//     paddingVertical: 8,
    
//     // प्रीमियम शैडो
//     elevation: 3,
//     shadowColor: Colors.primary,
//     shadowOffset: { width: 0, height: 2 },
//     shadowOpacity: 0.1,
//     shadowRadius: 3,
//   },
//   iconCircle: {
//     width: 32, // गोले का साइज बढ़ा दिया
//     height: 32,
//     borderRadius: 16,
//     justifyContent: 'center',
//     alignItems: 'center',
//     marginBottom: 4, // टेक्स्ट से ऊपर गैप
//   },
//   tabText: {
//     fontSize: 12, // टेक्स्ट साइज बढ़ा दिया (पहले 8.5 था)
//     fontFamily: Fonts.bold,
//     textAlign: 'center',
//   },
// });


















import React, { useState } from 'react';
import { 
  Text, 
  TouchableOpacity, 
  StyleSheet, 
  View,
  ScrollView, 
  Dimensions
} from 'react-native';
import Ionicons from "@react-native-vector-icons/ionicons";
import { Colors } from '../../theme/colors';
import { Fonts } from '../../theme/fonts';

const { width } = Dimensions.get('window');

const TopServices = () => {
  const [activeTab, setActiveTab] = useState('Just2Car');

  const services = [
    { id: 1, title: 'Just2Car', icon: 'car-sport', color: '#243B53' },
    { id: 2, title: 'Buy & Sell', icon: 'swap-horizontal', color: '#f87a20' },
    { id: 3, title: 'Insurance', icon: 'shield-checkmark', color: '#41ac68' },
    { id: 4, title: 'Parts', icon: 'settings', color: '#f8af31' },
    { id: 5, title: 'RTO', icon: 'document-text', color: '#4648de' }, 
    { id: 6, title: 'Car Loan', icon: 'wallet', color: '#703caf' }, 
  ] as const;

  return (
    <View style={styles.container}>
      <ScrollView 
        horizontal 
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.scrollContent}
      >
        {services.map((item, index) => {
          const isActive = activeTab === item.title;
          
          return (
            <TouchableOpacity 
              key={item.id}
              activeOpacity={0.9}
              onPress={() => setActiveTab(item.title)}
              style={[
                styles.tabBtn,
                { 
                  backgroundColor: isActive ? item.color : '#ffffff',
                  borderColor: isActive ? item.color : '#E5E7EB',
                  // गैप के लिए मार्जिन
                  marginRight: 10 
                }
              ]}
            >
              {/* आइकन ऊपर */}
              <View style={[
                styles.iconCircle, 
                { backgroundColor: isActive ? 'rgba(255,255,255,0.2)' : item.color + '15' }
              ]}>
                 <Ionicons 
                    name={isActive ? (item.icon as any) : (item.icon + "-outline" as any)} 
                    size={20} 
                    color={isActive ? 'white' : item.color} 
                 />
              </View>

              {/* टेक्स्ट नीचे */}
              <Text style={[
                styles.tabText, 
                { color: isActive ? 'white' : '#374151' }
              ]} 
              numberOfLines={1}
              >
                {item.title}
              </Text>
            </TouchableOpacity>
          );
        })}
      </ScrollView>
    </View>
  );
};

export default TopServices;

const styles = StyleSheet.create({
  container: {
    marginTop: 15,
    marginBottom: 5,
  },
  scrollContent: {
    paddingHorizontal: 12, // किनारों से दूरी
    paddingBottom: 5, // शैडो न कटे इसलिए
  },
  tabBtn: {
    width: 85, // फिक्स चौड़ाई ताकि सब एक जैसे दिखें
    flexDirection: 'column', 
    alignItems: 'center',
    justifyContent: 'center',
    height: 70, // थोड़ी ऊँचाई बढ़ाई
    borderRadius: 12,
    borderWidth: 1,
    paddingVertical: 8,
    
    // प्रीमियम शैडो
    elevation: 3,
    shadowColor: Colors.primary,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 3,
  },
  iconCircle: {
    width: 34, 
    height: 34,
    borderRadius: 17,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 6,
  },
  tabText: {
    fontSize: 12, 
    fontFamily: Fonts.bold,
    textAlign: 'center',
  },
});