import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';
import { AUTH_PROVIDERS }      from 'angular2-jwt';
import { routing, appRoutingProviders } from './app.routes';

import 'rxjs/add/operator/toPromise';

import { HomeModule } from './home/home.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent
  ],
  imports: [
    routing,
    BrowserModule,
    FormsModule,
    HttpModule,
    HomeModule
  ],
  providers: [ 
    appRoutingProviders,
    AUTH_PROVIDERS],
  bootstrap: [AppComponent]
})
export class AppModule { } 
