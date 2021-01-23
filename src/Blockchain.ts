import { Block } from './Block';
import { Transaction } from './Transaction';
export class Blockchain {
    public chain: Block[];
    public difficulty: number;
    public pendingTransactions: Transaction[];
    public miningReward: number;
    constructor() {
        this.chain = [this.createGenesisBlock()];
        this.difficulty = 2;
        this.pendingTransactions = [];
        this.miningReward = 100;
    }
    createGenesisBlock(): Block {
        return new Block(Date.now(), [], '0');
    }
    getLatestBlock(): Block {
        return this.chain[this.chain.length - 1];
    }
    minePendingTransactions(miningRewardAddress: string) {
        const block = new Block(Date.now(), this.pendingTransactions, this.getLatestBlock().hash);
        block.mineBlock(this.difficulty);
        this.chain.push(block);
        this.pendingTransactions = [new Transaction(null, miningRewardAddress, this.miningReward)];
    }
    createTransaction(transaction: Transaction) {
        this.pendingTransactions.push(transaction);
    }
    getBalanceOfAddress(address: string): number {
        let balance = 0;
        for (const block of this.chain) {
            for (const trans of block.transactions) {
                if (trans.fromAddress === address) balance -= trans.amount;
                if (trans.toAddress === address) balance += trans.amount;
            }
        }
        return balance;
    }
}