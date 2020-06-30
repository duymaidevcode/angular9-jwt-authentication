import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';
import { Login } from '../model/Login';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginData;
  sucessLogin: boolean = true;
  errorMessage = '';
  sucessMessage = '';
  constructor(private _service : AuthService, private router: Router) { }

  ngOnInit(): void {
    this.loginData = new Login('','');
  }

  login(){
    console.log(this.loginData);
    this._service.login(this.loginData).subscribe(
      

      res => {
        this.sucessLogin = true;
        this.sucessMessage = res.token;
        localStorage.setItem('token',res.token);
        // localStorage.setItem('access-token',res.jwt);
        // localStorage.setItem('refresh-token',res.refresh_token);
        console.log(res);
        this.router.navigate(['/home']);
      },
      err => {
        this.sucessLogin = false;
        this.errorMessage = err.error.message;
        console.log(err)
      }
    );
  }

}
