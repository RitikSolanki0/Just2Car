import { StyleSheet } from 'react-native';
import { Colors } from '../../../theme/colors';
import { Fonts } from '../../../theme/fonts';

export const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#F9FAFB' },
  header: { flexDirection: 'row', alignItems: 'center', padding: 15, backgroundColor: 'white', borderBottomWidth: 1, borderBottomColor: '#eee' },
  headerTitle: { fontFamily: Fonts.bold, fontSize: 18, marginLeft: 15, color: 'black' },
  listContent: { padding: 15, paddingBottom: 50 },
  
  card: { backgroundColor: 'white', borderRadius: 15, marginBottom: 15, overflow: 'hidden', elevation: 3, shadowColor: '#000', shadowOpacity: 0.1, shadowRadius: 5 },
  row: { flexDirection: 'row', padding: 12 },
  carImg: { width: 100, height: 80, borderRadius: 10, backgroundColor: '#f0f0f0' },
  carInfo: { flex: 1, marginLeft: 12, justifyContent: 'center' },
  carName: { fontFamily: Fonts.bold, fontSize: 16, color: Colors.primary },
  price: { fontFamily: Fonts.bold, fontSize: 14, color: Colors.secondary, marginTop: 2 },
  subInfo: { fontSize: 11, color: 'gray', fontFamily: Fonts.medium, marginTop: 2 },
  
  msgSection: { backgroundColor: '#F3F4F6', padding: 12, borderTopWidth: 1, borderTopColor: '#eee' },
  msgLabel: { fontSize: 10, fontFamily: Fonts.bold, color: '#6B7280', marginBottom: 4 },
  msgText: { fontSize: 13, fontFamily: Fonts.regular, color: '#374151', fontStyle: 'italic' },
  
  footer: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', padding: 12, borderTopWidth: 1, borderTopColor: '#eee' },
  statusBadge: { paddingHorizontal: 10, paddingVertical: 4, borderRadius: 6 },
  statusText: { fontSize: 10, fontFamily: Fonts.bold, textTransform: 'uppercase' },
  date: { fontSize: 11, color: '#9CA3AF', fontFamily: Fonts.regular },
  
  emptyContainer: { flex: 1, justifyContent: 'center', alignItems: 'center', marginTop: 100 },
  emptyText: { fontFamily: Fonts.medium, fontSize: 16, color: 'gray', marginTop: 10 }
});
