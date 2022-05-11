import { expect } from 'chai';
import { Cart } from './cart';
import { Product } from './product';

describe('Cart: ', () => {
    it('should add product to cart', () => {
        const cart = new Cart();
        const product = new Product("Some test product");
        cart.add(product);

        const cartProducts = cart.getProducts();

        expect(cartProducts.length).eql(1);
        expect(cartProducts[0].getName()).eql("Some test product");
    });
});
