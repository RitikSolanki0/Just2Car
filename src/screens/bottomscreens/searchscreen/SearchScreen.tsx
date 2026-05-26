
// import React from "react";
// import { 
//   View, 
//   Text, 
//   TextInput, 
//   TouchableOpacity, 
//   ScrollView, 
//   Image, 
//   ActivityIndicator 
// } from "react-native";
// import { SafeAreaView } from "react-native-safe-area-context";
// import Ionicons from "@react-native-vector-icons/ionicons";
// import { styles } from "./SearchScreenStyles";
// import { useSearchLogic } from "./useSearchLogic";
// import CarCard from "../../../components/carcard/CarCard"; 
// import { Colors } from "../../../theme/colors";

// const SearchScreen = ({ navigation }: any) => {
//   const { 
//     searchText, setSearchText, searchResults, topBrands, topModels, 
//     loading, isResultView, setIsResultView, triggerSearch 
//   } = useSearchLogic();

//   return (
//     <SafeAreaView style={styles.safeArea}>
//       {/* 1. Search Bar */}
//       <View style={styles.searchHeader}>
//         <TouchableOpacity onPress={() => navigation.goBack()}>
//           <Ionicons name="arrow-back" size={26} color={Colors.black} />
//         </TouchableOpacity>
        
//         <View style={styles.inputWrapper}>
//             <TextInput 
//               style={styles.searchInput}
//               value={searchText}
//               onChangeText={(text) => {
//                   setSearchText(text);
//                   if (isResultView) setIsResultView(false);
//               }}
//               placeholder="Search Brand, Model or City..."
//               autoFocus={true}
//             />
//             <TouchableOpacity onPress={() => triggerSearch(searchText)}>
//                <Ionicons name="search-outline" size={20} color="gray" />
//             </TouchableOpacity>
//         </View>

//         {loading ? <ActivityIndicator size="small" color="gray" style={{marginLeft: 10}} /> : (
//             (searchText.length > 0 || isResultView) && 
//             <TouchableOpacity onPress={() => { setSearchText(""); setIsResultView(false); }}>
//                 <Ionicons name="close-circle" size={20} color="gray" style={{marginLeft: 10}} />
//             </TouchableOpacity>
//         )}
//       </View>

//       <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={styles.scrollContent}>
        
//         {/* --- 🚀 फिक्स: अगर रिजल्ट मोड है या कुछ टाइप किया है --- */}
//         {(isResultView || (searchText.length > 0 && searchResults.length > 0)) ? (
          
//           isResultView ? (
//             // --- MODE A: Results Grid (Cards) ---
//             <View style={{ marginTop: 10 }}>
//                <Text style={styles.sectionTitle}>
//                  {searchText ? `Results for "${searchText}"` : "Filtered Results"}
//                </Text>
               
//                {!loading && searchResults.length > 0 ? (
//                  <View style={{ flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'space-between', marginTop: 10 }}>
//                     {searchResults.map((item) => (
//                       <CarCard key={item._id} item={item} width="48%" />
//                     ))}
//                  </View>
//                ) : !loading && (
//                  <View style={{alignItems:'center', marginTop: 50}}>
//                     <Ionicons name="search-outline" size={50} color="#DDD" />
//                     <Text style={{color: 'gray', marginTop: 10}}>No cars found matching your search.</Text>
//                  </View>
//                )}
//             </View>
//           ) : (
//             // --- MODE B: Suggestions List (Text) ---
//             <View style={styles.suggestionsCard}>
//               {searchResults.map((item, index) => {
//                 const brand = item.brand?.name || "";
//                 const model = typeof item.model === 'object' ? item.model?.name : item.model;
//                 return (
//                   <TouchableOpacity key={index} style={styles.suggestionItem} onPress={() => triggerSearch(`${brand} ${model}`)}>
//                     <Ionicons name="car-outline" size={18} color="gray" />
//                     <Text style={styles.suggestionText}>{brand} {model}</Text>
//                     <Ionicons name="arrow-up-outline" size={14} color="#CCC" style={{transform: [{rotate: '315deg'}]}} />
//                   </TouchableOpacity>
//                 );
//               })}
//             </View>
//           )

//         ) : null}

