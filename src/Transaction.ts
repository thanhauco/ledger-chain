import * as CryptoJS from 'crypto-js';
import * as EC from 'elliptic';
const ec = new EC.ec('secp256k1');
export class Transaction {
    public signature: string;
    constructor(public fromAddress: string, public toAddress: string, public amount: number) {}
    calculateHash(): string {
        return CryptoJS.SHA256(this.fromAddress + this.toAddress + this.amount).toString();
    }
    signTransaction(signingKey: any) {
        if (signingKey.getPublic('hex') !== this.fromAddress) {
            throw new Error('You cannot sign transactions for other wallets!');
        }
        const hashTx = this.calculateHash();
        const sig = signingKey.sign(hashTx, 'base64');
        this.signature = sig.toDER('hex');
    }
    isValid(): boolean {
        if (this.fromAddress === null) return true;
        if (!this.signature || this.signature.length === 0) throw new Error('No signature in this transaction');
        const publicKey = ec.keyFromPublic(this.fromAddress, 'hex');
        return publicKey.verify(this.calculateHash(), this.signature);
    }
}