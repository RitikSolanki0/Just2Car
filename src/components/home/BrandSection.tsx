// import React from 'react';
// import { View, Text, FlatList, Image, StyleSheet } from 'react-native';
// import { Fonts } from '../../theme/fonts';
// import { BRANDS } from '../../dummydata/dummyData';

// const BrandSection = () => (
//   <View>
//     <Text style={styles.sectionTitle}>Start with Car Brand</Text>
//     <FlatList
//       horizontal
//       data={BRANDS}
//       showsHorizontalScrollIndicator={false}
//       keyExtractor={(item, index) => index.toString()}
//       contentContainerStyle={styles.brandList}
//       renderItem={({ item }) => (
//         <View style={styles.brandCircle}>
//           <Image source={item.logo} style={styles.brandLogo} />
//         </View>
//       )}
//     />
//   </View>
// );

// export default BrandSection;

// const styles = StyleSheet.create({
//   sectionTitle: { fontSize: 15, fontFamily: Fonts.bold, marginTop: 20, color: 'black' },
//   brandList: { marginTop: 12 },
//   brandCircle: { width: 55, height: 55, borderRadius: 30, borderWidth: 1, borderColor: '#ddd', justifyContent: 'center', alignItems: 'center', marginRight: 15 },
//   brandLogo: { width: 35, height: 35, resizeMode: 'contain' },
// });
















// import React from 'react';
// import { View, Text, FlatList, Image, StyleSheet, TouchableOpacity } from 'react-native';
// import { Fonts } from '../../theme/fonts';
// import { Colors } from '../../theme/colors';
// import { BRANDS } from '../../dummydata/dummyData';

// const BrandSection = () => (
//   <View style={styles.container}>
//     <Text style={styles.sectionTitle}>Start with Car Brand</Text>
    
//     <FlatList
//       horizontal
//       data={BRANDS}
//       showsHorizontalScrollIndicator={false}
//       keyExtractor={(item) => item.id}
//       contentContainerStyle={styles.brandList}
//       renderItem={({ item }) => (
//         <TouchableOpacity style={styles.brandItem} activeOpacity={0.7}>
//           {/* लोगो वाला गोला */}
//           <View style={styles.brandCircle}>
//             <Image source={item.logo} style={styles.brandLogo} />
//           </View>
          
//           {/* ब्रांड का नाम */}
//           <Text style={styles.brandName} numberOfLines={1}>
//             {item.name}
//           </Text>
//         </TouchableOpacity>
//       )}
//     />
//   </View>
// );

// export default BrandSection;

// const styles = StyleSheet.create({
//   container: {
//     marginTop: 10,
//   },
//   sectionTitle: { 
//     fontSize: 15, 
//     fontFamily: Fonts.bold, 
//     marginTop: 10, 
//     color: 'black',
//     paddingHorizontal: 5 
//   },
//   brandList: { 
//     marginTop: 15,
//     paddingBottom: 5,
//   },
//   brandItem: {
//     alignItems: 'center', // लोगो और नाम को सेंटर अलाइन करने के लिए
//     marginRight: 18,
//   },
//   brandCircle: { 
//     width: 60, 
//     height: 60, 
//     borderRadius: 30, 
//     borderWidth: 1, 
//     borderColor: '#E5E7EB', 
//     justifyContent: 'center', 
//     alignItems: 'center',
//     backgroundColor: '#fff',
//     // हलकी सी शैडो
//     elevation: 2,
//     shadowColor: '#000',
//     shadowOffset: { width: 0, height: 1 },
//     shadowOpacity: 0.1,
//     shadowRadius: 2,
//   },
//   brandLogo: { 
//     width: 40, 
//     height: 40, 
//     resizeMode: 'contain' 
//   },
//   brandName: {
//     marginTop: 8,
//     fontSize: 11,
//     fontFamily: Fonts.medium,
//     color: '#374151',
//     textAlign: 'center',
//   },
// });















// api wala part yaha se

// import React from 'react';
// import { View, Text, FlatList, Image, StyleSheet, TouchableOpacity, ActivityIndicator } from 'react-native';
// import { Fonts } from '../../theme/fonts';

// interface BrandSectionProps {
//   data: any[];
//   loading: boolean;
// }

// const BrandSection = ({ data, loading }: BrandSectionProps) => {
//   return (
//     <View style={styles.container}>
//       <Text style={styles.sectionTitle}>Start with Car Brand</Text>
      
//       {loading ? (
//         <View style={styles.loaderContainer}>
//           <ActivityIndicator size="small" color="#243B53" />
//         </View>
//       ) : (
//         <FlatList
//           horizontal
//           data={data}
//           showsHorizontalScrollIndicator={false}
//           keyExtractor={(item) => item._id} // API से _id आ रहा है
//           contentContainerStyle={styles.brandList}
//           renderItem={({ item }) => (
//             <TouchableOpacity style={styles.brandItem} activeOpacity={0.7}>
//               <View style={styles.brandCircle}>
//                 <Image 
//                   source={{ uri: item.image }} // API से इमेज URL आ रहा है
//                   style={styles.brandLogo} 
//                 />
//               </View>
//               <Text style={styles.brandName} numberOfLines={1}>
//                 {item.name}
//               </Text>
//             </TouchableOpacity>
//           )}
//         />
//       )}
//     </View>
//   );
// };

// export default BrandSection;

