
// import React from "react";
// import { FlatList, Text, StyleSheet, View, TouchableOpacity } from "react-native";
// import { SafeAreaView } from "react-native-safe-area-context";
// import { useSelector } from "react-redux";
// import Ionicons from "@react-native-vector-icons/ionicons"; // आइकन के लिए
// import { useNavigation } from "@react-navigation/native"; // नेविगेशन के लिए
// import { RootState } from "../../../redux/store";
// import CarCard from "../../../components/CarCard";
// import { Colors } from "../../../theme/colors";
// import { Fonts } from "../../../theme/fonts";

// const WishlistScreen = () => {
//   const navigation = useNavigation();
//   const wishlistItems = useSelector((state: RootState) => state.wishlist.items);

//   return (
//     <SafeAreaView style={styles.container}>
      
//       {/* --- Custom Header with Back Button --- */}
//       <View style={styles.header}>
//         <TouchableOpacity 
//           onPress={() => navigation.goBack()} 
//           activeOpacity={0.7}
//           style={styles.backBtn}
//         >
//           <Ionicons name="chevron-back" size={30} color={Colors.black} />
//         </TouchableOpacity>
//         <Text style={styles.title}>My Wishlist</Text>
//       </View>
      
//       {/* --- Content --- */}
//       {wishlistItems.length > 0 ? (
//         <FlatList
//           data={wishlistItems}
//           keyExtractor={(item) => String(item.id)}
//           numColumns={2}
//           columnWrapperStyle={{ justifyContent: 'space-between' }}
//           renderItem={({ item }) => <CarCard item={item} />}
//           contentContainerStyle={{ paddingBottom: 100 }}
//           showsVerticalScrollIndicator={false}
//         />
//       ) : (
//         <View style={styles.emptyContainer}>
//           {/* खाली विशलिस्ट के लिए एक सुंदर आइकन */}
//           <Ionicons name="heart-dislike-outline" size={80} color="#E0E0E0" />
//           <Text style={styles.emptyText}>Your wishlist is empty!</Text>
//         </View>
//       )}
//     </SafeAreaView>
//   );
// };

// export default WishlistScreen;

// const styles = StyleSheet.create({
//   container: { 
//     flex: 1, 
//     backgroundColor: Colors.white, 
//     paddingHorizontal: 15 
//   },
//   header: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     marginTop: 10,
//     marginBottom: 15,
//   },
//   backBtn: {
//     padding: 5,
//     marginLeft: -5, // आइकन को अलाइन करने के लिए
//   },
//   title: { 
//     fontFamily: Fonts.bold, 
//     fontSize: 22, 
//     color: 'black',
//     marginLeft: 10, // बैक बटन और टेक्स्ट के बीच गैप
//   },
//   emptyContainer: { 
//     flex: 1, 
//     justifyContent: 'center', 
//     alignItems: 'center' 
//   },
//   emptyText: { 
//     fontFamily: Fonts.medium, 
//     fontSize: 16, 
//     color: 'gray',
//     marginTop: 10
//   }
// });



















import React from "react";
import {
  FlatList,
  Text,
  StyleSheet,
  View,
  TouchableOpacity,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useDispatch, useSelector } from "react-redux";
import Ionicons from "@react-native-vector-icons/ionicons";
import { useNavigation } from "@react-navigation/native";
import { RootState } from "../../../redux/store";
import { toggleWishlist } from "../../../redux/wishlistSlice";
import { showSuccessToast } from "../../../utils/showToast";
import CarCard from "../../../components/CarCard";
import { Colors } from "../../../theme/colors";
import { Fonts } from "../../../theme/fonts";

