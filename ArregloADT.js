export class ArregloADT{
    #arr;
    
      constructor(tamanio){
        this.tamanio = tamanio
        this.#arr = new Array(tamanio);
      }
  
      getLongitud(){
          return this.#arr.length;
      }
  
      setElemento(indice, valor){
          // Establece un elemento en una posición
          // específica
        if( indice >= this.#arr.length){
          console.log(`El arreglo sólo tiene espacio para ${this.#arr.length} elementos.`)
        } else {
          this.#arr[indice] = valor;
        }
              
      }
  
      getElemento(indice){
          return this.#arr[indice]
          //Regresa elemento en el índice solicitado
      }
  
      limpiar(valor){
        //Establece todos los elementos al valor enviado
        for(let i = 0; i < this.#arr.length; i++){
          this.#arr[i] = valor;
        }
      }
  
      toString(){
          return this.#arr;
      }
  
  }
  
  
  
  