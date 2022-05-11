export class Product {
    private name: string;

    constructor(name: string) {
        this.name = name;
    }

    getName(): string {
        return this.name;
    }

    toString():string {
        return `Product{name='${this.name}'}`;
    }
}
