import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Component1Component } from './component1/component1.component';
import { RouterModule } from '@angular/router';

import { routes } from './lazyloaded-routing.module';



@NgModule({
  declarations: [Component1Component],
  imports: [
    CommonModule,RouterModule.forChild(routes)
  ],
  exports :[Component1Component]
})
export class LazyloadedmoduleModule {
  constructor() {
    console.log('Lazily Loaded : LazyModule');
 }}
