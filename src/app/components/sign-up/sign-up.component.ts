import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import axios from "axios";
import {URL} from "../../url.constants";
import { User } from 'app/models/user';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {

  user: any = {};
  signUpForm: FormGroup;
  alert: string;
  submitted:boolean=false;
  success: boolean=false;

  constructor(private router: Router) { }

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
    if(this.signUpForm.valid){
      axios.post(URL, {
      header: ('Acces-Control-Allow-Origin'),
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
    alert("Registrado correctamente")
    this.router.navigate(['sign-in'])
   })
    .catch(err => console.log(err))
  }else{
    alert("Por favor complete los campos correctamente")
    
  }
    
}
}
