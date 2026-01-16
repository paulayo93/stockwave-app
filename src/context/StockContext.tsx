import React, { createContext, useContext, useMemo } from 'react';
import { mockStocks, mockMarketIndices, mockPortfolio, mockWishlist } from '@/constants/mockData';

import { Stock, MarketIndex, Portfolio } from '@/types/stock.types';

interface StockContextType {
  stocks: Stock[];
  marketIndices: MarketIndex[];
  portfolio: Portfolio;
  wishlist: Stock[];
  getStockById: (id: string) => Stock | undefined;
}

const StockContext = createContext<StockContextType | undefined>(undefined);

export const StockProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const value = useMemo(
    () => ({
      stocks: mockStocks,
      marketIndices: mockMarketIndices,
      portfolio: mockPortfolio,
      wishlist: mockStocks.filter(stock => mockWishlist.includes(stock.id)),
      getStockById: (id: string) => mockStocks.find(s => s.id === id),
    }),
    []
  );

  return <StockContext.Provider value={value}>{children}</StockContext.Provider>;
};

export const useStockContext = () => {
  const context = useContext(StockContext);
  if (context === undefined) {
    throw new Error('useMarketData must be used within a StockProvider');
  }
  return context;
};
