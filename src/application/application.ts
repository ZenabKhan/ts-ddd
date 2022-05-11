import { Cart } from "../domain/cart";
import { Product } from "../domain/product";

export class Application {
    static main():void {
        const cart:Cart = new Cart();
        const product:Product = new Product("Apple Pencil");
        cart.add(product);
        cart.add(product);
        
        console.log(`Cart = ${cart}`);
        const products:Array<Product> = cart.getProducts();
        
        
        console.log("----------------------------------------");
        console.log(`products = ${products}`);
        console.log("----------------------------------------");
    }
}