import express from 'express';
import cors from 'cors';
import marketRoutes from './routes/market';
import portfolioRoutes from './routes/portfolio';
import tradeRoutes from './routes/trade';

const app = express();
const port = process.env.PORT || 8080;

app.use(cors());
app.use(express.json());

app.use('/market', marketRoutes);
app.use('/portfolio', portfolioRoutes);
app.use('/trade', tradeRoutes);

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});