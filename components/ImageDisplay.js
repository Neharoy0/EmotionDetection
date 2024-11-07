import React from 'react';
import { Image, StyleSheet } from 'react-native';

export default function ImageDisplay({ imageUri }) {
  if (!imageUri) return null;

  return <Image source={{ uri: imageUri }} style={styles.image} />;
}

const styles = StyleSheet.create({
  image: {
    width: '100%', // Full width of the screen
    height: 300, // Adjust height as needed
    resizeMode: 'contain', // To keep image aspect ratio
    marginBottom: 20, // Spacing between the image and the button
  },
});
