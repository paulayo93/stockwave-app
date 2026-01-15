import React, { useCallback } from "react";
import { Tabs, useFocusEffect } from "expo-router";
import { setStatusBar } from "@/utils/helpers";

const TabsLayout = () => {

  useFocusEffect(
    useCallback(() => {
      setStatusBar('#ffffff', 'dark-content');
    }, [])
  );

  return (
    <Tabs
      backBehavior="history"
      initialRouteName="index"
      screenOptions={{
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          headerShown: false,
          tabBarLabel: 'Home',
          title: 'Home',
        }}
      />

      <Tabs.Screen
        name="orders"
        options={{
          headerShown: false,
          title: 'Orders',
        }}
      />

      <Tabs.Screen
        name="explore"

        options={{
          headerShown: false,
          tabBarLabel: "Explore",
          title: 'Explore',
        }}
      />

      <Tabs.Screen
        name="support"
        options={{
          tabBarLabel: "Support",
          headerShown: false,
          title: 'Support',
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          tabBarLabel: 'Profile',
          headerShown: false,
          title: 'Profile',
        }}
      />
    </Tabs>
  )
}

export default TabsLayout;
