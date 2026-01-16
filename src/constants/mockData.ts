import { Stock } from '@/types/stock.types';
export const MOCK_STOCKS: Stock[] = [
  {
    id: '1',
    symbol: 'AAPL',
    name: 'Apple Inc.',
    price: 175.43,
    change: 1.25,
    changePercentage: 0.72,
    chartData: [172, 173, 172.5, 174, 175.43],
    description:
      'Apple Inc. designs, manufactures, and markets smartphones, personal computers, tablets, wearables, and accessories worldwide.',
    marketCap: '2.8T',
    volume: '52.1M',
  },
  {
    id: '2',
    symbol: 'TSLA',
    name: 'Tesla, Inc.',
    price: 242.65,
    change: -5.4,
    changePercentage: -2.18,
    chartData: [250, 248, 245, 243, 242.65],
    description:
      'Tesla, Inc. designs, develops, manufactures, leases, and sells electric vehicles, and energy generation and storage systems.',
    marketCap: '770B',
    volume: '115M',
  },
];
