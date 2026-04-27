// import React, { useState } from 'react';
// import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
// import Ionicons from "@react-native-vector-icons/ionicons";
// import { Colors } from '../../theme/colors';
// import { Fonts } from '../../theme/fonts';

// const InspectionReport = () => {
//   const [expanded, setExpanded] = useState<string | null>('perfect');

//   const Section = ({ id, title, icon, color, children }: any) => (
//     <View style={styles.sectionWrapper}>
//       <TouchableOpacity 
//         style={styles.sectionHeader} 
//         onPress={() => setExpanded(expanded === id ? null : id)}
//       >
//         <View style={styles.row}>
//           <Ionicons name={icon} size={20} color={color} />
//           <Text style={styles.sectionTitle}>{title}</Text>
//         </View>
//         <Ionicons name={expanded === id ? "chevron-up" : "chevron-down"} size={20} color="gray" />
//       </TouchableOpacity>
//       {expanded === id && <View style={styles.sectionBody}>{children}</View>}
//     </View>
//   );

//   return (
//     <View style={styles.container}>
//       <Text style={styles.mainTitle}>Car inspection report</Text>
      
//       {/* Trust Badges */}
//       <View style={styles.badgeRow}>
//         <Badge icon="shield-checkmark" text="No accident history" />
//         <Badge icon="speedometer" text="No odometer tampering" />
//       </View>

//       <View style={styles.greenNote}>
//          <Ionicons name="checkmark-circle" size={16} color="#22C55E" />
//          <Text style={styles.greenText}> This car has no repainted parts. Nice!</Text>
//       </View>

//       <Section id="perfect" title="Perfect parts" icon="sparkles" color="#22C55E">
//         <Text style={styles.bodyText}>• Engine & Transmission</Text>
//         <Text style={styles.bodyText}>• Air-Conditioning</Text>
//         <Text style={styles.bodyText}>• Electricals & Interior</Text>
//       </Section>

//       <Section id="tyre" title="Tyre life remaining" icon="speedometer-outline" color="black">
//         <Text style={styles.bodyText}>All tyres have more than 50% life remaining.</Text>
//       </Section>

//       <TouchableOpacity style={styles.reportBtn}>
//          <Text style={styles.reportBtnText}>View full report</Text>
//       </TouchableOpacity>
//     </View>
//   );
// };

// const Badge = ({ icon, text }: any) => (
//     <View style={styles.badgeItem}>
//         <Ionicons name={icon} size={24} color="black" />
//         <Text style={styles.badgeText}>{text}</Text>
//     </View>
// )

// export default InspectionReport;

// const styles = StyleSheet.create({
//   container: { backgroundColor: 'white', padding: 20, marginTop: 10 },
//   mainTitle: { fontFamily: Fonts.bold, fontSize: 18, color: 'black', marginBottom: 15 },
//   badgeRow: { flexDirection: 'row', justifyContent: 'space-between', marginBottom: 20 },
//   badgeItem: { alignItems: 'center', width: '45%' },
//   badgeText: { fontSize: 11, textAlign: 'center', marginTop: 5, color: 'gray' },
//   greenNote: { backgroundColor: '#F0FDF4', padding: 10, borderRadius: 8, flexDirection: 'row', alignItems: 'center', marginBottom: 15 },
//   greenText: { color: '#166534', fontSize: 12, fontFamily: Fonts.medium },
//   sectionWrapper: { borderBottomWidth: 1, borderBottomColor: '#f0f0f0' },
//   sectionHeader: { flexDirection: 'row', justifyContent: 'space-between', paddingVertical: 15, alignItems: 'center' },
//   row: { flexDirection: 'row', alignItems: 'center' },
//   sectionTitle: { marginLeft: 10, fontFamily: Fonts.semiBold, fontSize: 14, color: 'black' },
//   sectionBody: { paddingBottom: 15, paddingLeft: 30 },
//   bodyText: { fontSize: 13, color: '#4B5563', marginBottom: 5 },
//   reportBtn: { marginTop: 15, borderWidth: 1, borderColor: Colors.secondary, padding: 12, borderRadius: 8, alignItems: 'center' },
//   reportBtnText: { color: Colors.secondary, fontFamily: Fonts.bold },
// });















