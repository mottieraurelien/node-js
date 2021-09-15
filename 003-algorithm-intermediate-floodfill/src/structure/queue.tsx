import Node from "./node";

export default class Queue<T> {

    private first?: Node<T>;
    private last?: Node<T>;
    private size: number = 0;

    // Enqueuing means adding an item to the end of the queue to ensure O(1).
    public enqueue(node: Node<T>) {
        if (!this.first) {
            this.first = this.last = node;
        } else {
            this.last?.point(node);
            this.last = node;
        }
        this.size++;
    }

    // Dequeueing means returning the item that we removed from the head of the queue to ensure O(1).
    public dequeue(): Node<T> {

        if (this.isEmpty() || !this.first) throw Error("Cannot dequeue from an empty queue.");

        const node: Node<T> = this.first;

        if (this.first === this.last) {
            this.first = this.last = undefined;
        } else {
            this.first = this.first ? this.first.getNext() : undefined;
        }

        this.size--;

        return node;
    }

    public isEmpty(): boolean {
        return this.size === 0;
    }

}