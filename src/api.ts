import express from 'express';
import { Blockchain } from './Blockchain';
const app = express();
const coin = new Blockchain();
app.get('/blocks', (req, res) => res.json(coin.chain));
app.listen(3001, () => console.log('API running on 3001'));