import React from 'react';
import { ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { MainHeader } from '@/components/ui/MainHeader';
import { PortfolioSummary } from '@/components/screens/stock/PortfolioSummary';

export default function Home() {
  return (
    <SafeAreaView className="flex-1 bg-white" edges={['top']}>
      <MainHeader />
      <ScrollView showsVerticalScrollIndicator={false}>
        <PortfolioSummary />
      </ScrollView>
    </SafeAreaView>
  );
}
