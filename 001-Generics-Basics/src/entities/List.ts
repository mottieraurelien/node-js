export default class List {

    items: any[];

    constructor(...items: any[]) {
        this.items = items;
    }

    public push(item: any) {
        this.items.push(item);
    }

    public get(index: number): any {
        const length: number = this.items.length;
        if (length > 0 && index >= 0 && index < length) return this.items[index];
        throw Error("Cannot get any item.");
    }

    public getFirst(): any {
        const length: number = this.items.length;
        if (length > 0) return this.items[0];
        throw Error("Cannot get any first item from an empty array.");
    }

    public getLast(): any {
        const length: number = this.items.length;
        if (length > 0) return this.items[length - 1];
        throw Error("Cannot get any last item from an empty array.");
    }

}