
// import React from 'react';
// import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
// import Ionicons from "@react-native-vector-icons/ionicons";
// import { useNavigation } from '@react-navigation/native';
// import { useDispatch, useSelector } from 'react-redux'; // Redux Hooks
// import { Colors } from '../theme/colors';
// import { Fonts } from '../theme/fonts';
// import { RootState } from '../redux/store';
// import { toggleWishlist } from '../redux/wishlistSlice';
// import { showSuccessToast } from '../utils/showToast';

// // --- TypeScript Interface ---
// interface CarItem {
//   _id: string; // API uses _id
//   model: string;
//   expectedPrice: number;
//   year: number;
//   kmDriven: number;
//   city?: { name: string };
//   images: string[];
//   isFeatured?: boolean;
// }

// interface CarCardProps {
//   item: CarItem;
//   width?: any; 
// }

// const CarCard = React.memo(({ item, width = '100%' }: CarCardProps) => {
//   const navigation = useNavigation<any>();
//   const dispatch = useDispatch();

//   // --- Redux Logic: Check if car is already in wishlist ---
//   const wishlistItems = useSelector((state: RootState) => state.wishlist.items);
//   const isFavorite = wishlistItems.some((fav: any) => String(fav._id) === String(item._id));

//   // --- Function: Toggle Wishlist ---
//   const handleWishlistToggle = () => {
//     dispatch(toggleWishlist(item)); // Redux Action
    
//     if (!isFavorite) {
//       showSuccessToast("Saved", "Car added to your wishlist ❤️");
//     } else {
//       showSuccessToast("Removed", "Car removed from wishlist");
//     }
//   };

//   const handlePress = () => {
//     navigation.navigate('CarDetailScreen', { car: item });
//   };

//   return (
//     <TouchableOpacity 
//       style={[styles.card, { width }]} 
//       activeOpacity={0.9} 
//       onPress={handlePress}
//     >
//       {/* --- Image Section --- */}
//       <View style={styles.imageContainer}>
//         <Image 
//           source={item.images && item.images.length > 0 
//             ? { uri: item.images[0] } 
//             : require('../assets/images/carimages/car1.jpg')} 
//           style={styles.carImage} 
//         />
        
//         {/* Featured Tag (If applicable) */}
//         {item.isFeatured && (
//           <View style={styles.featuredTag}>
//             <Text style={styles.featuredText}>FEATURED</Text>
//           </View>
//         )}

//         {/* --- Wishlist Heart Button --- */}
//         <TouchableOpacity 
//           style={styles.heartIcon} 
//           activeOpacity={0.7}
//           onPress={handleWishlistToggle} 
//         >
//           <Ionicons 
//             name={isFavorite ? "heart" : "heart-outline"} 
//             size={18} 
//             color={isFavorite ? "#EF4444" : Colors.primary} 
//           />
//         </TouchableOpacity>
//       </View>

//       {/* --- Details Section --- */}
//       <View style={styles.details}>
//         <Text style={styles.price}>
//           ₹ {item.expectedPrice ? item.expectedPrice.toLocaleString() : '0'}
//         </Text>
//         <Text style={styles.name} numberOfLines={1}>{item.model}</Text>
//         <Text style={styles.info}>{item.year} - {item.kmDriven} km</Text>
        
//         <View style={styles.locationRow}>
//           <Ionicons name="location-outline" size={12} color={Colors.textSecondary} />
//           <Text style={styles.locationText} numberOfLines={1}>
//             {item.city?.name || 'Not Available'}
//           </Text>
//         </View>
//       </View>
//     </TouchableOpacity>
//   );
// });

// export default CarCard;

