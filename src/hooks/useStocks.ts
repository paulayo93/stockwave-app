import { useState, useEffect } from 'react';
import { MOCK_STOCKS } from '@/constants/mockData';
import { Stock } from '@/types/stock.types';

export const useStocks = () => {
  const [stocks, setStocks] = useState<Stock[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    //delay
    const timer = setTimeout(() => {
      setStocks(MOCK_STOCKS);
      setLoading(false);
    }, 500);
    return () => clearTimeout(timer);
  }, []);

  return { stocks, loading };
};
