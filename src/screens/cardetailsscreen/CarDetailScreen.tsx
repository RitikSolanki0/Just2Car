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

// import React, { useState } from "react";
// import { ScrollView, StyleSheet, View, TouchableOpacity, Text } from "react-native";
// import { SafeAreaView, useSafeAreaInsets } from "react-native-safe-area-context";
// import { Colors } from "../../theme/colors";
// import { Fonts } from "../../theme/fonts";
// import { CAR_MEDIA } from '../../dummydata/dummyData';

// // Components Import
// import DetailHeader from "../../components/cardetail/DetailHeader";
// import ImageGallery from "../../components/cardetail/ImageGallery";
// import CarInfoSection from "../../components/cardetail/CarInfoSection";
// import FeatureGrid from "../../components/cardetail/ImageVideoSelectButton";
// import SimilarCars from "../../components/cardetail/SimilarCars";
// import FeaturesSpecs from "../../components/cardetail/FeaturesSpecs";
// import InspectionReport from "../../components/cardetail/InspectionReport";
// import CarOverview from "../../components/cardetail/CarOverview";

// const CarDetailScreen = ({ route, navigation }: any) => {
//   const { car } = route.params || {};
//   // const car = route.params?.car;
//   const insets = useSafeAreaInsets();

//   const [selectedImage, setSelectedImage] = useState(car?.image);
//   const [showFullDesc, setShowFullDesc] = useState(false);
//   const thumbnails = [car?.image, car?.image, car?.image];
//   const carMedia = [
//   { url: car?.image, type: 'image' },
//   { url: require('../../assets/video/car_video.mp4'), type: 'video' }, // आपका लोकल वीडियो
//   { url: car?.image, type: 'image' },
// ];

//   return (
//     <SafeAreaView style={styles.container} edges={['top', 'left', 'right']}>
//       <DetailHeader onBack={() => navigation.goBack()} />

//       {/* ScrollView में paddingBottom बढ़ाया गया है ताकि कंटेंट पूरा ऊपर तक स्क्रॉल हो */}
//       <ScrollView 
//         showsVerticalScrollIndicator={false} 
//         contentContainerStyle={{ paddingBottom: 160 }} 
//       >
//         {/* <ImageGallery 
//           selectedImage={selectedImage} 
//           setSelectedImage={setSelectedImage} 
//           thumbnails={thumbnails} 
//         /> */}
//         {/* <ImageGallery thumbnails={carMedia} /> */}
//         <ImageGallery media={CAR_MEDIA} car={car} />

//         <CarInfoSection 
//           car={car} 
//           showFullDesc={showFullDesc} 
//           setShowFullDesc={setShowFullDesc} 
//         />

//         <FeatureGrid />

//         <CarOverview car={car} />
//         <InspectionReport />
//         <FeaturesSpecs />
//         <SimilarCars />

//       </ScrollView>

//       {/* --- Updated Footer --- */}
//       <View style={[
//         styles.footer, 
//         { paddingBottom: insets.bottom + 15 } // सिस्टम बार के हिसाब से स्पेस
//       ]}>
//         <TouchableOpacity 
//           style={styles.inquiryBtn} 
//           onPress={() => navigation.navigate('ScheduleDateScreen', { car })}
//           activeOpacity={0.8}
//         >
//           <Text style={styles.inquiryText}>Inquiry Now</Text>
//         </TouchableOpacity>
//       </View>
//     </SafeAreaView>
//   );
// };

// export default CarDetailScreen;

// const styles = StyleSheet.create({
//   container: { flex: 1, backgroundColor: Colors.white },

//   footer: {
//     position: "absolute",
//     bottom: 0,
//     width: "100%",
//     // // --- यहाँ बदलाव किया गया है ---
//     paddingHorizontal: 40, // बटन की चौड़ाई कम करने के लिए padding बढ़ाई
//     // backgroundColor: 'white',
//     // paddingTop: 15, // ऊपर वाले कंटेंट से गैप के लिए

//     // // हल्का सा शैडो ताकि पता चले कि यह अलग हिस्सा है
//     shadowColor: "#000",
//     shadowOffset: { width: 0, height: -3 },
//     shadowOpacity: 0.1,
//     shadowRadius: 5,
//     elevation: 10,
//   },

//   inquiryBtn: {
//     backgroundColor: Colors.primary,
//     paddingVertical: 16,
//     borderRadius: 12,
//     alignItems: "center",
//   },

