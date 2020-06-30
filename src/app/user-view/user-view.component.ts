import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-user-view',
  templateUrl: './user-view.component.html',
  styleUrls: ['./user-view.component.css']
})
export class UserViewComponent implements OnInit {
  serverMessage = '';
  constructor(private service: AuthService) { }

  ngOnInit(): void {
    this.service.getUserView()
            .subscribe(
              res => {
                this.serverMessage = res.message;
                console.log(res)
              },
              err => console.log(err)
            );
  }

}
