// import React from 'react';
// import { View, Image, TouchableOpacity, StyleSheet, Dimensions } from 'react-native';
// import Ionicons from "@react-native-vector-icons/ionicons";
// import { Colors } from '../../theme/colors';

// const { width } = Dimensions.get("window");

// const ImageGallery = ({ selectedImage, setSelectedImage, thumbnails }: any) => (
//   <View style={styles.imageSection}>
//     <View style={styles.mainImageContainer}>
//       <Image source={selectedImage} style={styles.mainImage} />
//       <TouchableOpacity style={styles.playButton}>
//         <Ionicons name="play-circle" size={40} color={Colors.secondary} />
//       </TouchableOpacity>
//     </View>

//     <View style={styles.thumbnailRow}>
//       {thumbnails.map((img: any, index: number) => (
//         <TouchableOpacity 
//           key={index} 
//           onPress={() => setSelectedImage(img)}
//           style={[
//             styles.thumbnailWrapper, 
//             selectedImage === img && { borderColor: Colors.secondary, borderWidth: 2 }
//           ]}
//         >
//           <Image source={img} style={styles.thumbnailImg} />
//         </TouchableOpacity>
//       ))}
//     </View>
//   </View>
// );

// export default ImageGallery;

// const styles = StyleSheet.create({
//   imageSection: { paddingHorizontal: 15 },
//   mainImageContainer: { width: "100%", height: 250, borderRadius: 20, overflow: "hidden", position: 'relative' },
//   mainImage: { width: "100%", height: "100%", resizeMode: "cover" },
//   playButton: { position: 'absolute', top: 10, right: 10 },
//   thumbnailRow: { flexDirection: "row", marginTop: 15, justifyContent: "space-between" },
//   thumbnailWrapper: { width: (width - 50) / 3, height: 70, borderRadius: 10, overflow: "hidden", backgroundColor: '#f0f0f0' },
//   thumbnailImg: { width: "100%", height: "100%", resizeMode: "cover" },
// });















// import React, { useRef, useState } from 'react';
// import { View, Image, TouchableOpacity, StyleSheet, Dimensions } from 'react-native';
// import Carousel from 'react-native-reanimated-carousel';
// import Video from 'react-native-video'; // वीडियो प्लेयर
// import Ionicons from "@react-native-vector-icons/ionicons";
// import { Colors } from '../../theme/colors';

// const { width } = Dimensions.get("window");

// const ImageGallery = ({ thumbnails }: any) => {
//   const carouselRef = useRef<any>(null);
//   const [currentIndex, setCurrentIndex] = useState(0);
//   const [isPlaying, setIsPlaying] = useState(false);

//   // --- स्लाइडर के आइटम्स को रेंडर करने का फंक्शन ---
//   const renderItem = ({ item }: any) => {
//     const isVideo = item.type === 'video';

//     return (
//       <View style={styles.mainImageContainer}>
//         {isVideo ? (
//           <View style={styles.videoWrapper}>
//             <Video
//               source={item.url}
//               style={styles.mainImage}
//               paused={!isPlaying} // अगर isPlaying true है तभी चलेगा
//               resizeMode="cover"
//               repeat={true}
//             />
//             {/* वीडियो प्ले/पॉज़ बटन */}
//             <TouchableOpacity 
//               style={styles.playOverlay} 
//               onPress={() => setIsPlaying(!isPlaying)}
//             >
//               <Ionicons 
//                 name={isPlaying ? "pause-circle" : "play-circle"} 
//                 size={60} 
//                 color="rgba(255,255,255,0.8)" 
//               />
//             </TouchableOpacity>
//           </View>
//         ) : (
//           <Image source={item.url} style={styles.mainImage} />
//         )}
//       </View>
//     );
//   };

//   return (
//     <View style={styles.imageSection}>
//       {/* --- Main Smooth Carousel --- */}
//       <Carousel
//         ref={carouselRef}
//         loop={false}
//         width={width - 30}
//         height={250}
//         autoPlay={false}
//         data={thumbnails} // अब thumbnails एक array of objects होगा {url, type}
//         scrollAnimationDuration={600}
//         onSnapToItem={(index) => {
//             setCurrentIndex(index);
//             setIsPlaying(false); // स्लाइड बदलने पर वीडियो पॉज़ कर दें
//         }}
//         renderItem={renderItem}
//       />

