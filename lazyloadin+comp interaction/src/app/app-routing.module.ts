import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { CompComponent } from './comp/comp.component';
import { ComponeComponent } from './compone/compone.component';
import { AuthGuardService } from './auth-guard.service';
// import { Component1Component } from './lazyloadedmodule/component1/component1.component';


const routes: Routes = [  { path: 'comp2', component: ComponeComponent,canActivate:[AuthGuardService] },
{ path: 'comp1',      component: CompComponent },
{ path: 'comp3', loadChildren: () => import('./lazyloadedmodule/lazyloadedmodule.module').then(m => m.LazyloadedmoduleModule)  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
