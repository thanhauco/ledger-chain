export class BloomFilter {
    private size: number = 100;
    private bitArray: boolean[] = new Array(100).fill(false);
    add(item: string) {
        const hash = item.length % this.size;
        this.bitArray[hash] = true;
    }
    check(item: string): boolean {
        const hash = item.length % this.size;
        return this.bitArray[hash];
    }
}