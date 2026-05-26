
// import React, { useRef, useState } from 'react';
// import { View, Image, TouchableOpacity, StyleSheet, Dimensions, Modal, Text, StatusBar } from 'react-native';
// import Carousel from 'react-native-reanimated-carousel';
// import Video from 'react-native-video';
// import Ionicons from "@react-native-vector-icons/ionicons";
// import { useDispatch, useSelector } from 'react-redux'; // Redux Hooks
// import { Colors } from '../../theme/colors';
// import { Fonts } from '../../theme/fonts';
// import { RootState } from '../../redux/store';
// import { toggleWishlist } from '../../redux/wishlistSlice';
// import { showSuccessToast } from '../../utils/showToast';

// const { width, height: SCREEN_HEIGHT } = Dimensions.get("window");

// // प्रोप्स में अब 'car' भी आएगा
// const ImageGallery = ({ media, car }: { media: any[], car: any }) => {
//   const carouselRef = useRef<any>(null);
//   const modalCarouselRef = useRef<any>(null);
  
//   const [currentIndex, setCurrentIndex] = useState(0);
//   const [isPlaying, setIsPlaying] = useState(false);
//   const [fullScreen, setFullScreen] = useState(false);

//   // --- Redux Logic ---
//   const dispatch = useDispatch();
//   const wishlistItems = useSelector((state: RootState) => state.wishlist.items);
  
//   // चेक करें कि यह कार विशलिस्ट में पहले से है या नहीं
//   // const isFavorite = wishlistItems.some((item: any) => item.id === car.id);
 
  
//   const isFavorite = car 
//     ? wishlistItems.some((item: any) => String(item.id) === String(car.id)) 
//     : false;

//   const handleToggleWishlist = () => {
//     if (!car || !car.id) {
//         console.log("Error: Car data or ID is missing!");
//         return;
//     }

//     dispatch(toggleWishlist(car)); 
    
//     // Toast को पुराने isFavorite के आधार पर दिखाएं
//     if (!isFavorite) {
//       showSuccessToast("Added to Wishlist", `${car.name} added successfully! ❤️`);
//     } else {
//       showSuccessToast("Removed", "Car removed from your wishlist.");
//     }
//   };

//   const renderMediaItem = (item: any, index: number, isInsideModal: boolean) => {
//     const isVideo = item.type === 'video';
//     const isActive = currentIndex === index;

//     if (isVideo) {
//       return (
//         <View style={styles.mediaWrapper}>
//           <Video
//             source={item.url}
//             style={styles.fullMedia}
//             paused={!isActive || !isPlaying}
//             resizeMode={isInsideModal ? "contain" : "cover"}
//             repeat={true}
//             controls={isInsideModal}
//             muted={false}
//           />
//           {!isPlaying && !isInsideModal && (
//             <View style={styles.playOverlay}>
//               <Ionicons name="play-circle" size={60} color="white" />
//             </View>
//           )}
//           {!isInsideModal && (
//             <TouchableOpacity 
//               style={StyleSheet.absoluteFill} 
//               onPress={() => setIsPlaying(!isPlaying)} 
//             />
//           )}
//         </View>
//       );
//     }

//     return (
//       <Image 
//         source={item.url} 
//         style={[styles.fullMedia, { resizeMode: isInsideModal ? 'contain' : 'cover' }]} 
//       />
//     );
//   };

//   return (
//     <View style={styles.container}>
//       {/* --- 1. Main Gallery Carousel --- */}
//       <View style={styles.mainContainerWrapper}>
//         <Carousel
//             ref={carouselRef}
//             loop={false}
//             width={width - 40}
//             height={250}
//             data={media}
//             onSnapToItem={(index) => {
//             setCurrentIndex(index);
//             setIsPlaying(false);
//             }}
//             renderItem={({ item, index }) => (
//             <TouchableOpacity 
//                 activeOpacity={0.9} 
//                 onPress={() => setFullScreen(true)}
//                 style={styles.mainImageContainer}
//             >
//                 {renderMediaItem(item, index, false)}
//             </TouchableOpacity>
//             )}
//         />

//         {/* --- Wishlist Heart Icon Overlay --- */}
//         <TouchableOpacity 
//             style={styles.wishlistBtn} 
//             onPress={handleToggleWishlist}
//             activeOpacity={0.8}
//         >
//             <Ionicons 
//                 name={isFavorite ? "heart" : "heart-outline"} 
//                 size={26} 
//                 color={isFavorite ? "#EF4444" : "white"} 
//             />
//         </TouchableOpacity>
//       </View>

