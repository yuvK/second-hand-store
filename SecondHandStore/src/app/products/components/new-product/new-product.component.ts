import { Component } from '@angular/core';
import { Router } from '@angular/router';
import Product from '../../model/product.model';
import { ProductService } from '../../services/product.service';

@Component({
  selector: 'app-new-product',
  templateUrl: './new-product.component.html',
  styleUrls: ['./new-product.component.css']
})
export class NewProductComponent {

  product: Product = new Product();
  pictureFile: File | undefined;
  

  constructor(
    private productService: ProductService,
    private router: Router
  ) { }
  onSubmit() {
    if (!this.product.name) {
      console.log(this.product);
      return;
    }
    if (!this.pictureFile) {
      console.log('No picture selected');
      return;
    }
    const fileName = this.pictureFile.name;
    this.product.picture = `assets/images/${fileName}`;
    this.productService.post(this.product).subscribe(() => this.goBack());

    // const reader = new FileReader();
    // reader.readAsDataURL(this.pictureFile!)

    // reader.onload = () => {
    //   this.product.picture = reader.result as string;
    //   this.productService.post(this.product).subscribe(() => this.goBack());
    // }
  }
  onPictureSelected(event: Event) {
    const files = (event.target as HTMLInputElement).files;
    if (files && files.length > 0) {
      this.pictureFile = files[0];
    } else {
      this.pictureFile = undefined;
    }
  }
  goBack() {
    this.router.navigate(['/']);
  }
}