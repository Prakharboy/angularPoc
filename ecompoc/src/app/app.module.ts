import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login-module/login/login.component';
import { LoginModuleModule } from './login-module/login-module.module';
import { BuyerComponent } from './buyer/buyer.component';
import { SellerComponent } from './seller/seller.component';
import { AuthGuardService } from './auth-guard.service';
import { StoreModule } from '@ngrx/store';
import { reducer } from './reducers/product.reducer';
import { FlexLayoutModule } from "@angular/flex-layout";
import {MatTableModule} from '@angular/material'
import {MatSortModule} from '@angular/material'
import {MatPaginatorModule} from '@angular/material'
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { MatFormFieldModule, MatInputModule } from '@angular/material';
import { FormsModule } from '@angular/forms';




import {
  MatButtonModule,
  MatMenuModule,
  MatToolbarModule,
  MatIconModule,
  MatCardModule
} from '@angular/material';


@NgModule({
  declarations: [
    AppComponent,
    BuyerComponent,
    SellerComponent,
  ],
  imports: [
    BrowserModule,
    FlexLayoutModule,
    MatButtonModule,
    MatFormFieldModule,
    MatMenuModule,
    MatToolbarModule,
    MatIconModule,
    MatCardModule,
    FormsModule,
    MatTableModule,
    MatSortModule,
    MatPaginatorModule,
    BrowserAnimationsModule,
    MatInputModule,
    AppRoutingModule,
    LoginModuleModule,
    StoreModule.forRoot({
      product : reducer
    })
  ],  exports: [
    MatButtonModule,
    MatMenuModule,
    MatToolbarModule,
    MatIconModule,
    MatCardModule
  ],
  providers: [AuthGuardService],
  bootstrap: [AppComponent]
})
export class AppModule { }
