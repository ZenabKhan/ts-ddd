import { Item } from "./item"
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
}
