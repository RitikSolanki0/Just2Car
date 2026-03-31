import { StyleSheet, Dimensions } from 'react-native';
import { Colors } from '../../../theme/colors';
import { Fonts } from '../../../theme/fonts';

const { width } = Dimensions.get("window");
export const isTablet = width > 600;

export const styles = StyleSheet.create({
  safeArea: { flex: 1, backgroundColor: Colors.white },
  header: { flexDirection: 'row', alignItems: 'center', padding: 15, borderBottomWidth: 1, borderBottomColor: '#f3f4f6' },
  backBtn: { padding: 5 },
  headerTitle: { fontFamily: Fonts.bold, fontSize: 22, color: 'black', marginLeft: 10 },
  listContainer: { padding: 15, paddingBottom: 120 },
  
  adCard: { 
    flexDirection: 'row', 
    backgroundColor: 'white', 
    borderRadius: 12, 
    marginBottom: 15, 
    elevation: 4, 
    height: 115, 
    width: '100%',
    overflow: 'hidden', 
    shadowColor: '#000', 
    shadowOpacity: 0.1, 
    shadowRadius: 8,
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#F3F4F6'
  },
  tabletCard: { width: '49%' },
  
  carImg: { 
    width: width * 0.30, 
    maxWidth: 140, 
    height: '100%', 
    resizeMode: 'cover' 
  },
  
  details: { flex: 1, paddingHorizontal: 16, justifyContent: 'center' },
  carTitle: { fontFamily: Fonts.bold, fontSize: 16, color: 'black' },
  carReg: { fontFamily: Fonts.medium, fontSize: 12, color: '#6B7280', marginTop: 2 },
  carPrice: { fontFamily: Fonts.bold, fontSize: 15, color: Colors.secondary, marginTop: 4 },
  
  statusBadge: { flexDirection: 'row', alignItems: 'center', alignSelf: 'flex-start', paddingHorizontal: 8, paddingVertical: 4, borderRadius: 6, marginTop: 8 },
  statusText: { fontSize: 9, fontFamily: Fonts.bold, marginLeft: 4 },
  
  arrowIcon: { paddingRight: 10 },
  emptyContainer: { flex: 1, justifyContent: 'center', alignItems: 'center', paddingHorizontal: 40 },
  emptyText: { fontFamily: Fonts.medium, fontSize: 16, color: 'gray', marginTop: 10, textAlign: 'center' },
  addBtn: { marginTop: 20, backgroundColor: Colors.primary, paddingHorizontal: 30, paddingVertical: 12, borderRadius: 25 },
  addBtnText: { color: 'white', fontFamily: Fonts.bold }
});