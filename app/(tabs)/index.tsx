import React from 'react';
import { FlatList, View, Text, ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { MainHeader } from '@/components/ui/MainHeader';
import { PortfolioSummary } from '@/components/screens/stock/PortfolioSummary';
import { IndexCard } from '@/components/screens/stock/IndexCard';
import { WishlistCard } from '@/components/screens/stock/WishlistCard';
import { StockRow } from '@/components/screens/stock/StockRow';
import { MOCK_STOCKS } from '@/constants/mockData';

export default function Home() {
  const ListHeader = () => (
    <View>
      <PortfolioSummary />

      <ScrollView horizontal showsHorizontalScrollIndicator={false} className="mb-8 pl-6">
        <IndexCard symbol="S&P 500" name="Standard & Poor's" changePercentage="49.50" />
        <IndexCard symbol="DOW" name="Dow Jones" changePercentage="12.30" />
      </ScrollView>

      <View className="mb-8 px-6">
        <View className="mb-4 flex-row items-center justify-between">
          <Text className="font-inter-bold text-xl text-slate-900">Wishlist</Text>
          <View className="rounded-full bg-indigo-100 p-1.5">
            <Text className="font-bold text-indigo-600">+</Text>
          </View>
        </View>
        <View className="flex-row flex-wrap justify-between">
          <WishlistCard stock={MOCK_STOCKS[0]} isNegative={true} />
          <WishlistCard stock={MOCK_STOCKS[1]} />
        </View>
      </View>

      <View className="mb-2 px-6">
        <Text className="font-inter-bold text-xl text-slate-900">Stocks</Text>
      </View>
    </View>
  );

  return (
    <SafeAreaView className="flex-1 bg-white" edges={['top']}>
      <MainHeader />

      <FlatList
        data={MOCK_STOCKS}
        keyExtractor={item => item.id}
        renderItem={({ item }) => (
          <View className="px-6">
            <StockRow stock={item} />
          </View>
        )}
        ListHeaderComponent={ListHeader}
        contentContainerStyle={{ paddingBottom: 40 }}
        showsVerticalScrollIndicator={false}
        removeClippedSubviews={false}
      />
    </SafeAreaView>
  );
}
