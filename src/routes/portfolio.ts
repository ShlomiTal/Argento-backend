import { Router } from 'express';

const router = Router();

router.get('/', (req, res) => {
  // Mock portfolio data
  const portfolio = [
    { asset: 'BTC', amount: 0.5, value: 30000 },
    { asset: 'ETH', amount: 2, value: 8000 },
  ];
  res.json(portfolio);
});

export default router;