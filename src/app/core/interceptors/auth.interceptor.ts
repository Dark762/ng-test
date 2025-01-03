import { HttpInterceptorFn } from '@angular/common/http';
import { HttpRequest, HttpHandler, HttpEvent } from '@angular/common/http';
import { Observable } from 'rxjs';

export const AuthInterceptor: HttpInterceptorFn = (req, next) => {
  
  const clonedRequest = req.clone({
    setHeaders: {
      Authorization: 'Bearer my-auth-token' 
    }
  });

  
  return next(req);
};