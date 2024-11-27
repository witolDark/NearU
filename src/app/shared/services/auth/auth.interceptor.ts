import {inject} from '@angular/core';
import {HttpInterceptorFn} from '@angular/common/http';
import {AuthService} from './auth.service';

export const AuthInterceptor: HttpInterceptorFn = (req, next) => {
  if (req.url.includes('login') || req.url.includes('refresh')) {
    return next(req);
  }

  return next(req);
}
