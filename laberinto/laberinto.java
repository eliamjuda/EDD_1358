package laberinto;

import java.util.*;

public class Laberinto {

    final static char C = ' ', X = 'x', S = 's', E = 'e', V = '.';

    final static int START_I = 0, START_J = 0;
    final static int END_I = 9, END_J = 9;
    
    private static final char[][] laberinto = {
        {S, X, X, X, X, X, X, X, X, X},
        {C, C, C, C, C, C, C, C, C, X},
        {X, C, C, C, X, C, X, X, C, X},
        {X, C, X, X, X, C, X, X, C, X},
        {X, C, C, C, C, X, X, X, C, X},
        {X, X, X, X, C, X, X, C, C, C},
        {X, X, X, X, C, X, C, C, X, C},
        {X, X, C, X, C, X, X, C, X, C},
        {X, X, C, C, C, C, C, C, X, C},
        {X, X, X, X, X, X, C, X, C, E}};

    public int tamLaberinto() {
        return laberinto.length;
    }

    public void imprimir() {
        for (int i = 0; i < tamLaberinto(); i++) {
            for (int j = 0; j < tamLaberinto(); j++) {
                System.out.print(laberinto[i][j]);
                System.out.print(' ');
            }
            System.out.println();
        }
    }

    public char marcar(int i, int j, char valor) {
        assert (isInMaze(i, j));
        char tmp = laberinto[i][j];
        laberinto[i][j] = valor;
        return tmp;
    }

    public char marcar(MazePos pos, char value) {
        return marcar(pos.i(), pos.j(), value);
    }

    public boolean isMarked(int i, int j) {
        assert (isInMaze(i, j));
        return (laberinto[i][j] == V);
    }

    public boolean isMarked(MazePos pos) {
        return isMarked(pos.i(), pos.j());
    }

    public boolean isClear(int i, int j) {
        assert (isInMaze(i, j));
        return (laberinto[i][j] != X && laberinto[i][j] != V);
    }

    public boolean isClear(MazePos pos) {
        return isClear(pos.i(), pos.j());
    }

    public boolean isInMaze(int i, int j) {
        if (i >= 0 && i < tamLaberinto() && j >= 0 && j < tamLaberinto()) {
            return true;
        } else {
            return false;
        }
    }

    public boolean isInMaze(MazePos pos) {
        return isInMaze(pos.i(), pos.j());
    }

    public boolean isFinal(int i, int j) {
        return (i == Laberinto.END_I && j == Laberinto.END_J);
    }

    public boolean isFinal(MazePos pos) {
        return isFinal(pos.i(), pos.j());
    }

    @Override
    public char[][] clone() {

        char[][] mazeCopy = new char[tamLaberinto()][tamLaberinto()];
        for (int i = 0; i < tamLaberinto(); i++) {
            System.arraycopy(laberinto[i], 0, mazeCopy[i], 0, tamLaberinto());
        }
        return mazeCopy;
    }

    public void restaurar(char[][] savedMaze) {
        for (int i = 0; i < tamLaberinto(); i++) {
            for (int j = 0; j < tamLaberinto(); j++) {
                laberinto[i][j] = savedMaze[i][j];
            }
        }
    }

    public static void main(String[] args) {

        Laberinto maze = new Laberinto();
        maze.imprimir();

        System.out.println("\n\nEncuentra una ruta con una pila: ");
        maze.resolverConPila();

        System.out.println("\n\nEncuentra una ruta con una cola: ");
        maze.resolverConCola();

        System.out.println("\n\nEncuentra una ruta recursiva: ");
        maze.resolverRecursion();

    }

    public void resolverConPila() {

        //guardar el laberinto
        char[][] savedMaze = clone();

        //declaran las ubicaciones de pila
        Stack<MazePos> candidatos = new Stack<>();

        //inserte el inicio
        candidatos.push(new MazePos(START_I, START_J));

        MazePos crt, next;
        while (!candidatos.empty()) {

            //obtener la posición actual
            crt = candidatos.pop();

            if (isFinal(crt)) {
                break;
            }

            //marcar la posición actual
            marcar(crt, V);

            //poner sus vecinos en la cola
            next = crt.irNorte();
            if (isInMaze(next) && isClear(next)) {
                candidatos.push(next);
            }
            next = crt.IrEste();
            if (isInMaze(next) && isClear(next)) {
                candidatos.push(next);
            }
            next = crt.IrOeste();
            if (isInMaze(next) && isClear(next)) {
                candidatos.push(next);
            }
            next = crt.irSur();
            if (isInMaze(next) && isClear(next)) {
                candidatos.push(next);
            }
        }

        if (!candidatos.empty()) {
            System.out.println("Ya lo tienes!");
        } else {
            System.out.println("Estás atrapado en el laberinto!");
        }
        imprimir();

        //restaurar el laberinto
        restaurar(savedMaze);
    }

    public void resolverConCola() {

        //guardar el laberinto
        char[][] savedMaze = clone();

        //declaran las ubicaciones de pila 
        LinkedList<MazePos> candidates = new LinkedList<>();

        //inserte el inicio 
        candidates.add(new MazePos(START_I, START_J));

        MazePos crt, next;
        while (!candidates.isEmpty()) {

            //obtener la posición actual
            crt = candidates.removeFirst();

            if (isFinal(crt)) {
                break;
            }

            //marcar la posición actual
            marcar(crt, V);

            //poner sus vecinos en la cola
            next = crt.irNorte();
            if (isInMaze(next) && isClear(next)) {
                candidates.add(next);
            }
            next = crt.IrEste();
            if (isInMaze(next) && isClear(next)) {
                candidates.add(next);
            }
            next = crt.IrOeste();
            if (isInMaze(next) && isClear(next)) {
                candidates.add(next);
            }
            next = crt.irSur();
            if (isInMaze(next) && isClear(next)) {
                candidates.add(next);
            }
        }

        if (!candidates.isEmpty()) {
            System.out.println("Ya lo tienes!");
        } else {
            System.out.println("Estás atrapado en el laberinto!");
        }
        imprimir();

        //restaurar el laberinto
        restaurar(savedMaze);
    }



};
