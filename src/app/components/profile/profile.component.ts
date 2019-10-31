import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  nombre = localStorage.getItem("name");
  nickname = localStorage.getItem("nickname");
  email = localStorage.getItem("email");
  image = localStorage.getItem("image");

}