//   inquiryText: { 
//     color: Colors.white, 
//     fontFamily: Fonts.bold, 
//     fontSize: 18 
//   },
// });

















// import React, { useState, useMemo } from "react";
// import { ScrollView, StyleSheet, View, TouchableOpacity, Text, Dimensions } from "react-native";
// import { SafeAreaView, useSafeAreaInsets } from "react-native-safe-area-context";
// import { Colors } from "../../theme/colors";
// import { Fonts } from "../../theme/fonts";
// import { CAR_MEDIA } from '../../dummydata/dummyData';

// // Components Import
// import DetailHeader from "../../components/cardetail/DetailHeader";
// import ImageGallery from "../../components/cardetail/ImageGallery";
// import CarInfoSection from "../../components/cardetail/CarInfoSection";
// import ImageVideoSelectButton from "../../components/cardetail/ImageVideoSelectButton";
// import SimilarCars from "../../components/cardetail/SimilarCars";
// import FeaturesSpecs from "../../components/cardetail/FeaturesSpecs";
// import InspectionReport from "../../components/cardetail/InspectionReport";
// import CarOverview from "../../components/cardetail/CarOverview";

// const { width } = Dimensions.get("window");

// const CarDetailScreen = ({ route, navigation }: any) => {
//   const { car } = route.params || {};
//   const insets = useSafeAreaInsets();

//   const [showFullDesc, setShowFullDesc] = useState(false);

//   // --- Filter State for Media ---
//   const [showImages, setShowImages] = useState(true);
//   const [showVideos, setShowVideos] = useState(true);

//   // --- Filter Logic ---
//   const filteredMedia = useMemo(() => {
//     return CAR_MEDIA.filter(item => {
//       if (showImages && item.type === 'image') return true;
//       if (showVideos && item.type === 'video') return true;
//       return false;
//     });
//   }, [showImages, showVideos]);

//   return (
//     <SafeAreaView style={styles.container} edges={['top', 'left', 'right']}>
//       {/* 1. Header */}
//       <DetailHeader onBack={() => navigation.goBack()} />

//       <ScrollView 
//         showsVerticalScrollIndicator={false} 
//         contentContainerStyle={{ paddingBottom: 160 }} 
//       >
//         {/* 2. Gallery Section (Conditional) */}
//         {filteredMedia.length > 0 ? (
//             <ImageGallery media={filteredMedia} car={car} />
//         ) : (
//             <View style={styles.emptyGallery}>
//                 <Text style={styles.emptyText}>Select Image or Video to view gallery</Text>
//             </View>
//         )}

//         {/* 3. Info Section */}
//         <CarInfoSection 
//           car={car} 
//           showFullDesc={showFullDesc} 
//           setShowFullDesc={setShowFullDesc} 
//         />

//         {/* 4. Filter Buttons */}
//         <ImageVideoSelectButton 
//             showImages={showImages}
//             setShowImages={setShowImages}
//             showVideos={showVideos}
//             setShowVideos={setShowVideos}
//         />

//         {/* 5. Detailed Car Data */}
//         <CarOverview car={car} />
//         <InspectionReport />
//         <FeaturesSpecs />
//         <SimilarCars />

//       </ScrollView>

//       {/* 6. Sticky Footer */}
//       <View style={[
//         styles.footer, 
//         { paddingBottom: insets.bottom + 15 }
//       ]}>
//         <TouchableOpacity 
//           style={styles.inquiryBtn} 
//           onPress={() => navigation.navigate('ScheduleDateScreen', { car })}
//           activeOpacity={0.8}
//         >
//           <Text style={styles.inquiryText}>Inquiry Now</Text>
//         </TouchableOpacity>
//       </View>
//     </SafeAreaView>
//   );
// };

// export default CarDetailScreen;

// const styles = StyleSheet.create({
//   container: { flex: 1, backgroundColor: Colors.white },

//   emptyGallery: {
//     height: 250,
//     width: width - 40,
//     backgroundColor: '#F3F4F6',
//     borderRadius: 20,
//     alignSelf: 'center',
//     justifyContent: 'center',
//     alignItems: 'center',
//     marginTop: 10,
//   },

//   emptyText: {
//     fontFamily: Fonts.medium,
//     color: 'gray',
//     textAlign: 'center',
//   },