//       {/* --- 2. Thumbnails Row --- */}
//       <View style={styles.thumbnailRow}>
//         {media.map((item, index) => (
//           <TouchableOpacity 
//             key={index} 
//             activeOpacity={0.7}
//             onPress={() => {
//               carouselRef.current?.scrollTo({ index, animated: true });
//               setCurrentIndex(index);
//             }}
//             style={[
//               styles.thumbnailWrapper, 
//               currentIndex === index && styles.activeThumb
//             ]}
//           >
//             <View style={{ flex: 1 }} pointerEvents="none">
//               {item.type === 'video' ? (
//                 <View style={styles.thumbnailImg}>
//                   <Video source={item.url} style={StyleSheet.absoluteFill} paused={true} resizeMode="cover" muted={true} />
//                   <View style={styles.smallPlayIcon}><Ionicons name="play" size={12} color="white" /></View>
//                 </View>
//               ) : (
//                 <Image source={item.url} style={styles.thumbnailImg} />
//               )}
//             </View>
//           </TouchableOpacity>
//         ))}
//       </View>

//       {/* --- 3. Full Screen Modal --- */}
//       <Modal visible={fullScreen} transparent={false} animationType="fade">
//         <StatusBar hidden={fullScreen} />
//         <View style={styles.modalContainer}>
//           <View style={styles.modalHeader}>
//             <Text style={styles.counterText}>{currentIndex + 1} / {media.length}</Text>
//             <TouchableOpacity style={styles.closeBtn} onPress={() => setFullScreen(false)}>
//               <Ionicons name="close" size={30} color="white" />
//             </TouchableOpacity>
//           </View>
          
//           <Carousel
//             ref={modalCarouselRef}
//             defaultIndex={currentIndex}
//             loop={false}
//             width={width}
//             height={SCREEN_HEIGHT}
//             data={media}
//             onSnapToItem={(index) => {
//                 setCurrentIndex(index);
//                 carouselRef.current?.scrollTo({ index, animated: false });
//             }}
//             renderItem={({ item, index }) => (
//               <View style={styles.fullMediaWrapper}>
//                 {renderMediaItem(item, index, true)}
//               </View>
//             )}
//           />
//         </View>
//       </Modal>
//     </View>
//   );
// };

// export default ImageGallery;

// const styles = StyleSheet.create({
//   container: { alignItems: 'center', marginTop: 10 },
//   mainContainerWrapper: { width: width - 40, position: 'relative' },
//   mainImageContainer: { width: "100%", height: 250, borderRadius: 20, overflow: "hidden", backgroundColor: '#000' },
//   mediaWrapper: { flex: 1, justifyContent: 'center', alignItems: 'center' },
//   fullMedia: { width: "100%", height: "100%" },
//   playOverlay: { position: 'absolute', zIndex: 1 },
  
//   wishlistBtn: {
//     position: 'absolute',
//     top: 15,
//     right: 15,
//     zIndex: 10,
//     backgroundColor: 'rgba(0,0,0,0.3)',
//     width: 45,
//     height: 45,
//     borderRadius: 25,
//     justifyContent: 'center',
//     alignItems: 'center',
//   },

//   thumbnailRow: { flexDirection: "row", marginTop: 15, width: width - 40, justifyContent: 'flex-start' },
//   thumbnailWrapper: { width: 70, height: 70, borderRadius: 12, overflow: "hidden", marginRight: 12, backgroundColor: '#eee', borderWidth: 1, borderColor: '#ddd' },
//   activeThumb: { borderColor: Colors.secondary, borderWidth: 2 },
//   thumbnailImg: { width: "100%", height: "100%", resizeMode: "cover" },
//   smallPlayIcon: { position: 'absolute', top: 5, right: 5, backgroundColor: 'rgba(0,0,0,0.5)', borderRadius: 10, padding: 2 },

//   modalContainer: { flex: 1, backgroundColor: 'black' },
//   modalHeader: { position: 'absolute', top: 40, width: '100%', flexDirection: 'row', justifyContent: 'space-between', paddingHorizontal: 20, zIndex: 10, alignItems: 'center' },
//   counterText: { color: 'white', fontSize: 18, fontFamily: Fonts.bold },
//   closeBtn: { backgroundColor: 'rgba(255,255,255,0.2)', padding: 5, borderRadius: 20 },
//   fullMediaWrapper: { flex: 1, justifyContent: 'center' },
// });




















