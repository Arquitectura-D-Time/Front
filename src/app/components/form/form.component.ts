import { Component, OnInit } from '@angular/core';
import {FormBuilder,FormGroup,Validators, FormControl} from '@angular/forms';
import axios from "axios";

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  //tutorias: Observable<Tutoria[]>
  tutoForm: FormGroup;


  constructor(private formBuilder:FormBuilder) {
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
      axios.post('http://146.148.107.218:5000/graphql?', {
      query: `mutation{
        createTutoria(tutoria:{
          materia:"${this.tutoForm.value.materia}",
          descripcion:"${this.tutoForm.value.descripcion}",
          cupos:${this.tutoForm.value.cupos},
          idtutor:${this.tutoForm.value.idtutor},
          idtoken:"${this.tutoForm.value.idtoken}"
        }){
          id
        }  
      }`
   })
    .then(res => {
    console.log(res.data);
   })
    .catch(err => console.log(err))
  }
      
}
    


