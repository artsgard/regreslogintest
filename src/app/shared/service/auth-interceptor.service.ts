import { Observable } from 'rxjs';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ILoginService } from './i.login.service';
import { Token } from '../model/token.model';



@Injectable()
export class AuthInterceptorService implements HttpInterceptor {

   constructor(private authService: ILoginService) { }

   intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
      // All HTTP requests are going to go through this method
      // We retrieve the token, if any
      const token: Token = this.authService.getToken();

      let newHeaders = req.headers;
      if (token) {
         // If we have a token, we append it to our new headers
         console.log('INTERCEPTOR with oauth object ' + JSON.stringify(token));
         newHeaders = new HttpHeaders({ "Authorization": "Bearer " + token.token })
         //newHeaders = new HttpHeaders({ 'Content-Type': 'application/json' })
         //.append("Authorization", "Bearer " + oauth.access_token)
      }
      // Finally we have to clone our request with our new headers
      // This is required because HttpRequests are immutable
      const authReq = req.clone({ headers: newHeaders });
      // Then we return an Observable that will run the request
      // or pass it to the next interceptor if any
      return next.handle(authReq);
      
   }
}