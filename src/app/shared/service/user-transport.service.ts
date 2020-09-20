 import { Injectable } from '@angular/core';
import { Observable, of, Subject } from 'rxjs';
import { User } from '../model/user.model';
import { IUserTransportService } from './i.user-transport.service';

@Injectable()
export class UserTransportService implements IUserTransportService {
    private user: User;
    private subject = new Subject<User>();
    public sendUser(user: User) {
        this.subject.next(user);
    }
    public clearUser() {
        this.subject.next();
    }
    public receiveUser(): Observable<User> {
        return this.subject.asObservable();
    }

    public get(): Observable<User> {
        return of(this.user);
    }

    public set(user) {
        this.user = user;
    }
}