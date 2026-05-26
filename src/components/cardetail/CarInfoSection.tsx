// import React from 'react';
// import { View, Text, StyleSheet } from 'react-native';
// import Ionicons from "@react-native-vector-icons/ionicons";
// import { Colors } from '../../theme/colors';
// import { Fonts } from '../../theme/fonts';

// const CarInfoSection = ({ car, showFullDesc, setShowFullDesc }: any) => (
//   <View style={styles.contentSection}>
//     <View style={styles.titleRow}>
//       <Text style={styles.carName}>{car?.name || "Tesla Model 3"}</Text>
//       <View style={styles.ratingRow}>
//         <Text style={styles.ratingText}>4.5/5</Text>
//         <Ionicons name="star" size={18} color={Colors.secondary} />
//       </View>
//     </View>
//     <Text style={styles.priceText}>Rs. {car?.price || "18,00,000.00"}</Text>

//     <Text style={styles.description}>
//       Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas diam nam eu nulla a. 
//       Vestibulum aliquet facilisi interdum nibh blandit 
//       {!showFullDesc && "..."}
//       {showFullDesc && " more details about this amazing car that provide comfort and speed."}
//       <Text style={styles.readMore} onPress={() => setShowFullDesc(!showFullDesc)}>
//         {showFullDesc ? " Show less" : " Read more..."}
//       </Text>
//     </Text>
//   </View>
// );

// export default CarInfoSection;

// const styles = StyleSheet.create({
//   contentSection: { paddingHorizontal: 20, marginTop: 25 },
//   titleRow: { flexDirection: "row", justifyContent: "space-between", alignItems: "center" },
//   carName: { fontFamily: Fonts.bold, fontSize: 24, color: Colors.primary },
//   ratingRow: { flexDirection: "row", alignItems: "center" },
//   ratingText: { fontFamily: Fonts.bold, color: Colors.secondary, marginRight: 5, fontSize: 18 },
//   priceText: { fontFamily: Fonts.medium, color: "gray", fontSize: 16, marginTop: 5 },
//   description: { fontFamily: Fonts.regular, color: Colors.textSecondary, marginTop: 15, lineHeight: 22 },
//   readMore: { color: "#3498db", fontFamily: Fonts.medium },
// });




















// import React from 'react';
// import { View, Text, StyleSheet } from 'react-native';
// import Ionicons from "@react-native-vector-icons/ionicons";
// import { Colors } from '../../theme/colors';
// import { Fonts } from '../../theme/fonts';
// import ImageVideoSelectButton from './ImageVideoSelectButton'; // यहाँ इम्पोर्ट करें

// const CarInfoSection = ({ 
//   car, 
//   showFullDesc, 
//   setShowFullDesc,
//   // फ़िल्टर वाले प्रोप्स यहाँ रिसीव करें
//   showImages,
//   setShowImages,
//   showVideos,
//   setShowVideos 
// }: any) => (
//   <View style={styles.contentSection}>
//     {/* कार का नाम और रेटिंग */}
//     <View style={styles.titleRow}>
//       <Text style={styles.carName}>{car?.carName || "Tesla Model 3"}</Text>
//       <View style={styles.ratingRow}>
//         <Text style={styles.ratingText}>{car?.rating || "No Rating"}/10</Text>
//         <Ionicons name="star" size={18} color={Colors.secondary} />
//       </View>
//     </View>

//     {/* कार का प्राइस */}
//     <Text style={styles.priceText}>Rs. {car?.price || "Not Available "}</Text>

//     {/* --- बटन अब यहाँ आ गया (डिस्क्रिप्शन के ऊपर) --- */}
//     <View style={styles.buttonWrapper}>
//         <ImageVideoSelectButton 
//             showImages={showImages}
//             setShowImages={setShowImages}
//             showVideos={showVideos}
//             setShowVideos={setShowVideos}
//         />
//     </View>

//     {/* कार का डिस्क्रिप्शन */}
//     <Text style={styles.description}>
//       Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas diam nam eu nulla a. 
//       Vestibulum aliquet facilisi interdum nibh blandit 
//       {!showFullDesc && "..."}
//       {showFullDesc && " more details about this amazing car that provide comfort and speed."}
//       <Text style={styles.readMore} onPress={() => setShowFullDesc(!showFullDesc)}>
//         {showFullDesc ? " Show less" : " Read more..."}
//       </Text>
//     </Text>
//   </View>
// );

