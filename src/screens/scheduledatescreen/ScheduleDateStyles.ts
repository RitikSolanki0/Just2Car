import { StyleSheet, Dimensions, Platform } from 'react-native';
import { Colors } from '../../theme/colors';
import { Fonts } from '../../theme/fonts';

const { width } = Dimensions.get("window");

export const styles = StyleSheet.create({
  safeArea: { flex: 1, backgroundColor: 'white' },
  header: { flexDirection: "row", justifyContent: "space-between", alignItems: "center", paddingHorizontal: 15, height: 60 },
  headerTitle: { fontFamily: Fonts.bold, fontSize: 18, color: 'black' },
  iconBtn: { padding: 5 },
  imageContainer: { width: "100%", height: 220 },
  carImage: { width: "100%", height: "100%", resizeMode: "cover" },
  detailsSection: { paddingHorizontal: 20, marginTop: 20 },
  carName: { fontFamily: Fonts.bold, fontSize: 24, color: Colors.primary },
  carPrice: { fontFamily: Fonts.semiBold, fontSize: 18, color: Colors.black, marginTop: 5 },
  locationRow: { flexDirection: "row", alignItems: "center", marginTop: 5 },
  locationText: { fontFamily: Fonts.medium, fontSize: 14, color: 'gray' },
  sectionTitle: { fontFamily: Fonts.bold, fontSize: 16, color: 'black', marginTop: 25, marginBottom: 15 },
  
  buttonRow: { flexDirection: "row", justifyContent: "space-between", gap: 20 },
  locationBtn: { flex: 1, height: 50, borderRadius: 10, justifyContent: "center", alignItems: "center" },
  btnActive: { backgroundColor: Colors.primary },
  btnYellow: { backgroundColor: Colors.secondary },
  btnInactive: { backgroundColor: "#F3F4F6" },
  btnText: { fontFamily: Fonts.bold, fontSize: 14 },
  textWhite: { color: 'white' },
  textBlack: { color: Colors.black },

  selectorRow: { flexDirection: "row" },
  pill: { paddingHorizontal: 25, height: 55, borderRadius: 12, justifyContent: "center", alignItems: "center", marginRight: 12 },
  pillInactive: { backgroundColor: "#F3F4F6" },
  pillText: { fontFamily: Fonts.bold, fontSize: 15 },
  textGray: { color: "#9CA3AF" },

  gridRow: { flexDirection: "row", flexWrap: "wrap" },
  pillLarge: { width: "31%", height: 60, borderRadius: 12, justifyContent: "center", alignItems: "center", marginBottom: 10, marginRight: '2%' },
  addMoreBtn: { width: "31%", height: 60, borderRadius: 12, justifyContent: "center", alignItems: "center", marginBottom: 10, borderWidth: 1, borderStyle: 'dashed', borderColor: '#9CA3AF' },
  
  footer: { position: 'absolute', bottom: 0, width: '100%', paddingHorizontal: 20, backgroundColor: 'white', paddingTop: 10 },
  confirmBtn: { backgroundColor: Colors.secondary, height: 60, borderRadius: 12, justifyContent: "center", alignItems: "center" },
  confirmText: { fontFamily: Fonts.bold, fontSize: 18, color: 'white' },

  // Modal Common
  modalOverlay: { flex: 1, backgroundColor: 'rgba(0,0,0,0.6)', justifyContent: 'center', alignItems: 'center' },
  modalContent: { width: '85%', backgroundColor: 'white', borderRadius: 25, padding: 30, alignItems: 'center' },
  
  // Success Modal
  modalTitle: { fontFamily: Fonts.bold, fontSize: 22, color: 'black' },
  modalSubTitle: { fontFamily: Fonts.medium, fontSize: 16, color: 'gray', textAlign: 'center', marginTop: 10, lineHeight: 22 },
  okayBtn: { marginTop: 30, backgroundColor: Colors.secondary, paddingVertical: 14, borderRadius: 15, width: '100%', alignItems: 'center' },
  okayBtnText: { color: 'white', fontFamily: Fonts.bold },

  // Time Picker Modal
  timePickerCard: { width: '90%', backgroundColor: 'white', borderRadius: 25, padding: 20, height: 480 },
  pickerHeader: { fontFamily: Fonts.bold, fontSize: 20, textAlign: 'center', marginBottom: 20, color: Colors.primary },
  pickerContainer: { flexDirection: 'row', flex: 1, justifyContent: 'space-between' },
  column: { flex: 1, alignItems: 'center' },
  columnLabel: { fontSize: 12, color: '#9CA3AF', marginBottom: 15, fontFamily: Fonts.bold, textTransform: 'uppercase' },
  timeOption: { height: 45, width: 45, justifyContent: 'center', alignItems: 'center', borderRadius: 12, marginBottom: 12 },
  periodBtn: { width: 60 },
  selectedOption: { backgroundColor: Colors.primary, elevation: 4 },
  optionText: { fontSize: 16, fontFamily: Fonts.medium, color: '#4B5563' },
  selectedOptionText: { color: 'white', fontFamily: Fonts.bold },
  previewBox: { padding: 15, backgroundColor: '#F9FAFB', borderRadius: 12, marginTop: 15, alignItems: 'center', borderWidth: 1, borderColor: '#E5E7EB' },
  previewText: { fontFamily: Fonts.bold, fontSize: 16, color: Colors.primary },
  modalBtnRow: { flexDirection: 'row', marginTop: 15 },
  cancelBtn: { flex: 1, padding: 15, alignItems: 'center' },
  addTimeBtn: { flex: 1.5, backgroundColor: Colors.primary, padding: 15, borderRadius: 12, alignItems: 'center' },
   inputWrapper: {
    marginTop: 15,
    backgroundColor: "#F3F4F6",
    borderRadius: 12,
    borderWidth: 1,
    borderColor: "#E5E7EB",
    paddingHorizontal: 15,
    paddingVertical: Platform.OS === 'ios' ? 15 : 5, // Android/iOS बैलेंस
  },
  addressInput: {
    fontFamily: Fonts.medium,
    fontSize: 14,
    color: "black",
    minHeight: 50,
  },
   reasonInput: {
    marginTop: 15,
    backgroundColor: "#F3F4F6",
    borderRadius: 12,
    padding: 15,
    minHeight: 80,
    fontFamily: Fonts.medium,
    textAlignVertical: 'top',
    color: 'black'
  },
});