// import React, { useState } from 'react';
// import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
// import Ionicons from "@react-native-vector-icons/ionicons";
// import { Colors } from '../../theme/colors';
// import { Fonts } from '../../theme/fonts';

// const InspectionReport = () => {
//   const [activeSection, setActiveSection] = useState<string | null>(null);

//   const ReportRow = ({ id, title, icon, color }: any) => (
//     <TouchableOpacity 
//         style={styles.rowWrapper} 
//         onPress={() => setActiveSection(activeSection === id ? null : id)}
//     >
//       <View style={styles.rowLeft}>
//         <Ionicons name={icon} size={20} color={color} />
//         <Text style={styles.rowTitle}>{title}</Text>
//       </View>
//       <Ionicons name={activeSection === id ? "chevron-up" : "chevron-down"} size={20} color="gray" />
//     </TouchableOpacity>
//   );

//   return (
//     <View style={styles.container}>
//       <Text style={styles.mainTitle}>Car inspection report</Text>

//       {/* Trust Badges */}
//       <View style={styles.badgeRow}>
//         <View style={styles.badge}><Ionicons name="car-outline" size={28} color="black" /><Text style={styles.badgeText}>No accident{"\n"}history</Text></View>
//         <View style={styles.badge}><Ionicons name="speedometer-outline" size={28} color="black" /><Text style={styles.badgeText}>No odometer{"\n"}tampering</Text></View>
//         <View style={styles.badge}><Ionicons name="water-outline" size={28} color="black" /><Text style={styles.badgeText}>No water{"\n"}damages</Text></View>
//         <View style={styles.badge}><Ionicons name="checkmark-done-circle-outline" size={28} color="black" /><Text style={styles.badgeText}>300-quality{"\n"}checks</Text></View>
//       </View>

//       {/* Quality Banner */}
//       <View style={styles.qualityBanner}>
//          <Ionicons name="checkmark-circle" size={16} color="#22C55E" />
//          <Text style={styles.qualityText}> This car has no repainted parts. Nice!</Text>
//       </View>

//       {/* Accordion Rows */}
//       <ReportRow id="parts" title="Perfect parts" icon="sparkles" color="#22C55E" />
//       <ReportRow id="fixes" title="Fixes and repairs" icon="build-outline" color="#3B82F6" />
//       <ReportRow id="tyre" title="Tyre life remaining" icon="speedometer" color="black" />

//       {/* Cars24 Tag */}
//       <View style={styles.tagLine}>
//         <Ionicons name="shield-checkmark" size={14} color="#22C55E" />
//         <Text style={styles.tagText}> Just2Car inspected with 300+ quality checks</Text>
//       </View>

//       <TouchableOpacity style={styles.fullReportBtn}>
//         <Text style={styles.fullReportText}>View full report</Text>
//       </TouchableOpacity>
//     </View>
//   );
// };

// export default InspectionReport;

// const styles = StyleSheet.create({
//   container: { backgroundColor: 'white', padding: 20, marginTop: 12, marginHorizontal: 15, borderRadius: 15, elevation: 2 },
//   mainTitle: { fontFamily: Fonts.bold, fontSize: 18, color: 'black', marginBottom: 20 },
//   badgeRow: { flexDirection: 'row', justifyContent: 'space-between', marginBottom: 20 },
//   badge: { alignItems: 'center', width: '24%' },
//   badgeText: { fontSize: 10, textAlign: 'center', marginTop: 8, color: 'black', fontFamily: Fonts.medium },
//   qualityBanner: { backgroundColor: '#F0FDF4', padding: 10, borderRadius: 10, flexDirection: 'row', alignItems: 'center', marginBottom: 15 },
//   qualityText: { color: '#166534', fontSize: 12, fontFamily: Fonts.medium },
//   rowWrapper: { flexDirection: 'row', justifyContent: 'space-between', paddingVertical: 15, borderBottomWidth: 1, borderBottomColor: '#f3f4f6', alignItems: 'center' },
//   rowLeft: { flexDirection: 'row', alignItems: 'center' },
//   rowTitle: { marginLeft: 15, fontSize: 14, fontFamily: Fonts.medium, color: 'black' },
//   tagLine: { flexDirection: 'row', alignItems: 'center', marginTop: 15 },
//   tagText: { fontSize: 11, color: '#4B5563', fontFamily: Fonts.medium },
//   fullReportBtn: { marginTop: 20, backgroundColor: '#FFF7ED', padding: 14, borderRadius: 10, alignItems: 'center', borderWidth: 1, borderColor: '#FFEDD5' },
//   fullReportText: { color: '#EA580C', fontFamily: Fonts.bold, fontSize: 15 },
// });



