// const styles = StyleSheet.create({
//   card: { 
//     backgroundColor: Colors.white, 
//     borderRadius: 12, 
//     marginBottom: 15, 
//     elevation: 4, 
//     shadowColor: '#000', 
//     shadowOffset: { width: 0, height: 2 },
//     shadowOpacity: 0.1, 
//     shadowRadius: 5, 
//     overflow: 'hidden' 
//   },
//   imageContainer: { 
//     width: '100%', 
//     height: 110, 
//     backgroundColor: '#f0f0f0'
//   },
//   carImage: { 
//     width: '100%', 
//     height: '100%', 
//     resizeMode: 'cover' 
//   },
//   featuredTag: { 
//     position: 'absolute', 
//     bottom: 0, 
//     left: 0, 
//     backgroundColor: Colors.secondary, 
//     paddingHorizontal: 10, 
//     paddingVertical: 3,
//     borderTopRightRadius: 8,
//     zIndex: 1
//   },
//   featuredText: { 
//     fontSize: 9, 
//     fontFamily: Fonts.bold, 
//     color: Colors.primary 
//   },
//   heartIcon: { 
//     position: 'absolute', 
//     top: 8, 
//     right: 8, 
//     backgroundColor: 'rgba(255,255,255,0.9)', 
//     borderRadius: 20, 
//     padding: 6,
//     elevation: 5,
//     zIndex: 10 // सुनिश्चित करता है कि बटन इमेज के ऊपर रहे
//   },
//   details: { 
//     padding: 10 
//   },
//   price: { 
//     fontSize: 16, 
//     fontFamily: Fonts.bold, 
//     color: Colors.primary 
//   },
//   name: { 
//     fontSize: 13, 
//     fontFamily: Fonts.medium, 
//     color: Colors.textPrimary,
//     marginTop: 2
//   },
//   info: { 
//     fontSize: 11, 
//     color: Colors.textSecondary, 
//     fontFamily: Fonts.regular,
//     marginTop: 2 
//   },
//   locationRow: { 
//     flexDirection: 'row', 
//     alignItems: 'center', 
//     marginTop: 6,
//     borderTopWidth: 0.5,
//     borderTopColor: '#f0f0f0',
//     paddingTop: 6
//   },
//   locationText: { 
//     fontSize: 10, 
//     color: Colors.textSecondary, 
//     marginLeft: 4,
//     fontFamily: Fonts.regular 
//   }
// });














// import React from 'react';
// import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
// import Ionicons from "@react-native-vector-icons/ionicons";
// import { useNavigation } from '@react-navigation/native';
// import { useDispatch, useSelector } from 'react-redux';
// import { Colors } from '../../theme/colors';
// import { Fonts } from '../../theme/fonts';
// import { RootState } from '../../redux/store';
// import { toggleWishlist } from '../../redux/wishlistSlice';
// import { showSuccessToast } from '../../utils/showToast';

// // --- TypeScript Interface Updated ---
// interface CarItem {
//   _id: string;
//   // model string भी हो सकता है और object भी (Safety for both formats)
//   model: string | { _id: string; name: string }; 
//   brand?: { _id: string; name: string };
//   expectedPrice: number;
//   year: number;
//   kmDriven: number;
//   city?: { name: string };
//   images: string[];
//   isFeatured?: boolean;
// }

// interface CarCardProps {
//   item: CarItem;
//   width?: any; 
// }

// const CarCard = React.memo(({ item, width = '100%' }: CarCardProps) => {
//   const navigation = useNavigation<any>();
//   const dispatch = useDispatch();

//   const wishlistItems = useSelector((state: RootState) => state.wishlist.items);
//   const isFavorite = wishlistItems.some((fav: any) => String(fav._id) === String(item._id));

//   // --- नाम दिखाने का लॉजिक (Brand + Model) ---
//   const getCarName = () => {
//     const brandName = item.brand?.name ? `${item.brand.name} ` : "";
//     const modelName = typeof item.model === 'object' ? item.model.name : item.model;
//     return brandName + modelName;
//   };

//   const handleWishlistToggle = () => {
//     dispatch(toggleWishlist(item));
//     if (!isFavorite) {
//       showSuccessToast("Saved", "Car added to your wishlist ❤️");
//     } else {
//       showSuccessToast("Removed", "Car removed from wishlist");
//     }
//   };

//   const handlePress = () => {
//     navigation.navigate('CarDetailScreen', { car: item });
//   };

//   return (
//     <TouchableOpacity 
//       style={[styles.card, { width }]} 
//       activeOpacity={0.9} 
//       onPress={handlePress}
//     >
//       <View style={styles.imageContainer}>
//         <Image 
//           source={item.images && item.images.length > 0 
//             ? { uri: item.images[0] } 
//             : require('../assets/images/carimages/car1.jpg')} 
//           style={styles.carImage} 
//         />
        
//         {item.isFeatured && (
//           <View style={styles.featuredTag}>
//             <Text style={styles.featuredText}>FEATURED</Text>
//           </View>
//         )}

//         <TouchableOpacity 
//           style={styles.heartIcon} 
//           activeOpacity={0.7}
//           onPress={handleWishlistToggle} 
//         >
//           <Ionicons 
//             name={isFavorite ? "heart" : "heart-outline"} 
//             size={18} 
//             color={isFavorite ? "#EF4444" : Colors.primary} 
//           />
//         </TouchableOpacity>
//       </View>

//       <View style={styles.details}>
//         <Text style={styles.price}>
//           ₹ {item.expectedPrice ? item.expectedPrice.toLocaleString('en-IN') : '0'}
//         </Text>
        
//         {/* डायनामिक नाम (Maruti DZIRE) */}
//         <Text style={styles.name} numberOfLines={1}>{getCarName()}</Text>
        
