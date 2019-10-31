import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SignInComponent} from './components/sign-in/sign-in.component';
import { SignUpComponent} from './components/sign-up/sign-up.component';
import { FormComponent} from './components/form/form.component';
import { ProfileComponent } from './components/profile/profile.component';
import { HeaderComponent } from './components/header/header.component';

const routes: Routes = [
  {path: 'sign-in', component: SignInComponent},
  {path: 'sign-up', component: SignUpComponent},
  {path: 'form', component:FormComponent},
  {path: '', component: SignInComponent},
  {path: 'header', component: HeaderComponent},
  {path: 'profile', component: ProfileComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
