import { Observable } from "rxjs";
import { User } from '../model/user.model';

export abstract class IUserTransportService {
    public abstract sendUser(user: User): void;
    public abstract clearUser(): void;
    public abstract receiveUser(): Observable<User>;
    public abstract get(): Observable<User>;
    public abstract set(user: User): void;
}