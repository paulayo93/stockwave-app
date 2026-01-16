import React from 'react';
import { View, Text } from 'react-native';
import { Stock } from '@/types/stock.types';
import MiniChart from '../../../../assets/icons/mini-chart.svg';

interface WishlistCardProps {
  stock: Stock;
  isNegative?: boolean;
}

export const WishlistCard: React.FC<WishlistCardProps> = ({ stock, isNegative }) => (
  <View className="mb-4 w-[48%] rounded-3xl border border-slate-100 bg-white p-4">
    <View className="mb-4 flex-row items-start justify-between">
      <View className="rounded-2xl bg-slate-50 p-3">
        <Text className="font-inter-bold text-lg">{stock.symbol[0]}</Text>
      </View>
      <View className="items-end">
        <Text className="font-inter-bold text-slate-900">{stock.symbol}</Text>
        <Text className="font-inter text-[10px] text-slate-400">{stock.name}</Text>
      </View>
    </View>

    <Text className={`font-inter-semibold mb-2 ${isNegative ? 'text-red-500' : 'text-green-500'}`}>
      {isNegative ? '-' : '+'}
      {stock.changePercentage}%
    </Text>

    <MiniChart width="100%" height={40} stroke={isNegative ? '#ef4444' : '#22c55e'} />
  </View>
);
