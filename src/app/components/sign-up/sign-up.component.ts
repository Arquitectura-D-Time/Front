import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { User } from 'src/app/models/user';
import { Router } from '@angular/router';
import axios from "axios";

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {

  user: any = {};
  signUpForm: FormGroup;
  alert: string;
  constructor(private authService: AuthenticationService,
              private router: Router) { }

  ngOnInit() {
    this.user = new User();
    this.signUpForm = new FormGroup({
      name: new FormControl(this.user.name),
      nickname: new FormControl(this.user.email),
      email: new FormControl(this.user.email, [Validators.email, Validators.required]),
      password: new FormControl(this.user.password, [Validators.required, Validators.minLength(6)]),
      password_confirmation: new FormControl(this.user.password_confirmation, [Validators.required, Validators.minLength(6)]),
    });
  }

  onSubmit() {
    axios.post('http://146.148.107.218:5000/graphql?', {
      query: `mutation{
        createUser(user:{
          name:"${this.signUpForm.value.name}"
          nickname:"${this.signUpForm.value.nickname}"
          email:"${this.signUpForm.value.email}"
          password:"${this.signUpForm.value.password}"
          password_confirmation:"${this.signUpForm.value.password_confirmation}"
        }){
          id
          email
	        name
	        nickname
	        token
	        type
	        client
          uid
        }
          
      }`
   })
    .then(res => {
    console.log(res.data);
   })
    .catch(err => console.log(err))
  }

}