const WishlistScreen = () => {
  const navigation = useNavigation<any>();
  const dispatch = useDispatch();
  
  // रेडक्स से विशलिस्ट आइटम्स निकालें
  const wishlistItems = useSelector((state: RootState) => state.wishlist.items);

  // आइटम हटाने का फंक्शन
  const handleRemove = (item: any) => {
    dispatch(toggleWishlist(item));
    showSuccessToast("Removed", "Car removed from your wishlist.");
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      {/* --- Custom Header --- */}
      <View style={styles.header}>
        <TouchableOpacity 
          onPress={() => navigation.goBack()} 
          activeOpacity={0.7}
          style={styles.backBtn}
        >
          <Ionicons name="chevron-back" size={30} color={Colors.black} />
        </TouchableOpacity>
        <View style={styles.titleWrapper}>
          <Text style={styles.title}>My Wishlist</Text>
          <Text style={styles.countText}>{wishlistItems.length} items</Text>
        </View>
      </View>

      {/* --- Content --- */}
      <View style={styles.container}>
        {wishlistItems.length > 0 ? (
          <FlatList
            data={wishlistItems}
            // keyExtractor={(item) => String(item.id)}
            keyExtractor={(item) => item._id || item.id} 
            numColumns={2}
            columnWrapperStyle={styles.row}
            showsVerticalScrollIndicator={false}
            renderItem={({ item }) => (
              <View style={styles.cardContainer}>
                {/* CarCard का उपयोग करें */}
                <CarCard item={item} width="100%" />
                
                {/* --- Remove Heart Icon (Overlay) --- */}
                <TouchableOpacity 
                  style={styles.removeIconBtn} 
                  onPress={() => handleRemove(item)}
                  activeOpacity={0.8}
                >
                  <Ionicons name="heart" size={20} color="#EF4444" />
                </TouchableOpacity>
              </View>
            )}
            contentContainerStyle={{ paddingBottom: 120 }}
          />
        ) : (
          // Empty State UI
          <View style={styles.emptyContainer}>
            <View style={styles.emptyIconCircle}>
               <Ionicons name="heart-dislike-outline" size={60} color="#9CA3AF" />
            </View>
            <Text style={styles.emptyTitle}>Nothing saved yet!</Text>
            <Text style={styles.emptySubText}>
              Tap the heart icon on any car to save it for later.
            </Text>
            <TouchableOpacity 
              style={styles.exploreBtn} 
              onPress={() => navigation.navigate('HomeScreen')}
            >
              <Text style={styles.exploreText}>Explore Cars</Text>
            </TouchableOpacity>
          </View>
        )}
      </View>
    </SafeAreaView>
  );
};

export default WishlistScreen;

const styles = StyleSheet.create({
  safeArea: { flex: 1, backgroundColor: Colors.white },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 15,
    paddingTop: 10,
    paddingBottom: 15,
  },
  backBtn: {
    padding: 5,
    marginRight: 10,
  },
  titleWrapper: {
    flexDirection: 'row',
    alignItems: 'flex-end',
  },
  title: { 
    fontFamily: Fonts.bold, 
    fontSize: 24, 
    color: Colors.black 
  },
  countText: {
    fontFamily: Fonts.medium,
    fontSize: 14,
    color: 'gray',
    marginLeft: 10,
    marginBottom: 4,
  },
  container: { 
    flex: 1, 
    paddingHorizontal: 15 
  },
  row: { 
    justifyContent: 'space-between' 
  },
  cardContainer: {
    width: '48%', // दो कॉलम ग्रिड के लिए
    position: 'relative',
  },
  // --- रिमूव बटन का स्टाइल ---
  removeIconBtn: {
    position: 'absolute',
    top: 8,
    right: 8,
    backgroundColor: 'white',
    width: 32,
    height: 32,
    borderRadius: 16,
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 5,
    shadowColor: "#000",
    shadowOpacity: 0.2,
    shadowRadius: 3,
  },

  // Empty State Styling
  emptyContainer: { 
    flex: 1, 
    justifyContent: 'center', 
    alignItems: 'center',
    paddingHorizontal: 40,
  },
  emptyIconCircle: {
    width: 120,
    height: 120,
    borderRadius: 60,
    backgroundColor: '#F3F4F6',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
  },
  emptyTitle: {
    fontFamily: Fonts.bold,
    fontSize: 20,
    color: Colors.black,
  },
  emptySubText: {
    fontFamily: Fonts.regular,
    fontSize: 14,
    color: 'gray',
    textAlign: 'center',
    marginTop: 10,
    lineHeight: 20,
  },
  exploreBtn: {
    marginTop: 30,
    backgroundColor: Colors.secondary,
    paddingHorizontal: 30,
    paddingVertical: 12,
    borderRadius: 25,
  },
  exploreText: {
    color: Colors.white,
    fontFamily: Fonts.bold,
    fontSize: 16,
  }
});