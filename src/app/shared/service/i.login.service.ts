import { Observable } from "rxjs";
import { Auth } from '../model/auth.model';
import { Token } from '../model/token.model';

export abstract class ILoginService {
    public abstract login(auth: Auth): Observable<Token>;
    public abstract isAuth(): Observable<boolean>;
    public abstract setAuth(flag: boolean): void;
    public abstract setToken(token: Token): void;
    public abstract getToken(): Token;
}