//         {/* --- 3. Static Content (Hide when results are shown) --- */}
//         {!isResultView && (
//           <>
//             <Text style={styles.sectionTitle}>Recommended for you</Text>
//             <ScrollView horizontal showsHorizontalScrollIndicator={false}>
//               {topModels.map((pair: any, index: number) => (
//                 <View key={index} style={{ flexDirection: 'column' }}>
//                   {pair.map((item: any, i: number) => (
//                     <TouchableOpacity key={i} style={styles.chip} onPress={() => triggerSearch(item.name)}>
//                       <Text style={styles.chipText}>{item.name}</Text>
//                     </TouchableOpacity>
//                   ))}
//                 </View>
//               ))}
//             </ScrollView>

//             <Text style={styles.sectionTitle}>Popular Brands</Text>
//             <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={styles.brandScrollContent}>
//               {topBrands.map((item) => (
//                 <TouchableOpacity key={item._id} style={styles.brandItem} onPress={() => triggerSearch(item.name)}>
//                   <View style={styles.brandCircle}>
//                     <View style={styles.logoContainer}><Image source={{ uri: item.image }} style={styles.brandLogo} /></View>
//                   </View>
//                   <Text style={styles.brandName}>{item.name}</Text>
//                 </TouchableOpacity>
//               ))}
//             </ScrollView>
//           </>
//         )}

//         <View style={{ height: 120 }} />
//       </ScrollView>
//     </SafeAreaView>
//   );
// };

// export default SearchScreen;

















