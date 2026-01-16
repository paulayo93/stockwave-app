import React from 'react';
import { FlatList, View, Text, ScrollView, StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useMarketData } from '@/hooks/useStocks';
import { MainHeader } from '@/components/ui/MainHeader';
import { PortfolioSummary } from '@/components/screens/stock/PortfolioSummary';
import { IndexCard } from '@/components/screens/stock/IndexCard';
import { WishlistCard } from '@/components/screens/stock/WishlistCard';
import { StockRow } from '@/components/screens/stock/StockRow';

export default function Home() {
  const { stocks, marketIndices, wishlist } = useMarketData();
  const ListHeader = () => (
    <View className="pb-4">
      <PortfolioSummary />
      <View>
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.contentContainerStyle}
          className="mb-8"
        >
          {marketIndices.map(index => (
            <IndexCard key={index.symbol} index={index} />
          ))}
        </ScrollView>
      </View>
      <View className="mb-8 px-6">
        <View className="mb-4 flex-row items-center justify-between">
          <Text className="font-inter-bold text-xl text-slate-900">Wishlist</Text>
          <View className="rounded-full bg-indigo-100 p-1.5">
            <Text className="font-bold text-indigo-600">+</Text>
          </View>
        </View>

        <View className="flex-row flex-wrap justify-between">
          {wishlist.map(stock => (
            <WishlistCard key={stock.id} stock={stock} />
          ))}
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
        data={stocks}
        keyExtractor={item => item.id}
        renderItem={({ item }) => (
          <View className="px-6">
            <StockRow stock={item} />
          </View>
        )}
        ListHeaderComponent={ListHeader}
        contentContainerStyle={styles.paddingBottom40}
        showsVerticalScrollIndicator={false}
        removeClippedSubviews={false}
        initialNumToRender={10}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  paddingBottom40: {
    paddingBottom: 40,
  },
  contentContainerStyle: {
    paddingLeft: 24,
    paddingRight: 12,
  },
});
