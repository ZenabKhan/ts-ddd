import { Product } from "./product"
export class Cart {
    private products: Array<Product> = [];

    add(product: Product): void {
        this.products.push(product);
    }

    getProducts(): Array<Product> {
        return this.products;
    }

    toString():string {
        return `Cart{products=${this.products}}`;
    }
}
