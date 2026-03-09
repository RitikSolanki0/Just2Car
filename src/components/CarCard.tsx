// import React from 'react';
// import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
// import Ionicons from "@react-native-vector-icons/ionicons";
// import { Colors } from '../theme/colors';
// import { Fonts } from '../theme/fonts';

// const CarCard = React.memo(({ item }: any) => (
//   <TouchableOpacity style={styles.card} activeOpacity={0.9} >
//     <View style={styles.imageContainer}>
//       <Image source={item.image} style={styles.carImage} />
//       {item.isFeatured && (
//         <View style={styles.featuredTag}>
//           <Text style={styles.featuredText}>FEATURED</Text>
//         </View>
//       )}
//       <TouchableOpacity style={styles.heartIcon}>
//         <Ionicons name="heart-outline" size={18} color={Colors.secondary} />
//       </TouchableOpacity>
//     </View>
//     <View style={styles.details}>
//       <Text style={styles.price}>{item.price}</Text>
//       <Text style={styles.name}>{item.name}</Text>
//       <Text style={styles.info}>{item.year} - {item.kms}</Text>
//       <View style={styles.locationRow}>
//         <Ionicons name="location-outline" size={10} color="gray" />
//         <Text style={styles.locationText}>{item.location}</Text>
//       </View>
//     </View>
//   </TouchableOpacity>
// ));

// export default CarCard;

// const styles = StyleSheet.create({
//   card: { width: '48%', backgroundColor: Colors.white, borderRadius: 10, marginBottom: 15, elevation: 3, shadowColor: '#000', shadowOpacity: 0.1, shadowRadius: 5, overflow: 'hidden' },
//   imageContainer: { width: '100%', height: 100 },
//   carImage: { width: '100%', height: '100%', resizeMode: 'cover' },
//   featuredTag: { position: 'absolute', bottom: 0, left: 0, backgroundColor: Colors.secondary, paddingHorizontal: 8, paddingVertical: 2 },
//   featuredText: { fontSize: 8, fontFamily: Fonts.bold, color: Colors.black },
//   heartIcon: { position: 'absolute', top: 5, right: 5, backgroundColor: 'white', borderRadius: 15, padding: 4 },
//   details: { padding: 8 },
//   price: { fontSize: 16, fontFamily: Fonts.bold, color: Colors.black },
//   name: { fontSize: 12, fontFamily: Fonts.medium, color: Colors.textSecondary },
//   info: { fontSize: 10, color: 'gray', marginTop: 2 },
//   locationRow: { flexDirection: 'row', alignItems: 'center', marginTop: 4 },
//   locationText: { fontSize: 9, color: 'gray', marginLeft: 3 }
// });






















import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import Ionicons from "@react-native-vector-icons/ionicons";
import { useNavigation } from '@react-navigation/native'; // <-- नेविगेशन के लिए
import { Colors } from '../theme/colors';
import { Fonts } from '../theme/fonts';

// TypeScript Interface (Optional but recommended)
interface CarItem {
  id: string;
  name: string;
  price: string;
  year: string;
  kms: string;
  location: string;
  image: any;
  isFeatured?: boolean;
}

interface CarCardProps {
  item: CarItem;
   width?: any; 
}

const CarCard = React.memo(({ item, width = '100%' }: CarCardProps) => {
  // नेविगेशन हुक का उपयोग करें
  const navigation = useNavigation<any>();

  const handlePress = () => {
    // 'CarDetail' स्क्रीन पर जाएँ और कार का पूरा डेटा साथ भेजें
    navigation.navigate('CarDetailScreen', { car: item });
  };

  return (
    <TouchableOpacity 
      style={[styles.card, { width }]} 
      activeOpacity={0.9} 
      onPress={handlePress} // क्लिक करने पर डिटेल स्क्रीन खुलेगी
    >
      {/* --- Image Section --- */}
      <View style={styles.imageContainer}>
        <Image source={item.image} style={styles.carImage} />
        
        {/* Featured Tag */}
        {item.isFeatured && (
          <View style={styles.featuredTag}>
            <Text style={styles.featuredText}>FEATURED</Text>
          </View>
        )}

        {/* Wishlist Heart Icon */}
        {/* <TouchableOpacity style={styles.heartIcon} activeOpacity={0.7}>
          <Ionicons name="heart-outline" size={18} color={Colors.secondary} />
        </TouchableOpacity> */}
      </View>

      {/* --- Text Details Section --- */}
      <View style={styles.details}>
        <Text style={styles.price}>{item.price}</Text>
        <Text style={styles.name} numberOfLines={1}>{item.name}</Text>
        <Text style={styles.info}>{item.year} - {item.kms}</Text>
        
        {/* Location Row */}
        <View style={styles.locationRow}>
          <Ionicons name="location-outline" size={12} color={Colors.textSecondary} />
          <Text style={styles.locationText} numberOfLines={1}>
            {item.location}
          </Text>
        </View>
      </View>
    </TouchableOpacity>
  );
});

export default CarCard;

const styles = StyleSheet.create({
  card: { 
    // width: '48%', 
    backgroundColor: Colors.white, 
    borderRadius: 12, 
    marginBottom: 15, 
    // Shadow for Android
    elevation: 4, 
    // Shadow for iOS
    shadowColor: '#000', 
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1, 
    shadowRadius: 5, 
    overflow: 'hidden' 
  },
  imageContainer: { 
    width: '100%', 
    height: 110, // थोड़ी हाइट बढ़ाई है बेहतर लुक के लिए
    backgroundColor: '#f0f0f0'
  },
  carImage: { 
    width: '100%', 
    height: '100%', 
    resizeMode: 'cover' 
  },
  featuredTag: { 
    position: 'absolute', 
    bottom: 0, 
    left: 0, 
    backgroundColor: Colors.secondary, 
    paddingHorizontal: 10, 
    paddingVertical: 3,
    borderTopRightRadius: 8
  },
  featuredText: { 
    fontSize: 9, 
    fontFamily: Fonts.bold, 
    color: Colors.primary 
  },
  heartIcon: { 
    position: 'absolute', 
    top: 8, 
    right: 8, 
    backgroundColor: 'rgba(255,255,255,0.9)', 
    borderRadius: 20, 
    padding: 6,
    elevation: 2
  },
  details: { 
    padding: 10 
  },
  price: { 
    fontSize: 16, 
    fontFamily: Fonts.bold, 
    color: Colors.primary 
  },
  name: { 
    fontSize: 13, 
    fontFamily: Fonts.medium, 
    color: Colors.textPrimary,
    marginTop: 2
  },
  info: { 
    fontSize: 11, 
    color: Colors.textSecondary, 
    fontFamily: Fonts.regular,
    marginTop: 2 
  },
  locationRow: { 
    flexDirection: 'row', 
    alignItems: 'center', 
    marginTop: 6,
    borderTopWidth: 0.5,
    borderTopColor: '#f0f0f0',
    paddingTop: 6
  },
  locationText: { 
    fontSize: 10, 
    color: Colors.textSecondary, 
    marginLeft: 4,
    fontFamily: Fonts.regular 
  }
});