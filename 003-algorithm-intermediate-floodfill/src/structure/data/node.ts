export default class Node<T> {

    private readonly value: T;
    private next?: Node<T>;

    constructor(value: T) {
        this.value = value;
    }

    getValue(): T {
        return this.value;
    }

    getNext(): Node<T> | undefined {
        return this.next;
    }

    point(newNextNode: Node<T>): void {
        this.next = newNextNode;
    }

}