import { Component, OnInit } from '@angular/core';
import {FormBuilder,FormGroup,Validators, FormControl} from '@angular/forms';
import axios from "axios";
import { Router } from '@angular/router';

@Component({
  selector: 'app-form2',
  templateUrl: './form2.component.html',
  styleUrls: ['./form2.component.css']
})
export class Form2Component implements OnInit {

  horario: FormGroup;

  constructor(private formBuilder:FormBuilder,private router: Router) { 
    this.horario=this.formBuilder.group({
      NombreMateria: ['',Validators.required],
      Fecha: ['',Validators.required],
      HoraInicio: ['',Validators.required],
      HoraFinal: ['',Validators.required],
      Cupos:['',Validators.required],
    })
  }

  ngOnInit() {
  }

  onSubmit(){
    axios.post('http://146.148.107.218:5000/graphql?', {
    query: `mutation{
      createHorario(horario:{
        IDtutoria:${localStorage.getItem("idtutoria")},
        IDtutor:${localStorage.getItem("id")},
        NombreMateria:"${localStorage.getItem("materia")}",
        Fecha:"${this.horario.value.Fecha}",
        HoraInicio:"${this.horario.value.HoraInicio}",
        HoraFinal:"${this.horario.value.HoraFinal}",
        Cupos:${this.horario.value.Cupos}
      }){
        IDtutoria
        IDtutor
        NombreMateria
        Fecha
        HoraInicio
        HoraFinal
        Cupos
      }  
    }`
 })
  .then(res => {
  alert("Tutoria creada correctamente")
  this.router.navigate(['tutorias'])
 })
  .catch(err => console.log(err))
}

}
