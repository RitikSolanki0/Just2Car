import React from 'react';
import { View, Text, TextInput, TouchableOpacity, ScrollView, ActivityIndicator, KeyboardAvoidingView, Platform } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Ionicons from "@react-native-vector-icons/ionicons";
import CustomDropdown from '../../components/addcar/CustomDropdown';
import { useFranchiseLogic } from './useFranchiseLogic';
import { styles } from "./FranchiseSttyles";

const FranchisePartnerFormScreen = ({ navigation }: any) => {
  const logic = useFranchiseLogic(navigation);

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Ionicons name="arrow-back" size={28} color="black" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Franchise Inquiry</Text>
      </View>

      <KeyboardAvoidingView behavior={Platform.OS === "ios" ? "padding" : "height"} style={{ flex: 1 }}>
        <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={styles.scrollContent}>
          
          <Text style={styles.mainTitle}>Become a Franchise Partner</Text>
          <Text style={styles.subTitle}>Fill out the form below and our team will get in touch with you shortly.</Text>

          <View style={styles.inputGroup}>
            <Text style={styles.label}>Full Name</Text>
            <View style={styles.inputBox}>
              <Ionicons name="person-outline" size={20} color="gray" />
              <TextInput 
                style={styles.input} 
                placeholder="Enter your name" 
                value={logic.formData.name}
                onChangeText={(v) => logic.setFormData({...logic.formData, name: v})}
              />
            </View>
          </View>

          <View style={styles.inputGroup}>
            <Text style={styles.label}>Phone Number</Text>
            <View style={styles.inputBox}>
              <Ionicons name="call-outline" size={20} color="gray" />
              <TextInput 
                style={styles.input} 
                placeholder="10 digit mobile number" 
                keyboardType="numeric"
                maxLength={10}
                value={logic.formData.phone}
                onChangeText={(v) => logic.setFormData({...logic.formData, phone: v})}
              />
            </View>
          </View>

          <View style={styles.inputGroup}>
            <Text style={styles.label}>Email Address</Text>
            <View style={styles.inputBox}>
              <Ionicons name="mail-outline" size={20} color="gray" />
              <TextInput 
                style={styles.input} 
                placeholder="Enter email address" 
                autoCapitalize="none"
                value={logic.formData.email}
                onChangeText={(v) => logic.setFormData({...logic.formData, email: v})}
              />
            </View>
          </View>

          <View style={styles.row}>
            <View style={{ flex: 1 }}>
              <CustomDropdown 
                label="State" 
                placeholder="Select" 
                data={logic.statesList.map(s => s.name)} 
                selectedValue={logic.formData.state.name} 
                onSelect={logic.onStateChange} 
              />
            </View>
            <View style={{ width: 15 }} />
            <View style={{ flex: 1 }}>
              <CustomDropdown 
                label="City" 
                placeholder="Select" 
                data={logic.citiesList.map(c => c.name)} 
                selectedValue={logic.formData.city.name} 
                onSelect={logic.onCityChange} 
              />
            </View>
          </View>

          <View style={styles.inputGroup}>
            <Text style={styles.label}>Your Message</Text>
            <TextInput 
              style={styles.textArea} 
              placeholder="Tell us about your interest or location preference..." 
              multiline 
              numberOfLines={4}
              textAlignVertical="top"
              value={logic.formData.message}
              onChangeText={(v) => logic.setFormData({...logic.formData, message: v})}
            />
          </View>

          <TouchableOpacity 
            style={[styles.submitBtn, logic.loading && { opacity: 0.7 }]} 
            onPress={logic.handleSubmit}
            disabled={logic.loading}
          >
            {logic.loading ? <ActivityIndicator color="white" /> : <Text style={styles.submitText}>Submit Inquiry</Text>}
          </TouchableOpacity>

          <View style={{ height: 50 }} />
        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

export default FranchisePartnerFormScreen;


























// import React from 'react';
// import { 
//   View, Text, StyleSheet, TextInput, TouchableOpacity, 
//   ScrollView, ActivityIndicator, KeyboardAvoidingView, Platform 
// } from 'react-native';
// import { SafeAreaView } from 'react-native-safe-area-context';
// import Ionicons from "@react-native-vector-icons/ionicons";
// import { Colors } from '../../theme/colors';
// import { Fonts } from '../../theme/fonts';
// import CustomDropdown from '../../components/addcar/CustomDropdown';
// import { useFranchiseLogic } from './useFranchiseLogic';
// import { styles } from './FranchiseSttyles';

// const FranchisePartnerFormScreen = ({ navigation }: any) => {
//   const logic = useFranchiseLogic(navigation);

//   return (
//     <SafeAreaView style={styles.container}>
//       {/* Custom Header */}
//       <View style={styles.header}>
//         <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backBtn}>
//           <Ionicons name="arrow-back" size={26} color={Colors.primary} />
//         </TouchableOpacity>
//         <Text style={styles.headerTitle}>Franchise Partnership</Text>
//       </View>

//       <KeyboardAvoidingView behavior={Platform.OS === "ios" ? "padding" : "height"} style={{ flex: 1 }}>
//         <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={styles.scrollContent}>
          
//           <View style={styles.topSection}>
//             <Ionicons name="business" size={60} color={Colors.secondary} />
//             <Text style={styles.mainTitle}>Grow with Just2Car</Text>
//             <Text style={styles.subTitle}>Enter your preferred contact details below.</Text>
//           </View>

//           {/* User Details (Editable) */}
//           <View style={styles.formCard}>
//              <InputGroup 
//                label="Full Name" 
//                icon="person-outline" 
//                value={logic.formData.name}
//                onChange={(v: string) => logic.setFormData({...logic.formData, name: v})}
//                placeholder="Full Name"
//              />

//              <InputGroup 
//                label="Phone Number" 
//                icon="call-outline" 
//                keyboardType="numeric"
//                maxLength={10}
//                value={logic.formData.phone}
//                onChange={(v: string) => logic.setFormData({...logic.formData, phone: v})}
//                placeholder="Mobile Number"
//              />

//              <InputGroup 
//                label="Email Address" 
//                icon="mail-outline" 
//                autoCapitalize="none"
//                value={logic.formData.email}
//                onChange={(v: string) => logic.setFormData({...logic.formData, email: v})}
//                placeholder="Email"
//              />

//             <View style={styles.dropdownRow}>
//               <View style={{ flex: 1 }}>
//                 <CustomDropdown 
//                   label="Preferred State" 
//                   placeholder="State" 
//                   data={logic.statesList.map(s => s.name)} 
//                   selectedValue={logic.formData.state.name} 
//                   onSelect={logic.onStateChange} 
//                 />
//               </View>
//               <View style={{ width: 15 }} />
//               <View style={{ flex: 1 }}>
//                 <CustomDropdown 
//                   label="Preferred City" 
//                   placeholder="City" 
//                   data={logic.citiesList.map(c => c.name)} 
//                   selectedValue={logic.formData.city.name} 
//                   onSelect={logic.onCityChange} 
//                 />
//               </View>
//             </View>

//             <Text style={styles.label}>Additional Message (Optional)</Text>
//             <TextInput 
//               style={styles.textArea} 
//               placeholder="Tell us about your background or target area..." 
//               multiline 
//               numberOfLines={4}
//               textAlignVertical="top"
//               placeholderTextColor="#9CA3AF"
//               value={logic.formData.message}
//               onChangeText={(v) => logic.setFormData({...logic.formData, message: v})}
//             />

//             <TouchableOpacity 
//               style={[styles.submitBtn, logic.loading && { opacity: 0.7 }]} 
//               onPress={logic.handleSubmit}
//               disabled={logic.loading}
//             >
//               {logic.loading ? (
//                 <ActivityIndicator color="white" />
//               ) : (
//                 <>
//                     <Text style={styles.submitText}>Submit Inquiry</Text>
//                     <Ionicons name="send" size={18} color="white" style={{marginLeft: 10}} />
//                 </>
//               )}
//             </TouchableOpacity>
//           </View>

//           <View style={{ height: 40 }} />
//         </ScrollView>
//       </KeyboardAvoidingView>
//     </SafeAreaView>
//   );
// };

// // Reusable Input Component for better code
// const InputGroup = ({ label, icon, value, onChange, placeholder, ...props }: any) => (
//     <View style={styles.inputGroup}>
//       <Text style={styles.label}>{label}</Text>
//       <View style={styles.inputBox}>
//         <Ionicons name={icon} size={20} color={Colors.primary} />
//         <TextInput 
//           style={styles.input} 
//           placeholder={placeholder} 
//           placeholderTextColor="#9CA3AF"
//           value={value}
//           onChangeText={onChange}
//           {...props}
//         />
//       </View>
//     </View>
// );

// export default FranchisePartnerFormScreen;

