import { StyleSheet } from 'react-native';
import { Colors } from '../../../theme/colors';
import { Fonts } from '../../../theme/fonts';

export const styles = StyleSheet.create({
  safeArea: { flex: 1, backgroundColor: Colors.white },
  scrollContent: { paddingHorizontal: 20 },
  label: { fontFamily: Fonts.bold, fontSize: 16, color: "black", marginTop: 18, marginBottom: 8 },
  textArea: { 
    backgroundColor: "#F2F4F7", 
    borderRadius: 12, 
    padding: 15, 
    height: 120, 
    fontFamily: Fonts.regular, 
    color: "black", 
    borderWidth: 1, 
    borderColor: "#E5E7EB" 
  },
  submitBtn: { 
    backgroundColor: Colors.primary, 
    paddingVertical: 18, 
    borderRadius: 12, 
    alignItems: "center", 
    marginTop: 25 
  },
  submitText: { color: Colors.white, fontFamily: Fonts.bold, fontSize: 16 },
  row: { flexDirection: "row", justifyContent: "space-between", alignItems: "flex-start" },
  mediaErrorBox: { borderWidth: 1, borderColor: 'red', borderRadius: 15, padding: 5 }
});