// // import { StyleSheet, Text, View } from 'react-native'
// // import React from 'react'

// // const AddCarScreen = () => {
// //   return (
// //     <View>
// //       <Text>AddCarScreen</Text>
// //     </View>
// //   )
// // }

// // export default AddCarScreen

// // const styles = StyleSheet.create({})















// import React, { useState } from "react";
// import {
//   View,
//   Text,
//   StyleSheet,
//   TextInput,
//   TouchableOpacity,
//   ScrollView,
// } from "react-native";
// import Ionicons from "@react-native-vector-icons/ionicons";
// import { Colors } from "../../../theme/colors";
// import { Fonts } from "../../../theme/fonts";
// import { SafeAreaView } from "react-native-safe-area-context";

// const AddCarScreen = ({ navigation }: any) => {
//   // --- Form States ---
//   const [condition, setCondition] = useState("1st"); // 1st, 2nd, 3rd
//   const [features, setFeatures] = useState<string[]>([]); // Selected features
//   const [title, setTitle] = useState("");
//   const [year, setYear] = useState("");
//   const [description, setDescription] = useState("");

//   // Features List
//   const availableFeatures = [
//     { id: "abs", label: "ABS" },
//     { id: "cruise", label: "Cruise Control" },
//     { id: "camera", label: "Back Camera" },
//     { id: "sensor", label: "Front Parking Sensor" },
//   ];

//   // Toggle Checkbox logic
//   const toggleFeature = (id: string) => {
//     if (features.includes(id)) {
//       setFeatures(features.filter((f) => f !== id));
//     } else {
//       setFeatures([...features, id]);
//     }
//   };

//   return (
//     <SafeAreaView style={styles.safeArea}>
//       {/* Header */}
//       <View style={styles.header}>
//         <TouchableOpacity onPress={() => navigation.goBack()}>
//           <Ionicons name="arrow-back" size={28} color={Colors.black} />
//         </TouchableOpacity>
//       </View>

//       <ScrollView 
//         showsVerticalScrollIndicator={false} 
//         contentContainerStyle={styles.scrollContent}
//       >
//         {/* Title */}
//         <Label text="Title" />
//         <TextInput 
//           placeholder="Enter title" 
//           style={styles.inputFull} 
//           placeholderTextColor="#999"
//           value={title}
//           onChangeText={setTitle}
//         />

//         {/* Condition & Year Row */}
//         <View style={styles.row}>
//           <View style={{ flex: 1 }}>
//             <Label text="Condition" />
//             <View style={styles.radioRow}>
//               {["1st", "2nd", "3rd"].map((item) => (
//                 <TouchableOpacity 
//                   key={item} 
//                   style={styles.radioItem} 
//                   onPress={() => setCondition(item)}
//                 >
//                   <Ionicons 
//                     name={condition === item ? "radio-button-on" : "radio-button-off"} 
//                     size={20} 
//                     color={condition === item ? Colors.primary : "gray"} 
//                   />
//                   <Text style={styles.radioLabel}>{item}</Text>
//                 </TouchableOpacity>
//               ))}
//             </View>
//           </View>

//           <View style={{ flex: 1, marginLeft: 15 }}>
//             <Label text="Year" />
//             <TextInput 
//               placeholder="Enter Year" 
//               style={styles.inputFull} 
//               keyboardType="number-pad"
//               value={year}
//               onChangeText={setYear}
//             />
//           </View>
//         </View>

//         {/* Brand & Model Row */}
//         <View style={styles.row}>
//           <View style={{ flex: 1 }}>
//             <Label text="Brand" />
//             <TouchableOpacity style={styles.dropdown}>
//               <Text style={styles.dropdownText}>Select Brand</Text>
//               <Ionicons name="chevron-down" size={20} color="gray" />
//             </TouchableOpacity>
//           </View>
//           <View style={{ flex: 1, marginLeft: 15 }}>
//             <Label text="Model" />
//             <TouchableOpacity style={styles.dropdown}>
//               <Text style={styles.dropdownText}>Select Model</Text>
//               <Ionicons name="chevron-down" size={20} color="gray" />
//             </TouchableOpacity>
//           </View>
//         </View>

//         {/* Features Section */}
//         <Label text="Features" />
//         <View style={styles.searchBox}>
//           <TextInput placeholder="Search" style={{ flex: 1 }} />
//         </View>

//         <View style={styles.checkboxGrid}>
//           {availableFeatures.map((item) => (
//             <TouchableOpacity 
//               key={item.id} 
//               style={styles.checkboxItem}
//               onPress={() => toggleFeature(item.id)}
//             >
//               <Ionicons 
//                 name={features.includes(item.id) ? "checkbox" : "square-outline"} 
//                 size={22} 
//                 color={features.includes(item.id) ? Colors.primary : "gray"} 
//               />
//               <Text style={styles.checkboxLabel}>{item.label}</Text>
//             </TouchableOpacity>
//           ))}
//         </View>

//         {/* Location & Price Row */}
//         <View style={styles.row}>
//           <View style={{ flex: 1 }}>
//             <Label text="Location" />
//             <View style={styles.inputWithIcon}>
//               <Ionicons name="location-outline" size={20} color="gray" />
//               <TextInput placeholder="Search Location" style={styles.flexInput} />
//             </View>
//           </View>
//           <View style={{ flex: 1, marginLeft: 15 }}>
//             <Label text="Price" />
//             <TextInput 
//                 placeholder="Enter Price" 
//                 style={styles.inputFull} 
//                 keyboardType="decimal-pad"
//             />
//           </View>
//         </View>

//         {/* Description */}
//         <Label text="Description" />
//         <TextInput 
//           placeholder="Write description about your car" 
//           multiline 
//           numberOfLines={4}
//           style={styles.textArea}
//           textAlignVertical="top"
//           value={description}
//           onChangeText={setDescription}
//         />

//         {/* Upload Button */}
//         <TouchableOpacity style={styles.uploadBtn}>
//           <Ionicons name="camera-outline" size={28} color="black" />
//           <Text style={styles.uploadText}>Upload images/Video</Text>
//         </TouchableOpacity>

//         {/* Submit Button */}
//         <TouchableOpacity style={styles.submitBtn}>
//           <Text style={styles.submitText}>Sell Your Car</Text>
//         </TouchableOpacity>

//       </ScrollView>
//     </SafeAreaView>
//   );
// };

// // Helper Label Component
// const Label = ({ text }: { text: string }) => (
//   <Text style={styles.labelText}>{text}</Text>
// );

// export default AddCarScreen;

