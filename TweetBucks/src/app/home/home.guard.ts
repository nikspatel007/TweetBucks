import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router } from '@angular/router';
import { LoginService } from 'app/shared/services/login.service'

@Injectable()
export class HomeGuard implements CanActivate {

    constructor(private router : Router, private loginService : LoginService) {
    }

    canActivate(route: ActivatedRouteSnapshot): boolean {
        let bearerToken : string;
        this.loginService.authorize().subscribe(response => 
        {
            if(response === undefined || response == null)
            {
            this.router.navigate(['']);
                return false;
            }
        });
        return true;
    }
}
