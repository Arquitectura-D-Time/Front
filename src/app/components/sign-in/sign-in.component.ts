import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import axios from "axios";
import {URL} from "../../url.constants";
import { User } from 'app/models/user';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit {

  user: any = {};
  signInForm: FormGroup;
  alert: string;  

  constructor(private router: Router) { }

   ngOnInit() {
    this.user = new User();
    this.signInForm = new FormGroup({
      email: new FormControl(this.user.email, [Validators.email, Validators.required]),
      password: new FormControl(this.user.password, [Validators.required, Validators.minLength(6)]),
    });
  }

  onSubmit() {
    axios.post(URL, {
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
    localStorage.setItem('id', res.data.data.createSession.id);
    localStorage.setItem('email', res.data.data.createSession.email);
    localStorage.setItem('name', res.data.data.createSession.name);
    localStorage.setItem('nickname', res.data.data.createSession.nickname);
    localStorage.setItem('token',res.data.data.createSession.token);
    localStorage.setItem('client',res.data.data.createSession.client);
    localStorage.setItem('uid',res.data.data.createSession.uid)
    this.router.navigate(['tutorias'])
   })
    .catch(err => console.log(err))    
  }
}

