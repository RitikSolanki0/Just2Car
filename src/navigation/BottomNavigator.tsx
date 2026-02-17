// import React from 'react';
// import { View, TouchableOpacity, StyleSheet , Alert} from 'react-native';
// import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
// import Ionicons from "@react-native-vector-icons/ionicons";

// // Screens
// import HomeScreen from '../screens/homescreens/HomeScreen';
// // --- दूसरी टैब स्क्रीन्स को यहाँ import करना है (जब बन जाएँगी) ---
// // import SearchScreen from '../screens/SearchScreen'; 
// // import MyAdsScreen from '../screens/MyAdsScreen';
// // import ProfileScreen from '../screens/ProfileScreen';

// import { Colors } from '../theme/colors';

// const Tab = createBottomTabNavigator();

// // यह बीच वाला पीला बटन है
// const CustomTabBarButton = ({ children, onPress }: any) => (
//   <TouchableOpacity
//     style={styles.customButtonContainer}
//     onPress={onPress}
//     activeOpacity={0.8}
//   >
//     <View style={styles.customButton}>
//       {children}
//     </View>
//   </TouchableOpacity>
// );

// const BottomNavigator = () => {
//   return (
//     <Tab.Navigator
//       screenOptions={{
//         headerShown: false,
//         tabBarShowLabel: true,
//         tabBarStyle: styles.tabBar,
//         tabBarActiveTintColor: Colors.secondary,
//         tabBarInactiveTintColor: '#8E9AAB', // Light blue-gray for inactive icons
//         tabBarLabelStyle: {
//           fontSize: 10,
//           marginBottom: 10,
//         },
//       }}
//     >
//       <Tab.Screen 
//         name="HomeScreen" 
//         component={HomeScreen} 
//         options={{
//           tabBarIcon: ({ color }) => <Ionicons name="home-outline" size={24} color={color} />
//         }}
//       />
//       <Tab.Screen 
//         name="Search" 
//         component={HomeScreen} // अभी के लिए HomeScreen डाल रहा हूँ
//         options={{
//           tabBarIcon: ({ color }) => <Ionicons name="search-outline" size={24} color={color} />
//         }}
//       />
//       <Tab.Screen 
//         name="Add" 
//         component={HomeScreen} // यह कहीं navigate नहीं करेगा
//         options={{
//           tabBarLabel: '', // इसका कोई लेबल नहीं होगा
//           tabBarIcon: () => <Ionicons name="add" size={30} color="white" />,
//           tabBarButton: (props) => <CustomTabBarButton {...props} />
//         }}
//         // Add listener to prevent navigation
//         listeners={{
//           tabPress: e => {
//             e.preventDefault();
//             // यहाँ पर Add/Sell Car वाला Modal खोल सकते हो
//             Alert.alert('Open Sell Car Screen!'); 
//           },
//         }}
//       />
//       <Tab.Screen 
//         name="My Ads" 
//         component={HomeScreen} // अभी के लिए HomeScreen डाल रहा हूँ
//         options={{
//           tabBarIcon: ({ color }) => <Ionicons name="cube-outline" size={24} color={color} />
//         }}
//       />
//       <Tab.Screen 
//         name="Profile" 
//         component={HomeScreen} // अभी के लिए HomeScreen डाल रहा हूँ
//         options={{
//           tabBarIcon: ({ color }) => <Ionicons name="person-outline" size={24} color={color} />
//         }}
//       />
//     </Tab.Navigator>
//   );
// };

// export default BottomNavigator;

// const styles = StyleSheet.create({
//   tabBar: {
//     position: 'absolute',
//     bottom: 15,
//     left: 15,
//     right: 15,
//     height: 70,
//     backgroundColor: Colors.primary,
//     borderRadius: 20,
//     borderTopWidth: 0,
//     elevation: 10,
//     shadowColor: '#000',
//     shadowOffset: { width: 0, height: 5 },
//     shadowOpacity: 0.2,
//     shadowRadius: 10,
//   },
//   customButtonContainer: {
//     top: -25,
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
//   customButton: {
//     width: 60,
//     height: 60,
//     borderRadius: 30,
//     backgroundColor: Colors.secondary,
//     elevation: 5,
//     justifyContent: 'center',
//     alignItems: 'center',
//     borderWidth: 4,
//     borderColor: Colors.white
//   }
// });


















// import React from 'react';
// import { View, TouchableOpacity, StyleSheet, Dimensions, Text } from 'react-native';
// import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
// import Svg, { Path } from 'react-native-svg';
// import Ionicons from "@react-native-vector-icons/ionicons";
// import { Colors } from '../theme/colors';
// import { Fonts } from '../theme/fonts';

// // Screens
// import HomeScreen from '../screens/homescreens/HomeScreen';

// const Tab = createBottomTabNavigator();
// const { width } = Dimensions.get('window');

// // --- Custom Tab Bar Shape (SVG) ---
// const TabBg = ({ color = Colors.primary }: { color?: string }) => {
//   return (
//     <View style={{ position: 'absolute', bottom: 0 }}>
//       <Svg width={width} height={80} viewBox={`0 0 ${width} 80`}>
//         <Path
//           fill={color}
//           d={`M0,20 
//               C${width * 0.1},15 ${width * 0.2},0 ${width * 0.35},0 
//               L${width * 0.4},0 
//               C${width * 0.45},0 ${width * 0.46},25 ${width * 0.5},25 
//               C${width * 0.54},25 ${width * 0.55},0 ${width * 0.6},0 
//               L${width * 0.65},0 
//               C${width * 0.8},0 ${width * 0.9},15 ${width},20 
//               V80 H0 Z`}
//         />
//       </Svg>
//     </View>
//   );
// };

