import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import Ionicons from "@react-native-vector-icons/ionicons";
import { Colors } from "../../theme/colors";
import { Fonts } from "../../theme/fonts";
import { FILTER_CATEGORIES, MODEL_OPTIONS } from "../../dummydata/dummyData";

const FiltersScreen = ({ navigation }: any) => {
  const [activeCategory, setActiveCategory] = useState("Make & Model");
  const [selectedOptions, setSelectedOptions] = useState<string[]>([]);

  const insets = useSafeAreaInsets();


  // चेकबॉक्स टॉगल लॉजिक
  const toggleOption = (id: string) => {
    if (selectedOptions.includes(id)) {
      setSelectedOptions(selectedOptions.filter(item => item !== id));
    } else {
      setSelectedOptions([...selectedOptions, id]);
    }
  };

  return (
    <SafeAreaView style={styles.safeArea} edges={['top']} >
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Ionicons name="arrow-back" size={28} color={Colors.black} />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Filters</Text>
      </View>

      <View style={styles.mainContainer}>
        {/* --- Left Sidebar (Categories) --- */}
        <View style={styles.sidebar}>
          <ScrollView showsVerticalScrollIndicator={false}>
            {FILTER_CATEGORIES.map((cat) => (
              <TouchableOpacity
                key={cat}
                style={[styles.categoryBtn, activeCategory === cat && styles.activeCategoryBtn]}
                onPress={() => setActiveCategory(cat)}
              >
                <Text style={[styles.categoryText, activeCategory === cat && styles.activeCategoryText]}>
                  {cat}
                </Text>
              </TouchableOpacity>
            ))}
          </ScrollView>
        </View>

        {/* --- Right Content (Options) --- */}
        <View style={styles.contentArea}>
          <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={{ padding: 15 }}>
            {activeCategory === "Make & Model" && (
              <View>
                <Text style={styles.contentTitle}>Suggestions</Text>
                {MODEL_OPTIONS.suggestions.map((item) => (
                  <OptionItem 
                    key={item.id} 
                    item={item} 
                    isSelected={selectedOptions.includes(item.id)} 
                    onPress={() => toggleOption(item.id)} 
                  />
                ))}

                <Text style={[styles.contentTitle, { marginTop: 25 }]}>All Brand</Text>
                {MODEL_OPTIONS.allBrands.map((item) => (
                  <OptionItem 
                    key={item.id} 
                    item={item} 
                    isSelected={selectedOptions.includes(item.id)} 
                    onPress={() => toggleOption(item.id)} 
                  />
                ))}
              </View>
            )}
            {/* अन्य कैटेगरीज के लिए यहाँ कंडीशन लगा सकते हैं */}
          </ScrollView>
        </View>
      </View>

      {/* --- Footer Buttons --- */}
      {/* <View style={styles.footer}> */}
      <View style={[styles.footer, { paddingBottom: insets.bottom + 10 }]}>
        <TouchableOpacity style={styles.clearBtn} onPress={() => setSelectedOptions([])}>
          <Text style={styles.clearText}>CLEAR ALL</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.showBtn} onPress={() => navigation.goBack()}>
          <Text style={styles.showText}>SHOW CAR</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

// --- Checkbox Item Component ---
const OptionItem = ({ item, isSelected, onPress }: any) => (
  <TouchableOpacity style={styles.optionRow} onPress={onPress} activeOpacity={0.7}>
    <View style={[styles.checkbox, isSelected && styles.checkboxSelected]}>
      {isSelected && <Ionicons name="checkmark" size={16} color={Colors.white} />}
    </View>
    <Text style={styles.optionLabel}>
      {item.label} <Text style={styles.countText}>({item.count})</Text>
    </Text>
  </TouchableOpacity>
);

export default FiltersScreen;

const styles = StyleSheet.create({
  safeArea: { flex: 1, backgroundColor: Colors.white },
  header: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 20,
    paddingVertical: 5,
    borderBottomWidth: 0.5,
    borderBottomColor: "#684444",
    paddingBottom:12,
  },
  headerTitle: {
    fontFamily: Fonts.bold,
    fontSize: 20,
    color: Colors.black,
    marginLeft: 25,
  },
  mainContainer: {
    flex: 1,
    flexDirection: "row",
  },

  // Sidebar Styles
  sidebar: {
    width: "35%",
    backgroundColor: "#E0E0E0", // फिग्मा जैसा लाइट ग्रे
  },
  categoryBtn: {
    paddingVertical: 18,
    paddingHorizontal: 15,
    borderBottomWidth: 0.5,
    borderBottomColor: "#D0D0D0",
  },
  activeCategoryBtn: {
    backgroundColor: Colors.primary,
    borderRightWidth: 0,
  },
  categoryText: {
    fontFamily: Fonts.medium,
    fontSize: 13,
    color: "#555",
  },
  activeCategoryText: {
    fontFamily: Fonts.bold,
    color: Colors.white,
  },

  // Content Area Styles
  contentArea: {
    width: "65%",
    backgroundColor: Colors.white,
  },
  contentTitle: {
    fontFamily: Fonts.bold,
    fontSize: 14,
    color: Colors.black,
    marginBottom: 15,
  },
  optionRow: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 18,
  },
  checkbox: {
    width: 22,
    height: 22,
    borderRadius: 5,
    borderWidth: 1.5,
    borderColor: "#C0C0C0",
    backgroundColor: "#F0F0F0",
    justifyContent: "center",
    alignItems: "center",
  },
  checkboxSelected: {
    backgroundColor: Colors.primary,
    borderColor: Colors.primary,
  },
  optionLabel: {
    marginLeft: 15,
    fontFamily: Fonts.medium,
    fontSize: 14,
    color: Colors.black,
  },
  countText: {
    color: "gray",
    fontFamily: Fonts.regular,
  },

  // Footer Styles
  footer: {
    flexDirection: "row",
    padding: 15,
    borderTopWidth: 1,
    borderTopColor: "#F0F0F0",
    backgroundColor: Colors.white,
    // marginBottom: 10, // टैब बार के लिए जगह
  },
  clearBtn: {
    flex: 1,
    backgroundColor: "#F0F0F0",
    height: 55,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 8,
    marginRight: 10,
  },
  clearText: {
    fontFamily: Fonts.bold,
    color: "#999",
  },
  showBtn: {
    flex: 1.5,
    backgroundColor: Colors.secondary,
    height: 55,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 8,
  },
  showText: {
    fontFamily: Fonts.bold,
    color: Colors.white,
    fontSize: 16,
  },
});