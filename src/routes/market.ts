import { Router } from 'express';

const router = Router();

router.get('/', (req, res) => {
  // Mock market data
  const marketData = [
    { symbol: 'BTC', price: 90000, change: 2.5 },
    { symbol: 'ETH', price: 4000, change: -1.2 },
    { symbol: 'ADA', price: 1.5, change: 0.8 },
  ];
  res.json(marketData);
});

export default router;