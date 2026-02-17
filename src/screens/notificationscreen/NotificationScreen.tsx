import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Ionicons from "@react-native-vector-icons/ionicons";
import { Colors } from "../../theme/colors";
import { Fonts } from "../../theme/fonts";
import { NOTIFICATIONS, NOTIFICATION_TIPS } from "../../dummydata/dummyData";

const NotificationScreen = ({ navigation }: any) => {
  
  // चेक करें कि क्या कोई असली नोटिफिकेशन है
  const hasNotifications = NOTIFICATIONS.length > 0;

  return (
    <SafeAreaView style={styles.safeArea}>
      {/* --- Header Section --- */}
      {/* <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Ionicons name="chevron-back" size={30} color={Colors.black} />
        </TouchableOpacity>
        
        <View style={styles.titleRow}>
          <Text style={styles.headerTitle}>Notification</Text>
          <Ionicons name="notifications" size={40} color={Colors.secondary} style={styles.bigBell} />
        </View>
      </View> */}
      <View style={styles.header}>
  <View style={styles.headerLeft}>
    <TouchableOpacity onPress={() => navigation.goBack()}>
      <Ionicons name="chevron-back" size={30} color={Colors.black} />
    </TouchableOpacity>
    <Text style={styles.headerTitle}>Notification</Text>
  </View>
  
  <Ionicons 
    name="notifications" 
    size={40} 
    color={Colors.secondary} 
    style={styles.bigBell} 
  />
</View>

      <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={styles.scrollContent}>
        
        {hasNotifications ? (
          // --- Case 1: Show Actual Notifications ---
          NOTIFICATIONS.map((item) => (
            <TouchableOpacity key={item.id} style={styles.notificationItem}>
              <View style={styles.iconCircle}>
                <Ionicons name="mail-unread-outline" size={24} color={Colors.primary} />
              </View>
              <View style={styles.textContainer}>
                <Text style={styles.notifTitle}>{item.title}</Text>
                <Text style={styles.notifMessage}>{item.message}</Text>
                <Text style={styles.notifTime}>{item.time}</Text>
              </View>
            </TouchableOpacity>
          ))
        ) : (
          // --- Case 2: Show Empty State Tips (जैसा स्क्रीनशॉट में है) ---
          <View style={styles.emptyStateContainer}>
            {NOTIFICATION_TIPS.map((tip) => (
              <View key={tip.id} style={styles.tipItem}>
                <Ionicons name="happy-outline" size={28} color={Colors.primary} />
                <Text style={styles.tipText}>{tip.text}</Text>
              </View>
            ))}
          </View>
        )}

        {/* Space for Tab Bar */}
        <View style={{ height: 120 }} />
      </ScrollView>
    </SafeAreaView>
  );
};

export default NotificationScreen;

const styles = StyleSheet.create({
//   safeArea: { flex: 1, backgroundColor: Colors.white },
//   header: {
//     paddingHorizontal: 20,
//     paddingTop: 10,
//   },
//   titleRow: {
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//     alignItems: 'center',
//     marginTop: 10,
//   },
//   headerTitle: {
//     fontFamily: Fonts.bold,
//     fontSize: 24,
//     color: Colors.black,
//   },
//   bigBell: {
//     opacity: 0.9,
//     transform: [{ rotate: '15deg' }], // हल्का टिल्ट फिग्मा जैसा लुक देने के लिए
//   },
 safeArea: { flex: 1, backgroundColor: Colors.white },
  header: {
    flexDirection: 'row', // बैक बटन और बाकी सबको एक लाइन में लाने के लिए
    alignItems: 'center', // वर्टिकली सेंटर करने के लिए
    justifyContent: 'space-between', // टाइटल लेफ्ट और घंटी राइट में रखने के लिए
    paddingHorizontal: 20,
    paddingTop: 10,
  },
  headerLeft: {
    flexDirection: 'row', // बैक बटन और टेक्स्ट को एक साथ रखने के लिए
    alignItems: 'center',
  },
  headerTitle: {
    fontFamily: Fonts.bold,
    fontSize: 22, // थोड़ा साइज एडजस्ट किया
    color: Colors.black,
    marginLeft: 10, // बैक बटन से थोड़ी दूरी के लिए
  },
  bigBell: {
    opacity: 0.9,
    transform: [{ rotate: '15deg' }],
  },
  scrollContent: {
    paddingHorizontal: 25,
    marginTop: 20,
  },

  // Empty State Styling
  emptyStateContainer: {
    marginTop: 10,
  },
  tipItem: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    marginBottom: 40,
  },
  tipText: {
    flex: 1,
    marginLeft: 20,
    fontFamily: Fonts.medium,
    fontSize: 15,
    color: 'gray',
    lineHeight: 22,
  },

  // Real Notification Styling
  notificationItem: {
    flexDirection: 'row',
    backgroundColor: '#F8F9FB',
    padding: 15,
    borderRadius: 12,
    marginBottom: 15,
    alignItems: 'center',
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
  },
  iconCircle: {
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: '#E0E7FF',
    justifyContent: 'center',
    alignItems: 'center',
  },
  textContainer: {
    flex: 1,
    marginLeft: 15,
  },
  notifTitle: {
    fontFamily: Fonts.bold,
    fontSize: 16,
    color: Colors.black,
  },
  notifMessage: {
    fontFamily: Fonts.regular,
    fontSize: 13,
    color: 'gray',
    marginTop: 2,
  },
  notifTime: {
    fontFamily: Fonts.medium,
    fontSize: 11,
    color: Colors.secondary,
    marginTop: 5,
  },
});















