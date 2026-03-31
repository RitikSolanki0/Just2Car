import { StyleSheet } from 'react-native';
import { Colors } from '../../../theme/colors';
import { Fonts } from '../../../theme/fonts';

export const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: Colors.white },
  scrollContainer: { flexGrow: 1 },
  headerContainer: { backgroundColor: Colors.primary, paddingTop: 25, paddingBottom: 50, paddingHorizontal: 30 },
  headerText: { fontFamily: Fonts.bold, fontSize: 45, color: Colors.white },
  formContainer: { flex: 1, backgroundColor: Colors.white, marginTop: -40, borderTopLeftRadius: 40, borderTopRightRadius: 40, paddingHorizontal: 30, paddingTop: 30 },
  title: { fontFamily: Fonts.bold, fontSize: 32, color: Colors.secondary },
  subtitle: { fontFamily: Fonts.medium, fontSize: 14, color: '#6B7280', marginTop: 5, marginBottom: 25 },
  input: { backgroundColor: "#F3F4F6", borderRadius: 15, height: 52, paddingHorizontal: 20, fontFamily: Fonts.medium, fontSize: 14, color: 'black', marginBottom: 12 },
  passwordContainer: { flexDirection: 'row', alignItems: 'center', backgroundColor: "#F3F4F6", borderRadius: 15, height: 52, paddingHorizontal: 20, marginBottom: 20 },
  passwordInput: { flex: 1, fontFamily: Fonts.medium, fontSize: 14, color: 'black' },
  signupButton: { backgroundColor: Colors.primary, paddingVertical: 16, borderRadius: 15, alignItems: 'center', marginTop: 10, elevation: 4 },
  signupText: { fontFamily: Fonts.bold, fontSize: 16, color: Colors.white },
  loginRow: { flexDirection: 'row', justifyContent: 'center', marginTop: 20, marginBottom: 30 },
  accountText: { fontFamily: Fonts.medium, fontSize: 14, color: '#6B7280' },
  loginLink: { fontFamily: Fonts.bold, fontSize: 14, color: Colors.secondary },
});