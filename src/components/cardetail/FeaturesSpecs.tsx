// import React, { useState } from 'react';
// import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
// import { Colors } from '../../theme/colors';
// import { Fonts } from '../../theme/fonts';

// const FeaturesSpecs = () => {
//   const [activeTab, setActiveTab] = useState('Features');

//   const specs = [
//     { label: 'Displacement (cc)', value: '1368' },
//     { label: 'Cylinders', value: '4' },
//     { label: 'Max Power (bhp)', value: '100' },
//     { label: 'Seating Capacity', value: '5' },
//   ];

//   return (
//     <View style={styles.container}>
//       <Text style={styles.title}>Features and specifications</Text>
      
//       <View style={styles.tabBar}>
//         <TouchableOpacity style={[styles.tab, activeTab === 'Features' && styles.activeTab]} onPress={() => setActiveTab('Features')}>
//           <Text style={[styles.tabText, activeTab === 'Features' && styles.activeTabText]}>Features</Text>
//         </TouchableOpacity>
//         <TouchableOpacity style={[styles.tab, activeTab === 'Specs' && styles.activeTab]} onPress={() => setActiveTab('Specs')}>
//           <Text style={[styles.tabText, activeTab === 'Specs' && styles.activeTabText]}>Specifications</Text>
//         </TouchableOpacity>
//       </View>

//       <View style={styles.content}>
//         {activeTab === 'Specs' ? (
//           <View style={styles.grid}>
//             {specs.map((item, index) => (
//               <View key={index} style={styles.gridItem}>
//                 <Text style={styles.label}>{item.label}</Text>
//                 <Text style={styles.value}>{item.value}</Text>
//               </View>
//             ))}
//           </View>
//         ) : (
//           <Text style={styles.bodyText}>ABS, Airbags, Cruise Control, etc.</Text>
//         )}
//       </View>

//       <TouchableOpacity style={styles.viewAll}>
//         <Text style={styles.viewAllText}>View all features and specs</Text>
//       </TouchableOpacity>
//     </View>
//   );
// };

// export default FeaturesSpecs;

// const styles = StyleSheet.create({
//   container: { backgroundColor: 'white', padding: 20, marginTop: 10 },
//   title: { fontFamily: Fonts.bold, fontSize: 18, color: 'black', marginBottom: 15 },
//   tabBar: { flexDirection: 'row', borderBottomWidth: 1, borderBottomColor: '#eee' },
//   tab: { paddingVertical: 10, marginRight: 30 },
//   activeTab: { borderBottomWidth: 2, borderBottomColor: Colors.primary },
//   tabText: { fontSize: 14, color: 'gray', fontFamily: Fonts.medium },
//   activeTabText: { color: Colors.primary, fontFamily: Fonts.bold },
//   content: { marginTop: 20 },
//   grid: { flexDirection: 'row', flexWrap: 'wrap' },
//   gridItem: { width: '50%', marginBottom: 15 },
//   label: { fontSize: 12, color: 'gray', fontFamily: Fonts.regular },
//   value: { fontSize: 15, color: 'black', fontFamily: Fonts.bold, marginTop: 2 },
//   bodyText: { fontSize: 14, color: 'black' },
//   viewAll: { marginTop: 10, backgroundColor: '#FFF7ED', padding: 12, borderRadius: 8, alignItems: 'center' },
//   viewAllText: { color: Colors.secondary, fontFamily: Fonts.bold },
// });















// import React, { useState } from 'react';
// import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
// import Ionicons from "@react-native-vector-icons/ionicons";
// import { Colors } from '../../theme/colors';
// import { Fonts } from '../../theme/fonts';
// // --- डेटा यहाँ इम्पोर्ट किया गया है ---
// import { SPECIFICATIONS_DATA, FEATURES_LIST } from '../../dummydata/dummyData';

// const FeaturesSpecs = () => {
//   const [activeTab, setActiveTab] = useState('Features');

//   return (
//     <View style={styles.container}>
//       <Text style={styles.title}>Features and specifications</Text>
      
//       {/* --- Tab Bar --- */}
//       <View style={styles.tabBar}>
//         <TouchableOpacity 
//           style={[styles.tab, activeTab === 'Features' && styles.activeTab]} 
//           onPress={() => setActiveTab('Features')}
//         >
//           <Text style={[styles.tabText, activeTab === 'Features' && styles.activeTabText]}>Features</Text>
//         </TouchableOpacity>

//         <TouchableOpacity 
//           style={[styles.tab, activeTab === 'Specs' && styles.activeTab]} 
//           onPress={() => setActiveTab('Specs')}
//         >
//           <Text style={[styles.tabText, activeTab === 'Specs' && styles.activeTabText]}>Specifications</Text>
//         </TouchableOpacity>
//       </View>

