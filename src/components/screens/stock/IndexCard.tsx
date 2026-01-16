import React from 'react';
import { View, Text } from 'react-native';

interface IndexCardProps {
  symbol: string;
  name: string;
  changePercentage: string;
}

export const IndexCard: React.FC<IndexCardProps> = ({ symbol, name, changePercentage }) => (
  <View className="mr-3 w-[180px] rounded-2xl border border-slate-100 bg-slate-50 p-4">
    <View className="mb-1 flex-row items-center">
      <View className="mr-3 rounded-lg bg-white p-2 shadow-sm">
        <Text className="font-inter-bold text-xs">{symbol}</Text>
      </View>
      <View>
        <Text className="font-inter-bold text-slate-900">{symbol}</Text>
        <Text className="font-inter text-[10px] text-slate-400" numberOfLines={1}>
          {name}
        </Text>
      </View>
    </View>
    <Text className="font-inter-semibold mt-2 text-green-500">+{changePercentage}%</Text>
  </View>
);
