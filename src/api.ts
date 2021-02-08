import express from 'express';
import { Blockchain } from './Blockchain';
import { Transaction } from './Transaction';
const app = express();
app.use(express.json());
const coin = new Blockchain();
app.get('/blocks', (req, res) => res.json(coin.chain));
app.post('/transact', (req, res) => {
    const { from, to, amount } = req.body;
    const tx = new Transaction(from, to, amount);
    coin.createTransaction(tx);
    res.json({ note: 'Transaction added' });
});
app.get('/mine', (req, res) => {
    coin.minePendingTransactions('my-address');
    res.json({ note: 'Mined' });
});
app.listen(3001, () => console.log('API running on 3001'));