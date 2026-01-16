import React, { useEffect } from 'react';
import '../global.css';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { Slot, SplashScreen } from 'expo-router';
import { useFonts, Inter_400Regular, Inter_700Bold } from '@expo-google-fonts/inter';
import { StyleSheet } from 'react-native';

/**  @TODO:  add fonts **/

export default function RootLayout() {
  const [fontsLoaded, error] = useFonts({
    Inter_400Regular,
    Inter_700Bold,
  });

  useEffect(() => {
    if (fontsLoaded || error) SplashScreen.hideAsync();
  }, [fontsLoaded, error]);

  if (!fontsLoaded && !error) return null;
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
