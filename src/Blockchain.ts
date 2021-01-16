import { Block } from './Block';
export class Blockchain {
    public chain: Block[];
    public difficulty: number;
    constructor() {
        this.chain = [this.createGenesisBlock()];
        this.difficulty = 2;
    }
    createGenesisBlock(): Block {
        return new Block(0, Date.now(), 'Genesis Block', '0');
    }
    getLatestBlock(): Block {
        return this.chain[this.chain.length - 1];
    }
    addBlock(newBlock: Block) {
        newBlock.previousHash = this.getLatestBlock().hash;
        newBlock.mineBlock(this.difficulty);
        this.chain.push(newBlock);
    }
}