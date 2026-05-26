// import React from 'react';
// import { View, Text, FlatList, Image, TouchableOpacity, ActivityIndicator, RefreshControl } from 'react-native';
// import { SafeAreaView } from 'react-native-safe-area-context';
// import Ionicons from "@react-native-vector-icons/ionicons";
// import { styles } from './MyEnquiryStyles';
// import { useMyEnquiryLogic } from './useMyEnquiryLogic';
// import { formatDate } from '../../../utils/dateHelpers';
// import { Colors } from '../../../theme/colors';

// const MyEnquiryScreen = ({ navigation }: any) => {
//   const { enquiries, loading, refreshing, onRefresh } = useMyEnquiryLogic();

//   const handleCarPress = (carData: any) => {
//     if (carData) {
//       // 🚀 CarDetailScreen को पूरा car object भेज रहे हैं
//       navigation.navigate('CarDetailScreen', { car: carData });
//     }
//   };

//   const renderItem = ({ item }: any) => (
//     // 🖱️ पूरे कार्ड को Touchable बनाया ताकि क्लिक करने पर डिटेल खुले
//     <TouchableOpacity 
//       activeOpacity={0.9} 
//       style={styles.card} 
//       onPress={() => handleCarPress(item.car)}
//     >
//       <View style={styles.row}>
//         <Image 
//           source={item.car?.images?.length > 0 ? { uri: item.car.images[0] } : require('../../../assets/images/carimages/car1.jpg')} 
//           style={styles.carImg} 
//         />
//         <View style={styles.carInfo}>
//           <Text style={styles.carName}>{item.car?.brand?.name} {item.car?.model?.name}</Text>
//           <Text style={styles.price}>₹ {item.car?.expectedPrice?.toLocaleString('en-IN')}</Text>
//           <Text style={styles.subInfo}>{item.car?.year} • {item.car?.fuelType} • {item.car?.transmission}</Text>
//         </View>
//         {/* 👉 एक छोटा एरो आइकन ताकि यूजर को पता चले कि ये क्लिकेबल है */}
//         <Ionicons name="chevron-forward" size={20} color="#CCC" style={{ alignSelf: 'center' }} />
//       </View>

//       {/* <View style={styles.msgSection}>
//         <Text style={styles.msgLabel}>YOUR MESSAGE:</Text>
//         <Text style={styles.msgText}>"{item.buyerMessage}"</Text>
//       </View> */}

//       <View style={styles.footer}>
//         <View style={[styles.statusBadge, { backgroundColor: item.status === 'pending' ? '#FEF3C7' : '#DCFCE7' }]}>
//           <Text style={[styles.statusText, { color: item.status === 'pending' ? '#D97706' : '#166534' }]}>
//             {item.status}
//           </Text>
//         </View>
//         <Text style={styles.date}>{formatDate(item.createdAt)}</Text>
//       </View>
//     </TouchableOpacity>
//   );

//   return (
//     <SafeAreaView style={styles.container}>
//       <View style={styles.header}>
//         <TouchableOpacity onPress={() => navigation.goBack()}>
//           <Ionicons name="arrow-back" size={26} color="black" />
//         </TouchableOpacity>
//         <Text style={styles.headerTitle}>My Enquiries</Text>
//       </View>

//       {loading ? (
//         <ActivityIndicator size="large" color={Colors.primary} style={{ marginTop: 50 }} />
//       ) : (
//         <FlatList
//           data={enquiries}
//           keyExtractor={(item) => item._id}
//           renderItem={renderItem}
//           contentContainerStyle={styles.listContent}
//           refreshControl={<RefreshControl refreshing={refreshing} onRefresh={onRefresh} />}
//           ListEmptyComponent={
//             <View style={styles.emptyContainer}>
//               <Ionicons name="chatbubbles-outline" size={80} color="#DDD" />
//               <Text style={styles.emptyText}>No enquiries found.</Text>
//             </View>
//           }
//         />
//       )}
//     </SafeAreaView>
//   );
// };

