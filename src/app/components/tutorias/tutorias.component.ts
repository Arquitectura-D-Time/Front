import { Component, OnInit } from '@angular/core';
import axios from "axios";

@Component({
  selector: 'app-tutorias',
  templateUrl: './tutorias.component.html',
  styleUrls: ['./tutorias.component.css']
})

export class TutoriasComponent implements OnInit {

  tutos=[]
  constructor() { }

  ngOnInit() {
    axios.post('http://146.148.107.218:5000/graphql?', {
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


