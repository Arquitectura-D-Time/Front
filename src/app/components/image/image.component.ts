import { Component, OnInit } from '@angular/core';
import {FormBuilder,FormGroup,Validators, FormControl} from '@angular/forms';
import axios from "axios";
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-image',
  templateUrl: './image.component.html',
  styleUrls: ['./image.component.css']
})
export class ImageComponent implements OnInit {
  private urlapi = 'http://146.148.107.218:5006/image/'
  urlimage;
  id;

  constructor(private httpClient: HttpClient) {
    this.id = localStorage.getItem("id");
  }
 
 ngOnInit() {
  const url = this.urlapi + this.id;
  this.httpClient.get(url).toPromise().then(data =>   {
    console.log(data['urlimg'])
    this.urlimage= data['urlimg']
    localStorage.setItem('image', this.urlimage);
  })
   
  }
}