//       {/* --- Sync Thumbnails --- */}
//       <View style={styles.thumbnailRow}>
//         {thumbnails.map((img: any, index: number) => (
//           <TouchableOpacity 
//             key={index} 
//             onPress={() => {
//                 carouselRef.current?.scrollTo({ index, animated: true });
//                 setCurrentIndex(index);
//             }}
//             style={[
//               styles.thumbnailWrapper, 
//               currentIndex === index && { borderColor: Colors.secondary, borderWidth: 2 }
//             ]}
//           >
//             <Image source={img.url} style={styles.thumbnailImg} />
//             {img.type === 'video' && (
//                 <View style={styles.smallVideoIcon}>
//                    <Ionicons name="play" size={12} color="white" />
//                 </View>
//             )}
//           </TouchableOpacity>
//         ))}
//       </View>
//     </View>
//   );
// };

// export default ImageGallery;

// const styles = StyleSheet.create({
//   imageSection: { paddingHorizontal: 15, marginTop: 10 },
//   mainImageContainer: { width: "100%", height: 250, borderRadius: 20, overflow: "hidden" },
//   mainImage: { width: "100%", height: "100%", resizeMode: "cover" },
//   videoWrapper: { flex: 1, position: 'relative' },
//   playOverlay: { 
//     ...StyleSheet.absoluteFillObject, 
//     justifyContent: 'center', 
//     alignItems: 'center',
//     backgroundColor: 'rgba(0,0,0,0.1)' 
//   },
//   thumbnailRow: { flexDirection: "row", marginTop: 15, justifyContent: "flex-start" },
//   thumbnailWrapper: { 
//     width: (width - 60) / 4, 
//     height: 70, 
//     borderRadius: 12, 
//     overflow: "hidden", 
//     backgroundColor: '#f0f0f0',
//     marginRight: 10,
//     position: 'relative'
//   },
//   thumbnailImg: { width: "100%", height: "100%", resizeMode: "cover" },
//   smallVideoIcon: {
//     position: 'absolute',
//     top: 5,
//     right: 5,
//     backgroundColor: 'rgba(0,0,0,0.5)',
//     borderRadius: 10,
//     padding: 2
//   }
// });















// import React, { useRef, useState } from 'react';
// import { View, Image, TouchableOpacity, StyleSheet, Dimensions, Modal, Text } from 'react-native';
// import Carousel from 'react-native-reanimated-carousel';
// import Video from 'react-native-video';
// import Ionicons from "@react-native-vector-icons/ionicons";
// import { Colors } from '../../theme/colors';

// const { width, height: SCREEN_HEIGHT } = Dimensions.get("window");

// const ImageGallery = ({ media }: { media: any[] }) => {
//   const carouselRef = useRef<any>(null);
//   const [currentIndex, setCurrentIndex] = useState(0);
//   const [isPlaying, setIsPlaying] = useState(false);
//   const [fullScreen, setFullScreen] = useState(false);

//   // --- स्लाइडर आइटम रेंडरर ---
//   const renderItem = ({ item, index }: any) => {
//     const isVideo = item.type === 'video';

//     return (
//       <TouchableOpacity 
//         activeOpacity={0.9} 
//         onPress={() => setFullScreen(true)} // क्लिक करने पर फुल स्क्रीन
//         style={styles.mainImageContainer}
//       >
//         {isVideo ? (
//           <View style={styles.videoWrapper}>
//             <Video
//               source={item.url}
//               style={styles.mainImage}
//               paused={currentIndex !== index || !isPlaying} // सिर्फ एक्टिव स्लाइड पर प्ले होगा
//               resizeMode="cover"
//               repeat={true}
//             />
//             {!isPlaying && (
//               <View style={styles.playOverlay}>
//                 <Ionicons name="play-circle" size={60} color="white" />
//               </View>
//             )}
//             <TouchableOpacity 
//               style={StyleSheet.absoluteFill} 
//               onPress={() => setIsPlaying(!isPlaying)} 
//             />
//           </View>
//         ) : (
//           <Image source={item.url} style={styles.mainImage} />
//         )}
//       </TouchableOpacity>
//     );
//   };