// const BottomNavigator = () => {
//   return (
//     <Tab.Navigator
//       screenOptions={{
//         headerShown: false,
//         tabBarShowLabel: false,
//         tabBarStyle: {
//           position: 'absolute',
//           backgroundColor: 'transparent',
//           borderTopWidth: 0,
//           elevation: 0,
//           height: 80,
//         },
//       }}
//     >
//       <Tab.Screen
//         name="Home"
//         component={HomeScreen}
//         options={{
//           tabBarIcon: ({ focused }) => (
//             <TabItem icon="home-outline" label="Home" focused={focused} />
//           ),
//         }}
//       />
//       <Tab.Screen
//         name="Search"
//         component={HomeScreen}
//         options={{
//           tabBarIcon: ({ focused }) => (
//             <TabItem icon="search-outline" label="Search" focused={focused} />
//           ),
//         }}
//       />
//       <Tab.Screen
//         name="Add"
//         component={HomeScreen}
//         options={{
//           tabBarIcon: () => (
//             <View style={styles.plusButton}>
//               <Ionicons name="add" size={35} color={Colors.primary} />
//             </View>
//           ),
//           tabBarButton: (props: any) => (
//   <TouchableOpacity 
//     {...props} 
//     activeOpacity={0.8} 
//     style={styles.centerSpace} 
//   />
// )
//         }}
//       />
//       <Tab.Screen
//         name="My Ads"
//         component={HomeScreen}
//         options={{
//           tabBarIcon: ({ focused }) => (
//             <TabItem icon="basket-outline" label="My Ads" focused={focused} />
//           ),
//         }}
//       />
//       <Tab.Screen
//         name="Profile"
//         component={HomeScreen}
//         options={{
//           tabBarIcon: ({ focused }) => (
//             <TabItem icon="person-outline" label="Profile" focused={focused} />
//           ),
//         }}
//       />
//     </Tab.Navigator>
//   );
// };

// // --- Helper Component for Tab Items ---
// const TabItem = ({ icon, label, focused }: any) => (
//   <View style={styles.tabItemContainer}>
//     <Ionicons name={icon} size={24} color={focused ? Colors.secondary : '#A0A0A0'} />
//     <Text style={[styles.tabLabel, { color: focused ? Colors.secondary : '#A0A0A0' }]}>{label}</Text>
//   </View>
// );

// export default function TabNavigatorWrapper() {
//     return (
//         <View style={{ flex: 1 }}>
//             <TabBg />
//             <BottomNavigator />
//         </View>
//     );
// }

// const styles = StyleSheet.create({
//   tabItemContainer: {
//     alignItems: 'center',
//     justifyContent: 'center',
//     top: 15, // आइकन को थोड़ा नीचे करने के लिए
//   },
//   tabLabel: {
//     fontSize: 10,
//     fontFamily: Fonts.medium,
//     marginTop: 4,
//   },
//   plusButton: {
//     width: 65,
//     height: 65,
//     borderRadius: 35,
//     backgroundColor: Colors.secondary,
//     justifyContent: 'center',
//     alignItems: 'center',
//     top: -20, // पीला बटन ऊपर रखने के लिए
//     elevation: 8,
//     shadowColor: '#000',
//     shadowOffset: { width: 0, height: 4 },
//     shadowOpacity: 0.3,
//     shadowRadius: 5,
//   },
//   centerSpace: {
//     top: -20,
//     justifyContent: 'center',
//     alignItems: 'center',
//   }
// });

















// import React from 'react';
// import { View, TouchableOpacity, StyleSheet, Dimensions, Text } from 'react-native';
// import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
// import Svg, { Path } from 'react-native-svg';
// import Ionicons from "@react-native-vector-icons/ionicons";
// import { Colors } from '../theme/colors';
// import { Fonts } from '../theme/fonts';

// // Screens
// import HomeScreen from '../screens/homescreens/HomeScreen';

// const Tab = createBottomTabNavigator();
// const { width } = Dimensions.get('window');

// // --- 1. Custom SVG Shape (The Professional Way) ---
// const TabBg = () => {
//   // यह पाथ आपकी इमेज के कर्व से मैच करने के लिए बनाया गया है
//   const line = `M0,20 
//     L${width * 0.38},20 
//     C${width * 0.42},20 ${width * 0.44},55 ${width * 0.5},55 
//     C${width * 0.56},55 ${width * 0.58},20 ${width * 0.62},20 
//     L${width},20 
//     V90 H0 Z`;

//   return (
//     <View style={styles.svgContainer}>
//       <Svg width={width} height={90} viewBox={`0 0 ${width} 90`}>
//         <Path fill={Colors.primary} d={line} />
//       </Svg>
//     </View>
//   );
// };

// // --- 2. Tab Item Component ---
// const TabItem = ({ icon, label, focused }: any) => (
//   <View style={styles.tabItemContainer}>
//     <Ionicons name={icon} size={22} color={focused ? Colors.secondary : '#A0A0A0'} />
//     <Text style={[styles.tabLabel, { color: focused ? Colors.secondary : '#A0A0A0' }]}>
//       {label}
//     </Text>
//   </View>
// );

