import { StyleSheet } from "react-native";
import { Colors } from "../../theme/colors";
import { Fonts } from "../../theme/fonts";

export const styles = StyleSheet.create({
  safeArea: { flex: 1, backgroundColor: Colors.white },
  header: { flexDirection: "row", justifyContent: "space-between", alignItems: "center", paddingHorizontal: 15, height: 60 },
  headerTitle: { fontFamily: Fonts.bold, fontSize: 18, color: Colors.black },
  iconBtn: { padding: 5 },
  content: { paddingBottom: 150 },
  imageContainer: { width: "100%", height: 200, justifyContent: 'center', alignItems: 'center', marginTop: 10 },
  carImage: { width: "85%", height: "100%", resizeMode: "contain" },
  infoContainer: { paddingHorizontal: 20, marginTop: 20 },
  titleRow: { flexDirection: "row", justifyContent: "space-between", alignItems: "flex-start" },
  carName: { fontFamily: Fonts.bold, fontSize: 22, color: Colors.primary },
  carPrice: { fontFamily: Fonts.semiBold, fontSize: 18, color: Colors.black, marginTop: 4 },
  exShowroom: { fontSize: 12, color: "#999", marginTop: 4 },
  boldText: { fontWeight: "bold", color: Colors.black },
  shareBtn: { backgroundColor: '#F3F4F6', padding: 8, borderRadius: 20 },
  successBadgeRow: { flexDirection: "row", alignItems: "center", marginTop: 30 },
  greenCircle: { marginRight: 15 },
  successText: { fontFamily: Fonts.bold, fontSize: 18, color: Colors.black },
  detailsList: { marginTop: 30 },
  detailItem: { flexDirection: "row", alignItems: "flex-start", marginBottom: 20 },
  detailText: { marginLeft: 15, fontSize: 14, color: Colors.black, fontFamily: Fonts.medium, lineHeight: 20, flex: 1 },
  footer: { position: "absolute", bottom: 0, flexDirection: "row", width: "100%", padding: 20, backgroundColor: 'white', justifyContent: 'space-between', borderTopWidth: 1, borderTopColor: '#f0f0f0', elevation: 10 },
  rescheduleBtn: { backgroundColor: "#F3F4F6", flex: 1, height: 55, borderRadius: 12, justifyContent: "center", alignItems: "center", marginRight: 10 },
  rescheduleText: { fontFamily: Fonts.bold, fontSize: 11, color: '#4B5563', textAlign: 'center' },
  doneBtn: { backgroundColor: Colors.primary, flex: 1, height: 55, borderRadius: 12, justifyContent: "center", alignItems: "center" },
  doneText: { fontFamily: Fonts.bold, fontSize: 16, color: Colors.white },
});