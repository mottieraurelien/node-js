export default class List<T> {

    private readonly items: T[];
    private count: number;

    constructor(...items: T[]) {
        this.items = items || [];
        this.count = this.items.length;
    }

    size(): number {
        return this.count;
    }

}