// const styles = StyleSheet.create({
//   safeArea: { flex: 1, backgroundColor: Colors.white },
//   header: { padding: 15 },
//   scrollContent: { paddingHorizontal: 20, paddingBottom: 40 },
//   labelText: {
//     fontFamily: Fonts.bold,
//     fontSize: 16,
//     color: Colors.black,
//     marginTop: 20,
//     marginBottom: 8,
//   },
//   inputFull: {
//     backgroundColor: Colors.cardBg,
//     borderRadius: 12,
//     paddingHorizontal: 15,
//     height: 50,
//     fontFamily: Fonts.regular,
//   },
//   row: { flexDirection: "row", justifyContent: "space-between" },
//   radioRow: { flexDirection: "row", alignItems: "center", height: 50 },
//   radioItem: { flexDirection: "row", alignItems: "center", marginRight: 15 },
//   radioLabel: { marginLeft: 5, fontFamily: Fonts.medium, fontSize: 14 },
//   dropdown: {
//     backgroundColor: Colors.cardBg,
//     borderRadius: 12,
//     paddingHorizontal: 15,
//     height: 50,
//     flexDirection: "row",
//     alignItems: "center",
//     justifyContent: "space-between",
//   },
//   dropdownText: { color: "gray", fontFamily: Fonts.regular },
//   searchBox: {
//     backgroundColor: Colors.cardBg,
//     borderRadius: 10,
//     paddingHorizontal: 15,
//     height: 45,
//     flexDirection: "row",
//     alignItems: "center",
//   },
//   checkboxGrid: {
//     flexDirection: "row",
//     flexWrap: "wrap",
//     marginTop: 15,
//   },
//   checkboxItem: {
//     width: "50%",
//     flexDirection: "row",
//     alignItems: "center",
//     marginBottom: 12,
//   },
//   checkboxLabel: { marginLeft: 10, fontFamily: Fonts.medium, fontSize: 14 },
//   inputWithIcon: {
//     backgroundColor: Colors.cardBg,
//     borderRadius: 12,
//     paddingHorizontal: 10,
//     height: 50,
//     flexDirection: "row",
//     alignItems: "center",
//   },
//   flexInput: { flex: 1, marginLeft: 5, fontFamily: Fonts.regular },
//   textArea: {
//     backgroundColor: Colors.cardBg,
//     borderRadius: 12,
//     padding: 15,
//     height: 120,
//     fontFamily: Fonts.regular,
//   },
//   uploadBtn: {
//     flexDirection: "row",
//     alignItems: "center",
//     justifyContent: "center",
//     marginTop: 30,
//     marginBottom: 20,
//   },
//   uploadText: {
//     marginLeft: 10,
//     fontFamily: Fonts.bold,
//     fontSize: 16,
//     textDecorationLine: "underline",
//   },
//   submitBtn: {
//     backgroundColor: Colors.primary,
//     paddingVertical: 18,
//     borderRadius: 15,
//     alignItems: "center",
//   },
//   submitText: { color: Colors.white, fontFamily: Fonts.bold, fontSize: 18 },
// });














// import React, { useState } from "react";
// import {
//   View,
//   Text,
//   StyleSheet,
//   TextInput,
//   TouchableOpacity,
//   ScrollView,
// } from "react-native";
// import Ionicons from "@react-native-vector-icons/ionicons";
// import { Colors } from "../../../theme/colors";
// import { Fonts } from "../../../theme/fonts";
// import { SafeAreaView } from "react-native-safe-area-context";

// const AddCarScreen = ({ navigation }: any) => {
//   const [condition, setCondition] = useState("1st");
//   const [features, setFeatures] = useState<string[]>([]);

//   const availableFeatures = [
//     { id: "ABS", label: "ABS" },
//     { id: "Cruise", label: "Cruise Control" },
//     { id: "Back", label: "Back Camera" },
//     { id: "Front", label: "Front Parking Sensor" },
//   ];

//   const toggleFeature = (id: string) => {
//     if (features.includes(id)) {
//       setFeatures(features.filter((f) => f !== id));
//     } else {
//       setFeatures([...features, id]);
//     }
//   };

//   return (
//     <SafeAreaView style={styles.safeArea}>
//       {/* Header Back Button */}
//       <View style={styles.header}>
//         <TouchableOpacity onPress={() => navigation.goBack()}>
//           <Ionicons name="arrow-back" size={28} color={Colors.black} />
//         </TouchableOpacity>
//       </View>

//       <ScrollView 
//         showsVerticalScrollIndicator={false} 
//         contentContainerStyle={styles.scrollContent}
//       >
//         {/* --- Title Section --- */}
//         <Text style={styles.label}>Title</Text>
//         <TextInput placeholder="Enter title" style={styles.inputFull} placeholderTextColor="#C7C7CD" />

//         {/* --- Condition & Year Row --- */}
//         <View style={styles.row}>
//           <View style={{ flex: 1.2 }}>
//             <Text style={styles.label}>Condition</Text>
//             <View style={styles.radioGroup}>
//               {["1st", "2nd", "3rd"].map((item) => (
//                 <TouchableOpacity 
//                   key={item} 
//                   style={styles.radioItem} 
//                   onPress={() => setCondition(item)}
//                 >
//                   <View style={[styles.radioCircle, condition === item && styles.radioCircleActive]}>
//                     {condition === item && <View style={styles.radioInner} />}
//                   </View>
//                   <Text style={styles.radioLabel}>{item}</Text>
//                 </TouchableOpacity>
//               ))}
//             </View>
//           </View>

//           <View style={{ flex: 0.8, marginLeft: 15 }}>
//             <Text style={styles.label}>Year</Text>
//             <TextInput placeholder="Enter Year" style={styles.inputFull} placeholderTextColor="#C7C7CD" keyboardType="numeric" />
//           </View>
//         </View>

//         {/* --- Brand & Model Row --- */}
//         <View style={styles.row}>
//           <View style={{ flex: 1 }}>
//             <Text style={styles.label}>Brand</Text>
//             <TouchableOpacity style={styles.dropdown}>
//               <Text style={styles.dropdownText}>Select Brand</Text>
//               <Ionicons name="chevron-down" size={20} color="black" />
//             </TouchableOpacity>
//           </View>
//           <View style={{ flex: 1, marginLeft: 15 }}>
//             <Text style={styles.label}>Model</Text>
//             <TouchableOpacity style={styles.dropdown}>
//               <Text style={styles.dropdownText}>Select Model</Text>
//               <Ionicons name="chevron-down" size={20} color="black" />
//             </TouchableOpacity>
//           </View>
//         </View>

//         {/* --- Features Section --- */}
//         <Text style={styles.label}>Features</Text>
//         <View style={styles.searchBox}>
//           <TextInput placeholder="Search" style={styles.searchInput} placeholderTextColor="#C7C7CD" />
//         </View>

//         <View style={styles.checkboxGrid}>
//           {availableFeatures.map((item) => (
//             <TouchableOpacity 
//               key={item.id} 
//               style={styles.checkboxItem}
//               onPress={() => toggleFeature(item.id)}
//             >
//               <Ionicons 
//                 name={features.includes(item.id) ? "checkbox" : "square-outline"} 
//                 size={24} 
//                 color={Colors.primary} 
//               />
//               <Text style={styles.checkboxLabel}>{item.label}</Text>
//             </TouchableOpacity>
//           ))}
//         </View>

//         {/* --- Location & Price Row --- */}
//         <View style={styles.row}>
//           <View style={{ flex: 1 }}>
//             <Text style={styles.label}>Location</Text>
//             <View style={styles.inputWithIcon}>
//               <Ionicons name="location-outline" size={20} color="gray" />
//               <TextInput placeholder="Search Location" style={styles.flexInput} placeholderTextColor="#C7C7CD" />
//             </View>
//           </View>
//           <View style={{ flex: 1, marginLeft: 15 }}>
//             <Text style={styles.label}>Price</Text>
//             <TextInput placeholder="Enter Price" style={styles.inputFull} placeholderTextColor="#C7C7CD" keyboardType="numeric" />
//           </View>
//         </View>

//         {/* --- Description --- */}
//         <Text style={styles.label}>Description</Text>
//         <TextInput 
//           placeholder="Write description about your car" 
//           multiline 
//           numberOfLines={4}
//           style={styles.textArea}
//           textAlignVertical="top"
//           placeholderTextColor="#C7C7CD"
//         />