//   footer: {
//     position: "absolute",
//     bottom: 0,
//     width: "100%",
//     paddingHorizontal: 40, 
//     backgroundColor: 'white', // फूटर का बैकग्राउंड वाइट किया ताकि कंटेंट न दिखे
//     paddingTop: 15,

//     // प्रीमियम शैडो ताकि यह अलग दिखे
//     shadowColor: "#000",
//     shadowOffset: { width: 0, height: -4 },
//     shadowOpacity: 0.1,
//     shadowRadius: 8,
//     elevation: 20,
//   },

//   inquiryBtn: {
//     backgroundColor: Colors.primary,
//     paddingVertical: 16,
//     borderRadius: 12,
//     alignItems: "center",
//   },

//   inquiryText: { 
//     color: Colors.white, 
//     fontFamily: Fonts.bold, 
//     fontSize: 18 
//   },
// });


















// import React, { useState, useMemo } from "react";
// import { 
//   ScrollView, 
//   StyleSheet, 
//   View, 
//   TouchableOpacity, 
//   Text, 
//   Dimensions 
// } from "react-native";
// import { SafeAreaView, useSafeAreaInsets } from "react-native-safe-area-context";
// import { Colors } from "../../theme/colors";
// import { Fonts } from "../../theme/fonts";
// import Ionicons from "@react-native-vector-icons/ionicons";
// import { CAR_MEDIA } from '../../dummydata/dummyData';

// // Components Import
// import DetailHeader from "../../components/cardetail/DetailHeader";
// import ImageGallery from "../../components/cardetail/ImageGallery";
// import CarInfoSection from "../../components/cardetail/CarInfoSection";
// import SimilarCars from "../../components/cardetail/SimilarCars";
// import FeaturesSpecs from "../../components/cardetail/FeaturesSpecs";
// import InspectionReport from "../../components/cardetail/InspectionReport";
// import CarOverview from "../../components/cardetail/CarOverview";

// const { width } = Dimensions.get("window");

// const CarDetailScreen = ({ route, navigation }: any) => {
//   // पिछले स्क्रीन से कार का डेटा प्राप्त करें
//   const { car } = route.params || {};
//   const insets = useSafeAreaInsets();

//   // --- Local States ---
//   const [showFullDesc, setShowFullDesc] = useState(false);

//   // इमेज और वीडियो फ़िल्टर करने के लिए स्टेट्स
//   const [showImages, setShowImages] = useState(true);
//   const [showVideos, setShowVideos] = useState(true);

//   // --- Logic: डेटा को फ़िल्टर करना ---
//   // यह लॉजिक सुनिश्चित करता है कि गैलरी में वही दिखे जो यूज़र ने सेलेक्ट किया है
//   const filteredMedia = useMemo(() => {
//     return CAR_MEDIA.filter(item => {
//       if (showImages && item.type === 'image') return true;
//       if (showVideos && item.type === 'video') return true;
//       return false;
//     });
//   }, [showImages, showVideos]);

//   // अगर किसी वजह से डेटा नहीं है तो लोडिंग दिखाएं
//   if (!car) {
//     return (
//       <View style={styles.center}>
//         <Text>Loading car details...</Text>
//       </View>
//     );
//   }

//   return (
//     <SafeAreaView style={styles.container} edges={['top', 'left', 'right']}>
//       {/* 1. कस्टम हेडर (Back & Share) */}
//       <DetailHeader onBack={() => navigation.goBack()} />

//       <ScrollView 
//         showsVerticalScrollIndicator={false} 
//         contentContainerStyle={{ paddingBottom: 160 }} // फूटर के लिए एक्स्ट्रा स्पेस
//       >
//         {/* 2. इमेज गैलरी (Filtered Media के साथ) */}
//         {filteredMedia.length > 0 ? (
//             <ImageGallery media={filteredMedia} car={car} />
//         ) : (
//             <View style={styles.emptyGallery}>
//                 <Ionicons name="images-outline" size={40} color="gray" />
//                 <Text style={styles.emptyText}>Please select Image or Video to view gallery</Text>
//             </View>
//         )}

