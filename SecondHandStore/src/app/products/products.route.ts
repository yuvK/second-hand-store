import { Routes, RouterModule } from "@angular/router";
import { NewProductComponent } from "./components/new-product/new-product.component";
import { ProductComponent } from "./components/product/product.component";

const productRoutes: Routes = [
    { path: 'new-product', component: NewProductComponent },
    { path: 'product/:id', component: ProductComponent },
]

export const productRouting = RouterModule.forChild(productRoutes);