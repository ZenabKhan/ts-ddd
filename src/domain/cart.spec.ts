import { expect } from 'chai';
import { Cart } from './cart';
import { Item } from './item';
import { Product } from './product';

describe('Cart: ', () => {
    it('should add item to cart', () => {
        const cart = new Cart();
        const product = new Product("Some test product");
        const item = new Item(product, 1);
        cart.add(item);

        const cartItems = cart.getItems();

        expect(cartItems.length).eql(1);
    });
});
