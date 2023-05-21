import { Pipe, PipeTransform } from '@angular/core';
import Product from './model/product.model';

@Pipe({
  name: 'sortProducts'
})
export class SortProductsPipe implements PipeTransform {

  transform(products: Product[], sortType: string, ascending: boolean): Product[] {
    if (sortType === 'price') {
      products.sort((a, b) => ascending ? a.price - b.price : b.price - a.price);
    } else if (sortType === 'publishDate') {
      products.sort((a, b) => ascending ? new Date(a.publishDate).getTime() - new Date(b.publishDate).getTime() : new Date(b.publishDate).getTime() - new Date(a.publishDate).getTime());
    }
    return products;
  }

}
