import { Component, OnInit } from '@angular/core';
import axios from "axios";
import {URL} from "../../url.constants";

@Component({
  selector: 'app-tutorias',
  templateUrl: './tutorias.component.html',
  styleUrls: ['./tutorias.component.css']
})

export class TutoriasComponent implements OnInit {

  tutos=[]
  constructor() { }

  ngOnInit() {
    axios.post(URL, {
      query: `query{
          allHorarios{
            NombreMateria
            Fecha
            HoraInicio
            HoraFinal
            Cupos
        }
      }`
   })
    .then(res => {
      this.tutos = res.data.data.allHorarios   
   })
    .catch(err => console.log(err))
  }

  }


