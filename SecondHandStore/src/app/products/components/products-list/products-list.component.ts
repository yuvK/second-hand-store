import { Component } from '@angular/core';
import Product from '../../model/product.model';
import { ProductService } from '../../services/product.service';
import { Router } from '@angular/router';
import { SortProductsPipe } from '../../sort-products.pipe';

@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.css']
})
export class ProductsListComponent {

  products: Product[] = [];
  pipe = new SortProductsPipe();
  sortType: string = 'price';
  ascending: boolean = true;

  constructor(private productService: ProductService, private router: Router) {
    this.productService.get().subscribe(data => {
      this.products = data;
    });
  }
  deleteProduct(id: number) {
    this.productService.delete(id).subscribe(() => {
      this.products = this.products.filter(product => product.id !== id);
    });
  }
  // deleteProduct(id: number) {
  //   this.products = this.products.filter(product => product.id !== id);
  // }
  getProductDetails(id: number) {
    this.productService.getById(id).subscribe(product => {
      this.router.navigate(['/product', id]);
    });
  }
  sortProducts(sortType: string, ascending: boolean) {
    const pipe = new SortProductsPipe();
    this.products = pipe.transform(this.products, sortType, ascending);
  }
  toggleSortDirection() {
    this.ascending = !this.ascending;
  }
}