// import React, { useState } from 'react';
// import { View, Text, StyleSheet, TouchableOpacity, Image, Dimensions } from 'react-native';
// import Ionicons from "@react-native-vector-icons/ionicons";
// import { Colors } from '../../theme/colors';
// import { Fonts } from '../../theme/fonts';

// const { width } = Dimensions.get('window');

// const InspectionReport = () => {
//   // 'perfect' को डिफ़ॉल्ट रूप से खुला (true) रखते हैं ताकि स्क्रीन खाली न लगे
//   const [expanded, setExpanded] = useState<string | null>('perfect');

//   return (
//     <View style={styles.container}>
//       {/* 1. Main Title - हमेशा दिखेगा */}
//       <Text style={styles.mainTitle}>Car inspection report</Text>

//       {/* 2. Trust Badges - हमेशा दिखेंगे */}
//       <View style={styles.badgeRow}>
//         <View style={styles.badge}>
//             <Ionicons name="car-outline" size={26} color="black" />
//             <Text style={styles.badgeText}>No accident{"\n"}history</Text>
//         </View>
//         <View style={styles.badge}>
//             <Ionicons name="speedometer-outline" size={26} color="black" />
//             <Text style={styles.badgeText}>No odometer{"\n"}tampering</Text>
//         </View>
//         <View style={styles.badge}>
//             <Ionicons name="water-outline" size={26} color="black" />
//             <Text style={styles.badgeText}>No water{"\n"}damages</Text>
//         </View>
//         <View style={styles.badge}>
//             <Ionicons name="checkmark-done-circle-outline" size={26} color="black" />
//             <Text style={styles.badgeText}>300-quality{"\n"}checks</Text>
//         </View>
//       </View>

//       {/* 3. Quality Banner - हमेशा दिखेगा */}
//       <View style={styles.qualityBanner}>
//         <Ionicons name="checkmark-circle" size={16} color="#22C55E" />
//         <Text style={styles.qualityText}> This car has no repainted parts. Nice!</Text>
//       </View>

//       {/* --- 4. Section: Perfect Parts (Collapsible) --- */}
//       <View style={[styles.sectionCard, expanded === 'perfect' && styles.activeBorderGreen]}>
//         <TouchableOpacity style={styles.sectionHeader} onPress={() => setExpanded(expanded === 'perfect' ? null : 'perfect')}>
//           <View style={styles.row}>
//             <Ionicons name="sparkles" size={20} color="#22C55E" />
//             <Text style={styles.sectionTitle}>Perfect parts</Text>
//           </View>
//           <Ionicons name={expanded === 'perfect' ? "chevron-up" : "chevron-down"} size={20} color="gray" />
//         </TouchableOpacity>
//         {expanded === 'perfect' && (
//           <View style={styles.sectionBody}>
//             <View style={styles.perfectItem}><Ionicons name="checkmark" size={16} color="#22C55E" /><Text style={styles.bodyText}>Engine & Transmission</Text></View>
//             <View style={styles.perfectItem}><Ionicons name="checkmark" size={16} color="#22C55E" /><Text style={styles.bodyText}>Air-Conditioning</Text></View>
//             <View style={styles.perfectItem}><Ionicons name="checkmark" size={16} color="#22C55E" /><Text style={styles.bodyText}>Electricals & Interior</Text></View>
//           </View>
//         )}
//       </View>