// export default CarInfoSection;

// const styles = StyleSheet.create({
//   contentSection: { paddingHorizontal: 20, marginTop: 25 },
//   titleRow: { flexDirection: "row", justifyContent: "space-between", alignItems: "center" },
//   carName: { fontFamily: Fonts.bold, fontSize: 24, color: Colors.primary },
//   ratingRow: { flexDirection: "row", alignItems: "center" },
//   ratingText: { fontFamily: Fonts.bold, color: Colors.secondary, marginRight: 5, fontSize: 18 },
//   priceText: { fontFamily: Fonts.medium, color: "gray", fontSize: 16, marginTop: 5 },
  
//   // बटन के आसपास स्पेसिंग के लिए
//   buttonWrapper: {
//     marginLeft: -20, // ImageVideoSelectButton की अपनी पैडिंग को न्यूट्रलाइज करने के लिए
//     width: '110%',   // बटन को पूरी चौड़ाई देने के लिए
//     marginVertical: 10,
//   },

//   description: { 
//     fontFamily: Fonts.regular, 
//     color: Colors.textSecondary, 
//     marginTop: 10, // थोड़ा गैप एडजस्ट किया
//     lineHeight: 22 
//   },
//   readMore: { color: "#3498db", fontFamily: Fonts.medium },
// });















// import React from 'react';
// import { View, Text, StyleSheet } from 'react-native';
// import Ionicons from "@react-native-vector-icons/ionicons";
// import { Colors } from '../../theme/colors';
// import { Fonts } from '../../theme/fonts';
// import ImageVideoSelectButton from './ImageVideoSelectButton';

// const CarInfoSection = ({ 
//   car, 
//   showFullDesc, 
//   setShowFullDesc,
//   showImages,
//   setShowImages,
//   showVideos,
//   setShowVideos 
// }: any) => {

//   // --- 🚀 डिस्क्रिप्शन हैंडलिंग लॉजिक ---
//   const fullDescription = car?.description || "No description provided for this car.";
  
//   // अगर डिस्क्रिप्शन 100 अक्षरों से ज्यादा है तो उसे छोटा करें
//   const isLongDescription = fullDescription.length > 100;
//   const displayDescription = showFullDesc 
//     ? fullDescription 
//     : fullDescription.slice(0, 100) + (isLongDescription ? "..." : "");

//   return (
//     <View style={styles.contentSection}>
//       {/* कार का नाम और रेटिंग */}
//       <View style={styles.titleRow}>
//         <Text style={styles.carName}>{car?.carName || "Car Name"}</Text>
//         <View style={styles.ratingRow}>
//           <Text style={styles.ratingText}>{car?.rating || "0"}/10</Text>
//           <Ionicons name="star" size={18} color={Colors.secondary} />
//         </View>
//       </View>

//       {/* कार का प्राइस - toLocaleString से सुंदर दिखेगा */}
//       <Text style={styles.priceText}>
//         ₹ {car?.price ? car.price.toLocaleString('en-IN') : "Price N/A"}
//       </Text>

//       {/* इमेज/वीडियो फिल्टर बटन्स */}
//       <View style={styles.buttonWrapper}>
//           <ImageVideoSelectButton 
//               showImages={showImages}
//               setShowImages={setShowImages}
//               showVideos={showVideos}
//               setShowVideos={setShowVideos}
//           />
//       </View>

//       {/* --- 🚀 असली डिस्क्रिप्शन यहाँ है --- */}
//       <View style={styles.descContainer}>
//         <Text style={styles.description}>
//           {displayDescription}
          
//           {/* सिर्फ तभी "Read more" दिखाएँ जब टेक्स्ट वाकई में बड़ा हो */}
//           {isLongDescription && (
//             <Text 
//                 style={styles.readMore} 
//                 onPress={() => setShowFullDesc(!showFullDesc)}
//             >
//               {showFullDesc ? " Show less" : " Read more..."}
//             </Text>
//           )}
//         </Text>
//       </View>
//     </View>
//   );
// };

// export default CarInfoSection;

// const styles = StyleSheet.create({
//   contentSection: { paddingHorizontal: 20, marginTop: 25 },
//   titleRow: { flexDirection: "row", justifyContent: "space-between", alignItems: "center" },
//   carName: { fontFamily: Fonts.bold, fontSize: 24, color: Colors.primary },
//   ratingRow: { flexDirection: "row", alignItems: "center" },
//   ratingText: { fontFamily: Fonts.bold, color: Colors.secondary, marginRight: 5, fontSize: 18 },
//   priceText: { fontFamily: Fonts.semiBold, color: "gray", fontSize: 16, marginTop: 5 },
  
