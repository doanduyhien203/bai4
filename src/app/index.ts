import { Injectable } from "@angular/core";
interface ProductModel {
    sku: string;
    name: string;
    price: number;
}

interface CartItem {
    product: ProductModel;
    quantity: number;
}

interface ICartService {
    selectedProducts: CartItem[];
    calculateTotal(): number ;
    addToCart(): void;
}
@Injectable({
    providedIn: 'root',
    useClass: CartService
})
@Injectable()
export class CartService implements ICartService{
    selectedProducts: CartItem[] = [];
    calculateTotal(): number {
/*        return this.selectedProducts.reduce(
        (total, item) => item.product.price * item.quantity + total,
        0
        ); 
        */
        return Math.random() * 100;
    }
    addToCart(): void {
        // logic here
    }
}

class ProductComponent {
    constructor(public cartService: ICartService){

    }
}
const cartService = new CartService();
const productComponent = new ProductComponent(cartService);
console.log(productComponent);
class MockCartService implements ICartService{
    selectedProducts: CartItem[] = [];
    calculateTotal(): number{
        return 1;//mocked Data
    }
    addToCart(): void {
        // logic here mocked
    }
}
const mockCartService = new MockCartService();
const anotherProductComponentForTest = new ProductComponent(mockCartService);


