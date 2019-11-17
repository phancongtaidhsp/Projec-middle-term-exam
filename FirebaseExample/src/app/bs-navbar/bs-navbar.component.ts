import { AppUser } from './../models/app-user';
import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { AuthService } from '../auth.service';

@Component({
  selector: 'bs-navbar',
  templateUrl: './bs-navbar.component.html',
  styleUrls: ['./bs-navbar.component.scss']
})
export class BsNavbarComponent {
  appUser: AppUser;
  
  constructor(private auth: AuthService) {
    auth.appUser$.subscribe(appUser => {
      this.appUser = appUser
    })
  }

  logout(){
    this.auth.logout();
  }
}
