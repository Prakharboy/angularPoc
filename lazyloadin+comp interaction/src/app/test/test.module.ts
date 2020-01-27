import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';



@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ]
})
export class TestModule { 


  constructor(){

    console.log("module not lazy loaded");
  }
}
