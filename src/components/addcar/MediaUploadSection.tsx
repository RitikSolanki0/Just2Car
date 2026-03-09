// import React from 'react';
// import { View, Text, ScrollView, Image, TouchableOpacity, StyleSheet } from 'react-native';
// import Ionicons from "@react-native-vector-icons/ionicons";
// import { Fonts } from '../../theme/fonts';
// import { Colors } from '../../theme/colors';

// const MediaUploadSection = ({ mediaFiles, onUpload, onRemove }: any) => (
//   <View>
//     {mediaFiles.length > 0 && (
//       <View style={styles.previewContainer}>
//         <ScrollView horizontal showsHorizontalScrollIndicator={false}>
//           {mediaFiles.map((item: any, index: number) => (
//             <View key={index} style={styles.previewBox}>
//               <Image source={{ uri: item.path }} style={styles.previewImage} />
//               {item.mime && item.mime.startsWith('video') && (
//                 <View style={styles.videoOverlay}>
//                   <Ionicons name="play-circle" size={24} color="white" />
//                 </View>
//               )}
//               <TouchableOpacity style={styles.removeBtn} onPress={() => onRemove(index)}>
//                 <Ionicons name="close-circle" size={22} color="red" />
//               </TouchableOpacity>
//             </View>
//           ))}
//         </ScrollView>
//       </View>
//     )}

//     <TouchableOpacity style={styles.uploadBtn} onPress={onUpload}>
//       <Ionicons name="camera-outline" size={28} color="black" />
//       <Text style={styles.uploadText}>
//         {mediaFiles.length > 0 ? `Added ${mediaFiles.length}/5 files` : "Upload images/Video"}
//       </Text>
//     </TouchableOpacity>
//   </View>
// );

// export default MediaUploadSection;

// const styles = StyleSheet.create({
//   previewContainer: { marginTop: 15, marginBottom: 5 },
//   previewBox: { width: 85, height: 85, borderRadius: 12, marginRight: 12, position: 'relative', backgroundColor: '#eee' },
//   previewImage: { width: '100%', height: '100%', borderRadius: 12 },
//   videoOverlay: { ...StyleSheet.absoluteFillObject, backgroundColor: 'rgba(0,0,0,0.2)', justifyContent: 'center', alignItems: 'center', borderRadius: 12 },
//   removeBtn: { position: 'absolute', top: -8, right: -8, backgroundColor: 'white', borderRadius: 12 },
//   uploadBtn: { flexDirection: "row", alignItems: "center", justifyContent: "center", marginTop: 25, marginBottom: 15 },
//   uploadText: { marginLeft: 10, fontFamily: Fonts.bold, fontSize: 15, textDecorationLine: "underline", color: Colors.black },
// });

















// import React from 'react';
// import { View, Text, ScrollView, Image, TouchableOpacity, StyleSheet } from 'react-native';
// import Ionicons from "@react-native-vector-icons/ionicons";
// import { Fonts } from '../../theme/fonts';
// import { Colors } from '../../theme/colors';

// const MediaUploadSection = ({ mediaFiles, onUpload, onRemove }: any) => {
//   const MAX_LIMIT = 5;

//   return (
//     <View style={styles.container}>
//       <Text style={styles.label}>Upload images/Video</Text>

//       <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.scrollArea}>
//         {/* --- 1. Existing Media Previews --- */}
//         {mediaFiles.map((item: any, index: number) => (
//           <View key={index} style={styles.previewBoxWrapper}>
//             <View style={styles.previewBox}>
//               <Image source={{ uri: item.path }} style={styles.previewImage} />
              
//               {/* Checkbox Indicator (Top Left) */}
//               <View style={styles.checkboxIndicator}>
//                 <Ionicons name="checkmark-circle" size={18} color={Colors.secondary} />
//               </View>

//               {/* Video Overlay */}
//               {item.mime && item.mime.startsWith('video') && (
//                 <View style={styles.videoOverlay}>
//                   <Ionicons name="play-circle" size={24} color="white" />
//                 </View>
//               )}
//             </View>

