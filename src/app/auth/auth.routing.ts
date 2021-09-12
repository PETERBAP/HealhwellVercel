import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { Register2Component } from './register2/register2.component';
import { Register3Component } from './register3/register3.component';
import { InformacionComponent } from './informacion/informacion.component';
import { PasswordComponent } from './password/password.component';
import { EquipoComponent } from './equipo/equipo.component';

const routes: Routes = [

    { path: 'register', component: RegisterComponent },
    { path: 'login', component: LoginComponent },
    { path: 'register2', component: Register2Component },
    { path: 'register3', component: Register3Component },
    { path: 'informacion', component: InformacionComponent },
    { path: 'recuperacion', component: PasswordComponent },
    { path: 'equipo', component: EquipoComponent },

];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class AuthRoutingModule {}
