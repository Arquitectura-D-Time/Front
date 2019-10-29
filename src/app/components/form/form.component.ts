import { Component, OnInit } from '@angular/core';
import {FormBuilder,FormGroup,Validators, FormControl} from '@angular/forms';
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
  tutoria: Tutoria;

  constructor(private apollo: Apollo,private formBuilder:FormBuilder) {
    this.tutoForm=this.formBuilder.group({
      materia:  new FormControl("Calculo", Validators.required),
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
      this.tutoria = this.tutoForm.value
      this.apollo.mutate({
        mutation: CREATE_TUTORIA,
        variables: {
          materia: this.tutoria.materia,
          descripcion: this.tutoria.descripcion,
          cupos: this.tutoria.cupos,
          idtutor: this.tutoria.idtutor,
          idtoken:this.tutoria.idtoken
        }
      }).subscribe(({ data }) => {
        console.log('got data', data);
      },(error) => {
        console.log('there was an error sending the query', error);
      });
    }
    
  }