//         {/* 3. कार इन्फो सेक्शन (अब बटन इसके अंदर डिस्क्रिप्शन के ऊपर हैं) */}
//         <CarInfoSection 
//           car={car} 
//           showFullDesc={showFullDesc} 
//           setShowFullDesc={setShowFullDesc}
//           // फ़िल्टर वाले प्रोप्स यहाँ से पास हो रहे हैं
//           showImages={showImages}
//           setShowImages={setShowImages}
//           showVideos={showVideos}
//           setShowVideos={setShowVideos}
//         />

//         {/* 4. कार के अन्य डिटेल्स (Cars24 Style) */}
//         <CarOverview car={car} />
//         <InspectionReport />
//         <FeaturesSpecs />
//         <SimilarCars />

//       </ScrollView>

//       {/* 5. स्टिकी बॉटम बटन (Inquiry Now) */}
//       <View style={[
//         styles.footer, 
//         { paddingBottom: insets.bottom + 15 } // Safe area support
//       ]}>
//         <TouchableOpacity 
//           style={styles.inquiryBtn} 
//           onPress={() => navigation.navigate('ScheduleDateScreen', { car })}
//           activeOpacity={0.8}
//         >
//           <Text style={styles.inquiryText}>Enquiry Now</Text>
//         </TouchableOpacity>
//       </View>
//     </SafeAreaView>
//   );
// };

// export default CarDetailScreen;

// const styles = StyleSheet.create({
//   container: { 
//     flex: 1, 
//     backgroundColor: Colors.white 
//   },
//   center: { 
//     flex: 1, 
//     justifyContent: 'center', 
//     alignItems: 'center' 
//   },

//   // जब गैलरी में कुछ न हो तब के लिए स्टाइल
//   emptyGallery: {
//     height: 250,
//     width: width - 40,
//     backgroundColor: '#F3F4F6',
//     borderRadius: 20,
//     alignSelf: 'center',
//     justifyContent: 'center',
//     alignItems: 'center',
//     marginTop: 10,
//   },
//   emptyText: {
//     fontFamily: Fonts.medium,
//     color: 'gray',
//     textAlign: 'center',
//     marginTop: 10,
//     paddingHorizontal: 20
//   },

//   // स्टिकी फूटर स्टाइल
//   footer: {
//     position: "absolute",
//     bottom: 0,
//     width: "100%",
//     paddingHorizontal: 40, 
//     backgroundColor: 'white',
//     paddingTop: 15,

//     // प्रीमियम लुक के लिए शैडो
//     shadowColor: "#000",
//     shadowOffset: { width: 0, height: -4 },
//     shadowOpacity: 0.1,
//     shadowRadius: 8,
//     elevation: 20,
//   },

//   inquiryBtn: {
//     backgroundColor: Colors.primary,
//     paddingVertical: 16,
//     borderRadius: 12,
//     alignItems: "center",
//   },

//   inquiryText: { 
//     color: Colors.white, 
//     fontFamily: Fonts.bold, 
//     fontSize: 18 
//   },
// });















// import React, { useState, useMemo } from "react";
// import { 
//   ScrollView, 
//   StyleSheet, 
//   View, 
//   TouchableOpacity, 
//   Text, 
//   Dimensions,
//   Modal, // मोडल के लिए
//   TouchableWithoutFeedback // बाहर क्लिक करने पर बंद करने के लिए
// } from "react-native";
// import { SafeAreaView, useSafeAreaInsets } from "react-native-safe-area-context";
// import Ionicons from "@react-native-vector-icons/ionicons";
// import { Colors } from "../../theme/colors";
// import { Fonts } from "../../theme/fonts";
// import { CAR_MEDIA } from '../../dummydata/dummyData';

// // Components Import
// import DetailHeader from "../../components/cardetail/DetailHeader";
// import ImageGallery from "../../components/cardetail/ImageGallery";
// import CarInfoSection from "../../components/cardetail/CarInfoSection";
// import SimilarCars from "../../components/cardetail/SimilarCars";
// import FeaturesSpecs from "../../components/cardetail/FeaturesSpecs";
// import InspectionReport from "../../components/cardetail/InspectionReport";
// import CarOverview from "../../components/cardetail/CarOverview";

// const { width } = Dimensions.get("window");

// const CarDetailScreen = ({ route, navigation }: any) => {
//   const { car } = route.params || {};
//   const insets = useSafeAreaInsets();

//   // --- Local States ---
//   const [showFullDesc, setShowFullDesc] = useState(false);
//   const [showImages, setShowImages] = useState(true);
//   const [showVideos, setShowVideos] = useState(true);

