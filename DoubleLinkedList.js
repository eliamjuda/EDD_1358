class Node {
    constructor(data, next, prev){
      this.data = data;
      this.next = next;
      this.prev = prev;
    }
  }
  
  class DoubleLinkedList {
    constructor(){
      this.head = null;
      this.tail = null;
      this.size = 0;
    }
      
    isEmpty(){
      return this.size === 0;
    }
      
    getSize(){
      return this.size;
    }
      
    addToTail( data ){
      const newNode = new Node( data, null, this.tail );
      if( this.tail ){
        newNode.prev = this.tail;
        this.tail.next = newNode;
        this.tail = newNode;
      }else {
        this.tail = newNode;
        this.head = newNode;
      }
      this.size++
    }
    
    addToHead( data ){
      const newNode = new Node(data, this.head, null);
      if( this.head ){
        newNode.next = this.head;
        this.head.prev = newNode;
        this.head = newNode;
      } else {
        this.head = newNode;
        this.tail = newNode;
      }
      this.size++;
    }
    
    insertAt( data, index ){
      if ( index < 0 || index > this.size ){
        return null;
      }
      
          const newNode = new Node( data, null, null );
      let current = this.head;
      let previous;
        
      if ( index === 0){
        newNode.next = current;
        current.prev = newNode;
        this.head = newNode;
      }else {
        for( let i = 0; i < index; i++ ){
          previous = current;
          current = current.next;
        }
        
        newNode.next = current;
        newNode.prev = previous;
        current.prev = newNode;
        previous.next = newNode;
      }
      this.size++;
    }
    
    removeFromTail(){
      if ( !this.tail ){
        return null;
      }
      
      const valueToReturn = this.tail.data;
      
      if ( this.head === this.tail ){
        this.head = null;
        this.tail = null;
      } else {
        this.tail = this.tail.prev;
        this.tail.next = null;
      }
      this.size--;
      return valueToReturn;
    }
    
    removeFromHead(){
      if (!this.head){
        return null;
      }
      const valueToReturn = this.head.data;
      if ( this.head === this.tail ){
        this.head = null;
        this.tail = null;
      } else {
        this.head = this.head.next;
        this.head.prev = null;
      }
      this.size--;
      return valueToReturn;
    }
    
    removeData(data){
      let current = this.head;
      let previous = null;
      
      while( current !== null ){
        if ( current.data == data ){
          if( !previous ){
            return this.removeFromHead();
          } else if ( !current.next ){
            return this.removeFromTail();
          } else {
            previous.next = current.next;
            current.next.prev = previous;
          }
          this.size--;
          return current.data;
        }
        previous = current;
        current = current.next;
      }
      return null;
    }
    
    // BUSCAR
    search( data ){
      let current = this.tail;
      let position = 0;
  
      return position;
    }
    
    // ACTUALIZAR
    
    update( data, value ){
      let current = this.head;
      let previous = null;
      
      previous = current;
      current = current.next;
      
      return null;
    }
    
    transversal( direction ){
      let result = '';
      
      if( direction === 'der'){
        let current = this.tail;
        while( current ){
          result += current.data + ' <-> ';
          current = current.prev;
          }
      return result += ' X ';
      }
      
      if( direction === 'izq'){
        let current = this.head;
        while( current ){
          result += current.data + ' <-> ';
          current = current.next;
          }
      return result += ' X ';
      }
  
    }
  
  }
  
  const doubleLinkedList = new DoubleLinkedList();
  doubleLinkedList.addToHead(3)
  doubleLinkedList.addToHead(3)
  doubleLinkedList.addToHead(2)
  doubleLinkedList.addToHead(5)
  doubleLinkedList.addToHead(7)
  
  
  console.log(doubleLinkedList.transversal("der"))
  
  doubleLinkedList.addToTail(19)
  doubleLinkedList.addToTail(1)
  doubleLinkedList.addToTail(4)
  doubleLinkedList.addToTail(19)
  
  
  console.log(doubleLinkedList.transversal("der"))
  
  doubleLinkedList.insertAt(4)
  
  console.log(doubleLinkedList.transversal("der"))
  
  console.log(doubleLinkedList.isEmpty())
  console.log(doubleLinkedList.getSize())
  console.log(doubleLinkedList.transversal("der"))
  console.log(doubleLinkedList.transversal("izq"))
  