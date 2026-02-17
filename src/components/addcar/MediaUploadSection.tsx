import React from 'react';
import { View, Text, ScrollView, Image, TouchableOpacity, StyleSheet } from 'react-native';
import Ionicons from "@react-native-vector-icons/ionicons";
import { Fonts } from '../../theme/fonts';
import { Colors } from '../../theme/colors';

const MediaUploadSection = ({ mediaFiles, onUpload, onRemove }: any) => (
  <View>
    {mediaFiles.length > 0 && (
      <View style={styles.previewContainer}>
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          {mediaFiles.map((item: any, index: number) => (
            <View key={index} style={styles.previewBox}>
              <Image source={{ uri: item.path }} style={styles.previewImage} />
              {item.mime && item.mime.startsWith('video') && (
                <View style={styles.videoOverlay}>
                  <Ionicons name="play-circle" size={24} color="white" />
                </View>
              )}
              <TouchableOpacity style={styles.removeBtn} onPress={() => onRemove(index)}>
                <Ionicons name="close-circle" size={22} color="red" />
              </TouchableOpacity>
            </View>
          ))}
        </ScrollView>
      </View>
    )}

    <TouchableOpacity style={styles.uploadBtn} onPress={onUpload}>
      <Ionicons name="camera-outline" size={28} color="black" />
      <Text style={styles.uploadText}>
        {mediaFiles.length > 0 ? `Added ${mediaFiles.length}/5 files` : "Upload images/Video"}
      </Text>
    </TouchableOpacity>
  </View>
);

export default MediaUploadSection;

const styles = StyleSheet.create({
  previewContainer: { marginTop: 15, marginBottom: 5 },
  previewBox: { width: 85, height: 85, borderRadius: 12, marginRight: 12, position: 'relative', backgroundColor: '#eee' },
  previewImage: { width: '100%', height: '100%', borderRadius: 12 },
  videoOverlay: { ...StyleSheet.absoluteFillObject, backgroundColor: 'rgba(0,0,0,0.2)', justifyContent: 'center', alignItems: 'center', borderRadius: 12 },
  removeBtn: { position: 'absolute', top: -8, right: -8, backgroundColor: 'white', borderRadius: 12 },
  uploadBtn: { flexDirection: "row", alignItems: "center", justifyContent: "center", marginTop: 25, marginBottom: 15 },
  uploadText: { marginLeft: 10, fontFamily: Fonts.bold, fontSize: 15, textDecorationLine: "underline", color: Colors.black },
});