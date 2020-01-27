import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-comp',
  templateUrl: './comp.component.html',
  styleUrls: ['./comp.component.css']
})
export class CompComponent implements OnInit {

  messagen:string="working fine";

  constructor() { }

  ngOnInit() {
    console.log("comp1 loaded");
  }

}
