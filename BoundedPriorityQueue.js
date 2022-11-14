class BoundedPriorityQueue {
    constructor(){
        
        this.items = {};

        this.front = 0;

        this.end = 0;
    };
    
    enqueue(data, priority){
        if( !this.items[priority] ){
            this.items[priority][this.end] = data;
            this.end++;
        }else{
            this.items[priority+1][this.end] = data;
            this.end++;
        }
    };
    
    dequeue(){
        if ( this.front === this.end ) {
            return null;
        };
      
        const data = this.items[this.front];

        delete this.items[this.front];

        this.front++;
        return data;
    }
    
    length() {
        return this.end - this.front;
    }

    isEmpty() {
        if ( this.getSize() === 0 ){
            return true;
        } else {
            return false;
        }
    }
    
    to_string(){
        if (this.getSize() === 0){
            return null
        }
        let result = '';
        for ( let i = this.front; i < this.end; i++  ){
            result += this.items[i] + " - ";
        }
        return result
    }
  }
 
 const queue = new BoundedPriorityQueue();
 
 console.log(queue.isEmpty())
 queue.enqueue("Niñas", 1)
 queue.enqueue("Niños", 2)
 queue.enqueue("3ra edad", 2)
 queue.enqueue("Mujeres", 3)
 queue.enqueue("Hombres", 3)
 queue.enqueue("Maestre", 4)
 queue.enqueue("Mecánico", 4)
 queue.enqueue("Vigía", 4)
 queue.enqueue("Timonel", 4)
 queue.enqueue("Capitan", 5)
 
 console.log(queue.to_string())

 queue.dequeue()
 queue.dequeue()
 queue.dequeue()
 
 console.log(queue.to_string())
 
 
 
 
 