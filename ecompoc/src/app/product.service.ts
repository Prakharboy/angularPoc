import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  public configUrl = 'http://localhost:8012/getProduct';
  constructor(private http: HttpClient) {
   }

    getProuct():Observable<any>
  {
  return this.http.get(this.configUrl);
  
  }




}