//   return (
//     <View style={styles.container}>
//       {/* --- Main Carousel --- */}
//       <Carousel
//         ref={carouselRef}
//         loop={false}
//         width={width - 40}
//         height={250}
//         data={media}
//         onSnapToItem={(index) => {
//           setCurrentIndex(index);
//           setIsPlaying(false);
//         }}
//         renderItem={renderItem}
//       />

//       {/* --- Thumbnails Row (Fix: Saare thumbnails dikhenge) --- */}
//       <View style={styles.thumbnailRow}>
//         {media.map((item, index) => (
//           <TouchableOpacity 
//             key={index} 
//             onPress={() => {
//               carouselRef.current?.scrollTo({ index, animated: true });
//               setCurrentIndex(index);
//             }}
//             style={[
//               styles.thumbnailWrapper, 
//               currentIndex === index && styles.activeThumb
//             ]}
//           >
//             {/* वीडियो है तो पोस्टर इमेज दिखाओ, वरना असली इमेज */}
//             <Image 
//                 source={item.type === 'video' ? item.poster : item.url} 
//                 style={styles.thumbnailImg} 
//             />
//             {item.type === 'video' && (
//                <View style={styles.smallPlayIcon}>
//                   <Ionicons name="play" size={12} color="white" />
//                </View>
//             )}
//           </TouchableOpacity>
//         ))}
//       </View>

//       {/* --- Full Screen Modal --- */}
//       <Modal visible={fullScreen} transparent={false} animationType="fade">
//         <View style={styles.modalContainer}>
//           <TouchableOpacity 
//             style={styles.closeBtn} 
//             onPress={() => setFullScreen(false)}
//           >
//             <Ionicons name="close" size={35} color="white" />
//           </TouchableOpacity>
          
//           <View style={styles.fullMediaContent}>
//             {media[currentIndex].type === 'video' ? (
//               <Video
//                 source={media[currentIndex].url}
//                 style={styles.fullVideo}
//                 controls={true} // फुल स्क्रीन में कंट्रोल्स ऑन
//                 resizeMode="contain"
//               />
//             ) : (
//               <Image source={media[currentIndex].url} style={styles.fullImage} />
//             )}
//           </View>
//         </View>
//       </Modal>
//     </View>
//   );
// };

// export default ImageGallery;

// const styles = StyleSheet.create({
//   container: { alignItems: 'center', marginTop: 10 },
//   mainImageContainer: { width: width - 40, height: 250, borderRadius: 20, overflow: "hidden", backgroundColor: '#000' },
//   mainImage: { width: "100%", height: "100%", resizeMode: "cover" },
//   videoWrapper: { flex: 1, justifyContent: 'center', alignItems: 'center' },
//   playOverlay: { position: 'absolute', zIndex: 1 },
  
//   thumbnailRow: { flexDirection: "row", marginTop: 15, width: width - 40, justifyContent: 'flex-start' },
//   thumbnailWrapper: { width: 70, height: 70, borderRadius: 12, overflow: "hidden", marginRight: 12, backgroundColor: '#eee', borderWidth: 1, borderColor: '#ddd' },
//   activeThumb: { borderColor: Colors.secondary, borderWidth: 2 },
//   thumbnailImg: { width: "100%", height: "100%", resizeMode: "cover" },
//   smallPlayIcon: { position: 'absolute', top: 5, right: 5, backgroundColor: 'rgba(0,0,0,0.5)', borderRadius: 10, padding: 2 },

//   // Modal Styles
//   modalContainer: { flex: 1, backgroundColor: 'black', justifyContent: 'center' },
//   closeBtn: { position: 'absolute', top: 50, right: 20, zIndex: 10 },
//   fullMediaContent: { width: width, height: SCREEN_HEIGHT * 0.7 },
//   fullVideo: { width: '100%', height: '100%' },
//   fullImage: { width: '100%', height: '100%', resizeMode: 'contain' },
// });




















