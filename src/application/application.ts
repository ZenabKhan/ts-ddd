import { Cart } from "../domain/cart";
import { Item } from "../domain/item";
import { Product } from "../domain/product";

export class Application {
    static main():void {
        const cart:Cart = new Cart();
        const product1:Product = new Product("Apple Pencil");
        const item1:Item = new Item(product1,  2);
        cart.add(item1);

        const product2:Product = new Product("Sony Headphones");
        const item2:Item = new Item(product2,  1);
        cart.add(item2);
        
        const item3:Item = new Item(product1,  1);
        cart.add(item3);
        
        console.log("----------------------------------------");
        console.log(`Cart = ${cart}`);
        const items:Array<Item> = cart.getItems();
        
        
        console.log("----------------------------------------");
        console.log(`items = ${items}`);
        console.log("----------------------------------------");

        cart.removeProduct(product1);
        console.log("------------------After remove product----------------------");
        console.log(`Cart = ${cart}`);
        console.log("---------------------------------------------------------");

        console.log("-----------------removed product names----------------------");
        console.log(cart.getRemovedProductNames());
        console.log("---------------------------------------------------------");
    }
}