//   // --- Modal State ---
//   const [isModalVisible, setModalVisible] = useState(false);

//   const filteredMedia = useMemo(() => {
//     return CAR_MEDIA.filter(item => {
//       if (showImages && item.type === 'image') return true;
//       if (showVideos && item.type === 'video') return true;
//       return false;
//     });
//   }, [showImages, showVideos]);

//   if (!car) {
//     return (
//       <View style={styles.center}><Text>Loading car details...</Text></View>
//     );
//   }

//   return (
//     <SafeAreaView style={styles.container} edges={['top', 'left', 'right']}>
//       <DetailHeader onBack={() => navigation.goBack()} />

//       <ScrollView 
//         showsVerticalScrollIndicator={false} 
//         contentContainerStyle={{ paddingBottom: 160 }}
//       >
//         {filteredMedia.length > 0 ? (
//             <ImageGallery media={filteredMedia} car={car} />
//         ) : (
//             <View style={styles.emptyGallery}>
//                 <Ionicons name="images-outline" size={40} color="gray" />
//                 <Text style={styles.emptyText}>Please select Image or Video to view gallery</Text>
//             </View>
//         )}

//         <CarInfoSection 
//           car={car} 
//           showFullDesc={showFullDesc} 
//           setShowFullDesc={setShowFullDesc}
//           showImages={showImages}
//           setShowImages={setShowImages}
//           showVideos={showVideos}
//           setShowVideos={setShowVideos}
//         />

//         <CarOverview car={car} />
//         <InspectionReport />
//         <FeaturesSpecs />
//         <SimilarCars />
//       </ScrollView>

//       {/* --- Inquiry Button (Trigger Modal) --- */}
//       <View style={[styles.footer, { paddingBottom: insets.bottom + 15 }]}>
//         <TouchableOpacity 
//           style={styles.inquiryBtn} 
//           onPress={() => setModalVisible(true)} // यहाँ मोडल ओपन होगा
//           activeOpacity={0.8}
//         >
//           <Text style={styles.inquiryText}>Enquiry Now</Text>
//         </TouchableOpacity>
//       </View>

//       {/* --- Success Modal --- */}
//       <Modal
//         visible={isModalVisible}
//         transparent={true}
//         animationType="fade"
//         onRequestClose={() => setModalVisible(false)}
//       >
//         <TouchableWithoutFeedback onPress={() => setModalVisible(false)}>
//           <View style={styles.modalOverlay}>
//             <TouchableWithoutFeedback>
//               <View style={styles.modalContent}>
//                 {/* Success Icon */}
//                 <View style={styles.iconCircle}>
//                   <Ionicons name="checkmark-circle" size={80} color={Colors.primary} />
//                 </View>

//                 <Text style={styles.modalTitle}>Enquiry Received!</Text>
//                 <Text style={styles.modalSubTitle}>
//                   Thank you for your interest. We will connect with you soon.
//                 </Text>

//                 {/* Close Button */}
//                 <TouchableOpacity 
//                   style={styles.okayBtn} 
//                   onPress={() => setModalVisible(false)}
//                 >
//                   <Text style={styles.okayBtnText}>Great!</Text>
//                 </TouchableOpacity>
//               </View>
//             </TouchableWithoutFeedback>
//           </View>
//         </TouchableWithoutFeedback>
//       </Modal>
//     </SafeAreaView>
//   );
// };

// export default CarDetailScreen;

// const styles = StyleSheet.create({
//   container: { flex: 1, backgroundColor: Colors.white },
//   center: { flex: 1, justifyContent: 'center', alignItems: 'center' },
//   emptyGallery: { height: 250, width: width - 40, backgroundColor: '#F3F4F6', borderRadius: 20, alignSelf: 'center', justifyContent: 'center', alignItems: 'center', marginTop: 10 },
//   emptyText: { fontFamily: Fonts.medium, color: 'gray', textAlign: 'center', marginTop: 10, paddingHorizontal: 20 },

//   footer: { position: "absolute", bottom: 0, width: "100%", paddingHorizontal: 40, backgroundColor: 'white', paddingTop: 15, shadowColor: "#000", shadowOffset: { width: 0, height: -4 }, shadowOpacity: 0.1, shadowRadius: 8, elevation: 20 },
//   inquiryBtn: { backgroundColor: Colors.primary, paddingVertical: 16, borderRadius: 12, alignItems: "center" },
//   inquiryText: { color: Colors.white, fontFamily: Fonts.bold, fontSize: 18 },