//       {/* --- 5. Section: Fixes and repairs (Collapsible) --- */}
//       <View style={[styles.sectionCard, expanded === 'fixes' && styles.activeBorderBlue]}>
//         <TouchableOpacity style={styles.sectionHeader} onPress={() => setExpanded(expanded === 'fixes' ? null : 'fixes')}>
//           <View style={styles.row}>
//             <Ionicons name="build-outline" size={20} color="#3B82F6" />
//             <Text style={styles.sectionTitle}>Fixes and repairs</Text>
//           </View>
//           <Ionicons name={expanded === 'fixes' ? "chevron-up" : "chevron-down"} size={20} color="gray" />
//         </TouchableOpacity>
//         {expanded === 'fixes' && (
//            <View style={styles.sectionBody}>
//               <Text style={styles.bodyText}>No major repairs needed for this car.</Text>
//            </View>
//         )}
//       </View>

//       {/* --- 6. Section: Tyre life remaining (Collapsible) --- */}
//       <View style={[styles.sectionCard, expanded === 'tyre' && styles.activeBorderBlack]}>
//         <TouchableOpacity style={styles.sectionHeader} onPress={() => setExpanded(expanded === 'tyre' ? null : 'tyre')}>
//           <View style={styles.row}>
//             <Ionicons name="disc-outline" size={20} color="black" />
//             <Text style={styles.sectionTitle}>Tyre life remaining</Text>
//           </View>
//           <Ionicons name={expanded === 'tyre' ? "chevron-up" : "chevron-down"} size={20} color="gray" />
//         </TouchableOpacity>
//         {expanded === 'tyre' && (
//            <View style={styles.sectionBody}>
//               <Text style={styles.bodyText}>Tyre condition is good (approx 50% life).</Text>
//            </View>
//         )}
//       </View>

//       {/* 7. Footer Button */}
//       <TouchableOpacity style={styles.viewFullReport}>
//          <Text style={styles.reportBtnText}>View full report</Text>
//       </TouchableOpacity>
//     </View>
//   );
// };

// export default InspectionReport;

// const styles = StyleSheet.create({
//   container: { backgroundColor: 'white', padding: 15, marginTop: 12, marginHorizontal: 15, borderRadius: 15, elevation: 2 },
//   mainTitle: { fontFamily: Fonts.bold, fontSize: 18, color: 'black', marginBottom: 20 },
  
//   badgeRow: { flexDirection: 'row', justifyContent: 'space-between', marginBottom: 20 },
//   badge: { alignItems: 'center', width: '24%' },
//   badgeText: { fontSize: 9, textAlign: 'center', marginTop: 8, color: 'black', fontFamily: Fonts.medium },
  
//   qualityBanner: { backgroundColor: '#F0FDF4', padding: 10, borderRadius: 8, flexDirection: 'row', alignItems: 'center', marginBottom: 15 },
//   qualityText: { color: '#166534', fontSize: 12, fontFamily: Fonts.medium },

//   sectionCard: { backgroundColor: '#F9FAFB', borderRadius: 10, marginBottom: 10, borderWidth: 1, borderColor: '#f0f0f0' },
//   activeBorderGreen: { borderColor: '#22C55E' },
//   activeBorderBlue: { borderColor: '#3B82F6' },
//   activeBorderBlack: { borderColor: 'black' },

//   sectionHeader: { flexDirection: 'row', justifyContent: 'space-between', padding: 15, alignItems: 'center' },
//   row: { flexDirection: 'row', alignItems: 'center' },
//   sectionTitle: { marginLeft: 12, fontSize: 14, fontFamily: Fonts.bold, color: 'black' },
  
//   sectionBody: { padding: 15, paddingTop: 0 },
//   perfectItem: { flexDirection: 'row', alignItems: 'center', marginBottom: 8 },
//   bodyText: { fontSize: 13, color: '#4B5563', marginLeft: 10 },

