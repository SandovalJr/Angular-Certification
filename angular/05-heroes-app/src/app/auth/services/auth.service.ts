import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { AuthInterface } from '../interfaces/auth.interfaces';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private baseUrl: string = environment.baseUrl
  private _auth: AuthInterface | undefined

  get auth(): AuthInterface {
    // desestructurarlo para asegurar que no se va a cambiar de ninguna manera
    return { ...this._auth! }
  }

  constructor(private http: HttpClient) { }

  login() {
    return this.http.get<AuthInterface>(`${this.baseUrl}/usuarios/1`).pipe(
      tap(resp => this._auth = resp)
    )
  }


}
