import { Component, OnInit } from '@angular/core';

import {LoginService} from './../login.service'

import {Router} from  '@angular/router';

import { JwtHelperService } from '@auth0/angular-jwt';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public a :string;


  constructor(private loginService :LoginService,private router:Router) { }

  ngOnInit() {

  }

  doLogin(id,password)
  {

    this.loginService.doLogin(id,password).subscribe(data =>{
     const helper = new JwtHelperService();

const decodedToken = helper.decodeToken(data.token);
      if(decodedToken.authorities[0].authority==='ROLE_buyer')
      {
        this.loginService.canRoute=true;
        this.router.navigate(['buyer']);
      }
     else if(decodedToken.authorities[0].authority==="ROLE_seller")
      {
        this.loginService.canRoute=true;
        this.router.navigate(['seller']);
      }
      else
      {
        this.router.navigate(['home']);
        
      }
     

      console.log('received data is'+ decodedToken.authorities[0].authority);
    });
  }

}
