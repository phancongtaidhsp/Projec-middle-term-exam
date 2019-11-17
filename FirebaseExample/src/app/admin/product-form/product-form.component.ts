import { Component, OnInit } from '@angular/core';
import { CategoriesService } from 'src/app/categories.service';

@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.scss']
})
export class ProductFormComponent implements OnInit {
  categories$;

  constructor(categoryService: CategoriesService) {
    this.categories$ = categoryService.getCategories();
    
  }

  save(product){
    console.log(product);
  }

  ngOnInit() {
  }

}
