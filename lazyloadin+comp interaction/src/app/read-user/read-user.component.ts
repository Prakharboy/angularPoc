import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from './../models/user.model';
import { AppState } from './../app.state';
import {select, Store} from '@ngrx/store';

@Component({
  selector: 'app-read-user',
  templateUrl: './read-user.component.html',
  styleUrls: ['./read-user.component.css']
})
export class ReadUserComponent implements OnInit {

    user$: Observable<User[]>;

    constructor(private store: Store< {user:User[]}>) { 
      this.user$ =  store.pipe(select('user'));
    }

    getStore()
    {
      this.user$ =  this.store.pipe(select('user'));
      console.log('got users'+this.user$)

    }

  ngOnInit() {


  }

}