import React, { useState } from "react";
import { 
  View, 
  Text, 
  TextInput, 
  TouchableOpacity, 
  ScrollView, 
  Image, 
  ActivityIndicator,
  Modal,
  TouchableWithoutFeedback
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Ionicons from "@react-native-vector-icons/ionicons";
import { styles } from "./SearchScreenStyles";
import { useSearchLogic } from "./useSearchLogic";
import CarCard from "../../../components/carcard/CarCard"; 
import { Colors } from "../../../theme/colors";

const SearchScreen = ({ navigation }: any) => {
  const { 
    searchText, setSearchText, searchResults, topBrands, topModels, 
    loading, isResultView, setIsResultView, triggerSearch,
    currentCity, updateSearchLocation, isLocationModalVisible, setLocationModalVisible
  } = useSearchLogic();

  const [typedCity, setTypedCity] = useState("");

  const handleCitySubmit = () => {
    if (typedCity.trim()) {
      updateSearchLocation(typedCity.trim());
      setLocationModalVisible(false);
      setTypedCity("");
    }
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      {/* 1. Search Bar */}
      <View style={styles.searchHeader}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Ionicons name="arrow-back" size={26} color={Colors.black} />
        </TouchableOpacity>
        
        <View style={styles.inputWrapper}>
            <TextInput 
              style={styles.searchInput}
              value={searchText}
              onChangeText={(text) => {
                  setSearchText(text);
                  if (isResultView) setIsResultView(false);
              }}
              placeholder="Search Brand, Model..."
              autoFocus={true}
            />
            <TouchableOpacity onPress={() => triggerSearch(searchText)}>
               <Ionicons name="search-outline" size={20} color="gray" />
            </TouchableOpacity>
        </View>

        {loading ? <ActivityIndicator size="small" color="gray" style={{marginLeft: 10}} /> : (
            (searchText.length > 0 || isResultView) && 
            <TouchableOpacity onPress={() => { setSearchText(""); setIsResultView(false); }}>
                <Ionicons name="close-circle" size={20} color="gray" style={{marginLeft: 10}} />
            </TouchableOpacity>
        )}
      </View>

      {/* 🚀 2. OLX Style Location Bar */}
      <TouchableOpacity 
        style={styles.locationRow} 
        activeOpacity={0.8}
        onPress={() => setLocationModalVisible(true)}
      >
        <Ionicons name="location-sharp" size={18} color="#EF4444" />
        <Text style={styles.locationText} numberOfLines={1}>
          {currentCity}
        </Text>
        <Ionicons name="chevron-down" size={16} color="gray" />
      </TouchableOpacity>

      <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={styles.scrollContent}>
        
        {/* --- Results Section --- */}
        {(isResultView || (searchText.length > 0 && searchResults.length > 0)) ? (
          
          isResultView ? (
            <View style={{ marginTop: 10 }}>
               <Text style={styles.sectionTitle}>
                 {searchText ? `Results for "${searchText}"` : "Filtered Results"} in {currentCity}
               </Text>
               
               {!loading && searchResults.length > 0 ? (
                 <View style={{ flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'space-between', marginTop: 10 }}>
                    {searchResults.map((item) => (
                      <CarCard key={item._id} item={item} width="48%" />
                    ))}
                 </View>
               ) : !loading && (
                 <View style={{alignItems:'center', marginTop: 50}}>
                    <Ionicons name="search-outline" size={50} color="#DDD" />
                    <Text style={{color: 'gray', marginTop: 10, textAlign: 'center'}}>
                        No cars found in {currentCity}.{'\n'}Try changing location or search term.
                    </Text>
                 </View>
               )}
            </View>
          ) : (
            <View style={styles.suggestionsCard}>
              {searchResults.map((item, index) => {
                const brand = item.brand?.name || "";
                const model = typeof item.model === 'object' ? item.model?.name : item.model;
                return (
                  <TouchableOpacity key={index} style={styles.suggestionItem} onPress={() => triggerSearch(`${brand} ${model}`)}>
                    <Ionicons name="car-outline" size={18} color="gray" />
                    <Text style={styles.suggestionText}>{brand} {model}</Text>
                    <Ionicons name="arrow-up-outline" size={14} color="#CCC" style={{transform: [{rotate: '315deg'}]}} />
                  </TouchableOpacity>
                );
              })}
            </View>
          )

        ) : null}

        {/* --- Static Content --- */}
        {!isResultView && (
          <>
            <Text style={styles.sectionTitle}>Recommended for you</Text>
            <ScrollView horizontal showsHorizontalScrollIndicator={false}>
              {topModels.map((pair: any, index: number) => (
                <View key={index} style={{ flexDirection: 'column' }}>
                  {pair.map((item: any, i: number) => (
                    <TouchableOpacity key={i} style={styles.chip} onPress={() => triggerSearch(item.name)}>
                      <Text style={styles.chipText}>{item.name}</Text>
                    </TouchableOpacity>
                  ))}
                </View>
              ))}
            </ScrollView>

            <Text style={styles.sectionTitle}>Popular Brands</Text>
            <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={styles.brandScrollContent}>
              {topBrands.map((item) => (
                <TouchableOpacity key={item._id} style={styles.brandItem} onPress={() => triggerSearch(item.name)}>
                  <View style={styles.brandCircle}>
                    <View style={styles.logoContainer}><Image source={{ uri: item.image }} style={styles.brandLogo} /></View>
                  </View>
                  <Text style={styles.brandName}>{item.name}</Text>
                </TouchableOpacity>
              ))}
            </ScrollView>
          </>
        )}

        <View style={{ height: 120 }} />
      </ScrollView>

      {/* 🚀 3. Location Selection Modal */}
      <Modal
        visible={isLocationModalVisible}
        transparent={true}
        animationType="fade"
        onRequestClose={() => setLocationModalVisible(false)}
      >
        <TouchableWithoutFeedback onPress={() => setLocationModalVisible(false)}>
          <View style={styles.modalOverlay}>
            <TouchableWithoutFeedback>
              <View style={styles.modalContent}>
                <Text style={styles.modalTitle}>Change Search Location</Text>
                
                <View style={styles.inputBox}>
                  <Ionicons name="search" size={18} color="gray" />
                  <TextInput 
                    placeholder="Enter city (e.g. Bhopal)" 
                    style={styles.textInput}
                    value={typedCity}
                    onChangeText={setTypedCity}
                    autoFocus={true}
                    onSubmitEditing={handleCitySubmit}
                  />
                </View>

                <View style={styles.btnRow}>
                  <TouchableOpacity style={styles.searchBtn} onPress={handleCitySubmit}>
                    <Text style={styles.searchBtnText}>Update</Text>
                  </TouchableOpacity>
                </View>
              </View>
            </TouchableWithoutFeedback>
          </View>
        </TouchableWithoutFeedback>
      </Modal>

    </SafeAreaView>
  );
};

export default SearchScreen;