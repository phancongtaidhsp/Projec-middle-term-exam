import { UserService } from './user.service';
import { map, switchMap } from 'rxjs/operators';
import { CanActivate } from '@angular/router';
import { Injectable } from '@angular/core';
import { AuthService } from './auth.service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AdminAuthGuard implements CanActivate {

  constructor(private auth: AuthService, private userService: UserService) { }
  canActivate(): Observable<any>{
      return this.auth.appUser$.pipe(
          map(appUser => appUser.isAdmin)
      )
  }
}
