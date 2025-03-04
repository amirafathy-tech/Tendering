import { Injectable } from '@angular/core';
import {
  HttpInterceptor,
  HttpRequest,
  HttpHandler,
  HttpParams,
  HttpHeaders
} from '@angular/common/http';
import { take, exhaustMap } from 'rxjs/operators';

import { AuthService } from './auth.service';

@Injectable()

export class AuthInterceptorService implements HttpInterceptor {
  constructor(private authService: AuthService) {}

  intercept(req: HttpRequest<any>, next: HttpHandler) {
    return this.authService.loggedInUser.pipe(
      take(1),
      exhaustMap(user => {
        if (!user) {
          return next.handle(req);
        }
       // console.log('User found, adding token:', user.token);
        const modifiedReq = req.clone({
          //params: new HttpParams().set('token', user.token)
          headers:new HttpHeaders().set('Authorization',`Bearer ${user.token}`)
        });
        return next.handle(modifiedReq);
      })
    );
  }

  // login With AppRouter:
  // intercept(req: HttpRequest<any>, next: HttpHandler) {
  //   return this.authService.loggedInUserToken.pipe(
  //     take(1),
  //     exhaustMap(user => {
  //       if (!user || !user.token) {
  //         return next.handle(req); // Proceed without modification if no user
  //       }

  //       const modifiedReq = req.clone({
  //          setHeaders: { Authorization: `Bearer ${user.token}` }
  //         //setHeaders: { Authorization: `Bearer eyJhbGciOiJSUzI1NiIsImprdSI6Imh0dHBzOi8vZGV2c3RhZ2UuYXV0aGVudGljYXRpb24uZXUxMC5oYW5hLm9uZGVtYW5kLmNvbS90b2tlbl9rZXlzIiwia2lkIjoiZGVmYXVsdC1qd3Qta2V5LWFhMDA2MDAxYWUiLCJ0eXAiOiJKV1QiLCJqaWQiOiAicW1QTUl5REtZbUlXZWZiaWNsekFveW5MRmUrRFF1OEU3RjRSWWVLTjl6Zz0ifQ.eyJqdGkiOiIyNDlhZTE0MTY5Yzg0ZjRjYTA1YTRjNjZiMTVkM2NhNyIsImV4dF9hdHRyIjp7ImVuaGFuY2VyIjoiWFNVQUEiLCJzdWJhY2NvdW50aWQiOiJmZGQxMmNiNi05NzgyLTQyMzUtOTgyYy1jNzBlZjc1YjNhNzUiLCJ6ZG4iOiJkZXZzdGFnZSJ9LCJzdWIiOiJzYi1zZC1hcHAhdDUyNzU0OCIsImF1dGhvcml0aWVzIjpbInVhYS5yZXNvdXJjZSJdLCJzY29wZSI6WyJ1YWEucmVzb3VyY2UiXSwiY2xpZW50X2lkIjoic2Itc2QtYXBwIXQ1Mjc1NDgiLCJjaWQiOiJzYi1zZC1hcHAhdDUyNzU0OCIsImF6cCI6InNiLXNkLWFwcCF0NTI3NTQ4IiwiZ3JhbnRfdHlwZSI6ImNsaWVudF9jcmVkZW50aWFscyIsInJldl9zaWciOiIxYTNiNTU1YyIsImlhdCI6MTczOTE4MjU1MCwiZXhwIjoxNzM5MjI1NzUwLCJpc3MiOiJodHRwczovL2RldnN0YWdlLmF1dGhlbnRpY2F0aW9uLmV1MTAuaGFuYS5vbmRlbWFuZC5jb20vb2F1dGgvdG9rZW4iLCJ6aWQiOiJmZGQxMmNiNi05NzgyLTQyMzUtOTgyYy1jNzBlZjc1YjNhNzUiLCJhdWQiOlsidWFhIiwic2Itc2QtYXBwIXQ1Mjc1NDgiXX0.HhXYBv8F950vUd7wO-rsm_jiwDAKs8RjCB9-jZY8EPZeRqVYKHs3gHXe2KW5HNuaqLIans6-zqOZdy1jT6RfBdq_tLv-IQT1wYtzFrDfNRhvdQELFrVFrXn7X52YismkaYcZ6kp_ilBsYMc7X2J6on-EGFBf-DrkvH4yPNbRIT2X_M91A3G-C8rUBlTrZIzaCOuyb0rw0z2uDUZAWxV0yhv0LFcrErPi3vdhA50u4FNm4OFXfZBCR4wLIAc4sq8gMoYoKnnFInaaoUS9Ot9arwEiLfGxMGev5Omw9AsAQfkEi0mRTZ1xCl5p1rTr22zm3p8JF0dDqLCVSf0hlV9CEA` }
  //       });

  //       return next.handle(modifiedReq);
  //     })
  //   );
  // }
}