//         {/* --- Upload Images --- */}
//         <TouchableOpacity style={styles.uploadBtn}>
//           <Ionicons name="camera-outline" size={28} color="black" />
//           {/* <Ionicons name="arrow-up-circle" size={14} color="black" style={styles.uploadArrow} /> */}
//           <Text style={styles.uploadText}>Upload images/Video</Text>
//         </TouchableOpacity>

//         {/* --- Submit Button --- */}
//         <TouchableOpacity style={styles.submitBtn}>
//           <Text style={styles.submitText}>Sell Your Car</Text>
//         </TouchableOpacity>

//         {/* Padding for Bottom Tab Bar */}
//         <View style={{ height: 100 }} />
//       </ScrollView>
//     </SafeAreaView>
//   );
// };

// export default AddCarScreen;

// const styles = StyleSheet.create({
//   safeArea: { flex: 1, backgroundColor: Colors.white },
//   header: { paddingHorizontal: 15, paddingTop: 10 },
//   scrollContent: { paddingHorizontal: 20 },
//   label: {
//     fontFamily: Fonts.bold,
//     fontSize: 16,
//     color: Colors.black,
//     marginTop: 18,
//     marginBottom: 8,
//   },
//   inputFull: {
//     backgroundColor: "#F2F4F7",
//     borderRadius: 12,
//     paddingHorizontal: 15,
//     height: 50,
//     fontFamily: Fonts.regular,
//     fontSize: 14,
//   },
//   row: { flexDirection: "row", justifyContent: "space-between" },
//   radioGroup: { flexDirection: "row", alignItems: "center", height: 50 },
//   radioItem: { flexDirection: "row", alignItems: "center", marginRight: 15 },
//   radioCircle: {
//     height: 20,
//     width: 20,
//     borderRadius: 10,
//     borderWidth: 2,
//     borderColor: "black",
//     alignItems: "center",
//     justifyContent: "center",
//   },
//   radioCircleActive: { borderColor: "black" },
//   radioInner: { height: 10, width: 10, borderRadius: 5, backgroundColor: "black" },
//   radioLabel: { marginLeft: 8, fontFamily: Fonts.medium, fontSize: 14, color: Colors.black },
//   dropdown: {
//     backgroundColor: "#F2F4F7",
//     borderRadius: 12,
//     paddingHorizontal: 15,
//     height: 50,
//     flexDirection: "row",
//     alignItems: "center",
//     justifyContent: "space-between",
//   },
//   dropdownText: { color: "#C7C7CD", fontFamily: Fonts.regular, fontSize: 14 },
//   searchBox: {
//     backgroundColor: "#F2F4F7",
//     borderRadius: 10,
//     paddingHorizontal: 15,
//     height: 45,
//     justifyContent: "center",
//   },
//   searchInput: { fontFamily: Fonts.regular, fontSize: 14 },
//   checkboxGrid: { flexDirection: "row", flexWrap: "wrap", marginTop: 15 },
//   checkboxItem: { width: "50%", flexDirection: "row", alignItems: "center", marginBottom: 15 },
//   checkboxLabel: { marginLeft: 10, fontFamily: Fonts.medium, fontSize: 14, color: Colors.black },
//   inputWithIcon: {
//     backgroundColor: "#F2F4F7",
//     borderRadius: 12,
//     paddingHorizontal: 12,
//     height: 50,
//     flexDirection: "row",
//     alignItems: "center",
//   },
//   flexInput: { flex: 1, marginLeft: 5, fontFamily: Fonts.regular, fontSize: 14 },
//   textArea: {
//     backgroundColor: "#F2F4F7",
//     borderRadius: 12,
//     padding: 15,
//     height: 120,
//     fontFamily: Fonts.regular,
//     fontSize: 14,
//   },
//   uploadBtn: {
//     flexDirection: "row",
//     alignItems: "center",
//     justifyContent: "center",
//     marginTop: 25,
//     marginBottom: 10,
//   },
//   uploadArrow: { position: 'absolute', left: '33%', bottom: 5 }, // Just for the tiny arrow icon look
//   uploadText: {
//     marginLeft: 10,
//     fontFamily: Fonts.bold,
//     fontSize: 15,
//     color: Colors.black,
//     textDecorationLine: "underline",
//   },
//   submitBtn: {
//     backgroundColor: Colors.primary,
//     paddingVertical: 18,
//     borderRadius: 12,
//     alignItems: "center",
//     marginTop: 10,
//   },
//   submitText: { color: Colors.white, fontFamily: Fonts.bold, fontSize: 16 },
// });




















// import React, { useState } from "react";
// import {
//   View,
//   Text,
//   StyleSheet,
//   TextInput,
//   TouchableOpacity,
//   ScrollView,
//   Alert,
//   Image,
// } from "react-native";
// import { SafeAreaView } from "react-native-safe-area-context";
// import Ionicons from "@react-native-vector-icons/ionicons";
// import ImagePicker from 'react-native-image-crop-picker'; // लाइब्रेरी का सही उपयोग
// import { Colors } from "../../../theme/colors";
// import { Fonts } from "../../../theme/fonts";

// const AddCarScreen = ({ navigation }: any) => {
//   // --- States ---
//   const [condition, setCondition] = useState("1st");
//   const [features, setFeatures] = useState<string[]>([]);
//   const [mediaFiles, setMediaFiles] = useState<any[]>([]); // अपलोड की गई फाइल्स के लिए

//   const availableFeatures = [
//     { id: "ABS", label: "ABS" },
//     { id: "Cruise", label: "Cruise Control" },
//     { id: "Back", label: "Back Camera" },
//     { id: "Front", label: "Front Parking Sensor" },
//   ];

//   // --- Image & Video Upload Logic ---
//   const handleUploadMedia = () => {
//     // अगर पहले से 5 फाइल्स हैं तो रोक दें
//     if (mediaFiles.length >= 5) {
//       Alert.alert("Limit Reached", "You can only upload up to 5 images or videos.");
//       return;
//     }

//     ImagePicker.openPicker({
//       multiple: true,
//       mediaType: 'any',
//       maxFiles: 5 - mediaFiles.length, // जितनी जगह बची है उतनी ही फाइल सेलेक्ट करने दें
//     }).then(results => {
//       let validFiles: any[] = [];
//       let videoTooLong = false;

//       results.forEach((file: any) => {
//         // अगर फाइल वीडियो है तो ड्यूरेशन चेक करें
//         if (file.mime && file.mime.startsWith('video')) {
//           const durationInSeconds = (file as any).duration / 1000;

//           if (durationInSeconds > 60) {
//             videoTooLong = true;
//           } else {
//             validFiles.push(file);
//           }
//         } else {
//           // अगर इमेज है तो सीधे ऐड करें
//           validFiles.push(file);
//         }
//       });

//       if (videoTooLong) {
//         Alert.alert(
//           "Video is too long", 
//           "You can submit maximum 1 minute video. This video is too long."
//         );
//       }

//       // मैक्स 5 का फाइनल चेक और स्टेट अपडेट
//       const totalMedia = [...mediaFiles, ...validFiles].slice(0, 5);
//       setMediaFiles(totalMedia);

//     }).catch(e => {
//       if (e.code !== 'E_PICKER_CANCELLED') {
//         console.log("Picker Error: ", e);
//       }
//     });
//   };

//   // फाइल हटाने का फंक्शन
//   const removeMedia = (index: number) => {
//     const updatedMedia = [...mediaFiles];
//     updatedMedia.splice(index, 1);
//     setMediaFiles(updatedMedia);
//   };

