export default class List<T> {

    private readonly items: T[];
    private count: number;

    constructor(...items: T[]) {
        this.items = items;
        this.count = items.length;
    }

    public size(): number {
        return this.count;
    }

}