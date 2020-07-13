import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './Login/Login.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { ResetpasswordComponent } from './resetpassword/resetpassword.component';
import { RegistrationComponent } from './registration/registration.component';
import { ActivateAccountComponent } from './activate-account/activate-account.component';
import { ApiService } from './api.service';
import { SecurityGuard } from './security.guard';


const routes: Routes = [
  {
    path: '',
    component: LoginComponent,

  },
  {
    path: "home",
    component: HomeComponent,
    canActivate:[SecurityGuard]
  },
  {
    path: "forgot-password",
    component: ForgotPasswordComponent
  },
  {
    path: "login",
    component: LoginComponent
  },
  {
    path: "resetpassword",
    component: ResetpasswordComponent
  },
  {
    path: "registration",
    component: RegistrationComponent
  },
  {
    path: "activateaccount",
    component: ActivateAccountComponent
  },
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
