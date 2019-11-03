import { Injectable } from '@angular/core';
import { Router, CanActivate } from '@angular/router';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService implements CanActivate{

  constructor(public auth: AuthService, public router: Router) { }

  async canActivate(){
    if (await this.auth.isAuthenticated()==false) {
      alert("Necesita estar autenticado para acceder a esta pagina")
      this.router.navigate(['sign-in']);
      return false;
    }
    return true;
  }
}
