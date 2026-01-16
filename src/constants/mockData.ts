import { Stock, MarketIndex, Portfolio, ChartPoint } from '@/types/stock.types';

const generateChartData = (
  baseValue: number,
  volatility: number = 0.02,
  points: number = 30
): ChartPoint[] => {
  const data = [];
  let value = baseValue;
  const now = Date.now();

  for (let i = 0; i < points; i++) {
    const change = (Math.random() - 0.5) * volatility * value;
    value += change;
    data.push({
      timestamp: now - (points - i) * 3600000,
      value: value,
    });
  }
  return data;
};

export const mockStocks: Stock[] = [
  {
    id: 'NFLX',
    symbol: 'NFLX',
    name: 'Netflix, Inc',
    price: 88.91,
    change: 1.13,
    changePercent: 1.29,
    chartData: generateChartData(88),
    logo: 'NFLX',
    high: 89.5,
    low: 87.2,
    open: 87.78,
    previousClose: 87.78,
    volume: '8.5M',
    marketCap: '38.5B',
    pe: 32.45,
    eps: 2.74,
    dividend: 0,
    yield: 0,
  },
  {
    id: 'AAPL',
    symbol: 'AAPL',
    name: 'Apple, Inc',
    price: 142.65,
    change: 1.15,
    changePercent: 0.81,
    chartData: generateChartData(142),
    logo: 'AAPL',
    high: 143.2,
    low: 141.5,
    open: 141.5,
    previousClose: 141.5,
    volume: '52.3M',
    marketCap: '2.8T',
    pe: 28.34,
    eps: 5.03,
    dividend: 0.96,
    yield: 0.67,
  },
  {
    id: 'FB',
    symbol: 'FB',
    name: 'Facebook, Inc',
    price: 343.01,
    change: 3.64,
    changePercent: 1.07,
    chartData: generateChartData(340),
    logo: 'FB',
    high: 345.2,
    low: 339.37,
    open: 339.37,
    previousClose: 339.37,
    volume: '18.2M',
    marketCap: '950B',
    pe: 24.67,
    eps: 13.91,
    dividend: 0,
    yield: 0,
  },
  {
    id: 'AMZN',
    symbol: 'AMZN',
    name: 'Amazon, Inc',
    price: 3234.5,
    change: -1.62,
    changePercent: -0.05,
    chartData: generateChartData(3235),
    logo: 'AMZN',
    high: 3250.0,
    low: 3220.0,
    open: 3236.12,
    previousClose: 3236.12,
    volume: '3.8M',
    marketCap: '1.6T',
    pe: 58.93,
    eps: 54.89,
    dividend: 0,
    yield: 0,
  },
  {
    id: 'ADBE',
    symbol: 'ADBE',
    name: 'Adobe, Inc',
    price: 567.8,
    change: 1.81,
    changePercent: 0.32,
    chartData: generateChartData(567),
    logo: 'ADBE',
    high: 570.5,
    low: 565.2,
    open: 565.99,
    previousClose: 565.99,
    volume: '2.1M',
    marketCap: '270B',
    pe: 45.23,
    eps: 12.55,
    dividend: 0,
    yield: 0,
  },
];

export const mockMarketIndices: MarketIndex[] = [
  {
    symbol: 'SPX',
    name: 'S&P 500',
    value: 4567.89,
    change: 45.23,
    changePercent: 49.5,
  },
  {
    symbol: 'DJI',
    name: 'Dow Jones',
    value: 35432.1,
    change: 234.56,
    changePercent: 12.34,
  },
];

export const mockPortfolio: Portfolio = {
  value: 13240.11,
  change: 234.56,
  changePercent: 1.8,
  chartData: generateChartData(13000, 0.01, 50),
};

export const mockWishlist = ['AMZN', 'ADBE'];

export const getStockById = (id: string): Stock | undefined => {
  return mockStocks.find(stock => stock.id === id);
};
