import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router'
import { CommonModule } from '@angular/common';
import 'rxjs/add/operator/toPromise';

import { HomeComponent } from './home.component';

@NgModule({
  imports: [
    CommonModule,BrowserModule, FormsModule, HttpModule
    , RouterModule.forChild([
      { path: 'home', component: HomeComponent },
    ])
  ],
  declarations: [HomeComponent]
})
export class HomeModule { }
