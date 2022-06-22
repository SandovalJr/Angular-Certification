import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, CanLoad, Route, RouterStateSnapshot, UrlSegment, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '../services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanLoad {
  constructor(private authService: AuthService) {

  }
  // canActivate(
  //   route: ActivatedRouteSnapshot,
  //   state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
  //   return true;
  // }

// prevenir que el usuario cargue el modulo
// si antes ya estaba cargado si puede ingresar
  canLoad(
    route: Route,
    segments: UrlSegment[]): Observable<boolean> | Promise<boolean> | boolean {


    if (this.authService.auth.id) {
      // console.log(this.authService.auth.id);
      return true
    }


    // console.log('canLoad', false);
    // console.log(route);
    // console.log(segments);
    console.log('Bloqueado por el authGuard');

    return false;
  }

}
