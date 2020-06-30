import { Injectable, Injector } from '@angular/core';
import { HttpInterceptor } from '@angular/common/http';
import { AuthService } from './auth.service';

@Injectable()
export class TokenInterceptorService implements HttpInterceptor{
  

  constructor(private injector: Injector) { }

  intercept(req, next){
    let authenService = this.injector.get(AuthService);
    let tokenizedReq = req.clone({

      setHeaders: {
        Authorization: `Bearer ${authenService.getTocken()}`
      }
    });
    return next.handle(tokenizedReq);
  }
  // intercept(req: import("@angular/common/http").HttpRequest<any>, next: import("@angular/common/http").HttpHandler): import("rxjs").Observable<import("@angular/common/http").HttpEvent<any>> {
  //     let tokenizedReq = req.clone({

  //     setHeaders: {
  //       Authorization: 'Bearer xx.yy.zz' 
  //     }
  //   })
  //   next.handle(tokenizedReq)
  //   // throw new Error("Method not implemented.");
  // }
}
