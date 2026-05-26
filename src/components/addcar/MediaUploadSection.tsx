
// import React from 'react';
// import { View, Text, ScrollView, Image, TouchableOpacity, StyleSheet, Alert, Dimensions } from 'react-native';
// import Ionicons from "@react-native-vector-icons/ionicons";
// import ImagePicker from 'react-native-image-crop-picker';
// import { Fonts } from '../../theme/fonts';
// import { Colors } from '../../theme/colors';

// const { width } = Dimensions.get('window');

// const MediaUploadSection = ({ mediaFiles, setMediaFiles }: any) => {

//   // फाइल्स को इमेज और वीडियो में बाँटना
//   const uploadedImages = mediaFiles.filter((f: any) => f.mime && f.mime.startsWith('image'));
//   const uploadedVideo = mediaFiles.find((f: any) => f.mime && f.mime.startsWith('video'));

//   // --- इमेज अपलोड फंक्शन ---
//   const pickImage = () => {
//     if (uploadedImages.length >= 4) {
//       Alert.alert("Limit Reached", "You can upload maximum 4 images.");
//       return;
//     }

//     ImagePicker.openPicker({
//       multiple: true,
//       mediaType: 'photo', // सिर्फ फोटो के लिए
//       maxFiles: 10 - uploadedImages.length,
//       compressImageQuality: 0.5,
//       compressImageMaxWidth: 1280,
//       compressImageMaxHeight: 720,
//     }).then(results => {
//       // नए और पुराने इमेजेस को जोड़ें, वीडियो को सुरक्षित रखें
//       setMediaFiles([...mediaFiles, ...results]);
//     }).catch(e => console.log(e));
//   };

//   // --- वीडियो अपलोड फंक्शन ---
//   // const pickVideo = () => {
//   //   if (uploadedVideo) {
//   //     Alert.alert("Limit Reached", "You can upload only 1 video.");
//   //     return;
//   //   }

//   //   ImagePicker.openPicker({
//   //     mediaType: 'video', // सिर्फ वीडियो के लिए
//   //   }).then((file: any) => {
//   //     const duration = file.duration / 1000;
//   //     if (duration > 60) {
//   //       Alert.alert("Video Too Long", "You can submit maximum 1 minute video.");
//   //     } else {
//   //       setMediaFiles([...mediaFiles, file]);
//   //     }
//   //   }).catch(e => console.log(e));
//   // };

//   // --- वीडियो अपलोड फंक्शन ---
//   const pickVideo = () => {
//     Alert.alert(
//       "Video Upload Disabled",
//       "Please submit the form without video. You can submit video when app will be live."
//     );
//   };

//   // --- आइटम हटाने का फंक्शन ---
//   const removeFile = (path: string) => {
//     setMediaFiles(mediaFiles.filter((f: any) => f.path !== path));
//   };

//   // --- रेंडर स्लॉट (Slot Renderer) ---
//   const renderImageSlot = (index: number) => {
//     const file = uploadedImages[index];
//     return (
//       <View key={`img-${index}`} style={styles.boxWrapper}>
//         {file ? (
//           <View style={styles.filledBox}>
//             <Image source={{ uri: file.path }} style={styles.media} />
//             <TouchableOpacity style={styles.removeBtn} onPress={() => removeFile(file.path)}>
//               <Ionicons name="close-circle" size={22} color="#EF4444" />
//             </TouchableOpacity>
//           </View>
//         ) : (
//           <TouchableOpacity style={styles.emptyBox} onPress={pickImage}>
//             <Ionicons name="camera-outline" size={28} color="#9CA3AF" />
//             <Text style={styles.boxLabel}>Add Photo</Text>
//           </TouchableOpacity>
//         )}
//       </View>
//     );
//   };

//   const renderVideoSlot = () => {
//     return (
//       <View style={styles.boxWrapper}>
//         {uploadedVideo ? (
//           <View style={[styles.filledBox, { borderColor: Colors.secondary }]}>
//             <Image source={{ uri: uploadedVideo.path }} style={styles.media} />
//             <View style={styles.videoOverlay}>
//               <Ionicons name="play-circle" size={24} color="white" />
//             </View>
//             <TouchableOpacity style={styles.removeBtn} onPress={() => removeFile(uploadedVideo.path)}>
//               <Ionicons name="close-circle" size={22} color="#EF4444" />
//             </TouchableOpacity>
//           </View>
//         ) : (
//           <TouchableOpacity style={[styles.emptyBox, styles.videoBox]} onPress={pickVideo}>
//             <Ionicons name="videocam-outline" size={28} color={Colors.secondary} />
//             <Text style={[styles.boxLabel, { color: Colors.secondary }]}>Add Video</Text>
//           </TouchableOpacity>
//         )}
//       </View>
//     );
//   };

//   return (
//     <View style={styles.container}>
//       <Text style={styles.label}>Photos & Video (Max 5)</Text>

