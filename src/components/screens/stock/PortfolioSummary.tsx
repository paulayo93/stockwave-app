import React from 'react';
import { View, Text } from 'react-native';
import EyeIcon from '../../../../assets/icons/eye.svg';
import TrendLine from '../../../../assets/icons/header-trend.svg';

export const PortfolioSummary = () => {
  return (
    <View className="flex-row items-center justify-between px-6 py-4">
      <View>
        <View className="flex-row items-center space-x-2">
          <Text className="font-inter text-lg text-slate-400">Portfolio value</Text>
          <EyeIcon width={18} height={18} stroke="#94a3b8" />
        </View>
        <Text className="mt-1 font-inter-bold text-4xl text-slate-900">$13,240.11</Text>
      </View>

      <View className="pt-4">
        <TrendLine width={100} height={50} stroke="#22c55e" strokeWidth={3} />
      </View>
    </View>
  );
};
