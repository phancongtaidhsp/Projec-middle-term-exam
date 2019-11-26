import { ShoppingCart } from 'shared/models/shopping-cart';
import { Subscription, Observable } from 'rxjs';
import { ShoppingCartService } from 'shared/services/shopping-cart.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-check-out',
  templateUrl: './check-out.component.html',
  styleUrls: ['./check-out.component.scss']
})
export class CheckOutComponent implements OnInit {

  cart$ : Observable<ShoppingCart>;
  subscription: Subscription;

  constructor(private shoppingCartService: ShoppingCartService) { }


  async ngOnInit() {
    this.cart$ = await this.shoppingCartService.getCart();    
  }

}
