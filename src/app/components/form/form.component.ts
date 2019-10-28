import { Component, OnInit } from '@angular/core';
import { Apollo } from 'apollo-angular';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { Query, Tutoria, ALL_TUTORIAS } from '../../models/tutorias';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  tutorias: Observable<Tutoria[]>

  constructor(private apollo: Apollo) {}

  ngOnInit() {
    this.tutorias = this.apollo.watchQuery<Query>({ query: ALL_TUTORIAS}).valueChanges.pipe(map(result => result.data.allTutorias));
      
    };
    
  }

