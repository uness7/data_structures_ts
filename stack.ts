type Node<T> = {
    value: T,
    next?: Node<T>
};

export default class Stack<T> {
    public length: number;
    public head?: Node<T>;

    constructor() {
        this.length = 0;
        this.head = undefined;
    }

    push(item: T): void {
        const node: Node<T> = {value: item} as Node<T>;
        this.length++;
        if (!this.head) {
            this.head = node;
            return ;
        }
        node.next = this.head;
        this.head = node;
    }

    pop(): T | undefined {
        this.length = Math.max(0, this.length - 1);

        if (this.length === 0) {
            const head = this.head;
            this.head = undefined;
            return head?.value;
        }
        const head = this.head as Node<T>;
        this.head = head.next;
        return head.value;
    }

    peek(): T | undefined {
        return this.head?.value;
    }
}
