import * as EC from 'elliptic';
const ec = new EC.ec('secp256k1');
export class Wallet {
    public keyPair: any;
    public publicKey: string;
    constructor() {
        this.keyPair = ec.genKeyPair();
        this.publicKey = this.keyPair.getPublic('hex');
    }
}