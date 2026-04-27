// import React from 'react';
// import { View, Text, FlatList, StyleSheet, TouchableOpacity } from 'react-native';
// import Ionicons from "@react-native-vector-icons/ionicons";
// import { RECOMMENDATIONS } from '../../dummydata/dummyData';
// import CarCard from '../carcard/CarCard';
// import { Fonts } from '../../theme/fonts';
// import { Colors } from '../../theme/colors';

// const SimilarCars = () => (
//   <View style={styles.container}>

//     {/* --- Section Header --- */}
//     <View style={styles.header}>
//       <View style={styles.titleWrapper}>
//         <Text style={styles.title}>Still can't decide?</Text>
//         <Text style={styles.subTitle}>Explore cars similar to this car</Text>
//       </View>
//       {/* <TouchableOpacity style={styles.viewAllBtn}>
//          <Text style={styles.viewAllText}>View All</Text>
//          <Ionicons name="chevron-forward" size={14} color={Colors.secondary} />
//       </TouchableOpacity> */}
//     </View>

//     {/* --- Horizontal List --- */}
//     <FlatList
//       horizontal
//       data={RECOMMENDATIONS}
//       keyExtractor={(item) => item.id}
//       showsHorizontalScrollIndicator={false}
//       contentContainerStyle={styles.listContent}
//       // snapToInterval={265} // स्मूथ स्क्रॉलिंग के लिए
//       decelerationRate="fast"
//       renderItem={({ item }) => (
//         <View style={styles.cardWrapper}>
//           <CarCard item={item} />
//         </View>
//       )}
//     />

//     {/* --- Explore More Footer --- */}
//     {/* <TouchableOpacity style={styles.footerLink}>
//        <Text style={styles.footerLinkText}>View all similar cars</Text>
//        <View style={styles.underline} />
//     </TouchableOpacity> */}
//   </View>
// );

// export default SimilarCars;

// const styles = StyleSheet.create({
//   container: { 
//     paddingVertical: 25, 
//     marginTop: 10,
//     backgroundColor: '#F9FAFB', // हल्का ग्रे बैकग्राउंड ताकि वाइट कार्ड्स 'Pop' करें
//   },
//   header: { 
//     flexDirection: 'row', 
//     justifyContent: 'space-between', 
//     alignItems: 'center', 
//     paddingHorizontal: 20,
//     marginBottom: 20 
//   },
//   titleWrapper: {
//     flex: 1,
//   },
//   title: { 
//     fontFamily: Fonts.regular, 
//     fontSize: 14, 
//     color: '#6B7280' 
//   },
//   subTitle: { 
//     fontFamily: Fonts.bold, 
//     fontSize: 18, 
//     color: 'black',
//     marginTop: 2
//   },
//   viewAllBtn: {
//     flexDirection: 'row',
//     alignItems: 'center',
//   },
//   viewAllText: {
//     color: Colors.secondary,
//     fontFamily: Fonts.bold,
//     fontSize: 13,
//     marginRight: 2
//   },
//   listContent: { 
//     paddingHorizontal: 20, // पहली कार्ड को अलाइन करने के लिए
//     paddingBottom: 10 // शैडो के लिए जगह
//   },
//   cardWrapper: { 
//     width: 210, // कार्ड की चौड़ाई थोड़ी कम की ताकि अगला कार्ड थोड़ा सा दिखे
//     marginRight: 15,
//   },
//   footerLink: {
//     alignSelf: 'center',
//     marginTop: 15,
//   },
//   footerLinkText: {
//     color: Colors.secondary,
//     fontFamily: Fonts.bold,
//     fontSize: 14,
//   },
//   underline: {
//     height: 2,
//     backgroundColor: Colors.secondary,
//     width: '100%',
//     marginTop: 2,
//     opacity: 0.3
//   }
// });














// import React from 'react';
// import { View, Text, FlatList, StyleSheet, TouchableOpacity, ActivityIndicator } from 'react-native';
// import Ionicons from "@react-native-vector-icons/ionicons";
// import CarCard from '../carcard/CarCard';
// import { Fonts } from '../../theme/fonts';
// import { Colors } from '../../theme/colors';
// import { useSimilarCarsLogic } from './useSimilarCarsLogic';

// interface SimilarCarsProps {
//   brandId: string;
//   currentCarId: string;
// }

// const SimilarCars = ({ brandId, currentCarId }: SimilarCarsProps) => {
//   const { similarCars, loading } = useSimilarCarsLogic(brandId, currentCarId);

//   // अगर लोडिंग हो रही है
//   if (loading) {
//     return (
//       <View style={styles.loaderContainer}>
//         <ActivityIndicator color={Colors.secondary} />
//       </View>
//     );
//   }

//   // अगर कोई सिमिलर कार नहीं मिली, तो पूरा सेक्शन ही छुपा दें
//   if (similarCars.length === 0) return null;

