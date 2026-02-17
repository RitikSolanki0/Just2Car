// import { StyleSheet, Text, View } from 'react-native'
// import React from 'react'

// const ConfirmScheduleDateScreen = () => {
//   return (
//     <View>
//       <Text>ConfirmScheduleDateScreen</Text>
//     </View>
//   )
// }

// export default ConfirmScheduleDateScreen

// const styles = StyleSheet.create({})















import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import Ionicons from "@react-native-vector-icons/ionicons";
import { Colors } from "../../theme/colors";
import { Fonts } from "../../theme/fonts";
import { SafeAreaView } from "react-native-safe-area-context";
import { useSafeAreaInsets } from "react-native-safe-area-context";

const ConfirmScheduleDateScreen = ({ navigation, route }: any) => {
  // पिछले स्क्रीन से डेटा प्राप्त करें
  const { car, date, time } = route.params || {};
  const insets = useSafeAreaInsets();

  return (
    <SafeAreaView style={styles.safeArea}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Ionicons name="arrow-back" size={28} color={Colors.black} />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Summary</Text>
        <TouchableOpacity>
          <Ionicons name="help-circle-outline" size={28} color={Colors.black} />
        </TouchableOpacity>
      </View>

      <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={styles.content}>
        
        {/* Car Image */}
        <View style={styles.imageContainer}>
          <Image 
            source={car?.image || require("../../assets/images/carimages/car1.jpg")} 
            style={styles.carImage} 
          />
        </View>

        {/* Car Title & Share */}
        <View style={styles.infoContainer}>
          <View style={styles.titleRow}>
            <View>
              <Text style={styles.carName}>{car?.name || "Maruti Suzuki Ertiga"}</Text>
              <Text style={styles.carPrice}>Est Rs.8.64 - 13.08 Lakh*</Text>
              <Text style={styles.exShowroom}>
                Ex-showroom Price in <Text style={styles.boldText}>New Delhi </Text>
                <Text style={styles.editText}>Edit</Text>
              </Text>
            </View>
            <TouchableOpacity>
              <Ionicons name="share-social-outline" size={24} color={Colors.black} />
            </TouchableOpacity>
          </View>

          {/* Success Badge */}
          <View style={styles.successBadgeRow}>
             <View style={styles.greenCircle}>
                <Ionicons name="checkmark-circle" size={40} color={Colors.success || "#22C55E"} />
             </View>
             <Text style={styles.successText}>Free Inspection Booked</Text>
          </View>

          {/* Details Section */}
          <View style={styles.detailsList}>
            
            <View style={styles.detailItem}>
              <Ionicons name="location" size={22} color="#EF4444" />
              <Text style={styles.detailText}>
                394, Jail Rd, Nangal Village, Delhi Cantonment, New Delhi, Delhi 110010
              </Text>
            </View>

            <View style={styles.detailItem}>
              <Ionicons name="calendar" size={22} color={Colors.black} />
              <Text style={styles.detailText}>
                Date - <Text style={styles.boldText}>{date || "08 Sep 2023"}</Text>
              </Text>
            </View>

            <View style={styles.detailItem}>
              <Ionicons name="time" size={22} color={Colors.black} />
              <Text style={styles.detailText}>
                Time - <Text style={styles.boldText}>{time || "11 AM"}</Text>
              </Text>
            </View>

          </View>
        </View>
      </ScrollView>

      {/* Footer Buttons */}
      {/* <View style={styles.footer}> */}
      <View style={[styles.footer, { paddingBottom: insets.bottom + 10 }]}>
        <TouchableOpacity 
          style={styles.rescheduleBtn}
          onPress={() => navigation.goBack()}
        >
          <Text style={styles.rescheduleText}>REQUEST FOR RESCHEDULE</Text>
        </TouchableOpacity>

        <TouchableOpacity 
          style={styles.doneBtn}
          onPress={() => navigation.navigate('BottomNavigator')}
        >
          <Text style={styles.doneText}>DONE</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default ConfirmScheduleDateScreen;

const styles = StyleSheet.create({
  safeArea: { flex: 1, backgroundColor: Colors.white },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 15,
    paddingVertical: 10,
  },
  headerTitle: { fontFamily: Fonts.bold, fontSize: 18, color: Colors.black },
  content: { paddingBottom: 120 },
  imageContainer: { 
    width: "100%", 
    height: 200, 
    justifyContent: 'center', 
    alignItems: 'center',
    marginTop: 10 
  },
  carImage: { width: "85%", height: "100%", resizeMode: "contain" },
  
  infoContainer: { paddingHorizontal: 20, marginTop: 20 },
  titleRow: { flexDirection: "row", justifyContent: "space-between", alignItems: "flex-start" },
  carName: { fontFamily: Fonts.bold, fontSize: 22, color: Colors.black },
  carPrice: { fontFamily: Fonts.bold, fontSize: 18, color: Colors.black, marginTop: 4 },
  exShowroom: { fontSize: 12, color: "#999", marginTop: 2 },
  boldText: { fontWeight: "bold", color: Colors.black },
  editText: { color: "#3498db", fontSize: 10 },

  successBadgeRow: { 
    flexDirection: "row", 
    alignItems: "center", 
    marginTop: 30,
    backgroundColor: Colors.white 
  },
  greenCircle: { marginRight: 15 },
  successText: { fontFamily: Fonts.bold, fontSize: 18, color: Colors.black },

  detailsList: { marginTop: 30 },
  detailItem: { flexDirection: "row", alignItems: "flex-start", marginBottom: 20 },
  detailText: { 
    marginLeft: 15, 
    fontSize: 14, 
    color: Colors.black, 
    fontFamily: Fonts.medium,
    lineHeight: 20,
    flex: 1 
  },

  footer: { 
    position: "absolute", 
    bottom: 0, 
    flexDirection: "row", 
    width: "100%", 
    padding: 15, 
    backgroundColor: Colors.white,
    justifyContent: 'space-between',
    borderTopWidth: 1,
    borderTopColor: '#f0f0f0',
  },
  rescheduleBtn: { 
    backgroundColor: "#DEDEDE", 
    flex: 1, 
    height: 55, 
    borderRadius: 8, 
    justifyContent: "center", 
    alignItems: "center",
    marginRight: 10
  },
  rescheduleText: { fontFamily: Fonts.bold, fontSize: 11, color: Colors.black, textAlign: 'center' },
  
  doneBtn: { 
    backgroundColor: Colors.secondary, 
    flex: 1, 
    height: 55, 
    borderRadius: 8, 
    justifyContent: "center", 
    alignItems: "center" 
  },
  doneText: { fontFamily: Fonts.bold, fontSize: 16, color: Colors.white },
});