// const BottomNavigator = () => {
//   return (
//     <Tab.Navigator
//       screenOptions={{
//         headerShown: false,
//         tabBarShowLabel: false,
//         tabBarStyle: styles.tabBar,
//         tabBarBackground: () => <TabBg />, // यहाँ SVG सेट है
//       }}
//     >
//       <Tab.Screen
//         name="Home"
//         component={HomeScreen}
//         options={{
//           tabBarIcon: ({ focused }) => <TabItem icon="home-outline" label="Home" focused={focused} />,
//         }}
//       />
//       <Tab.Screen
//         name="Search"
//         component={HomeScreen}
//         options={{
//           tabBarIcon: ({ focused }) => <TabItem icon="search-outline" label="Search" focused={focused} />,
//         }}
//       />
//       <Tab.Screen
//         name="Add"
//         component={HomeScreen}
//         options={{
//           tabBarIcon: () => (
//             <View style={styles.plusButton}>
//               <Ionicons name="add" size={35} color={Colors.primary} />
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
//         name="My Ads"
//         component={HomeScreen}
//         options={{
//           tabBarIcon: ({ focused }) => <TabItem icon="basket-outline" label="My Ads" focused={focused} />,
//         }}
//       />
//       <Tab.Screen
//         name="Profile"
//         component={HomeScreen}
//         options={{
//           tabBarIcon: ({ focused }) => <TabItem icon="person-outline" label="Profile" focused={focused} />,
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
//     height: 90,
//     bottom: 0,
//   },
//   svgContainer: {
//     position: 'absolute',
//     bottom: 0,
//   },
//   tabItemContainer: {
//     alignItems: 'center',
//     justifyContent: 'center',
//     paddingTop: 25, // आइकन्स को कर्व लाइन के नीचे रखने के लिए
//   },
//   tabLabel: {
//     fontSize: 10,
//     fontFamily: Fonts.medium,
//     marginTop: 4,
//   },
//   plusButton: {
//     width: 60,
//     height: 60,
//     borderRadius: 30,
//     backgroundColor: Colors.secondary,
//     justifyContent: 'center',
//     alignItems: 'center',
//     // बटन को कर्व के अंदर बिठाने के लिए:
//     top: 5, 
//     elevation: 10,
//     shadowColor: '#000',
//     shadowOffset: { width: 0, height: 4 },
//     shadowOpacity: 0.3,
//     shadowRadius: 5,
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
// import { Colors } from '../theme/colors';
// import { Fonts } from '../theme/fonts';

// // Screens
// import HomeScreen from '../screens/homescreens/HomeScreen';

// const Tab = createBottomTabNavigator();
// const { width } = Dimensions.get('window');

// // --- 1. Custom "Mountain Curve" SVG Shape ---
// const TabBg = () => {
//   // यह पाथ कोनों पर नीचा है और बीच की तरफ बढ़ता है (Height Gradient Effect)
//   const d = `
//     M0,40 
//     Q${width * 0.15},35 ${width * 0.32},15 
//     C${width * 0.42},10 ${width * 0.42},65 ${width * 0.5},65 
//     C${width * 0.58},65 ${width * 0.58},10 ${width * 0.68},15 
//     Q${width * 0.85},35 ${width},40 
//     V100 H0 Z
//   `;

//   return (
//     <View style={styles.svgContainer}>
//       <Svg width={width} height={110} viewBox={`0 0 ${width} 100`}>
//         <Path fill={Colors.primary} d={d} />
//       </Svg>
//     </View>
//   );
// };

// // --- 2. Tab Item Component ---
// const TabItem = ({ icon, label, focused }: any) => (
//   <View style={styles.tabItemContainer}>
//     <Ionicons name={icon} size={22} color={focused ? Colors.secondary : '#A0A0A0'} />
//     <Text style={[styles.tabLabel, { color: focused ? Colors.secondary : '#A0A0A0' }]}>
//       {label}
//     </Text>
//   </View>
// );

// const BottomNavigator = () => {
//   return (
//     <Tab.Navigator
//       screenOptions={{
//         headerShown: false,
//         tabBarShowLabel: false,
//         tabBarStyle: styles.tabBar,
//         tabBarBackground: () => <TabBg />,
//       }}
//     >
//       <Tab.Screen
//         name="Home"
//         component={HomeScreen}
//         options={{
//           tabBarIcon: ({ focused }) => <TabItem icon="home" label="Home" focused={focused} />,
//         }}
//       />
//       <Tab.Screen
//         name="Search"
//         component={HomeScreen}
//         options={{
//           tabBarIcon: ({ focused }) => <TabItem icon="search" label="Search" focused={focused} />,
//         }}
//       />
//       <Tab.Screen
//         name="Add"
//         component={HomeScreen}
//         options={{
//           tabBarIcon: () => (
//             <View style={styles.plusButton}>
//               <Ionicons name="add" size={38} color={Colors.primary} />
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
//         name="My Ads"
//         component={HomeScreen}
//         options={{
//           tabBarIcon: ({ focused }) => <TabItem icon="basket" label="My Ads" focused={focused} />,
//         }}
//       />
//       <Tab.Screen
//         name="Profile"
//         component={HomeScreen}
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
//     height: 100, // हाइट थोड़ी बढ़ाई है ताकि कर्व दिखे
//     bottom: 0,
//   },
//   svgContainer: {
//     position: 'absolute',
//     bottom: 0,
//   },
//   tabItemContainer: {
//     alignItems: 'center',
//     justifyContent: 'center',
//     top: 25, // आइकन्स को डार्क ब्लू एरिया के अंदर रखने के लिए
//   },
//   tabLabel: {
//     fontSize: 11,
//     fontFamily: Fonts.medium,
//     marginTop: 4,
//   },
//   plusButton: {
//     width: 68,
//     height: 68,
//     borderRadius: 34,
//     backgroundColor: Colors.secondary,
//     justifyContent: 'center',
//     alignItems: 'center',
//     top: 5, // इस प्लस बटन को बिल्कुल उस गहरे गड्ढे (Dip) के अंदर बिठाने के लिए
//     elevation: 10,
//     shadowColor: '#000',
//     shadowOffset: { width: 0, height: 5 },
//     shadowOpacity: 0.3,
//     shadowRadius: 5,
//     borderWidth: 3,
//     borderColor: Colors.white, // प्लस बटन के चारों तरफ सफेद बॉर्डर जैसा इफेक्ट (वैकल्पिक)
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
// import { Colors } from '../theme/colors';
// import { Fonts } from '../theme/fonts';

