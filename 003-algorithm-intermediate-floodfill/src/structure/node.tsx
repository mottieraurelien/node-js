export default class Node<T> {

    private value: T;
    private next?: Node<T>;

    constructor(value: T) {
        this.value = value;
    }

    public getValue(): T {
        return this.value;
    }

    public getNext(): Node<T> | undefined {
        return this.next;
    }

    public point(newNextNode: Node<T>) {
        this.next = newNextNode;
    }

}