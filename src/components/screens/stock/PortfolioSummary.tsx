import React from 'react';
import { View, Text } from 'react-native';
import Svg, { Path } from 'react-native-svg';
import { useMarketData } from '@/hooks/useStocks';
import { formatCurrency } from '@/utils/formatters';
import EyeIcon from '../../../../assets/icons/eye.svg';

export const PortfolioSummary = () => {
  const { portfolio } = useMarketData();

  const generatePath = () => {
    if (!portfolio.chartData || portfolio.chartData.length === 0) return '';

    const data = portfolio.chartData;
    const min = Math.min(...data.map(d => d.value));
    const max = Math.max(...data.map(d => d.value));
    const range = max - min;

    return data
      .map((point, i) => {
        const x = (i / (data.length - 1)) * 100;
        const y = 40 - ((point.value - min) / range) * 30;
        return `${i === 0 ? 'M' : 'L'} ${x} ${y}`;
      })
      .join(' ');
  };

  const isPositive = portfolio.changePercent >= 0;

  return (
    <View className="flex-row items-center justify-between px-6 py-6">
      <View className="flex-1">
        <View className="flex-row items-center space-x-2">
          <Text className="font-inter text-base text-slate-400">Portfolio value</Text>
          <View className="ml-1">
            <EyeIcon width={16} height={16} stroke="#94a3b8" />
          </View>
        </View>

        <Text className="mt-1 font-inter-bold text-4xl text-slate-900">
          {formatCurrency(portfolio.value)}
        </Text>
      </View>

      <View className="h-12 w-24">
        <Svg viewBox="0 0 100 50" preserveAspectRatio="none">
          <Path
            d={generatePath()}
            fill="none"
            stroke={isPositive ? '#22c55e' : '#ef4444'}
            strokeWidth="3"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </Svg>
      </View>
    </View>
  );
};
