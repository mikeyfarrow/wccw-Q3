// Marty Stepp, CSE 142, Autumn 2008
// This program draws lines and boxes of stars.

public class Stars {
    public static void main(String[] args) {
        line(13);
        line(7);
        line(35);
        System.out.println();
        
        box(10, 6);
        box(5, 3);
        box(70, 20);        // would look better in a DrawingPanel window
        
        // draw 10x6 box
        /*
             **********
             *        *
             *        *
             *        *
             *        *
             **********
        */
    }
    
    public static void line(int number) {
        for (int star = 1; star <= number; star++) {
            System.out.print("*");
        }
        System.out.println();
    }
    
    public static void box(int width, int height) {
        line(width);
        for (int line = 1; line <= (height - 2); line++) {   // middle
            System.out.print("*");
            for (int space = 1; space <= (width - 2); space++) {
                System.out.print(" ");
            }
            System.out.println("*");
        }
        line(width);
    }
}