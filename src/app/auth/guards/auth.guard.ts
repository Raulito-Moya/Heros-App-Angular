import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, CanLoad, Route, Router, RouterStateSnapshot, UrlSegment, UrlTree } from '@angular/router';
import { Observable, pipe } from 'rxjs';
import { AuthService } from '../services/auth.service';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements  CanLoad, CanActivate {

  constructor(private authService: AuthService, 
              private router: Router){}



  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
 
  //    if( this.authService.auth.id ){
//
  //      return true
  //    }
//
  //console.log('Bloqueado by AuthGuard -CanActivate');
  //  return false;

   /* return this.authService.verificaAutenticacion()
              .pipe(
                tap( estaAutenticado => {
                  if( !estaAutenticado ){
                     this.router.navigate(['./auth/login'])
                  }
                })
              )*/
              return true
  }
  canLoad(
    route: Route,
    segments: UrlSegment[]): Observable<boolean> | Promise<boolean> | boolean {
      
      return this.authService.verificaAutenticacion()
          .pipe(
            tap( estaAutenticado => {
              
              if( !estaAutenticado ){
                 this.router.navigate(['./auth/login'])
              }
            })
          )           
     
     /* console.log('canLoad',true);
      console.log(route);
      console.log(segments);*/
 
    /*  if( this.authService.auth.id ){

        return true
      }

      console.log('Bloqueado by AuthGuard -CanLoad');
    return false;*/
  }
  
}
