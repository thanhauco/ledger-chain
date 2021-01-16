import * as CryptoJS from 'crypto-js';
export class Block {
    public index: number;
    public timestamp: number;
    public data: string;
    public previousHash: string;
    public hash: string;
    public nonce: number;
    constructor(index: number, timestamp: number, data: string, previousHash: string = '') {
        this.index = index;
        this.timestamp = timestamp;
        this.data = data;
        this.previousHash = previousHash;
        this.hash = this.calculateHash();
        this.nonce = 0;
    }
    calculateHash(): string {
        return CryptoJS.SHA256(this.index + this.previousHash + this.timestamp + this.data + this.nonce).toString();
    }
    mineBlock(difficulty: number) {
        while (this.hash.substring(0, difficulty) !== Array(difficulty + 1).join('0')) {
            this.nonce++;
            this.hash = this.calculateHash();
        }
        console.log('Block mined: ' + this.hash);
    }
}