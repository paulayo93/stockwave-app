export interface ChartPoint {
  timestamp: number;
  value: number;
}

export interface Stock {
  id: string;
  symbol: string;
  name: string;
  price: number;
  change: number;
  changePercent: number;
  chartData: ChartPoint[];
  logo: string;
  high: number;
  low: number;
  open: number;
  previousClose: number;
  volume: string;
  marketCap: string;
  pe: number;
  eps: number;
  dividend: number;
  yield: number;
}

export interface MarketIndex {
  symbol: string;
  name: string;
  value: number;
  change: number;
  changePercent: number;
}

export interface Portfolio {
  value: number;
  change: number;
  changePercent: number;
  chartData: ChartPoint[];
}
