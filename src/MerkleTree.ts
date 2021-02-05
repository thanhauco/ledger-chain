import * as CryptoJS from 'crypto-js';
export class MerkleTree {
    constructor(public transactions: string[]) {}
    getRoot(): string {
        if (this.transactions.length === 0) return '';
        // Simplify: just hash all together
        return CryptoJS.SHA256(this.transactions.join('')).toString();
    }
}