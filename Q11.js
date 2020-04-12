// Q11. Implement Stack class in JS.

// stack is datastructure based on last in first out

class Node{
    constructor(value,nextNode){
        this.value = value;
        this.nextNode = nextNode;
    }
}
class Stack{
    constructor(){
        this.top = null;
    }
// push method
    push(value){
        let node = new Node(value,this.top);
        this.top = node;
    }

    // pop method
    pop(){
        let value = null;

        if(this.top){
        value = this.top.value;
        this.top =   this.top.nextNode
        }

        return value;
    }

    // print stack
    print(){
        let ptr = this.top;

        while(ptr){
            console.log(ptr.value);
            ptr = ptr.nextNode;
        }
    }
}