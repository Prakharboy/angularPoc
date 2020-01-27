import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { AuthGuardService } from './auth-guard.service';
import { BuyerComponent } from './buyer/buyer.component';
import { SellerComponent } from './seller/seller.component';



const routes: Routes = [  { path: 'buyer', component: BuyerComponent,canActivate:[AuthGuardService] },
{ path: 'seller', component: SellerComponent,canActivate:[AuthGuardService] },{path : '**',component :AppComponent}
];

@NgModule({ 
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
