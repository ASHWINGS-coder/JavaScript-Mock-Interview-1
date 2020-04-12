// Q12. Implement Queue class in JS.

// first in first out 

class Node{
    constructor(value){
        this.value = value;
        this.next = null;
    }
}

class Queue{
    constructor(){
        this.front = null;
        this.back = null;
    }

    isEmpty(){
        // queue is considered empty if front element is null
        return !this.front;
    }

    // enqueue
    enqueue(value){
        //create a new node with value
        let node = new Node(value);

        // id queue is empty
        if(this.isEmpty()){
            //point front and back to new node 
            this.front = this.back = node;
        }
        // else queue is not empty
        else{
        // push the node to back of the queue
        // by pointing the last node to the newly created node
        this.back.next = node;

       //move back pointer to new node
        this.back = node
        }

    }

    // dequeue
    dequeue(){
        // pointer to front of the queue
        let node = this.front;
        // if queue is not empty
        if(!this.isEmpty()){
        // move front to the next element
        this.front = this.front.next;
        }
        //front is null / past the end of the queue
        if(!this.front){
        // set back to null
        this.back = null
        }

       
    }
}