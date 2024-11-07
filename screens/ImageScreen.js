import React, { useEffect } from 'react';
import { View, StyleSheet, Button, Text } from 'react-native';
import ImageDisplay from '../components/ImageDisplay';

export default function ImageScreen({ route, navigation }) {
  const { imageUri } = route.params;

  useEffect(() => {
    console.log('Image URI:', imageUri); // Check if the URI is logged correctly
  }, [imageUri]);

  return (
    <View style={styles.container}>
      {imageUri ? (
        <ImageDisplay imageUri={imageUri} />
      ) : (
        <Text>No image selected</Text>
      )}
      <Button title="Go Back" onPress={() => navigation.goBack()} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
    padding: 20,
  },
});
