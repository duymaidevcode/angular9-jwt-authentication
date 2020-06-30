import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-admin-view',
  templateUrl: './admin-view.component.html',
  styleUrls: ['./admin-view.component.css']
})
export class AdminViewComponent implements OnInit {
  serverMessage = '';
  constructor(private _service: AuthService, private _router: Router) { }

  ngOnInit(): void {
    this._service.getAdminView()
            .subscribe(
              res => {
                this.serverMessage = res.message ;
                console.log(res)
              },
              err =>{
                if(err instanceof HttpErrorResponse){
                  if(err.status === 401){
                    this._router.navigate(['/login']);
                  }
                  if(err.status === 403){
                    this.serverMessage = 'You have not granted to use this function!!!';
                  }
                }
              } 
            );
  }
  

}
