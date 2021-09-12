import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms'

// Modulos
import { SharedModule } from '../shared/shared.module';
import { ComponentsModule } from '../components/components.module';

import { DashboardComponent } from './dashboard/dashboard.component';
import { ProgressComponent } from './progress/progress.component';
import { Grafica1Component } from './grafica1/grafica1.component';
import { PagesComponent } from './pages.component';
import { AccountSettingsComponent } from './account-settings/account-settings.component';
import { PromesasComponent } from './promesas/promesas.component';
import { RxjsComponent } from './rxjs/rxjs.component';
import { NotasComponent } from './notas/notas.component';
import { RecetasComponent } from './recetas/recetas.component';
import { PerfilComponent } from './perfil/perfil.component';
import { DietasComponent } from './dietas/dietas.component';
import { ExpedienteComponent } from './expediente/expediente.component';
import { PacienteComponent } from './paciente/paciente.component';
import { CitasComponent } from './citas/citas.component';
import { PacientesComponent } from './pacientes/pacientes.component';
import { AdministrativoComponent } from './administrativo/administrativo.component';
import { RolesComponent } from './roles/roles.component';
import { UserbloquersComponent } from './userbloquers/userbloquers.component';
import { RegistroComponent } from './registro/registro.component';
import { HospitalesComponent } from './hospitales/hospitales.component';


@NgModule({
  declarations: [
    DashboardComponent,
    ProgressComponent,
    Grafica1Component,
    PagesComponent,
    AccountSettingsComponent,
    PromesasComponent,
    RxjsComponent,
    NotasComponent,
    RecetasComponent,
    PerfilComponent,
    DietasComponent,
    ExpedienteComponent,
    PacienteComponent,
    CitasComponent,
    PacientesComponent,
    AdministrativoComponent,
    RolesComponent,
    UserbloquersComponent,
    RegistroComponent,
    HospitalesComponent,
  ],
  exports: [
    DashboardComponent,
    ProgressComponent,
    Grafica1Component,
    PagesComponent,
    AccountSettingsComponent,
    NotasComponent,
    RecetasComponent,
    PerfilComponent,
    DietasComponent,
    ExpedienteComponent,
    PacienteComponent,
    CitasComponent,
    PacientesComponent,
    AdministrativoComponent,
    RegistroComponent,
    RolesComponent,
    HospitalesComponent,

  ],
  imports: [
    CommonModule,
    FormsModule,
    SharedModule,
    RouterModule,
    ComponentsModule
  ]
})
export class PagesModule { }
