import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router'
import { CommonModule } from '@angular/common';
import { AUTH_PROVIDERS }      from 'angular2-jwt';
import { routing, appRoutingProviders } from 'app/app.routes';

import 'rxjs/add/operator/toPromise';

import { Auth } from 'app/auth.service';
import { HomeComponent } from './home.component';
import { TweetTextboxComponent} from './tweet-textbox/tweet-textbox.component'
import { HomeGuard } from './home.guard';

import { TwitterService } from './services/twitter.service';
import { TwitterFollowersComponent } from './twitter-followers/twitter-followers.component';
import { TwitterListComponent } from './twitter-list/twitter-list.component';

@NgModule({
  imports: [
    CommonModule,BrowserModule, FormsModule, HttpModule
    , RouterModule.forChild([
      { path: 'home', component: HomeComponent , canActivate : [HomeGuard]},
    ])
  ],
  providers: [ HomeGuard , TwitterService, appRoutingProviders,
    AUTH_PROVIDERS , Auth],
  declarations: [HomeComponent, TweetTextboxComponent, TwitterFollowersComponent, TwitterListComponent]
})
export class HomeModule { }