// import React, { useRef, useState } from 'react';
// import { View, Image, TouchableOpacity, StyleSheet, Dimensions, Modal, Text } from 'react-native';
// import Carousel from 'react-native-reanimated-carousel';
// import Video from 'react-native-video';
// import Ionicons from "@react-native-vector-icons/ionicons";
// import { Colors } from '../../theme/colors';

// const { width, height: SCREEN_HEIGHT } = Dimensions.get("window");

// const ImageGallery = ({ media }: { media: any[] }) => {
//   const carouselRef = useRef<any>(null);
//   const [currentIndex, setCurrentIndex] = useState(0);
//   const [isPlaying, setIsPlaying] = useState(false);
//   const [fullScreen, setFullScreen] = useState(false);

//   const renderItem = ({ item, index }: any) => {
//     const isVideo = item.type === 'video';

//     return (
//       <TouchableOpacity 
//         activeOpacity={0.9} 
//         onPress={() => setFullScreen(true)}
//         style={styles.mainImageContainer}
//       >
//         {isVideo ? (
//           <View style={styles.videoWrapper}>
//             <Video
//               source={item.url}
//               style={styles.mainImage}
//               paused={currentIndex !== index || !isPlaying} 
//               resizeMode="cover"
//               repeat={true}
//               muted={false}
//             />
//             {!isPlaying && (
//               <View style={styles.playOverlay}>
//                 <Ionicons name="play-circle" size={60} color="white" />
//               </View>
//             )}
//             {/* यह अदृश्य बटन वीडियो प्ले/पॉज़ हैंडल करेगा */}
//             <TouchableOpacity 
//               style={StyleSheet.absoluteFill} 
//               onPress={() => setIsPlaying(!isPlaying)} 
//             />
//           </View>
//         ) : (
//           <Image source={item.url} style={styles.mainImage} />
//         )}
//       </TouchableOpacity>
//     );
//   };

//   return (
//     <View style={styles.container}>
//       {/* --- Main Carousel --- */}
//       <Carousel
//         ref={carouselRef}
//         loop={false}
//         width={width - 40}
//         height={250}
//         data={media}
//         onSnapToItem={(index) => {
//           setCurrentIndex(index);
//           setIsPlaying(false);
//         }}
//         renderItem={renderItem}
//       />

//       {/* --- Thumbnails Row (Fix: Clickable and Dynamic) --- */}
//       <View style={styles.thumbnailRow}>
//         {media.map((item, index) => (
//           <TouchableOpacity 
//             key={index} 
//             activeOpacity={0.7}
//             onPress={() => {
//               // यहाँ से कैरोसेल कंट्रोल होता है
//               carouselRef.current?.scrollTo({ index, animated: true });
//               setCurrentIndex(index);
//             }}
//             style={[
//               styles.thumbnailWrapper, 
//               currentIndex === index && styles.activeThumb
//             ]}
//           >
//             {/* pointerEvents="none" बहुत ज़रूरी है ताकि क्लिक TouchableOpacity पर लगे */}
//             <View style={{ flex: 1 }} pointerEvents="none">
//               {item.type === 'video' ? (
//                 <View style={styles.thumbnailImg}>
//                   <Video 
//                     source={item.url} 
//                     style={StyleSheet.absoluteFill} 
//                     paused={true} 
//                     resizeMode="cover"
//                     muted={true}
//                   />
//                   <View style={styles.smallPlayIcon}>
//                     <Ionicons name="play" size={12} color="white" />
//                   </View>
//                 </View>
//               ) : (
//                 <Image source={item.url} style={styles.thumbnailImg} />
//               )}
//             </View>
//           </TouchableOpacity>
//         ))}
//       </View>

//       {/* --- Full Screen Modal --- */}
//       <Modal visible={fullScreen} transparent={false} animationType="fade">
//         <View style={styles.modalContainer}>
//           <TouchableOpacity 
//             style={styles.closeBtn} 
//             onPress={() => setFullScreen(false)}
//           >
//             <Ionicons name="close" size={35} color="white" />
//           </TouchableOpacity>
          
