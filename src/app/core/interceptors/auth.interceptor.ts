import { HttpInterceptorFn } from '@angular/common/http';
import { HttpEvent } from '@angular/common/http';
import { tap } from 'rxjs';

export const AuthInterceptor: HttpInterceptorFn = (req, next) => {

  return next(req).pipe(
    tap((event: HttpEvent<any>) => {

      if (event.type === 4 && event.headers?.has('Authorization')) {
        const authHeader = event.headers.get('Authorization');
        if (authHeader) {

          localStorage.setItem('authToken', authHeader);
          console.log('Authorization token saved:', authHeader);
        }
      }
    })
  );
};