import React from 'react';
import { Button } from 'react-native';

export default function CameraButton({ openCamera }) {
  return <Button title="Open Camera" onPress={openCamera} />;
}