//   buttonWrapper: {
//     marginLeft: -20,
//     width: '110%',
//     marginVertical: 10,
//   },

//   descContainer: {
//     marginTop: 5,
//   },
//   description: { 
//     fontFamily: Fonts.regular, 
//     color: Colors.textSecondary, 
//     lineHeight: 22,
//     fontSize: 14,
//   },
//   readMore: { 
//     color: "#3498db", 
//     fontFamily: Fonts.bold, // थोड़ा मोटा किया ताकि अलग दिखे
//     fontSize: 14 
//   },
// });






















import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Ionicons from "@react-native-vector-icons/ionicons";
import { Colors } from '../../theme/colors';
import { Fonts } from '../../theme/fonts';
import ImageVideoSelectButton from './ImageVideoSelectButton';

const CarInfoSection = ({ 
  car, 
  showFullDesc, 
  setShowFullDesc,
  showImages,
  setShowImages,
  showVideos,
  setShowVideos 
}: any) => {

  const fullDescription = car?.description || "No description provided.";
  const isLongDescription = fullDescription.length > 100;
  const displayDescription = showFullDesc 
    ? fullDescription 
    : fullDescription.slice(0, 100) + (isLongDescription ? "..." : "");

  return (
    <View style={styles.contentSection}>
      
      {/* --- 🚀 फिक्स 1: कार का नाम अब अकेले ऊपर रहेगा (Full Width) --- */}
      <Text style={styles.carName}>
        {car?.carName || "Car Name"}
      </Text>

      {/* --- 🚀 फिक्स 2: प्राइस और रेटिंग अब एक ही लाइन में आमने-सामने --- */}
      <View style={styles.priceRatingRow}>
        <Text style={styles.priceText}>
          ₹ {car?.price ? car.price.toLocaleString('en-IN') : "Price N/A"}
        </Text>

        <View style={styles.ratingRow}>
          <Text style={styles.ratingText}>{car?.rating || "0"}/10</Text>
          <Ionicons name="star" size={18} color={Colors.secondary} />
        </View>
      </View>

      {/* इमेज/वीडियो फिल्टर बटन्स */}
      <View style={styles.buttonWrapper}>
          <ImageVideoSelectButton 
              showImages={showImages}
              setShowImages={setShowImages}
              showVideos={showVideos}
              setShowVideos={setShowVideos}
          />
      </View>

      {/* डिस्क्रिप्शन */}
      <View style={styles.descContainer}>
        <Text style={styles.description}>
          {displayDescription}
          {isLongDescription && (
            <Text 
                style={styles.readMore} 
                onPress={() => setShowFullDesc(!showFullDesc)}
            >
              {showFullDesc ? " Show less" : " Read more..."}
            </Text>
          )}
        </Text>
      </View>
    </View>
  );
};

export default CarInfoSection;

const styles = StyleSheet.create({
  contentSection: { 
    paddingHorizontal: 20, 
    marginTop: 25 
  },
  
  // नाम अब पूरी जगह लेगा और मल्टी-लाइन सपोर्ट करेगा
  carName: { 
    fontFamily: Fonts.bold, 
    fontSize: 24, 
    color: Colors.primary,
    lineHeight: 30, // लाइनों के बीच गैप
  },

  // प्राइस और रेटिंग को एक लाइन में लाने के लिए
  priceRatingRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 8,
  },

  priceText: { 
    fontFamily: Fonts.semiBold, 
    color: "gray", 
    fontSize: 18 
  },

  ratingRow: { 
    flexDirection: "row", 
    alignItems: "center" 
  },

  ratingText: { 
    fontFamily: Fonts.bold, 
    color: Colors.secondary, 
    marginRight: 5, 
    fontSize: 18 
  },
  
  buttonWrapper: {
    marginLeft: -20,
    width: '110%',
    marginVertical: 10,
  },

  descContainer: {
    marginTop: 5,
  },
  description: { 
    fontFamily: Fonts.regular, 
    color: Colors.textSecondary, 
    lineHeight: 22,
    fontSize: 14,
  },
  readMore: { 
    color: "#3498db", 
    fontFamily: Fonts.bold,
    fontSize: 14 
  },
});