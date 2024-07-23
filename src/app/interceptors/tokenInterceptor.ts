import { inject } from '@angular/core';
import {
  HttpRequest,
  HttpHandlerFn
} from '@angular/common/http';
import { UserAuthService } from '../services/userAuthService';
import { ConfigAPI } from '../services/config';


export function tokenInterceptor(req: HttpRequest<unknown>, next: HttpHandlerFn) {
  // Inject the current `AuthService` and use it to get an authentication token:
  const authToken = inject(UserAuthService).getToken();
  // Clone the request to add the authentication header.
  
  if(req.url !== ConfigAPI.EXCHANGE){
    const newReq = req.clone({
      setHeaders: {
        Authorization: `Bearer ${authToken}`
      }
    });
    return next(newReq);

  }
  return next(req);
}
