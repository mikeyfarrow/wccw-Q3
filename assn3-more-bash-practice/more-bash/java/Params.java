public class Params {
    public static void main(String[] args) {
        chant(3);
        chant(4.75);
    }
    
    public static void chant(double times) {
        for (int i = 1; i <= times; i++) {
            System.out.println("Just a salad...");
        }
    }
}