import Node from "./node";

export default class Queue<T> {

    private first?: Node<T>;
    private last?: Node<T> = this.first;
    private size: number = 0;

    /**
     * Enqueuing means adding an item to the end of the queue to ensure O(1).
     */
    enqueue(item: T) {
        if (!this.first || !this.last) {
            this.first = new Node(item);
            this.last = this.first;
            this.size = 1;
        } else {
            const previousLast: Node<T> = this.last;
            this.last = new Node(item);
            previousLast.point(this.last);
            this.size++;
        }
    }

    /**
     * Dequeueing means returning the item that we removed from the head of the queue to ensure O(1).
     */
    dequeue(): T {

        if (!this.first) throw Error("Cannot dequeue from an empty queue.");

        const node: Node<T> = this.first;

        if (this.first === this.last) {
            this.first = this.last = undefined;
            this.size = 0;
        } else {
            this.first = this.first ? this.first.getNext() : undefined;
            this.size--;
        }

        return node.getValue();
    }

    isEmpty(): boolean {
        return this.size === 0;
    }

    isNotEmpty(): boolean {
        return !this.isEmpty();
    }

}