import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

import { PagesComponent } from './pages.component';
import { DashboardComponent } from './dashboard/dashboard.component';
//mport { ProgressComponent } from './progress/progress.component';
//import { Grafica1Component } from './grafica1/grafica1.component';
import { AccountSettingsComponent } from './account-settings/account-settings.component';
//import { PromesasComponent } from './promesas/promesas.component';
//import { RxjsComponent } from './rxjs/rxjs.component';
import { PerfilComponent } from './perfil/perfil.component';
import { RecetasComponent } from './recetas/recetas.component';
import { NotasComponent } from './notas/notas.component';
import { ExpedienteComponent } from './expediente/expediente.component';
import { DietasComponent } from './dietas/dietas.component';
import { CitasComponent } from './citas/citas.component';
import { PacienteComponent } from './paciente/paciente.component';
import { PacientesComponent } from './pacientes/pacientes.component';
import { AdministrativoComponent } from './administrativo/administrativo.component';
import { RegistroComponent } from './registro/registro.component';
//import { RolesComponent } from './roles/roles.component';
import { HospitalesComponent } from './hospitales/hospitales.component';

const routes: Routes = [
    {
        path: 'dashboard',
        component: PagesComponent,
        children: [
            { path: '', component: DashboardComponent, data: { titulo: 'Lista de pacientes' } },
           // { path: 'progress', component: ProgressComponent, data: { titulo: 'ProgressBar' }},
           // { path: 'grafica1', component: Grafica1Component, data: { titulo: 'Gráfica #1' }},
            { path: 'registro', component: AccountSettingsComponent, data: { titulo: 'Ajustes de cuenta' }},
            { path: 'perfil', component: PerfilComponent, data: { titulo: 'Perfil' }},
            { path: 'recetas', component: RecetasComponent, data: { titulo: 'Recetas' }},
            { path: 'notas', component: NotasComponent, data: { titulo: 'Notas' }},
            { path: 'dieta', component: DietasComponent, data: { titulo: 'Dieta' }},
            { path: 'expediente', component: ExpedienteComponent, data: { titulo: 'Expediente' }},
            { path: 'citas', component: CitasComponent, data: { titulo: 'Citas' }},
            { path: 'paciente', component: PacienteComponent, data: { titulo: 'Paciente' }},
            { path: 'pacientes', component: PacientesComponent, data: { titulo: 'Informacion del paciente' }},
            { path: 'administrativo', component:  AdministrativoComponent, data: { titulo: 'Admin' }},
            { path: 'usuarios', component: RegistroComponent, data: { titulo: 'Registro usuario' }},
            { path: 'hospitales', component: HospitalesComponent, data: { titulo: 'Hospitales registrados' }},

        ]
    },
];

@NgModule({
    imports: [ RouterModule.forChild(routes) ],
    exports: [ RouterModule ]
})
export class PagesRoutingModule {}