//       <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={styles.scrollContent}>
//         {/* 4 इमेज स्लॉट्स */}
//         {[0, 1, 2, 3].map((i) => renderImageSlot(i))}

//         {/* 1 वीडियो स्लॉट */}
//         {renderVideoSlot()}
//       </ScrollView>

//       {/* गाइडलाइन टेक्स्ट */}
//       <Text style={styles.hint}>* Maximum 4 photos and 1 video (up to 1 min)</Text>
//     </View>
//   );
// };

// export default MediaUploadSection;

// const styles = StyleSheet.create({
//   container: { marginTop: 15 },
//   label: { fontFamily: Fonts.bold, fontSize: 16, color: 'black', marginBottom: 12 },
//   scrollContent: { paddingRight: 20, paddingTop: 10 }, // रिमूव बटन के लिए टॉप पैडिंग

//   boxWrapper: { marginRight: 15 },

//   emptyBox: {
//     width: 90,
//     height: 90,
//     borderRadius: 12,
//     backgroundColor: '#F3F4F6',
//     borderWidth: 1.5,
//     borderColor: '#D1D5DB',
//     borderStyle: 'dashed',
//     justifyContent: 'center',
//     alignItems: 'center'
//   },
//   videoBox: { borderColor: Colors.secondary, backgroundColor: '#FFF7ED' },

//   filledBox: { width: 90, height: 90, borderRadius: 12, overflow: 'visible', position: 'relative' },
//   media: { width: '100%', height: '100%', borderRadius: 12 },

//   videoOverlay: { ...StyleSheet.absoluteFillObject, backgroundColor: 'rgba(0,0,0,0.2)', justifyContent: 'center', alignItems: 'center', borderRadius: 12 },

//   removeBtn: {
//     position: 'absolute',
//     top: -10,
//     right: -10,
//     backgroundColor: 'white',
//     borderRadius: 12,
//     elevation: 3,
//     zIndex: 10
//   },

//   boxLabel: { fontSize: 10, fontFamily: Fonts.medium, color: '#9CA3AF', marginTop: 5 },
//   hint: { fontSize: 11, color: 'gray', fontFamily: Fonts.regular, marginTop: 10, fontStyle: 'italic' },
// });

























import React, { useState } from 'react';
import { View, Text, ScrollView, Image, TouchableOpacity, StyleSheet, Alert, Dimensions, ActivityIndicator } from 'react-native';
import Ionicons from "@react-native-vector-icons/ionicons";
import ImagePicker from 'react-native-image-crop-picker';
import { Video as VideoCompressor } from 'react-native-compressor'; // 🚀 Compression ke liye
import { Fonts } from '../../theme/fonts';
import { Colors } from '../../theme/colors';

const { width } = Dimensions.get('window');