//             {/* Remove Button (Top Right) - अब कटेगा नहीं */}
//             <TouchableOpacity 
//                 style={styles.removeBtn} 
//                 onPress={() => onRemove(index)}
//                 activeOpacity={0.8}
//             >
//               <Ionicons name="close-circle" size={24} color="#EF4444" />
//             </TouchableOpacity>
//           </View>
//         ))}

//         {/* --- 2. Add More Button (Only if limit not reached) --- */}
//         {mediaFiles.length < MAX_LIMIT && (
//           <TouchableOpacity 
//             style={styles.addMoreBtn} 
//             onPress={onUpload}
//             activeOpacity={0.7}
//           >
//             <View style={styles.dashedCircle}>
//               <Ionicons name="add" size={30} color="gray" />
//             </View>
//             <Text style={styles.addMoreText}>Add More</Text>
//           </TouchableOpacity>
//         )}
//       </ScrollView>

//       {/* अगर कोई फाइल नहीं है तो बड़ा अपलोड बटन दिखेगा (शुरुआत के लिए) */}
//       {mediaFiles.length === 0 && (
//         <TouchableOpacity style={styles.initialUploadBtn} onPress={onUpload}>
//           <Ionicons name="camera-outline" size={32} color="black" />
//           <Text style={styles.uploadText}>Upload images/Video</Text>
//         </TouchableOpacity>
//       )}

//       {mediaFiles.length > 0 && (
//         <Text style={styles.countInfo}>{mediaFiles.length} / {MAX_LIMIT} files added</Text>
//       )}
//     </View>
//   );
// };

// export default MediaUploadSection;

// const styles = StyleSheet.create({
//   container: { marginTop: 15 },
//   label: { fontFamily: Fonts.bold, fontSize: 16, color: Colors.black, marginBottom: 12 },
  
//   scrollArea: {
//     flexDirection: 'row',
//     paddingVertical: 10, // क्लोज बटन को जगह देने के लिए
//   },

//   // प्रीव्यू बॉक्स के बाहर का घेरा (मार्जिन और पैडिंग के लिए)
//   previewBoxWrapper: {
//     marginRight: 18,
//     position: 'relative',
//     paddingTop: 5, // क्लोज बटन के लिए ऊपर स्पेस
//     paddingRight: 5, // क्लोज बटन के लिए राइट स्पेस
//   },

//   previewBox: {
//     width: 90,
//     height: 90,
//     borderRadius: 12,
//     backgroundColor: '#F3F4F6',
//     elevation: 3,
//     shadowColor: '#000',
//     shadowOpacity: 0.1,
//     shadowRadius: 5,
//     overflow: 'hidden',
//     borderWidth: 1,
//     borderColor: '#E5E7EB',
//   },

//   previewImage: {
//     width: '100%',
//     height: '100%',
//   },

//   checkboxIndicator: {
//     position: 'absolute',
//     top: 5,
//     left: 5,
//     backgroundColor: 'white',
//     borderRadius: 10,
//     zIndex: 2,
//   },

//   videoOverlay: {
//     ...StyleSheet.absoluteFillObject,
//     backgroundColor: 'rgba(0,0,0,0.2)',
//     justifyContent: 'center',
//     alignItems: 'center',
//   },

//   // रिमूव बटन फिक्स
//   removeBtn: {
//     position: 'absolute',
//     top: -5, 
//     right: -5,
//     zIndex: 10,
//     backgroundColor: 'white',
//     borderRadius: 15,
//   },

//   // Add More Button स्टाइल
//   addMoreBtn: {
//     width: 90,
//     height: 90,
//     borderRadius: 12,
//     borderWidth: 1,
//     borderColor: '#D1D5DB',
//     borderStyle: 'dashed', // डैश्ड बॉर्डर प्रीमियम लगती है
//     justifyContent: 'center',
//     alignItems: 'center',
//     backgroundColor: '#F9FAFB',
//     marginTop: 5,
//   },
//   dashedCircle: {
//     width: 40,
//     height: 40,
//     borderRadius: 20,
//     borderWidth: 1,
//     borderColor: '#D1D5DB',
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
//   addMoreText: {
//     fontSize: 10,
//     fontFamily: Fonts.medium,
//     color: 'gray',
//     marginTop: 5,
//   },

