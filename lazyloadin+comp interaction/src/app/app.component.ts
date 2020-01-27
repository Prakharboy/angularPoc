import { Component ,ViewChild,AfterViewInit, OnInit} from '@angular/core';
import { CompComponent } from './comp/comp.component';
import { Router } from '@angular/router';
import { AuthGuardService } from './auth-guard.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements AfterViewInit,OnInit{
  title = 'poc';
  sendgreetingtochild:string="Data from Parent to child using input decorator";

  message:string;

  receiveMessage($event) {  
    this.message = $event
  }


  constructor(private router:Router,private authGuard:AuthGuardService) {
    console.log('normally loaded module')
   }
  
  @ViewChild(CompComponent,{static: false}) child;

  gotocomp2()
  {
    this.authGuard.canRoute=true;
    console.log("hello");
    this.router.navigate(['/comp2']);
  }


  message1:string;

  ngOnInit() {
    console.log("main loaded");
  }
  
  ngAfterViewInit() {
    this.message1 = this.child.messagen;
  }
}
