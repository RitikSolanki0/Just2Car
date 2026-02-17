// import React, { useState } from "react";
// import {
//   View,
//   Text,
//   StyleSheet,
//   Image,
//   ScrollView,
//   TouchableOpacity,
//   Dimensions,
// } from "react-native";
// import Ionicons from "@react-native-vector-icons/ionicons";
// import { Colors } from "../../theme/colors";
// import { Fonts } from "../../theme/fonts";
// import { SafeAreaView } from "react-native-safe-area-context";
// import { useSafeAreaInsets } from "react-native-safe-area-context";

// const { width } = Dimensions.get("window");

// const CarDetailScreen = ({ route, navigation }: any) => {
//   // पास किया गया कार डाटा प्राप्त करें (या डमी डाटा का उपयोग करें)
//   const car = route.params?.car; 
  
//   const [selectedImage, setSelectedImage] = useState(car?.image);
//   const [showFullDesc, setShowFullDesc] = useState(false);

//   // डमी थंबनेल इमेजेज (फिग्मा के हिसाब से)
//   const thumbnails = [car?.image, car?.image, car?.image]; 

//   const insets = useSafeAreaInsets();

//   return (
//     <SafeAreaView style={styles.container}>
//       {/* --- Header --- */}
//       <View style={styles.header}>
//         <TouchableOpacity onPress={() => navigation.goBack()}>
//           <Ionicons name="arrow-back" size={28} color={Colors.black} />
//         </TouchableOpacity>
//         <TouchableOpacity>
//           <Ionicons name="share-social-outline" size={26} color={Colors.black} />
//         </TouchableOpacity>
//       </View>

//       <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={{paddingBottom: 100}}>
        
//         {/* --- Image Gallery Section --- */}
//         <View style={styles.imageSection}>
//           <View style={styles.mainImageContainer}>
//             <Image source={selectedImage} style={styles.mainImage} />
//             <TouchableOpacity style={styles.playButton}>
//                <Ionicons name="play-circle" size={40} color={Colors.secondary} />
//             </TouchableOpacity>
//           </View>

//           {/* Thumbnails */}
//           <View style={styles.thumbnailRow}>
//             {thumbnails.map((img, index) => (
//               <TouchableOpacity 
//                 key={index} 
//                 onPress={() => setSelectedImage(img)}
//                 style={[
//                   styles.thumbnailWrapper, 
//                   selectedImage === img && { borderColor: Colors.secondary, borderWidth: 2 }
//                 ]}
//               >
//                 <Image source={img} style={styles.thumbnailImg} />
//               </TouchableOpacity>
//             ))}
//           </View>
//         </View>

//         {/* --- Car Title & Info --- */}
//         <View style={styles.contentSection}>
//           <View style={styles.titleRow}>
//             <Text style={styles.carName}>{car?.name || "Tesla Model 3"}</Text>
//             <View style={styles.ratingRow}>
//                <Text style={styles.ratingText}>4.5/5</Text>
//                <Ionicons name="star" size={18} color={Colors.secondary} />
//             </View>
//           </View>
//           <Text style={styles.priceText}>Rs. {car?.price || "18,00,000.00"}</Text>

//           {/* Description */}
//           <Text style={styles.description}>
//             Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas diam nam eu nulla a. 
//             Vestibulum aliquet facilisi interdum nibh blandit 
//             {!showFullDesc && "..."}
//             {showFullDesc && " more details about this amazing car that provide comfort and speed."}
//             <Text 
//               style={styles.readMore} 
//               onPress={() => setShowFullDesc(!showFullDesc)}
//             >
//               {showFullDesc ? " Show less" : " Read more..."}
//             </Text>
//           </Text>

//           {/* Media Select Buttons */}
//           <View style={styles.mediaRow}>
//             <TouchableOpacity style={styles.mediaBtn}>
//                <Ionicons name="checkbox" size={20} color={Colors.white} />
//                <Text style={styles.mediaBtnText}> Image</Text>
//             </TouchableOpacity>
//             <TouchableOpacity style={styles.mediaBtn}>
//                <Ionicons name="checkbox" size={20} color={Colors.white} />
//                <Text style={styles.mediaBtnText}> Video</Text>
//             </TouchableOpacity>
//             <TouchableOpacity>
//                <Text style={styles.seeAll}>See All</Text>
//             </TouchableOpacity>
//           </View>