// // Screens
// import HomeScreen from '../screens/homescreens/HomeScreen';

// const Tab = createBottomTabNavigator();
// const { width } = Dimensions.get('window');

// // --- 1. Updated SVG Shape with more height ---
// const TabBg = () => {
//   // पाथ को हाइट के हिसाब से एडजस्ट किया गया है (M0,50 और V130)
//   const d = `
//     M0,50 
//     Q${width * 0.15},45 ${width * 0.32},20 
//     C${width * 0.42},15 ${width * 0.42},75 ${width * 0.5},75 
//     C${width * 0.58},75 ${width * 0.58},15 ${width * 0.68},20 
//     Q${width * 0.85},45 ${width},50 
//     V130 H0 Z
//   `;

//   return (
//     <View style={styles.svgContainer}>
//       <Svg width={width} height={130} viewBox={`0 0 ${width} 130`}>
//         <Path fill={Colors.primary} d={d} />
//       </Svg>
//     </View>
//   );
// };

// const TabItem = ({ icon, label, focused }: any) => (
//   <View style={styles.tabItemContainer}>
//     <Ionicons 
//         name={icon} 
//         size={24} // साइज थोड़ा बढ़ा दिया
//         color={focused ? Colors.secondary : '#A0A0A0'} 
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
//   return (
//     <Tab.Navigator
//       screenOptions={{
//         headerShown: false,
//         tabBarShowLabel: false,
//         tabBarStyle: styles.tabBar,
//         tabBarBackground: () => <TabBg />,
//       }}
//     >
//       <Tab.Screen
//         name="Home"
//         component={HomeScreen}
//         options={{
//           tabBarIcon: ({ focused }) => <TabItem icon="home-outline" label="Home" focused={focused} />,
//         }}
//       />
//       <Tab.Screen
//         name="Search"
//         component={HomeScreen}
//         options={{
//           tabBarIcon: ({ focused }) => <TabItem icon="search-outline" label="Search" focused={focused} />,
//         }}
//       />
//       <Tab.Screen
//         name="Add"
//         component={HomeScreen}
//         options={{
//           tabBarIcon: () => (
//             <View style={styles.plusButton}>
//               <Ionicons name="add" size={40} color={Colors.primary} />
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
//         name="My Ads"
//         component={HomeScreen}
//         options={{
//           tabBarIcon: ({ focused }) => <TabItem icon="basket-outline" label="My Ads" focused={focused} />,
//         }}
//       />
//       <Tab.Screen
//         name="Profile"
//         component={HomeScreen}
//         options={{
//           tabBarIcon: ({ focused }) => <TabItem icon="person-outline" label="Profile" focused={focused} />,
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
//     height: 120, // ओवरऑल हाइट 100 से बढ़ाकर 120 कर दी
//     bottom: 0,
//   },
//   svgContainer: {
//     position: 'absolute',
//     bottom: 0,
//     zIndex: -1,
//   },
//   tabItemContainer: {
//     alignItems: 'center',
//     justifyContent: 'center',
//     top: 40, // हाइट बढ़ने की वजह से इसे नीचे शिफ्ट किया ताकि डार्क एरिया के बीच में रहे
//     width: width / 5,
//   },
//   tabLabel: {
//     fontSize: 11,
//     fontFamily: Fonts.medium,
//     marginTop: 4,
//     width: '100%',
//     textAlign: 'center',
//   },
//   plusButton: {
//     width: 72, // प्लस बटन को भी हल्का बड़ा किया
//     height: 72,
//     borderRadius: 36,
//     backgroundColor: Colors.secondary,
//     justifyContent: 'center',
//     alignItems: 'center',
//     top: 15, // नए कर्व के हिसाब से पोजीशन सेट की
//     elevation: 10,
//     shadowColor: '#000',
//     shadowOffset: { width: 0, height: 5 },
//     shadowOpacity: 0.3,
//     shadowRadius: 5,
//     borderWidth: 4,
//     borderColor: Colors.white,
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
// import { Colors } from '../theme/colors';
// import { Fonts } from '../theme/fonts';

// // Screens
// import HomeScreen from '../screens/homescreens/HomeScreen';

// const Tab = createBottomTabNavigator();
// const { width } = Dimensions.get('window');

// // --- 1. Custom "Mountain Peak with Dip" SVG ---
// const TabBg = () => {
//   // यह पाथ कोनों से उठता है (Peak) और फिर बीच में एक गहरा गहरा (Dip) बनाता है
//   const d = `
//     M0,45 
//     Q${width * 0.15},40 ${width * 0.3},20 
//     T${width * 0.42},20
//     C${width * 0.44},20 ${width * 0.45},70 ${width * 0.5},70 
//     C${width * 0.55},70 ${width * 0.56},20 ${width * 0.58},20 
//     T${width * 0.7},20 
//     Q${width * 0.85},40 ${width},45 
//     V120 H0 Z
//   `;

