import React from 'react';
import { View, Text, Pressable } from 'react-native';
import { Link } from 'expo-router';
import { Stock } from '@/types/stock.types';
import MiniChart from '../../../../assets/icons/mini-chart.svg';

interface StockRowProps {
  stock: Stock;
}

export const StockRow: React.FC<StockRowProps> = ({ stock }) => {
  const isPositive = stock.changePercent >= 0;
  const brandInitial = stock.symbol.charAt(0);

  return (
    <Link href={`/stock/${stock.id}`} asChild>
      <Pressable className="flex-row items-center justify-between py-4 active:opacity-60">
        <View className="flex-1 flex-row items-center">
          <View className="h-12 w-12 items-center justify-center rounded-full border border-slate-100 bg-slate-50">
            <Text className="font-inter-bold text-lg text-slate-900">{brandInitial}</Text>
          </View>
          <View className="ml-4">
            <Text className="font-inter-bold text-base text-slate-900">{stock.symbol}</Text>
            <Text className="font-inter text-xs text-slate-400">{stock.name}</Text>
          </View>
        </View>
        <View className="flex-1 px-4">
          <MiniChart
            width="100%"
            height={32}
            stroke={isPositive ? '#22c55e' : '#ef4444'}
            strokeWidth={2}
          />
        </View>
        <View className="items-end">
          <Text className="font-inter-bold text-base text-slate-900">
            ${stock.price.toLocaleString(undefined, { minimumFractionDigits: 2 })}
          </Text>
          <Text
            className={`mt-1 font-inter-semibold text-xs ${
              isPositive ? 'text-green-500' : 'text-red-500'
            }`}
          >
            {isPositive ? '+' : ''}
            {stock.changePercent}%
          </Text>
        </View>
      </Pressable>
    </Link>
  );
};
