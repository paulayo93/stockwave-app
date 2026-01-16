import React, { useState } from 'react';
import { View, Text, ScrollView, Pressable, TouchableOpacity } from 'react-native';
import { useLocalSearchParams, useRouter } from 'expo-router';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useMarketData } from '@/hooks/useStocks';
import { formatCurrency, formatPercent } from '@/utils/formatters';
import { MainChart } from '@/components/screens/stock/MainChart';
import { Financials } from '@/components/screens/stock/Financials';
import ChevronLeft from '../../assets/icons/chevron-left.svg';
import BellIcon from '../../assets/icons/bell.svg';

type StockTab = 'Summary' | 'Details';

export default function StockDetailScreen() {
  const { id } = useLocalSearchParams();
  const router = useRouter();
  const { getStockById } = useMarketData();
  const [activeTab, setActiveTab] = useState<StockTab>('Details');

  const stock = getStockById(id as string);
  if (!stock) return null;

  const isPositive = stock.changePercent >= 0;

  return (
    <SafeAreaView className="flex-1 bg-white" edges={['top']}>
      <View className="flex-row items-center justify-between px-6 py-2">
        <TouchableOpacity
          onPress={() => router.back()}
          className="rounded-xl border border-slate-100 p-2"
        >
          <ChevronLeft width={20} height={20} stroke="#0f172a" />
        </TouchableOpacity>
        <Text className="font-inter-bold text-lg">Detail Stock</Text>
        <View className="w-10" /> {/* Spacer for balance */}
      </View>

      <ScrollView showsVerticalScrollIndicator={false} className="flex-1 px-6">
        <View className="mt-6 flex-row items-center justify-between rounded-2xl border border-indigo-100 bg-slate-50 p-4">
          <View className="flex-row items-center">
            <View className="h-10 w-10 items-center justify-center rounded-full bg-white">
              <Text className="font-inter-bold">{stock.symbol.charAt(0)}</Text>
            </View>
            <View className="ml-3">
              <Text className="font-inter-bold text-base">{stock.symbol}</Text>
              <Text className="font-inter text-xs text-slate-400">{stock.name}</Text>
            </View>
          </View>
          <BellIcon width={20} height={20} stroke="#94a3b8" />
        </View>

        <View className="mt-8 flex-row items-end justify-between">
          <View>
            <Text className="font-inter-bold text-4xl">{formatCurrency(stock.price)}</Text>
            <Text
              className={`font-inter-semibold text-sm ${isPositive ? 'text-green-500' : 'text-red-500'}`}
            >
              {formatPercent(stock.changePercent)} Past Month
            </Text>
          </View>
          <View className="items-end">
            <Text className="font-inter-bold text-xl">$43.21</Text>
            <Text className="font-inter-semibold text-sm text-green-500">+0.13 (0.30%)</Text>
          </View>
        </View>
        <MainChart data={stock.chartData} color={isPositive ? '#22c55e' : '#ef4444'} />
        <View className="mb-8 flex-row justify-between">
          {['1D', '1W', '1M', '1Y', '5Y', 'ALL'].map(range => (
            <View
              key={range}
              className={`rounded-lg px-3 py-2 ${range === '1M' ? 'bg-indigo-100' : ''}`}
            >
              <Text
                className={`font-inter-semibold text-xs ${range === '1M' ? 'text-indigo-600' : 'text-slate-400'}`}
              >
                {range}
              </Text>
            </View>
          ))}
        </View>

        <View className="mb-6 flex-row rounded-2xl bg-slate-50 p-1">
          {(['Summary', 'Details'] as const).map(tab => (
            <Pressable
              key={tab}
              onPress={() => setActiveTab(tab)}
              className={`flex-1 items-center rounded-xl py-3 ${activeTab === tab ? 'bg-white shadow-sm' : ''}`}
            >
              <Text
                className={`font-inter-semibold ${activeTab === tab ? 'text-slate-900' : 'text-slate-400'}`}
              >
                {tab}
              </Text>
            </Pressable>
          ))}
        </View>

        <Text className="font-inter-bold text-xl">Financials</Text>
        <Financials stock={stock} />
      </ScrollView>

      <View className="border-t border-slate-50 px-6 py-4">
        <TouchableOpacity className="items-center rounded-2xl bg-indigo-600 py-4">
          <Text className="font-inter-bold text-lg text-white">Buy stocks</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}
