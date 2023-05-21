import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import Product from '../model/product.model';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private url = "http://localhost:3000/products/"

  constructor(private httpClient: HttpClient) { }

  get() {
    return this.httpClient.get<Product[]>(this.url)
  }
  getById(id: number) {
    return this.httpClient.get<Product>(this.url + id)
  }
  post(product: Product): Observable<Product> {
    return this.httpClient.post<Product>(this.url, product);
  }

  put() {

  }
  delete(id: number): Observable<any> {
    return this.httpClient.delete(`${this.url}/${id}`);
  }
}