//   // शुरुआती अपलोड बटन
//   initialUploadBtn: {
//     flexDirection: "row",
//     alignItems: "center",
//     justifyContent: "center",
//     marginTop: 10,
//     paddingVertical: 20,
//     backgroundColor: '#F2F4F7',
//     borderRadius: 12,
//     borderWidth: 1,
//     borderColor: '#E5E7EB',
//     borderStyle: 'dashed',
//   },
//   uploadText: {
//     marginLeft: 10,
//     fontFamily: Fonts.bold,
//     fontSize: 15,
//     textDecorationLine: "underline",
//     color: Colors.black,
//   },

//   countInfo: {
//     fontSize: 11,
//     fontFamily: Fonts.medium,
//     color: 'gray',
//     marginTop: 10,
//     textAlign: 'right',
//   }
// });













// import React from 'react';
// import { View, Text, ScrollView, Image, TouchableOpacity, StyleSheet } from 'react-native';
// import Ionicons from "@react-native-vector-icons/ionicons";
// import { Fonts } from '../../theme/fonts';
// import { Colors } from '../../theme/colors';

// const MediaUploadSection = ({ mediaFiles, onUpload, onRemove }: any) => {
//   const MAX_LIMIT = 5;

//   return (
//     <View style={styles.container}>
//       {/* टाइटल */}
//       <Text style={styles.label}>Photos / Videos</Text>

//       {/* --- Horizontal Scroll Area --- */}
//       <View style={styles.scrollWrapper}>
//         <ScrollView 
//           horizontal 
//           showsHorizontalScrollIndicator={false} 
//           contentContainerStyle={styles.scrollContent}
//         >
//           {/* 1. पहले से एडेड फाइल्स दिखाएँ */}
//           {mediaFiles.map((item: any, index: number) => (
//             <View key={index} style={styles.previewBox}>
//               <Image source={{ uri: item.path }} style={styles.previewImage} />
              
//               {/* वीडियो के लिए ओवरले */}
//               {item.mime && item.mime.startsWith('video') && (
//                 <View style={styles.videoOverlay}>
//                   <Ionicons name="play-circle" size={24} color="white" />
//                 </View>
//               )}

//               {/* Remove Button (फिक्स: अब कटेगा नहीं) */}
//               <TouchableOpacity 
//                 style={styles.removeBtn} 
//                 onPress={() => onRemove(index)}
//                 activeOpacity={0.8}
//               >
//                 <Ionicons name="close-circle" size={22} color="#EF4444" />
//               </TouchableOpacity>
//             </View>
//           ))}

//           {/* 2. "Add More" बटन (सिर्फ तब दिखेगा जब कम से कम 1 फोटो हो और 5 से कम हो) */}
//           {mediaFiles.length > 0 && mediaFiles.length < MAX_LIMIT && (
//             <TouchableOpacity 
//               style={styles.addMoreBox} 
//               onPress={onUpload}
//               activeOpacity={0.6}
//             >
//               <Ionicons name="add" size={30} color="#9CA3AF" />
//               <Text style={styles.addMoreText}>Add More</Text>
//             </TouchableOpacity>
//           )}
//         </ScrollView>
//       </View>

//       {/* 3. मुख्य अपलोड बटन (हमेशा दिखेगा, जैसा आपने माँगा था) */}
//       <TouchableOpacity 
//         style={styles.uploadBtn} 
//         onPress={onUpload}
//         disabled={mediaFiles.length >= MAX_LIMIT}
//       >
//         <Ionicons 
//             name="camera-outline" 
//             size={28} 
//             color={mediaFiles.length >= MAX_LIMIT ? "gray" : "black"} 
//         />
//         <Text style={[
//             styles.uploadText, 
//             { color: mediaFiles.length >= MAX_LIMIT ? "gray" : "black" }
//         ]}>
//           {mediaFiles.length === 0 
//             ? "Upload images/Video" 
//             : `Uploaded ${mediaFiles.length}/${MAX_LIMIT} files`}
//         </Text>
//       </TouchableOpacity>
//     </View>
//   );
// };

