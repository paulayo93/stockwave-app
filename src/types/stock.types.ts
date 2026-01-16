export interface Stock {
  id: string;
  symbol: string;
  name: string;
  price: number;
  change: number;
  changePercentage: number;
  chartData: number[];
  description: string;
  marketCap: string;
  volume: string;
}
