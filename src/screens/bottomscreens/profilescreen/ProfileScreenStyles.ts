import { StyleSheet } from "react-native";
import { Colors } from "../../../theme/colors";
import { Fonts } from "../../../theme/fonts";

export const styles = StyleSheet.create({
  safeArea: { flex: 1, backgroundColor: Colors.white },
  header: { paddingHorizontal: 15, paddingVertical: 10 },
  scrollContent: { paddingHorizontal: 30 },
  profileSection: { alignItems: "flex-start", marginTop: 10 },
  imageWrapper: { position: 'relative', marginBottom: 20 },
  profileImage: { width: 120, height: 120, borderRadius: 60, backgroundColor: Colors.primary },
  imageEditBtn: { position: 'absolute', bottom: 5, right: 5, backgroundColor: Colors.white, padding: 8, borderRadius: 20, elevation: 5, shadowColor: '#000', shadowOffset: { width: 0, height: 2 }, shadowOpacity: 0.2, shadowRadius: 3 },
  nameContainer: { flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', width: '100%', marginBottom: 30 },
  userName: { fontFamily: Fonts.bold, fontSize: 24, color: Colors.black },
  userRole: { fontFamily: Fonts.regular, fontSize: 14, color: 'gray', marginTop: 2 },
  contactRow: { flexDirection: 'row', alignItems: 'center', marginBottom: 20 },
  contactText: { marginLeft: 20, fontFamily: Fonts.medium, fontSize: 16, color: 'gray' },
  menuSection: { marginTop: 20 },
  menuItem: { flexDirection: 'row', alignItems: 'center', paddingVertical: 15, marginBottom: 5 },
  menuIconWrapper: { width: 50, alignItems: 'flex-start' },
  menuLabel: { fontFamily: Fonts.medium, fontSize: 18, color: Colors.black, marginLeft: 5 },
});