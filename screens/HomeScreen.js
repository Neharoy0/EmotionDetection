import React, { useState, useEffect } from 'react';
import { View, StyleSheet, Alert } from 'react-native';
import CameraButton from '../components/CameraButton';
import LibraryButton from '../components/LibraryButton';
import { Camera } from 'expo-camera';
import * as ImagePicker from 'expo-image-picker';

export default function HomeScreen({ navigation }) {
  const [hasCameraPermission, setHasCameraPermission] = useState(null);
  const [hasLibraryPermission, setHasLibraryPermission] = useState(null);

  useEffect(() => {
    (async () => {
      const cameraStatus = await Camera.requestCameraPermissionsAsync();
      setHasCameraPermission(cameraStatus.status === 'granted');

      const libraryStatus = await ImagePicker.requestMediaLibraryPermissionsAsync();
      setHasLibraryPermission(libraryStatus.status === 'granted');
    })();
  }, []);

  const openCamera = async () => {
    if (!hasCameraPermission) {
      Alert.alert('Permission Denied', 'Camera access is required to take photos');
      return;
    }
    const result = await ImagePicker.launchCameraAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });
    console.log('Camera result:', result); // Log the result to debug
    if (!result.canceled) {
      navigation.navigate('Image', { imageUri: result.assets[0].uri });
    }
  };

  const openLibrary = async () => {
    if (!hasLibraryPermission) {
      Alert.alert('Permission Denied', 'Library access is required to select photos');
      return;
    }
    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });
    console.log('Library result:', result); // Log the result to debug
    if (!result.canceled) {
      navigation.navigate('Image', { imageUri: result.assets[0].uri });
    }
  };

  return (
    <View style={styles.container}>
      <CameraButton openCamera={openCamera} />
      <LibraryButton openLibrary={openLibrary} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
});
