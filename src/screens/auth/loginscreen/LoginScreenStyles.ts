
import { StyleSheet } from 'react-native';
import { Colors } from '../../../theme/colors';
import { Fonts } from '../../../theme/fonts';

export const styles = StyleSheet.create({
  // container का बैकग्राउंड Colors.primary (नीला) होना चाहिए
  container: { flex: 1, backgroundColor: Colors.primary },
  scrollContainer: { flexGrow: 1 },

  headerContainer: {
    backgroundColor: Colors.primary,
    paddingBottom: 70, // फॉर्म को ऊपर खींचने के लिए थोड़ा एक्स्ट्रा बॉटम पैडिंग
    paddingHorizontal: 30
  },

  headerText: { fontFamily: Fonts.bold, fontSize: 55, color: Colors.white },

  formContainer: {
    flex: 1,
    backgroundColor: Colors.white,
    marginTop: -50, // हेडर के ऊपर ओवरलैप करने के लिए
    borderTopLeftRadius: 40,
    borderTopRightRadius: 40,
    paddingHorizontal: 30,
    paddingTop: 35,
    minHeight: 500 // यह सुनिश्चित करता है कि फॉर्म नीचे तक जाए
  },

  title: { fontFamily: Fonts.bold, fontSize: 42, color: Colors.secondary, marginTop: -20 },
  subtitle: { fontFamily: Fonts.medium, fontSize: 15, color: '#6B7280', marginTop: 5, marginBottom: 35 },

  input: { backgroundColor: Colors.inputboxbackgroundcolor, borderRadius: 15, height: 55, paddingHorizontal: 20, fontFamily: Fonts.medium, fontSize: 15, color: 'black', marginBottom: 15, borderWidth: 1, borderColor: Colors.inputboxbordercolor },

  passwordContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: Colors.inputboxbackgroundcolor,
    borderRadius: 15,
    height: 55,
    paddingHorizontal: 20,
    marginBottom: 15, borderWidth: 1,
    borderColor: Colors.inputboxbordercolor,

  },
  passwordInput: {
    flex: 1,
    fontFamily: Fonts.medium,
    fontSize: 15,
    color: 'black',
    height: '100%',

  },

  orText: { fontFamily: Fonts.medium, color: '#9CA3AF', textAlign: 'center', marginVertical: 10 },
  loginButton: { backgroundColor: Colors.primary, paddingVertical: 16, borderRadius: 15, alignItems: 'center', marginTop: 20, elevation: 4 },
  loginText: { fontFamily: Fonts.bold, fontSize: 16, color: Colors.white },
  signupRow: { flexDirection: 'row', justifyContent: 'center', marginTop: 25, marginBottom: 20 },
  noAccountText: { fontFamily: Fonts.medium, fontSize: 14, color: '#6B7280' },
  signupLink: { fontFamily: Fonts.bold, fontSize: 14, color: Colors.secondary },
});