//   return (
//     <View style={styles.svgContainer}>
//       <Svg width={width} height={120} viewBox={`0 0 ${width} 120`}>
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
//         size={24} 
//         color={focused ? Colors.secondary : '#A0A0A0'} 
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
//   return (
//     <Tab.Navigator
//       screenOptions={{
//         headerShown: false,
//         tabBarShowLabel: false,
//         tabBarStyle: styles.tabBar,
//         tabBarBackground: () => <TabBg />,
//       }}
//     >
//       <Tab.Screen
//         name="Home"
//         component={HomeScreen}
//         options={{
//           tabBarIcon: ({ focused }) => <TabItem icon="home" label="Home" focused={focused} />,
//         }}
//       />
//       <Tab.Screen
//         name="Search"
//         component={HomeScreen}
//         options={{
//           tabBarIcon: ({ focused }) => <TabItem icon="search" label="Search" focused={focused} />,
//         }}
//       />
//       <Tab.Screen
//         name="Add"
//         component={HomeScreen}
//         options={{
//           tabBarIcon: () => (
//             <View style={styles.plusButton}>
//               <Ionicons name="add" size={42} color={Colors.primary} />
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
//         name="My Ads"
//         component={HomeScreen}
//         options={{
//           tabBarIcon: ({ focused }) => <TabItem icon="basket" label="My Ads" focused={focused} />,
//         }}
//       />
//       <Tab.Screen
//         name="Profile"
//         component={HomeScreen}
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
//     height: 100,
//     bottom: 0,
//   },
//   svgContainer: {
//     position: 'absolute',
//     bottom: 0,
//     zIndex: -1,
//   },
//   tabItemContainer: {
//     alignItems: 'center',
//     justifyContent: 'center',
//     top: 35, // आइकन्स को डार्क ब्लू एरिया के अंदर सही जगह रखने के लिए
//     width: width / 5,
//   },
//   tabLabel: {
//     fontSize: 11,
//     fontFamily: Fonts.medium,
//     marginTop: 4,
//   },
//   plusButton: {
//     width: 65,
//     height: 65,
//     borderRadius: 33,
//     backgroundColor: Colors.secondary,
//     justifyContent: 'center',
//     alignItems: 'center',
//     top: 10, // प्लस बटन को उस गहरे "U" गड्ढे के अंदर बिठाने के लिए
//     elevation: 8,
//     shadowColor: '#000',
//     shadowOffset: { width: 0, height: 4 },
//     shadowOpacity: 0.3,
//     shadowRadius: 4,
//     // बटन के चारों तरफ हल्का सा ग्लो देने के लिए (Figma की तरह)
//     borderWidth: 2,
//     borderColor: 'rgba(255,255,255,0.2)', 
//   },
//   centerSpace: {
//     justifyContent: 'center',
//     alignItems: 'center',
//     width: width * 0.2,
//   }
// });













// ye thik hai 

// import React from 'react';
// import { View, TouchableOpacity, StyleSheet, Dimensions, Text } from 'react-native';
// import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
// import Svg, { Path } from 'react-native-svg';
// import Ionicons from "@react-native-vector-icons/ionicons";
// import { Colors } from '../theme/colors';
// import { Fonts } from '../theme/fonts';

// // Screens
// import HomeScreen from '../screens/homescreens/HomeScreen';

// const Tab = createBottomTabNavigator();
// const { width } = Dimensions.get('window');

// // --- 1. Custom SVG Shape (Straight Lines with Center Dip) ---
// const TabBg = () => {
//   // L का मतलब है Straight Line. कोनों से सीधी लाइन ऊपर जाएगी, फिर बीच में U कर्व।
//   const d = `
//     M0,45 
//     L${width * 0.35}, 20 
//     C${width * 0.42}, 20 ${width * 0.43}, 75 ${width * 0.5}, 75 
//     C${width * 0.57}, 75 ${width * 0.58}, 20 ${width * 0.65}, 20 
//     L${width}, 45 
//     V120 H0 Z
//   `;

//   return (
//     <View style={styles.svgContainer}>
//       <Svg width={width} height={120} viewBox={`0 0 ${width} 120`}>
//         <Path fill={Colors.primary} d={d} />
//       </Svg>
//     </View>
//   );
// };

