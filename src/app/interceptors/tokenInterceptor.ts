import { SessionService } from './../services/sessionService.service';
import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { UserAuthService } from '../services/UserAuthService';


@Injectable()
export class TokenInterceptor implements HttpInterceptor {

  constructor(private userAuthService:  UserAuthService ) {}

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

    request = request.clone({
      setHeaders: {
        Authorization: `Bearer ${this.userAuthService.getToken()}`
      }
    });

    return next.handle(request);
  }
}
