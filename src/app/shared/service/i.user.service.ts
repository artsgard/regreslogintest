import { Observable, of } from 'rxjs';
import { User } from '../model/user.model';

export abstract class IUserService {
    public abstract set(user);
    public abstract getUser(): Observable<User>;
}