//   const toggleFeature = (id: string) => {
//     if (features.includes(id)) {
//       setFeatures(features.filter((f) => f !== id));
//     } else {
//       setFeatures([...features, id]);
//     }
//   };

//   return (
//     <SafeAreaView style={styles.safeArea}>
//       {/* Header */}
//       <View style={styles.header}>
//         <TouchableOpacity onPress={() => navigation.goBack()}>
//           <Ionicons name="arrow-back" size={28} color={Colors.black} />
//         </TouchableOpacity>
//       </View>

//       <ScrollView 
//         showsVerticalScrollIndicator={false} 
//         contentContainerStyle={styles.scrollContent}
//       >
//         {/* --- Title Section --- */}
//         <Text style={styles.label}>Title</Text>
//         <TextInput placeholder="Enter title" style={styles.inputFull} placeholderTextColor="#C7C7CD" />

//         {/* --- Condition & Year Row --- */}
//         <View style={styles.row}>
//           <View style={{ flex: 1.2 }}>
//             <Text style={styles.label}>Condition</Text>
//             <View style={styles.radioGroup}>
//               {["1st", "2nd", "3rd"].map((item) => (
//                 <TouchableOpacity 
//                   key={item} 
//                   style={styles.radioItem} 
//                   onPress={() => setCondition(item)}
//                 >
//                   <View style={[styles.radioCircle, condition === item && styles.radioCircleActive]}>
//                     {condition === item && <View style={styles.radioInner} />}
//                   </View>
//                   <Text style={styles.radioLabel}>{item}</Text>
//                 </TouchableOpacity>
//               ))}
//             </View>
//           </View>

//           <View style={{ flex: 0.8, marginLeft: 15 }}>
//             <Text style={styles.label}>Year</Text>
//             <TextInput placeholder="Enter Year" style={styles.inputFull} placeholderTextColor="#C7C7CD" keyboardType="numeric" />
//           </View>
//         </View>

//         {/* --- Brand & Model Row --- */}
//         <View style={styles.row}>
//           <View style={{ flex: 1 }}>
//             <Text style={styles.label}>Brand</Text>
//             <TouchableOpacity style={styles.dropdown}>
//               <Text style={styles.dropdownText}>Select Brand</Text>
//               <Ionicons name="chevron-down" size={20} color="black" />
//             </TouchableOpacity>
//           </View>
//           <View style={{ flex: 1, marginLeft: 15 }}>
//             <Text style={styles.label}>Model</Text>
//             <TouchableOpacity style={styles.dropdown}>
//               <Text style={styles.dropdownText}>Select Model</Text>
//               <Ionicons name="chevron-down" size={20} color="black" />
//             </TouchableOpacity>
//           </View>
//         </View>

//         {/* --- Features Section --- */}
//         <Text style={styles.label}>Features</Text>
//         <View style={styles.searchBox}>
//           <TextInput placeholder="Search" style={styles.searchInput} placeholderTextColor="#C7C7CD" />
//         </View>

//         <View style={styles.checkboxGrid}>
//           {availableFeatures.map((item) => (
//             <TouchableOpacity 
//               key={item.id} 
//               style={styles.checkboxItem}
//               onPress={() => toggleFeature(item.id)}
//             >
//               <Ionicons 
//                 name={features.includes(item.id) ? "checkbox" : "square-outline"} 
//                 size={24} 
//                 color={Colors.primary} 
//               />
//               <Text style={styles.checkboxLabel}>{item.label}</Text>
//             </TouchableOpacity>
//           ))}
//         </View>

//         {/* --- Location & Price Row --- */}
//         <View style={styles.row}>
//           <View style={{ flex: 1 }}>
//             <Text style={styles.label}>Location</Text>
//             <View style={styles.inputWithIcon}>
//               <Ionicons name="location-outline" size={20} color="gray" />
//               <TextInput placeholder="Search Location" style={styles.flexInput} placeholderTextColor="#C7C7CD" />
//             </View>
//           </View>
//           <View style={{ flex: 1, marginLeft: 15 }}>
//             <Text style={styles.label}>Price</Text>
//             <TextInput placeholder="Enter Price" style={styles.inputFull} placeholderTextColor="#C7C7CD" keyboardType="numeric" />
//           </View>
//         </View>

//         {/* --- Description --- */}
//         <Text style={styles.label}>Description</Text>
//         <TextInput 
//           placeholder="Write description about your car" 
//           multiline 
//           numberOfLines={4}
//           style={styles.textArea}
//           textAlignVertical="top"
//           placeholderTextColor="#C7C7CD"
//         />

//         {/* --- Media Preview Area --- */}
//         {mediaFiles.length > 0 && (
//           <View style={styles.previewContainer}>
//             <ScrollView horizontal showsHorizontalScrollIndicator={false}>
//               {mediaFiles.map((item, index) => (
//                 <View key={index} style={styles.previewBox}>
//                   <Image source={{ uri: item.path }} style={styles.previewImage} />
//                   {item.mime && item.mime.startsWith('video') && (
//                     <View style={styles.videoOverlay}>
//                       <Ionicons name="play-circle" size={24} color="white" />
//                     </View>
//                   )}
//                   <TouchableOpacity style={styles.removeBtn} onPress={() => removeMedia(index)}>
//                     <Ionicons name="close-circle" size={22} color="red" />
//                   </TouchableOpacity>
//                 </View>
//               ))}
//             </ScrollView>
//           </View>
//         )}

//         {/* --- Upload Button --- */}
//         <TouchableOpacity style={styles.uploadBtn} onPress={handleUploadMedia}>
//           <Ionicons name="camera-outline" size={28} color="black" />
//           <Text style={styles.uploadText}>
//              {mediaFiles.length > 0 ? `Added ${mediaFiles.length}/5 files` : "Upload images/Video"}
//           </Text>
//         </TouchableOpacity>

//         {/* --- Submit Button --- */}
//         <TouchableOpacity style={styles.submitBtn}>
//           <Text style={styles.submitText}>Sell Your Car</Text>
//         </TouchableOpacity>

//         {/* Space for Tab Navigator */}
//         <View style={{ height: 100 }} />
//       </ScrollView>
//     </SafeAreaView>
//   );
// };

// export default AddCarScreen;