//   // --- Modal Styles ---
//   modalOverlay: {
//     flex: 1,
//     backgroundColor: 'rgba(0,0,0,0.6)', // बैकड्रॉप (धुंधला बैकग्राउंड)
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
//   modalContent: {
//     width: width * 0.85,
//     backgroundColor: 'white',
//     borderRadius: 25,
//     padding: 30,
//     alignItems: 'center',
//     elevation: 10,
//   },
//   iconCircle: {
//     marginBottom: 20,
//   },
//   modalTitle: {
//     fontFamily: Fonts.bold,
//     fontSize: 22,
//     color: Colors.black,
//     textAlign: 'center',
//   },
//   modalSubTitle: {
//     fontFamily: Fonts.medium,
//     fontSize: 15,
//     color: 'gray',
//     textAlign: 'center',
//     marginTop: 10,
//     lineHeight: 22,
//   },
//   okayBtn: {
//     marginTop: 30,
//     backgroundColor: Colors.secondary,
//     paddingHorizontal: 40,
//     paddingVertical: 14,
//     borderRadius: 15,
//     width: '100%',
//     alignItems: 'center',
//   },
//   okayBtnText: {
//     color: 'white',
//     fontFamily: Fonts.bold,
//     fontSize: 16,
//   }
// });





















// Chhote part me and api yaha se 

// import React from "react";
// import {
//   ScrollView, View, TouchableOpacity, Text, Modal,
//   TouchableWithoutFeedback, ActivityIndicator
// } from "react-native";
// import { SafeAreaView, useSafeAreaInsets } from "react-native-safe-area-context";
// import Ionicons from "@react-native-vector-icons/ionicons";
// import { styles } from "./CarDetailStyles";
// import { useCarDetailLogic } from "./useCarDetailLogic";
// import { Colors } from "../../theme/colors";

// // Components
// import DetailHeader from "../../components/cardetail/DetailHeader";
// import ImageGallery from "../../components/cardetail/ImageGallery";
// import CarInfoSection from "../../components/cardetail/CarInfoSection";
// import SimilarCars from "../../components/cardetail/SimilarCars";
// import FeaturesSpecs from "../../components/cardetail/FeaturesSpecs";
// import InspectionReport from "../../components/cardetail/InspectionReport";
// import CarOverview from "../../components/cardetail/CarOverview";

// const CarDetailScreen = ({ route, navigation }: any) => {
//   const { car } = route.params || {};
//   const insets = useSafeAreaInsets();

//   // लॉजिक हुक का उपयोग (car._id भेज रहे हैं)
//   const logic = useCarDetailLogic(car?._id);

//   if (logic.carData) {
//     console.log("--- 💎 Rendering CarDetail with: ---");
//     console.log("Name:", logic.carData.carName);
//     console.log("Overview Keys:", Object.keys(logic.carData.overview || {}));
//     console.log("Features Keys:", Object.keys(logic.carData.features || {}));
//     console.log("-----------------------------------");
//   }


//   if (logic.loading) {
//     return (
//       <View style={styles.center}>
//         <ActivityIndicator size="large" color={Colors.primary} />
//       </View>
//     );
//   }

//   const { carData } = logic;

//   return (
//     <SafeAreaView style={styles.container} edges={['top', 'left', 'right']}>
//       <DetailHeader onBack={() => navigation.goBack()} />

//       <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={styles.scrollContent}>

//         {/* गैलरी */}
//         {logic.mediaList.length > 0 ? (
//           <ImageGallery media={logic.mediaList} car={carData} />
//         ) : (
//           <View style={styles.emptyGallery}>
//             <Ionicons name="images-outline" size={40} color="gray" />
//             <Text style={styles.emptyText}>No Media Available</Text>
//           </View>
//         )}

//         {/* इन्फो और फिल्टर बटन्स */}
//         <CarInfoSection
//           car={carData}
//           showFullDesc={logic.showFullDesc}
//           setShowFullDesc={logic.setShowFullDesc}
//           showImages={logic.showImages}
//           setShowImages={logic.setShowImages}
//           showVideos={logic.showVideos}
//           setShowVideos={logic.setShowVideos}
//         />

