import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { GraphQLModule } from './graphql.module';
import { SignInComponent } from './components/sign-in/sign-in.component';
import { ApolloModule } from "apollo-angular";
import { HttpLinkModule } from "apollo-angular-link-http";
import { SignUpComponent } from './components/sign-up/sign-up.component';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormComponent } from './components/form/form.component';
import { HttpClientModule } from '@angular/common/http';
import { HeaderComponent } from './components/header/header.component';
import { Form2Component } from './components/form2/form2.component';
import { JwtModule } from "@auth0/angular-jwt";
import { ProfileComponent } from './components/profile/profile.component';
import { ImageComponent } from './components/image/image.component';
import { AgendadasComponent } from './components/agendadas/agendadas.component';
import { TutoriasComponent } from './components/tutorias/tutorias.component';

export function tokenGetter() {
  return localStorage.getItem("token");
}

@NgModule({
  declarations: [
    AppComponent,
    SignInComponent,
    FormComponent,
    HeaderComponent,
    SignUpComponent,
    Form2Component,
    ProfileComponent,
    ImageComponent,
    AgendadasComponent,
    TutoriasComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    GraphQLModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    ApolloModule,
    HttpLinkModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    JwtModule.forRoot({
      config: {
        tokenGetter: tokenGetter,
        whitelistedDomains: ["*"],
      }
    })
  ],
  providers: [
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