//       {/* --- Content Area --- */}
//       <View style={styles.content}>
//         {activeTab === 'Specs' ? (
//           // Specifications Grid (2 Columns)
//           <View style={styles.specGrid}>
//             {SPECIFICATIONS_DATA.map((item, index) => (
//               <View key={index} style={styles.specItem}>
//                 <Text style={styles.specLabel}>{item.label}</Text>
//                 <Text style={styles.specValue}>{item.value}</Text>
//               </View>
//             ))}
//           </View>
//         ) : (
//           // Features List (Vertical - One below the other)
//           <View style={styles.featuresList}>
//             {FEATURES_LIST.map((item) => (
//               <View key={item.id} style={styles.featureItem}>
//                 <View style={styles.iconCircle}>
//                   <Ionicons name={item.icon as any} size={20} color="black" />
//                 </View>
//                 <Text style={styles.featureLabel}>{item.label}</Text>
//               </View>
//             ))}
//           </View>
//         )}
//       </View>

//       {/* --- Bottom Button --- */}
//       <TouchableOpacity style={styles.viewAllBtn}>
//         <Text style={styles.viewAllText}>View all features and specs</Text>
//       </TouchableOpacity>
//     </View>
//   );
// };

// export default FeaturesSpecs;

// const styles = StyleSheet.create({
//   container: { 
//     backgroundColor: 'white', 
//     padding: 20, 
//     marginTop: 12, 
//     marginHorizontal: 15, 
//     borderRadius: 15,
//     elevation: 2,
//     shadowColor: '#000',
//     shadowOpacity: 0.05,
//     shadowRadius: 5
//   },
//   title: { 
//     fontFamily: Fonts.bold, 
//     fontSize: 18, 
//     color: 'black', 
//     marginBottom: 20 
//   },
//   tabBar: { 
//     flexDirection: 'row', 
//     borderBottomWidth: 1, 
//     borderBottomColor: '#f3f4f6' 
//   },
//   tab: { 
//     paddingVertical: 12, 
//     marginRight: 35,
//     borderBottomWidth: 2,
//     borderBottomColor: 'transparent'
//   },
//   activeTab: { 
//     borderBottomColor: Colors.primary 
//   },
//   tabText: { 
//     fontSize: 14, 
//     color: '#9CA3AF', 
//     fontFamily: Fonts.medium 
//   },
//   activeTabText: { 
//     color: Colors.primary, 
//     fontFamily: Fonts.bold 
//   },
//   content: { 
//     marginTop: 25 
//   },

//   // Specifications Grid Styles
//   specGrid: { 
//     flexDirection: 'row', 
//     flexWrap: 'wrap' 
//   },
//   specItem: { 
//     width: '50%', 
//     marginBottom: 20 
//   },
//   specLabel: { 
//     fontSize: 12, 
//     color: '#6B7280', 
//     fontFamily: Fonts.regular 
//   },
//   specValue: { 
//     fontSize: 15, 
//     color: 'black', 
//     fontFamily: Fonts.bold, 
//     marginTop: 4 
//   },

//   // Features List Styles (Vertical)
//   featuresList: {
//     paddingLeft: 5,
//   },
//   featureItem: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     marginBottom: 18,
//   },
//   iconCircle: {
//     width: 36,
//     height: 36,
//     borderRadius: 18,
//     backgroundColor: '#F3F4F6',
//     justifyContent: 'center',
//     alignItems: 'center',
//     marginRight: 15,
//   },
//   featureLabel: {
//     fontSize: 14,
//     color: 'black',
//     fontFamily: Fonts.medium,
//   },

//   viewAllBtn: { 
//     marginTop: 10, 
//     backgroundColor: '#FFF7ED', 
//     padding: 15, 
//     borderRadius: 10, 
//     alignItems: 'center',
//     borderWidth: 1,
//     borderColor: '#FFEDD5'
//   },
//   viewAllText: { 
//     color: '#EA580C', 
//     fontFamily: Fonts.bold,
//     fontSize: 14
//   },
// });















// api ke bad wal 

import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import Ionicons from "@react-native-vector-icons/ionicons";
import { Colors } from '../../theme/colors';
import { Fonts } from '../../theme/fonts';

// --- TypeScript Interface ---
interface FeaturesSpecsProps {
  specs?: {
    displacement?: string | number;
    cylinders?: string | number;
    maxPower?: string;
    seatingCapacity?: string | number;
    groundClearance?: string;
    bootSpace?: string;
  };
  features?: {
    airbags?: boolean;
    abs?: boolean;
    ebd?: boolean;
    ac?: boolean;
    isofix?: boolean;
  };
}