//         {/* Cars24 Style Sections (API डेटा के साथ) */}
//         <CarOverview car={carData} />
//         <InspectionReport report={carData?.inspectionSummary} parts={carData?.perfectParts} />
//         <FeaturesSpecs features={carData?.features} specs={carData?.specifications} />
//         {/* <SimilarCars /> */}
//         <SimilarCars
//           brandId={carData?.brand?._id ? carData.brand._id : carData?.brand}
//           currentCarId={carData?.carId || carData?._id}
//         />
//       </ScrollView>

//       {/* फूटर */}
//       {/* <View style={[styles.footer, { paddingBottom: insets.bottom + 15 }]}>
//         <TouchableOpacity style={styles.inquiryBtn} onPress={() => logic.setModalVisible(true)}>
//           <Text style={styles.inquiryText}>Enquiry Now</Text>
//         </TouchableOpacity>
//       </View> */}
//       <View style={[styles.footer, { paddingBottom: insets.bottom + 15 }]}>
//         <TouchableOpacity
//           style={[styles.inquiryBtn, logic.inquiryLoading && { opacity: 0.7 }]}
//           onPress={logic.handleSendInquiry} // यहाँ कॉल बदल गया
//           disabled={logic.inquiryLoading} // लोडिंग के दौरान डिसेबल करें
//           activeOpacity={0.8}
//         >
//           {logic.inquiryLoading ? (
//             <ActivityIndicator color="white" />
//           ) : (
//             <Text style={styles.inquiryText}>Enquiry Now</Text>
//           )}
//         </TouchableOpacity>
//       </View>

//       {/* सफलता मोडल */}
//       <Modal visible={logic.isModalVisible} transparent animationType="fade">
//         <TouchableWithoutFeedback onPress={() => logic.setModalVisible(false)}>
//           <View style={styles.modalOverlay}>
//             <View style={styles.modalContent}>
//               <Ionicons name="checkmark-circle" size={80} color={Colors.primary} />
//               <Text style={styles.modalTitle}>Enquiry Received!</Text>
//               <Text style={styles.modalSubTitle}>We will connect with you soon.</Text>
//               <TouchableOpacity style={styles.okayBtn} onPress={() => logic.setModalVisible(false)}>
//                 <Text style={styles.okayBtnText}>Great!</Text>
//               </TouchableOpacity>
//             </View>
//           </View>
//         </TouchableWithoutFeedback>
//       </Modal>
//     </SafeAreaView>
//   );
// };

// export default CarDetailScreen;




















import React, { useState, useMemo } from "react";
import { 
  ScrollView, View, TouchableOpacity, Text, Modal, 
  TouchableWithoutFeedback, ActivityIndicator 
} from "react-native";
import { SafeAreaView, useSafeAreaInsets } from "react-native-safe-area-context";
import Ionicons from "@react-native-vector-icons/ionicons";
import { styles } from "./CarDetailStyles";
import { useCarDetailLogic } from "./useCarDetailLogic";
import { Colors } from "../../theme/colors";

// Components
import DetailHeader from "../../components/cardetail/DetailHeader";
import ImageGallery from "../../components/cardetail/ImageGallery";
import CarInfoSection from "../../components/cardetail/CarInfoSection";
import SimilarCars from "../../components/cardetail/SimilarCars";
import FeaturesSpecs from "../../components/cardetail/FeaturesSpecs";
import InspectionReport from "../../components/cardetail/InspectionReport";
import CarOverview from "../../components/cardetail/CarOverview";

