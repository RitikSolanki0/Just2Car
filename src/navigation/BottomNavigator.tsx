// import React from 'react';
// import { View, TouchableOpacity, StyleSheet, Dimensions, Text, Platform } from 'react-native';
// import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
// import Svg, { Path } from 'react-native-svg';
// import Ionicons from "@react-native-vector-icons/ionicons";
// import { useSafeAreaInsets } from 'react-native-safe-area-context'; // <-- ज़रूरी हुक
// import { Colors } from '../theme/colors';
// import { Fonts } from '../theme/fonts';

// // Screens
// import HomeScreen from '../screens/homescreens/HomeScreen';
// import SearchScreen from '../screens/bottomscreens/searchscreen/SearchScreen';
// import AddCarScreen from '../screens/bottomscreens/addcarscreen/AddCarScreen';
// import MyAddScreen from '../screens/bottomscreens/myaddscreen/MyAddScreen';
// import ProfileScreen from '../screens/bottomscreens/profilescreen/ProfileScreen';

// const Tab = createBottomTabNavigator();
// const { width } = Dimensions.get('window');

// // --- 1. Sleek Figma-Exact SVG Path ---
// // यहाँ हमने इनसेट (bottom) लिया है ताकि बैकग्राउंड की हाइट बढ़ सके
// const TabBg = ({ bottomInset }: { bottomInset: number }) => {
//   const height = 80 + bottomInset; // डायनामिक हाइट
//   const d = `
//     M0,30 
//     L${width * 0.36},8 
//     C${width * 0.43},8 ${width * 0.43},55 ${width * 0.5},55 
//     C${width * 0.57},55 ${width * 0.57},8 ${width * 0.64},8 
//     L${width},30 
//     V${height} H0 Z
//   `;

//   return (
//     <View style={[styles.svgContainer, { height }]}>
//       <Svg width={width} height={height} viewBox={`0 0 ${width} ${height}`}>
//         <Path fill={Colors.primary} d={d} />
//       </Svg>
//     </View>
//   );
// };

// // --- 2. Tab Item Component ---
// const TabItem = ({ icon, label, focused }: any) => (
//   <View style={styles.tabItemContainer}>
//     <Ionicons 
//         name={icon} 
//         size={23} 
//         color={focused ? Colors.secondary : '#aaa8a8'} 
//     />
//     <Text 
//         style={[styles.tabLabel, { color: focused ? Colors.secondary : '#A0A0A0' }]}
//         numberOfLines={1}
//     >
//       {label}
//     </Text>
//   </View>
// );

// const BottomNavigator = () => {
//   const insets = useSafeAreaInsets(); // नीचे के बटन्स की हाइट देता है

//   return (
//     <Tab.Navigator
//       screenOptions={{
//         headerShown: false,
//         tabBarShowLabel: false,
//         tabBarStyle: [
//             styles.tabBar, 
//             { 
//                 height: 56 + insets.bottom, // सिस्टम बार के हिसाब से हाइट बढ़ेगी
//                 paddingBottom: insets.bottom > 0 ? insets.bottom - 10 : 0 // बटन्स से थोड़ा ऊपर रखने के लिए
//             }
//         ],
//         tabBarBackground: () => <TabBg bottomInset={insets.bottom} />,
//       }}
//     >
//       <Tab.Screen
//         name="HomeScreen"
//         component={HomeScreen}
//         options={{
//           tabBarIcon: ({ focused }) => <TabItem icon="home" label="Home" focused={focused} />,
//         }}
//       />
//       <Tab.Screen
//         name="SearchScreen"
//         component={SearchScreen}
//         options={{
//           tabBarIcon: ({ focused }) => <TabItem icon="search" label="Search" focused={focused} />,
//         }}
//       />
//       <Tab.Screen
//         name="AddCarScreen"
//         component={AddCarScreen}
//         options={{
//           tabBarIcon: () => (
//             <View style={styles.plusButton}>
//               <Text style={styles.plusSign}>+</Text>
//             </View>
//           ),
//           tabBarButton: (props) => {
//             const { delayLongPress, ...rest }: any = props;
//             return (
//               <TouchableOpacity {...rest} activeOpacity={0.9} style={styles.centerSpace} />
//             );
//           }
//         }}
//       />
//       <Tab.Screen
//         name="MyAddScreen"
//         component={MyAddScreen}
//         options={{
//           tabBarIcon: ({ focused }) => <TabItem icon="basket" label="My Ads" focused={focused} />,
//         }}
//       />
//       <Tab.Screen
//         name="ProfileScreen"
//         component={ProfileScreen}
//         options={{
//           tabBarIcon: ({ focused }) => <TabItem icon="person" label="Profile" focused={focused} />,
//         }}
//       />
//     </Tab.Navigator>
//   );
// };

