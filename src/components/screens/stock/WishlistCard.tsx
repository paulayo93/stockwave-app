import React from 'react';
import { View, Text, Pressable } from 'react-native';
import { Link } from 'expo-router';
import { Stock } from '@/types/stock.types';
import { formatPercent } from '@/utils/formatters';
import MiniChart from '../../../../assets/icons/mini-chart.svg';

interface WishlistCardProps {
  stock: Stock;
}

export const WishlistCard: React.FC<WishlistCardProps> = ({ stock }) => {
  const isPositive = stock.changePercent >= 0;

  return (
    <Link href={`/stock/${stock.id}`} asChild>
      <Pressable className="mb-4 w-[48%] rounded-[32px] border border-slate-100 bg-white p-4 shadow-sm active:opacity-90">
        <View className="mb-4 flex-row items-center">
          <View className="h-10 w-10 items-center justify-center rounded-2xl bg-slate-50">
            <Text className="font-inter-bold text-slate-900">{stock.symbol.charAt(0)}</Text>
          </View>
          <View className="ml-3 flex-1">
            <Text className="font-inter-bold text-sm text-slate-900" numberOfLines={1}>
              {stock.symbol}
            </Text>
            <Text className="font-inter text-[10px] text-slate-400" numberOfLines={1}>
              {stock.name}
            </Text>
          </View>
        </View>

        <View className="flex-row items-end justify-between">
          <Text
            className={`font-inter-bold text-sm ${isPositive ? 'text-green-500' : 'text-red-500'}`}
          >
            {formatPercent(stock.changePercent)}
          </Text>

          <View className="h-8 w-16">
            <MiniChart
              width="100%"
              height="100%"
              stroke={isPositive ? '#22c55e' : '#ef4444'}
              strokeWidth={2}
            />
          </View>
        </View>
      </Pressable>
    </Link>
  );
};
