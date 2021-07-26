import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { MustMatch } from '../mustMatchValidator';
import { AuthService } from './../auth.service';



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;

  constructor(  private fb : FormBuilder, private AuthService: AuthService , private Router: Router) { }

  ngOnInit() {

    this.loginForm = this.fb.group({
      reg_email: "",
      reg_password : ""
    });
  }

}
