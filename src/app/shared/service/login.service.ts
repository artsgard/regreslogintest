import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, of } from 'rxjs';
import { Auth } from '../model/auth.model';
import { endpoints } from './endpoints';
import { ILoginService } from './i.login.service';
import { catchError, tap } from 'rxjs/operators';
import { Token } from '../model/token.model';

const { loginUrl } = endpoints;

@Injectable({ providedIn: 'root' })
export class LoginService implements ILoginService {

    private auth: boolean;
    private token: Token;

    constructor(private http: HttpClient, private router: Router) { }
    public setToken(token: Token): void {
        this.token = token;
    }
    public getToken(): Token {
        return this.token;
    }

    public isAuth(): Observable<boolean> {
        return of(this.auth);
      }

      public setAuth(flag: boolean): void {
        this.auth = flag;
      }

    public login(auth: Auth): Observable<Token> {
        return this.http.post(loginUrl, auth).pipe(
            tap(data => this.auth = true),
            catchError(err => {
                this.auth = false;
                return of(null);
            })
        );
    }
}
