import java.util.LinkedList;

class LinkedListEjemplo {
  public static void main(String[] args) {
    LinkedList<String> lenguajes = new LinkedList<>();

    // Agregando elementos al LinkedList
    lenguajes.add("Java");
    lenguajes.add("Python");
    lenguajes.add("JavaScript");
    lenguajes.add("Kotlin");
    System.out.println("Lenguajes de programacion: " + lenguajes + "\n");
    
    // Removiendo el elemento numero 1
    String str = lenguajes.remove(1);
    System.out.println("Removed Element: " + str);

    System.out.println("Updated LinkedList: " + lenguajes);
  }
}