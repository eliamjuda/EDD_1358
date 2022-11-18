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

// El Código funciona, cuenta cada letra y la hashea, pero JavaScript no puede leer códigos largos, 
// sólo usa string, y no tiene tanta capacidad, pero si pudiera leer todo el libro haría lo mismo

const donQuijote = 
  "Primera parte del ingenioso hidalgo don Quijote de la Mancha Capítulo primero. Que trata de la condición y ejercicio del famoso hidalgo don Quijote de la Mancha";

let arr = donQuijote.split("");

const quijoteHasheado = arr.map( function(letra){
hashTable.add(letra, letra);
})

hashTable.display()