//         <Text style={styles.info}>{item.year} - {item.kmDriven} km</Text>
        
//         <View style={styles.locationRow}>
//           <Ionicons name="location-outline" size={12} color={Colors.textSecondary} />
//           <Text style={styles.locationText} numberOfLines={1}>
//             {item.city?.name || 'Not Available'}
//           </Text>
//         </View>
//       </View>
//     </TouchableOpacity>
//   );
// });

// export default CarCard;

// const styles = StyleSheet.create({
//   card: { 
//     backgroundColor: Colors.white, 
//     borderRadius: 12, 
//     marginBottom: 15, 
//     elevation: 4, 
//     shadowColor: '#000', 
//     shadowOffset: { width: 0, height: 2 },
//     shadowOpacity: 0.1, 
//     shadowRadius: 5, 
//     overflow: 'hidden' 
//   },
//   imageContainer: { width: '100%', height: 110, backgroundColor: '#f0f0f0' },
//   carImage: { width: '100%', height: '100%', resizeMode: 'cover' },
//   featuredTag: { position: 'absolute', bottom: 0, left: 0, backgroundColor: Colors.secondary, paddingHorizontal: 10, paddingVertical: 3, borderTopRightRadius: 8, zIndex: 1 },
//   featuredText: { fontSize: 9, fontFamily: Fonts.bold, color: Colors.primary },
//   heartIcon: { position: 'absolute', top: 8, right: 8, backgroundColor: 'rgba(255,255,255,0.9)', borderRadius: 20, padding: 6, elevation: 5, zIndex: 10 },
//   details: { padding: 10 },
//   price: { fontSize: 16, fontFamily: Fonts.bold, color: Colors.primary },
//   name: { fontSize: 13, fontFamily: Fonts.medium, color: Colors.textPrimary, marginTop: 2 },
//   info: { fontSize: 11, color: Colors.textSecondary, fontFamily: Fonts.regular, marginTop: 2 },
//   locationRow: { flexDirection: 'row', alignItems: 'center', marginTop: 6, borderTopWidth: 0.5, borderTopColor: '#f0f0f0', paddingTop: 6 },
//   locationText: { fontSize: 10, color: Colors.textSecondary, marginLeft: 4, fontFamily: Fonts.regular }
// });























import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import Ionicons from "@react-native-vector-icons/ionicons";
import { Colors } from '../../theme/colors';
import { styles } from './CarCardStyles';
import { useCarCardLogic } from './useCarCardLogic';

// --- TypeScript Interface Updated with isWishlisted ---
interface CarItem {
  _id: string;
  model: string | { _id: string; name: string }; 
  brand?: { _id: string; name: string };
  expectedPrice: number;
  year: number;
  kmDriven: number;
  city?: { name: string };
  images: string[];
  isFeatured?: boolean;
  isWishlisted?: boolean; // API नई चाबी भेज रही है
}

interface CarCardProps {
  item: CarItem;
  width?: any; 
}

const CarCard = React.memo(({ item, width = '100%' }: CarCardProps) => {
  const { isFavorite, getCarName, handleWishlistToggle, handlePress } = useCarCardLogic(item);

  return (
    <TouchableOpacity 
      style={[styles.card, { width }]} 
      activeOpacity={0.9} 
      onPress={handlePress}
    >
      <View style={styles.imageContainer}>
        <Image 
          source={item.images && item.images.length > 0 
            ? { uri: item.images[0] } 
            : require('../../assets/images/carimages/car1.jpg')} 
          style={styles.carImage} 
        />
        
        {item.isFeatured && (
          <View style={styles.featuredTag}>
            <Text style={styles.featuredText}>FEATURED</Text>
          </View>
        )}

        <TouchableOpacity 
          style={styles.heartIcon} 
          activeOpacity={0.7}
          onPress={handleWishlistToggle} 
        >
          <Ionicons 
            name={isFavorite ? "heart" : "heart-outline"} 
            size={18} 
            color={isFavorite ? "#EF4444" : Colors.primary} 
          />
        </TouchableOpacity>
      </View>

      <View style={styles.details}>
        <Text style={styles.price}>
          ₹ {item.expectedPrice ? item.expectedPrice.toLocaleString('en-IN') : '0'}
        </Text>
        <Text style={styles.name} numberOfLines={1}>{getCarName()}</Text>
        <Text style={styles.info}>{item.year} - {item.kmDriven} km</Text>
        
        <View style={styles.locationRow}>
          <Ionicons name="location-outline" size={12} color={Colors.textSecondary} />
          <Text style={styles.locationText} numberOfLines={1}>
            {item.city?.name || 'Not Available'}
          </Text>
        </View>
      </View>
    </TouchableOpacity>
  );
});

export default CarCard;