// import React, { useRef, useState, useMemo } from 'react';
// import { View, Image, TouchableOpacity, StyleSheet, Dimensions, Modal, Text, StatusBar } from 'react-native';
// import Carousel from 'react-native-reanimated-carousel';
// import Video from 'react-native-video';
// import Ionicons from "@react-native-vector-icons/ionicons";
// import { useDispatch, useSelector } from 'react-redux';
// import axios from 'axios'; // API कॉल के लिए
// import AsyncStorage from '@react-native-async-storage/async-storage';
// import { Colors } from '../../theme/colors';
// import { Fonts } from '../../theme/fonts';
// import { RootState } from '../../redux/store';
// import { toggleWishlist } from '../../redux/wishlistSlice';
// import { showSuccessToast, showErrorToast } from '../../utils/showToast';
// import { ENDPOINTS } from '../../services/apiConfig'; // एंडपॉइंट्स इम्पोर्ट करें

// const { width, height: SCREEN_HEIGHT } = Dimensions.get("window");

// const ImageGallery = ({ media, car }: { media: any[], car: any }) => {
//   const carouselRef = useRef<any>(null);
//   const modalCarouselRef = useRef<any>(null);
  
//   const [currentIndex, setCurrentIndex] = useState(0);
//   const [isPlaying, setIsPlaying] = useState(false);
//   const [fullScreen, setFullScreen] = useState(false);

//   // --- Redux Logic ---
//   const dispatch = useDispatch();
//   const wishlistItems = useSelector((state: RootState) => state.wishlist.items);
  
  

//    const currentCarId = car?.carId || car?._id || car?.id;

//   // --- 🛠️ फिक्स 2: फेवरेट चेक करने का लॉजिक ---
//   const isFavorite = useMemo(() => {
//     if (!currentCarId) return false;
//     return wishlistItems.some((item: any) => {
//         const itemId = item?.carId || item?._id || item?.id;
//         return String(itemId) === String(currentCarId);
//     });
//   }, [wishlistItems, currentCarId]);

//   // --- 🛠️ फिक्स 3: टॉगल फंक्शन ---
//   const handleToggleWishlist = async () => {
//     if (!currentCarId) {
//         console.log("❌ Error: Car ID is missing in data!", car);
//         return;
//     }

//     try {
//       const token = await AsyncStorage.getItem('userToken');
      
//       console.log("📡 Toggling Wishlist for ID:", currentCarId);

//       const response = await axios.post(
//         ENDPOINTS.TOGGLE_WISHLIST, 
//         { carId: currentCarId }, // API को हमेशा 'carId' ही भेजें
//         { headers: { Authorization: `Bearer ${token}` } }
//       );

//       if (response.data.success) {
//         // Redux में पूरा 'car' ऑब्जेक्ट भेजें
//         dispatch(toggleWishlist(car)); 
        
//         if (response.data.isAdded) {
//           showSuccessToast("Saved", "Car added to your wishlist ❤️");
//         } else {
//           showSuccessToast("Removed", "Car removed from wishlist");
//         }
//       }
//     } catch (error: any) {
//       console.log("❌ Wishlist Toggle API Error:", error.response?.data || error.message);
//       showErrorToast("Error", "Could not update wishlist.");
//     }
//   };

//   // --- रेंडरिंग लॉजिक (पुराना वाला ही) ---
//   const renderMediaItem = (item: any, index: number, isInsideModal: boolean) => {
//     const isVideo = item.type === 'video';
//     const isActive = currentIndex === index;

//     if (isVideo) {
//       return (
//         <View style={styles.mediaWrapper}>
//           <Video
//             source={item.url}
//             style={styles.fullMedia}
//             paused={!isActive || !isPlaying}
//             resizeMode={isInsideModal ? "contain" : "cover"}
//             repeat={true}
//             controls={isInsideModal}
//             muted={false}
//           />
//           {!isPlaying && !isInsideModal && (
//             <View style={styles.playOverlay}>
//               <Ionicons name="play-circle" size={60} color="white" />
//             </View>
//           )}
//           {!isInsideModal && (
//             <TouchableOpacity 
//               style={StyleSheet.absoluteFill} 
//               onPress={() => setIsPlaying(!isPlaying)} 
//             />
//           )}
//         </View>
//       );
//     }
//     return <Image source={item.url} style={[styles.fullMedia, { resizeMode: isInsideModal ? 'contain' : 'cover' }]} />;
//   };