// const styles = StyleSheet.create({
//   safeArea: { flex: 1, backgroundColor: Colors.white },
//   header: { paddingHorizontal: 15, paddingTop: 10 },
//   scrollContent: { paddingHorizontal: 20 },
//   label: { fontFamily: Fonts.bold, fontSize: 16, color: Colors.black, marginTop: 18, marginBottom: 8 },
//   inputFull: { backgroundColor: "#F2F4F7", borderRadius: 12, paddingHorizontal: 15, height: 50, fontFamily: Fonts.regular, fontSize: 14 },
//   row: { flexDirection: "row", justifyContent: "space-between" },
//   radioGroup: { flexDirection: "row", alignItems: "center", height: 50 },
//   radioItem: { flexDirection: "row", alignItems: "center", marginRight: 15 },
//   radioCircle: { height: 20, width: 20, borderRadius: 10, borderWidth: 2, borderColor: "black", alignItems: "center", justifyContent: "center" },
//   radioCircleActive: { borderColor: "black" },
//   radioInner: { height: 10, width: 10, borderRadius: 5, backgroundColor: "black" },
//   radioLabel: { marginLeft: 8, fontFamily: Fonts.medium, fontSize: 14, color: Colors.black },
//   dropdown: { backgroundColor: "#F2F4F7", borderRadius: 12, paddingHorizontal: 15, height: 50, flexDirection: "row", alignItems: "center", justifyContent: "space-between" },
//   dropdownText: { color: "#C7C7CD", fontFamily: Fonts.regular, fontSize: 14 },
//   searchBox: { backgroundColor: "#F2F4F7", borderRadius: 10, paddingHorizontal: 15, height: 45, justifyContent: "center" },
//   searchInput: { fontFamily: Fonts.regular, fontSize: 14 },
//   checkboxGrid: { flexDirection: "row", flexWrap: "wrap", marginTop: 15 },
//   checkboxItem: { width: "50%", flexDirection: "row", alignItems: "center", marginBottom: 15 },
//   checkboxLabel: { marginLeft: 10, fontFamily: Fonts.medium, fontSize: 14, color: Colors.black },
//   inputWithIcon: { backgroundColor: "#F2F4F7", borderRadius: 12, paddingHorizontal: 12, height: 50, flexDirection: "row", alignItems: "center" },
//   flexInput: { flex: 1, marginLeft: 5, fontFamily: Fonts.regular, fontSize: 14 },
//   textArea: { backgroundColor: "#F2F4F7", borderRadius: 12, padding: 15, height: 120, fontFamily: Fonts.regular, fontSize: 14 },

//   // Media Preview Styles
//   previewContainer: { marginTop: 15, marginBottom: 5 },
//   previewBox: { width: 85, height: 85, borderRadius: 12, marginRight: 12, position: 'relative', backgroundColor: '#eee' },
//   previewImage: { width: '100%', height: '100%', borderRadius: 12 },
//   videoOverlay: { ...StyleSheet.absoluteFillObject, backgroundColor: 'rgba(0,0,0,0.2)', justifyContent: 'center', alignItems: 'center', borderRadius: 12 },
//   removeBtn: { position: 'absolute', top: -8, right: -8, backgroundColor: 'white', borderRadius: 12 },

//   uploadBtn: { flexDirection: "row", alignItems: "center", justifyContent: "center", marginTop: 25, marginBottom: 15 },
//   uploadText: { marginLeft: 10, fontFamily: Fonts.bold, fontSize: 15, color: Colors.black, textDecorationLine: "underline" },
//   submitBtn: { backgroundColor: Colors.primary, paddingVertical: 18, borderRadius: 12, alignItems: "center", marginTop: 10 },
//   submitText: { color: Colors.white, fontFamily: Fonts.bold, fontSize: 16 },
// });





















// yaha se chhote part me 

// import React, { useState } from "react";
// import { View, Text, StyleSheet, TextInput, TouchableOpacity, ScrollView, Alert } from "react-native";
// import { SafeAreaView } from "react-native-safe-area-context";
// import ImagePicker from 'react-native-image-crop-picker';
// import { Colors } from "../../../theme/colors";
// import { Fonts } from "../../../theme/fonts";
// import AddCarHeader from "../../../components/addcar/AddCarHeader";
// import ConditionYearSection from "../../../components/addcar/ConditionYearSection";
// import FeaturesSection from "../../../components/addcar/FeaturesSection";
// import MediaUploadSection from "../../../components/addcar/MediaUploadSection";
// import BrandModelSection from "../../../components/addcar/BrandModelSection";

// const AddCarScreen = ({ navigation }: any) => {
//   const [condition, setCondition] = useState("1st");
//   const [features, setFeatures] = useState<string[]>([]);
//   const [mediaFiles, setMediaFiles] = useState<any[]>([]);

//   const [selectedBrand, setSelectedBrand] = useState("");
//   const [selectedModel, setSelectedModel] = useState("");

//   // Lists
//   const brandsList = ["Maruti Suzuki", "Toyota", "Hyundai", "Tata Motors", "Mahindra", "Honda", "BMW"];
//   const modelsList = ["Swift", "Fortuner", "Creta", "Nexon", "Thar", "City", "X5"];

//   const availableFeatures = [
//     { id: "ABS", label: "ABS" },
//     { id: "Cruise", label: "Cruise Control" },
//     { id: "Back", label: "Back Camera" },
//     { id: "Front", label: "Front Parking Sensor" },
//   ];

//   const handleUploadMedia = () => {
//     if (mediaFiles.length >= 5) {
//       Alert.alert("Limit Reached", "You can only upload up to 5 images or videos.");
//       return;
//     }
//     ImagePicker.openPicker({
//       multiple: true, mediaType: 'any', maxFiles: 5 - mediaFiles.length,
//     }).then(results => {
//       let validFiles: any[] = [];
//       let videoTooLong = false;
//       results.forEach((file: any) => {
//         if (file.mime && file.mime.startsWith('video')) {
//           const durationInSeconds = (file as any).duration / 1000;
//           if (durationInSeconds > 60) videoTooLong = true;
//           else validFiles.push(file);
//         } else validFiles.push(file);
//       });
//       if (videoTooLong) Alert.alert("Video is too long", "You can submit maximum 1 minute video.");
//       setMediaFiles([...mediaFiles, ...validFiles].slice(0, 5));
//     }).catch(e => { if (e.code !== 'E_PICKER_CANCELLED') console.log(e); });
//   };

//   const removeMedia = (index: number) => {
//     const updated = [...mediaFiles];
//     updated.splice(index, 1);
//     setMediaFiles(updated);
//   };

//   const toggleFeature = (id: string) => {
//     setFeatures(features.includes(id) ? features.filter(f => f !== id) : [...features, id]);
//   };

//   return (
//     <SafeAreaView style={styles.safeArea}>
//       <AddCarHeader onBack={() => navigation.goBack()} />
//       <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={styles.scrollContent}>

//         <Text style={styles.label}>Title</Text>
//         <TextInput placeholder="Enter title" style={styles.inputFull} placeholderTextColor="#C7C7CD" />

//         <ConditionYearSection condition={condition} setCondition={setCondition} />

//         <BrandModelSection 
//           brand={selectedBrand} 
//           setBrand={setSelectedBrand} 
//           model={selectedModel} 
//           setModel={setSelectedModel}
//           brandsList={brandsList}
//           modelsList={modelsList}
//         />

//         <FeaturesSection features={features} toggleFeature={toggleFeature} availableFeatures={availableFeatures} />


//         <Text style={styles.label}>Description</Text>
//         <TextInput placeholder="Write description..." multiline numberOfLines={4} style={styles.textArea} textAlignVertical="top" />

//         <MediaUploadSection mediaFiles={mediaFiles} onUpload={handleUploadMedia} onRemove={removeMedia} />


//         <TouchableOpacity style={styles.submitBtn}><Text style={styles.submitText}>Sell Your Car</Text></TouchableOpacity>

//         <View style={{ height: 100 }} />
//       </ScrollView>
//     </SafeAreaView>
//   );
// };

// export default AddCarScreen;

// const styles = StyleSheet.create({
//   safeArea: { flex: 1, backgroundColor: Colors.white },
//   scrollContent: { paddingHorizontal: 20 },
//   label: { fontFamily: Fonts.bold, fontSize: 16, color: Colors.black, marginTop: 18, marginBottom: 8 },
//   inputFull: { backgroundColor: "#F2F4F7", borderRadius: 12, paddingHorizontal: 15, height: 50, fontFamily: Fonts.regular },
//   row: { flexDirection: "row", justifyContent: "space-between" },
//   dropdown: { backgroundColor: "#F2F4F7", borderRadius: 12, paddingHorizontal: 15, height: 50, justifyContent: "center" },
//   textArea: { backgroundColor: "#F2F4F7", borderRadius: 12, padding: 15, height: 120, fontFamily: Fonts.regular },
//   submitBtn: { backgroundColor: Colors.primary, paddingVertical: 18, borderRadius: 12, alignItems: "center", marginTop: 10 },
//   submitText: { color: Colors.white, fontFamily: Fonts.bold, fontSize: 16 },
// });

















