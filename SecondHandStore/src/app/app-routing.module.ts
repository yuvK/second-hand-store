import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductComponent } from './products/components/product/product.component';
import { ProductsListComponent } from './products/components/products-list/products-list.component';

const routes: Routes = [
{path:'', component:ProductsListComponent},
{path:'product/:id', component:ProductComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
