// import { StyleSheet } from 'react-native';
// import { Colors } from '../../theme/colors';
// import { Fonts } from '../../theme/fonts';

// export const styles = StyleSheet.create({
//   safeArea: { flex: 1, backgroundColor: Colors.white },
//   header: {
//     flexDirection: "row",
//     alignItems: "center",
//     paddingHorizontal: 20,
//     paddingVertical: 10,
//     borderBottomWidth: 1,
//     borderBottomColor: "#F3F4F6",
//     paddingBottom: 15,
//   },
//   headerTitle: { fontFamily: Fonts.bold, fontSize: 20, color: Colors.black, marginLeft: 25 },
//   mainContainer: { flex: 1, flexDirection: "row" },
//   sidebar: { width: "35%", backgroundColor: "#F3F4F7" },
//   categoryBtn: { paddingVertical: 18, paddingHorizontal: 15, borderBottomWidth: 1, borderBottomColor: "#E5E7EB" },
//   activeCategoryBtn: { backgroundColor: Colors.primary, borderRightWidth: 0 },
//   categoryText: { fontFamily: Fonts.medium, fontSize: 13, color: "#6B7280" },
//   activeCategoryText: { fontFamily: Fonts.bold, color: Colors.white },
//   contentArea: { width: "65%", backgroundColor: Colors.white },
//   contentTitle: { fontFamily: Fonts.bold, fontSize: 14, color: Colors.black, marginBottom: 20 },
//   optionRow: { flexDirection: "row", alignItems: "center", marginBottom: 22 },
//   checkbox: { width: 24, height: 24, borderRadius: 6, borderWidth: 1.5, borderColor: "#D1D5DB", backgroundColor: "#F9FAFB", justifyContent: "center", alignItems: "center" },
//   checkboxSelected: { backgroundColor: Colors.primary, borderColor: Colors.primary },
//   optionLabel: { marginLeft: 15, fontFamily: Fonts.medium, fontSize: 14, color: Colors.black },
//   countText: { color: "#9CA3AF", fontFamily: Fonts.regular },
//   footer: { flexDirection: "row", padding: 15, borderTopWidth: 1, borderTopColor: "#F3F4F6", backgroundColor: Colors.white },
//   clearBtn: { flex: 1, backgroundColor: "#F3F4F7", height: 55, justifyContent: "center", alignItems: "center", borderRadius: 12, marginRight: 10 },
//   clearText: { fontFamily: Fonts.bold, color: "#9CA3AF" },
//   showBtn: { flex: 1.5, backgroundColor: Colors.secondary, height: 55, justifyContent: "center", alignItems: "center", borderRadius: 12 },
//   showText: { fontFamily: Fonts.bold, color: Colors.white, fontSize: 16 },
//   emptyContent: { paddingTop: 50, alignItems: 'center' },
//   emptyText: { color: 'gray', fontFamily: Fonts.medium },
//   searchContainer: { flexDirection: 'row', alignItems: 'center', borderColor: '#ccc', borderRadius: 5, paddingHorizontal: 10, height: 45, marginBottom: 10, borderWidth: 1 },
//   searchInput: { flex: 1, fontSize: 14, color: 'black' },
//   accordionHeader: { flexDirection: 'row', justifyContent: 'space-between', paddingVertical: 15, borderBottomWidth: 1, borderBottomColor: '#eee' },
//   sectionTitle: { fontSize: 12, fontWeight: 'bold', color: 'black' },
//   brandGrid: { flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'space-between', marginTop: 10 },
//   brandBox: { width: '30%', padding: 10, borderWidth: 1, borderColor: '#eee', alignItems: 'center', marginBottom: 10, borderRadius: 5 },
//   activeBox: { borderColor: Colors.secondary, backgroundColor: '#FFFBEB' },
//   brandImg: { width: 40, height: 40, resizeMode: 'contain' },
//   brandName: { fontSize: 10, marginTop: 5, textAlign: 'center', color: 'black' },
//   subHeader: { fontSize: 13, color: 'gray', marginBottom: 15, fontFamily: Fonts.medium },
//   yearOption: {
//     paddingVertical: 15,
//     paddingHorizontal: 15,
//     borderWidth: 1,
//     borderColor: '#E5E7EB',
//     borderRadius: 8,
//     marginBottom: 10,
//     backgroundColor: '#F9FAFB'
//   },
//   activeYearOption: {
//     borderColor: Colors.primary,
//     backgroundColor: '#F0F7FF',
//     borderWidth: 2
//   },
//   yearText: { fontSize: 14, color: 'black' },
//   rangeRow: { flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' },
//   yearInput: {
//     flex: 1,
//     height: 50,
//     borderWidth: 1,
//     borderColor: '#ccc',
//     borderRadius: 8,
//     textAlign: 'center',
//     fontSize: 16,
//     color: 'black'
//   },
// });















import { StyleSheet } from 'react-native';
import { Colors } from '../../theme/colors';
import { Fonts } from '../../theme/fonts';

