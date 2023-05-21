import { Component, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import Product from '../../model/product.model';
import { ProductService } from '../../services/product.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent {
  product: Product | undefined;

  constructor(
    private route: ActivatedRoute,
    private productService: ProductService,
    private router: Router
  ) {
    this.route.params.subscribe(params => {
      const id = +params['id'];
      if (id) {
        this.productService.getById(id).subscribe(product => {
          this.product = product;
        });
      }
    });

  }

  buyProduct(product: Product) {
    if (this.product) {
      this.productService.delete(this.product.id).subscribe(() => {
        this.goBack();
      });
    }
  }

  goBack() {
    this.router.navigate(['/']);
  }
}
