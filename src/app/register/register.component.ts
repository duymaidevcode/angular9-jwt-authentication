import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { Register } from '../model/register';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  registerUserData;
  errorMessage ='';
  sucessMessage ='';
  successRegister: boolean = false;
  constructor(private _auth: AuthService) { }

  ngOnInit(): void {
    this.registerUserData = new Register('','','','');
  }

  registerUser(){
    this._auth.registerUser(this.registerUserData)
              .subscribe(
                res => {
                  this.sucessMessage = res.message;
                  this.successRegister = true;
                  console.log(res);
                }     
                ,
                err => {
                  this.errorMessage = err.error.message;
                  this.successRegister = false;
                  console.log(err);
                }
              );
  }
}
