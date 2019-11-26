import { CategoriesService } from 'shared/services/categories.service';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'product-filter',
  templateUrl: './product-filter.component.html',
  styleUrls: ['./product-filter.component.scss']
})
export class ProductFilterComponent implements OnInit {
  categories$;
  @Input('category') category;
  constructor(categoryService: CategoriesService) {
    this.categories$ = categoryService.getCategories();
  }

  ngOnInit() {
  }

}