//   return (
//     <View style={styles.container}>
//       <View style={styles.header}>
//         <View style={styles.titleWrapper}>
//           <Text style={styles.title}>Still can't decide?</Text>
//           <Text style={styles.subTitle}>Explore cars similar to this car</Text>
//         </View>
//         <TouchableOpacity style={styles.viewAllBtn}>
//            <Text style={styles.viewAllText}>View All</Text>
//            <Ionicons name="chevron-forward" size={14} color={Colors.secondary} />
//         </TouchableOpacity>
//       </View>

//       <FlatList
//         horizontal
//         data={similarCars} // असली API डेटा
//         keyExtractor={(item) => item._id}
//         showsHorizontalScrollIndicator={false}
//         contentContainerStyle={styles.listContent}
//         decelerationRate="fast"
//         renderItem={({ item }) => (
//           <View style={styles.cardWrapper}>
//             {/* CarCard को width="100%" दें ताकि वह cardWrapper में फिट हो */}
//             <CarCard item={item} width="100%" />
//           </View>
//         )}
//       />

//       <TouchableOpacity style={styles.footerLink}>
//          <Text style={styles.footerLinkText}>View all similar cars</Text>
//          <View style={styles.underline} />
//       </TouchableOpacity>
//     </View>
//   );
// };

// export default SimilarCars;

// const styles = StyleSheet.create({
//   container: { paddingVertical: 25, marginTop: 10, backgroundColor: '#F9FAFB' },
//   loaderContainer: { padding: 40, alignItems: 'center' },
//   header: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', paddingHorizontal: 20, marginBottom: 20 },
//   titleWrapper: { flex: 1 },
//   title: { fontFamily: Fonts.regular, fontSize: 14, color: '#6B7280' },
//   subTitle: { fontFamily: Fonts.bold, fontSize: 18, color: 'black', marginTop: 2 },
//   viewAllBtn: { flexDirection: 'row', alignItems: 'center' },
//   viewAllText: { color: Colors.secondary, fontFamily: Fonts.bold, fontSize: 13, marginRight: 2 },
//   listContent: { paddingHorizontal: 20, paddingBottom: 10 },
//   cardWrapper: { width: 180, marginRight: 15 }, // चौड़ाई एकदम बैलेंस्ड
//   footerLink: { alignSelf: 'center', marginTop: 15 },
//   footerLinkText: { color: Colors.secondary, fontFamily: Fonts.bold, fontSize: 14 },
//   underline: { height: 2, backgroundColor: Colors.secondary, width: '100%', marginTop: 2, opacity: 0.3 }
// });












import React from 'react';
import { View, Text, FlatList, StyleSheet, TouchableOpacity } from 'react-native';
import Ionicons from "@react-native-vector-icons/ionicons";
import CarCard from '../carcard/CarCard';
import { Fonts } from '../../theme/fonts';
import { Colors } from '../../theme/colors';
import { useSimilarCarsLogic } from './useSimilarCarsLogic';

interface SimilarCarsProps {
  brandId: string | undefined;
  currentCarId: string;
}

const SimilarCars = ({ brandId, currentCarId }: SimilarCarsProps) => {
  const { similarCars, loading } = useSimilarCarsLogic(brandId, currentCarId);

  // 1. अगर अभी लोड हो रहा है, तो कुछ मत दिखाओ (No Loader)
  if (loading) return null;

  // 2. अगर लोडिंग खत्म हो गई और कोई कार नहीं मिली, तो भी कुछ मत दिखाओ
  if (similarCars.length === 0) return null;

  // 3. सिर्फ डेटा होने पर ही यह रेंडर होगा
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View style={styles.titleWrapper}>
          <Text style={styles.title}>Still can't decide?</Text>
          <Text style={styles.subTitle}>Explore similar cars</Text>
        </View>
        {/* <TouchableOpacity style={styles.viewAllBtn}>
           <Text style={styles.viewAllText}>View All</Text>
           <Ionicons name="chevron-forward" size={14} color={Colors.secondary} />
        </TouchableOpacity> */}
      </View>

      <FlatList
        horizontal
        data={similarCars}
        keyExtractor={(item) => item._id}
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.listContent}
        decelerationRate="fast"
        renderItem={({ item }) => (
          <View style={styles.cardWrapper}>
            <CarCard item={item} width="100%" />
          </View>
        )}
      />
    </View>
  );
};

export default SimilarCars;

const styles = StyleSheet.create({
  container: { paddingVertical: 25, marginTop: 10, backgroundColor: '#F9FAFB' },
  header: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', paddingHorizontal: 20, marginBottom: 20 },
  titleWrapper: { flex: 1 },
  title: { fontFamily: Fonts.regular, fontSize: 13, color: '#6B7280' },
  subTitle: { fontFamily: Fonts.bold, fontSize: 17, color: 'black', marginTop: 2 },
  viewAllBtn: { flexDirection: 'row', alignItems: 'center' },
  viewAllText: { color: Colors.secondary, fontFamily: Fonts.bold, fontSize: 13, marginRight: 2 },
  listContent: { paddingHorizontal: 20, paddingBottom: 10 },
  cardWrapper: { width: 170, marginRight: 15 },
});