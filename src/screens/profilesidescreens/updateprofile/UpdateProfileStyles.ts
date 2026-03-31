import { StyleSheet } from "react-native";
import { Colors } from "../../../theme/colors";
import { Fonts } from "../../../theme/fonts";

export const styles = StyleSheet.create({
  safeArea: { flex: 1, backgroundColor: Colors.white },
  header: { flexDirection: 'row', alignItems: 'center', padding: 15, borderBottomWidth: 1, borderBottomColor: '#f3f4f6' },
  headerTitle: { fontFamily: Fonts.bold, fontSize: 18, color: 'black', marginLeft: 15 },
  
  scrollContent: { paddingHorizontal: 25, alignItems: 'center', paddingTop: 30 },
  
  imageContainer: { position: 'relative', marginBottom: 40 },
  profileImage: { width: 140, height: 140, borderRadius: 70, backgroundColor: '#f0f0f0' },
  cameraBtn: { position: 'absolute', bottom: 5, right: 5, backgroundColor: Colors.primary, padding: 10, borderRadius: 20, borderWidth: 3, borderColor: 'white' },

  inputGroup: { width: '100%', marginBottom: 20 },
  label: { fontFamily: Fonts.bold, fontSize: 14, color: '#374151', marginBottom: 8, marginLeft: 5 },
  input: { backgroundColor: "#F3F4F6", borderRadius: 15, height: 55, paddingHorizontal: 20, fontFamily: Fonts.medium, fontSize: 15, color: 'black' },
  
  // ईमेल के लिए स्पेशल डिसेबल्ड स्टाइल
  disabledInput: { backgroundColor: "#E5E7EB", color: "#9CA3AF" },

  updateBtn: { backgroundColor: Colors.primary, width: '100%', paddingVertical: 16, borderRadius: 15, alignItems: 'center', marginTop: 20, elevation: 4 },
  updateBtnText: { color: 'white', fontFamily: Fonts.bold, fontSize: 16 },
});