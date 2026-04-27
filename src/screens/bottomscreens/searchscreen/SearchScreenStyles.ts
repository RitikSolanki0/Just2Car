// import { StyleSheet } from 'react-native';
// import { Colors } from '../../../theme/colors';
// import { Fonts } from '../../../theme/fonts';

// export const styles = StyleSheet.create({
//   safeArea: { flex: 1, backgroundColor: Colors.white },
//   scrollContent: { paddingHorizontal: 20, paddingTop: 10 },
//   searchHeader: { flexDirection: "row", alignItems: "center", backgroundColor: "#F2F4F7", borderRadius: 15, paddingHorizontal: 15, height: 55, marginTop: 10 },
//   searchInput: { flex: 1, marginLeft: 15, fontFamily: Fonts.medium, fontSize: 16, color: Colors.black },
//   suggestionsCard: { backgroundColor: "#FFFFFF", borderRadius: 15, paddingVertical: 10, marginTop: 10, elevation: 4, shadowColor: "#000", maxHeight: 250 },
//   // suggestionItem: { paddingVertical: 12, paddingHorizontal: 20, borderBottomWidth: 0.5, borderBottomColor: "#F0F0F0" },
//   suggestionText: { fontFamily: Fonts.bold, fontSize: 13, color: Colors.black },
//   sectionTitle: { fontFamily: Fonts.bold, fontSize: 16, color: Colors.black, marginTop: 30, marginBottom: 15 },
//   columnWrapper: { flexDirection: 'column' },
//   chip: { backgroundColor: "#F2F4F7", paddingHorizontal: 20, paddingVertical: 12, borderRadius: 10, marginRight: 12, marginBottom: 12, minWidth: 100, alignItems: 'center' },
//   chipText: { fontFamily: Fonts.medium, fontSize: 13, color: Colors.black },
//   brandScrollContent: { paddingBottom: 10 },
//   brandItem: { alignItems: 'center', marginRight: 20 },
//   brandCircle: { width: 65, height: 65, borderRadius: 35, borderWidth: 1, borderColor: "#E5E7EB", justifyContent: "center", alignItems: "center", backgroundColor: Colors.white, elevation: 2, shadowColor: '#000', shadowOffset: { width: 0, height: 1 }, shadowOpacity: 0.1, shadowRadius: 2 },
//   logoContainer: { width: 40, height: 40, justifyContent: 'center', alignItems: 'center' },
//   brandLogo: { width: '100%', height: '100%', resizeMode: "contain" },
//   brandName: { marginTop: 8, fontSize: 11, fontFamily: Fonts.medium, color: 'black', textAlign: 'center' },
//   resultsGrid: {
//     marginTop: 10,
//   },
//   cardWrapperRow: {
//     flexDirection: 'row',
//     flexWrap: 'wrap',
//     justifyContent: 'space-between',
//     paddingTop: 10,
//   },
//   suggestionItem: {
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//     paddingVertical: 12,
//     paddingHorizontal: 20,
//     borderBottomWidth: 0.5,
//     borderBottomColor: "#F0F0F0",
//     alignItems: 'center'
//   },
// });

















import { StyleSheet } from 'react-native';
import { Colors } from '../../../theme/colors';
import { Fonts } from '../../../theme/fonts';

export const styles = StyleSheet.create({
  safeArea: { 
    flex: 1, 
    backgroundColor: Colors.white 
  },
  scrollContent: { 
    paddingHorizontal: 20, 
    paddingTop: 10 
  },
  
  // पूरे हेडर रो का स्टाइल
  searchHeader: { 
    flexDirection: "row", 
    alignItems: "center", 
    paddingHorizontal: 15, 
    marginTop: 10,
    height: 60,
  },

  // --- 🚀 फिक्स: इनपुट और सर्च आइकन के लिए नया बॉक्स ---
  inputWrapper: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: "#F2F4F7", 
    borderRadius: 12,
    paddingHorizontal: 12,
    height: 48,
    marginLeft: 10,
  },

  searchInput: { 
    flex: 1, 
    fontFamily: Fonts.medium, 
    fontSize: 15, 
    color: Colors.black,
    height: '100%',
  },

  // सजेशन कार्ड (टेक्स्ट लिस्ट)
  suggestionsCard: { 
    backgroundColor: "#FFFFFF", 
    borderRadius: 15, 
    marginTop: 10, 
    elevation: 4, 
    shadowColor: "#000", 
    maxHeight: 300 
  },
  
  suggestionItem: { 
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 14, 
    paddingHorizontal: 15, 
    borderBottomWidth: 0.5, 
    borderBottomColor: "#F0F0F0" 
  },
  
  suggestionText: { 
    flex: 1,
    fontFamily: Fonts.bold, 
    fontSize: 13, 
    color: Colors.black,
    marginLeft: 10, // आइकन से दूरी
  },

  sectionTitle: { 
    fontFamily: Fonts.bold, 
    fontSize: 16, 
    color: Colors.black, 
    marginTop: 30, 
    marginBottom: 15 
  },

  // Recommended Chips (Horizontal Scroll)
  chip: { 
    backgroundColor: "#F2F4F7", 
    paddingHorizontal: 20, 
    paddingVertical: 12, 
    borderRadius: 10, 
    marginRight: 12, 
    marginBottom: 12, 
    minWidth: 100, 
    alignItems: 'center' 
  },
  chipText: { 
    fontFamily: Fonts.medium, 
    fontSize: 13, 
    color: Colors.black 
  },

  // Brands Section
  brandScrollContent: { 
    paddingBottom: 10 
  },
  brandItem: { 
    alignItems: 'center', 
    marginRight: 20 
  },
  brandCircle: { 
    width: 65, 
    height: 65, 
    borderRadius: 35, 
    borderWidth: 1, 
    borderColor: "#E5E7EB", 
    justifyContent: "center", 
    alignItems: "center", 
    backgroundColor: Colors.white, 
    elevation: 2, 
    shadowColor: '#000', 
    shadowOffset: { width: 0, height: 1 }, 
    shadowOpacity: 0.1, 
    shadowRadius: 2 
  },
  logoContainer: { 
    width: 40, 
    height: 40, 
    justifyContent: 'center', 
    alignItems: 'center' 
  },
  brandLogo: { 
    width: '100%', 
    height: '100%', 
    resizeMode: "contain" 
  },
  brandName: { 
    marginTop: 8, 
    fontSize: 11, 
    fontFamily: Fonts.medium, 
    color: 'black', 
    textAlign: 'center' 
  },
});