const FeaturesSpecs = ({ specs, features }: FeaturesSpecsProps) => {
  const [activeTab, setActiveTab] = useState('Features');

  // API डेटा को लिस्ट में मैप करना
  const specsList = [
    { label: 'Displacement (cc)', value: specs?.displacement },
    { label: 'Cylinders', value: specs?.cylinders },
    { label: 'Max Power (bhp)', value: specs?.maxPower },
    { label: 'Seating Capacity', value: specs?.seatingCapacity },
    { label: 'Ground Clearance (mm)', value: specs?.groundClearance },
    { label: 'Bootspace (litres)', value: specs?.bootSpace },
  ];

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Features and specifications</Text>
      
      <View style={styles.tabBar}>
        <TouchableOpacity 
          style={[styles.tab, activeTab === 'Features' && styles.activeTab]} 
          onPress={() => setActiveTab('Features')}
        >
          <Text style={[styles.tabText, activeTab === 'Features' && styles.activeTabText]}>Features</Text>
        </TouchableOpacity>

        <TouchableOpacity 
          style={[styles.tab, activeTab === 'Specs' && styles.activeTab]} 
          onPress={() => setActiveTab('Specs')}
        >
          <Text style={[styles.tabText, activeTab === 'Specs' && styles.activeTabText]}>Specifications</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.content}>
        {activeTab === 'Specs' ? (
          <View style={styles.specGrid}>
            {specsList.map((item, index) => (
              <View key={index} style={styles.specItem}>
                <Text style={styles.specLabel}>{item.label}</Text>
                <Text style={styles.specValue}>{item.value || "N/A"}</Text>
              </View>
            ))}
          </View>
        ) : (
          <View style={styles.featuresList}>
            {/* API के boolean वैल्यू के हिसाब से फीचर्स दिखाएँ */}
            {features?.airbags && <FeatureItem icon="shield-checkmark-outline" text="Airbags" />}
            {features?.abs && <FeatureItem icon="disc-outline" text="ABS - Anti-lock Braking System" />}
            {features?.ebd && <FeatureItem icon="git-branch-outline" text="EBD - Electronic Brakeforce Distribution" />}
            {features?.ac && <FeatureItem icon="snow-outline" text="Air Conditioner" />}
            {features?.isofix && <FeatureItem icon="people-outline" text="ISOFIX - Child Seat Anchor Points" />}
            
            {/* अगर कोई फीचर न हो */}
            {!features && <Text style={{color: 'gray'}}>No features listed</Text>}
          </View>
        )}
      </View>

      {/* <TouchableOpacity style={styles.viewAllBtn}>
        <Text style={styles.viewAllText}>View all features and specs</Text>
      </TouchableOpacity> */}
    </View>
  );
};

const FeatureItem = ({ icon, text }: any) => (
    <View style={styles.featureItem}>
      <View style={styles.iconCircle}>
        <Ionicons name={icon} size={20} color="black" />
      </View>
      <Text style={styles.featureLabel}>{text}</Text>
    </View>
);

export default FeaturesSpecs;

const styles = StyleSheet.create({
  container: { backgroundColor: 'white', padding: 20, marginTop: 12, marginHorizontal: 15, borderRadius: 15, elevation: 2, shadowColor: '#000', shadowOpacity: 0.05, shadowRadius: 5 },
  title: { fontFamily: Fonts.bold, fontSize: 18, color: 'black', marginBottom: 20 },
  tabBar: { flexDirection: 'row', borderBottomWidth: 1, borderBottomColor: '#f3f4f6' },
  tab: { paddingVertical: 12, marginRight: 35, borderBottomWidth: 2, borderBottomColor: 'transparent' },
  activeTab: { borderBottomColor: Colors.primary },
  tabText: { fontSize: 14, color: '#9CA3AF', fontFamily: Fonts.medium },
  activeTabText: { color: Colors.primary, fontFamily: Fonts.bold },
  content: { marginTop: 25 },
  specGrid: { flexDirection: 'row', flexWrap: 'wrap' },
  specItem: { width: '50%', marginBottom: 20 },
  specLabel: { fontSize: 12, color: '#6B7280', fontFamily: Fonts.regular },
  specValue: { fontSize: 15, color: 'black', fontFamily: Fonts.bold, marginTop: 4 },
  featuresList: { paddingLeft: 5 },
  featureItem: { flexDirection: 'row', alignItems: 'center', marginBottom: 18 },
  iconCircle: { width: 36, height: 36, borderRadius: 18, backgroundColor: '#F3F4F6', justifyContent: 'center', alignItems: 'center', marginRight: 15 },
  featureLabel: { fontSize: 14, color: 'black', fontFamily: Fonts.medium },
  viewAllBtn: { marginTop: 10, backgroundColor: '#FFF7ED', padding: 15, borderRadius: 10, alignItems: 'center', borderWidth: 1, borderColor: '#FFEDD5' },
  viewAllText: { color: '#EA580C', fontFamily: Fonts.bold, fontSize: 14 },
});