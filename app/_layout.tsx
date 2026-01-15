import React, { memo } from 'react'
import '../global.css';
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { Slot } from 'expo-router';

/**  @TODO:  add fonts **/


export default function RootLayout() {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <Slot />
    </GestureHandlerRootView>
  );
}