// export default MediaUploadSection;

// const styles = StyleSheet.create({
//   container: { marginTop: 10 },
//   label: { 
//     fontFamily: Fonts.bold, 
//     fontSize: 16, 
//     color: Colors.black, 
//     marginTop: 18, 
//     marginBottom: 10 
//   },
//   scrollWrapper: {
//     height: 110, // थंबनेल और रिमूव बटन के लिए पर्याप्त हाइट
//   },
//   scrollContent: {
//     paddingLeft: 2,
//     paddingRight: 20,
//     alignItems: 'center',
//   },
//   previewBox: { 
//     width: 85, 
//     height: 85, 
//     borderRadius: 12, 
//     marginRight: 15, 
//     position: 'relative', 
//     backgroundColor: '#eee',
//     // शैडो ताकि रिमूव बटन साफ़ दिखे
//     elevation: 2,
//   },
//   previewImage: { width: '100%', height: '100%', borderRadius: 12 },
//   videoOverlay: { 
//     ...StyleSheet.absoluteFillObject, 
//     backgroundColor: 'rgba(0,0,0,0.2)', 
//     justifyContent: 'center', 
//     alignItems: 'center', 
//     borderRadius: 12 
//   },
//   removeBtn: { 
//     position: 'absolute', 
//     top: -10, // थोड़ा और ऊपर किया
//     right: -10, // थोड़ा और बाहर किया
//     backgroundColor: 'white', 
//     borderRadius: 12,
//     zIndex: 10,
//     // बटन को दिखने के लिए शैडो
//     shadowColor: "#000",
//     shadowOffset: { width: 0, height: 1 },
//     shadowOpacity: 0.2,
//     shadowRadius: 1.41,
//     elevation: 4,
//   },

//   // --- Add More Box Style ---
//   addMoreBox: {
//     width: 85,
//     height: 85,
//     borderRadius: 12,
//     borderWidth: 2,
//     borderColor: '#D1D5DB',
//     borderStyle: 'dashed', // डैश्ड बॉर्डर प्रोफेशनल लगती है
//     justifyContent: 'center',
//     alignItems: 'center',
//     backgroundColor: '#F9FAFB',
//   },
//   addMoreText: {
//     fontSize: 10,
//     fontFamily: Fonts.medium,
//     color: '#9CA3AF',
//     marginTop: 2,
//   },

//   uploadBtn: { 
//     flexDirection: "row", 
//     alignItems: "center", 
//     justifyContent: "center", 
//     marginTop: 15, 
//     marginBottom: 15 
//   },
//   uploadText: { 
//     marginLeft: 10, 
//     fontFamily: Fonts.bold, 
//     fontSize: 15, 
//     textDecorationLine: "underline", 
//   },
// });















// import React from 'react';
// import { View, Text, ScrollView, Image, TouchableOpacity, StyleSheet } from 'react-native';
// import Ionicons from "@react-native-vector-icons/ionicons";
// import { Fonts } from '../../theme/fonts';
// import { Colors } from '../../theme/colors';

// const MediaUploadSection = ({ mediaFiles, onUpload, onRemove }: any) => {
//   const MAX_LIMIT = 5;
//   const hasMedia = mediaFiles.length > 0;

//   return (
//     <View style={styles.container}>
//       {/* टाइटल */}
//       {/* <Text style={styles.label}>Photos / Videos</Text> */}