//           <View style={styles.fullMediaContent}>
//             {media[currentIndex] && media[currentIndex].type === 'video' ? (
//               <Video
//                 source={media[currentIndex].url}
//                 style={styles.fullVideo}
//                 controls={true}
//                 resizeMode="contain"
//               />
//             ) : (
//               media[currentIndex] && <Image source={media[currentIndex].url} style={styles.fullImage} />
//             )}
//           </View>
//         </View>
//       </Modal>
//     </View>
//   );
// };

// export default ImageGallery;

// const styles = StyleSheet.create({
//   container: { alignItems: 'center', marginTop: 10 },
//   mainImageContainer: { width: width - 40, height: 250, borderRadius: 20, overflow: "hidden", backgroundColor: '#000' },
//   mainImage: { width: "100%", height: "100%", resizeMode: "cover" },
//   videoWrapper: { flex: 1, justifyContent: 'center', alignItems: 'center' },
//   playOverlay: { position: 'absolute', zIndex: 1 },
  
//   thumbnailRow: { flexDirection: "row", marginTop: 15, width: width - 40, justifyContent: 'flex-start' },
//   thumbnailWrapper: { width: 70, height: 70, borderRadius: 12, overflow: "hidden", marginRight: 12, backgroundColor: '#eee', borderWidth: 1, borderColor: '#ddd' },
//   activeThumb: { borderColor: Colors.secondary, borderWidth: 2 },
//   thumbnailImg: { width: "100%", height: "100%", resizeMode: "cover" },
//   smallPlayIcon: { position: 'absolute', top: 5, right: 5, backgroundColor: 'rgba(0,0,0,0.5)', borderRadius: 10, padding: 2 },

//   modalContainer: { flex: 1, backgroundColor: 'black', justifyContent: 'center' },
//   closeBtn: { position: 'absolute', top: 50, right: 20, zIndex: 10 },
//   fullMediaContent: { width: width, height: SCREEN_HEIGHT * 0.7 },
//   fullVideo: { width: '100%', height: '100%' },
//   fullImage: { width: '100%', height: '100%', resizeMode: 'contain' },
// });





















import React, { useRef, useState } from 'react';
import { View, Image, TouchableOpacity, StyleSheet, Dimensions, Modal, Text, StatusBar } from 'react-native';
import Carousel from 'react-native-reanimated-carousel';
import Video from 'react-native-video';
import Ionicons from "@react-native-vector-icons/ionicons";
import { Colors } from '../../theme/colors';
import { Fonts } from '../../theme/fonts';

const { width, height: SCREEN_HEIGHT } = Dimensions.get("window");

