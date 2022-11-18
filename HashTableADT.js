class HashTableADT {
    constructor(tableSize) {
      this.table = new Array(tableSize);
      this.size = 0;
    }
  
    _hash(key) {
      let hash = 0;
      for (let i = 0; i < key.length; i++) {
        hash += key.charCodeAt(i);
      }
      return hash % this.table.length;
    }
  
    add(key, value) {
      const index = this._hash(key);
      if (this.table[index]) {
        for (let i = 0; i < this.table[index].length; i++) {
          if (this.table[index][i][0] === key) {
            this.table[index][i][1] = value;
            return;
          }
        }
        this.table[index].push([key, value]);
      } else {
        this.table[index] = [];
        this.table[index].push([key, value]);
      }
      this.size++;
    }
  
    valueOf(key) {
      const index = this._hash(key);
      if (this.table[index]) {
        for (let i = 0; i < this.table.length; i++) {
          if (this.table[index][i][0] === key) {
            return this.table[index][i][1];
          }
        }
      }
      return undefined;
    }
  
    remove(key) {
      const index = this._hash(key);
  
      if (this.table[index] && this.table[index].length) {
        for (let i = 0; i < this.table.length; i++) {
          if (this.table[index][i][0] === key) {
            this.table[index].splice(i, 1);
            this.size--;
            return true;
          }
        }
      } else {
        return false;
      }
    }
    
    display() {
        this.table.forEach((values, index) => {
          const chainedValues = values.map(
            ([key, value]) => `[ ${key}: ${value} ]`
          );
          console.log(`${index}: ${chainedValues}`);
        });
    }
    
  }
  
  const hashTable = new HashTableADT(127);
  
  hashTable.add("Eliam", "Soy Estudiante");
  hashTable.add("Messi", "Soy el mejor jugador de la historia");
  hashTable.add("Juan Pablo", "Soy el gato de Eliam");
  hashTable.add("Doritos", 15)
  
  console.log(hashTable.valueOf("Eliam"))
  console.log(hashTable.valueOf("Messi"))
  console.log(hashTable.valueOf("Juan Pablo"))
  console.log(hashTable.valueOf("Doritos"))
  
  hashTable.remove("Doritos")
  hashTable.remove("Messi")

  hashTable.display()

  