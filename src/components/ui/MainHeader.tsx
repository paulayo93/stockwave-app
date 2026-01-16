import React from 'react';
import { View, Text, Pressable } from 'react-native';
import LogoIcon from '../../../assets/icons/logo.svg';
import BellIcon from '../../../assets/icons/bell.svg';

export const MainHeader = () => {
  return (
    <View className="flex-row items-center justify-between bg-white px-6 py-4">
      <View className="flex-row items-center space-x-2">
        <View className="mr-3 rounded-md bg-indigo-600 p-1.5">
          <LogoIcon width={20} height={20} fill="white" />
        </View>
        <Text className="font-inter-bold text-2xl tracking-tight text-slate-900">StockWave</Text>
      </View>

      <Pressable className="relative p-2 active:opacity-60">
        <BellIcon width={24} height={24} stroke="#0f172a" />
        <View className="absolute right-2 top-2 h-2.5 w-2.5 rounded-full border-2 border-white bg-red-500" />
      </Pressable>
    </View>
  );
};
