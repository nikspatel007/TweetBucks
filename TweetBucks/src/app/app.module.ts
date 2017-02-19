import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router'
import 'rxjs/add/operator/toPromise';

import { HomeModule } from './home/home.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { LoginService } from './shared/services/login.service'
import { GlobalVariablesService } from './shared/services/global-variables.service'

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot([
      { path: '', component: AppComponent },
      { path: 'login', component : LoginComponent},
      { path: '**', redirectTo: '', pathMatch: 'full' }
    ]),
    HomeModule
  ],
  providers: [LoginService, GlobalVariablesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
