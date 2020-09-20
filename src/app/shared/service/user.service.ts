import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, of } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';
import { User } from '../model/user.model';
import { endpoints } from './endpoints';
import { IUserService } from './i.user.service';

const { userUrl } = endpoints;

@Injectable()   //'Access-Control-Allow-Origin': '*', { providedIn: 'root' }
export class UserService implements IUserService {
  private user: User;

  constructor(private http: HttpClient, public router: Router) { 
    console.log('constructor called')
  }

  public set(user) {
    this.user = user;
  }

  public getUser(): Observable<User> {
    if (this.user) {
      return of(this.user)
    } else {
      return this.http.get<User>(userUrl)
        .pipe(
          tap(data => this.user = data),
          catchError(err => {
            alert("OH BOY WHERE ARE MY USERS");
            return of(null);
          })
        );
    }
  }
}