//   return (
//     <View style={styles.container}>
//       <View style={styles.mainContainerWrapper}>
//         <Carousel
//             ref={carouselRef}
//             loop={false}
//             width={width - 40}
//             height={250}
//             data={media}
//             onSnapToItem={(index) => {
//             setCurrentIndex(index);
//             setIsPlaying(false);
//             }}
//             renderItem={({ item, index }) => (
//             <TouchableOpacity 
//                 activeOpacity={0.9} 
//                 onPress={() => setFullScreen(true)}
//                 style={styles.mainImageContainer}
//             >
//                 {renderMediaItem(item, index, false)}
//             </TouchableOpacity>
//             )}
//         />

//         {/* Wishlist Button Overlay */}
//         <TouchableOpacity 
//             style={styles.wishlistBtn} 
//             onPress={handleToggleWishlist} // फिक्स किया हुआ फंक्शन
//             activeOpacity={0.8}
//         >
//             <Ionicons 
//                 name={isFavorite ? "heart" : "heart-outline"} 
//                 size={26} 
//                 color={isFavorite ? "#EF4444" : "white"} 
//             />
//         </TouchableOpacity>
//       </View>

//       {/* Thumbnails Row */}
//       <View style={styles.thumbnailRow}>
//         {media.map((item, index) => (
//           <TouchableOpacity 
//             key={index} 
//             activeOpacity={0.7}
//             onPress={() => {
//               carouselRef.current?.scrollTo({ index, animated: true });
//               setCurrentIndex(index);
//             }}
//             style={[
//               styles.thumbnailWrapper, 
//               currentIndex === index && styles.activeThumb
//             ]}
//           >
//             <View style={{ flex: 1 }} pointerEvents="none">
//               {item.type === 'video' ? (
//                 <View style={styles.thumbnailImg}>
//                   <Video source={item.url} style={StyleSheet.absoluteFill} paused={true} resizeMode="cover" muted={true} />
//                   <View style={styles.smallPlayIcon}><Ionicons name="play" size={12} color="white" /></View>
//                 </View>
//               ) : (
//                 <Image source={item.url} style={styles.thumbnailImg} />
//               )}
//             </View>
//           </TouchableOpacity>
//         ))}
//       </View>

//       {/* Modal View */}
//       <Modal visible={fullScreen} transparent={false} animationType="fade">
//         <StatusBar hidden={fullScreen} />
//         <View style={styles.modalContainer}>
//           <View style={styles.modalHeader}>
//             <Text style={styles.counterText}>{currentIndex + 1} / {media.length}</Text>
//             <TouchableOpacity style={styles.closeBtn} onPress={() => setFullScreen(false)}>
//               <Ionicons name="close" size={30} color="white" />
//             </TouchableOpacity>
//           </View>
//           <Carousel
//             ref={modalCarouselRef}
//             defaultIndex={currentIndex}
//             loop={false}
//             width={width}
//             height={SCREEN_HEIGHT}
//             data={media}
//             onSnapToItem={(index) => {
//                 setCurrentIndex(index);
//                 carouselRef.current?.scrollTo({ index, animated: false });
//             }}
//             renderItem={({ item, index }) => (
//               <View style={styles.fullMediaWrapper}>
//                 {renderMediaItem(item, index, true)}
//               </View>
//             )}
//           />
//         </View>
//       </Modal>
//     </View>
//   );
// };

// export default ImageGallery;

// const styles = StyleSheet.create({
//     container: { alignItems: 'center', marginTop: 10 },
//     mainContainerWrapper: { width: width - 40, position: 'relative' },
//     mainImageContainer: { width: "100%", height: 250, borderRadius: 20, overflow: "hidden", backgroundColor: '#000' },
//     mediaWrapper: { flex: 1, justifyContent: 'center', alignItems: 'center' },
//     fullMedia: { width: "100%", height: "100%" },
//     playOverlay: { position: 'absolute', zIndex: 1 },
//     wishlistBtn: { position: 'absolute', top: 15, right: 15, zIndex: 10, backgroundColor: 'rgba(0,0,0,0.3)', width: 45, height: 45, borderRadius: 25, justifyContent: 'center', alignItems: 'center' },
//     thumbnailRow: { flexDirection: "row", marginTop: 15, width: width - 40, justifyContent: 'flex-start' },
//     thumbnailWrapper: { width: 70, height: 70, borderRadius: 12, overflow: "hidden", marginRight: 12, backgroundColor: '#eee', borderWidth: 1, borderColor: '#ddd' },
//     activeThumb: { borderColor: Colors.secondary, borderWidth: 2 },
//     thumbnailImg: { width: "100%", height: "100%", resizeMode: "cover" },
//     smallPlayIcon: { position: 'absolute', top: 5, right: 5, backgroundColor: 'rgba(0,0,0,0.5)', borderRadius: 10, padding: 2 },
//     modalContainer: { flex: 1, backgroundColor: 'black' },
//     modalHeader: { position: 'absolute', top: 40, width: '100%', flexDirection: 'row', justifyContent: 'space-between', paddingHorizontal: 20, zIndex: 10, alignItems: 'center' },
//     counterText: { color: 'white', fontSize: 18, fontFamily: Fonts.bold },
//     closeBtn: { backgroundColor: 'rgba(255,255,255,0.2)', padding: 5, borderRadius: 20 },
//     fullMediaWrapper: { flex: 1, justifyContent: 'center' },
// });

















