import { ShoppingCartService } from 'shared/services/shopping-cart.service';
import { Component, Input } from '@angular/core';
import { Product } from 'shared/models/product';
import { ShoppingCart } from 'shared/models/shopping-cart';

@Component({
  selector: 'product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.scss']
})
export class ProductCardComponent {
  @Input('product') product: Product;
  @Input('show-actions') showActions = true;
  @Input('shopping-cart') shoppingCart: ShoppingCart;
  constructor(private cartService: ShoppingCartService) {
    
  }

  addToCart(){
    this.cartService.addToCart(this.product);
  }

  getQuantity(product: Product){
    if(!this.shoppingCart) return 0;
    let item = this.shoppingCart[this.product.key];
    return item ? item.quantity: 0;
  }
}
