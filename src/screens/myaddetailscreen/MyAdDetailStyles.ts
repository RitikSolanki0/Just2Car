// import { StyleSheet } from "react-native";
// import { Colors } from "../../theme/colors";
// import { Fonts } from "../../theme/fonts";

// export const styles = StyleSheet.create({
//   container: { flex: 1, backgroundColor: 'white' },
//   header: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', paddingHorizontal: 15, height: 60, borderBottomWidth: 1, borderBottomColor: '#f3f4f6' },
//   headerTitle: { fontFamily: Fonts.bold, fontSize: 18, color: 'black' },
//   iconBtn: { padding: 5 },
//   scrollContent: { paddingBottom: 50 },
//   mainImg: { width: '100%', height: 250, resizeMode: 'cover' },

//   content: { padding: 20 },
//   mainInfo: { marginBottom: 20 },
//   title: { fontFamily: Fonts.bold, fontSize: 24, color: Colors.primary },
//   price: { fontFamily: Fonts.bold, fontSize: 20, color: Colors.black, marginTop: 5 },

//   // Status Card
//   statusCard: { padding: 18, borderRadius: 16, marginBottom: 25, borderWidth: 1 },
//   statusRow: { flexDirection: 'row', alignItems: 'center', marginBottom: 10 },
//   statusHeading: { fontFamily: Fonts.bold, fontSize: 16, marginLeft: 10 },
//   statusDescription: { fontFamily: Fonts.regular, fontSize: 13, color: '#4B5563', lineHeight: 20 },

//   inlineConfirmBtn: { backgroundColor: Colors.secondary, flexDirection: 'row', alignItems: 'center', justifyContent: 'center', paddingVertical: 14, borderRadius: 12, marginTop: 15, elevation: 3 },
//   inlineBtnText: { color: 'white', fontFamily: Fonts.bold, fontSize: 14, marginRight: 10 },

//   // Location & Seller Info
//   infoBox: { backgroundColor: '#F9FAFB', padding: 15, borderRadius: 12, marginBottom: 20, borderWidth: 1, borderColor: '#F3F4F6' },
//   infoLabel: { fontSize: 11, color: '#9CA3AF', fontFamily: Fonts.regular, marginBottom: 2 },
//   infoValue: { fontFamily: Fonts.semiBold, fontSize: 14, color: 'black' },
//   locationRow: { flexDirection: 'row', alignItems: 'center', marginBottom: 15 },

//   // Technical Grid
//   sectionTitle: { fontFamily: Fonts.bold, fontSize: 17, color: 'black', marginBottom: 15 },
//   grid: { flexDirection: 'row', flexWrap: 'wrap' },
//   gridItem: { width: '33.33%', marginBottom: 25 },

//   // Description
//   descriptionText: { fontFamily: Fonts.regular, fontSize: 14, color: '#4B5563', lineHeight: 22, marginBottom: 25 },

//   // Features
//   featureRow: { flexDirection: 'row', flexWrap: 'wrap' },
//   featureBadge: { flexDirection: 'row', alignItems: 'center', backgroundColor: '#F8F9FA', paddingHorizontal: 12, paddingVertical: 8, borderRadius: 20, marginRight: 10, marginBottom: 10, borderWidth: 1, borderColor: '#E5E7EB' },
//   featureText: { fontSize: 12, fontFamily: Fonts.medium, color: '#374151', marginLeft: 6 },
//   row: { flexDirection: 'row', alignItems: 'center' },
//   itemLabel: { fontSize: 11, color: '#9CA3AF', fontFamily: Fonts.regular, marginBottom: 2 },
//   itemValue: { fontSize: 14, color: 'black', fontFamily: Fonts.semiBold, marginTop: 2 },
// });
























import { StyleSheet } from "react-native";
import { Colors } from "../../theme/colors";
import { Fonts } from "../../theme/fonts";