//   viewFullReport: { marginTop: 10, backgroundColor: '#FFF7ED', padding: 14, borderRadius: 10, alignItems: 'center', borderWidth: 1, borderColor: '#FFEDD5' },
//   reportBtnText: { color: '#EA580C', fontFamily: Fonts.bold },
// });




















// api wala part 

import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import Ionicons from "@react-native-vector-icons/ionicons";
import { Colors } from '../../theme/colors';
import { Fonts } from '../../theme/fonts';

// --- TypeScript Interface ---
interface InspectionReportProps {
  report?: {
    accidentHistory?: string;
    odometerTampered?: string;
    waterDamaged?: string;
    repaintedParts?: string;
  };
  parts?: {
    engineTransmission?: boolean;
    ac?: boolean;
    electricals?: boolean;
  };
  tyre?: {
    status?: string;
    lifeRemaining?: string;
  };
}

const InspectionReport = ({ report, parts, tyre }: InspectionReportProps) => {
  const [expanded, setExpanded] = useState<string | null>('perfect');

  return (
    <View style={styles.container}>
      {/* 1. Main Title */}
      <Text style={styles.mainTitle}>Car inspection report</Text>

      {/* 2. Trust Badges - API (inspectionSummary) से डेटा आ रहा है */}
      <View style={styles.badgeRow}>
        <View style={styles.badge}>
            <Ionicons name="car-outline" size={26} color="black" />
            <Text style={styles.badgeText}>
                {report?.accidentHistory === "No" ? "No accident\nhistory" : "Accident\nHistory"}
            </Text>
        </View>
        <View style={styles.badge}>
            <Ionicons name="speedometer-outline" size={26} color="black" />
            <Text style={styles.badgeText}>
                {report?.odometerTampered === "No" ? "No odometer\ntampering" : "Odometer\nTampered"}
            </Text>
        </View>
        <View style={styles.badge}>
            <Ionicons name="water-outline" size={26} color="black" />
            <Text style={styles.badgeText}>
                {report?.waterDamaged === "No" ? "No water\ndamages" : "Water\nDamage"}
            </Text>
        </View>
        <View style={styles.badge}>
            <Ionicons name="checkmark-done-circle-outline" size={26} color="black" />
            <Text style={styles.badgeText}>300-quality{"\n"}checks</Text>
        </View>
      </View>

      {/* 3. Quality Banner - API (repaintedParts) से */}
      <View style={styles.qualityBanner}>
        <Ionicons name="checkmark-circle" size={16} color="#22C55E" />
        <Text style={styles.qualityText}> {report?.repaintedParts || "No repainted parts reported."}</Text>
      </View>

      {/* --- 4. Section: Perfect Parts (Collapsible) --- */}
      <View style={[styles.sectionCard, expanded === 'perfect' && styles.activeBorderGreen]}>
        <TouchableOpacity style={styles.sectionHeader} onPress={() => setExpanded(expanded === 'perfect' ? null : 'perfect')}>
          <View style={styles.row}>
            <Ionicons name="sparkles" size={20} color="#22C55E" />
            <Text style={styles.sectionTitle}>Perfect parts</Text>
          </View>
          <Ionicons name={expanded === 'perfect' ? "chevron-up" : "chevron-down"} size={20} color="gray" />
        </TouchableOpacity>
        {expanded === 'perfect' && (
          <View style={styles.sectionBody}>
            {parts?.engineTransmission && (
                <View style={styles.perfectItem}>
                    <Ionicons name="checkmark" size={16} color="#22C55E" />
                    <Text style={styles.bodyText}>Engine & Transmission</Text>
                </View>
            )}
            {parts?.ac && (
                <View style={styles.perfectItem}>
                    <Ionicons name="checkmark" size={16} color="#22C55E" />
                    <Text style={styles.bodyText}>Air-Conditioning</Text>
                </View>
            )}
            {parts?.electricals && (
                <View style={styles.perfectItem}>
                    <Ionicons name="checkmark" size={16} color="#22C55E" />
                    <Text style={styles.bodyText}>Electricals & Interior</Text>
                </View>
            )}
            {!parts && <Text style={styles.bodyText}>No data available</Text>}
          </View>
        )}
      </View>

      {/* --- 5. Section: Fixes and repairs --- */}
      {/* <View style={[styles.sectionCard, expanded === 'fixes' && styles.activeBorderBlue]}>
        <TouchableOpacity style={styles.sectionHeader} onPress={() => setExpanded(expanded === 'fixes' ? null : 'fixes')}>
          <View style={styles.row}>
            <Ionicons name="build-outline" size={20} color="#3B82F6" />
            <Text style={styles.sectionTitle}>Fixes and repairs</Text>
          </View>
          <Ionicons name={expanded === 'fixes' ? "chevron-up" : "chevron-down"} size={20} color="gray" />
        </TouchableOpacity>
        {expanded === 'fixes' && (
           <View style={styles.sectionBody}>
              <Text style={styles.bodyText}>Information Not Available.</Text>
           </View>
        )}
      </View> */}

      {/* --- 6. Section: Tyre life remaining --- */}
      <View style={[styles.sectionCard, expanded === 'tyre' && styles.activeBorderBlack]}>
        <TouchableOpacity style={styles.sectionHeader} onPress={() => setExpanded(expanded === 'tyre' ? null : 'tyre')}>
          <View style={styles.row}>
            <Ionicons name="disc-outline" size={20} color="black" />
            <Text style={styles.sectionTitle}>Tyre life remaining</Text>
          </View>
          <Ionicons name={expanded === 'tyre' ? "chevron-up" : "chevron-down"} size={20} color="gray" />
        </TouchableOpacity>
        {expanded === 'tyre' && (
           <View style={styles.sectionBody}>
              <Text style={styles.bodyText}>Condition: {tyre?.lifeRemaining || "Not Available"}</Text>
           </View>
        )}
      </View>

      {/* 7. Footer Button */}
      {/* <TouchableOpacity style={styles.viewFullReport}>
         <Text style={styles.reportBtnText}>View full report</Text>
      </TouchableOpacity> */}
    </View>
  );
};

