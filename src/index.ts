import { Blockchain } from './Blockchain';
import { Block } from './Block';
const coin = new Blockchain();
coin.addBlock(new Block(1, Date.now(), 'Tx 1'));
console.log('Valid?', coin.isChainValid());
coin.chain[1].data = 'Hacked';
console.log('Valid?', coin.isChainValid());