// // --- 2. Optimized Tab Item Component ---
// const TabItem = ({ icon, label, focused }: any) => (
//   <View style={styles.tabItemContainer}>
//     <Ionicons 
//         name={icon} 
//         size={24} 
//         color={focused ? Colors.secondary : '#A0A0A0'} 
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
//   return (
//     <Tab.Navigator
//       screenOptions={{
//         headerShown: false,
//         tabBarShowLabel: false,
//         tabBarStyle: styles.tabBar,
//         tabBarBackground: () => <TabBg />,
//       }}
//     >
//       <Tab.Screen
//         name="Home"
//         component={HomeScreen}
//         options={{
//           tabBarIcon: ({ focused }) => <TabItem icon="home" label="Home" focused={focused} />,
//         }}
//       />
//       <Tab.Screen
//         name="Search"
//         component={HomeScreen}
//         options={{
//           tabBarIcon: ({ focused }) => <TabItem icon="search" label="Search" focused={focused} />,
//         }}
//       />
//       <Tab.Screen
//         name="Add"
//         component={HomeScreen}
//         options={{
//           tabBarIcon: () => (
//             <View style={styles.plusButton}>
//               <Ionicons name="add" size={42} color={Colors.primary} />
//             </View>
//           ),
//           tabBarButton: (props: any) => {
//             const { delayLongPress, ...rest } = props;
//             return (
//               <TouchableOpacity {...rest} activeOpacity={0.9} style={styles.centerSpace} />
//             );
//           }
//         }}
//       />
//       <Tab.Screen
//         name="My Ads"
//         component={HomeScreen}
//         options={{
//           tabBarIcon: ({ focused }) => <TabItem icon="basket" label="My Ads" focused={focused} />,
//         }}
//       />
//       <Tab.Screen
//         name="Profile"
//         component={HomeScreen}
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
//     height: 110,
//     bottom: 0,
//   },
//   svgContainer: {
//     position: 'absolute',
//     bottom: 0,
//     zIndex: -1,
//   },
//   tabItemContainer: {
//     alignItems: 'center',
//     justifyContent: 'center',
//     top: 45, // आइकन्स को डार्क हिस्से में बिल्कुल सही बिठाने के लिए
//     width: width / 5,
//   },
//   tabLabel: {
//     fontSize: 11,
//     fontFamily: Fonts.medium,
//     marginTop: 4,
//     textAlign: 'center',
//   },
//   plusButton: {
//     width: 68,
//     height: 68,
//     borderRadius: 34,
//     backgroundColor: Colors.secondary,
//     justifyContent: 'center',
//     alignItems: 'center',
//     top: 15, // प्लस बटन को उस गहरे कर्व के बीच में बिठाने के लिए
//     elevation: 10,
//     shadowColor: '#000',
//     shadowOffset: { width: 0, height: 5 },
//     shadowOpacity: 0.3,
//     shadowRadius: 5,
//     borderWidth: 3,
//     borderColor: Colors.white,
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
// import { Colors } from '../theme/colors';
// import { Fonts } from '../theme/fonts';

// // Screens
// import HomeScreen from '../screens/homescreens/HomeScreen';

// const Tab = createBottomTabNavigator();
// const { width } = Dimensions.get('window');

// // --- 1. Custom SVG Shape (Straight Lines with Center Dip) ---
// const TabBg = () => {
//   // L का मतलब है Straight Line. कोनों से सीधी लाइन ऊपर जाएगी, फिर बीच में U कर्व।
//   const d = `
//     M0,45 
//     L${width * 0.35}, 20 
//     C${width * 0.42}, 20 ${width * 0.43}, 75 ${width * 0.5}, 75 
//     C${width * 0.57}, 75 ${width * 0.58}, 20 ${width * 0.65}, 20 
//     L${width}, 45 
//     V120 H0 Z
//   `;

//   return (
//     <View style={styles.svgContainer}>
//       <Svg width={width} height={120} viewBox={`0 0 ${width} 120`}>
//         <Path fill={Colors.primary} d={d} />
//       </Svg>
//     </View>
//   );
// };

// // --- 2. Optimized Tab Item Component ---
// const TabItem = ({ icon, label, focused }: any) => (
//   <View style={styles.tabItemContainer}>
//     <Ionicons 
//         name={icon} 
//         size={24} 
//         color={focused ? Colors.secondary : '#A0A0A0'} 
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
//   return (
//     <Tab.Navigator
//       screenOptions={{
//         headerShown: false,
//         tabBarShowLabel: false,
//         tabBarStyle: styles.tabBar,
//         tabBarBackground: () => <TabBg />,
//       }}
//     >
//       <Tab.Screen
//         name="Home"
//         component={HomeScreen}
//         options={{
//           tabBarIcon: ({ focused }) => <TabItem icon="home" label="Home" focused={focused} />,
//         }}
//       />
//       <Tab.Screen
//         name="Search"
//         component={HomeScreen}
//         options={{
//           tabBarIcon: ({ focused }) => <TabItem icon="search" label="Search" focused={focused} />,
//         }}
//       />
//       <Tab.Screen
//         name="Add"
//         component={HomeScreen}
//         options={{
//           tabBarIcon: () => (
//             <View style={styles.plusButton}>
//               <Ionicons name="add-sharp" size={50} color={Colors.black} />
//             </View>
//           ),
//           tabBarButton: (props: any) => {
//             const { delayLongPress, ...rest } = props;
//             return (
//               <TouchableOpacity {...rest} activeOpacity={0.9} style={styles.centerSpace} />
//             );
//           }
//         }}
//       />
//       <Tab.Screen
//         name="My Ads"
//         component={HomeScreen}
//         options={{
//           tabBarIcon: ({ focused }) => <TabItem icon="basket" label="My Ads" focused={focused} />,
//         }}
//       />
//       <Tab.Screen
//         name="Profile"
//         component={HomeScreen}
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
//     height: 110,
//     bottom: 0,
//   },
//   svgContainer: {
//     position: 'absolute',
//     bottom: 0,
//     zIndex: -1,
//   },
//   tabItemContainer: {
//     alignItems: 'center',
//     justifyContent: 'center',
//     top: 45,
//     width: width / 5,
//   },
//   tabLabel: {
//     fontSize: 11,
//     fontFamily: Fonts.medium,
//     marginTop: 4,
//     textAlign: 'center',
//   },
//   plusButton: {
//     width: 60,
//     height: 60,
//     borderRadius: 35, // Perfect circular shape
//     backgroundColor: Colors.secondary,
//     justifyContent: 'center',
//     alignItems: 'center',
//     top: 15,
//     elevation: 10,
//     shadowColor: '#000',
//     shadowOffset: { width: 0, height: 5 },
//     shadowOpacity: 0.3,
//     shadowRadius: 5,
//     borderWidth: 0, // Removed border for cleaner look
//   },
//   centerSpace: {
//     justifyContent: 'center',
//     alignItems: 'center',
//     width: width * 0.2,
//   }
// });