//       {/* --- Horizontal Scroll Area (सिर्फ तब दिखेगा जब इमेज हो) --- */}
//       {hasMedia && (
//         <View style={styles.scrollWrapper}>
//           <ScrollView 
//             horizontal 
//             showsHorizontalScrollIndicator={false} 
//             contentContainerStyle={styles.scrollContent}
//           >
//             {/* 1. अपलोडेड फाइल्स */}
//             {mediaFiles.map((item: any, index: number) => (
//               <View key={index} style={styles.previewBox}>
//                 <Image source={{ uri: item.path }} style={styles.previewImage} />
                
//                 {item.mime && item.mime.startsWith('video') && (
//                   <View style={styles.videoOverlay}>
//                     <Ionicons name="play-circle" size={24} color="white" />
//                   </View>
//                 )}

//                 {/* Remove Button (बिल्कुल कोने पर, बिना कटे) */}
//                 <TouchableOpacity 
//                   style={styles.removeBtn} 
//                   onPress={() => onRemove(index)}
//                   activeOpacity={0.8}
//                 >
//                   <Ionicons name="close-circle" size={24} color="#EF4444" />
//                 </TouchableOpacity>
//               </View>
//             ))}

//             {/* 2. "Add More" बटन (सिर्फ तब जब कम से कम 1 फोटो हो और लिमिट से कम हो) */}
//             {mediaFiles.length < MAX_LIMIT && (
//               <TouchableOpacity 
//                 style={styles.addMoreBox} 
//                 onPress={onUpload}
//                 activeOpacity={0.6}
//               >
//                 <Ionicons name="add-circle-outline" size={32} color="#9CA3AF" />
//                 <Text style={styles.addMoreText}>Add More</Text>
//               </TouchableOpacity>
//             )}
//           </ScrollView>
//         </View>
//       )}

//       {/* 3. मुख्य अपलोड बटन (गैप फिक्स के साथ) */}
//       <TouchableOpacity 
//         style={[styles.uploadBtn, !hasMedia && { marginTop: 0 }]} // अगर इमेज नहीं है तो टॉप मार्जिन 0
//         onPress={onUpload}
//         disabled={mediaFiles.length >= MAX_LIMIT}
//       >
//         <Ionicons 
//             name="camera-outline" 
//             size={28} 
//             color={mediaFiles.length >= MAX_LIMIT ? "gray" : "black"} 
//         />
//         <Text style={[
//             styles.uploadText, 
//             { color: mediaFiles.length >= MAX_LIMIT ? "gray" : "black" }
//         ]}>
//           {mediaFiles.length === 0 
//             ? "Upload images/Video" 
//             : `Uploaded ${mediaFiles.length}/${MAX_LIMIT} files`}
//         </Text>
//       </TouchableOpacity>
//     </View>
//   );
// };

// export default MediaUploadSection;

// const styles = StyleSheet.create({
//   container: { marginTop: 20 },
//   label: { 
//     fontFamily: Fonts.bold, 
//     fontSize: 16, 
//     color: Colors.black, 
//     marginTop: 18, 
//     marginBottom: 10 
//   },
//   scrollWrapper: {
//     marginBottom: 15, // इमेज के नीचे थोड़ा स्पेस
//     height: 100, // थंबनेल के लिए फिक्स हाइट
//   },
//   scrollContent: {
//     paddingHorizontal: 5,
//     alignItems: 'center',
//     paddingTop: 10, // रिमूव बटन को जगह देने के लिए ऊपर से पैडिंग
//   },
//   previewBox: { 
//     width: 80, 
//     height: 80, 
//     borderRadius: 12, 
//     marginRight: 20, 
//     position: 'relative', 
//     backgroundColor: '#eee',
//   },
//   previewImage: { width: '100%', height: '100%', borderRadius: 12 },
//   videoOverlay: { 
//     ...StyleSheet.absoluteFillObject, 
//     backgroundColor: 'rgba(0,0,0,0.2)', 
//     justifyContent: 'center', 
//     alignItems: 'center', 
//     borderRadius: 12 
//   },
//   removeBtn: { 
//     position: 'absolute', 
//     top: -12, // इमेज के बाहर निकालने के लिए
//     right: -12, 
//     backgroundColor: 'white', 
//     borderRadius: 15,
//     zIndex: 10,
//     elevation: 4,
//     shadowColor: "#000",
//     shadowOpacity: 0.2,
//     shadowRadius: 2,
//   },
//   addMoreBox: {
//     width: 80,
//     height: 80,
//     borderRadius: 12,
//     borderWidth: 1.5,
//     borderColor: '#D1D5DB',
//     borderStyle: 'dashed', 
//     justifyContent: 'center',
//     alignItems: 'center',
//     backgroundColor: '#F9FAFB',
//   },
//   addMoreText: {
//     fontSize: 10,
//     fontFamily: Fonts.medium,
//     color: '#9CA3AF',
//   },
//   uploadBtn: { 
//     flexDirection: "row", 
//     alignItems: "center", 
//     justifyContent: "center", 
//     marginTop: 5, 
//     marginBottom: 10 
//   },
//   uploadText: { 
//     marginLeft: 10, 
//     fontFamily: Fonts.bold, 
//     fontSize: 15, 
//     textDecorationLine: "underline", 
//   },
// });












