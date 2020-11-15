class Node {
    constructor(val) {
        this.value = val;
        this.next = null;
    }
}

class Queue {
    constructor () {
        this.size = 0;
        this.first = null;
        this.last = null;
    }
    enqueue(val) {
        if(val) {
            this.size++;
            let newNode = new Node(val);
            if(this.last) {
                this.last.next = newNode;
                this.last = newNode;
            } else {
                this.last = newNode;
                this.first = newNode;
            }
            return this.size;
        }
    }
    dequeue () {
        if(this.first) {
            let currentFirst = this.first;
            this.first = currentFirst.next;
            this.size--;
            return currentFirst.value;
        }
    }
    peek () {
       return this.first ? this.first.value : null;
    }
}