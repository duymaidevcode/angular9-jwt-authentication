import { Injectable } from '@angular/core';
import { CanActivate, Router} from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from './services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor( private _service: AuthService, private _router: Router){}

  canActivate(): boolean {
    if(this._service.loggedIn()){
      return true;
    }else{
      this._router.navigate(['/login']);
      return false;
    }
  }
  
}
