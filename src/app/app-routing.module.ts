import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// Modulos
import { PagesRoutingModule } from './pages/pages.routing';
import { AuthRoutingModule } from './auth/auth.routing';

import { NopagefoundComponent } from './nopagefound/nopagefound.component';
/*import { Nopagefound2Component } from './nopagefound2/nopagefound2.component';
import { Nopagefound3Component } from './nopagefound3/nopagefound3.component';
import { Nopagesfound3Component } from './nopagesfound3/nopagesfound3.component';
import { Nopagesfound4Component } from './nopagesfound4/nopagesfound4.component';
import { Nopagesfound5Component } from './nopagesfound5/nopagesfound5.component';*/


const routes: Routes = [

  // path: '/dashboard' PagesRouting
  // path: '/auth' AuthRouting
  // path: '/medicos' MedicosRouting
  // path: '/compras' ComprasRouting
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: '**', component: NopagefoundComponent },
  /*{ path: 'error2', component: Nopagefound2Component },
  { path: 'erro3', component: Nopagefound3Component },
  { path: 'error3', component: Nopagesfound3Component },
  { path: 'error4', component: Nopagesfound4Component },
  { path: 'error5', component: Nopagesfound5Component },*/

];



@NgModule({
  imports: [
    RouterModule.forRoot( routes ),
    PagesRoutingModule,
    AuthRoutingModule
  ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