import React from 'react';
import { View, Text, ScrollView, Image, TouchableOpacity, StyleSheet, Alert, Dimensions } from 'react-native';
import Ionicons from "@react-native-vector-icons/ionicons";
import ImagePicker from 'react-native-image-crop-picker';
import { Fonts } from '../../theme/fonts';
import { Colors } from '../../theme/colors';

const { width } = Dimensions.get('window');

const MediaUploadSection = ({ mediaFiles, setMediaFiles }: any) => {
  
  // फाइल्स को इमेज और वीडियो में बाँटना
  const uploadedImages = mediaFiles.filter((f: any) => f.mime && f.mime.startsWith('image'));
  const uploadedVideo = mediaFiles.find((f: any) => f.mime && f.mime.startsWith('video'));

  // --- इमेज अपलोड फंक्शन ---
  const pickImage = () => {
    if (uploadedImages.length >= 4) {
      Alert.alert("Limit Reached", "You can upload maximum 4 images.");
      return;
    }

    ImagePicker.openPicker({
      multiple: true,
      mediaType: 'photo', // सिर्फ फोटो के लिए
      maxFiles: 4 - uploadedImages.length,
    }).then(results => {
      // नए और पुराने इमेजेस को जोड़ें, वीडियो को सुरक्षित रखें
      setMediaFiles([...mediaFiles, ...results]);
    }).catch(e => console.log(e));
  };

  // --- वीडियो अपलोड फंक्शन ---
  const pickVideo = () => {
    if (uploadedVideo) {
      Alert.alert("Limit Reached", "You can upload only 1 video.");
      return;
    }

    ImagePicker.openPicker({
      mediaType: 'video', // सिर्फ वीडियो के लिए
    }).then((file: any) => {
      const duration = file.duration / 1000;
      if (duration > 60) {
        Alert.alert("Video Too Long", "You can submit maximum 1 minute video.");
      } else {
        setMediaFiles([...mediaFiles, file]);
      }
    }).catch(e => console.log(e));
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
        {uploadedVideo ? (
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
      <Text style={styles.label}>Photos & Video (Max 5)</Text>
      
      <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={styles.scrollContent}>
        {/* 4 इमेज स्लॉट्स */}
        {[0, 1, 2, 3].map((i) => renderImageSlot(i))}
        
        {/* 1 वीडियो स्लॉट */}
        {renderVideoSlot()}
      </ScrollView>

      {/* गाइडलाइन टेक्स्ट */}
      <Text style={styles.hint}>* Maximum 4 photos and 1 video (up to 1 min)</Text>
    </View>
  );
};

export default MediaUploadSection;

const styles = StyleSheet.create({
  container: { marginTop: 15 },
  label: { fontFamily: Fonts.bold, fontSize: 16, color: 'black', marginBottom: 12 },
  scrollContent: { paddingRight: 20, paddingTop: 10 }, // रिमूव बटन के लिए टॉप पैडिंग
  
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