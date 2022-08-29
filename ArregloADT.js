class ArregloADT{
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
  
  const array1 = new ArregloADT(5);
  
  console.log(array1.getLongitud())
  array1.setElemento(0, "Hola")
  array1.setElemento(1, 23)
  array1.setElemento(2, "Eliam")
  array1.setElemento(3, 20.98)
  array1.setElemento(4, "Castillo")
  
  const array2 = new ArregloADT(5);
  
  console.log(array1.getLongitud())
  array2.setElemento(0, "Adios")
  array2.setElemento(1, 1)
  array2.setElemento(2, "Eliam")
  array2.setElemento(3, 20.98)
  array2.setElemento(4, array1)
  
  console.log(array2.toString())
  
  
  