class Queue {
    constructor(){
        
        // Lugar donde son añadidos los elementos en la cola
        this.items = {};

        // El primer elemento de la cola
        this.front = 0;

        // El último elemento añadido 
        this.end = 0;
    };
    
    // Enqueue: Ir añadiendo más elementos a la cola
    enqueue(data){
        // en items, se van agregando los elementos 
        this.items[this.end] = data;
        // Se aumenta la capacidad de end, para que luego puedan ser añadidos más elementos a la cola
        this.end++;
    };
    
    // Dequeue: Ir sacando los primeros elementos en ser añadidos
    dequeue(){
        // Si el primer elemento en la cola es igual que el último elemento en la cola
        if ( this.front === this.end ) {
            return null;
        };
      
        // Data es igual al primer valor en la cola
        const data = this.items[this.front];

        // Se elimina el valor en la cola (items)
        delete this.items[this.front];

        // Front aumenta, pues ya se sacó un elemento de la cola
        this.front++;
        return data;
    }
    
    length() {
        // End siempre será mayor o igual que Front, el resultado son los valores restantes en la cola
        return this.end - this.front;
    }
    
    // Si get Size es 0, entonces está vacía, sino no lo está.
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
 
 const queue = new Queue();
 
 console.log(queue.isEmpty())
 queue.enqueue(1)
 queue.enqueue("eliam")
 queue.enqueue(3)
 queue.enqueue(4)
 queue.dequeue()
 console.log(queue.to_string())
 
 
 
 
 