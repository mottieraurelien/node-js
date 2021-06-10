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

    add(item: T) {
        throw Error("Not implemented yet.");
    }

    get(index: number): T {
        throw Error("Not implemented yet.");
    }

    first(): T {
        throw Error("Not implemented yet.");
    }

    last(): T {
        throw Error("Not implemented yet.");
    }

}