// import React, { useState } from "react";
// import { View, Text, StyleSheet, TextInput, TouchableOpacity, ScrollView, Alert } from "react-native";
// import { SafeAreaView } from "react-native-safe-area-context";
// import ImagePicker from 'react-native-image-crop-picker';
// import { Colors } from "../../../theme/colors";
// import { Fonts } from "../../../theme/fonts";

// // Data
// import { BRANDS_LIST, MODELS_LIST, VARIANTS_LIST, FUELS_LIST } from '../../../dummydata/dummyData';

// // Components
// import AddCarHeader from "../../../components/addcar/AddCarHeader";
// import ConditionYearSection from "../../../components/addcar/ConditionYearSection";
// import BrandModelSection from "../../../components/addcar/BrandModelSection";
// import TechnicalSection from "../../../components/addcar/TechnicalSection";
// import PricingLocationSection from "../../../components/addcar/PricingLocationSection";
// import FeaturesSection from "../../../components/addcar/FeaturesSection";
// import MediaUploadSection from "../../../components/addcar/MediaUploadSection";

// const AddCarScreen = ({ navigation }: any) => {
//   const [condition, setCondition] = useState("1st");
//   const [features, setFeatures] = useState<string[]>([]);
//   const [mediaFiles, setMediaFiles] = useState<any[]>([]);
//   const [brand, setBrand] = useState("");
//   const [model, setModel] = useState("");
//   const [variant, setVariant] = useState("");
//   const [fuel, setFuel] = useState("");
//   const [transmission, setTransmission] = useState("Manual");
//   const [kms, setKms] = useState("");
//   const [price, setPrice] = useState("");
//   const [location, setLocation] = useState("");
//   const [mobile, setMobile] = useState("");

//   const availableFeatures = [
//     { id: "ABS", label: "ABS" }, { id: "Cruise", label: "Cruise Control" },
//     { id: "Back", label: "Back Camera" }, { id: "Front", label: "Front Parking Sensor" },
//   ];

//   const handleUploadMedia = () => {
//     if (mediaFiles.length >= 5) {
//       Alert.alert("Limit Reached", "You can only upload up to 5 images or videos.");
//       return;
//     }
//     ImagePicker.openPicker({
//       multiple: true, mediaType: 'any', maxFiles: 5 - mediaFiles.length,
//     }).then(results => {
//       let validFiles: any[] = [];
//       let videoTooLong = false;
//       results.forEach((file: any) => {
//         if (file.mime && file.mime.startsWith('video')) {
//           const durationInSeconds = (file as any).duration / 1000;
//           if (durationInSeconds > 60) videoTooLong = true;
//           else validFiles.push(file);
//         } else validFiles.push(file);
//       });
//       if (videoTooLong) Alert.alert("Video is too long", "You can submit maximum 1 minute video.");
//       setMediaFiles([...mediaFiles, ...validFiles].slice(0, 5));
//     }).catch(e => { if (e.code !== 'E_PICKER_CANCELLED') console.log(e); });
//   };

//   const removeMedia = (index: number) => {
//     const updated = [...mediaFiles];
//     updated.splice(index, 1);
//     setMediaFiles(updated);
//   };

//   const toggleFeature = (id: string) => {
//     setFeatures(features.includes(id) ? features.filter(f => f !== id) : [...features, id]);
//   };
//   const handleUpload = () => {
//     if (mediaFiles.length >= 5) return Alert.alert("Limit Reached", "Max 5 files.");
//     ImagePicker.openPicker({ multiple: true, mediaType: 'any', maxFiles: 5 - mediaFiles.length }).then(results => {
//       let newFiles: any[] = [];
//       results.forEach((file: any) => {
//         const isDup = mediaFiles.some(f => f.path === file.path);
//         if (!isDup) {
//           if (file.mime.startsWith('video') && (file.duration / 1000) > 60) Alert.alert("Video Too Long", "Max 1 min.");
//           else newFiles.push(file);
//         }
//       });
//       setMediaFiles([...mediaFiles, ...newFiles].slice(0, 5));
//     }).catch(e => { if (e.code !== 'E_PICKER_CANCELLED') console.log(e); });
//   };

//   return (
//     <SafeAreaView style={styles.safeArea}>
//       <AddCarHeader onBack={() => navigation.goBack()} />
//       <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={styles.scrollContent}>

//         <Text style={styles.label}>Title</Text>
//         <TextInput placeholder="e.g. Maruti Swift 2021" style={styles.inputFull} />

//         <ConditionYearSection condition={condition} setCondition={setCondition} />

//         <BrandModelSection 
//           brand={brand} setBrand={setBrand} 
//           model={model} setModel={setModel} 
//           variant={variant} setVariant={setVariant}
//           brandsList={BRANDS_LIST} modelsList={MODELS_LIST} variantsList={VARIANTS_LIST}
//         />

//         <TechnicalSection 
//           fuel={fuel} setFuel={setFuel} fuelsList={FUELS_LIST}
//           transmission={transmission} setTransmission={setTransmission}
//           kms={kms} setKms={setKms}
//         />

//         <PricingLocationSection 
//           price={price} setPrice={setPrice}
//           location={location} setLocation={setLocation}
//           mobile={mobile} setMobile={setMobile}
//         />

//         <FeaturesSection features={features} setFeatures={setFeatures} toggleFeature={toggleFeature} availableFeatures={availableFeatures} />

//         {/* <MediaUploadSection mediaFiles={mediaFiles} onUpload={handleUploadMedia} onRemove={removeMedia} /> */}
//         <MediaUploadSection mediaFiles={mediaFiles} onUpload={handleUpload} onRemove={(i: any) => { const m = [...mediaFiles]; m.splice(i, 1); setMediaFiles(m); }} />

//         <Text style={styles.label}>Description</Text>
//         <TextInput placeholder="More details about car..." multiline numberOfLines={4} style={styles.textArea} textAlignVertical="top" />

//         <TouchableOpacity style={styles.submitBtn}><Text style={styles.submitText}>Sell Your Car</Text></TouchableOpacity>

//         <View style={{ height: 100 }} />
//       </ScrollView>
//     </SafeAreaView>
//   );
// };

// export default AddCarScreen;

// const styles = StyleSheet.create({
//   safeArea: { flex: 1, backgroundColor: Colors.white },
//   scrollContent: { paddingHorizontal: 20 },
//   label: { fontFamily: Fonts.bold, fontSize: 16, color: 'black', marginTop: 18, marginBottom: 8 },
//   inputFull: { backgroundColor: "#F2F4F7", borderRadius: 12, paddingHorizontal: 15, height: 50, fontFamily: Fonts.regular },
//   textArea: { backgroundColor: "#F2F4F7", borderRadius: 12, padding: 15, height: 100, fontFamily: Fonts.regular },
//   submitBtn: { backgroundColor: Colors.primary, paddingVertical: 18, borderRadius: 12, alignItems: "center", marginTop: 25 },
//   submitText: { color: Colors.white, fontFamily: Fonts.bold, fontSize: 16 },
// });






