//           {/* Details Grid */}
//           <View style={styles.detailsGrid}>
//             <DetailItem icon="speedometer-outline" label="Contact Dealer" />
//             <DetailItem icon="car-outline" label="Car details (Model, year...)" />
//             <DetailItem icon="location-outline" label="Dehli, India" />
//             <DetailItem icon="cash-outline" label="EMI/Loan" />
//           </View>
//         </View>
//       </ScrollView>

//       {/* --- Footer Button --- */}
//       <View style={[styles.footer, { paddingBottom: insets.bottom }]}>
//         <TouchableOpacity style={styles.inquiryBtn} onPress={() => navigation.navigate('ScheduleDateScreen', { car: car })}>
//            <Text style={styles.inquiryText}>Inquiry Now</Text>
//         </TouchableOpacity>
//       </View>
//     </SafeAreaView>
//   );
// };

// // Helper Component for Grid Items
// const DetailItem = ({ icon, label }: any) => (
//   <View style={styles.gridItem}>
//     <Ionicons name={icon} size={22} color={Colors.black} />
//     <Text style={styles.gridLabel} numberOfLines={1}>{label}</Text>
//   </View>
// );

// export default CarDetailScreen;

// const styles = StyleSheet.create({
//   container: { flex: 1, backgroundColor: Colors.white },
//   header: {
//     flexDirection: "row",
//     justifyContent: "space-between",
//     paddingHorizontal: 20,
//     paddingVertical: 15,
//   },
//   imageSection: {
//     paddingHorizontal: 15,
//   },
//   mainImageContainer: {
//     width: "100%",
//     height: 250,
//     borderRadius: 20,
//     overflow: "hidden",
//     position: 'relative'
//   },
//   mainImage: { width: "100%", height: "100%", resizeMode: "cover" },
//   playButton: {
//     position: 'absolute',
//     top: 10,
//     right: 10,
//   },
//   thumbnailRow: {
//     flexDirection: "row",
//     marginTop: 15,
//     justifyContent: "space-between",
//   },
//   thumbnailWrapper: {
//     width: (width - 50) / 3,
//     height: 70,
//     borderRadius: 10,
//     overflow: "hidden",
//     backgroundColor: Colors.cardBg
//   },
//   thumbnailImg: { width: "100%", height: "100%", resizeMode: "cover" },
//   contentSection: {
//     paddingHorizontal: 20,
//     marginTop: 25,
//   },
//   titleRow: {
//     flexDirection: "row",
//     justifyContent: "space-between",
//     alignItems: "center",
//   },
//   carName: { fontFamily: Fonts.bold, fontSize: 24, color: Colors.primary },
//   ratingRow: { flexDirection: "row", alignItems: "center" },
//   ratingText: { fontFamily: Fonts.bold, color: Colors.secondary, marginRight: 5, fontSize: 18 },
//   priceText: {
//     fontFamily: Fonts.medium,
//     color: "gray",
//     fontSize: 16,
//     marginTop: 5,
//   },
//   description: {
//     fontFamily: Fonts.regular,
//     color: Colors.textSecondary,
//     marginTop: 15,
//     lineHeight: 22,
//   },
//   readMore: { color: "#3498db", fontFamily: Fonts.medium },
//   mediaRow: {
//     flexDirection: "row",
//     alignItems: "center",
//     marginTop: 20,
//     justifyContent: 'space-between'
//   },
//   mediaBtn: {
//     flexDirection: "row",
//     alignItems: "center",
//     backgroundColor: Colors.secondary,
//     paddingHorizontal: 15,
//     paddingVertical: 8,
//     borderRadius: 5,
//   },
//   mediaBtnText: { color: Colors.white, fontFamily: Fonts.bold },
//   seeAll: { color: "gray", textDecorationLine: "underline" },
//   detailsGrid: {
//     flexDirection: "row",
//     flexWrap: "wrap",
//     marginTop: 30,
//   },
//   gridItem: {
//     width: "50%",
//     flexDirection: "row",
//     alignItems: "center",
//     marginBottom: 20,
//   },
//   gridLabel: { marginLeft: 10, fontSize: 13, color: Colors.primary, fontFamily: Fonts.medium, flex: 1 },
//   footer: {
//     position: "absolute",
//     justifyContent: 'center',
    