const CarDetailScreen = ({ route, navigation }: any) => {
  // --- 1. यह 'car' होम स्क्रीन की लिस्ट से आया है (इसमें Brand ID है) ---
  const { car } = route.params || {}; 
  const insets = useSafeAreaInsets();
  
  // डिटेल्स फेच करने के लिए हुक
  const logic = useCarDetailLogic(car?._id);

  if (logic.carData) {
    console.log("--- 💎 Rendering CarDetail Page ---");
  }

  if (logic.loading) {
    return (
      <View style={styles.center}>
        <ActivityIndicator size="large" color={Colors.primary} />
      </View>
    );
  }

  const { carData } = logic;

  return (
    <SafeAreaView style={styles.container} edges={['top', 'left', 'right']}>
      <DetailHeader onBack={() => navigation.goBack()} />

      <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={styles.scrollContent}>

        {/* 2. गैलरी */}
        {logic.mediaList.length > 0 ? (
          <ImageGallery media={logic.mediaList} car={carData} />
        ) : (
          <View style={styles.emptyGallery}>
            <Ionicons name="images-outline" size={40} color="gray" />
            <Text style={styles.emptyText}>No Media Available</Text>
          </View>
        )}

        {/* 3. इन्फो सेक्शन */}
        <CarInfoSection
          car={carData}
          showFullDesc={logic.showFullDesc}
          setShowFullDesc={logic.setShowFullDesc}
          showImages={logic.showImages}
          setShowImages={logic.setShowImages}
          showVideos={logic.showVideos}
          setShowVideos={logic.setShowVideos}
        />

        {/* 4. टेक्निकल सेक्शन्स */}
        <CarOverview car={carData} />
        
        <InspectionReport 
          report={carData?.inspectionSummary} 
          parts={carData?.perfectParts} 
          tyre={carData?.tyreCondition}
        />
        
        <FeaturesSpecs 
          features={carData?.features} 
          specs={carData?.specifications} 
        />

        {/* --- 5. 🚀 सिमिलर कार्स (फिक्स: params वाले 'car' से डेटा लें) --- */}
        <SimilarCars
          brandId={car?.brand?._id || car?.brand} 
          currentCarId={car?._id}
        />
        
      </ScrollView>

      {/* 6. इंक्वायरी बटन */}
      {/* <View style={[styles.footer, { paddingBottom: insets.bottom + 15 }]}>
        <TouchableOpacity
          style={[styles.inquiryBtn, logic.inquiryLoading && { opacity: 0.7 }]}
          onPress={logic.handleSendInquiry}
          disabled={logic.inquiryLoading}
          activeOpacity={0.8}
        >
          {logic.inquiryLoading ? (
            <ActivityIndicator color="white" />
          ) : (
            <Text style={styles.inquiryText}>Enquiry Now</Text>
          )}
        </TouchableOpacity>
      </View> */}

      <View style={[styles.footer, { paddingBottom: insets.bottom + 15 }]}>
        {!logic.isInquired ? (
          // Case 1: Inquiry nahi hui hai -> Single "Inquiry Now" Button
          <TouchableOpacity
            style={[styles.inquiryBtn, logic.inquiryLoading && { opacity: 0.7 }]}
            onPress={logic.handleSendInquiry}
            disabled={logic.inquiryLoading}
            activeOpacity={0.8}
          >
            {logic.inquiryLoading ? (
              <ActivityIndicator color="white" />
            ) : (
              <Text style={styles.inquiryText}>Enquiry Now</Text>
            )}
          </TouchableOpacity>
        ) : (
          // Case 2: Inquiry ho chuki hai -> 2 Buttons (Inquired & WhatsApp)
          <View style={styles.buttonRow}>
            {/* INQUIRED BUTTON (Disabled/Grey) */}
            <View style={styles.inquiredStatusBtn}>
               <Ionicons name="checkmark-done" size={20} color={Colors.white} />
               <Text style={styles.inquiredStatusText}>Inquired</Text>
            </View>

            {/* WHATSAPP BUTTON (Green/Secondary) */}
            <TouchableOpacity 
               style={styles.whatsappBtn} 
               onPress={logic.handleWhatsAppConnect}
               activeOpacity={0.8}
            >
              <Ionicons name="logo-whatsapp" size={20} color="white" />
              <Text style={styles.whatsappText}>Connect</Text>
            </TouchableOpacity>
          </View>
        )}
      </View>

      {/* 7. सफलता मोडल */}
      <Modal visible={logic.isModalVisible} transparent animationType="fade">
        <TouchableWithoutFeedback onPress={() => logic.setModalVisible(false)}>
          <View style={styles.modalOverlay}>
            <View style={styles.modalContent}>
              <Ionicons name="checkmark-circle" size={80} color={Colors.primary} />
              <Text style={styles.modalTitle}>Enquiry Received!</Text>
              <Text style={styles.modalSubTitle}>We will connect with you soon.</Text>
              <TouchableOpacity style={styles.okayBtn} onPress={() => logic.setModalVisible(false)}>
                <Text style={styles.okayBtnText}>Great!</Text>
              </TouchableOpacity>
            </View>
          </View>
        </TouchableWithoutFeedback>
      </Modal>
    </SafeAreaView>
  );
};

export default CarDetailScreen;