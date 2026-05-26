
// import { StyleSheet } from 'react-native';
// import { Colors } from '../../../theme/colors';
// import { Fonts } from '../../../theme/fonts';

// export const styles = StyleSheet.create({
//   safeArea: { 
//     flex: 1, 
//     backgroundColor: Colors.white 
//   },
//   scrollContent: { 
//     paddingHorizontal: 20, 
//     paddingTop: 10 
//   },
  
//   // पूरे हेडर रो का स्टाइल
//   searchHeader: { 
//     flexDirection: "row", 
//     alignItems: "center", 
//     paddingHorizontal: 15, 
//     marginTop: 10,
//     height: 60,
//   },

//   // --- 🚀 फिक्स: इनपुट और सर्च आइकन के लिए नया बॉक्स ---
//   inputWrapper: {
//     flex: 1,
//     flexDirection: 'row',
//     alignItems: 'center',
//     backgroundColor: "#F2F4F7", 
//     borderRadius: 12,
//     paddingHorizontal: 12,
//     height: 48,
//     marginLeft: 10,
//   },

//   searchInput: { 
//     flex: 1, 
//     fontFamily: Fonts.medium, 
//     fontSize: 15, 
//     color: Colors.black,
//     height: '100%',
//   },

//   // सजेशन कार्ड (टेक्स्ट लिस्ट)
//   suggestionsCard: { 
//     backgroundColor: "#FFFFFF", 
//     borderRadius: 15, 
//     marginTop: 10, 
//     elevation: 4, 
//     shadowColor: "#000", 
//     maxHeight: 300 
//   },
  
//   suggestionItem: { 
//     flexDirection: 'row',
//     alignItems: 'center',
//     paddingVertical: 14, 
//     paddingHorizontal: 15, 
//     borderBottomWidth: 0.5, 
//     borderBottomColor: "#F0F0F0" 
//   },
  
//   suggestionText: { 
//     flex: 1,
//     fontFamily: Fonts.bold, 
//     fontSize: 13, 
//     color: Colors.black,
//     marginLeft: 10, // आइकन से दूरी
//   },

//   sectionTitle: { 
//     fontFamily: Fonts.bold, 
//     fontSize: 16, 
//     color: Colors.black, 
//     marginTop: 30, 
//     marginBottom: 15 
//   },

//   // Recommended Chips (Horizontal Scroll)
//   chip: { 
//     backgroundColor: "#F2F4F7", 
//     paddingHorizontal: 20, 
//     paddingVertical: 12, 
//     borderRadius: 10, 
//     marginRight: 12, 
//     marginBottom: 12, 
//     minWidth: 100, 
//     alignItems: 'center' 
//   },
//   chipText: { 
//     fontFamily: Fonts.medium, 
//     fontSize: 13, 
//     color: Colors.black 
//   },

//   // Brands Section
//   brandScrollContent: { 
//     paddingBottom: 10 
//   },
//   brandItem: { 
//     alignItems: 'center', 
//     marginRight: 20 
//   },
//   brandCircle: { 
//     width: 65, 
//     height: 65, 
//     borderRadius: 35, 
//     borderWidth: 1, 
//     borderColor: "#E5E7EB", 
//     justifyContent: "center", 
//     alignItems: "center", 
//     backgroundColor: Colors.white, 
//     elevation: 2, 
//     shadowColor: '#000', 
//     shadowOffset: { width: 0, height: 1 }, 
//     shadowOpacity: 0.1, 
//     shadowRadius: 2 
//   },
//   logoContainer: { 
//     width: 40, 
//     height: 40, 
//     justifyContent: 'center', 
//     alignItems: 'center' 
//   },
//   brandLogo: { 
//     width: '100%', 
//     height: '100%', 
//     resizeMode: "contain" 
//   },
//   brandName: { 
//     marginTop: 8, 
//     fontSize: 11, 
//     fontFamily: Fonts.medium, 
//     color: 'black', 
//     textAlign: 'center' 
//   },
// });
















import { StyleSheet, Dimensions } from 'react-native';
import { Colors } from '../../../theme/colors';
import { Fonts } from '../../../theme/fonts';

const { width } = Dimensions.get('window');

export const styles = StyleSheet.create({
  safeArea: { 
    flex: 1, 
    backgroundColor: Colors.white 
  },
  scrollContent: { 
    paddingHorizontal: 20, 
    paddingTop: 10 
  },
  
  searchHeader: { 
    flexDirection: "row", 
    alignItems: "center", 
    paddingHorizontal: 15, 
    marginTop: 10,
    height: 60,
  },

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

  // 🚀 Naya: Location Bar Style (OLX Style)
  locationRow: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderBottomColor: '#F3F4F6',
    backgroundColor: 'white'
  },
  locationText: {
    flex: 1,
    marginLeft: 8,
    fontSize: 13,
    fontFamily: Fonts.bold,
    color: Colors.primary
  },

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
    marginLeft: 10,
  },

  sectionTitle: { 
    fontFamily: Fonts.bold, 
    fontSize: 16, 
    color: Colors.black, 
    marginTop: 30, 
    marginBottom: 15 
  },

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

  // 🚀 Naya: Modal Styles
  modalOverlay: { flex: 1, backgroundColor: 'rgba(0,0,0,0.5)', justifyContent: 'center', alignItems: 'center' },
  modalContent: { width: width * 0.85, backgroundColor: 'white', borderRadius: 20, padding: 25, elevation: 10 },
  modalTitle: { fontFamily: Fonts.bold, fontSize: 20, color: 'black' },
  inputBox: { flexDirection: 'row', alignItems: 'center', backgroundColor: '#F3F4F6', borderRadius: 12, paddingHorizontal: 15, height: 50, marginTop: 20, borderWidth: 1, borderColor: '#E5E7EB' },
  textInput: { flex: 1, marginLeft: 10, fontFamily: Fonts.medium, color: 'black' },
  btnRow: { flexDirection: 'row', marginTop: 20, justifyContent: 'flex-end' },
  searchBtn: { backgroundColor: Colors.secondary, paddingHorizontal: 25, paddingVertical: 12, borderRadius: 10 },
  searchBtnText: { color: 'white', fontFamily: Fonts.bold }
});