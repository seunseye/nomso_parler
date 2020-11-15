class Node {
    constructor (val) {
        this.value = val;
        this.next = null;
    }
}

class Stack {
    constructor() {
        this.first = null;
        this.last = null;
        this.size = 0;
    }
    push(value) {
        this.size++;
        let newNode = new Node(value);
        if(this.first) {
            let currentFirst = this.first;
            this.first= newNode;
            newNode.next = currentFirst;
        }else {
            this.first = newNode;
            this.last = newNode;
        }
        return this.size;
    }
    pop() {
        this.size--;
        if(this.first) {
            let firstItem = this.first;
            this.first = this.first.next;
            return firstItem.value;
        }
        return null;
    }
    peek() {
        return this.first ? this.first.value : undefined;
    }
    print () {
        if(this.size) {
            let currentItem = this.first;
            while(currentItem !== null) {
                console.log(currentItem.value);
                currentItem = currentItem.next;
            }
        } 
    }
}