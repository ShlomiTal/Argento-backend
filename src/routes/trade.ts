import { Router } from 'express';

const router = Router();

router.post('/', (req, res) => {
  const { symbol, amount } = req.body;
  // Mock trade processing
  res.json({ success: true, message: `Trade placed: ${amount} ${symbol}` });
});

export default router;