import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductComponent } from './components/product/product.component';
import { ProductsListComponent } from './components/products-list/products-list.component';
import { NewProductComponent } from './components/new-product/new-product.component';
import { productRouting } from './products.route';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { SortProductsPipe } from './sort-products.pipe';



@NgModule({
  declarations: [
    ProductComponent,
    ProductsListComponent,
    NewProductComponent,
    SortProductsPipe 
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    productRouting,
    FormsModule
  ]
})
export class ProductsModule { }
