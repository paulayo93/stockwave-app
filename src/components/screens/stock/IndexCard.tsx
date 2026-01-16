import React from 'react';
import { View, Text } from 'react-native';
import { MarketIndex } from '@/types/stock.types';
import { formatPercent } from '@/utils/formatters';

interface IndexCardProps {
  index: MarketIndex;
}

export const IndexCard: React.FC<IndexCardProps> = ({ index }) => {
  const isPositive = index.changePercent >= 0;

  return (
    <View className="mr-3 w-[160px] rounded-3xl border border-slate-100 bg-white p-4 shadow-sm">
      <View className="mb-3 flex-row items-center">
        <View className="h-10 w-10 items-center justify-center rounded-2xl border border-slate-100 bg-slate-50">
          <Text className="font-inter-bold text-slate-900">{index.symbol.charAt(0)}</Text>
        </View>
        <View className="ml-3">
          <Text className="font-inter-bold text-slate-900" numberOfLines={1}>
            {index.symbol}
          </Text>
          <Text className="font-inter text-[10px] text-slate-400" numberOfLines={1}>
            {index.name}
          </Text>
        </View>
      </View>

      <Text className={`font-inter-bold text-sm ${isPositive ? 'text-green-500' : 'text-red-500'}`}>
        {formatPercent(index.changePercent)}
      </Text>
    </View>
  );
};
