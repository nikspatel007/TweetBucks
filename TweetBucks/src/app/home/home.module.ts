import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router'
import { CommonModule } from '@angular/common';
import 'rxjs/add/operator/toPromise';

import { HomeComponent } from './home.component';
import { HomeGuard } from './home.guard';

import { GlobalVariablesService} from 'app/shared/services/global-variables.service';
import { TwitterUserService } from './services/twitter-user.service';

import { TweetTextboxComponent } from './tweet-textbox/tweet-textbox.component'

@NgModule({
  imports: [
    CommonModule,BrowserModule, FormsModule, HttpModule
    , RouterModule.forChild([
      { path: 'home', component: HomeComponent, canActivate : [HomeGuard] },
    ])
  ],
  declarations: [HomeComponent, TweetTextboxComponent],
  providers : [GlobalVariablesService , HomeGuard , TwitterUserService]
})
export class HomeModule { }
