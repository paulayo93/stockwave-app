import React from 'react';
import '../global.css';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { Slot } from 'expo-router';
import { useFonts, Inter_400Regular, Inter_700Bold } from '@expo-google-fonts/inter';
import { StyleSheet } from 'react-native';

/**  @TODO:  add fonts **/

export default function RootLayout() {
  const [fontsLoaded] = useFonts({
    Inter_400Regular,
    Inter_700Bold,
  });

  if (!fontsLoaded) return null;
  return (
    <GestureHandlerRootView style={styles.wrapper}>
      <Slot />
    </GestureHandlerRootView>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
  },
});
