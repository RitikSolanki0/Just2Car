// import { StyleSheet, Dimensions } from 'react-native';
// import { Colors } from '../../../theme/colors';
// import { Fonts } from '../../../theme/fonts';

// const { width } = Dimensions.get('window');

// export const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: Colors.primary, 
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
//   logoContainer: {
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
//   j2cText: {
//     fontSize: 95,
//     fontFamily: Fonts.extraBold,
//     flexDirection: 'row',
//     alignItems: 'center',
//   },
//   whiteLetter: {
//     color: 'white',
//   },
//   orangeLetter: {
//     color: Colors.secondary, 
//   },
//   brandName: {
//     fontSize: 32,
//     fontFamily: Fonts.bold,
//     color: 'white',
//     marginTop: -20,
//     letterSpacing: 1,
//   },
//   footer: {
//     position: 'absolute',
//     bottom: 50,
//   },
//   versionText: {
//     color: 'rgba(255,255,255,0.5)',
//     fontSize: 12,
//     fontFamily: Fonts.medium,
//   }
// });
















import { StyleSheet, Dimensions } from 'react-native';
import { Colors } from '../../../theme/colors';
import { Fonts } from '../../../theme/fonts';

const { width } = Dimensions.get('window');

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.primary, 
    justifyContent: 'center',
    alignItems: 'center',
  },
  logoContainer: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  // Naya Image Style
  logoImage: {
    width: width * 0.7, // Screen ki 70% width
    height: width * 0.7, // Square ratio (contain ki wajah se adjust ho jayega)
  },
  footer: {
    position: 'absolute',
    bottom: 50,
  },
  versionText: {
    color: 'rgba(255,255,255,0.6)', // Thoda brightness badhaya visibility ke liye
    fontSize: 14,
    fontFamily: Fonts.medium,
    letterSpacing: 0.5,
  }
});