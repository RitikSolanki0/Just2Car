import { StyleSheet } from "react-native";
import { Colors } from '../../theme/colors';
import { Fonts } from '../../theme/fonts';

export const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: 'white' },
  header: { flexDirection: 'row', alignItems: 'center', padding: 15, borderBottomWidth: 1, borderBottomColor: '#f3f4f6' },
  headerTitle: { fontFamily: Fonts.bold, fontSize: 18, marginLeft: 15 },
  scrollContent: { padding: 25 },
  mainTitle: { fontFamily: Fonts.extraBold, fontSize: 24, color: Colors.primary },
  subTitle: { fontFamily: Fonts.regular, fontSize: 14, color: 'gray', marginTop: 5, marginBottom: 30 },
  inputGroup: { marginBottom: 20 },
  label: { fontFamily: Fonts.bold, fontSize: 14, color: 'black', marginBottom: 8 },
  inputBox: { flexDirection: 'row', alignItems: 'center', backgroundColor: Colors.cardBg, borderRadius: 12, paddingHorizontal: 15, height: 55, borderWidth: 1, borderColor: Colors.border },
  input: { flex: 1, marginLeft: 10, fontFamily: Fonts.medium, fontSize: 14, color: 'black' },
  row: { flexDirection: 'row', justifyContent: 'space-between', marginBottom: 10 },
  textArea: { backgroundColor: Colors.cardBg, borderRadius: 12, padding: 15, height: 120, fontFamily: Fonts.medium, borderWidth: 1, borderColor: Colors.border, color: 'black' },
  submitBtn: { backgroundColor: Colors.primary, paddingVertical: 18, borderRadius: 12, alignItems: 'center', marginTop: 10, elevation: 3 },
  submitText: { color: 'white', fontFamily: Fonts.bold, fontSize: 16 }
});