// ye bhi thik hai 

// import React from 'react';
// import { View, TouchableOpacity, StyleSheet, Dimensions, Text } from 'react-native';
// import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
// import Svg, { Path } from 'react-native-svg';
// import Ionicons from "@react-native-vector-icons/ionicons";
// import { Colors } from '../theme/colors';
// import { Fonts } from '../theme/fonts';

// // Screens
// import HomeScreen from '../screens/homescreens/HomeScreen';

// const Tab = createBottomTabNavigator();
// const { width } = Dimensions.get('window');

// // --- 1. Figma Exact "Straight Slope" SVG Shape ---
// const TabBg = () => {
//   // यह पाथ बिल्कुल फिग्मा जैसा है: सीधी लाइन ऊपर जाती है, फिर गहरा 'U' कट, फिर सीधी लाइन नीचे।
//   const d = `
//     M0,45 
//     L${width * 0.36},15 
//     C${width * 0.43},15 ${width * 0.43},75 ${width * 0.5},75 
//     C${width * 0.57},75 ${width * 0.57},15 ${width * 0.64},15 
//     L${width},45 
//     V120 H0 Z
//   `;

//   return (
//     <View style={styles.svgContainer}>
//       <Svg width={width} height={120} viewBox={`0 0 ${width} 120`}>
//         <Path fill={Colors.primary} d={d} />
//       </Svg>
//     </View>
//   );
// };

// // --- 2. Optimized Tab Item Component ---
// const TabItem = ({ icon, label, focused }: any) => (
//   <View style={styles.tabItemContainer}>
//     <Ionicons 
//         name={icon} 
//         size={24} 
//         color={focused ? Colors.secondary : '#A0A0A0'} 
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
//   return (
//     <Tab.Navigator
//       screenOptions={{
//         headerShown: false,
//         tabBarShowLabel: false,
//         tabBarStyle: styles.tabBar,
//         tabBarBackground: () => <TabBg />,
//       }}
//     >
//       <Tab.Screen
//         name="Home"
//         component={HomeScreen}
//         options={{
//           tabBarIcon: ({ focused }) => <TabItem icon="home" label="Home" focused={focused} />,
//         }}
//       />
//       <Tab.Screen
//         name="Search"
//         component={HomeScreen}
//         options={{
//           tabBarIcon: ({ focused }) => <TabItem icon="search" label="Search" focused={focused} />,
//         }}
//       />
//       <Tab.Screen
//         name="Add"
//         component={HomeScreen}
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
//         name="My Ads"
//         component={HomeScreen}
//         options={{
//           tabBarIcon: ({ focused }) => <TabItem icon="basket" label="My Ads" focused={focused} />,
//         }}
//       />
//       <Tab.Screen
//         name="Profile"
//         component={HomeScreen}
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
//     height: 100,
//     bottom: 0,
//   },
//   svgContainer: {
//     position: 'absolute',
//     bottom: 0,
//     zIndex: -1,
//   },
//   tabItemContainer: {
//     alignItems: 'center',
//     justifyContent: 'center',
//     top: 38, // फिग्मा के हिसाब से डार्क एरिया के बीच में
//     width: width / 5,
//   },
//   tabLabel: {
//     fontSize: 11,
//     fontFamily: Fonts.bold,
//     marginTop: 4,
//   },
//   plusButton: {
//     width: 68,
//     height: 68,
//     borderRadius: 34, // Perfect Round Circle
//     backgroundColor: Colors.secondary,
//     justifyContent: 'center',
//     alignItems: 'center',
//     top: 15, // बिल्कुल उस गहरे 'U' गड्ढे के बीच में
//     elevation: 10,
//     shadowColor: '#000',
//     shadowOffset: { width: 0, height: 5 },
//     shadowOpacity: 0.3,
//     shadowRadius: 5,
//     borderWidth: 3,
//     borderColor: Colors.white,
//   },
//   plusSign: {
//     fontSize: 42,
//     color: Colors.primary,
//     fontFamily: Fonts.bold,
//     fontWeight: 'bold',
//     marginTop: -5, // वर्टिकल सेंटर के लिए
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
// const TabBg = () => {
//   // हाइट कम करने के लिए पॉइंट्स को छोटा किया गया है
//   const d = `
//     M0,30 
//     L${width * 0.36},8 
//     C${width * 0.43},8 ${width * 0.43},55 ${width * 0.5},55 
//     C${width * 0.57},55 ${width * 0.57},8 ${width * 0.64},8 
//     L${width},30 
//     V100 H0 Z
//   `;