// export default function TabNavigatorWrapper() {
//   return (
//     <View style={{ flex: 1, backgroundColor: Colors.white }}>
//       <BottomNavigator />
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   tabBar: {
//     position: 'absolute',
//     backgroundColor: 'transparent',
//     borderTopWidth: 0,
//     elevation: 0,
//     bottom: 0,
//     left: 0,
//     right: 0,
//   },
//   svgContainer: {
//     position: 'absolute',
//     bottom: 0,
//     zIndex: -1,
//   },
//   tabItemContainer: {
//     alignItems: 'center',
//     justifyContent: 'center',
//     top: 15, // इसको थोड़ा कम किया ताकि रिस्पॉन्सिव रहे
//     width: width / 5,
//   },
//   tabLabel: {
//     fontSize: 10,
//     fontFamily: Fonts.bold,
//     marginTop: 2,
//   },
//   plusButton: {
//     width: 68,
//     height: 68,
//     borderRadius: 34,
//     backgroundColor: Colors.secondary,
//     justifyContent: 'center',
//     alignItems: 'center',
//     top: -5, // प्लस बटन को थोड़ा ऊपर किया ताकि कर्व में सही बैठे
//     elevation: 8,
//     shadowColor: Colors.primary,
//     shadowOffset: { width: 0, height: 4 },
//     shadowOpacity: 0.3,
//     shadowRadius: 5,
//     borderWidth: 4,
//     borderColor: Colors.white,
//   },
//   plusSign: {
//     fontSize: 42,
//     color: Colors.primary,
//     fontFamily: Fonts.bold,
//     fontWeight: 'bold',
//     marginTop: -5,
//   },
//   centerSpace: {
//     justifyContent: 'center',
//     alignItems: 'center',
//     width: width * 0.2,
//   }
// });














// import React from 'react';
// import { View, TouchableOpacity, StyleSheet, Dimensions, Text } from 'react-native';
// import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
// import Svg, { Path } from 'react-native-svg';
// import Ionicons from "@react-native-vector-icons/ionicons";
// import { useSafeAreaInsets } from 'react-native-safe-area-context';
// import { Colors } from '../theme/colors';
// import { Fonts } from '../theme/fonts';

// // Screens
// import HomeScreen from '../screens/homescreens/HomeScreen';
// import SearchScreen from '../screens/bottomscreens/searchscreen/SearchScreen';
// import AddCarScreen from '../screens/bottomscreens/addcarscreen/AddCarScreen';
// import MyAddScreen from '../screens/bottomscreens/myaddscreen/MyAddScreen';
// import ProfileScreen from '../screens/bottomscreens/profilescreen/ProfileScreen';

// const Tab = createBottomTabNavigator();
// const { width } = Dimensions.get('window');

// // --- 1. SVG Background ---
// const TabBg = ({ bottomInset }: { bottomInset: number }) => {
//   const height = 80 + bottomInset;
//   const d = `
//     M0,30 
//     L${width * 0.36},8 
//     C${width * 0.43},8 ${width * 0.43},55 ${width * 0.5},55 
//     C${width * 0.57},55 ${width * 0.57},8 ${width * 0.64},8 
//     L${width},30 
//     V${height} H0 Z
//   `;

//   return (
//     <View style={[styles.svgContainer, { height }]}>
//       <Svg width={width} height={height} viewBox={`0 0 ${width} ${height}`}>
//         <Path fill={Colors.primary} d={d} />
//       </Svg>
//     </View>
//   );
// };

// // --- 2. Updated Tab Item Component ---
// // यहाँ हमने 'topOffset' जोड़ा है ताकि हर बटन की ऊँचाई अलग हो सके
// const TabItem = ({ icon, label, focused, topOffset }: any) => (
//   <View style={[styles.tabItemContainer, { top: topOffset }]}>
//     <Ionicons 
//         name={icon} 
//         size={23} 
//         color={focused ? Colors.secondary : '#aaa8a8'} 
//     />
//     <Text 
//         style={[styles.tabLabel, { color: focused ? Colors.secondary : '#A0A0A0' }]}
//         numberOfLines={1}
//     >
//       {label}
//     </Text>
//   </View>
// );

// const BottomNavigator = () => {
//   const insets = useSafeAreaInsets();

//   return (
//     <Tab.Navigator
//       screenOptions={{
//         headerShown: false,
//         tabBarShowLabel: false,
//          tabBarHideOnKeyboard: true,
//         tabBarStyle: [
//             styles.tabBar, 
//             { 
//                 height: 56 + insets.bottom, 
//                 paddingBottom: insets.bottom > 0 ? insets.bottom - 10 : 0
//             }
//         ],
//         tabBarBackground: () => <TabBg bottomInset={insets.bottom} />,
//       }}
//     >
//       <Tab.Screen
//         name="HomeScreen"
//         component={HomeScreen}
//         options={{
//           // किनारे वाले (Home) के लिए 18px नीचे
//           tabBarIcon: ({ focused }) => <TabItem icon="home" label="Home" focused={focused} topOffset={18} />,
//         }}
//       />
//       <Tab.Screen
//         name="SearchScreen"
//         component={SearchScreen}
//         options={{
//           // बीच वाले (Search) को ऊपर उठाने के लिए सिर्फ 8px नीचे (यानी 10px ऊपर चढ़ गया)
//           tabBarIcon: ({ focused }) => <TabItem icon="search" label="Search" focused={focused} topOffset={8} />,
//         }}
//       />
//       <Tab.Screen
//         name="AddCarScreen"
//         component={AddCarScreen}
//         options={{
//           tabBarIcon: () => (
//             <View style={styles.plusButton}>
//               <Text style={styles.plusSign}>+</Text>
//             </View>
//           ),
//           tabBarButton: (props) => {
//             const { delayLongPress, ...rest }: any = props;
//             return <TouchableOpacity {...rest} activeOpacity={0.9} style={styles.centerSpace} />;
//           }
//         }}
//       />
//       <Tab.Screen
//         name="MyAddScreen"
//         component={MyAddScreen}
//         options={{
//           // बीच वाले (My Ads) को ऊपर उठाने के लिए सिर्फ 8px नीचे
//           tabBarIcon: ({ focused }) => <TabItem icon="basket" label="My Ads" focused={focused} topOffset={8} />,
//         }}
//       />
//       <Tab.Screen
//         name="ProfileScreen"
//         component={ProfileScreen}
//         options={{
//           // किनारे वाले (Profile) के लिए 18px नीचे
//           tabBarIcon: ({ focused }) => <TabItem icon="person" label="Profile" focused={focused} topOffset={18} />,
//         }}
//       />
//     </Tab.Navigator>
//   );
// };

// export default function TabNavigatorWrapper() {
//   return (
//     <View style={{ flex: 1, backgroundColor: Colors.white }}>
//       <BottomNavigator />
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   tabBar: {
//     position: 'absolute',
//     backgroundColor: 'transparent',
//     borderTopWidth: 0,
//     elevation: 0,
//     bottom: 0,
//     left: 0,
//     right: 0,
//   },
//   svgContainer: {
//     position: 'absolute',
//     bottom: 0,
//     zIndex: -1,
//   },
//   tabItemContainer: {
//     alignItems: 'center',
//     justifyContent: 'center',
//     // 'top' यहाँ से हटाकर डायनामिक कर दिया गया है
//     width: width / 5,
//   },
//   tabLabel: {
//     fontSize: 10,
//     fontFamily: Fonts.bold,
//     marginTop: 2,
//   },
//   plusButton: {
//     width: 68,
//     height: 68,
//     borderRadius: 34,
//     backgroundColor: Colors.secondary,
//     justifyContent: 'center',
//     alignItems: 'center',
//     top: -5, 
//     elevation: 8,
//     shadowColor: Colors.primary,
//     shadowOffset: { width: 0, height: 4 },
//     shadowOpacity: 0.3,
//     shadowRadius: 5,
//     borderWidth: 4,
//     borderColor: Colors.white,
//   },
//   plusSign: {
//     fontSize: 42,
//     color: Colors.primary,
//     fontFamily: Fonts.bold,
//     fontWeight: 'bold',
//     marginTop: -5,
//   },
//   centerSpace: {
//     justifyContent: 'center',
//     alignItems: 'center',
//     width: width * 0.2,
//   }
// });






















// bottom tab android 13 14 ko ya se thik kiya hai 

import React, { useState, useEffect } from 'react';
import { View, TouchableOpacity, StyleSheet, Dimensions, Text, Keyboard } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Svg, { Path } from 'react-native-svg';
import Ionicons from "@react-native-vector-icons/ionicons";
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { Colors } from '../theme/colors';
import { Fonts } from '../theme/fonts';

// Screens
import HomeScreen from '../screens/homescreens/HomeScreen';
import SearchScreen from '../screens/bottomscreens/searchscreen/SearchScreen';
import AddCarScreen from '../screens/bottomscreens/addcarscreen/AddCarScreen';
import MyAddScreen from '../screens/bottomscreens/myaddscreen/MyAddScreen';
import ProfileScreen from '../screens/bottomscreens/profilescreen/ProfileScreen';

const Tab = createBottomTabNavigator();
const { width } = Dimensions.get('window');

// --- 1. SVG Background ---
const TabBg = ({ bottomInset }: { bottomInset: number }) => {
  const height = 80 + bottomInset;
  const d = `
    M0,30 
    L${width * 0.36},8 
    C${width * 0.43},8 ${width * 0.43},55 ${width * 0.5},55 
    C${width * 0.57},55 ${width * 0.57},8 ${width * 0.64},8 
    L${width},30 
    V${height} H0 Z
  `;

  return (
    <View style={[styles.svgContainer, { height }]}>
      <Svg width={width} height={height} viewBox={`0 0 ${width} ${height}`}>
        <Path fill={Colors.primary} d={d} />
      </Svg>
    </View>
  );
};

// --- 2. Tab Item Component ---
const TabItem = ({ icon, label, focused, topOffset }: any) => (
  <View style={[styles.tabItemContainer, { top: topOffset }]}>
    <Ionicons name={icon} size={23} color={focused ? Colors.secondary : '#aaa8a8'} />
    <Text style={[styles.tabLabel, { color: focused ? Colors.secondary : '#A0A0A0' }]} numberOfLines={1}>{label}</Text>
  </View>
);

const BottomNavigator = () => {
  const insets = useSafeAreaInsets();
  const [isKeyboardVisible, setKeyboardVisible] = useState(false);

  useEffect(() => {
    const showSub = Keyboard.addListener('keyboardDidShow', () => setKeyboardVisible(true));
    const hideSub = Keyboard.addListener('keyboardDidHide', () => setKeyboardVisible(false));
    return () => {
      showSub.remove();
      hideSub.remove();
    };
  }, []);

  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
        tabBarHideOnKeyboard: true, // कीबोर्ड आने पर आइकन्स छुपाओ
        tabBarStyle: [
            styles.tabBar, 
            { 
                height: 56 + insets.bottom, 
                paddingBottom: insets.bottom > 0 ? insets.bottom - 10 : 0,
                // --- यहाँ जादू है: कीबोर्ड दिखने पर पूरी बार को गायब करो बिना अनमाउंट किए ---
                display: isKeyboardVisible ? 'none' : 'flex' 
            }
        ],
        // कीबोर्ड दिखने पर बैकग्राउंड भी छुपाओ
        tabBarBackground: () => !isKeyboardVisible ? <TabBg bottomInset={insets.bottom} /> : null,
      }}
    >
      <Tab.Screen
        name="HomeScreen"
        component={HomeScreen}
        options={{
          tabBarIcon: ({ focused }) => <TabItem icon="home" label="Home" focused={focused} topOffset={18} />,
        }}
      />
      <Tab.Screen
        name="SearchScreen"
        component={SearchScreen}
        options={{
          tabBarIcon: ({ focused }) => <TabItem icon="search" label="Search" focused={focused} topOffset={8} />,
        }}
      />
      <Tab.Screen
        name="AddCarScreen"
        component={AddCarScreen}
        options={{
          tabBarIcon: () => (
            <View style={styles.plusButton}>
              <Text style={styles.plusSign}>+</Text>
            </View>
          ),
          tabBarButton: (props) => {
            const { delayLongPress, ...rest }: any = props;
            return <TouchableOpacity {...rest} activeOpacity={0.9} style={styles.centerSpace} />;
          }
        }}
      />
      <Tab.Screen
        name="MyAddScreen"
        component={MyAddScreen}
        options={{
          tabBarIcon: ({ focused }) => <TabItem icon="basket" label="My Ads" focused={focused} topOffset={8} />,
        }}
      />
      <Tab.Screen
        name="ProfileScreen"
        component={ProfileScreen}
        options={{
          tabBarIcon: ({ focused }) => <TabItem icon="person" label="Profile" focused={focused} topOffset={18} />,
        }}
      />
    </Tab.Navigator>
  );
};

export default function TabNavigatorWrapper() {
  return (
    <View style={{ flex: 1, backgroundColor: Colors.white }}>
      <BottomNavigator />
    </View>
  );
}

const styles = StyleSheet.create({
  tabBar: {
    position: 'absolute',
    backgroundColor: 'transparent',
    borderTopWidth: 0,
    elevation: 0,
    bottom: 0,
    left: 0,
    right: 0,
  },
  svgContainer: { position: 'absolute', bottom: 0, zIndex: -1 },
  tabItemContainer: { alignItems: 'center', justifyContent: 'center', width: width / 5 },
  tabLabel: { fontSize: 10, fontFamily: Fonts.bold, marginTop: 2 },
  plusButton: {
    width: 68, height: 68, borderRadius: 34, backgroundColor: Colors.secondary,
    justifyContent: 'center', alignItems: 'center', top: -5, elevation: 8,
    shadowColor: Colors.primary, shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3, shadowRadius: 5, borderWidth: 4, borderColor: Colors.white,
  },
  plusSign: { fontSize: 42, color: Colors.primary, fontFamily: Fonts.bold, fontWeight: 'bold', marginTop: -5 },
  centerSpace: { justifyContent: 'center', alignItems: 'center', width: width * 0.2 },
});