export default InspectionReport;

const styles = StyleSheet.create({
  container: { backgroundColor: 'white', padding: 15, marginTop: 12, marginHorizontal: 15, borderRadius: 15, elevation: 2 },
  mainTitle: { fontFamily: Fonts.bold, fontSize: 18, color: 'black', marginBottom: 20 },
  badgeRow: { flexDirection: 'row', justifyContent: 'space-between', marginBottom: 20 },
  badge: { alignItems: 'center', width: '24%' },
  badgeText: { fontSize: 9, textAlign: 'center', marginTop: 8, color: 'black', fontFamily: Fonts.medium },
  qualityBanner: { backgroundColor: '#F0FDF4', padding: 10, borderRadius: 8, flexDirection: 'row', alignItems: 'center', marginBottom: 15 },
  qualityText: { color: '#166534', fontSize: 11, fontFamily: Fonts.medium, flex: 1 },
  sectionCard: { backgroundColor: '#F9FAFB', borderRadius: 10, marginBottom: 10, borderWidth: 1, borderColor: '#f0f0f0' },
  activeBorderGreen: { borderColor: '#22C55E' },
  activeBorderBlue: { borderColor: '#3B82F6' },
  activeBorderBlack: { borderColor: 'black' },
  sectionHeader: { flexDirection: 'row', justifyContent: 'space-between', padding: 15, alignItems: 'center' },
  row: { flexDirection: 'row', alignItems: 'center' },
  sectionTitle: { marginLeft: 12, fontSize: 14, fontFamily: Fonts.bold, color: 'black' },
  sectionBody: { padding: 15, paddingTop: 0 },
  perfectItem: { flexDirection: 'row', alignItems: 'center', marginBottom: 8 },
  bodyText: { fontSize: 13, color: '#4B5563', marginLeft: 10 },
  viewFullReport: { marginTop: 10, backgroundColor: '#FFF7ED', padding: 14, borderRadius: 10, alignItems: 'center', borderWidth: 1, borderColor: '#FFEDD5' },
  reportBtnText: { color: '#EA580C', fontFamily: Fonts.bold },
});