export const styles = StyleSheet.create({
  safeArea: { flex: 1, backgroundColor: Colors.white },
  header: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: "#F3F4F6",
    paddingBottom: 15,
  },
  headerTitle: { fontFamily: Fonts.bold, fontSize: 20, color: Colors.black, marginLeft: 25 },
  mainContainer: { flex: 1, flexDirection: "row" },
  
  // Sidebar
  sidebar: { width: "35%", backgroundColor: "#F3F4F7" },
  categoryBtn: { paddingVertical: 18, paddingHorizontal: 15, borderBottomWidth: 1, borderBottomColor: "#E5E7EB" },
  activeCategoryBtn: { backgroundColor: Colors.primary, borderRightWidth: 0 },
  categoryText: { fontFamily: Fonts.medium, fontSize: 13, color: "#6B7280" },
  activeCategoryText: { fontFamily: Fonts.bold, color: Colors.white },
  
  // Content Area
  contentArea: { width: "65%", backgroundColor: Colors.white },
  contentTitle: { fontFamily: Fonts.bold, fontSize: 14, color: Colors.black, marginBottom: 20 },
  
  // Reuseable Option Row (Checkboxes)
  optionRow: { flexDirection: "row", alignItems: "center", marginBottom: 22 },
  checkbox: { width: 24, height: 24, borderRadius: 6, borderWidth: 1.5, borderColor: "#D1D5DB", backgroundColor: "#F9FAFB", justifyContent: "center", alignItems: "center" },
  checkboxSelected: { backgroundColor: Colors.primary, borderColor: Colors.primary },
  optionLabel: { marginLeft: 15, fontFamily: Fonts.medium, fontSize: 14, color: Colors.black },

  // Footer
  footer: { flexDirection: "row", padding: 15, borderTopWidth: 1, borderTopColor: "#F3F4F6", backgroundColor: Colors.white },
  clearBtn: { flex: 1, backgroundColor: "#F3F4F7", height: 55, justifyContent: "center", alignItems: "center", borderRadius: 12, marginRight: 10 },
  clearText: { fontFamily: Fonts.bold, color: "#9CA3AF" },
  showBtn: { flex: 1.5, backgroundColor: Colors.secondary, height: 55, justifyContent: "center", alignItems: "center", borderRadius: 12 },
  showText: { fontFamily: Fonts.bold, color: Colors.white, fontSize: 16 },

  // Brand Grid & Search (OLX Style)
  searchContainer: { flexDirection: 'row', alignItems: 'center', borderColor: Colors.inputboxbordercolor, borderRadius: 8, paddingHorizontal: 12, height: 48, marginBottom: 15, borderWidth: 1 },
  searchInput: { flex: 1, fontSize: 14, color: Colors.black, fontFamily: Fonts.medium },
  accordionHeader: { flexDirection: 'row', justifyContent: 'space-between', paddingVertical: 15, borderBottomWidth: 1, borderBottomColor: '#eee', alignItems: 'center' },
  sectionTitle: { fontSize: 12, fontFamily: Fonts.bold, color: Colors.black, textTransform: 'uppercase' },
  brandGrid: { flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'space-between', marginTop: 10 },
  brandBox: { width: '31%', padding: 10, borderWidth: 1, borderColor: '#eee', alignItems: 'center', marginBottom: 12, borderRadius: 10, backgroundColor: Colors.white },
  activeBox: { borderColor: Colors.secondary, backgroundColor: '#FFFBEB' },
  brandImg: { width: 35, height: 35, resizeMode: 'contain' },
  brandName: { fontSize: 10, marginTop: 5, textAlign: 'center', color: Colors.black, fontFamily: Fonts.medium },

  // Year Section Styles
  subHeader: { fontSize: 13, color: 'gray', marginBottom: 15, fontFamily: Fonts.medium },
  yearOption: {
    paddingVertical: 15,
    paddingHorizontal: 15,
    borderWidth: 1,
    borderColor: Colors.inputboxbordercolor,
    borderRadius: 12,
    marginBottom: 10,
    backgroundColor: '#F9FAFB'
  },
  activeYearOption: {
    borderColor: Colors.primary,
    backgroundColor: '#F0F7FF',
    borderWidth: 1.5
  },
  yearText: { fontSize: 14, color: Colors.black, fontFamily: Fonts.medium },
  rangeRow: { flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', marginTop: 10 },
  yearInput: {
    flex: 1,
    height: 52,
    borderWidth: 1,
    borderColor: Colors.inputboxbordercolor,
    borderRadius: 12,
    textAlign: 'center',
    fontSize: 16,
    color: Colors.black,
    fontFamily: Fonts.semiBold,
    backgroundColor: '#F9FAFB'
  },
  emptyContent: { paddingTop: 50, alignItems: 'center' },
  emptyText: { color: 'gray', fontFamily: Fonts.medium },
});