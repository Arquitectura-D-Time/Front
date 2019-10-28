import { Component, OnInit } from '@angular/core';
import {FormBuilder,FormGroup,Validators} from '@angular/forms';
import { Apollo } from 'apollo-angular';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { Query, Tutoria,CREATE_TUTORIA } from '../../models/tutorias';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  //tutorias: Observable<Tutoria[]>
  tutoForm: FormGroup;

  constructor(private apollo: Apollo,private formBuilder:FormBuilder) {
    this.tutoForm=this.formBuilder.group({
      materia: ['',Validators.required],
      descripcion: ['',Validators.required],
      cupos: ['',Validators.required],
      idtutor: ['',Validators.required],
      idtoken:['',Validators.required],
    })
  }

  ngOnInit() {
    //this.tutorias = this.apollo.watchQuery<Query>({ query: ALL_TUTORIAS}).valueChanges.pipe(map(result => result.data.allTutorias));
      
    };

    onSubmit(){
      this.apollo.mutate({
        mutation: CREATE_TUTORIA,
        variables: {
          materia: "Calculo",
          descripcion: "Basura",
          cupos: 120,
          idtutor: 2,
          idtoken:"saro"
        }
      }).subscribe(({ data }) => {
        console.log('got data', data);
      },(error) => {
        console.log('there was an error sending the query', error);
      });
    }
    
  }

