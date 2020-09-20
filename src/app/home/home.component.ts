import { Component, OnInit } from '@angular/core';
import { User } from '../shared/model/user.model';
import { IUserService } from '../shared/service/i.user.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  public user: User;

  constructor(private userService: IUserService) { 
    this.user = new User();
  }

  ngOnInit() {
    this.userService.getUser().subscribe(data => {
       this.user = data;
    });
  }
}