export const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: 'white' },
  header: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', paddingHorizontal: 15, height: 60, borderBottomWidth: 1, borderBottomColor: '#f3f4f6' },
  headerTitle: { fontFamily: Fonts.bold, fontSize: 18, color: 'black' },
  iconBtn: { padding: 5 },
  scrollContent: { paddingBottom: 50 },
  mainImg: { width: '100%', height: 250, resizeMode: 'cover' },

  content: { padding: 20 },
  mainInfo: { marginBottom: 20 },
  title: { fontFamily: Fonts.bold, fontSize: 24, color: Colors.primary },
  price: { fontFamily: Fonts.bold, fontSize: 20, color: Colors.black, marginTop: 5 },

  // Status Card
  statusCard: { padding: 18, borderRadius: 16, marginBottom: 20, borderWidth: 1 },
  statusRow: { flexDirection: 'row', alignItems: 'center', marginBottom: 10 },
  statusHeading: { fontFamily: Fonts.bold, fontSize: 16, marginLeft: 10 },
  statusDescription: { fontFamily: Fonts.regular, fontSize: 13, color: '#4B5563', lineHeight: 20 },

  inlineConfirmBtn: { backgroundColor: Colors.secondary, flexDirection: 'row', alignItems: 'center', justifyContent: 'center', paddingVertical: 14, borderRadius: 12, marginTop: 15, elevation: 3 },
  inlineBtnText: { color: 'white', fontFamily: Fonts.bold, fontSize: 14, marginRight: 10 },

  // Inspector Card
  inspectorCard: { backgroundColor: '#FFFFFF', borderRadius: 16, padding: 15, marginBottom: 25, borderWidth: 1, borderColor: '#E5E7EB', elevation: 3, shadowColor: '#8B5CF6', shadowOpacity: 0.1, shadowRadius: 5 },
  inspectorHeader: { flexDirection: 'row', alignItems: 'center', borderBottomWidth: 1, borderBottomColor: '#F3F4F6', paddingBottom: 12, marginBottom: 12 },
  inspectorImg: { width: 50, height: 50, borderRadius: 25, backgroundColor: '#F3F4F6' },
  inspectorInfo: { marginLeft: 15, flex: 1 },
  inspectorName: { fontFamily: Fonts.bold, fontSize: 16, color: 'black' },
  inspectorTag: { fontFamily: Fonts.medium, fontSize: 11, color: '#8B5CF6' },
  callBtn: { backgroundColor: '#F5F3FF', padding: 10, borderRadius: 20 },
  scheduleInfoRow: { flexDirection: 'row', justifyContent: 'space-between', backgroundColor: '#F5F3FF', padding: 10, borderRadius: 10 },
  scheduleItem: { flexDirection: 'row', alignItems: 'center' },
  scheduleText: { marginLeft: 8, fontFamily: Fonts.semiBold, fontSize: 13, color: '#374151' },

  // Info Boxes
  infoBox: { backgroundColor: '#F9FAFB', padding: 15, borderRadius: 12, marginBottom: 20, borderWidth: 1, borderColor: '#F3F4F6' },
  infoLabel: { fontSize: 11, color: '#9CA3AF', fontFamily: Fonts.regular, marginBottom: 2 },
  infoValue: { fontFamily: Fonts.semiBold, fontSize: 14, color: 'black' },
  locationRow: { flexDirection: 'row', alignItems: 'center', marginBottom: 15 },

  // Technical Grid
  sectionTitle: { fontFamily: Fonts.bold, fontSize: 17, color: 'black', marginBottom: 15 },
  grid: { flexDirection: 'row', flexWrap: 'wrap' },
  gridItem: { width: '33.33%', marginBottom: 25 },

  // Description
  descriptionText: { fontFamily: Fonts.regular, fontSize: 14, color: '#4B5563', lineHeight: 22, marginBottom: 25 },

  // Features
  featureRow: { flexDirection: 'row', flexWrap: 'wrap' },
  featureBadge: { flexDirection: 'row', alignItems: 'center', backgroundColor: '#F8F9FA', paddingHorizontal: 12, paddingVertical: 8, borderRadius: 20, marginRight: 10, marginBottom: 10, borderWidth: 1, borderColor: '#E5E7EB' },
  featureText: { fontSize: 12, fontFamily: Fonts.medium, color: '#374151', marginLeft: 6 },
  row: { flexDirection: 'row', alignItems: 'center' },
  itemLabel: { fontSize: 11, color: '#9CA3AF', fontFamily: Fonts.regular, marginBottom: 2 },
  itemValue: { fontSize: 14, color: 'black', fontFamily: Fonts.semiBold, marginTop: 2 },
 analyticsBar: { flexDirection: 'row', justifyContent: 'space-between', backgroundColor: '#F3F4F6', padding: 15, borderRadius: 15, marginBottom: 25 },
analyticsItem: { flexDirection: 'row', alignItems: 'center', flex: 1 },
analyticsIconBg: { width: 40, height: 40, borderRadius: 12, backgroundColor: 'white', justifyContent: 'center', alignItems: 'center', marginRight: 10 },
analyticsLabel: { fontSize: 10, color: 'gray', fontFamily: Fonts.medium },
analyticsValue: { fontSize: 16, color: 'black', fontFamily: Fonts.bold },
});