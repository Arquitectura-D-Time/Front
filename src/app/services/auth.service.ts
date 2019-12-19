import { Injectable } from '@angular/core';
import axios from "axios";
import {URL} from "../url.constants";


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() {   }



  public  isAuthenticated(): Promise<boolean> {
    return new Promise(resolve => {
      setTimeout(() =>{

        const token = localStorage.getItem('token');
        const uid = localStorage.getItem('uid');
        const client = localStorage.getItem('client');
        if(token==null){
          resolve(false)
        }else{
         axios.post(URL, {
            query: `query{
              validateToken(headers: {
              token: "${token}"
              uid: "${uid}"
              client: "${client}"
              }) {
              name
              }
            }`
         })
          .then(res => {
            resolve(true)
         })
          .catch(err => console.log(err))
        }
      }); 
      setTimeout(() => resolve(false), 1000);
    });   
  }
}
