// import React from 'react';
// import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
// import Ionicons from "@react-native-vector-icons/ionicons";
// import { Colors } from '../../theme/colors';
// import { Fonts } from '../../theme/fonts';
// import { useNavigation } from '@react-navigation/native';

// const HomeHeader = () => {
//   const navigation = useNavigation<any>();

//   return (
//     <View>
//       <View style={styles.header}>
//         <View style={styles.row}>
//           <View style={styles.profileImg} />
//           <View style={{ marginLeft: 10 }}>
//             <Text style={styles.hiText}>Hi <Text style={styles.nameText}>Aman</Text></Text>
//           </View>
//         </View>
//         <View style={styles.row}>
//           <Ionicons name="location-outline" size={16} color="red" />
//           <Text style={styles.locText}>Vijay Nagar Indore</Text>
//         </View>
//       </View>

//       <View style={styles.searchContainer}>
//         <View style={styles.searchBar}>
//           <TextInput placeholder="Search Cars..." placeholderTextColor="gray" style={styles.searchInput} />
//         </View>
//         <TouchableOpacity style={{ marginHorizontal: 5 }}>
//           <Ionicons name="heart-outline" size={24} color="black" />
//         </TouchableOpacity>
//         <TouchableOpacity onPress={() => navigation.navigate('NotificationScreen')}>
//           <Ionicons name="notifications-outline" size={24} color="black" />
//         </TouchableOpacity>
//       </View>
//     </View>
//   );
// };

// export default HomeHeader;

// const styles = StyleSheet.create({
//   header: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginTop: 10 },
//   row: { flexDirection: 'row', alignItems: 'center' },
//   profileImg: { width: 40, height: 40, borderRadius: 20, backgroundColor: '#ddd' },
//   hiText: { fontSize: 16, fontFamily: Fonts.regular },
//   nameText: { color: Colors.secondary, fontFamily: Fonts.bold },
//   locText: { fontSize: 11, marginLeft: 3, fontWeight: '500' },
//   searchContainer: { flexDirection: 'row', alignItems: 'center', marginTop: 15 },
//   searchBar: { flex: 1, height: 40, backgroundColor: '#F2F4F7', borderRadius: 8, flexDirection: 'row', alignItems: 'center', paddingHorizontal: 10 },
//   searchInput: { flex: 1, height: '100%', color: 'black' },
// });





















import React from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import Ionicons from "@react-native-vector-icons/ionicons";
import { Colors } from '../../theme/colors';
import { Fonts } from '../../theme/fonts';
import { useNavigation } from '@react-navigation/native';

const HomeHeader = () => {
  const navigation = useNavigation<any>();

  return (
    <View style={styles.container}>
      {/* --- Top Row: Profile & Location --- */}
      <View style={styles.header}>
        <View style={styles.row}>
          <View style={styles.profileImg}>
             <Ionicons name="person" size={20} color="#999" />
          </View>
          <View style={{ marginLeft: 10 }}>
            <Text style={styles.hiText}>Hi <Text style={styles.nameText}>Aman</Text></Text>
          </View>
        </View>
        
        <View style={styles.row}>
          <Ionicons name="location-sharp" size={16} color="#EF4444" />
          <Text style={styles.locText}>Vijay Nagar Indore</Text>
        </View>
      </View>

      {/* --- Second Row: Search Bar & Icons --- */}
      <View style={styles.searchSection}>
        <View style={styles.searchBar}>
          {/* सर्च आइकन (Left) */}
          <Ionicons name="search-outline" size={20} color="#252e3f" style={{marginRight: 8}} />
          
          <TextInput 
            placeholder="Search Cars..." 
            placeholderTextColor="#252e3f" 
            style={styles.searchInput} 
          />

          {/* माइक्रोफोन आइकन (Right - Optional Figma style) */}
          {/* <TouchableOpacity>
             <Ionicons name="mic-outline" size={20} color="gray" />
          </TouchableOpacity> */}
        </View>

        {/* Action Icons */}
        <View style={styles.iconGroup}>
          <TouchableOpacity style={styles.iconBtn}>
            <Ionicons name="heart-outline" size={24} color="black" />
          </TouchableOpacity>
          <TouchableOpacity 
            style={styles.iconBtn} 
            onPress={() => navigation.navigate('NotificationScreen')}
          >
            <Ionicons name="notifications-outline" size={24} color="black" />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default HomeHeader;

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.white,
    paddingBottom: 5,
  },
  header: { 
    flexDirection: 'row', 
    justifyContent: 'space-between', 
    alignItems: 'center', 
    marginTop: 10 
  },
  row: { flexDirection: 'row', alignItems: 'center' },
  profileImg: { 
    width: 40, 
    height: 40, 
    borderRadius: 20, 
    backgroundColor: '#F2F4F7',
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#E0E0E0'
  },
  hiText: { fontSize: 16, fontFamily: Fonts.regular, color: 'black' },
  nameText: { color: Colors.secondary, fontFamily: Fonts.bold },
  locText: { fontSize: 11, marginLeft: 3, fontFamily: Fonts.medium, color: '#666' },
  
  searchSection: { 
    flexDirection: 'row', 
    alignItems: 'center', 
    marginTop: 15,
    justifyContent: 'space-between'
  },
  searchBar: { 
    flex: 1, 
    height: 45, 
    backgroundColor: '#F9FAFB', 
    borderRadius: 12, 
    flexDirection: 'row', 
    alignItems: 'center', 
    paddingHorizontal: 12,
    // --- Border properties ---
    borderWidth: 1,
    borderColor: '#252e3f', // बहुत हल्की ग्रे बॉर्डर
  },
  searchInput: { 
    flex: 1, 
    height: '100%', 
    color: 'black',
    fontFamily: Fonts.regular,
    fontSize: 14
  },
  iconGroup: {
    flexDirection: 'row',
    alignItems: 'center',
    marginLeft: 5
  },
  iconBtn: {
    padding: 5,
    marginLeft: 5,
  }
});