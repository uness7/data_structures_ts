type QNode<T> = {
    value: T,
    next?: QNode<T> 
};

class Queue<T> {
    public length: number; 
    public head: QNode<T> | undefined;
    public tail: QNode<T> | undefined;
 
    constructor() {
        this.length = 0;
        this.tail = this.head = undefined;
    }

    enqueue(item: T): void {
        this.length++;
        const node: QNode<T> = {value: item} as QNode<T>;
        if (!this.tail) {
            this.tail = this.head =  node;
        }
        this.tail = node;
        this.tail.next = node;
    }

    deque(): T | undefined {
        if (!this.head) {
            return undefined;
        }
        this.length--;
        const head: QNode<T> = this.head;
        this.head = this.head.next;
        return head.value;
    }

    peek(): T | undefined {
        return this.head?.value;
    } 
}
