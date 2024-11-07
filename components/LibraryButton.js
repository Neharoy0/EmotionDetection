import React from 'react';
import { Button } from 'react-native';

export default function LibraryButton({ openLibrary }) {
  return <Button title="Open Library" onPress={openLibrary} />;
}
