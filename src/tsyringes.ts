import { Injectable } from "@angular/core";
import {singleton, scoped, Lifecycle, container} from 'tsyringe';
interface ProductModel {
    sku: string;
    name: string;
    price: number;
}

interface CartItem {
    product: ProductModel;
    quantity: number;
}
@singleton()
class CartService {
    cartServiceRandomId = Math.random();
    selectedProducts: CartItem[] = [];
    calculateTotal(): number {
        return this.selectedProducts.reduce(
        (total, item) => item.product.price * item.quantity + total,
        0
        ); 
        
//        return Math.random() * 100;
    }
    addToCart(): void {
        // logic here
    }
}
@scoped (Lifecycle.ResolutionScoped)
class ProductComponent {
    producComponentRandomId = Math.random();
    constructor(public cartService: CartService){

    }
}
function testContrainer(){
    console.log(container.resolve(ProductComponent))
}
testContrainer()
testContrainer()
testContrainer()
testContrainer()

class TestCartService {
    selectedProducts: CartItem[] = [];
    calculateTotal(): number {
        return this.selectedProducts.reduce(
            (total, item) => item.product.price * item.quantity + total,
            0
            ); 
    }
    addToCart(): void {
        // logic here
    }
}
function setupTestContainer(){
    container.register(CartService, {useClass: TestCartService})
}
setupTestContainer();
testContrainer();