// export default MyEnquiryScreen;

























import React from 'react';
import { View, Text, FlatList, Image, TouchableOpacity, ActivityIndicator, RefreshControl } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Ionicons from "@react-native-vector-icons/ionicons";
import { styles } from './MyEnquiryStyles';
import { useMyEnquiryLogic } from './useMyEnquiryLogic';
import { formatDate } from '../../../utils/dateHelpers';
import { Colors } from '../../../theme/colors';

const MyEnquiryScreen = ({ navigation }: any) => {
  const { enquiries, loading, refreshing, onRefresh } = useMyEnquiryLogic();

  // --- 🚀 स्टेटस के हिसाब से कलर और लेबल सेट करने का फंक्शन ---
  const getStatusStyles = (status: string) => {
    switch (status.toLowerCase()) {
      case 'contacted':
        return { bg: '#E0E7FF', color: '#4338CA', label: 'Contacted' }; // Blue
      case 'converted':
        return { bg: '#DCFCE7', color: '#166534', label: 'Converted' }; // Green
      case 'closed':
        return { bg: '#fee6e6', color: '#fd0505', label: 'Closed' };    // Grey
      case 'pending':
      default:
        return { bg: '#FEF3C7', color: '#D97706', label: 'Pending' };   // Yellow/Amber
    }
  };

  const handleCarPress = (carData: any) => {
    if (carData) {
      navigation.navigate('CarDetailScreen', { car: carData });
    }
  };

  const renderItem = ({ item }: any) => {
    const statusStyle = getStatusStyles(item.status);

    return (
      <TouchableOpacity 
        activeOpacity={0.9} 
        style={styles.card} 
        onPress={() => handleCarPress(item.car)}
      >
        <View style={styles.row}>
          <Image 
            source={item.car?.images?.length > 0 ? { uri: item.car.images[0] } : require('../../../assets/images/carimages/car1.jpg')} 
            style={styles.carImg} 
          />
          <View style={styles.carInfo}>
            <Text style={styles.carName}>{item.car?.brand?.name} {item.car?.model?.name}</Text>
            <Text style={styles.price}>₹ {item.car?.expectedPrice?.toLocaleString('en-IN')}</Text>
            <Text style={styles.subInfo}>{item.car?.year} • {item.car?.fuelType}</Text>
          </View>
          <Ionicons name="chevron-forward" size={18} color="#CCC" style={{ alignSelf: 'center' }} />
        </View>

        {/* <View style={styles.msgSection}>
          <Text style={styles.msgLabel}>YOUR MESSAGE:</Text>
          <Text style={styles.msgText}>"{item.buyerMessage}"</Text>
        </View> */}

        <View style={styles.footer}>
          {/* 🎨 डायनामिक स्टेटस बैज */}
          <View style={[styles.statusBadge, { backgroundColor: statusStyle.bg }]}>
            <Text style={[styles.statusText, { color: statusStyle.color }]}>
              {statusStyle.label}
            </Text>
          </View>
          <Text style={styles.date}>{formatDate(item.createdAt)}</Text>
        </View>
      </TouchableOpacity>
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Ionicons name="arrow-back" size={26} color="black" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>My Enquiries</Text>
      </View>

      {loading ? (
        <ActivityIndicator size="large" color={Colors.primary} style={{ marginTop: 50 }} />
      ) : (
        <FlatList
          data={enquiries}
          keyExtractor={(item) => item._id}
          renderItem={renderItem}
          contentContainerStyle={styles.listContent}
          showsVerticalScrollIndicator={false}
          refreshControl={<RefreshControl refreshing={refreshing} onRefresh={onRefresh} />}
          ListEmptyComponent={
            <View style={styles.emptyContainer}>
              <Ionicons name="chatbubbles-outline" size={80} color="#DDD" />
              <Text style={styles.emptyText}>No enquiries found.</Text>
            </View>
          }
        />
      )}
    </SafeAreaView>
  );
};

export default MyEnquiryScreen;