const MediaUploadSection = ({ mediaFiles, setMediaFiles }: any) => {
  const [isCompressing, setIsCompressing] = useState(false);

  // फाइल्स को इमेज और वीडियो में बाँटना
  const uploadedImages = mediaFiles.filter((f: any) => f.mime && f.mime.startsWith('image'));
  const uploadedVideo = mediaFiles.find((f: any) => f.mime && f.mime.startsWith('video'));

  // --- इमेज अपलोड फंक्शन (Max 10) ---
  const pickImage = () => {
    if (uploadedImages.length >= 10) {
      Alert.alert("Limit Reached", "You can upload maximum 10 images.");
      return;
    }

    ImagePicker.openPicker({
      multiple: true,
      mediaType: 'photo',
      maxFiles: 10 - uploadedImages.length,
      compressImageQuality: 0.6,
      compressImageMaxWidth: 1280,
      compressImageMaxHeight: 720,
    }).then(results => {
      setMediaFiles([...mediaFiles, ...results]);
    }).catch(e => console.log(e));
  };

  // --- वीडियो अपलोड और कंप्रेस फंक्शन ---
  // const pickVideo = () => {
  //   if (uploadedVideo) {
  //     Alert.alert("Limit Reached", "You can upload only 1 video.");
  //     return;
  //   }

  //   ImagePicker.openPicker({
  //     mediaType: 'video',
  //   }).then(async (file: any) => {
  //     const duration = file.duration / 1000;
  //     if (duration > 60) {
  //       Alert.alert("Video Too Long", "You can submit maximum 1 minute video.");
  //       return;
  //     }

  //     try {
  //       setIsCompressing(true); // Loader dikhao
  //       console.log("Starting Video Compression...");
        
  //       // 🚀 Video Compression Logic
  //       const compressedUrl = await VideoCompressor.compress(
  //         file.path,
  //         { compressionMethod: 'auto' }
  //       );

  //       const compressedVideo = {
  //         ...file,
  //         path: compressedUrl,
  //       };

  //       setMediaFiles([...mediaFiles, compressedVideo]);
  //       console.log("Video Compressed Successfully");
  //     } catch (err) {
  //       console.log("Compression Error:", err);
  //       setMediaFiles([...mediaFiles, file]); // Error pe original add kar do fallback ke liye
  //     } finally {
  //       setIsCompressing(false);
  //     }
  //   }).catch(e => console.log(e));
  // };

  const pickVideo = () => {
  Alert.alert(
    "Video Upload Disabled",
    "Please submit the form without video. You can submit video when app will be live."
  );
};

  // --- आइटम हटाने का फंक्शन ---
  const removeFile = (path: string) => {
    setMediaFiles(mediaFiles.filter((f: any) => f.path !== path));
  };

  // --- रेंडर स्लॉट (Slot Renderer) ---
  const renderImageSlot = (index: number) => {
    const file = uploadedImages[index];
    return (
      <View key={`img-${index}`} style={styles.boxWrapper}>
        {file ? (
          <View style={styles.filledBox}>
            <Image source={{ uri: file.path }} style={styles.media} />
            <TouchableOpacity style={styles.removeBtn} onPress={() => removeFile(file.path)}>
              <Ionicons name="close-circle" size={22} color="#EF4444" />
            </TouchableOpacity>
          </View>
        ) : (
          <TouchableOpacity style={styles.emptyBox} onPress={pickImage}>
            <Ionicons name="camera-outline" size={28} color="#9CA3AF" />
            <Text style={styles.boxLabel}>Add Photo</Text>
          </TouchableOpacity>
        )}
      </View>
    );
  };

  const renderVideoSlot = () => {
    return (
      <View style={styles.boxWrapper}>
        {isCompressing ? (
           <View style={[styles.emptyBox, styles.videoBox]}>
              <ActivityIndicator color={Colors.secondary} />
              <Text style={styles.boxLabel}>Compressing...</Text>
           </View>
        ) : uploadedVideo ? (
          <View style={[styles.filledBox, { borderColor: Colors.secondary }]}>
            <Image source={{ uri: uploadedVideo.path }} style={styles.media} />
            <View style={styles.videoOverlay}>
              <Ionicons name="play-circle" size={24} color="white" />
            </View>
            <TouchableOpacity style={styles.removeBtn} onPress={() => removeFile(uploadedVideo.path)}>
              <Ionicons name="close-circle" size={22} color="#EF4444" />
            </TouchableOpacity>
          </View>
        ) : (
          <TouchableOpacity style={[styles.emptyBox, styles.videoBox]} onPress={pickVideo}>
            <Ionicons name="videocam-outline" size={28} color={Colors.secondary} />
            <Text style={[styles.boxLabel, { color: Colors.secondary }]}>Add Video</Text>
          </TouchableOpacity>
        )}
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <Text style={styles.label}>Photos & Video (Max 11)</Text>

      <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={styles.scrollContent}>
        {/* 🚀 10 इमेज स्लॉट्स */}
        {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9].map((i) => renderImageSlot(i))}

        {/* 1 वीडियो स्लॉट */}
        {renderVideoSlot()}
      </ScrollView>

      {/* गाइडलाइन टेक्स्ट */}
      <Text style={styles.hint}>* Maximum 10 photos and 1 video (up to 1 min)</Text>
    </View>
  );
};

export default MediaUploadSection;

const styles = StyleSheet.create({
  container: { marginTop: 15 },
  label: { fontFamily: Fonts.bold, fontSize: 16, color: 'black', marginBottom: 12 },
  scrollContent: { paddingRight: 20, paddingTop: 10 }, 

  boxWrapper: { marginRight: 15 },

  emptyBox: {
    width: 90,
    height: 90,
    borderRadius: 12,
    backgroundColor: '#F3F4F6',
    borderWidth: 1.5,
    borderColor: '#D1D5DB',
    borderStyle: 'dashed',
    justifyContent: 'center', 
    alignItems: 'center'
  },
  videoBox: { borderColor: Colors.secondary, backgroundColor: '#FFF7ED' },

  filledBox: { width: 90, height: 90, borderRadius: 12, overflow: 'visible', position: 'relative' },
  media: { width: '100%', height: '100%', borderRadius: 12 },

  videoOverlay: { ...StyleSheet.absoluteFillObject, backgroundColor: 'rgba(0,0,0,0.2)', justifyContent: 'center', alignItems: 'center', borderRadius: 12 },

  removeBtn: {
    position: 'absolute',
    top: -10,
    right: -10,
    backgroundColor: 'white',
    borderRadius: 12,
    elevation: 3,
    zIndex: 10
  },

  boxLabel: { fontSize: 10, fontFamily: Fonts.medium, color: '#9CA3AF', marginTop: 5 },
  hint: { fontSize: 11, color: 'gray', fontFamily: Fonts.regular, marginTop: 10, fontStyle: 'italic' },
});