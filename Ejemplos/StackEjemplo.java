import java.util.Stack;

class StackEjemplo {
  public static void main(String[] args) {

    // Se crea un objeto de la clase 'Stack' llamada Tareas
    Stack<String> tareas= new Stack<>();

    // Agregando tareas con el metodo 'push'
    tareas.push("Limpiar cuarto");
    tareas.push("Vestirme");
    tareas.push("Hacer tarea");
    System.out.println("Lista de tareas: " + tareas + "\n");

    // Eliminando la primer tarea con el metodo 'pop'
    tareas.pop();
    System.out.println("Stack after pop: " + tareas);
    }
}