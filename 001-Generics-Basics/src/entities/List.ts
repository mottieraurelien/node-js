export default class List {

    items: any[];

    constructor(...items: any[]) {
        this.items = items;
    }

    public push(item: any) {
        this.items.push(item);
    }

    public get(index: number): any {
        return this.items.length > 0 ? this.items[index] : null;
    }

    public getFirst(): any {
        const length: number = this.items.length;
        return length > 0 ? this.items[0] : null;
    }

    public getLast(): any {
        const length: number = this.items.length;
        return length > 0 ? this.items[length - 1] : null;
    }

}