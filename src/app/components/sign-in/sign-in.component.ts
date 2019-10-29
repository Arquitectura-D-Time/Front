import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { User } from 'src/app/models/user';
import { Router } from '@angular/router';
import axios from "axios";

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit {

  user: any = {};
  signInForm: FormGroup;
  alert: string;
  constructor(private authService: AuthenticationService,
              private router: Router) { }

   ngOnInit() {
    this.user = new User();
    this.signInForm = new FormGroup({
      email: new FormControl(this.user.email, [Validators.email, Validators.required]),
      password: new FormControl(this.user.password, [Validators.required, Validators.minLength(6)]),
    });
  }

  onSubmit() {
    axios.post('http://146.148.107.218:5000/graphql?', {
      query: `mutation{
        createSession(session:{
          email:"${this.signInForm.value.email}"
          password:"${this.signInForm.value.password}"
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
