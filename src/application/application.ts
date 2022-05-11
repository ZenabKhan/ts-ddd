import { Cart } from "../domain/cart";
import { Item } from "../domain/item";
import { Product } from "../domain/product";

export class Application {
    static main():void {
        const cart:Cart = new Cart();
        const product:Product = new Product("Apple Pencil");
        const item:Item = new Item(product,  2);

        cart.add(item);
        
        console.log("----------------------------------------");
        console.log(`Cart = ${cart}`);
        const items:Array<Item> = cart.getItems();
        
        
        console.log("----------------------------------------");
        console.log(`items = ${items}`);
        console.log("----------------------------------------");
    }
}