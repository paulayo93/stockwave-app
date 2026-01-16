import React from 'react';
import { View, Text } from 'react-native';
import { Stock } from '@/types/stock.types';

export const Financials: React.FC<{ stock: Stock }> = ({ stock }) => {
  const LabelValue = ({ label, value }: { label: string; value: string | number }) => (
    <View className="mb-4 w-1/2">
      <Text className="mb-1 font-inter text-xs uppercase text-slate-400">{label}</Text>
      <Text className="font-inter-semibold text-slate-900">{value}</Text>
    </View>
  );

  return (
    <View className="mt-6 flex-row flex-wrap">
      <LabelValue label="High" value={`$${stock.high}`} />
      <LabelValue label="Low" value={`$${stock.low}`} />
      <LabelValue label="Open" value={`$${stock.open}`} />
      <LabelValue label="Volume" value={stock.volume} />
      <LabelValue label="Mkt Cap" value={stock.marketCap} />
      <LabelValue label="P/E Ratio" value={stock.pe} />
    </View>
  );
};
