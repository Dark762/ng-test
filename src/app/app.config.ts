import { ApplicationConfig, ErrorHandler, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';
import { routes } from './app.routes';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { AuthInterceptor } from './core/interceptors/auth.interceptor';
import { GlobalErrorHandlerService } from './core/services/global-error-handler.service';
import { httpErrorInterceptor } from './core/interceptors/http-error/http-error.interceptor';

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),
    { provide: ErrorHandler, useClass: GlobalErrorHandlerService },
    { provide: HTTP_INTERCEPTORS, useValue: AuthInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useValue: httpErrorInterceptor, multi: true }
  ]
};
