import React, { useCallback } from 'react';
import { Tabs, useFocusEffect } from 'expo-router';
import { setStatusBar } from '@/utils/helpers';
import { Home, PieChart, ArrowLeftRight, TrendingUp, User } from 'lucide-react-native';
import { View } from 'react-native';

const TabsLayout = () => {
  useFocusEffect(
    useCallback(() => {
      setStatusBar('#ffffff', 'dark-content');
    }, [])
  );

  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
        tabBarStyle: {
          height: 88,
          paddingTop: 12,
          backgroundColor: '#FFFFFF',
          borderTopWidth: 0,
          elevation: 0,
          shadowOpacity: 0,
        },
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          tabBarIcon: ({ color }) => <Home size={28} color={color} />,
          tabBarInactiveTintColor: '#94A3B8',
          tabBarActiveTintColor: '#1E293B',
        }}
      />
      <Tabs.Screen
        name="analytics"
        options={{
          tabBarIcon: ({ color }) => <PieChart size={28} color={color} />,
          tabBarInactiveTintColor: '#94A3B8',
          tabBarActiveTintColor: '#1E293B',
        }}
      />
      <Tabs.Screen
        name="transfer"
        options={{
          tabBarIcon: () => (
            <View className="-mt-8 h-14 w-14 items-center justify-center rounded-full bg-[#4F5BBE] shadow-lg shadow-indigo-500/50">
              <ArrowLeftRight size={26} color="white" strokeWidth={2.5} />
            </View>
          ),
        }}
      />
      <Tabs.Screen
        name="market"
        options={{
          tabBarIcon: ({ color }) => <TrendingUp size={28} color={color} />,
          tabBarInactiveTintColor: '#94A3B8',
          tabBarActiveTintColor: '#1E293B',
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          tabBarIcon: ({ color }) => <User size={28} color={color} />,
          tabBarInactiveTintColor: '#94A3B8',
          tabBarActiveTintColor: '#1E293B',
        }}
      />
    </Tabs>
  );
};

export default TabsLayout;