// const styles = StyleSheet.create({
//   container: { marginTop: 10 },
//   sectionTitle: { fontSize: 15, fontFamily: Fonts.bold, marginTop: 10, color: 'black', paddingHorizontal: 5 },
//   loaderContainer: { height: 100, justifyContent: 'center', alignItems: 'center' },
//   brandList: { marginTop: 15, paddingBottom: 5 },
//   brandItem: { alignItems: 'center', marginRight: 18 },
//   brandCircle: { 
//     width: 60, height: 60, borderRadius: 30, borderWidth: 1, borderColor: '#E5E7EB', 
//     justifyContent: 'center', alignItems: 'center', backgroundColor: '#fff',
//     elevation: 2, shadowColor: '#000', shadowOffset: { width: 0, height: 1 }, shadowOpacity: 0.1, shadowRadius: 2,
//   },
//   brandLogo: { width: 40, height: 40, resizeMode: 'contain' },
//   brandName: { marginTop: 8, fontSize: 11, fontFamily: Fonts.medium, color: '#374151', textAlign: 'center' },
// });


















// import React from 'react';
// import { View, Text, FlatList, Image, StyleSheet, TouchableOpacity } from 'react-native';
// import { Fonts } from '../../theme/fonts';
// import BrandSkeleton from '../skeletons/BrandSkeleton'; // स्केलेटन इम्पोर्ट

// interface BrandSectionProps {
//   data: any[];
//   loading: boolean;
// }

// const BrandSection = ({ data, loading }: BrandSectionProps) => {
//   return (
//     <View style={styles.container}>
//       <Text style={styles.sectionTitle}>Start with Car Brand</Text>
      
//       {loading ? (
//         // लोड होते समय स्केलेटन दिखाएं
//         <BrandSkeleton />
//       ) : (
//         <FlatList
//           horizontal
//           data={data}
//           showsHorizontalScrollIndicator={false}
//           keyExtractor={(item) => item._id}
//           contentContainerStyle={styles.brandList}
//           renderItem={({ item }) => (
//             <TouchableOpacity style={styles.brandItem} activeOpacity={0.7}>
//               {/* लोगो वाला गोला */}
//               <View style={styles.brandCircle}>
//                 <Image 
//                   source={{ uri: item.image }} 
//                   style={styles.brandLogo} 
//                 />
//               </View>
              
//               {/* ब्रांड का नाम */}
//               <Text style={styles.brandName} numberOfLines={1}>
//                 {item.name}
//               </Text>
//             </TouchableOpacity>
//           )}
//         />
//       )}
//     </View>
//   );
// };

// export default BrandSection;

// const styles = StyleSheet.create({
//   container: { marginTop: 10 },
//   sectionTitle: { 
//     fontSize: 15, 
//     fontFamily: Fonts.bold, 
//     marginTop: 10, 
//     color: 'black',
//     paddingHorizontal: 5 
//   },
//   brandList: { 
//     marginTop: 15,
//     paddingBottom: 5,
//   },
//   brandItem: {
//     alignItems: 'center',
//     marginRight: 18,
//   },
//   brandCircle: { 
//     width: 60, 
//     height: 60, 
//     borderRadius: 30, 
//     borderWidth: 1, 
//     borderColor: '#E5E7EB', 
//     justifyContent: 'center', 
//     alignItems: 'center',
//     backgroundColor: '#fff',
//     elevation: 2,
//     shadowColor: '#000',
//     shadowOffset: { width: 0, height: 1 },
//     shadowOpacity: 0.1,
//     shadowRadius: 2,
//   },
//   brandLogo: { 
//     width: 40, 
//     height: 40, 
//     resizeMode: 'contain' 
//   },
//   brandName: {
//     marginTop: 8,
//     fontSize: 11,
//     fontFamily: Fonts.medium,
//     color: '#374151',
//     textAlign: 'center',
//   },
// });














import React from 'react';
import { View, Text, FlatList, Image, StyleSheet, TouchableOpacity } from 'react-native';
import { Fonts } from '../../theme/fonts';
import BrandSkeleton from '../skeletons/BrandSkeleton';

interface BrandSectionProps {
  data: any[];
  loading: boolean;
  onBrandPress: (name: string) => void; 
}

const BrandSection = ({ data, loading, onBrandPress }: BrandSectionProps) => {
  return (
    <View style={styles.container}>
      <Text style={styles.sectionTitle}>Start with Car Brand</Text>
      
      {loading ? (
        <BrandSkeleton />
      ) : (
        <FlatList
          horizontal
          data={data}
          showsHorizontalScrollIndicator={false}
          keyExtractor={(item) => item._id}
          contentContainerStyle={styles.brandList}
          renderItem={({ item }) => (
            <TouchableOpacity 
              style={styles.brandItem} 
              activeOpacity={0.7}
              // --- 🚀 क्लिक करने पर नाम पास करें ---
              onPress={() => onBrandPress(item.name)} 
            >
              <View style={styles.brandCircle}>
                <Image 
                  source={{ uri: item.image }} 
                  style={styles.brandLogo} 
                />
              </View>
              <Text style={styles.brandName} numberOfLines={1}>
                {item.name}
              </Text>
            </TouchableOpacity>
          )}
        />
      )}
    </View>
  );
};

export default BrandSection;

const styles = StyleSheet.create({
  container: { marginTop: 10 },
  sectionTitle: { fontSize: 15, fontFamily: Fonts.bold, marginTop: 10, color: 'black', paddingHorizontal: 5 },
  brandList: { marginTop: 15, paddingBottom: 5 },
  brandItem: { alignItems: 'center', marginRight: 18 },
  brandCircle: { width: 60, height: 60, borderRadius: 30, borderWidth: 1, borderColor: '#E5E7EB', justifyContent: 'center', alignItems: 'center', backgroundColor: '#fff', elevation: 2, shadowColor: '#000', shadowOffset: { width: 0, height: 1 }, shadowOpacity: 0.1, shadowRadius: 2 },
  brandLogo: { width: 40, height: 40, resizeMode: 'contain' },
  brandName: { marginTop: 8, fontSize: 11, fontFamily: Fonts.medium, color: '#374151', textAlign: 'center' },
});