import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SignInComponent} from './components/sign-in/sign-in.component';
import { SignUpComponent} from './components/sign-up/sign-up.component';
import { FormComponent} from './components/form/form.component';
import { Form2Component } from './components/form2/form2.component';
import { ProfileComponent } from './components/profile/profile.component';
import { HeaderComponent } from './components/header/header.component';
import { AgendadasComponent } from './components/agendadas/agendadas.component';
import { TutoriasComponent } from './components/tutorias/tutorias.component';
import { AuthGuardService } from './services/auth-guard.service';


const routes: Routes = [
  {path: 'sign-in', component: SignInComponent},
  {path: 'sign-up', component: SignUpComponent},
  {path: 'form', component:FormComponent},
  {path: 'form2', component:Form2Component},
  {path: '', component: SignInComponent },
  {path: 'profile', component: ProfileComponent},
  {path: 'agendadas', component: AgendadasComponent},
  {path: 'tutorias', component:TutoriasComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
