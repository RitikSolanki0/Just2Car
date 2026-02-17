import React, { useState } from "react";
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

const ScheduleDateScreen = ({ navigation, route }: any) => {
  const car = route.params?.car;

  // --- States for selection ---
  const [location, setLocation] = useState("Hub"); // Hub or Home
  const [selectedDate, setSelectedDate] = useState("08 Sep");
  const [selectedTime, setSelectedTime] = useState("11 AM");

  const dates = ["08 Sep", "09 Sep", "10 Sep", "11 Sep"];
  const times = ["9 AM", "11 AM", "1 PM", "4 PM"];

  return (
    <SafeAreaView style={styles.safeArea}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Ionicons name="arrow-back" size={28} color={Colors.black} />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Book a Inspection Time</Text>
        <TouchableOpacity>
          <Ionicons name="help-circle-outline" size={28} color={Colors.black} />
        </TouchableOpacity>
      </View>

      <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={{ paddingBottom: 40 }}>
        {/* Car Image */}
        <View style={styles.imageContainer}>
          <Image 
            source={car?.image || require("../../assets/images/carimages/car1.jpg")} 
            style={styles.carImage} 
          />
        </View>

        {/* Car Details */}
        <View style={styles.detailsSection}>
          <Text style={styles.carName}>{car?.name || "Audi Q3"}</Text>
          <Text style={styles.carPrice}>Rs.46.27 - 51.94 Lakh</Text>
          <View style={styles.locationRow}>
            <Text style={styles.locationText}>New Delhi </Text>
            {/* <TouchableOpacity><Text style={styles.editText}>Edit</Text></TouchableOpacity> */}
          </View>

          {/* Choose Location */}
          <Text style={styles.sectionTitle}>Choose Location</Text>
          <View style={styles.buttonRow}>
            <TouchableOpacity 
              style={[styles.locationBtn, location === "Hub" ? styles.btnActive : styles.btnInactive]}
              onPress={() => setLocation("Hub")}
            >
              <Text style={[styles.btnText, location === "Hub" ? styles.textWhite : styles.textBlack]}>At Our Hub</Text>
            </TouchableOpacity>
            
            <TouchableOpacity 
              style={[styles.locationBtn, location === "Home" ? styles.btnYellow : styles.btnInactive]}
              onPress={() => setLocation("Home")}
            >
              <Text style={styles.btnText}>Your Home</Text>
            </TouchableOpacity>
          </View>

          {/* Select Date */}
          <Text style={styles.sectionTitle}>Select Date</Text>
          <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.selectorRow}>
            {dates.map((date) => (
              <TouchableOpacity 
                key={date} 
                style={[styles.pill, selectedDate === date ? styles.btnActive : styles.pillInactive]}
                onPress={() => setSelectedDate(date)}
              >
                <Text style={[styles.pillText, selectedDate === date ? styles.textWhite : styles.textGray]}>{date}</Text>
              </TouchableOpacity>
            ))}
          </ScrollView>

          {/* Choose Time */}
          <Text style={styles.sectionTitle}>Choose Time</Text>
          <View style={styles.gridRow}>
            {times.map((time) => (
              <TouchableOpacity 
                key={time} 
                style={[styles.pillLarge, selectedTime === time ? styles.btnActive : styles.pillInactive]}
                onPress={() => setSelectedTime(time)}
              >
                <Text style={[styles.pillText, selectedTime === time ? styles.textWhite : styles.textGray]}>{time}</Text>
              </TouchableOpacity>
            ))}
          </View>

        </View>
      </ScrollView>

      {/* Confirm Button */}
      <View style={styles.footer}>
        <TouchableOpacity style={styles.confirmBtn} onPress={() => navigation.navigate('ConfirmScheduleDateScreen', { car, date: selectedDate, time: selectedTime })}>
          <Text style={styles.confirmText}>CONFIRM</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default ScheduleDateScreen;

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
  imageContainer: { marginTop: 10, width: "100%", height: 220 },
  carImage: { width: "100%", height: "100%", resizeMode: "cover" },
  detailsSection: { paddingHorizontal: 20, marginTop: 20 },
  carName: { fontFamily: Fonts.bold, fontSize: 24, color: Colors.black },
  carPrice: { fontFamily: Fonts.bold, fontSize: 18, color: Colors.black, marginTop: 5 },
  locationRow: { flexDirection: "row", alignItems: "center", marginTop: 5 },
  locationText: { fontFamily: Fonts.medium, fontSize: 14, color: Colors.black },
  editText: { color: "#3498db", fontSize: 12, textDecorationLine: 'underline' },
  
  sectionTitle: { fontFamily: Fonts.bold, fontSize: 16, color: Colors.black, marginTop: 25, marginBottom: 15 },
  
  buttonRow: { flexDirection: "row", justifyContent: "space-between" },
  locationBtn: { flex: 1, height: 50, borderRadius: 8, justifyContent: "center", alignItems: "center" },
  btnActive: { backgroundColor: Colors.primary },
  btnYellow: { backgroundColor: Colors.secondary },
  btnInactive: { backgroundColor: "#E0E0E0" },
  btnText: { fontFamily: Fonts.bold, fontSize: 14 },
  textWhite: { color: Colors.white },
  textBlack: { color: Colors.black },
  textGray: { color: "white" }, // In inactive state, text is white inside gray box in Figma

  selectorRow: { flexDirection: "row" },
  pill: { 
    paddingHorizontal: 20, 
    height: 55, 
    borderRadius: 10, 
    justifyContent: "center", 
    alignItems: "center", 
    marginRight: 12 
  },
  pillInactive: { backgroundColor: "#D3D3D3" },
  pillText: { fontFamily: Fonts.bold, fontSize: 15 },
  
  gridRow: { flexDirection: "row", flexWrap: "wrap", justifyContent: "space-between" },
  pillLarge: { 
    width: "23%", 
    height: 60, 
    borderRadius: 10, 
    justifyContent: "center", 
    alignItems: "center", 
    marginBottom: 10 
  },

  footer: { paddingHorizontal: 20, paddingBottom: 20 },
  confirmBtn: { 
    backgroundColor: Colors.secondary, 
    height: 60, 
    borderRadius: 10, 
    justifyContent: "center", 
    alignItems: "center" 
  },
  confirmText: { fontFamily: Fonts.bold, fontSize: 18, color: Colors.white, letterSpacing: 1 },
});