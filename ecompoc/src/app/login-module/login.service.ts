import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';



@Injectable({
  providedIn: 'root'
})
export class LoginService {
  public loginDao;
  public  canRoute:Boolean=false;

  public configUrl = 'http://localhost:8012/authenticate';
  constructor(private http: HttpClient) {
   }


  doLogin(id, password) :Observable<any>
  {
    this.canRoute=false;
  this.loginDao = {
username:id,
password : password
  };
    return this.http.post(this.configUrl,this.loginDao);
  }
}
