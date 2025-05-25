export interface MarketData {
  symbol: string;
  price: number;
  change: number;
}

export interface PortfolioItem {
  asset: string;
  amount: number;
  value: number;
}

export interface Trade {
  symbol: string;
  amount: number;
}