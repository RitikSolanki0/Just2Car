import { StyleSheet } from "react-native";
import { Colors } from "../../../theme/colors";
import { Fonts } from "../../../theme/fonts";

export const styles = StyleSheet.create({
  safeArea: { flex: 1, backgroundColor: Colors.white },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 15,
    paddingTop: 10,
    paddingBottom: 15,
  },
  backBtn: { padding: 5, marginRight: 10 },
  titleWrapper: { flexDirection: 'row', alignItems: 'flex-end' },
  title: { fontFamily: Fonts.bold, fontSize: 24, color: Colors.black },
  countText: { fontFamily: Fonts.medium, fontSize: 14, color: 'gray', marginLeft: 10, marginBottom: 4 },
  container: { flex: 1, paddingHorizontal: 15 },
  row: { justifyContent: 'space-between' },
  cardContainer: { width: '48%', position: 'relative' },
  removeIconBtn: {
    position: 'absolute',
    top: 8,
    right: 8,
    backgroundColor: 'white',
    width: 32,
    height: 32,
    borderRadius: 16,
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 5,
    shadowColor: "#000",
    shadowOpacity: 0.2,
    shadowRadius: 3,
  },
  emptyContainer: { flex: 1, justifyContent: 'center', alignItems: 'center', paddingHorizontal: 40 },
  emptyIconCircle: { width: 120, height: 120, borderRadius: 60, backgroundColor: '#F3F4F6', justifyContent: 'center', alignItems: 'center', marginBottom: 20 },
  emptyTitle: { fontFamily: Fonts.bold, fontSize: 20, color: Colors.black },
  emptySubText: { fontFamily: Fonts.regular, fontSize: 14, color: 'gray', textAlign: 'center', marginTop: 10, lineHeight: 20 },
  exploreBtn: { marginTop: 30, backgroundColor: Colors.secondary, paddingHorizontal: 30, paddingVertical: 12, borderRadius: 25 },
  exploreText: { color: Colors.white, fontFamily: Fonts.bold, fontSize: 16 },
});