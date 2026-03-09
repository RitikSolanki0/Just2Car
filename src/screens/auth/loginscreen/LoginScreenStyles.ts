// import { StyleSheet } from 'react-native';
// import { Colors } from '../../../theme/colors';
// import { Fonts } from '../../../theme/fonts';

// export const styles = StyleSheet.create({
//   container: { flex: 1, backgroundColor: Colors.white },
//   scrollContainer: { flexGrow: 1 },
//   headerContainer: { backgroundColor: Colors.primary, paddingTop: 100, paddingBottom: 100, paddingHorizontal: 30 },
//   headerText: { fontFamily: Fonts.bold, fontSize: 55, color: Colors.white },
//   formContainer: { flex: 1, backgroundColor: Colors.white, marginTop: -50, borderTopLeftRadius: 40, borderTopRightRadius: 40, paddingHorizontal: 30, paddingTop: 35 },
//   title: { fontFamily: Fonts.bold, fontSize: 42, color: Colors.secondary },
//   subtitle: { fontFamily: Fonts.medium, fontSize: 15, color: '#6B7280', marginTop: 5, marginBottom: 35 },
//   input: { backgroundColor: "#F3F4F6", borderRadius: 15, height: 55, paddingHorizontal: 20, fontFamily: Fonts.medium, fontSize: 15, color: 'black', marginBottom: 15 },
//   orText: { fontFamily: Fonts.medium, color: '#9CA3AF', textAlign: 'center', marginVertical: 10 },
//   loginButton: { backgroundColor: Colors.primary, paddingVertical: 16, borderRadius: 15, alignItems: 'center', marginTop: 20, elevation: 4 },
//   loginText: { fontFamily: Fonts.bold, fontSize: 16, color: Colors.white },
//   signupRow: { flexDirection: 'row', justifyContent: 'center', marginTop: 25, marginBottom: 20 },
//   noAccountText: { fontFamily: Fonts.medium, fontSize: 14, color: '#6B7280' },
//   signupLink: { fontFamily: Fonts.bold, fontSize: 14, color: Colors.secondary },
// });












import { StyleSheet } from 'react-native';
import { Colors } from '../../../theme/colors';
import { Fonts } from '../../../theme/fonts';

export const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: Colors.white },
  scrollContainer: { flexGrow: 1 },
  headerContainer: { backgroundColor: Colors.primary, paddingTop: 80, paddingBottom: 50, paddingHorizontal: 30 },
  headerText: { fontFamily: Fonts.bold, fontSize: 55, color: Colors.white },
  formContainer: { flex: 1, backgroundColor: Colors.white, marginTop: -50, borderTopLeftRadius: 40, borderTopRightRadius: 40, paddingHorizontal: 30, paddingTop: 35 },
  title: { fontFamily: Fonts.bold, fontSize: 42, color: Colors.secondary , marginTop: -20 },
  subtitle: { fontFamily: Fonts.medium, fontSize: 15, color: '#6B7280', marginTop: 5, marginBottom: 35 },
  
  input: { backgroundColor: "#F3F4F6", borderRadius: 15, height: 55, paddingHorizontal: 20, fontFamily: Fonts.medium, fontSize: 15, color: 'black', marginBottom: 15 },
  
  // --- पासवर्ड के लिए नया स्टाइल ---
  passwordContainer: { 
    flexDirection: 'row', 
    alignItems: 'center', 
    backgroundColor: "#F3F4F6", 
    borderRadius: 15, 
    height: 55, 
    paddingHorizontal: 20, 
    marginBottom: 15 
  },
  passwordInput: { 
    flex: 1, 
    fontFamily: Fonts.medium, 
    fontSize: 15, 
    color: 'black',
    height: '100%'
  },

  orText: { fontFamily: Fonts.medium, color: '#9CA3AF', textAlign: 'center', marginVertical: 10 },
  loginButton: { backgroundColor: Colors.primary, paddingVertical: 16, borderRadius: 15, alignItems: 'center', marginTop: 20, elevation: 4 },
  loginText: { fontFamily: Fonts.bold, fontSize: 16, color: Colors.white },
  signupRow: { flexDirection: 'row', justifyContent: 'center', marginTop: 25, marginBottom: 20 },
  noAccountText: { fontFamily: Fonts.medium, fontSize: 14, color: '#6B7280' },
  signupLink: { fontFamily: Fonts.bold, fontSize: 14, color: Colors.secondary },
});