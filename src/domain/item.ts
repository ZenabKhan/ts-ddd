import { Product } from './product';

export class Item {
    private product: Product;
    private quantity: number;

    constructor(product: Product, quantity: number) {
        this.product = product;
        this.quantity = quantity;
    }

    getProduct(): Product {
        return this.product;
    }

    toString(): string {
        return `Item{product=${this.product}, quantity=${this.quantity}}`;
    }
}