// import React, { useState } from "react";
// import { 
//   View, 
//   Text, 
//   StyleSheet, 
//   TextInput, 
//   TouchableOpacity, 
//   ScrollView, 
//   Alert 
// } from "react-native";
// import { SafeAreaView } from "react-native-safe-area-context";
// import ImagePicker from 'react-native-image-crop-picker';
// import { useDispatch } from 'react-redux';
// import { Colors } from "../../../theme/colors";
// import { Fonts } from "../../../theme/fonts";
// import { addAd } from '../../../redux/myAdsSlice';
// import { showSuccessToast } from '../../../utils/showToast';

// // Data Imports
// import { BRANDS_LIST, MODELS_LIST, VARIANTS_LIST, FUELS_LIST } from '../../../dummydata/dummyData';

// // Components Imports
// import AddCarHeader from "../../../components/addcar/AddCarHeader";
// import ConditionYearSection from "../../../components/addcar/ConditionYearSection";
// import BrandModelSection from "../../../components/addcar/BrandModelSection";
// import TechnicalSection from "../../../components/addcar/TechnicalSection";
// import PricingLocationSection from "../../../components/addcar/PricingLocationSection";
// import FeaturesSection from "../../../components/addcar/FeaturesSection";
// import MediaUploadSection from "../../../components/addcar/MediaUploadSection";

// const AddCarScreen = ({ navigation }: any) => {
//   const dispatch = useDispatch();

//   // --- यहाँ हमने सारे States डिफाइन किए हैं ---
//   const [title, setTitle] = useState(""); // यही 'title' मिसिंग था
//   const [condition, setCondition] = useState("1st");
//   const [brand, setBrand] = useState("");
//   const [model, setModel] = useState("");
//   const [variant, setVariant] = useState("");
//   const [fuel, setFuel] = useState("");
//   const [transmission, setTransmission] = useState("Manual");
//   const [kms, setKms] = useState("");
//   const [price, setPrice] = useState("");
//   const [location, setLocation] = useState("");
//   const [mobile, setMobile] = useState("");
//   const [features, setFeatures] = useState<string[]>([]);
//   const [mediaFiles, setMediaFiles] = useState<any[]>([]);

// const handleSellCarSubmission = () => {
//     // कंसोल में चेक करें कौन सी वैल्यू खाली है
//     console.log("Submitting:", { title, brand, price, mobile });

//     if (!title.trim()) {
//       Alert.alert("Please enter Title");
//       return;
//     }
//     if (!brand) {
//       Alert.alert("Please select Brand");
//       return;
//     }
//     if (!price) {
//       Alert.alert("Please set Price");
//       return;
//     }
//     if (!mobile || mobile.length < 10) {
//       Alert.alert("Error", "Please enter a valid 10-digit Mobile Number");
//       return;
//     }

//     const newAdData = {
//       id: Date.now().toString(),
//       title: title,
//       price: `₹ ${price}`,
//       image: mediaFiles.length > 0 ? mediaFiles[0].path : null,
//       status: 'waiting_confirmation',
//       details: {
//         condition, brand, model, variant, fuel, transmission, kms, location, mobile, features,
//       }
//     };

//     dispatch(addAd(newAdData as any));
//     showSuccessToast("Success", "Your car ad has been submitted! ❤️");
//     navigation.navigate('HomeScreen'); 
// };

//   // मीडिया अपलोड लॉजिक
//   const handleUploadMedia = () => {
//     if (mediaFiles.length >= 5) {
//       Alert.alert("Limit Reached", "Max 5 files allowed.");
//       return;
//     }
//     ImagePicker.openPicker({
//       multiple: true, mediaType: 'any', maxFiles: 5 - mediaFiles.length,
//     }).then(results => {
//       let validFiles: any[] = [];
//       results.forEach((file: any) => {
//         if (file.mime && file.mime.startsWith('video')) {
//           const duration = (file as any).duration / 1000;
//           if (duration <= 60) validFiles.push(file);
//         } else validFiles.push(file);
//       });
//       setMediaFiles([...mediaFiles, ...validFiles].slice(0, 5));
//     }).catch(e => { if (e.code !== 'E_PICKER_CANCELLED') console.log(e); });
//   };

//   const removeMedia = (index: number) => {
//     const updated = [...mediaFiles];
//     updated.splice(index, 1);
//     setMediaFiles(updated);
//   };

//   return (
//     <SafeAreaView style={styles.safeArea}>
//       <AddCarHeader onBack={() => navigation.goBack()} />

//       <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={styles.scrollContent}>

//         {/* Title Input */}
//         <Text style={styles.label}>Title</Text>
//         <TextInput 
//           placeholder="e.g. Maruti Swift 2021" 
//           style={styles.inputFull} 
//           value={title}
//           onChangeText={setTitle} // स्टेट अपडेट करने के लिए
//         />

//         <ConditionYearSection condition={condition} setCondition={setCondition} />

//         <BrandModelSection 
//           brand={brand} setBrand={setBrand} 
//           model={model} setModel={setModel} 
//           variant={variant} setVariant={setVariant}
//           brandsList={BRANDS_LIST} modelsList={MODELS_LIST} variantsList={VARIANTS_LIST}
//         />

//         <TechnicalSection 
//           fuel={fuel} setFuel={setFuel} fuelsList={FUELS_LIST}
//           transmission={transmission} setTransmission={setTransmission}
//           kms={kms} setKms={setKms}
//         />

//         <PricingLocationSection 
//           price={price} setPrice={setPrice}
//           location={location} setLocation={setLocation}
//           mobile={mobile} setMobile={setMobile}
//         />

//         <FeaturesSection features={features} setFeatures={setFeatures} />

//         <MediaUploadSection mediaFiles={mediaFiles} onUpload={handleUploadMedia} onRemove={removeMedia} />

//         <Text style={styles.label}>Description</Text>
//         <TextInput 
//           placeholder="More details about car..." 
//           multiline 
//           numberOfLines={4} 
//           style={styles.textArea} 
//           textAlignVertical="top" 
//         />

//         <TouchableOpacity style={styles.submitBtn} onPress={handleSellCarSubmission}>
//           <Text style={styles.submitText}>Sell Your Car</Text>
//         </TouchableOpacity>

//         <View style={{ height: 100 }} />
//       </ScrollView>
//     </SafeAreaView>
//   );
// };

// export default AddCarScreen;

// const styles = StyleSheet.create({
//   safeArea: { flex: 1, backgroundColor: Colors.white },
//   scrollContent: { paddingHorizontal: 20 },
//   label: { fontFamily: Fonts.bold, fontSize: 16, color: 'black', marginTop: 18, marginBottom: 8 },
//   inputFull: { backgroundColor: "#F2F4F7", borderRadius: 12, paddingHorizontal: 15, height: 50, fontFamily: Fonts.regular, color: 'black' },
//   textArea: { backgroundColor: "#F2F4F7", borderRadius: 12, padding: 15, height: 100, fontFamily: Fonts.regular, color: 'black' },
//   submitBtn: { backgroundColor: Colors.primary, paddingVertical: 18, borderRadius: 12, alignItems: "center", marginTop: 25 },
//   submitText: { color: Colors.white, fontFamily: Fonts.bold, fontSize: 16 },
// });










import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  ScrollView,
  Alert
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import ImagePicker from 'react-native-image-crop-picker';
import { useDispatch } from 'react-redux';
import { Colors } from "../../../theme/colors";
import { Fonts } from "../../../theme/fonts";
import { addAd } from '../../../redux/myAdsSlice';
import { showSuccessToast } from '../../../utils/showToast';

