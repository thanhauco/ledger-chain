import { Blockchain } from './Blockchain';
import { Block } from './Block';
const coin = new Blockchain();
coin.addBlock(new Block(1, Date.now(), 'Tx 1'));
coin.addBlock(new Block(2, Date.now(), 'Tx 2'));
console.log(JSON.stringify(coin, null, 2));