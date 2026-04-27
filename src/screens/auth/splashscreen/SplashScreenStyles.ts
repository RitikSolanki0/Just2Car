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
  j2cText: {
    fontSize: 95,
    fontFamily: Fonts.extraBold,
    flexDirection: 'row',
    alignItems: 'center',
  },
  whiteLetter: {
    color: 'white',
  },
  orangeLetter: {
    color: Colors.secondary, 
  },
  brandName: {
    fontSize: 32,
    fontFamily: Fonts.bold,
    color: 'white',
    marginTop: -20,
    letterSpacing: 1,
  },
  footer: {
    position: 'absolute',
    bottom: 50,
  },
  versionText: {
    color: 'rgba(255,255,255,0.5)',
    fontSize: 12,
    fontFamily: Fonts.medium,
  }
});