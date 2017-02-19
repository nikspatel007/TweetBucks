import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRoute } from '@angular/router';
import { Auth } from 'app/auth.service';

@Injectable()
export class HomeGuard implements CanActivate {

    constructor(private auth: Auth, private router: ActivatedRoute ) { }

    canActivate() {
        if (!this.auth.authenticated()) {
            this.auth.login();
            return false;
        }
        return true;
    }
}