const ImageGallery = ({ media }: { media: any[] }) => {
  const carouselRef = useRef<any>(null);
  const modalCarouselRef = useRef<any>(null); // फुल स्क्रीन के लिए अलग Ref
  
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [fullScreen, setFullScreen] = useState(false);

  // --- गैलरी और फुल स्क्रीन दोनों के लिए रेंडर फंक्शन ---
  const renderMediaItem = (item: any, index: number, isInsideModal: boolean) => {
    const isVideo = item.type === 'video';
    const isActive = currentIndex === index;

    if (isVideo) {
      return (
        <View style={styles.mediaWrapper}>
          <Video
            source={item.url}
            style={styles.fullMedia}
            paused={!isActive || !isPlaying} // सिर्फ एक्टिव स्लाइड पर प्ले होगा
            resizeMode={isInsideModal ? "contain" : "cover"}
            repeat={true}
            controls={isInsideModal} // फुल स्क्रीन में कंट्रोल्स दिखाएँ
            muted={false}
          />
          {!isPlaying && !isInsideModal && (
            <View style={styles.playOverlay}>
              <Ionicons name="play-circle" size={60} color="white" />
            </View>
          )}
          {/* वीडियो प्ले/पॉज़ टच (सिर्फ छोटी गैलरी में) */}
          {!isInsideModal && (
            <TouchableOpacity 
              style={StyleSheet.absoluteFill} 
              onPress={() => setIsPlaying(!isPlaying)} 
            />
          )}
        </View>
      );
    }

    return (
      <Image 
        source={item.url} 
        style={[styles.fullMedia, { resizeMode: isInsideModal ? 'contain' : 'cover' }]} 
      />
    );
  };

  return (
    <View style={styles.container}>
      {/* --- 1. Main Gallery Carousel --- */}
      <Carousel
        ref={carouselRef}
        loop={false}
        width={width - 40}
        height={250}
        data={media}
        onSnapToItem={(index) => {
          setCurrentIndex(index);
          setIsPlaying(false);
        }}
        renderItem={({ item, index }) => (
          <TouchableOpacity 
            activeOpacity={0.9} 
            onPress={() => setFullScreen(true)}
            style={styles.mainImageContainer}
          >
            {renderMediaItem(item, index, false)}
          </TouchableOpacity>
        )}
      />

      {/* --- 2. Thumbnails Row --- */}
      <View style={styles.thumbnailRow}>
        {media.map((item, index) => (
          <TouchableOpacity 
            key={index} 
            activeOpacity={0.7}
            onPress={() => {
              carouselRef.current?.scrollTo({ index, animated: true });
              setCurrentIndex(index);
            }}
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

      {/* --- 3. Full Screen Modal with Swipe & Counter --- */}
      <Modal visible={fullScreen} transparent={false} animationType="fade">
        <StatusBar hidden={fullScreen} />
        <View style={styles.modalContainer}>
          
          {/* Modal Header: Close & Counter */}
          <View style={styles.modalHeader}>
            <Text style={styles.counterText}>{currentIndex + 1} / {media.length}</Text>
            <TouchableOpacity 
              style={styles.closeBtn} 
              onPress={() => setFullScreen(false)}
            >
              <Ionicons name="close" size={30} color="white" />
            </TouchableOpacity>
          </View>
          
          {/* Full Screen Carousel */}
          <Carousel
            ref={modalCarouselRef}
            defaultIndex={currentIndex} // जहाँ से गैलरी छोड़ी थी वहीं से शुरू होगा
            loop={false}
            width={width}
            height={SCREEN_HEIGHT}
            data={media}
            onSnapToItem={(index) => {
                setCurrentIndex(index); // दोनों इंडेक्स को सिंक में रखें
                carouselRef.current?.scrollTo({ index, animated: false });
            }}
            renderItem={({ item, index }) => (
              <View style={styles.fullMediaWrapper}>
                {renderMediaItem(item, index, true)}
              </View>
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
  mainImageContainer: { width: width - 40, height: 250, borderRadius: 20, overflow: "hidden", backgroundColor: '#000' },
  mediaWrapper: { flex: 1, justifyContent: 'center', alignItems: 'center' },
  fullMedia: { width: "100%", height: "100%" },
  playOverlay: { position: 'absolute', zIndex: 1 },
  
  thumbnailRow: { flexDirection: "row", marginTop: 15, width: width - 40, justifyContent: 'flex-start' },
  thumbnailWrapper: { width: 70, height: 70, borderRadius: 12, overflow: "hidden", marginRight: 12, backgroundColor: '#eee', borderWidth: 1, borderColor: '#ddd' },
  activeThumb: { borderColor: Colors.secondary, borderWidth: 2 },
  thumbnailImg: { width: "100%", height: "100%", resizeMode: "cover" },
  smallPlayIcon: { position: 'absolute', top: 5, right: 5, backgroundColor: 'rgba(0,0,0,0.5)', borderRadius: 10, padding: 2 },

  // Modal Styles
  modalContainer: { flex: 1, backgroundColor: 'black' },
  modalHeader: { 
    position: 'absolute', 
    top: 40, 
    width: '100%', 
    flexDirection: 'row', 
    justifyContent: 'space-between', 
    paddingHorizontal: 20, 
    zIndex: 10,
    alignItems: 'center'
  },
  counterText: { color: 'white', fontSize: 18, fontFamily: Fonts.bold },
  closeBtn: { backgroundColor: 'rgba(255,255,255,0.2)', padding: 5, borderRadius: 20 },
  fullMediaWrapper: { flex: 1, justifyContent: 'center' },
});