import { Component, OnInit } from '@angular/core';
import {FormBuilder,FormGroup,Validators, FormControl} from '@angular/forms';
import {URL3} from "../../url.constants";
import { HttpClient } from '@angular/common/http';
import { error } from 'util';


@Component({
  selector: 'app-image',
  templateUrl: './image.component.html',
  styleUrls: ['./image.component.css']
})
export class ImageComponent implements OnInit {
  private urlapi = URL3;
  urlimage;
  id=localStorage.getItem("id");

  constructor(private httpClient: HttpClient) {

  }
 
 ngOnInit() {
  const url = this.urlapi + this.id;
  console.log(url);
  
  this.httpClient.get(url).toPromise().then(data =>   {
    console.log(data['urlimg'])
    this.urlimage= data['urlimg']
    localStorage.setItem('image', this.urlimage);
  }).catch(Error=>{
    console.log(Error);
    
  })
   
  }
  clean(){
    localStorage.clear();
  }
}