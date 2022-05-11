import { Item } from "./item"
import { Product } from "./product";
export class Cart {
    private items: Array<Item> = [];

    add(item: Item): void {
        this.items.push(item);
    }

    getItems(): Array<Item> {
        return this.items;
    }

    toString():string {
        return `Cart{items=${this.items}}`;
    }

    removeItem(item: Item): void {
        const itemIndex: number  = this.items.indexOf(item);
        if (itemIndex !== -1) {
            delete this.items[itemIndex];
        }
    }

    removeProduct(product: Product): void {
        this.items.forEach((item: Item) => {
            if(item.getProduct().getName() === product.getName()){
                this.removeItem(item);
            }
        });
    }
}
