import React from 'react';
import { View } from 'react-native';
import Svg, { Path } from 'react-native-svg';
import { ChartPoint } from '@/types/stock.types';

interface MainChartProps {
  data: ChartPoint[];
  color: string;
}

export const MainChart: React.FC<MainChartProps> = ({ data, color }) => {
  if (!data || data.length === 0) return null;

  const min = Math.min(...data.map(d => d.value));
  const max = Math.max(...data.map(d => d.value));
  const range = max - min;

  const points = data
    .map((d, i) => {
      const x = (i / (data.length - 1)) * 100;
      const y = 50 - ((d.value - min) / range) * 40;
      return `${x},${y}`;
    })
    .join(' L ');

  return (
    <View className="my-6 h-48 w-full">
      <Svg viewBox="0 0 100 50" preserveAspectRatio="none" className="h-full w-full">
        <Path
          d={`M ${points}`}
          fill="none"
          stroke={color}
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </Svg>
    </View>
  );
};
