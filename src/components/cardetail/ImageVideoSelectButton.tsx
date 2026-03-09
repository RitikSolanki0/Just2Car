// import React from 'react';
// import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
// import Ionicons from "@react-native-vector-icons/ionicons";
// import { Colors } from '../../theme/colors';
// import { Fonts } from '../../theme/fonts';

// const ImageVideoSelectButton = ({ showImages, setShowImages, showVideos, setShowVideos }: any) => {
//   return (
//     <View style={styles.container}>
//       <View style={styles.mediaRow}>
        
//         {/* Image Toggle */}
//         <TouchableOpacity 
//           style={[styles.mediaBtn, { backgroundColor: showImages ? Colors.secondary : '#F3F4F6' }]} 
//           onPress={() => setShowImages(!showImages)}
//         >
//           <Ionicons 
//             name={showImages ? "checkbox" : "square-outline"} 
//             size={20} 
//             color={showImages ? Colors.white : 'gray'} 
//           />
//           <Text style={[styles.mediaBtnText, { color: showImages ? Colors.white : 'gray' }]}> Image</Text>
//         </TouchableOpacity>

//         {/* Video Toggle */}
//         <TouchableOpacity 
//           style={[styles.mediaBtn, { backgroundColor: showVideos ? Colors.secondary : '#F3F4F6' }]} 
//           onPress={() => setShowVideos(!showVideos)}
//         >
//           <Ionicons 
//             name={showVideos ? "checkbox" : "square-outline"} 
//             size={20} 
//             color={showVideos ? Colors.white : 'gray'} 
//           />
//           <Text style={[styles.mediaBtnText, { color: showVideos ? Colors.white : 'gray' }]}> Video</Text>
//         </TouchableOpacity>

//         <TouchableOpacity>
//            <Text style={styles.seeAll}>See All</Text>
//         </TouchableOpacity>
//       </View>
//     </View>
//   );
// };

// export default ImageVideoSelectButton;

// const styles = StyleSheet.create({
//   container: { paddingHorizontal: 20, marginTop: 20 },
//   mediaRow: { flexDirection: "row", alignItems: "center", justifyContent: 'space-between' },
//   mediaBtn: { flexDirection: "row", alignItems: "center", paddingHorizontal: 15, paddingVertical: 8, borderRadius: 8, minWidth: 100, justifyContent: 'center' },
//   mediaBtnText: { fontFamily: Fonts.bold, fontSize: 14 },
//   seeAll: { color: "gray", textDecorationLine: "underline", fontSize: 13 },
// });

















import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import Ionicons from "@react-native-vector-icons/ionicons";
import { Colors } from '../../theme/colors';
import { Fonts } from '../../theme/fonts';

const ImageVideoSelectButton = ({ showImages, setShowImages, showVideos, setShowVideos }: any) => {
  return (
    <View style={styles.container}>
      <View style={styles.mediaRow}>
        
        {/* Image Toggle Button */}
        <TouchableOpacity 
          activeOpacity={0.8}
          style={[
            styles.mediaBtn, 
            { backgroundColor: showImages ? Colors.secondary : '#F3F4F6' }
          ]} 
          onPress={() => setShowImages(!showImages)}
        >
          <Ionicons 
            name={showImages ? "checkbox" : "square-outline"} 
            size={20} 
            color={showImages ? Colors.white : '#9CA3AF'} 
          />
          <Text style={[
            styles.mediaBtnText, 
            { color: showImages ? Colors.white : '#4B5563' }
          ]}>
            Image
          </Text>
        </TouchableOpacity>

        {/* Video Toggle Button */}
        <TouchableOpacity 
          activeOpacity={0.8}
          style={[
            styles.mediaBtn, 
            { backgroundColor: showVideos ? Colors.secondary : '#F3F4F6' }
          ]} 
          onPress={() => setShowVideos(!showVideos)}
        >
          <Ionicons 
            name={showVideos ? "checkbox" : "square-outline"} 
            size={20} 
            color={showVideos ? Colors.white : '#9CA3AF'} 
          />
          <Text style={[
            styles.mediaBtnText, 
            { color: showVideos ? Colors.white : '#4B5563' }
          ]}>
            Video
          </Text>
        </TouchableOpacity>

        {/* 'See All' यहाँ से हटा दिया गया है */}
      </View>
    </View>
  );
};

export default ImageVideoSelectButton;

const styles = StyleSheet.create({
  container: { 
    marginTop: 5, 
    // पैडिंग हटा दी क्योंकि CarInfoSection इसे हैंडल कर रहा है
    marginStart: 20,
  },
  mediaRow: { 
    flexDirection: "row", 
    alignItems: "center", 
    justifyContent: 'flex-start', // बटन्स को लेफ्ट साइड में रखने के लिए
  },
  mediaBtn: { 
    flexDirection: "row", 
    alignItems: "center", 
    paddingHorizontal: 18, 
    paddingVertical: 10, 
    borderRadius: 8,
    marginRight: 12, // दोनों बटन्स के बीच का गैप
    minWidth: 100,
    justifyContent: 'center',
    // हल्का सा शैडो
    elevation: 2,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
  },
  mediaBtnText: { 
    fontFamily: Fonts.bold, 
    fontSize: 14,
    marginLeft: 6, // आइकन और टेक्स्ट के बीच गैप
  },
});