//     bottom: 5,
//     width: "100%",
//     paddingHorizontal: 20,
//   },
//   inquiryBtn: {
//     backgroundColor: Colors.primary,
//     paddingVertical: 18,
//     borderRadius: 12,
//     alignItems: "center",
//   },
//   inquiryText: { color: Colors.white, fontFamily: Fonts.bold, fontSize: 18 },
// });


















// yaha se chhote chhote part me code 

import React, { useState } from "react";
import { ScrollView, StyleSheet, View, TouchableOpacity, Text } from "react-native";
import { SafeAreaView, useSafeAreaInsets } from "react-native-safe-area-context";
import { Colors } from "../../theme/colors";
import { Fonts } from "../../theme/fonts";
import { CAR_MEDIA } from '../../dummydata/dummyData';

// Components Import
import DetailHeader from "../../components/cardetail/DetailHeader";
import ImageGallery from "../../components/cardetail/ImageGallery";
import CarInfoSection from "../../components/cardetail/CarInfoSection";
import FeatureGrid from "../../components/cardetail/FeatureGrid";

const CarDetailScreen = ({ route, navigation }: any) => {
  const car = route.params?.car;
  const insets = useSafeAreaInsets();
  
  const [selectedImage, setSelectedImage] = useState(car?.image);
  const [showFullDesc, setShowFullDesc] = useState(false);
  const thumbnails = [car?.image, car?.image, car?.image];
  const carMedia = [
  { url: car?.image, type: 'image' },
  { url: require('../../assets/video/car_video.mp4'), type: 'video' }, // आपका लोकल वीडियो
  { url: car?.image, type: 'image' },
];

  return (
    <SafeAreaView style={styles.container} edges={['top', 'left', 'right']}>
      <DetailHeader onBack={() => navigation.goBack()} />
      
      {/* ScrollView में paddingBottom बढ़ाया गया है ताकि कंटेंट पूरा ऊपर तक स्क्रॉल हो */}
      <ScrollView 
        showsVerticalScrollIndicator={false} 
        contentContainerStyle={{ paddingBottom: 160 }} 
      >
        {/* <ImageGallery 
          selectedImage={selectedImage} 
          setSelectedImage={setSelectedImage} 
          thumbnails={thumbnails} 
        /> */}
        {/* <ImageGallery thumbnails={carMedia} /> */}
        <ImageGallery media={CAR_MEDIA} />

        <CarInfoSection 
          car={car} 
          showFullDesc={showFullDesc} 
          setShowFullDesc={setShowFullDesc} 
        />
        
        <FeatureGrid />
      </ScrollView>

      {/* --- Updated Footer --- */}
      <View style={[
        styles.footer, 
        { paddingBottom: insets.bottom + 15 } // सिस्टम बार के हिसाब से स्पेस
      ]}>
        <TouchableOpacity 
          style={styles.inquiryBtn} 
          onPress={() => navigation.navigate('ScheduleDateScreen', { car })}
          activeOpacity={0.8}
        >
          <Text style={styles.inquiryText}>Inquiry Now</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default CarDetailScreen;

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: Colors.white },
  
  footer: {
    position: "absolute",
    bottom: 0,
    width: "100%",
    // // --- यहाँ बदलाव किया गया है ---
    paddingHorizontal: 40, // बटन की चौड़ाई कम करने के लिए padding बढ़ाई
    // backgroundColor: 'white',
    // paddingTop: 15, // ऊपर वाले कंटेंट से गैप के लिए
    
    // // हल्का सा शैडो ताकि पता चले कि यह अलग हिस्सा है
    shadowColor: "#000",
    shadowOffset: { width: 0, height: -3 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 10,
  },
  
  inquiryBtn: {
    backgroundColor: Colors.primary,
    paddingVertical: 16,
    borderRadius: 12,
    alignItems: "center",
  },
  
  inquiryText: { 
    color: Colors.white, 
    fontFamily: Fonts.bold, 
    fontSize: 18 
  },
});