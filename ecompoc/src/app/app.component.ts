import { Component } from '@angular/core';
import { AuthGuardService } from './auth-guard.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ecompoc';
  public wrongCredentials:Boolean = false;

  constructor(private authService :AuthGuardService ) {

   }

   ngOnInit() {

    this.wrongCredentials = this.authService.wrongAttempt;
  }

}
