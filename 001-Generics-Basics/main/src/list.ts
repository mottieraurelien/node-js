export default class List<T> {

    private readonly items: T[];
    private count: number;

    constructor(...items: T[]) {
        this.items = items || [];
        this.count = this.items.length;
    }

    add(item: T): void {
        this.items.push(item);
        this.count++;
    }

    get(index: number): T {
        if (this.isEmpty()) throw Error("The list is empty and must be filled first.");
        if (index < 0) throw Error("The index must be positive.");
        if (index >= this.count) throw Error(`The index must be between 0 and ${this.count - 1}.`);
        return this.items[index];
    }

    first(): T {
        if (this.isEmpty()) throw Error("The list is empty and must be filled first.");
        return this.items[0];
    }

    last(): T {
        if (this.isEmpty()) throw Error("The list is empty and must be filled first.");
        return this.items[this.size() - 1];
    }

    size(): number {
        return this.count;
    }

    isEmpty(): boolean {
        return this.items.length === 0;
    }

}