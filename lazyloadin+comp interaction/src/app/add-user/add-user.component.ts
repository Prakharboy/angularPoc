import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from './../app.state';
import { User } from './../models/user.model'
import * as UserActions from './../actions/user.actions';



@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})
export class AddUserComponent implements OnInit {

  constructor(private store: Store<AppState>) {}

  addUser(name, id) {
    this.store.dispatch(new UserActions.AddUser({name: name, id: id}) )
  }

  ngOnInit() {
  }

}
