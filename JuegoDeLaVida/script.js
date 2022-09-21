class Tablero {

    constructor(){
        this.filas = 50;                                         
        this.columnas = 50;                                                        
        this.lado = 10;                                                              
        this.reproducir = false;
        this.copia = [];
    }


    generarTablero(){
        let html = "<table cellpadding=0 cellspacing=0 id='tablero' finalborder=5>" //generamos el tablero
        console.log(this.filas)
            // Cambia el estado de la célula (viva = black, muerta = white)
        
        for (let y = 0; y < this.filas; y++) {
            html += "<tr>"
            for (let x = 0; x < this.columnas; x++) {
                html += `<td id="celula-${x + "-" + y}" onmouseup ="cambiarEstado(${x},${y})">` //a cada clic que hacemos en la celula cambiamos su estado
                html += "</td>"
            }
            html += "</tr>"
        }
        html + "</table>"
        let contenedor = document.getElementById("contenedor-tablero")
        contenedor.innerHTML = html
        let tablero = document.getElementById("tablero")
        tablero.style.width = this.lado * this.columnas + "px"
        tablero.style.height = this.lado * this.filas + "px"
        this.copiarTablero()  

    }

    // Crea una copia del tablero poniendo false o true dependiendo si hay células vivas
    copiarTablero(){
        for (let x = 0; x < this.columnas; x++) {
            this.copia.push([])
            for (let y = 0; y < this.columnas; y++) {
                let celula = document.getElementById(`celula-${x + "-" + y}`)
                this.copia[x][y] = celula.style.background == "black"
            }
        }
    }


    // Cuenta las células vivas, buscando en (x-1,y), (x-1,y-1), (x+1,y+1) y regresa la variable vivas si hay más de 3
    contarVivas( x , y ){
        let vivas = 0
        for (let i = -1; i <= 1; i++) {
            for (let j = -1; j <= 1; j++) {               
                    if ( i == 0 && j == 0){
                        continue
                    }
                    else if (typeof this.copia[x+i] != 'undefined'
                            && typeof this.copia[x+i][y+j] != 'undefined'
                            && this.copia[x+i][y+j]) {
                        vivas++;
                    }
                if (vivas > 3) {
                    return vivas
                }
            }
        }
        return vivas
    }

    // Cambia el estado de las celulas dependiendo de las reglas establecidas
    siguienteEstado() {       
        this.copiarTablero() 
        for (let x = 0; x < this.columnas; x++) {
            for (let y = 0; y < this.columnas; y++) {
                let vivas = this.contarVivas(x, y)
                let celula = document.getElementById(`celula-${x + "-" + y}`)
                //celula esta viva (true)
                if (this.copia[x][y]) { 
                    if (vivas < 2 || vivas > 3) // si tiene menos de dos celulas o mas de 3 celulas vivas muere
                        celula.style.background = "white"
                } else {  //celula esta muerta
                    if (vivas == 3) //si tiene 3 celulas vivas a su alrededor revive
                        celula.style.background = "black"
                }
            }
        }
    }


}

const tablero = new Tablero()

tablero.generarTablero()


function cambiarEstado( x , y ){
    let celula = document.getElementById(`celula-${x + "-" + y}`)
    if (celula.style.background != "black") {
        celula.style.background = "black"
    } else {
        celula.style.background = "white"
    }
}

function limpiar() {  //deja todas las celulas en blanco
    for (let x = 0; x < tablero.columnas; x++) {
        for (let y = 0; y < tablero.columnas; y++) {
            let vivas = tablero.contarVivas(x, y)
            let celula = document.getElementById(`celula-${x + "-" + y}`)
            if (tablero.copia[x][y]) {
                celula.style.background = "white"
            } else {
                celula.style.background = "white"
            }
        }
    }
}

console.log(tablero.reproducir)

function reproduccion(){
    // Cambia reproducir a true
    tablero.reproducir = !tablero.reproducir;
    console.log(tablero.reproducir)
}

setInterval(() => {    // intervalo para reproducir el juego, si reproducir es true llama a la funcion siguiente estado.
    if (tablero.reproducir) {
        tablero.siguienteEstado();
    }
}, 50)


