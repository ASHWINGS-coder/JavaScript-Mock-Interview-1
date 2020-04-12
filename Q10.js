// Q10. Implement LinkedList class in JS.

// Linked-List is a  Linear data structure , an ordered collection of data  
// the elements or nodes in LL ,they are not stored in sequencial memory loc insted elemets are linked together usimg a pointer

class Node{
    // each Node is going to take two things the data and the pointer
    // as the last (tail) points to null next is null
    constructor(data,next = null){
        this.data = data;
        this.next = next;
    }
}

class LinkedList{
    constructor(){
        this.head = null; // if no first element or node list is empty
        this.size = 0 ;// size of list
    }

    // Insert first node
    insertFirst(data){
        this.head = new Node(data,this.head);
        this.size++;
    }

    // Insert last node
    insertLast(data){
        let node = new Node(data);
        let current;

        // if empty , make head
        if(!this.head){
            this.head = node;
        }else{
            current = this.head;

            while(current.next){
            current = current.next;
            }

            current.next = node;
        }
        this.size++;
    }

    // Insert at Index
    insertAt(data,index){
        // if index is out of range
        if(index > 0 && index>this.size){
            return
        }

        //  if first index
        if(index === 0){
            this.head = new Node(data,this.head);
            return;
        }

        const node = new Node(data);
        let current,previous ; 

        // Set current to first
        current = this.head;
        let count = 0;

        while(count < index){
            previous = current; // Node before Index
            count ++;
            current = current.next;// node after the Index
        }

        node.next = current;
        previous.next = node;
        
        this.size++;
    }

    // Get at index
        getAt(index){
            current = this.head;
            let count = 0;
            while(current){
                if(count == index){
                    console.log(current.data);
                }
                count++;
                current = current.next;
            }
            return null;
        }

    //Remove at index
    removeAt(index){ 
        // if out-of-range 
        if(index > 0 && index > this.size ){
            return;
        }

        let current = this.head;
        let previous;
        let count = 0 ;
        // Remove first
        if(index === 0){
            // setting head to next value
            this.head = current.next
        }else{
            while(count < index){
                count ++;
                previous = current ;
                current = current.next;
            }
            // to remove the node
            previous.next = current.next;
        }

        this.size -- ;
    }

    // Clear List 
    clearList(){
        this.head = null;
        this.size = 0;
    }

    // Print list data
    printListData(){
        let current = this.head;
         while(current){
             console.log(current.data);
             current = current.next;
         }
    }
}
