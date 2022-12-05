
/* Se importa java.util la cual tiene el metodo ArrayList*/
import java.util.*;
public class ArrayListEjemplo {
   public static void main(String args[]) {

    // Creo un ArrayList del tipo "String", en el cual solo pueden
    // ser agregados textos y letras
    
      ArrayList<String> alumnos = new ArrayList<String>();

      /*De esta manera se agregan elementos al Arreglo Lista*/
      alumnos.add("Eliam");
      alumnos.add("Alejandro");
      alumnos.add("Carmen");
      alumnos.add("Mauricio");
      alumnos.add("Pablo");

      // Un for para mostrar a todos los alumnos 
      System.out.println("Lista de alumnos:");
      for(String str:alumnos)
         System.out.println(str);
      System.out.println("");
   
    // Se pueden eliminar elementos con el metodo 'remove'
      alumnos.remove("Pablo"); // Quita a Pablo del ArrayList

      // Se vuelven a mostrar los alumnos para ver las modificaciones
      System.out.println("Lista de alumnos actualizada:");
      for(String str:alumnos)
         System.out.println(str);
   }
}