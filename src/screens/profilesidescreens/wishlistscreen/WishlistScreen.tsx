
import React from "react";
import { View, Text, FlatList, TouchableOpacity, ActivityIndicator, RefreshControl } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Ionicons from "@react-native-vector-icons/ionicons";
import CarCard from "../../../components/carcard/CarCard";
import { Colors } from "../../../theme/colors";
import { styles } from "./WishlistStyles";
import { useWishlistLogic } from "./useWishlistLogic";

const WishlistScreen = ({ navigation }: any) => {
  const { wishlistItems, loading, refreshing, onRefresh, handleRemove } = useWishlistLogic(navigation);

  if (loading) {
    return (
      <View style={{ flex: 1, justifyContent: 'center' }}>
        <ActivityIndicator size="large" color={Colors.primary} />
      </View>
    );
  }

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backBtn}>
          <Ionicons name="chevron-back" size={30} color={Colors.black} />
        </TouchableOpacity>
        <View style={styles.titleWrapper}>
          <Text style={styles.title}>My Wishlist</Text>
          <Text style={styles.countText}>{wishlistItems.length} items</Text>
        </View>
      </View>

      <View style={styles.container}>
        {wishlistItems.length > 0 ? (
          <FlatList
            data={wishlistItems}
            keyExtractor={(item) => String(item._id)} 
            numColumns={2}
            columnWrapperStyle={styles.row}
            showsVerticalScrollIndicator={false}
            refreshControl={
              <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
            }
            renderItem={({ item }) => (
              <View style={styles.cardContainer}>
                <CarCard item={item} width="100%" />
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
          <View style={styles.emptyContainer}>
            <View style={styles.emptyIconCircle}>
               <Ionicons name="heart-dislike-outline" size={60} color="#9CA3AF" />
            </View>
            <Text style={styles.emptyTitle}>Nothing saved yet!</Text>
            <Text style={styles.emptySubText}>Tap the heart icon on any car to save it for later.</Text>
            <TouchableOpacity style={styles.exploreBtn} onPress={() => navigation.navigate('HomeScreen')}>
              <Text style={styles.exploreText}>Explore Cars</Text>
            </TouchableOpacity>
          </View>
        )}
      </View>
    </SafeAreaView>
  );
};

export default WishlistScreen;