import React, { useRef, useState, useMemo } from 'react';
import { View, Image, TouchableOpacity, StyleSheet, Dimensions, Modal, Text, StatusBar } from 'react-native';
import Carousel from 'react-native-reanimated-carousel';
import Video from 'react-native-video';
import Ionicons from "@react-native-vector-icons/ionicons";
import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Colors } from '../../theme/colors';
import { Fonts } from '../../theme/fonts';
import { RootState } from '../../redux/store';
import { toggleWishlist } from '../../redux/wishlistSlice';
import { showSuccessToast, showErrorToast } from '../../utils/showToast';
import { ENDPOINTS } from '../../services/apiConfig';

const { width, height: SCREEN_HEIGHT } = Dimensions.get("window");

const ImageGallery = ({ media, car }: { media: any[], car: any }) => {
  const carouselRef = useRef<any>(null);
  const modalCarouselRef = useRef<any>(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [fullScreen, setFullScreen] = useState(false);

  const dispatch = useDispatch();
  const wishlistItems = useSelector((state: RootState) => state.wishlist.items);
  
  // --- 🚀 यूनिवर्सल आईडी निकालें ---
  const currentCarId = car?.carId || car?._id || car?.id;

  // --- 🚀 फेवरेट चेक लॉजिक ---
  const isFavorite = useMemo(() => {
    if (!currentCarId) return false;
    return wishlistItems.some((item: any) => {
        const itemId = item?.carId || item?._id || item?.id;
        return String(itemId) === String(currentCarId);
    });
  }, [wishlistItems, currentCarId]);

  const handleToggleWishlist = async () => {
    if (!currentCarId) {
        console.log("❌ Error: Car ID is missing!");
        return;
    }

    try {
      const token = await AsyncStorage.getItem('userToken');
      const response = await axios.post(
        ENDPOINTS.TOGGLE_WISHLIST, 
        { carId: currentCarId }, 
        { headers: { Authorization: `Bearer ${token}` } }
      );

      if (response.data.success) {
        dispatch(toggleWishlist(car)); 
        showSuccessToast(response.data.isAdded ? "Saved" : "Removed", response.data.message);
      }
    } catch (error: any) {
      showErrorToast("Error", "Could not update wishlist.");
    }
  };

  const renderMediaItem = (item: any, index: number, isInsideModal: boolean) => {
    const isVideo = item.type === 'video';
    const isActive = currentIndex === index;

    if (isVideo) {
      return (
        <View style={styles.mediaWrapper}>
          <Video source={item.url} style={styles.fullMedia} paused={!isActive || !isPlaying} resizeMode={isInsideModal ? "contain" : "cover"} repeat={true} controls={isInsideModal} muted={false} />
          {!isPlaying && !isInsideModal && (
            <View style={styles.playOverlay}><Ionicons name="play-circle" size={60} color="white" /></View>
          )}
          {!isInsideModal && (
            <TouchableOpacity style={StyleSheet.absoluteFill} onPress={() => setIsPlaying(!isPlaying)} />
          )}
        </View>
      );
    }
    return <Image source={item.url} style={[styles.fullMedia, { resizeMode: isInsideModal ? 'contain' : 'cover' }]} />;
  };

  return (
    <View style={styles.container}>
      <View style={styles.mainContainerWrapper}>
        <Carousel ref={carouselRef} loop={false} width={width - 40} height={250} data={media}
            onSnapToItem={(index) => { setCurrentIndex(index); setIsPlaying(false); }}
            renderItem={({ item, index }) => (
            <TouchableOpacity activeOpacity={0.9} onPress={() => setFullScreen(true)} style={styles.mainImageContainer}>
                {renderMediaItem(item, index, false)}
            </TouchableOpacity>
            )}
        />
        <TouchableOpacity style={styles.wishlistBtn} onPress={handleToggleWishlist} activeOpacity={0.8}>
            <Ionicons name={isFavorite ? "heart" : "heart-outline"} size={26} color={isFavorite ? "#EF4444" : "white"} />
        </TouchableOpacity>
      </View>

      <View style={styles.thumbnailRow}>
        {media.map((item, index) => (
          <TouchableOpacity key={index} activeOpacity={0.7}
            onPress={() => { carouselRef.current?.scrollTo({ index, animated: true }); setCurrentIndex(index); }}
            style={[styles.thumbnailWrapper, currentIndex === index && styles.activeThumb]}
          >
            <View style={{ flex: 1 }} pointerEvents="none">
              {item.type === 'video' ? (
                <View style={styles.thumbnailImg}>
                  <Video source={item.url} style={StyleSheet.absoluteFill} paused={true} resizeMode="cover" muted={true} />
                  <View style={styles.smallPlayIcon}><Ionicons name="play" size={12} color="white" /></View>
                </View>
              ) : (
                <Image source={item.url} style={styles.thumbnailImg} />
              )}
            </View>
          </TouchableOpacity>
        ))}
      </View>

      <Modal visible={fullScreen} transparent={false} animationType="fade" onRequestClose={() => setFullScreen(false)} >
        <StatusBar hidden={fullScreen} />
        <View style={styles.modalContainer}>
          <View style={styles.modalHeader}>
            <Text style={styles.counterText}>{currentIndex + 1} / {media.length}</Text>
            <TouchableOpacity style={styles.closeBtn} onPress={() => setFullScreen(false)}>
              <Ionicons name="close" size={30} color="white" />
            </TouchableOpacity>
          </View>
          <Carousel ref={modalCarouselRef} defaultIndex={currentIndex} loop={false} width={width} height={SCREEN_HEIGHT} data={media}
            onSnapToItem={(index) => { setCurrentIndex(index); carouselRef.current?.scrollTo({ index, animated: false }); }}
            renderItem={({ item, index }) => (
              <View style={styles.fullMediaWrapper}>{renderMediaItem(item, index, true)}</View>
            )}
          />
        </View>
      </Modal>
    </View>
  );
};

export default ImageGallery;

const styles = StyleSheet.create({
    container: { alignItems: 'center', marginTop: 10 },
    mainContainerWrapper: { width: width - 40, position: 'relative' },
    mainImageContainer: { width: "100%", height: 250, borderRadius: 20, overflow: "hidden", backgroundColor: '#000' },
    mediaWrapper: { flex: 1, justifyContent: 'center', alignItems: 'center' },
    fullMedia: { width: "100%", height: "100%" },
    playOverlay: { position: 'absolute', zIndex: 1 },
    wishlistBtn: { position: 'absolute', top: 15, right: 15, zIndex: 10, backgroundColor: 'rgba(0,0,0,0.3)', width: 45, height: 45, borderRadius: 25, justifyContent: 'center', alignItems: 'center' },
    thumbnailRow: { flexDirection: "row", marginTop: 15, width: width - 40, justifyContent: 'flex-start' },
    thumbnailWrapper: { width: 70, height: 70, borderRadius: 12, overflow: "hidden", marginRight: 12, backgroundColor: '#eee', borderWidth: 1, borderColor: '#ddd' },
    activeThumb: { borderColor: Colors.secondary, borderWidth: 2 },
    thumbnailImg: { width: "100%", height: "100%", resizeMode: "cover" },
    smallPlayIcon: { position: 'absolute', top: 5, right: 5, backgroundColor: 'rgba(0,0,0,0.5)', borderRadius: 10, padding: 2 },
    modalContainer: { flex: 1, backgroundColor: 'black' },
    modalHeader: { position: 'absolute', top: 40, width: '100%', flexDirection: 'row', justifyContent: 'space-between', paddingHorizontal: 20, zIndex: 10, alignItems: 'center' },
    counterText: { color: 'white', fontSize: 18, fontFamily: Fonts.bold },
    closeBtn: { backgroundColor: 'rgba(255,255,255,0.2)', padding: 5, borderRadius: 20 },
    fullMediaWrapper: { flex: 1, justifyContent: 'center' },
});