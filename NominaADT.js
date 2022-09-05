import { Trabajador } from "./Trabajador.js";
import { ArregloADT } from "./ArregloADT.js";

export class NominaADT{

    constructor( nomina ){
      this.nomina = new ArregloADT(nomina.length);
      let contador = 0;

      for(let i = 0; i < nomina.length; i++){
        
        let trabTemp = new Trabajador(nomina[i][6],nomina[i][3],nomina[i][4],nomina[i][2],nomina[i][1],nomina[i][5],parseInt(nomina[i][0]));
        this.nomina.setElemento(contador, trabTemp);
        contador += 1;
      }
    }
    
    listarSueldos(){
      for(let i = 0; i < this.nomina.getLongitud(); i++){ 
        let emp = this.nomina.getElemento(i);
        console.log(`ID: ${emp.getNumeroTrabajador()} SUELDO: ${emp.calcularSueldo()}`)
        }
    }
    
    mayorAntiguedad(){
      const mayor = 2023;
      let idx = 0;
      for(let i = 0; i < this.nomina.getLongitud(); i++){
        let emp = this.nomina.getElemento(i);
        if( emp.getAnioIngreso() < mayor ){
          idx = i;
          mayor = emp.getAnioIngreso();
        }
        return this.nomina.getElemento(idx)
      }
    }
  }
  