import { AuthService } from './../auth.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { MustMatch } from '../mustMatchValidator';



@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  signup : FormGroup;

  constructor( private fb : FormBuilder, private AuthService: AuthService , private Router: Router) { }

  ngOnInit() {

     this.signup = this.fb.group({
      reg_logo : "",
      reg_username : "",
      reg_restname : "",
      reg_fname: "",
      reg_lname: "",
      reg_email : "", 
      reg_mobile: "",
      reg_password : ["", [Validators.required]],
      confrm_password : ""
    }, 
    {
      validator: MustMatch('reg_password', 'confrm_password')
    }
    );
  }



  onSubmit = function(signup: HTMLInputElement) { 
    alert("signup")
  } 

  

}
