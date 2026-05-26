import ImagePicker from 'react-native-image-crop-picker';
import { Image as ImageCompressor, Video as VideoCompressor } from 'react-native-compressor';
import { Alert } from 'react-native';

export const processMediaFiles = async (type: 'image' | 'video', currentMediaCount: number) => {
  try {
    const pickerOptions = type === 'image' ? {
      multiple: true,
      mediaType: 'photo' as const,
      maxFiles: 4 - currentMediaCount,
    } : { mediaType: 'video' as const };

    const results = await ImagePicker.openPicker(pickerOptions);
    const filesArray = Array.isArray(results) ? results : [results];
    let processedFiles: any[] = [];

    for (const file of filesArray) {
      if (file.mime.startsWith('image')) {
        const compressedPath = await ImageCompressor.compress(file.path, { maxWidth: 1200, quality: 0.8 });
        processedFiles.push({ ...file, path: compressedPath });
      } else if (file.mime.startsWith('video')) {
        const duration = (file as any).duration / 1000;
        if (duration > 60) {
          Alert.alert("Error", "Video is too long (Max 1 min)");
          continue;
        }
        const compressedVideoPath = await VideoCompressor.compress(file.path, { compressionMethod: 'auto' });
        processedFiles.push({ ...file, path: compressedVideoPath });
      }
    }
    return processedFiles;
  } catch (err) {
    console.log("Media Upload Error:", err);
    return [];
  }
};