import { StyleSheet, Dimensions } from "react-native";
import { Colors } from "../../theme/colors";
import { Fonts } from "../../theme/fonts";

const { width } = Dimensions.get("window");

export const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: Colors.white },
  center: { flex: 1, justifyContent: 'center', alignItems: 'center' },
  scrollContent: { paddingBottom: 160 },
  
  emptyGallery: {
    height: 250, width: width - 40, backgroundColor: '#F3F4F6',
    borderRadius: 20, alignSelf: 'center', justifyContent: 'center',
    alignItems: 'center', marginTop: 10,
  },
  emptyText: { fontFamily: Fonts.medium, color: 'gray', textAlign: 'center', marginTop: 10 },

  // footer: {
  //   position: "absolute", bottom: 0, width: "100%", paddingHorizontal: 40,
  //   backgroundColor: 'white', paddingTop: 15, elevation: 20,
  //   shadowColor: "#000", shadowOffset: { width: 0, height: -4 },
  //   shadowOpacity: 0.1, shadowRadius: 8,
  // },
  // inquiryBtn: { backgroundColor: Colors.primary, paddingVertical: 16, borderRadius: 12, alignItems: "center" },
  // inquiryText: { color: Colors.white, fontFamily: Fonts.bold, fontSize: 18 },

  // Modal Styles
  modalOverlay: { flex: 1, backgroundColor: 'rgba(0,0,0,0.6)', justifyContent: 'center', alignItems: 'center' },
  modalContent: { width: width * 0.85, backgroundColor: 'white', borderRadius: 25, padding: 30, alignItems: 'center', elevation: 10 },
  iconCircle: { marginBottom: 20 },
  modalTitle: { fontFamily: Fonts.bold, fontSize: 22, color: Colors.black, textAlign: 'center' },
  modalSubTitle: { fontFamily: Fonts.medium, fontSize: 15, color: 'gray', textAlign: 'center', marginTop: 10, lineHeight: 22 },
  okayBtn: { marginTop: 30, backgroundColor: Colors.secondary, paddingVertical: 14, borderRadius: 15, width: '100%', alignItems: 'center' },
  okayBtnText: { color: 'white', fontFamily: Fonts.bold, fontSize: 16 },

    footer: {
    position: "absolute", 
    bottom: 0, 
    width: "100%", 
    paddingHorizontal: 20, // Padding thodi kam ki for 2 buttons
    backgroundColor: 'white', 
    paddingTop: 15, 
    elevation: 20,
    shadowColor: "#000", 
    shadowOffset: { width: 0, height: -4 },
    shadowOpacity: 0.1, 
    shadowRadius: 8,
  },
  
  buttonRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },

  inquiryBtn: { 
    backgroundColor: Colors.primary, 
    paddingVertical: 16, 
    borderRadius: 12, 
    alignItems: "center",
    width: '100%',
  },

  inquiredStatusBtn: {
    flex: 1,
    backgroundColor: Colors.primary, // Light Grey
    paddingVertical: 16,
    borderRadius: 12,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 10,
    // borderWidth: 1,
    // borderColor: '#E5E7EB',
  },

  inquiredStatusText: {
    color: Colors.white,
    fontFamily: Fonts.bold,
    fontSize: 16,
    marginLeft: 8,
  },

  whatsappBtn: {
    flex: 1,
    backgroundColor: '#22C55E', // Green WhatsApp Color
    paddingVertical: 16,
    borderRadius: 12,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },

  whatsappText: {
    color: 'white',
    fontFamily: Fonts.bold,
    fontSize: 16,
    marginLeft: 8,
  },

  inquiryText: { 
    color: Colors.white, 
    fontFamily: Fonts.bold, 
    fontSize: 18 
  },
});