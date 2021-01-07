import { Block } from './Block';
export class Blockchain {
    public chain: Block[];
    constructor() {
        this.chain = [this.createGenesisBlock()];
    }
    createGenesisBlock(): Block {
        return new Block(0, Date.now(), 'Genesis Block', '0');
    }
    getLatestBlock(): Block {
        return this.chain[this.chain.length - 1];
    }
    addBlock(newBlock: Block) {
        newBlock.previousHash = this.getLatestBlock().hash;
        newBlock.hash = newBlock.calculateHash();
        this.chain.push(newBlock);
    }
}