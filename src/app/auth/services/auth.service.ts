import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment.prod';
import { Auth } from '../interfaces/auth.interface';
import { map, tap } from 'rxjs/operators';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  
  private baseUrl:string = environment.baseUrl
  private _auth:Auth | undefined;


  get auth():Auth{
    return {...this._auth!}
  }

  constructor( private http: HttpClient) { }

  verificaAutenticacion(): Observable<boolean>{
     
    if( !localStorage.getItem('id') ){ 
      return of(false)  // of retorna un observable
    }

    return this.http.get<Auth>(`${ this.baseUrl }/usuarios/1`)
            .pipe(
              map( auth => {   //el map operator sireve para obtenrer lo que retorna el obsevabale y manipularlo
                  this._auth = auth
                return true
              })
            )
  

  }


  login(){
    return this.http.get<Auth>(`${this.baseUrl}/usuarios/1`)
            .pipe(
              tap( auth => this._auth = auth),
              tap( auth => localStorage.setItem('id', auth.id) )
            )

  }

  logout(){
    return this._auth = undefined 
  }


}
