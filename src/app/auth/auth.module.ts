import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { Register2Component } from './register2/register2.component';
import { Register3Component } from './register3/register3.component';
import { InformacionComponent } from './informacion/informacion.component';
import { PasswordComponent } from './password/password.component';
import { EquipoComponent } from './equipo/equipo.component';

@NgModule({
  declarations: [
    LoginComponent,
    RegisterComponent,
    Register2Component,
    Register3Component,
    InformacionComponent,
    PasswordComponent,
    EquipoComponent,
  ],
  exports: [
    LoginComponent,
    RegisterComponent,
    Register2Component,
    Register3Component,
    InformacionComponent,
    PasswordComponent,
    EquipoComponent,

  ],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule
  ]
})
export class AuthModule { }
