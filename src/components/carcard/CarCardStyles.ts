import { StyleSheet } from 'react-native';
import { Colors } from '../../theme/colors';
import { Fonts } from '../../theme/fonts';

export const styles = StyleSheet.create({
  card: { 
    backgroundColor: Colors.white, 
    borderRadius: 12, 
    marginBottom: 15, 
    elevation: 4, 
    shadowColor: '#000', 
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1, 
    shadowRadius: 5, 
    overflow: 'hidden' 
  },
  imageContainer: { width: '100%', height: 110, backgroundColor: '#f0f0f0' },
  carImage: { width: '100%', height: '100%', resizeMode: 'cover' },
  featuredTag: { position: 'absolute', bottom: 0, left: 0, backgroundColor: Colors.secondary, paddingHorizontal: 10, paddingVertical: 3, borderTopRightRadius: 8, zIndex: 1 },
  featuredText: { fontSize: 9, fontFamily: Fonts.bold, color: Colors.primary },
  heartIcon: { position: 'absolute', top: 8, right: 8, backgroundColor: 'rgba(255,255,255,0.9)', borderRadius: 20, padding: 6, elevation: 5, zIndex: 10 },
  details: { padding: 10 },
  price: { fontSize: 16, fontFamily: Fonts.bold, color: Colors.primary },
  name: { fontSize: 13, fontFamily: Fonts.medium, color: Colors.textPrimary, marginTop: 2 },
  info: { fontSize: 11, color: Colors.textSecondary, fontFamily: Fonts.regular, marginTop: 2 },
  locationRow: { flexDirection: 'row', alignItems: 'center', marginTop: 6, borderTopWidth: 0.5, borderTopColor: '#f0f0f0', paddingTop: 6 },
  locationText: { fontSize: 10, color: Colors.textSecondary, marginLeft: 4, fontFamily: Fonts.regular }
});