// Data Imports
import { BRANDS_LIST, MODELS_LIST, VARIANTS_LIST, FUELS_LIST } from '../../../dummydata/dummyData';

// Components Imports
import AddCarHeader from "../../../components/addcar/AddCarHeader";
import ConditionYearSection from "../../../components/addcar/ConditionYearSection";
import BrandModelSection from "../../../components/addcar/BrandModelSection";
import TechnicalSection from "../../../components/addcar/TechnicalSection";
import PricingLocationSection from "../../../components/addcar/PricingLocationSection";
import FeaturesSection from "../../../components/addcar/FeaturesSection";
import MediaUploadSection from "../../../components/addcar/MediaUploadSection";

const AddCarScreen = ({ navigation }: any) => {
  const dispatch = useDispatch();

  // --- States ---
  const [title, setTitle] = useState("");
  const [condition, setCondition] = useState("1st");
  const [year, setYear] = useState(""); // <-- फिक्स: year स्टेट जोड़ी गई
  const [brand, setBrand] = useState("");
  const [model, setModel] = useState("");
  const [variant, setVariant] = useState("");
  const [fuel, setFuel] = useState("");
  const [transmission, setTransmission] = useState("Manual");
  const [kms, setKms] = useState("");
  const [price, setPrice] = useState("");
  const [location, setLocation] = useState("");
  const [mobile, setMobile] = useState("");
  const [description, setDescription] = useState(""); // <-- फिक्स: description स्टेट जोड़ी गई
  const [features, setFeatures] = useState<string[]>([]);
  const [mediaFiles, setMediaFiles] = useState<any[]>([]);

   const resetForm = () => {
    setTitle("");
    setCondition("1st");
    setYear("");
    setBrand("");
    setModel("");
    setVariant("");
    setFuel("");
    setTransmission("Manual");
    setKms("");
    setPrice("");
    setLocation("");
    setMobile("");
    setDescription("");
    setFeatures([]);
    setMediaFiles([]);
  };

  // --- फॉर्म सबमिट करने का लॉजिक ---
  const handleSellCarSubmission = () => {
    console.log("Submitting:", { title, brand, price, mobile, year });

    if (!title.trim()) {
      Alert.alert("Error", "Please enter Title");
      return;
    }
    if (!brand) {
      Alert.alert("Error", "Please select Brand");
      return;
    }
    if (!year) {
      Alert.alert("Error", "Please enter Year");
      return;
    }
    if (!price) {
      Alert.alert("Error", "Please set Price");
      return;
    }
    if (!mobile || mobile.length < 10) {
      Alert.alert("Error", "Please enter a valid 10-digit Mobile Number");
      return;
    }

    const newAdData = {
      id: Date.now().toString(),
      title: title,
      price: `₹ ${price}`,
      image: mediaFiles.length > 0 ? mediaFiles[0].path : null,
      status: 'waiting_confirmation', // आप इसे 'waiting_confirmation' भी रख सकते हैं
      details: {
        condition,
        brand,
        model,
        variant,
        fuel,
        transmission,
        kms,
        location,
        mobile,
        features,
        year,
        description
      }
    };

    dispatch(addAd(newAdData as any));
    showSuccessToast("Success", "Your car ad has been submitted! ❤️");
     resetForm(); 
    navigation.navigate('HomeScreen');
  };

  // मीडिया अपलोड लॉजिक
  const handleUploadMedia = () => {
    if (mediaFiles.length >= 5) {
      Alert.alert("Limit Reached", "Max 5 files allowed.");
      return;
    }
    ImagePicker.openPicker({
      multiple: true, mediaType: 'any', maxFiles: 5 - mediaFiles.length,
    }).then(results => {
      let validFiles: any[] = [];
      results.forEach((file: any) => {
        if (file.mime && file.mime.startsWith('video')) {
          const duration = (file as any).duration / 1000;
          if (duration <= 60) validFiles.push(file);
        } else validFiles.push(file);
      });
      setMediaFiles([...mediaFiles, ...validFiles].slice(0, 5));
    }).catch(e => { if (e.code !== 'E_PICKER_CANCELLED') console.log(e); });
  };

  const removeMedia = (index: number) => {
    const updated = [...mediaFiles];
    updated.splice(index, 1);
    setMediaFiles(updated);
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <AddCarHeader onBack={() => navigation.goBack()} />

      <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={styles.scrollContent}>

        {/* Title Input */}
        <Text style={styles.label}>Title</Text>
        <TextInput
          placeholder="e.g. Maruti Swift 2021"
          style={styles.inputFull}
          value={title}
          onChangeText={setTitle}
          placeholderTextColor="#C7C7CD"
        />

        {/* Condition & Year Section */}
        <ConditionYearSection
          condition={condition}
          setCondition={setCondition}
          year={year}
          setYear={setYear} // <-- साल की स्टेट यहाँ पास करें
        />

        <BrandModelSection
          brand={brand} setBrand={setBrand}
          model={model} setModel={setModel}
          variant={variant} setVariant={setVariant}
          brandsList={BRANDS_LIST} modelsList={MODELS_LIST} variantsList={VARIANTS_LIST}
        />

        <TechnicalSection
          fuel={fuel} setFuel={setFuel} fuelsList={FUELS_LIST}
          transmission={transmission} setTransmission={setTransmission}
          kms={kms} setKms={setKms}
        />

        <PricingLocationSection
          price={price} setPrice={setPrice}
          location={location} setLocation={setLocation}
          mobile={mobile} setMobile={setMobile}
        />

        <FeaturesSection features={features} setFeatures={setFeatures} />

        {/* <MediaUploadSection mediaFiles={mediaFiles} onUpload={handleUploadMedia} onRemove={removeMedia} /> */}
        <MediaUploadSection
          mediaFiles={mediaFiles}
          setMediaFiles={setMediaFiles}
          onUpload={handleUploadMedia}
          onRemove={removeMedia}
        />

        {/* Description Input */}
        <Text style={styles.label}>Description</Text>
        <TextInput
          placeholder="More details about car..."
          multiline
          numberOfLines={4}
          style={styles.textArea}
          textAlignVertical="top"
          value={description}
          onChangeText={setDescription} // <-- स्टेट अपडेट यहाँ होगी
          placeholderTextColor="#C7C7CD"
        />

        <TouchableOpacity style={styles.submitBtn} onPress={handleSellCarSubmission}>
          <Text style={styles.submitText}>Sell Your Car</Text>
        </TouchableOpacity>

        <View style={{ height: 100 }} />
      </ScrollView>
    </SafeAreaView>
  );
};

export default AddCarScreen;

const styles = StyleSheet.create({
  safeArea: { flex: 1, backgroundColor: Colors.white },
  scrollContent: { paddingHorizontal: 20 },
  label: { fontFamily: Fonts.bold, fontSize: 16, color: 'black', marginTop: 18, marginBottom: 8 },
  inputFull: { backgroundColor: "#F2F4F7", borderRadius: 12, paddingHorizontal: 15, height: 50, fontFamily: Fonts.regular, color: 'black' },
  textArea: { backgroundColor: "#F2F4F7", borderRadius: 12, padding: 15, height: 100, fontFamily: Fonts.regular, color: 'black' },
  submitBtn: { backgroundColor: Colors.primary, paddingVertical: 18, borderRadius: 12, alignItems: "center", marginTop: 25 },
  submitText: { color: Colors.white, fontFamily: Fonts.bold, fontSize: 16 },
});