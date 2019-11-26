import { async } from '@angular/core/testing';
import { ShoppingCartService } from 'shared/services/shopping-cart.service';
import { AppUser } from 'shared/models/app-user';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { AuthService } from 'shared/services/auth.service';
import { ShoppingCart } from 'shared/models/shopping-cart';

@Component({
  selector: 'bs-navbar',
  templateUrl: './bs-navbar.component.html',
  styleUrls: ['./bs-navbar.component.scss']
})
export class BsNavbarComponent implements OnInit{
  appUser: AppUser;
  cart$: Observable<ShoppingCart>;
  shoppingCartItemCount: number;
  
  constructor(private auth: AuthService, private shoppingCartService: ShoppingCartService) {
  }
  async ngOnInit(){
    this.auth.appUser$.subscribe(appUser => {
      this.appUser = appUser
    });
    this.cart$ = await this.shoppingCartService.getCart();
    this.cart$.subscribe(cart => {
      
      this.shoppingCartItemCount = 0;
      for (let productId in cart.items){
        this.shoppingCartItemCount+=cart.items[productId].quantity;
      }
    })
  }

  logout(){
    this.auth.logout();
  }
}
