import { Product } from 'shared/models/product';
import { AngularFireDatabase } from '@angular/fire/database';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private db: AngularFireDatabase) { }

  create(product){
    return this.db.list('/products').push(product);
  }

  getAll(){
    return this.db.list('/products')
    .snapshotChanges()
    .pipe(map(items => {            // <== new way of chaining
      return items.map(a => {
        let data = a.payload.val();
        let product: Product = {
          key: a.payload.key,
          title: data['title'],
          price: data['price'],
          category: data['category'],
          imageUrl: data['imageUrl']
        }
        return product;
      });
    }));
  }

  get(productId){
    return this.db.object('/products/' + productId).valueChanges();
  }

  update(productId, product){
    return this.db.object('/products/' + productId).update(product);
  }

  delete(productId){
    return this.db.object('/products/' + productId).remove();
  }
}
