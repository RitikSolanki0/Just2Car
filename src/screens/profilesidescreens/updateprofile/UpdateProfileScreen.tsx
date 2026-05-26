

import React from "react";
import { View, Text, TextInput, TouchableOpacity, ScrollView, Image, ActivityIndicator } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Ionicons from "@react-native-vector-icons/ionicons";
import { styles } from "./UpdateProfileStyles";
import { useUpdateProfileLogic } from "./useUpdateProfileLogic";

const UpdateProfileScreen = ({ navigation }: any) => {
  const logic = useUpdateProfileLogic(navigation);

  return (
    <SafeAreaView style={styles.safeArea}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Ionicons name="arrow-back" size={28} color="black" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Update Profile</Text>
      </View>

      <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={styles.scrollContent}>
        
        {/* Profile Image Section */}
        <View style={styles.imageContainer}>
          <Image 
            source={
              logic.profileImage 
                ? { uri: logic.profileImage.path } 
                : logic.currentImage 
                  ? { uri: logic.currentImage } 
                  : require("../../../assets/images/imageslogo.png")
            } 
            style={styles.profileImage} 
          />
          <TouchableOpacity style={styles.cameraBtn} onPress={logic.pickImage}>
            <Ionicons name="camera" size={20} color="white" />
          </TouchableOpacity>
        </View>

        {/* Form Fields */}
        <View style={styles.inputGroup}>
          <Text style={styles.label}>Full Name</Text>
          <TextInput 
            style={styles.input} 
            value={logic.fullName} 
            onChangeText={logic.setFullName}
            placeholder="Enter your name"
          />
        </View>

        <View style={styles.inputGroup}>
          <Text style={styles.label}>Phone Number</Text>
          <TextInput 
            style={styles.input} 
            value={logic.phone} 
            onChangeText={logic.setPhone}
            keyboardType="phone-pad"
            maxLength={10}
            placeholder="Enter phone number"
          />
        </View>

        <View style={styles.inputGroup}>
          <Text style={styles.label}>Email Address (Cannot be changed)</Text>
          <TextInput 
            style={[styles.input, styles.disabledInput]} 
            value={logic.email} 
            editable={false} // यह यूजर को टाइप करने से रोकेगा
          />
        </View>

        {/* Update Button */}
        <TouchableOpacity 
          style={styles.updateBtn} 
          onPress={logic.handleUpdate}
          disabled={logic.loading}
        >
          {logic.loading ? (
            <ActivityIndicator color="white" />
          ) : (
            <Text style={styles.updateBtnText}>Save Changes</Text>
          )}
        </TouchableOpacity>

      </ScrollView>
    </SafeAreaView>
  );
};

export default UpdateProfileScreen;