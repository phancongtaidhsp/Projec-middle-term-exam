import { LoginComponent } from './core/components/login/login.component';
import { ProductsComponent } from './shopping/components/products/products.component';
import { ShoppingModule } from './shopping/shopping.module';
import { CommonModule } from '@angular/common';

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AngularFireModule } from '@angular/fire'
import { environment } from '../environments/environment';
import { RouterModule, CanActivate } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { from } from 'rxjs';
import { AdminAuthGuard } from './admin/services/admin-auth-guard.service';
import { ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from 'shared/shared.module';
import { AdminModule } from './admin/admin.module';
import { CoreModule } from './core/core.module';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    CommonModule,
    ShoppingModule,
    BrowserModule,
    AdminModule,
    CoreModule,
    SharedModule,
    ShoppingModule,
    ReactiveFormsModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    RouterModule.forRoot([
      { path: '', component: ProductsComponent },
      { path: 'login', component: LoginComponent },
    ])
  ],
  providers: [ 
    AdminAuthGuard,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }