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
  sidebar: { width: "35%", backgroundColor: "#F3F4F7" },
  categoryBtn: { paddingVertical: 18, paddingHorizontal: 15, borderBottomWidth: 1, borderBottomColor: "#E5E7EB" },
  activeCategoryBtn: { backgroundColor: Colors.primary, borderRightWidth: 0 },
  categoryText: { fontFamily: Fonts.medium, fontSize: 13, color: "#6B7280" },
  activeCategoryText: { fontFamily: Fonts.bold, color: Colors.white },
  contentArea: { width: "65%", backgroundColor: Colors.white },
  contentTitle: { fontFamily: Fonts.bold, fontSize: 14, color: Colors.black, marginBottom: 20 },
  optionRow: { flexDirection: "row", alignItems: "center", marginBottom: 22 },
  checkbox: { width: 24, height: 24, borderRadius: 6, borderWidth: 1.5, borderColor: "#D1D5DB", backgroundColor: "#F9FAFB", justifyContent: "center", alignItems: "center" },
  checkboxSelected: { backgroundColor: Colors.primary, borderColor: Colors.primary },
  optionLabel: { marginLeft: 15, fontFamily: Fonts.medium, fontSize: 14, color: Colors.black },
  countText: { color: "#9CA3AF", fontFamily: Fonts.regular },
  footer: { flexDirection: "row", padding: 15, borderTopWidth: 1, borderTopColor: "#F3F4F6", backgroundColor: Colors.white },
  clearBtn: { flex: 1, backgroundColor: "#F3F4F7", height: 55, justifyContent: "center", alignItems: "center", borderRadius: 12, marginRight: 10 },
  clearText: { fontFamily: Fonts.bold, color: "#9CA3AF" },
  showBtn: { flex: 1.5, backgroundColor: Colors.secondary, height: 55, justifyContent: "center", alignItems: "center", borderRadius: 12 },
  showText: { fontFamily: Fonts.bold, color: Colors.white, fontSize: 16 },
  emptyContent: { paddingTop: 50, alignItems: 'center' },
  emptyText: { color: 'gray', fontFamily: Fonts.medium },
});