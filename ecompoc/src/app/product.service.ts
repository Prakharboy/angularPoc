import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  public token;
  public fullToken;
 public productDao;

  public configUrl = 'http://localhost:8012/getProducts';
  constructor(private http: HttpClient) {
   }

 



    getProducts():Observable<any>
  {
  console.log("herejhj"+localStorage.getItem('token'));
    const header = {
        Authorization: 'Bearer ' + localStorage.getItem('token')
      };

    const httpOptions = {
        headers: header
      };

  return this.http.get(this.configUrl,httpOptions);
  
  }

  makeToken()
  {
    this.token=localStorage.getItem('token');
    this.fullToken="Bearer "+this.token;
    console.log(this.fullToken);
    var httpOptions = {
      headers:new HttpHeaders({
        Authorization:this.fullToken
      })
    }
    return httpOptions;
  }

  addProduct(name,type,price):Observable<any>
  {
  var httpOptions=this.makeToken();
  let url = "http://localhost:8012/addProduct";
  console.log(httpOptions);
  var productDao = {
  name:name,type:type,price:price
  };
    return this.http.post(url,productDao,httpOptions);
  }





}