//   return (
//     <View style={styles.svgContainer}>
//       <Svg width={width} height={100} viewBox={`0 0 ${width} 100`}>
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
//   return (
//     <Tab.Navigator
//       screenOptions={{
//         headerShown: false,
//         tabBarShowLabel: false,
//         tabBarStyle: styles.tabBar,
//         tabBarBackground: () => <TabBg />,
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
//     height: 86, // ऊँचाई 85 से घटाकर 75 कर दी (Figma के करीब)
//     bottom: 0,
//   },
//   svgContainer: {
//     position: 'absolute',
//     bottom: 0,
//     zIndex: -1,
//   },
//   tabItemContainer: {
//     alignItems: 'center',
//     justifyContent: 'center',
//     top: 22, // कम ऊँचाई के हिसाब से अलाइनमेंट सेट किया ताकि टेक्स्ट ऊपर न चढ़े
//     width: width / 5,
//   },
//   tabLabel: {
//     fontSize: 10,
//     fontFamily: Fonts.bold,
//     marginTop: 2,
//   },
//   plusButton: {
//     width: 70, // बटन साइज भी हल्का सा छोटा (64 से 60) किया ताकि बैलेंस रहे
//     height: 70,
//     borderRadius: 35,
//     backgroundColor: Colors.secondary,
//     justifyContent: 'center',
//     alignItems: 'center',
//     // top: 8, // प्लस बटन को नए 'U' कट के सेंटर में बिठाने के लिए
//     elevation: 8,
//     shadowColor: '#352e4a',
//     shadowOffset: { width: 0, height: 4 },
//     shadowOpacity: 0.2,
//     shadowRadius: 4,
//     borderWidth: 4,
//     borderColor: Colors.white,
    
//   },
//   plusSign: {
//     fontSize: 48, // प्लस का साइज भी हल्का कम किया
//     color: Colors.primary,
//     fontFamily: Fonts.bold,
//     fontWeight: 'bold',
//     marginTop: -8,
//   },
//   centerSpace: {
//     justifyContent: 'center',
//     alignItems: 'center',
//     width: width * 0.2,
//   }
// });




















import React from 'react';
import { View, TouchableOpacity, StyleSheet, Dimensions, Text, Platform } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Svg, { Path } from 'react-native-svg';
import Ionicons from "@react-native-vector-icons/ionicons";
import { useSafeAreaInsets } from 'react-native-safe-area-context'; // <-- ज़रूरी हुक
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

// --- 1. Sleek Figma-Exact SVG Path ---
// यहाँ हमने इनसेट (bottom) लिया है ताकि बैकग्राउंड की हाइट बढ़ सके
const TabBg = ({ bottomInset }: { bottomInset: number }) => {
  const height = 80 + bottomInset; // डायनामिक हाइट
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
const TabItem = ({ icon, label, focused }: any) => (
  <View style={styles.tabItemContainer}>
    <Ionicons 
        name={icon} 
        size={23} 
        color={focused ? Colors.secondary : '#aaa8a8'} 
    />
    <Text 
        style={[styles.tabLabel, { color: focused ? Colors.secondary : '#A0A0A0' }]}
        numberOfLines={1}
    >
      {label}
    </Text>
  </View>
);

const BottomNavigator = () => {
  const insets = useSafeAreaInsets(); // नीचे के बटन्स की हाइट देता है

  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
        tabBarStyle: [
            styles.tabBar, 
            { 
                height: 56 + insets.bottom, // सिस्टम बार के हिसाब से हाइट बढ़ेगी
                paddingBottom: insets.bottom > 0 ? insets.bottom - 10 : 0 // बटन्स से थोड़ा ऊपर रखने के लिए
            }
        ],
        tabBarBackground: () => <TabBg bottomInset={insets.bottom} />,
      }}
    >
      <Tab.Screen
        name="HomeScreen"
        component={HomeScreen}
        options={{
          tabBarIcon: ({ focused }) => <TabItem icon="home" label="Home" focused={focused} />,
        }}
      />
      <Tab.Screen
        name="SearchScreen"
        component={SearchScreen}
        options={{
          tabBarIcon: ({ focused }) => <TabItem icon="search" label="Search" focused={focused} />,
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
            return (
              <TouchableOpacity {...rest} activeOpacity={0.9} style={styles.centerSpace} />
            );
          }
        }}
      />
      <Tab.Screen
        name="MyAddScreen"
        component={MyAddScreen}
        options={{
          tabBarIcon: ({ focused }) => <TabItem icon="basket" label="My Ads" focused={focused} />,
        }}
      />
      <Tab.Screen
        name="ProfileScreen"
        component={ProfileScreen}
        options={{
          tabBarIcon: ({ focused }) => <TabItem icon="person" label="Profile" focused={focused} />,
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
  svgContainer: {
    position: 'absolute',
    bottom: 0,
    zIndex: -1,
  },
  tabItemContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    top: 15, // इसको थोड़ा कम किया ताकि रिस्पॉन्सिव रहे
    width: width / 5,
  },
  tabLabel: {
    fontSize: 10,
    fontFamily: Fonts.bold,
    marginTop: 2,
  },
  plusButton: {
    width: 68,
    height: 68,
    borderRadius: 34,
    backgroundColor: Colors.secondary,
    justifyContent: 'center',
    alignItems: 'center',
    top: -5, // प्लस बटन को थोड़ा ऊपर किया ताकि कर्व में सही बैठे
    elevation: 8,
    shadowColor: Colors.primary,
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 5,
    borderWidth: 4,
    borderColor: Colors.white,
  },
  plusSign: {
    fontSize: 42,
    color: Colors.primary,
    fontFamily: Fonts.bold,
    fontWeight: 'bold',
    marginTop: -5,
  },
  centerSpace: {
    justifyContent: 'center',
    alignItems: 'center',
    width: width * 0.2,
  }
});