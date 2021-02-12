import { Blockchain } from '../src/Blockchain';
test('genesis block', () => {
    const coin = new Blockchain();
    expect(coin.chain.length).toBe(1);
});