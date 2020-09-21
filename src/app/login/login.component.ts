import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Auth } from '../shared/model/auth.model';
import { Token } from '../shared/model/token.model';
import { ILoginService } from '../shared/service/i.login.service';
import { SimpleModalService } from '../shared/service/simple-modal.service';
import { User } from '../shared/model/user.model';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  public message: string;
  public authForm: FormGroup;
  public password: AbstractControl;
  public email: AbstractControl;
  public token: Token;
  public user: User;

  constructor(private router: Router, private authService: ILoginService,
    private modalService: SimpleModalService) {
    this.authForm = new FormGroup({
      email: new FormControl('', {
        validators: [Validators.required, Validators.email]
      }),
      password: new FormControl('', {
        validators: [Validators.required, Validators.minLength(4)]
      }),
    })
  }

  ngOnInit(): void {
    this.email = this.authForm.controls['email'];
    this.password = this.authForm.controls['password'];
    this.modalService.registerModal("bad-login");
  }

  login(authenticate: Auth) {
    this.authService.login(authenticate).subscribe(data => {
      this.token = data;
      this.authService.setToken(this.token);
      if (data == null) {
        this.modalService.open("bad-login");

      } else {
        this.router.navigate(['home']);
      }
    });
  }
}


