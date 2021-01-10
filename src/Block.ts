import * as CryptoJS from 'crypto-js';
export class Block {
    public index: number;
    public timestamp: number;
    public data: string;
    public previousHash: string;
    public hash: string;
    constructor(index: number, timestamp: number, data: string, previousHash: string = '') {
        this.index = index;
        this.timestamp = timestamp;
        this.data = data;
        this.previousHash = previousHash;
        this.hash = this.calculateHash();
    }
    calculateHash(): string {
        return CryptoJS.SHA256(this.index + this.previousHash + this.timestamp + this.data).toString();
    }
}