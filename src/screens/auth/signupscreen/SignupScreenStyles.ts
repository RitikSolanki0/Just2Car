import { StyleSheet } from 'react-native';
import { Colors } from '../../../theme/colors';
import { Fonts } from '../../../theme/fonts';

export const styles = StyleSheet.create({
  // 1. कंटेनर का बैकग्राउंड Colors.primary होना चाहिए
  container: { flex: 1, backgroundColor: Colors.primary },
  scrollContainer: { flexGrow: 1 },
  
  headerContainer: { 
    backgroundColor: Colors.primary, 
    paddingBottom: 70, 
    paddingHorizontal: 30 
  },
  
  headerText: { fontFamily: Fonts.bold, fontSize: 45, color: Colors.white },
  
  formContainer: { 
    flex: 1, 
    backgroundColor: Colors.white, 
    marginTop: -50, // हेडर के ऊपर ओवरलैप करने के लिए
    borderTopLeftRadius: 40, 
    borderTopRightRadius: 40, 
    paddingHorizontal: 30, 
    paddingTop: 35,
    minHeight: 600 // साइनअप फॉर्म लंबा है इसलिए हाइट बढ़ा दी
  },
  
  title: { fontFamily: Fonts.bold, fontSize: 32, color: Colors.secondary, marginTop: -20 },
  subtitle: { fontFamily: Fonts.medium, fontSize: 14, color: '#6B7280', marginTop: 5, marginBottom: 25 },
  
  input: { backgroundColor: Colors.inputboxbackgroundcolor, borderRadius: 15, height: 52, paddingHorizontal: 20, fontFamily: Fonts.medium, fontSize: 14, color: 'black', marginBottom: 12, borderWidth: 1, borderColor: Colors.inputboxbordercolor },
  
  passwordContainer: { 
    flexDirection: 'row', 
    alignItems: 'center', 
    backgroundColor: Colors.inputboxbackgroundcolor, 
    borderRadius: 15, 
    height: 52, 
    paddingHorizontal: 20, 
    marginBottom: 20,
    borderWidth: 1, 
    borderColor: Colors.inputboxbordercolor 
  },
  passwordInput: { 
    flex: 1, 
    fontFamily: Fonts.medium, 
    fontSize: 14, 
    color: 'black' 
  },

  signupButton: { backgroundColor: Colors.primary, paddingVertical: 16, borderRadius: 15, alignItems: 'center', marginTop: 10, elevation: 4 },
  signupText: { fontFamily: Fonts.bold, fontSize: 16, color: Colors.white },
  
  loginRow: { flexDirection: 'row', justifyContent: 'center', marginTop: 20, marginBottom: 30 },
  accountText: { fontFamily: Fonts.medium, fontSize: 14, color: '#6B7280' },
  loginLink: { fontFamily: Fonts.bold, fontSize: 14, color: Colors.secondary },
});