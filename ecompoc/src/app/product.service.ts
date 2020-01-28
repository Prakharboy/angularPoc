import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
 public productDao;

  public configUrl = 'http://localhost:8012/getProducts';
  constructor(private http: HttpClient) {
   }



    getProducts():Observable<any>
  {
  return this.http.get(this.configUrl);
  
  }

  addProduct(name,type,price):Observable<any>
  {
  this.productDao = {
  name:name,type:type,price:price
  };
    return this.http.post('http://localhost:8012/addProduct',this.productDao);
  }





}
