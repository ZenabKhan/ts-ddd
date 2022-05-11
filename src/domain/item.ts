import { Product } from './product';

export class Item {
    private product: Product;
    private quantity: number;

    constructor(product: Product, quantity: number) {
        this.product = product;
        this.quantity = quantity;
    }

    toString(): string {
        return `Item{product=${this.product}, quantity=${this.quantity}}`;
    }
}
