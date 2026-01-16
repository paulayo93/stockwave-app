import { useStockContext } from '@/context/StockContext';

export const useMarketData = () => {
  const { stocks, marketIndices, portfolio, wishlist } = useStockContext();

  const getStockById = (id: string) => stocks.find(s => s.id === id);

  return {
    stocks,
    marketIndices,
    portfolio,
    wishlist,
    getStockById,
  };
};
