export class Trabajador{
    constructor(numTrabajador, nombre, aPaterno, aMaterno, horasExtras, sueldoBase, anioIngreso){
      this.numTrabajador = numTrabajador;
      this.nombre = nombre;
      this.aPaterno = aPaterno;
      this.aMaterno = aMaterno;
      this.horasExtras = horasExtras;
      this.sueldoBase = sueldoBase;
      this.anioIngreso = anioIngreso;
      this.HORA_EXTRA = 276.5;
    }
    
    getNumeroTrabajador(){
      return this.numTrabajador;
    }
    
    setNumeroTrabajador( num ){
      this.numTrabajador = num;
    }
    
    setNombre( nombre ){
      this.nombre = nombre;
    }
    
    getNombre(){
      return this.nombre;
    }
    
    setPaterno( paterno ){
      this.aPaterno = paterno;
    }
    
    getPaterno(){
      return this.aPaterno;
    }
    
    setMaterno( materno ){
      this.aMaterno = materno;
    }
    
    getMaterno(){
      return this.aMaterno;
    }
    
    setHorasExtras( he ){
      this.horasExtras = he;
    }
    
    getHorasExtras(){
      return this.horasExtras;
    }
    
    setSueldoBase( sb ){
      this.sueldoBase = sb;
    }
    
    getSueldoBase(){
      return this.sueldoBase;
    }
    
    setAnioIngreso( ai ){
      this.anioIngreso = ai;
    }
    
    getAnioIngreso(){
      return this.anioIngreso;
    }
    
    calcularSueldo(){
      const antiguedad = 2022 - this.anioIngreso;
      let total = this.sueldoBase + (this.sueldoBase*(antiguedad*0.03)) + (this.horasExtras * this.HORA_EXTRA);
      return total;
    }
    
    toString(){
      return this.numTrabajador + this.nombre + this.aPaterno;
    }
  }
  